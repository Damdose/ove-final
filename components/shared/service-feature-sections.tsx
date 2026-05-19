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

export interface ServiceAdvantageCard {
  icon: "shield-check" | "zap" | "target" | "lock" | "eye" | "clock" | "settings" | "bar-chart" | "globe" | "layers" | "cpu" | "wifi";
  title: string;
  text: string;
}

export interface ServiceHeroStats {
  /** Proposition de valeur affichée sous le hero */
  tagline: string;
  /** 3 chiffres clés */
  stats: ServiceFeatureStatRow[];
  /** 3 cards avantages spécifiques au service */
  advantages?: ServiceAdvantageCard[];
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

const ADVANTAGE_ICONS: Record<string, React.ReactElement> = {
  "shield-check": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  zap: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  target: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={6} /><circle cx={12} cy={12} r={2} /></svg>,
  lock: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
  eye: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg>,
  clock: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>,
  settings: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><circle cx={12} cy={12} r={3} /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>,
  "bar-chart": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg>,
  globe: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
  layers: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
  cpu: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x={4} y={4} width={16} height={16} rx={2} ry={2} /><rect x={9} y={9} width={6} height={6} /><line x1={9} y1={1} x2={9} y2={4} /><line x1={15} y1={1} x2={15} y2={4} /><line x1={9} y1={20} x2={9} y2={23} /><line x1={15} y1={20} x2={15} y2={23} /><line x1={20} y1={9} x2={23} y2={9} /><line x1={20} y1={14} x2={23} y2={14} /><line x1={1} y1={9} x2={4} y2={9} /><line x1={1} y1={14} x2={4} y2={14} /></svg>,
  wifi: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M5 12.55a11 11 0 0114.08 0" /><path d="M1.42 9a16 16 0 0121.16 0" /><path d="M8.53 16.11a6 6 0 016.95 0" /><line x1={12} y1={20} x2={12.01} y2={20} /></svg>,
};

function AdvantageIcon({ name }: { name: string }) {
  return ADVANTAGE_ICONS[name] ?? ADVANTAGE_ICONS["shield-check"];
}

export function ServiceFeatureSections({
  features,
  pole,
  badgeLabel,
  presentation,
}: {
  features: ServiceFeaturesData;
  pole: PoleId;
  badgeLabel: string;
  presentation?: string;
}) {
  const theme = POLE_THEMES[pole];
  const { heroStats, section1, section2, section3 } = features;

  return (
    <>
      {/* ── Proposition de valeur + avantages + chiffres clés ── */}
      <section className="bg-[#f4f5f7]">
        <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
          <div className={SECTION_PAD}>
            <h2
              className="mx-auto max-w-4xl text-center font-display text-2xl font-bold leading-snug tracking-tight text-[#0D0B4A] sm:text-3xl sm:leading-[1.2] lg:text-[2.35rem] lg:leading-tight"
            >
              {heroStats.tagline}
            </h2>
            {presentation && (
              <p className="mx-auto mt-5 max-w-3xl text-center font-sans text-base font-normal leading-relaxed text-[#0D0B4A]/65 sm:mt-6 sm:text-lg sm:leading-relaxed">
                {presentation}
              </p>
            )}

            {/* ── 3 Advantage cards ── */}
            {heroStats.advantages && (
              <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 lg:gap-6">
                {heroStats.advantages.map((card, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_rgba(13,11,74,0.04)] lg:p-8"
                  >
                    <div className={`flex size-12 items-center justify-center rounded-xl ${BG_INK} text-white`}>
                      <AdvantageIcon name={card.icon} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-[#0D0B4A] sm:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-[#0D0B4A]/65 sm:text-base">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ── Chiffres clés — encadré navy ── */}
            <div className={`mt-8 overflow-hidden rounded-2xl ${BG_INK} sm:mt-10`}>
              <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {heroStats.stats.map((row, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 px-6 py-5 text-center sm:py-6">
                    <p className="font-display text-2xl font-bold leading-none text-white sm:text-3xl">
                      <AnimatedCounter value={row.value} />
                    </p>
                    <p className="font-sans text-sm font-medium leading-snug text-white/70">
                      {row.label}
                    </p>
                  </div>
                ))}
              </div>
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
