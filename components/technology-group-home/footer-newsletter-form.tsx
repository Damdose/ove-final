"use client";

import { BG_INK, R_BTN, TEXT_INK } from "@/lib/home-ui";
import type { ContactFormResponse } from "@/lib/contact-form";
import { useCallback, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "error";

/**
 * Formulaire d'inscription newsletter du footer.
 *
 * Îlot client isolé pour que `SiteFooter` reste un composant serveur.
 * L'inscription est notifiée par e-mail via /api/contact ; il n'y a pas
 * (encore) d'outil d'emailing branché derrière.
 */
export function FooterNewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = useCallback(
    async (ev: FormEvent) => {
      ev.preventDefault();
      if (status === "sending") return;
      setStatus("sending");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ form: "newsletter", email: email.trim() }),
        });
        const data = (await res.json()) as ContactFormResponse;
        if (!res.ok || !data.ok) throw new Error("send_failed");
        setStatus("ok");
        setEmail("");
      } catch {
        setStatus("error");
      }
    },
    [email, status],
  );

  if (status === "ok") {
    return (
      <p className="mb-3 font-sans text-sm font-normal leading-relaxed text-neutral-600" role="status">
        Merci ! Votre inscription est bien enregistrée.
      </p>
    );
  }

  return (
    <>
      <form
        id="footer-newsletter-form"
        name="email-form"
        className={`mb-3 flex flex-col gap-3 ${R_BTN} bg-neutral-100 p-1.5 pl-4 sm:flex-row sm:items-stretch sm:gap-0 sm:pr-1.5`}
        aria-label="Inscription newsletter"
        onSubmit={submit}
      >
        <input
          className={`min-h-11 min-w-0 flex-1 border-0 bg-transparent font-sans text-sm outline-none placeholder:text-neutral-400 ${TEXT_INK}`}
          maxLength={256}
          name="email-2"
          placeholder="Votre mail"
          type="email"
          id="email-2"
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={`shrink-0 ${R_BTN} ${BG_INK} px-5 py-2.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-92 disabled:cursor-not-allowed disabled:opacity-70 sm:my-0.5 sm:px-6`}
        >
          {status === "sending" ? "Envoi…" : "S’inscrire"}
        </button>
      </form>
      {status === "error" ? (
        <p className="mb-3 font-sans text-xs font-normal leading-relaxed text-red-600" role="alert">
          L’inscription a échoué. Merci de réessayer dans un instant.
        </p>
      ) : null}
    </>
  );
}
