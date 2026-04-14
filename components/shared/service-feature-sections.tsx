import Image from "next/image";
import Link from "next/link";
import { BRAND, POLE_THEMES, type PoleId } from "@/lib/brand-design-system";
import {
  BG_INK,
  BTN_PRIMARY_INK,
  PAGE_X,
  R_BTN,
  R_CARD,
  RING_INK_FOCUS,
  SECTION_PAD,
  SHADOW_MEDIA,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";

export interface ServiceFeatureStatRow {
  value: string;
  label: string;
}

export interface ServiceFeatureBullet {
  label: string;
}

export interface ServiceFeatureBlock {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ServiceHeroStats {
  /** Proposition de valeur affichée sous le hero */
  tagline: string;
  /** 3 chiffres clés */
  stats: ServiceFeatureStatRow[];
}

export interface ServiceFeaturesData {
  /** Chiffres clés sous le hero */
  heroStats: ServiceHeroStats;
  /** Section 1 — fond navy, stats, image droite */
  section1: ServiceFeatureBlock & { stats: ServiceFeatureStatRow[] };
  /** Section 2 — fond blanc, image gauche */
  section2: ServiceFeatureBlock;
  /** Section 3 — fond gris, bullets, image droite */
  section3: ServiceFeatureBlock & { bullets: ServiceFeatureBullet[] };
}

const BTN_WHITE_ON_NAVY = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} bg-white px-6 text-lg font-medium ${TEXT_INK} no-underline shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink`;

const BTN_INK = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} ${BG_INK} px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${RING_INK_FOCUS}`;

export function ServiceFeatureSections({
  features,
  pole,
  badgeLabel,
}: {
  features: ServiceFeaturesData;
  pole: PoleId;
  badgeLabel: string;
}) {
  const theme = POLE_THEMES[pole];
  const { heroStats, section1, section2, section3 } = features;

  return (
    <>
      {/* ── Proposition de valeur + chiffres clés ── */}
      <section className="bg-[#f4f5f7]">
        <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
          <div className={SECTION_PAD}>
            <h2
              className="mx-auto mb-10 max-w-4xl text-center font-display text-2xl font-bold leading-snug tracking-tight text-[#0D0B4A] sm:mb-14 sm:text-3xl sm:leading-[1.2] lg:mb-16 lg:text-[2.35rem] lg:leading-tight"
            >
              {heroStats.tagline}
            </h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:max-w-none lg:gap-x-16">
              {heroStats.stats.map((row, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-4xl font-bold leading-none text-[#0D0B4A] sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                    {row.value}
                  </p>
                  <p className="mt-3 font-sans text-base font-bold text-[#0D0B4A] sm:text-lg">
                    {row.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1 : fond navy, stats, image droite ── */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="order-2 lg:order-1">
                  <div
                    className={`inline-flex items-center rounded-lg px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] ${theme.primary.bgClass} ${theme.primary.textOnPrimaryClass}`}
                  >
                    {badgeLabel}
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {section1.heading}
                  </h2>
                  <p className="mt-5 max-w-xl font-sans text-base font-normal leading-relaxed text-white/90 sm:text-lg">
                    {section1.description}
                  </p>
                  <div className="mt-8 flex flex-col gap-5 font-display text-lg font-semibold leading-snug lg:mt-10">
                    {section1.stats.map((row, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="text-3xl font-bold leading-10 tabular-nums text-white">{row.value}</div>
                        <p className="max-w-xs pt-1 font-sans text-base font-normal leading-relaxed text-white/90">
                          {row.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={`${BTN_WHITE_ON_NAVY} mt-10`}>
                    Contacter un expert
                  </Link>
                </div>
                <div className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${theme.primary.bgClass} rounded-[2.75rem] opacity-95`}
                  />
                  <div
                    className={`relative z-10 ml-0 overflow-hidden ${R_CARD} shadow-[0_28px_60px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt={section1.imageAlt}
                      src={section1.imageSrc}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-square ${R_CARD}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 : fond blanc, image gauche ── */}
      <section className={BRAND.canvas.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="relative order-1 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute left-0 bottom-6 top-6 z-0 w-[min(78%,400px)] rounded-r-[2.75rem] sm:bottom-8 sm:top-8 lg:bottom-10 lg:top-10 lg:w-[min(72%,440px)] ${theme.primary.bgClass}`}
                  />
                  <div
                    className={`relative z-10 ml-6 overflow-hidden sm:ml-10 lg:ml-14 ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06]`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt={section2.imageAlt}
                      src={section2.imageSrc}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-square ${R_CARD}`}
                    />
                  </div>
                </div>
                <div className="order-2 lg:order-2">
                  <div
                    className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${theme.primary.bgClass} ${theme.primary.textOnPrimaryClass}`}
                  >
                    {badgeLabel}
                  </div>
                  <h2
                    className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}
                  >
                    {section2.heading}
                  </h2>
                  <p
                    className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK}`}
                  >
                    {section2.description}
                  </p>
                  <Link href="/contact" className={`${BTN_INK} mt-10`}>
                    Contacter un expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3 : fond gris, bullets, image droite ── */}
      <section className={BRAND.surfaceMuted.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="order-2 lg:order-1">
                  <div
                    className={`inline-flex items-center rounded-lg px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] ${theme.primary.bgClass} ${theme.primary.textOnPrimaryClass}`}
                  >
                    {badgeLabel}
                  </div>
                  <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    {section3.heading}
                  </h2>
                  <p className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    {section3.description}
                  </p>
                  <ul className="mt-8 flex flex-col gap-5">
                    {section3.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${BG_INK} font-sans text-sm font-semibold leading-none text-white shadow-[0_2px_10px_rgba(13,11,74,0.18)]`}
                          aria-hidden
                        >
                          →
                        </span>
                        <p className={`pt-1.5 font-sans text-base font-bold leading-snug sm:text-[1.05rem] ${TEXT_INK}`}>
                          {b.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-10`}>
                    Contacter un expert
                  </Link>
                </div>
                <div className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${R_CARD} ${BG_INK}`}
                  />
                  <div
                    className={`relative z-10 ml-0 overflow-hidden ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06] lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt={section3.imageAlt}
                      src={section3.imageSrc}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-[5/4] ${R_CARD}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
