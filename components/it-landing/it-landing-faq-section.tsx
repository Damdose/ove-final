"use client";

import Link from "next/link";
import { BRAND } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BTN_PRIMARY_INK,
  PAGE_X,
  R_CARD,
  RING_INK_FOCUS,
  SECTION_PAD,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import { useId, useState } from "react";
import { IT_FAQ_ITEMS } from "./it-landing-data";

export type ItLandingFaqSectionProps = {
  variant?: "landing" | "page";
};

function ExpandIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#0D0B4A] shadow-[0_1px_3px_rgba(13,11,74,0.06)] transition-transform duration-300 ease-out motion-reduce:transition-none ${open ? "rotate-45" : ""}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}

export function ItLandingFaqSection({ variant = "landing" }: ItLandingFaqSectionProps) {
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const total = IT_FAQ_ITEMS.length;
  const isPage = variant === "page";

  const faqList = (
    <div className="flex flex-col gap-3 sm:gap-4" role="list">
      {IT_FAQ_ITEMS.map((item, index) => {
        const key = `it-faq-${index}`;
        const open = openKey === key;
        const panelId = `faq-panel-${baseId}-${key}`;
        const buttonId = `faq-trigger-${baseId}-${key}`;
        return (
          <div
            key={key}
            role="listitem"
            className={`overflow-hidden bg-white ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER} transition-shadow duration-300 motion-reduce:transition-none ${
              open ? "ring-1 ring-purple-500/25 shadow-[0_8px_32px_-8px_rgba(13,11,74,0.1)]" : ""
            }`}
          >
            <h3 className="m-0 border-0 p-0 font-normal">
              <button
                id={buttonId}
                type="button"
                className={`flex w-full cursor-pointer items-start justify-between gap-4 border-0 bg-transparent px-5 py-5 text-left transition-colors hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-offset-0 sm:px-6 sm:py-6 ${RING_INK_FOCUS}`}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenKey(openKey === key ? null : key)}
              >
                <span className={`font-display text-lg font-semibold leading-snug sm:text-xl ${TEXT_INK}`}>
                  {item.question}
                </span>
                <ExpandIcon open={open} />
              </button>
            </h3>
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
            >
              <div className="min-h-0 overflow-hidden">
                <div className={`border-t border-black/[0.06] px-5 pb-5 pt-1 sm:px-6 sm:pb-6`}>
                  <p className={`m-0 font-sans text-base leading-relaxed sm:text-[1.05rem] ${TEXT_INK_MUTED}`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="faq" className={BRAND.surfaceMuted.bgClass}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            {isPage ? (
              <div className="mx-auto max-w-3xl">{faqList}</div>
            ) : (
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
                <div className="lg:sticky lg:top-28">
                  <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    Questions fréquentes
                  </h2>
                  <p className={`mt-5 max-w-lg font-sans text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    Réponses sur l’infogérance, la sécurité et nos modalités de collaboration. Pour un cas précis,
                    l’équipe IT vous répond sur la page contact.
                  </p>
                  <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-6`}>
                    Contacter un expert
                  </Link>
                </div>
                {faqList}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
