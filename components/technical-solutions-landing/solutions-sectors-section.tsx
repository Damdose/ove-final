import { SECTOR_CARDS } from "./data";

export function SolutionsSectorsSection() {
  return (
    <section className="bg-white">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div className="flex-col items-center [transform-style:preserve-3d]">
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="text-center justify-center items-center flex">
                  <div className="w-full max-w-screen-md">
                    <div>
                      <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                        Secteurs
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-brand-ink font-display text-5xl font-bold leading-tight mb-16">
                        Nos secteurs d&apos;activité
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-sm:flex-col max-sm:flex gap-x-8 gap-y-8 grid-rows-[auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] grid">
                  {SECTOR_CARDS.map((card, index) => (
                    <div key={`${card.src}-${index}`} className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={card.src}
                        sizes={card.sizes}
                        loading="lazy"
                        alt=""
                        className="inline-block w-full h-auto"
                      />
                      <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] absolute translate-x-2/4 right-2/4 bottom-[40%] bg-blue-400">
                        {card.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
