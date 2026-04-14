"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ovedex-consent-v1";

type Consent = "all" | "essential" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === "all" || raw === "essential") setConsent(raw);
    } catch {
      /* ignore */
    }
  }, []);

  if (!mounted || consent) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-6 left-6 z-[60] hidden max-w-lg rounded-2xl border border-border bg-white p-5 shadow-2xl lg:block"
    >
      <h2 id="cookie-title" className="text-base font-semibold text-brand-ink">
        Préférences de consentement
      </h2>
      <p id="cookie-desc" className="mt-2 text-sm leading-relaxed text-brand-ink/70">
        Nous utilisons des cookies essentiels au fonctionnement du site. Vous
        pouvez accepter l&apos;ensemble des catégories ou conserver uniquement
        l&apos;essentiel.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg border border-brand-ink/20 px-4 py-2 text-sm font-medium text-brand-ink hover:bg-brand-ink/5"
          onClick={() => {
            setConsent("essential");
            try {
              localStorage.setItem(STORAGE_KEY, "essential");
            } catch {
              /* ignore */
            }
          }}
        >
          Tout refuser
        </button>
        <button
          type="button"
          className="rounded-lg bg-brand-ink px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          onClick={() => {
            setConsent("all");
            try {
              localStorage.setItem(STORAGE_KEY, "all");
            } catch {
              /* ignore */
            }
          }}
        >
          Tout accepter
        </button>
      </div>
    </div>
  );
}
