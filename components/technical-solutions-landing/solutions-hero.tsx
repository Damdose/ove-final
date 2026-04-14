import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BG_INK,
  BTN_PRIMARY_INK,
  PAGE_X,
  R_CARD,
  RING_SOFT,
  SHADOW_MEDIA,
  SHADOW_SURFACE,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import { PARTNER_LOGOS, SOLUTIONS_HERO_ICON_SRC, SOLUTIONS_HERO_IMAGE_SRC } from "./technical-solutions-landing-content";

export function SolutionsHero() {
  return (
    <header className={`relative overflow-x-clip ${BRAND.canvas.bgClass}`}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12">
          <div className={`overflow-hidden bg-blue-200 ${R_CARD} ${BD_CARD} ${RING_SOFT} ${SHADOW_SURFACE}`}>
            <div
              className={`grid grid-cols-1 items-center gap-x-10 gap-y-10 px-5 pt-6 pb-5 sm:px-10 sm:pt-8 sm:pb-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-14 lg:gap-y-12 lg:px-14 lg:pt-10 lg:pb-8`}
            >
              <div className="order-2 lg:order-1">
                <Image
                  src={SOLUTIONS_HERO_ICON_SRC}
                  width={64}
                  height={64}
                  loading="lazy"
                  alt=""
                  className="inline-block rounded-[200px]"
                />
                <h1
                  className={`mt-5 max-w-[24ch] font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl sm:leading-[1.12] lg:mt-6 lg:text-5xl lg:leading-[1.08] ${TEXT_INK}`}
                >
                  Solutions techniques pour PME, ETI et sites sensibles
                </h1>
                <p
                  className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:mt-6 sm:text-lg lg:leading-8 ${TEXT_INK_MUTED}`}
                >
                  Conception, intégration et ingénierie en courants faibles : Ovedex Solutions accompagne les entreprises,
                  collectivités et structures exigeantes dans la mise en place de systèmes techniques sûrs, fiables et
                  pérennes.
                </p>
                <div className="mt-8 sm:mt-10">
                  <Link href="/contact" className={BTN_PRIMARY_INK}>
                    Contacter un expert
                  </Link>
                </div>
              </div>

              <div
                className={`relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none ${R_CARD} ${SHADOW_MEDIA}`}
              >
                <Image
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  alt=""
                  src={SOLUTIONS_HERO_IMAGE_SRC}
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
                      key={`sol-hero-marquee-a-${i}`}
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
                      key={`sol-hero-marquee-b-${i}`}
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
