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
import { WHY_CARDS, type WhyCard } from "./digital-services-landing-content";

const digital = POLE_THEMES.digital;

const whyEyebrowClass = `inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${digital.tag.bgClass} ${digital.tag.textClass}`;

function WhyIcon({ kind }: { kind: WhyCard["titleHtml"] }) {
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

  if (kind === "expertise") {
    return (
      <svg {...svgProps}>
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z" />
      </svg>
    );
  }
  if (kind === "agile") {
    return (
      <svg {...svgProps}>
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    );
  }
  return (
    <svg {...svgProps}>
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

function WhyTitle({ kind }: { kind: WhyCard["titleHtml"] }) {
  if (kind === "expertise") {
    return (
      <h3 className={`mt-5 font-display text-xl font-semibold leading-snug sm:text-2xl ${TEXT_INK}`}>
        <strong className="font-bold">Expertise créative &amp; approche data-driven</strong>
      </h3>
    );
  }
  if (kind === "agile") {
    return (
      <h3 className={`mt-5 font-display text-xl font-semibold leading-snug sm:text-2xl ${TEXT_INK}`}>
        Équipe agile, réactive et polyvalente
      </h3>
    );
  }
  return (
    <h3 className={`mt-5 font-display text-xl font-semibold leading-snug sm:text-2xl ${TEXT_INK}`}>
      Focus ROI &amp; performance mesurable
    </h3>
  );
}

export function DigitalLandingPartnersWhy() {
  return (
    <section className={BRAND.surfaceMuted.bgClass}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <p className={whyEyebrowClass}>Pourquoi nous</p>
              <h2 className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                Pourquoi choisir Ovedex Digital ?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {WHY_CARDS.map((card) => (
                <div
                  key={card.titleHtml}
                  className={`group/card flex flex-col bg-white p-7 transition-shadow duration-300 sm:p-8 ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${BG_INK} shadow-[0_6px_20px_rgba(13,11,74,0.18)] ring-2 ring-emerald-400/25 transition-[box-shadow,transform] duration-300 group-hover/card:scale-[1.03] group-hover/card:ring-emerald-400/40`}
                  >
                    <WhyIcon kind={card.titleHtml} />
                  </div>
                  <WhyTitle kind={card.titleHtml} />
                  <p className={`mt-3 font-sans text-base font-normal leading-relaxed ${TEXT_INK_MUTED}`}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
