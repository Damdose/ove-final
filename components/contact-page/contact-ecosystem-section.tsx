import Image from "next/image";
import { ECOSYSTEM_CARDS } from "@/components/contact-page/contact-page-assets";

export function ContactEcosystemSection() {
  return (
    <section className="bg-white">
      <div className="px-[3%] sm:px-[5%]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div>
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="flex items-center justify-center text-center">
                  <div className="mb-8 w-full max-w-4xl [transform-style:preserve-3d] sm:mb-12">
                    <div>
                      <div className="inline-block rounded-[100px] bg-indigo-950 px-3 py-1 font-sans text-xs font-medium uppercase leading-4 tracking-[1px] text-white">
                        3 pôles complémentaires
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 mb-0 font-display text-3xl font-bold leading-tight text-indigo-950 sm:mb-8 md:text-4xl lg:text-5xl">
                        Un écosystème technologique agile
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid auto-cols-[1fr] grid-cols-1 grid-rows-[auto] gap-x-6 gap-y-12 [align-items:start] justify-items-center md:grid-cols-3 md:gap-x-8 md:gap-y-8">
                {ECOSYSTEM_CARDS.map((card) => (
                  <div
                    key={card.id}
                    className={`h-full w-full rounded-[30px] p-8 text-center [transform-style:preserve-3d] ${card.cardClass}`}
                  >
                    <div className="flex">
                      <Image
                        src={card.imageSrc}
                        alt=""
                        width={972}
                        height={400}
                        sizes="(max-width: 972px) 100vw, 972px"
                        className="inline-block h-auto w-full max-w-full"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="mt-5 mb-2.5 text-left font-display text-2xl font-semibold text-indigo-950">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mb-2.5 text-left font-sans text-base font-light leading-7 text-indigo-950">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
