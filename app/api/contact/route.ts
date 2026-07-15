import { Resend } from "resend";
import { CONTACT } from "@/lib/contact";
import {
  COMPANY_SIZE_LABELS,
  CONTACT_POLE_VALUES,
  CONTACT_REASON_VALUES,
  EMAIL_RE,
  MAX_LEN,
  POLE_LABELS,
  REASON_LABELS,
  TIMELINE_LABELS,
  type CompanySizeValue,
  type ContactFormPayload,
  type ContactFormResponse,
  type ContactPoleChoice,
  type ContactReasonValue,
  type TimelineValue,
} from "@/lib/contact-form";

/**
 * Destinataire des notifications de formulaire.
 *
 * ⚠️ Tant que le domaine n'est pas vérifié chez Resend, l'expéditeur est
 * forcément `onboarding@resend.dev`, et Resend n'autorise l'envoi QUE vers
 * l'adresse du propriétaire du compte Resend. CONTACT_FORM_TO doit donc être
 * exactement cette adresse, sinon l'API renvoie une erreur 403.
 * Après vérification du domaine, ces deux variables peuvent pointer vers
 * n'importe quelle adresse @ovedex.com.
 */
const TO = process.env.CONTACT_FORM_TO?.trim() || CONTACT.email;
const FROM = process.env.CONTACT_FORM_FROM?.trim() || "Ovedex <onboarding@resend.dev>";

function clean(value: unknown, max: number = MAX_LEN.short): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(body: ContactFormResponse, status: number): Response {
  return Response.json(body, { status });
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY manquante");
    return json({ ok: false, error: "server_not_configured" }, 500);
  }

  let payload: ContactFormPayload;
  try {
    payload = (await request.json()) as ContactFormPayload;
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Piège à robots : on renvoie un succès pour ne pas leur signaler la détection.
  if (clean(payload.honeypot)) return json({ ok: true }, 200);

  const email = clean(payload.email);
  if (!EMAIL_RE.test(email)) return json({ ok: false, error: "invalid_email" }, 400);

  let subject: string;
  let rows: [string, string][];

  if (payload.form === "newsletter") {
    subject = `Newsletter — nouvelle inscription (${email})`;
    rows = [["E-mail", email]];
  } else {
    const firstName = clean(payload.firstName);
    const lastName = clean(payload.lastName);
    const company = clean(payload.company);
    const jobTitle = clean(payload.jobTitle);
    const phone = clean(payload.phone);
    const message = clean(payload.message, MAX_LEN.message);

    const pole = clean(payload.pole) as ContactPoleChoice;
    const reason = clean(payload.reason) as ContactReasonValue;
    const companySize = clean(payload.companySize) as CompanySizeValue;
    const timeline = clean(payload.timeline) as TimelineValue;

    const missing =
      firstName.length < 2 ||
      lastName.length < 2 ||
      company.length < 2 ||
      jobTitle.length < 2 ||
      !phone ||
      message.length < 20 ||
      !CONTACT_POLE_VALUES.includes(pole) ||
      !CONTACT_REASON_VALUES.includes(reason);
    if (missing) return json({ ok: false, error: "invalid_fields" }, 400);

    subject = `Contact site — ${company} — ${POLE_LABELS[pole]}`;
    rows = [
      ["Identité", `${firstName} ${lastName}`],
      ["Société", company],
      ["Fonction", jobTitle],
      ["E-mail", email],
      ["Téléphone", phone],
      ["Pôle / périmètre", POLE_LABELS[pole]],
      ["Motif", REASON_LABELS[reason]],
    ];
    if (companySize && COMPANY_SIZE_LABELS[companySize]) {
      rows.push(["Effectif", COMPANY_SIZE_LABELS[companySize]]);
    }
    if (timeline && TIMELINE_LABELS[timeline]) {
      rows.push(["Délai souhaité", TIMELINE_LABELS[timeline]]);
    }
    const productScope = clean(payload.productScope);
    if (productScope) rows.push(["Produit / périmètre", productScope]);
    rows.push(["Message", message]);
  }

  const text = rows.map(([label, value]) => `${label} : ${value}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="color:#6b7280;vertical-align:top;white-space:nowrap">${escapeHtml(
          label,
        )}</td><td style="color:#0d0b4a;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("[contact] Resend a refusé l'envoi :", error);
      return json({ ok: false, error: "send_failed" }, 502);
    }
    return json({ ok: true }, 200);
  } catch (err) {
    console.error("[contact] Erreur inattendue :", err);
    return json({ ok: false, error: "send_failed" }, 502);
  }
}
