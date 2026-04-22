import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BG_INK,
  BTN_PRIMARY_INK,
  BTN_SECONDARY_INK,
  PAGE_X,
  R_CARD,
  RING_SOFT,
  SHADOW_MEDIA,
  SHADOW_SURFACE,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import { PARTNER_LOGOS } from "@/components/technical-solutions-landing/technical-solutions-landing-content";
import { IT_HERO_PHOTO_SRC } from "./it-landing-content";

function ItHeroIcon() {
  return (
    <span
      className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-400 text-white shadow-[0_6px_20px_rgba(147,51,234,0.35)] ring-2 ring-purple-300/60"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    </span>
  );
}

export function ItLandingHero() {
  return (
    <header className={`relative overflow-x-clip ${BRAND.canvas.bgClass}`}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12">
          <div className={`overflow-hidden bg-purple-200 ${R_CARD} ${BD_CARD} ${RING_SOFT} ${SHADOW_SURFACE}`}>
            <div
              className={`grid grid-cols-1 items-center gap-x-10 gap-y-10 px-5 pt-6 pb-5 sm:px-10 sm:pt-8 sm:pb-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-14 lg:gap-y-12 lg:px-14 lg:pt-10 lg:pb-8`}
            >
              <div className="order-2 lg:order-1">
                <ItHeroIcon />
                <h1
                  className={`mt-5 max-w-[26ch] font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl sm:leading-[1.12] lg:mt-6 lg:text-5xl lg:leading-[1.08] ${TEXT_INK}`}
                >
                  Infogérance, cybersécurité &amp; infrastructures pour PME et ETI
                </h1>
                <p
                  className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:mt-6 sm:text-lg lg:leading-8 ${TEXT_INK_MUTED}`}
                >
                  Ovedex IT sécurise et fait évoluer votre système d’information : supervision, support, cloud et projets,
                  avec des engagements clairs et une communication transparente.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                  <Link href="/contact" className={BTN_PRIMARY_INK}>
                    Contacter un expert
                  </Link>
                  <Link href="/contact?raison=demo" className={BTN_SECONDARY_INK}>
                    Planifier une démo
                  </Link>
                </div>
              </div>

              <div
                className={`relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none ${R_CARD} ${SHADOW_MEDIA}`}
              >
                <Image
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  alt=""
                  src={IT_HERO_PHOTO_SRC}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className={`aspect-[16/10] w-full object-cover lg:aspect-square ${R_CARD}`}
                />
              </div>
            </div>

            <div className={`group border-t border-black/[0.08] ${BG_INK} py-4 sm:py-5`} role="region" aria-label="Logos de clients et partenaires">
              <div className="logo-marquee-outer">
                <div className="logo-marquee-track gap-x-14 px-4 group-hover:[animation-play-state:paused] sm:gap-x-20 sm:px-6">
                  {PARTNER_LOGOS.map((logo, i) => (
                    <Image
                      key={`it-hero-marquee-a-${i}`}
                      loading="eager"
                      src={logo.src}
                      alt=""
                      width={logo.width}
                      height={logo.height}
                      className="max-h-9 w-auto max-w-[7.5rem] shrink-0 object-contain brightness-0 invert sm:max-h-10 sm:max-w-[8.5rem]"
                      aria-hidden
                    />
                  ))}
                  {PARTNER_LOGOS.map((logo, i) => (
                    <Image
                      key={`it-hero-marquee-b-${i}`}
                      loading="eager"
                      src={logo.src}
                      alt=""
                      width={logo.width}
                      height={logo.height}
                      className="max-h-9 w-auto max-w-[7.5rem] shrink-0 object-contain brightness-0 invert sm:max-h-10 sm:max-w-[8.5rem]"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
