"use client";

import { CONTACT } from "@/lib/contact";
import { INK, R_BTN } from "@/lib/home-ui";
import { useCallback, useState } from "react";

type Props = {
  /** Désactiver la ligne du haut quand le formulaire suit déjà un séparateur (ex. page contact). */
  showTopBorder?: boolean;
};

export function ClosingCtaContactForm({ showTopBorder = true }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent(`Contact site — ${name || "Sans nom"}`);
      const body = encodeURIComponent(
        `Nom : ${name}\nE-mail : ${email}\n\nMessage :\n${message}`,
      );
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    },
    [name, email, message],
  );

  return (
    <form
      onSubmit={submit}
      className={`flex flex-col gap-3 ${showTopBorder ? "mt-6 border-t border-black/10 pt-6" : "mt-5"}`}
      aria-label="Envoyer un message à Ovedex"
    >
      <p className="font-display text-base font-bold text-[#0D0B4A]">Écrivez-nous</p>
      <div>
        <label htmlFor="cta-contact-name" className="mb-1.5 block font-sans text-xs font-semibold text-[#0D0B4A]/80">
          Nom
        </label>
        <input
          id="cta-contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className={`w-full ${R_BTN} border border-black/10 bg-neutral-50 px-3 py-2.5 font-sans text-sm text-[#0D0B4A] outline-none transition placeholder:text-neutral-400 focus:border-[#0D0B4A]/30 focus:ring-2 focus:ring-[#0D0B4A]/15`}
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label htmlFor="cta-contact-email" className="mb-1.5 block font-sans text-xs font-semibold text-[#0D0B4A]/80">
          E-mail
        </label>
        <input
          id="cta-contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className={`w-full ${R_BTN} border border-black/10 bg-neutral-50 px-3 py-2.5 font-sans text-sm text-[#0D0B4A] outline-none transition placeholder:text-neutral-400 focus:border-[#0D0B4A]/30 focus:ring-2 focus:ring-[#0D0B4A]/15`}
          placeholder="vous@entreprise.com"
        />
      </div>
      <div>
        <label htmlFor="cta-contact-message" className="mb-1.5 block font-sans text-xs font-semibold text-[#0D0B4A]/80">
          Message
        </label>
        <textarea
          id="cta-contact-message"
          name="message"
          required
          rows={3}
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
          className={`w-full resize-y ${R_BTN} border border-black/10 bg-neutral-50 px-3 py-2.5 font-sans text-sm text-[#0D0B4A] outline-none transition placeholder:text-neutral-400 focus:border-[#0D0B4A]/30 focus:ring-2 focus:ring-[#0D0B4A]/15`}
          placeholder="Décrivez votre besoin (projet, délai, contexte)…"
        />
      </div>
      <button
        type="submit"
        className={`mt-0.5 inline-flex h-11 w-full items-center justify-center ${R_BTN} font-sans text-sm font-semibold text-white transition-opacity hover:opacity-95`}
        style={{ backgroundColor: INK }}
      >
        Envoyer par e-mail
      </button>
      <p className="font-sans text-xs leading-relaxed text-neutral-500">
        En cliquant sur « Envoyer », votre messagerie s’ouvre avec le message prérempli. Vous pouvez
        aussi nous joindre directement par téléphone ou WhatsApp.
      </p>
    </form>
  );
}
