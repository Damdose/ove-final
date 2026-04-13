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
import { useId, useMemo, useState } from "react";
import { DIGITAL_FAQ_SECTIONS, type DigitalFaqSectionBlock, type FaqItem } from "./digital-faq-sections-data";

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

function AnswerBody({ text }: { text: string }) {
  const parts = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className={`space-y-3 font-sans text-base leading-relaxed sm:text-[1.05rem] ${TEXT_INK_MUTED}`}>
      {parts.map((p, i) => (
        <p key={i} className="m-0">
          {p}
        </p>
      ))}
    </div>
  );
}

function FaqAccordionBlock({
  items,
  sectionKey,
  baseId,
  openKey,
  setOpenKey,
}: {
  items: FaqItem[];
  sectionKey: string;
  baseId: string;
  openKey: string | null;
  setOpenKey: (k: string | null) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4" role="list">
      {items.map((item, index) => {
        const key = `${sectionKey}-${index}`;
        const open = openKey === key;
        const panelId = `faq-panel-${baseId}-${key}`;
        const buttonId = `faq-trigger-${baseId}-${key}`;
        return (
          <div
            key={key}
            role="listitem"
            className={`overflow-hidden bg-white ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER} transition-shadow duration-300 motion-reduce:transition-none ${
              open ? "ring-1 ring-emerald-500/20 shadow-[0_8px_32px_-8px_rgba(13,11,74,0.1)]" : ""
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
                  <AnswerBody text={item.answer} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function embeddedTeaserSections(sections: DigitalFaqSectionBlock[]): DigitalFaqSectionBlock[] {
  return sections.slice(0, 4).map((s) => ({
    ...s,
    items: s.items.slice(0, 2),
  }));
}

export type DigitalLandingFaqSectionProps = {
  /**
   * `embedded` : extrait représentatif pour `/digital#faq`.
   * `full` : toutes les thématiques — page `/digital/faq`.
   */
  mode?: "embedded" | "full";
  /** Liste courte (LP service) — si présente, remplace le rendu piloté par `mode`. */
  items?: readonly FaqItem[];
  heading?: string;
  intro?: string;
  showFullFaqLink?: boolean;
};

export function DigitalLandingFaqSection({
  mode = "embedded",
  items: customItems,
  heading = "Questions fréquentes",
  intro,
  showFullFaqLink = false,
}: DigitalLandingFaqSectionProps = {}) {
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const sections = useMemo(
    () => (mode === "embedded" ? embeddedTeaserSections(DIGITAL_FAQ_SECTIONS) : DIGITAL_FAQ_SECTIONS),
    [mode],
  );

  const totalQuestions = DIGITAL_FAQ_SECTIONS.reduce((n, s) => n + s.items.length, 0);
  const teaserCount = embeddedTeaserSections(DIGITAL_FAQ_SECTIONS).reduce((n, s) => n + s.items.length, 0);

  if (customItems && customItems.length > 0) {
    const customIntro =
      intro ??
      "Réponses ciblées pour avancer : complétez par un échange direct avec l’équipe Digital si votre cas est spécifique.";

    return (
      <section id="faq" className={BRAND.surfaceMuted.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
                <div className="lg:sticky lg:top-28">
                  <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    {heading}
                  </h2>
                  <p className={`mt-5 max-w-lg font-sans text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    {customIntro}
                  </p>
                  <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-6`}>
                    Contacter un expert
                  </Link>
                  {showFullFaqLink ? (
                    <Link
                      href="/digital/faq"
                      className={`mt-4 block text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline ${TEXT_INK}`}
                    >
                      Voir la FAQ complète ({totalQuestions} questions) →
                    </Link>
                  ) : null}
                </div>

                <div>
                  <FaqAccordionBlock
                    items={[...customItems]}
                    sectionKey="lp"
                    baseId={baseId}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className={BRAND.surfaceMuted.bgClass}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            {mode === "full" ? (
              <div className="mx-auto max-w-3xl">
                <nav aria-label="Sommaire de la FAQ" className="mb-10 rounded-2xl border border-black/[0.06] bg-white/90 p-4 sm:p-5">
                  <p className={`m-0 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600`}>Sommaire</p>
                  <ol className={`m-0 mt-3 list-decimal space-y-2 pl-5 text-sm sm:text-base ${TEXT_INK}`}>
                    {DIGITAL_FAQ_SECTIONS.map((block) => (
                      <li key={block.id} className="pl-1 marker:font-medium">
                        <a href={`#faq-${block.id}`} className={`font-medium underline-offset-4 hover:underline ${TEXT_INK}`}>
                          {block.title}
                        </a>
                        {block.blurb ? <span className={`block text-sm font-normal ${TEXT_INK_MUTED}`}>{block.blurb}</span> : null}
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="flex flex-col gap-12 sm:gap-14">
                  {sections.map((block) => (
                    <div key={block.id} id={`faq-${block.id}`} className="scroll-mt-28">
                      <h2 className={`m-0 font-display text-2xl font-bold leading-tight sm:text-3xl ${TEXT_INK}`}>{block.title}</h2>
                      {block.blurb ? (
                        <p className={`mt-2 max-w-2xl text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>{block.blurb}</p>
                      ) : null}
                      <div className="mt-6">
                        <FaqAccordionBlock
                          items={block.items}
                          sectionKey={block.id}
                          baseId={baseId}
                          openKey={openKey}
                          setOpenKey={setOpenKey}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-12 rounded-2xl border border-black/[0.06] bg-gradient-to-br from-white to-slate-50/90 px-6 py-8 text-center sm:px-8 ${R_CARD}`}
                >
                  <p className={`m-0 font-display text-lg font-semibold sm:text-xl ${TEXT_INK}`}>Une question sans réponse ici ?</p>
                  <p className={`mx-auto mt-2 max-w-lg text-sm leading-relaxed sm:text-base ${TEXT_INK_MUTED}`}>
                    Écrivez-nous : nous revenons vers vous rapidement avec des éléments concrets sur votre contexte.
                  </p>
                  <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-6 inline-flex`}>
                    Contacter un expert
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
                <div className="lg:sticky lg:top-28">
                  <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    Questions fréquentes
                  </h2>
                  <p className={`mt-5 max-w-lg font-sans text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    Aperçu de notre FAQ ({teaserCount} questions sur {totalQuestions}). La page dédiée regroupe l’ensemble des
                    thématiques : sites, e-commerce, pub, social, méthode, tarifs, maintenance et conformité.
                  </p>
                  <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-6`}>
                    Contacter un expert
                  </Link>
                  <Link
                    href="/digital/faq"
                    className={`mt-4 block text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline ${TEXT_INK}`}
                  >
                    Voir la FAQ complète ({totalQuestions} questions) →
                  </Link>
                </div>

                <div>
                  <FaqAccordionBlock
                    items={sections.flatMap((s) => s.items)}
                    sectionKey="teaser"
                    baseId={baseId}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
