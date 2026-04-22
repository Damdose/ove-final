import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { BRAND, POLE_THEMES, type PoleId } from "@/lib/brand-design-system";
import {
  BG_INK,
  BTN_PRIMARY_INK,
  BTN_SECONDARY_INK,
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

/** Accent text class for numbers on dark backgrounds (navy section). */
const POLE_ACCENT_TEXT: Record<PoleId, string> = {
  digital: "text-emerald-400",
  solutions: "text-blue-400",
  it: "text-purple-400",
};

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
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:max-w-none lg:gap-8">
              {heroStats.stats.map((row, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(13,11,74,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,11,74,0.1)] sm:px-5 sm:py-9 lg:px-8 lg:py-10"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 ${theme.primary.bgClass}`} aria-hidden />
                  <p className="font-display text-4xl font-bold leading-none text-[#0D0B4A] sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                    <AnimatedCounter value={row.value} />
                  </p>
                  <p className="mt-4 font-sans text-sm font-semibold leading-snug text-[#0D0B4A]/75 sm:text-base">
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
                  <span
                    className={`inline-flex items-center rounded-full px-3.5 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${theme.primary.bgClass} ${theme.primary.textOnPrimaryClass}`}
                  >
                    {badgeLabel}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {section1.heading}
                  </h2>
                  <p className="mt-5 max-w-xl font-sans text-base font-normal leading-relaxed text-white/90 sm:text-lg">
                    {section1.description}
                  </p>
                  <div className="mt-8 flex flex-col gap-0 lg:mt-10">
                    {section1.stats.map((row, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-4 py-4 ${i > 0 ? "border-t border-white/10" : ""}`}
                      >
                        <div className={`text-3xl font-bold leading-10 tabular-nums ${POLE_ACCENT_TEXT[pole]}`}>
                          {row.value}
                        </div>
                        <p className="max-w-xs pt-1 font-sans text-base font-normal leading-relaxed text-white/90">
                          {row.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link href="/contact" className={BTN_WHITE_ON_NAVY}>
                      Contacter un expert
                    </Link>
                    <Link
                      href="/contact?raison=demo"
                      className={`inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} border-2 border-white/30 bg-transparent px-6 text-lg font-medium text-white no-underline transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink`}
                    >
                      Planifier une démo
                    </Link>
                  </div>
                  <p className="mt-3 font-sans text-xs font-normal text-white/55 sm:text-sm">Réponse sous 24 h — sans engagement</p>
                </div>
                <div className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${theme.primary.bgClass} rounded-[2.75rem] opacity-95`}
                  />
                  <div
                    className={`group/img relative z-10 ml-0 overflow-hidden ${R_CARD} shadow-[0_28px_60px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt={section1.imageAlt}
                      src={section1.imageSrc}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.03] sm:aspect-square ${R_CARD}`}
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
                    className={`group/img relative z-10 ml-6 overflow-hidden sm:ml-10 lg:ml-14 ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06]`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt={section2.imageAlt}
                      src={section2.imageSrc}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.03] sm:aspect-square ${R_CARD}`}
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
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link href="/contact" className={BTN_INK}>
                      Contacter un expert
                    </Link>
                    <Link href="/contact?raison=demo" className={BTN_SECONDARY_INK}>
                      Planifier une démo
                    </Link>
                  </div>
                  <p className="mt-3 font-sans text-xs font-normal text-[#0D0B4A]/45 sm:text-sm">Réponse sous 24 h — sans engagement</p>
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
                  <span
                    className={`inline-flex items-center rounded-full px-3.5 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${theme.primary.bgClass} ${theme.primary.textOnPrimaryClass}`}
                  >
                    {badgeLabel}
                  </span>
                  <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    {section3.heading}
                  </h2>
                  <p className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    {section3.description}
                  </p>
                  <ul className="mt-8 flex flex-col gap-4">
                    {section3.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-4 rounded-xl bg-white/70 px-4 py-3.5 ring-1 ring-black/[0.04]">
                        <span
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.primary.bgClass} font-sans text-sm font-semibold leading-none ${theme.primary.textOnPrimaryClass} shadow-sm`}
                          aria-hidden
                        >
                          {i + 1}
                        </span>
                        <p className={`pt-1 font-sans text-[0.95rem] font-semibold leading-snug sm:text-base ${TEXT_INK}`}>
                          {b.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link href="/contact" className={BTN_PRIMARY_INK}>
                      Contacter un expert
                    </Link>
                    <Link href="/contact?raison=demo" className={BTN_SECONDARY_INK}>
                      Planifier une démo
                    </Link>
                  </div>
                  <p className="mt-3 font-sans text-xs font-normal text-[#0D0B4A]/45 sm:text-sm">Réponse sous 24 h — sans engagement</p>
                </div>
                <div className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${R_CARD} ${BG_INK}`}
                  />
                  <div
                    className={`group/img relative z-10 ml-0 overflow-hidden ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06] lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt={section3.imageAlt}
                      src={section3.imageSrc}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.03] sm:aspect-[5/4] ${R_CARD}`}
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
