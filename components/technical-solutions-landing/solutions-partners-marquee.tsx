import Image from "next/image";
import { BENEFIT_CARDS, PARTNER_LOGOS } from "./technical-solutions-landing-content";

function LogoSet() {
  return (
    <>
      {PARTNER_LOGOS.map((logo) => (
        <Image
          key={logo.src}
          loading="eager"
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="inline-block brightness-[0%] max-w-24 flex-shrink-0"
        />
      ))}
    </>
  );
}

function SolutionsBenefitsGrid() {
  return (
    <div className="grid auto-cols-[1fr] grid-cols-1 grid-rows-[auto] gap-x-6 gap-y-12 [align-items:start] justify-items-center md:grid-cols-3 md:gap-x-8 md:gap-y-8">
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
      <div className="px-[3%] sm:px-[5%]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="pb-28 pt-20 2xl:pb-32">
            <div className="relative -mt-40 mx-5 mb-20 rounded-[30px] bg-brand-ink py-8 sm:-mt-28 sm:mx-16">
              <div className="logo-marquee-outer relative group">
                <div className="logo-marquee-track gap-x-20" style={{ animationDuration: "30s" }}>
                  <LogoSet />
                  <LogoSet />
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="text-center justify-center items-center flex">
                  <div className="mb-8 w-full max-w-4xl [transform-style:preserve-3d] sm:mb-12">
                    <div>
                      <h2 className="mt-5 mb-0 font-display text-3xl font-bold leading-tight text-brand-ink sm:mb-8 md:text-4xl lg:text-5xl">
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
