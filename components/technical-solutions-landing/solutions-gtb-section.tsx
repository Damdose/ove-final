import Image from "next/image";
import Link from "next/link";
import { GTB_BULLETS, GTB_IMAGE_SRC } from "./technical-solutions-landing-content";

export function SolutionsGtbSection() {
  return (
    <section className="max-sm:bg-[0_0] bg-[100%] bg-no-repeat max-sm:bg-none max-sm:bg-repeat bg-[url('https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c58203f71462c74b79fbd/_Rectangle%205959%20/(7/').avif')]">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div>
              <div className="max-lg:gap-x-12 max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] gap-x-32 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center justify-items-stretch grid">
                <div>
                  <div>
                    <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                      Solutions
                    </div>
                  </div>
                  <div>
                    <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-brand-ink font-display text-5xl font-bold leading-tight mb-8">
                      GTB, audiovisuel & solutions techniques avancées
                    </h2>
                  </div>
                  <div>
                    <p className="max-md:text-base text-brand-ink font-sans text-base font-light leading-7 mb-5">
                      Nous intégrons des systèmes intelligents pour optimiser le confort, la gestion
                      énergétique et les opérations : GTB/GTC, salles de réunion, affichage dynamique,
                      sonorisation et automatisation.
                    </p>
                  </div>
                  <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] font-display text-lg font-bold leading-6 flex mt-5 mb-16 py-2 flex-col">
                    {GTB_BULLETS.map((item, index) => (
                      <div
                        key={item.text}
                        id={item.id}
                        className={
                          index === 1
                            ? "gap-x-4 gap-y-4 justify-start items-center w-full flex"
                            : "gap-x-4 gap-y-4 justify-start items-center w-full flex [align-self:start]"
                        }
                      >
                        <div className="flex gap-x-5 gap-y-5 justify-start items-center">
                          <Image
                            src={item.iconSrc}
                            loading="lazy"
                            alt=""
                            width={40}
                            height={40}
                            className="inline-block bg-brand-ink [border-style:#fff] p-2 rounded-[40px] border"
                          />
                        </div>
                        <div className="justify-start items-center flex">
                          <p className="font-sans dark:text-brand-ink dark:font-medium">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="gap-x-3 gap-y-3 flex-wrap items-center flex mt-6">
                      <Link
                        href="/contact"
                        className="text-white cursor-pointer py-2.5 bg-brand-ink justify-center items-center h-16 text-lg no-underline flex px-5 rounded-2xl active:outline-0 hover:outline-0"
                      >
                        Contacter un expert
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_90dd0f8d-75ce-61fb-9036-2a84053824a1-214350f8"
                  className="max-sm:order-first [transform-style:preserve-3d]"
                >
                  <Image
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt=""
                    src={GTB_IMAGE_SRC}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="inline-block aspect-[1] object-cover w-full h-full rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
