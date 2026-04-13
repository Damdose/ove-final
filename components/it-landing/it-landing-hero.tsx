import Image from "next/image";
import Link from "next/link";
import { POLE_THEMES } from "@/lib/brand-design-system";
import { INK, PAGE_X, R_BTN, R_CARD, SECTION_PAD, SHADOW_MEDIA, SHADOW_SURFACE, RING_SOFT } from "@/lib/home-ui";
import { IT_HERO_PHOTO_SRC, IT_LAVENDER } from "./it-landing-content";

const theme = POLE_THEMES.it;

export function ItLandingHero() {
  return (
    <section className={`bg-[#f4f5f7] ${SECTION_PAD}`} id="offres">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div
          className={`grid grid-cols-1 items-center gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-x-16`}
        >
          <div className="order-2 lg:order-1">
            <div
              className={`mb-3 inline-flex items-center px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white sm:mb-4 ${R_BTN}`}
              style={{ backgroundColor: IT_LAVENDER }}
            >
              {theme.label}
            </div>
            <h1
              className="mb-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:mb-8 lg:text-[2.35rem] lg:leading-[1.12]"
              style={{ color: INK }}
            >
              Infogérance, cybersécurité & infrastructures performantes
            </h1>
            <p className="mb-8 max-w-xl font-sans text-base font-normal leading-relaxed text-brand-ink/75 sm:text-lg lg:mb-10">
              Nous assurons la disponibilité, la sécurité et l&apos;efficacité de votre système
              d&apos;information grâce à une infogérance réactive et des infrastructures maîtrisées.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={`inline-flex h-14 min-w-[12rem] items-center justify-center px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 active:outline-none ${R_BTN}`}
                style={{ backgroundColor: INK }}
              >
                Contacter un expert
              </Link>
              <Link
                href="/digital"
                className={`inline-flex h-14 min-w-[10rem] items-center justify-center border border-black/10 bg-white px-6 text-lg font-medium text-brand-ink no-underline transition hover:bg-neutral-50 ${R_BTN}`}
              >
                Voir le pôle Digital
              </Link>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:mx-0 lg:max-w-none">
            <div
              className={`pointer-events-none absolute -right-[10%] bottom-[6%] z-0 aspect-[3/4] w-[72%] sm:-right-[12%] sm:bottom-[8%] lg:-right-[14%] lg:w-[68%] ${R_CARD}`}
              style={{ backgroundColor: IT_LAVENDER }}
              aria-hidden
            />
            <div className="relative z-[1] mx-auto w-[92%] lg:mx-0 lg:ml-auto lg:mr-0 lg:w-[90%]">
              <div className={`relative overflow-hidden ${R_CARD} ${RING_SOFT} ${SHADOW_MEDIA} ${SHADOW_SURFACE}`}>
                <Image
                  loading="lazy"
                  src={IT_HERO_PHOTO_SRC}
                  alt="Infrastructure et supervision IT"
                  width={960}
                  height={960}
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="aspect-square w-full object-cover grayscale-[0.35] sm:grayscale-[0.25] lg:aspect-[5/6] lg:max-h-[min(32rem,70vh)]"
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1] bg-[#0D0B4A]/[0.18] mix-blend-multiply"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
