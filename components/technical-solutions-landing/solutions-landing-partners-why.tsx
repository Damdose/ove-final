import type { ReactNode } from "react";
import { BRAND, POLE_THEMES } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BG_INK,
  PAGE_X,
  R_CARD,
  SECTION_PAD,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import { WHY_CHOOSE_CARDS } from "./data";

const solutions = POLE_THEMES.solutions;

const whyEyebrowClass = `inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutions.tag.bgClass} ${solutions.tag.textClass}`;

function WhyIcon() {
  const svgProps = {
    className: "h-7 w-7 text-white",
    viewBox: "0 0 24 24" as const,
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  return (
    <svg {...svgProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function SolutionsLandingPartnersWhy() {
  return (
    <section className={BRAND.surfaceMuted.bgClass}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <p className={whyEyebrowClass}>Pourquoi nous</p>
              <h2 className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                Pourquoi choisir Ovedex Solutions ?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {WHY_CHOOSE_CARDS.map((card, index) => (
                <div
                  key={index}
                  className={`group/card flex flex-col bg-white p-7 transition-shadow duration-300 sm:p-8 ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${BG_INK} shadow-[0_6px_20px_rgba(13,11,74,0.18)] ring-2 ring-blue-400/30 transition-[box-shadow,transform] duration-300 group-hover/card:scale-[1.03] group-hover/card:ring-blue-400/45`}
                  >
                    <WhyIcon />
                  </div>
                  <h3 className={`mt-5 font-display text-xl font-semibold leading-snug sm:text-2xl ${TEXT_INK}`}>
                    {card.title as ReactNode}
                  </h3>
                  <p className={`mt-3 font-sans text-base font-normal leading-relaxed ${TEXT_INK_MUTED}`}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
