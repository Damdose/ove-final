import Image from "next/image";
import { BENEFIT_CARDS, PARTNER_LOGOS } from "./technical-solutions-landing-content";

function LogoRow() {
  return (
    <div className="gap-x-20 gap-y-20 flex-none items-center animate-[scroll_30s_linear_infinite] flex pl-20 group-hover:[animation-play-state:paused]">
      {PARTNER_LOGOS.map((logo) => (
        <Image
          key={logo.src}
          loading="eager"
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="inline-block brightness-[0%] max-w-24"
        />
      ))}
    </div>
  );
}

function SolutionsBenefitsGrid() {
  return (
    <div className="max-md:gap-y-12 max-md:grid-cols-[1fr] max-sm:gap-x-6 max-sm:gap-y-6 gap-x-8 gap-y-8 grid-rows-[auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] [align-items:start] justify-items-center grid">
      {BENEFIT_CARDS.map((card) => (
        <div
          key={card.title + (card.titleLine2 ?? "")}
          className="text-center w-full h-full p-8 rounded-[30px] dark:bg-brand-ink/10 [transform-style:preserve-3d]"
        >
          <div className="flex">
            <div className="inline-block">
              <Image
                loading="lazy"
                src={card.iconSrc}
                alt=""
                width={64}
                height={64}
                className="inline-block object-contain w-16 h-16"
              />
            </div>
          </div>
          <div>
            <h3 className="mt-5 mb-2.5 text-brand-ink text-left font-display text-2xl font-semibold">
              {card.title}
              {card.titleLine2 ? (
                <>
                  {" "}
                  <br />
                  {card.titleLine2}
                </>
              ) : null}
            </h3>
          </div>
          <p className="font-sans font-light mb-2.5 text-brand-ink text-left text-base leading-7">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SolutionsPartnersMarquee() {
  return (
    <section className="bg-white">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="2xl:pb-32 pt-20 pb-28">
            <div className="max-sm:-mt-40 bg-brand-ink relative -mt-28 py-8 rounded-[30px] max-sm:mx-5 mb-20 mx-16">
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="flex relative group">
                  <LogoRow />
                  <LogoRow />
                  <div className="before:content-[&quot;_&quot;] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-[&quot;_&quot;] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both" />
                  <div className="bg-[linear-gradient(to_right,#0e0c1500)] w-20 absolute left-[0%] inset-y-[0%]" />
                  <div className="bg-[linear-gradient(to_right,#0e0c1500)] w-20 absolute rotate-180 right-[0%] inset-y-[0%]" />
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="text-center justify-center items-center flex">
                  <div className="w-full max-sm:mb-8 max-w-4xl mb-12 [transform-style:preserve-3d]">
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-brand-ink font-display text-5xl font-bold leading-tight mb-8">
                        Pourquoi choisir Ovedex Solutions ?
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <SolutionsBenefitsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
