import Image from "next/image";
import {
  BD_CARD,
  INK,
  PAGE_X,
  R_BTN,
  R_CARD,
  RING_SOFT,
  SECTION_PAD,
  SHADOW_POP,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
} from "@/lib/home-ui";
import { WHY_CARDS, WHY_PHOTO_SRC } from "./content";

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(13,11,74,0.05),transparent_55%)]"
        aria-hidden
      />
      <div className={`relative mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className={SECTION_PAD}>
            <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-14">
              <div className="mb-3 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-4 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white sm:mb-4">
                OVEDEX
              </div>
              <h2 className="font-display text-[1.4rem] font-bold leading-tight tracking-tight text-[#0D0B4A] sm:text-3xl lg:text-[2.1rem] lg:leading-[1.12]">
                Pourquoi choisir Ovedex ?
              </h2>
            </header>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {WHY_CARDS.map((card) => (
                <article
                  key={card.title}
                  className={`group relative flex h-full flex-col overflow-hidden ${R_CARD} ${BD_CARD} bg-white p-4 ${SHADOW_SURFACE} transition duration-300 ease-out hover:-translate-y-0.5 ${SHADOW_SURFACE_HOVER} sm:p-5`}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-0.5 bg-[#0D0B4A]"
                    aria-hidden
                  />
                  <div className="pl-2.5 sm:pl-3">
                    <div
                      className={`mb-3 flex h-9 w-9 shrink-0 items-center justify-center ${R_BTN} ${SHADOW_POP} transition duration-300 group-hover:scale-[1.03] sm:mb-3.5 sm:h-10 sm:w-10`}
                      style={{ backgroundColor: INK }}
                    >
                      <Image
                        loading="lazy"
                        src={card.iconSrc}
                        alt=""
                        width={22}
                        height={22}
                        className="h-5 w-5 object-contain sm:h-[1.35rem] sm:w-[1.35rem]"
                      />
                    </div>
                    <h3 className="mb-2 font-display text-base font-bold leading-snug text-[#0D0B4A] sm:text-lg">
                      {card.titleSecondLine ? (
                        <>
                          {card.title} <br />
                          {card.titleSecondLine}
                        </>
                      ) : (
                        card.title
                      )}
                    </h3>
                    <p className="font-sans text-sm font-normal leading-relaxed text-[#0D0B4A]/70">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}

              <div
                className={`group relative h-full min-h-[13rem] w-full overflow-hidden ${R_CARD} ${BD_CARD} ${RING_SOFT} ${SHADOW_SURFACE} transition duration-300 ${SHADOW_SURFACE_HOVER} sm:min-h-[15rem] lg:min-h-0 lg:min-h-full`}
              >
                <Image
                  src={WHY_PHOTO_SRC}
                  loading="lazy"
                  fill
                  alt="Collaboration autour d'un ordinateur portable"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0B4A]/20 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
