"use client";

import { CONTACT } from "@/lib/contact";
import type { PoleId } from "@/lib/brand-design-system";
import { POLE_ORDER, POLE_THEMES } from "@/lib/brand-design-system";
import { useCallback, useId, useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const INPUT =
  "block w-full max-w-60 align-middle border border-stone-300 bg-slate-800/5 px-3 py-2 text-[15px] font-light text-indigo-950 [border-style:#000] placeholder:text-indigo-950 focus:border-blue-500 focus:outline-0 sm:max-w-none sm:h-12 sm:text-base h-11 mb-1.5 rounded-xl";
const TEXTAREA =
  "block w-full max-w-60 align-middle border border-stone-300 bg-slate-800/5 px-3 pb-2 pt-3 text-[15px] font-light text-indigo-950 [border-style:#000] placeholder:text-indigo-950 focus:border-blue-500 focus:outline-0 sm:max-w-none sm:h-32 sm:text-base min-h-[6.5rem] h-28 mb-1.5 rounded-xl";
const LABEL = "mb-0.5 block font-sans text-xs font-medium text-indigo-950";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPoleChoice = PoleId | "multi" | "unknown";

export const CONTACT_REASON_VALUES = [
  "commercial",
  "demo",
  "project",
  "support",
  "partner",
  "other",
] as const;
export type ContactReasonValue = (typeof CONTACT_REASON_VALUES)[number];

const REASON_LABELS: Record<ContactReasonValue, string> = {
  commercial: "Information commerciale / cadrage",
  demo: "Demande de démonstration",
  project: "Projet en cours ou appel d’offres",
  support: "Support (client existant)",
  partner: "Partenariat / intégration",
  other: "Autre",
};

const POLE_EXTRA_LABELS: Record<"multi" | "unknown", string> = {
  multi: "Transversal / plusieurs pôles",
  unknown: "Je ne sais pas encore",
};

const COMPANY_SIZE_VALUES = ["", "1-10", "11-50", "51-200", "200+"] as const;
const COMPANY_SIZE_LABELS: Record<string, string> = {
  "": "—",
  "1-10": "1 — 10",
  "11-50": "11 — 50",
  "51-200": "51 — 200",
  "200+": "200+",
};

const TIMELINE_VALUES = ["", "urgent", "1m", "3m", "6m", "explore"] as const;
const TIMELINE_LABELS: Record<string, string> = {
  "": "—",
  urgent: "Urgent (moins de 2 semaines)",
  "1m": "Sous 1 mois",
  "3m": "1 à 3 mois",
  "6m": "3 à 6 mois",
  explore: "Veille / exploration",
};

export interface B2bContactFieldErrors {
  firstName?: string;
  lastName?: string;
  company?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  pole?: string;
  reason?: string;
  message?: string;
}

function poleLabel(value: string): string {
  if (value === "multi" || value === "unknown") return POLE_EXTRA_LABELS[value];
  if (value === "digital" || value === "solutions" || value === "it") return POLE_THEMES[value].label;
  return value;
}

function reasonLabel(value: string): string {
  return REASON_LABELS[value as ContactReasonValue] ?? value;
}

export function B2bContactForm() {
  const uid = useId();
  const formName = `b2b-contact-${uid}`;
  const searchParams = useSearchParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pole, setPole] = useState<ContactPoleChoice | "">("");
  const [reason, setReason] = useState<ContactReasonValue | "">("");

  useEffect(() => {
    const r = searchParams.get("raison");
    if (r && CONTACT_REASON_VALUES.includes(r as ContactReasonValue)) {
      setReason(r as ContactReasonValue);
    }
  }, [searchParams]);
  const [productScope, setProductScope] = useState("");
  const [companySize, setCompanySize] = useState<(typeof COMPANY_SIZE_VALUES)[number]>("");
  const [timeline, setTimeline] = useState<(typeof TIMELINE_VALUES)[number]>("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = useCallback((): B2bContactFieldErrors => {
    const e: B2bContactFieldErrors = {};
    if (firstName.trim().length < 2) e.firstName = "Indiquez votre prénom.";
    if (lastName.trim().length < 2) e.lastName = "Indiquez votre nom.";
    if (company.trim().length < 2) e.company = "Indiquez la raison sociale ou le nom légal.";
    if (jobTitle.trim().length < 2) e.jobTitle = "Indiquez votre fonction.";
    if (!email.trim()) e.email = "L’adresse e-mail est obligatoire.";
    else if (!EMAIL_RE.test(email.trim())) e.email = "Format d’e-mail invalide.";
    if (!phone.trim()) e.phone = "Le téléphone direct est obligatoire.";
    if (!pole) e.pole = "Choisissez le pôle concerné.";
    if (!reason) e.reason = "Précisez le motif du contact.";
    if (!message.trim()) e.message = "Décrivez votre besoin.";
    else if (message.trim().length < 20) e.message = "Merci d’apporter un peu plus de contexte (20 caractères min.).";
    return e;
  }, [firstName, lastName, company, jobTitle, email, phone, pole, reason, message]);

  const errors = submitted ? validate() : {};
  const showErr = (k: keyof B2bContactFieldErrors) => Boolean(errors[k] && (touched[k as string] || submitted));

  const submit = useCallback(
    (ev: FormEvent) => {
      ev.preventDefault();
      if (honeypot.trim()) return;
      setSubmitted(true);
      const e = validate();
      if (Object.keys(e).length > 0) {
        setSuccess(false);
        const order: (keyof B2bContactFieldErrors)[] = [
          "firstName",
          "lastName",
          "company",
          "jobTitle",
          "email",
          "phone",
          "pole",
          "reason",
          "message",
        ];
        const first = order.find((k) => e[k]);
        requestAnimationFrame(() => {
          const map: Record<string, string> = {
            firstName: `${uid}-firstName`,
            lastName: `${uid}-lastName`,
            company: `${uid}-company`,
            jobTitle: `${uid}-jobTitle`,
            email: `${uid}-email`,
            phone: `${uid}-phone`,
            pole: `${uid}-pole`,
            reason: `${uid}-reason`,
            message: `${uid}-message`,
          };
          const id = first ? map[first] : undefined;
          if (id) document.getElementById(id)?.focus();
        });
        return;
      }
      const subject = encodeURIComponent(`Contact B2B site — ${company.trim()} — ${poleLabel(String(pole))}`);
      const lines = [
        `Identité : ${firstName.trim()} ${lastName.trim()}`,
        `Société : ${company.trim()}`,
        `Fonction : ${jobTitle.trim()}`,
        `E-mail : ${email.trim()}`,
        `Téléphone : ${phone.trim()}`,
        `Pôle / périmètre : ${poleLabel(String(pole))}`,
        `Motif : ${reasonLabel(String(reason))}`,
        companySize ? `Effectif (fourchette) : ${COMPANY_SIZE_LABELS[companySize] ?? companySize}` : null,
        timeline ? `Délai souhaité : ${TIMELINE_LABELS[timeline] ?? timeline}` : null,
        productScope.trim() ? `Produit / périmètre : ${productScope.trim()}` : null,
        "",
        "Message :",
        message.trim(),
      ].filter(Boolean) as string[];
      const body = encodeURIComponent(lines.join("\n"));
      setSuccess(true);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    },
    [validate, honeypot, uid, firstName, lastName, company, jobTitle, email, phone, pole, reason, companySize, timeline, productScope, message],
  );

  return (
    <div className="w-full max-w-none rounded-2xl bg-white p-5 shadow-sm shadow-black/5 sm:max-w-xl sm:rounded-3xl sm:p-6 lg:p-7">
      <div className="flex-col items-stretch">
        {success ? (
          <div className="text-center mt-4 mb-5" tabIndex={-1} role="region" aria-label="Email Form success">
            <div className="flex-col justify-center items-center flex p-10">
              <div className="font-sans text-lg font-light">Merci ! Nous avons bien reçu votre message</div>
              <p className="mt-4 font-sans text-sm font-light text-indigo-950/90">
                Votre messagerie devrait s’ouvrir avec le message prérempli. Si rien ne s’affiche, vérifiez qu’un
                client mail est configuré ou utilisez les liens à gauche.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-purple-400 px-6 font-sans text-lg font-light text-white"
                onClick={() => {
                  setSuccess(false);
                  setSubmitted(false);
                  setFirstName("");
                  setLastName("");
                  setCompany("");
                  setJobTitle("");
                  setEmail("");
                  setPhone("");
                  setPole("");
                  setReason("");
                  setProductScope("");
                  setCompanySize("");
                  setTimeline("");
                  setMessage("");
                  setHoneypot("");
                  setTouched({});
                }}
              >
                Nouveau message
              </button>
            </div>
          </div>
        ) : null}

        {!success ? (
          <form
            id={formName}
            name={formName}
            method="get"
            className="grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-3.5"
            aria-label="Email Form"
            onSubmit={submit}
            noValidate
          >
            <div className="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 md:gap-x-4">
              <div className="w-full relative">
                <label htmlFor={`${uid}-firstName`} className={LABEL}>
                  Prénom <span className="text-red-600">*</span>
                </label>
                <input
                  id={`${uid}-firstName`}
                  className={INPUT}
                  maxLength={256}
                  name="Prenom"
                  placeholder="Prénom *"
                  type="text"
                  required
                  value={firstName}
                  onChange={(ev) => setFirstName(ev.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                  aria-invalid={showErr("firstName") || undefined}
                  aria-describedby={showErr("firstName") ? `${uid}-err-firstName` : undefined}
                />
                {showErr("firstName") ? (
                  <p id={`${uid}-err-firstName`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.firstName}
                  </p>
                ) : null}
              </div>
              <div className="w-full relative">
                <label htmlFor={`${uid}-lastName`} className={LABEL}>
                  Nom <span className="text-red-600">*</span>
                </label>
                <input
                  id={`${uid}-lastName`}
                  className={INPUT}
                  maxLength={256}
                  name="Nom"
                  placeholder="Nom *"
                  type="text"
                  required
                  value={lastName}
                  onChange={(ev) => setLastName(ev.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
                  aria-invalid={showErr("lastName") || undefined}
                  aria-describedby={showErr("lastName") ? `${uid}-err-lastName` : undefined}
                />
                {showErr("lastName") ? (
                  <p id={`${uid}-err-lastName`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.lastName}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 md:gap-x-4">
              <div className="w-full relative">
                <label htmlFor={`${uid}-company`} className={LABEL}>
                  Raison sociale <span className="text-red-600">*</span>
                </label>
                <input
                  id={`${uid}-company`}
                  className={INPUT}
                  maxLength={256}
                  name="Societe"
                  placeholder="Société *"
                  type="text"
                  value={company}
                  onChange={(ev) => setCompany(ev.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                  aria-invalid={showErr("company") || undefined}
                  aria-describedby={showErr("company") ? `${uid}-err-company` : undefined}
                />
                {showErr("company") ? (
                  <p id={`${uid}-err-company`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.company}
                  </p>
                ) : null}
              </div>
              <div className="w-full relative">
                <label htmlFor={`${uid}-jobTitle`} className={LABEL}>
                  Fonction <span className="text-red-600">*</span>
                </label>
                <input
                  id={`${uid}-jobTitle`}
                  className={INPUT}
                  maxLength={256}
                  name="Fonction"
                  placeholder="Fonction *"
                  type="text"
                  value={jobTitle}
                  onChange={(ev) => setJobTitle(ev.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, jobTitle: true }))}
                  aria-invalid={showErr("jobTitle") || undefined}
                  aria-describedby={showErr("jobTitle") ? `${uid}-err-jobTitle` : undefined}
                />
                {showErr("jobTitle") ? (
                  <p id={`${uid}-err-jobTitle`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.jobTitle}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 md:gap-x-4">
              <div className="w-full relative">
                <label htmlFor={`${uid}-email`} className={LABEL}>
                  Adresse e-mail <span className="text-red-600">*</span>
                </label>
                <input
                  id={`${uid}-email`}
                  className={INPUT}
                  maxLength={256}
                  name="Email"
                  placeholder="Adresse Email * "
                  type="email"
                  required
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  aria-invalid={showErr("email") || undefined}
                  aria-describedby={showErr("email") ? `${uid}-err-email` : undefined}
                />
                {showErr("email") ? (
                  <p id={`${uid}-err-email`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="w-full relative">
                <label htmlFor={`${uid}-phone`} className={LABEL}>
                  Téléphone <span className="text-red-600">*</span>
                </label>
                <input
                  id={`${uid}-phone`}
                  className={INPUT}
                  maxLength={256}
                  name="Telephone"
                  placeholder="Téléphone * "
                  type="tel"
                  required
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  aria-invalid={showErr("phone") || undefined}
                  aria-describedby={showErr("phone") ? `${uid}-err-phone` : undefined}
                />
                {showErr("phone") ? (
                  <p id={`${uid}-err-phone`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 md:gap-x-4">
              <div className="w-full relative">
                <label htmlFor={`${uid}-pole`} className={LABEL}>
                  Pôle concerné <span className="text-red-600">*</span>
                </label>
                <select
                  id={`${uid}-pole`}
                  name="Pole"
                  className={INPUT}
                  value={pole}
                  required
                  onChange={(ev) => setPole(ev.target.value as ContactPoleChoice | "")}
                  onBlur={() => setTouched((t) => ({ ...t, pole: true }))}
                  aria-invalid={showErr("pole") || undefined}
                  aria-describedby={showErr("pole") ? `${uid}-err-pole` : undefined}
                >
                  <option value="">Sélectionner…</option>
                  {POLE_ORDER.map((pid) => (
                    <option key={pid} value={pid}>
                      {POLE_THEMES[pid].label}
                    </option>
                  ))}
                  <option value="multi">{POLE_EXTRA_LABELS.multi}</option>
                  <option value="unknown">{POLE_EXTRA_LABELS.unknown}</option>
                </select>
                {showErr("pole") ? (
                  <p id={`${uid}-err-pole`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.pole}
                  </p>
                ) : null}
              </div>
              <div className="w-full relative">
                <label htmlFor={`${uid}-reason`} className={LABEL}>
                  Motif du contact <span className="text-red-600">*</span>
                </label>
                <select
                  id={`${uid}-reason`}
                  name="Motif"
                  className={INPUT}
                  value={reason}
                  required
                  onChange={(ev) => setReason(ev.target.value as ContactReasonValue | "")}
                  onBlur={() => setTouched((t) => ({ ...t, reason: true }))}
                  aria-invalid={showErr("reason") || undefined}
                  aria-describedby={showErr("reason") ? `${uid}-err-reason` : undefined}
                >
                  <option value="">Sélectionner…</option>
                  {CONTACT_REASON_VALUES.map((rv) => (
                    <option key={rv} value={rv}>
                      {REASON_LABELS[rv]}
                    </option>
                  ))}
                </select>
                {showErr("reason") ? (
                  <p id={`${uid}-err-reason`} className="mb-2 text-sm text-red-600" role="alert">
                    {errors.reason}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 md:gap-x-4">
              <div className="w-full relative">
                <label htmlFor={`${uid}-size`} className={LABEL}>
                  Effectif (optionnel)
                </label>
                <select
                  id={`${uid}-size`}
                  name="Effectif"
                  className={INPUT}
                  value={companySize}
                  onChange={(ev) => setCompanySize(ev.target.value as (typeof COMPANY_SIZE_VALUES)[number])}
                >
                  {COMPANY_SIZE_VALUES.map((v) => (
                    <option key={v === "" ? "size-empty" : v} value={v}>
                      {COMPANY_SIZE_LABELS[v]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full relative">
                <label htmlFor={`${uid}-timeline`} className={LABEL}>
                  Délai souhaité (optionnel)
                </label>
                <select
                  id={`${uid}-timeline`}
                  name="Delai"
                  className={INPUT}
                  value={timeline}
                  onChange={(ev) => setTimeline(ev.target.value as (typeof TIMELINE_VALUES)[number])}
                >
                  {TIMELINE_VALUES.map((v) => (
                    <option key={v === "" ? "timeline-empty" : v} value={v}>
                      {TIMELINE_LABELS[v]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full relative">
              <label htmlFor={`${uid}-scope`} className={LABEL}>
                Produit, site ou périmètre concerné (optionnel)
              </label>
              <input
                id={`${uid}-scope`}
                className={INPUT}
                maxLength={256}
                name="Perimetre"
                placeholder="Ex. e-commerce B2B, entrepôt IDF…"
                type="text"
                value={productScope}
                onChange={(ev) => setProductScope(ev.target.value)}
              />
            </div>

            <div className="w-full relative">
              <label htmlFor={`${uid}-message`} className={LABEL}>
                Votre message <span className="text-red-600">*</span>
              </label>
              <textarea
                id={`${uid}-message`}
                name="Contact-1-Message-2"
                maxLength={5000}
                placeholder="Votre message..."
                required
                className={TEXTAREA}
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                aria-invalid={showErr("message") || undefined}
                aria-describedby={showErr("message") ? `${uid}-err-message` : undefined}
              />
              {showErr("message") ? (
                <p id={`${uid}-err-message`} className="mb-2 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <input
              type="submit"
              className="[appearance:auto] text-white cursor-pointer px-4 py-2.5 border-0 justify-center items-center h-12 text-lg font-light flex rounded-md bg-purple-400 w-full justify-self-center"
              value="Envoyer"
            />

            <input
              className="text-zinc-800 align-middle bg-white w-full h-10 text-sm leading-snug mb-2.5 px-3 py-2 border border-solid border-stone-300 hidden placeholder:text-neutral-400 focus:outline-0 focus:border-blue-500"
              maxLength={256}
              name="Honeypot"
              placeholder="Example Text"
              type="text"
              id={`${uid}-Honeypot`}
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(ev) => setHoneypot(ev.target.value)}
              aria-hidden
            />
          </form>
        ) : null}

        {!success ? (
          <p className="mt-3 font-sans text-xs font-light text-indigo-950/80">
            En cliquant sur « Envoyer », votre messagerie s’ouvre avec le message prérempli. Aucune copie n’est stockée
            sur nos serveurs à cette étape.
          </p>
        ) : null}
      </div>
    </div>
  );
}
