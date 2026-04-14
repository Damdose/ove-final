import Image from "next/image";
import Link from "next/link";
import {
  PAGE_X,
  R_BTN,
  R_CARD,
  RING_SOFT,
  SECTION_PAD,
  SHADOW_POP,
  SHADOW_THUMB,
} from "@/lib/home-ui";
import { PILLAR_CARDS } from "./content";

export function PillarsSection() {
  return (
    <section id="3-poles" className="bg-white">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className={SECTION_PAD}>
            <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white sm:mb-5">
                3 pôles complémentaires
              </div>
              <h2 className="font-display text-[1.65rem] font-bold leading-tight tracking-tight text-[#0D0B4A] sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
                Un écosystème technologique agile
              </h2>
            </header>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
              {PILLAR_CARDS.map((card) => (
                <article
                  key={card.poleId}
                  className={`flex h-full flex-col ${R_CARD} p-6 sm:p-7 lg:p-8 ${card.bgClass}`}
                >
                  <div
                    className={`relative w-full overflow-hidden ${R_CARD} ${RING_SOFT} ${SHADOW_THUMB}`}
                  >
                    <Image
                      src={card.imageSrc}
                      loading="lazy"
                      sizes={card.imageSizes}
                      alt={`Visuel du pôle ${card.title}`}
                      width={480}
                      height={180}
                      className="aspect-[8/3] h-auto w-full object-cover object-left"
                    />
                    <div
                      className={`absolute left-3 top-3 z-10 flex h-11 w-11 items-center justify-center ${R_BTN} ${SHADOW_POP} sm:left-4 sm:top-4 sm:h-12 sm:w-12 ${card.pillarIconSquareClass}`}
                    >
                      <Image
                        src={card.pillarIconSrc}
                        alt=""
                        width={22}
                        height={22}
                        className="h-[22px] w-[22px] object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-snug text-[#0D0B4A] sm:mt-7">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-sans text-base font-normal leading-relaxed text-[#0D0B4A]/80 sm:mt-3.5">
                    {card.description}
                  </p>
                  <Link
                    href={`/${card.poleId}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0D0B4A]/70 no-underline transition-colors hover:text-[#0D0B4A] sm:mt-auto sm:pt-5"
                  >
                    Découvrir nos services {card.title}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
