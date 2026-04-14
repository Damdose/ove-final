import Image from "next/image";
import Link from "next/link";
import { INK, PAGE_X, R_BTN, R_CARD, SECTION_PAD, SHADOW_MEDIA } from "@/lib/home-ui";
import { DIGITAL_FEATURES } from "./content";

const accent = "#58C69F";

const DIGITAL_PHOTO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69272ff20cb48a33e24329f5_photo%20(1).avif";

export function DigitalOfferingSection() {
  return (
    <section className="overflow-x-hidden" style={{ backgroundColor: INK }}>
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className={SECTION_PAD}>
            <div className="grid grid-cols-1 items-center gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-x-16">
              <div className="order-2 lg:order-1">
                <div
                  className="mb-3 inline-flex items-center rounded-full px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white sm:mb-4"
                  style={{ backgroundColor: accent }}
                >
                  Digital
                </div>
                <h2 className="mb-6 font-display text-2xl font-bold leading-tight text-white sm:text-4xl lg:mb-8 lg:text-[2.35rem] lg:leading-[1.12]">
                  Création digitale & marketing intelligent
                </h2>
                <p className="mb-8 max-w-xl font-sans text-base font-normal leading-relaxed text-white/95 sm:text-lg lg:mb-10 lg:leading-8">
                  Nous concevons des expériences digitales performantes pour renforcer votre
                  visibilité, convertir davantage et soutenir durablement la croissance de votre
                  entreprise. Sites web sur mesure, e-commerce, campagnes publicitaires, contenus
                  visuels, automatisation…
                </p>
                <ul className="mb-10 flex flex-col gap-5 font-sans text-base leading-snug text-white lg:mb-14">
                  {DIGITAL_FEATURES.map((feature) => (
                    <li
                      key={feature.id ?? feature.text}
                      id={feature.id}
                      className="flex gap-4"
                    >
                      <span
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center ${R_BTN} border border-white/25 bg-white/5`}
                      >
                        <Image
                          src={feature.iconSrc}
                          loading="lazy"
                          alt=""
                          width={22}
                          height={22}
                          className="h-[22px] w-[22px] object-contain opacity-95"
                        />
                      </span>
                      <span className="pt-1.5 font-normal">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/digital"
                  className={`inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} bg-white px-6 text-lg font-medium no-underline transition-opacity hover:opacity-95 active:outline-none`}
                  style={{ color: INK }}
                >
                  Découvrir nos services Digital
                </Link>
              </div>

              <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:mx-0 lg:max-w-none">
                <div
                  className={`pointer-events-none absolute -right-[5%] top-[16%] z-0 aspect-[4/3] w-[94%] ${R_CARD} sm:-right-[8%] lg:-right-[6%] lg:top-[17%] lg:w-[88%]`}
                  style={{ backgroundColor: accent }}
                  aria-hidden
                />
                <div className="relative z-[1] mx-auto w-[90%] sm:mx-0 sm:ml-0 sm:w-[86%] lg:w-[92%]">
                  <Image
                    sizes="(max-width: 1024px) 90vw, 640px"
                    alt="Consultant digital au travail sur un ordinateur portable"
                    src={DIGITAL_PHOTO_SRC}
                    loading="lazy"
                    width={837}
                    height={837}
                    className={`aspect-square w-full ${R_CARD} object-cover ${SHADOW_MEDIA} lg:aspect-[5/6] lg:max-h-[min(32rem,70vh)]`}
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
