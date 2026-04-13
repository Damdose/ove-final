import Image from "next/image";
import { ECOSYSTEM_CARDS } from "@/components/contact-page/contact-page-assets";

export function ContactEcosystemSection() {
  return (
    <section className="bg-white">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div>
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="text-center justify-center items-center flex">
                  <div className="w-full max-sm:mb-8 max-w-4xl mb-12 [transform-style:preserve-3d]">
                    <div>
                      <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase bg-indigo-950 font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px]">
                        3 pôles complémentaires
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-indigo-950 font-display text-5xl font-bold leading-tight mb-8">
                        Un écosystème technologique agile
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-md:gap-y-12 max-md:grid-cols-[1fr] max-sm:gap-x-6 max-sm:gap-y-6 gap-x-8 gap-y-8 grid-rows-[auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] [align-items:start] justify-items-center grid">
                {ECOSYSTEM_CARDS.map((card) => (
                  <div
                    key={card.id}
                    className={`text-center w-full h-full p-8 rounded-[30px] [transform-style:preserve-3d] ${card.cardClass}`}
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
                      <h3 className="mt-5 mb-2.5 text-indigo-950 text-left font-display text-2xl font-semibold">
                        {card.title}
                      </h3>
                    </div>
                    <p className="font-sans font-light mb-2.5 text-indigo-950 text-left text-base leading-7">
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
