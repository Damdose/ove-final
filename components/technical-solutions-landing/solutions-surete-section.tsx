import Image from "next/image";
import Link from "next/link";
import { SURETE_IMAGE_SRC, SURETE_STATS } from "./technical-solutions-landing-content";

export function SolutionsSureteSection() {
  return (
    <section className="max-sm:bg-[0_0] bg-[100%] bg-no-repeat max-sm:bg-none max-sm:bg-repeat bg-[url('https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c759b92cbf0e373d9aea7/_Rectangle%205959%20/(9/').avif')]">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div>
              <div className="max-lg:gap-x-12 max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
                <div>
                  <div>
                    <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                      Solutions
                    </div>
                  </div>
                  <div>
                    <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display text-5xl font-bold leading-tight text-white mb-8">
                      Sûreté électronique & sécurité des sites
                    </h2>
                  </div>
                  <div>
                    <p className="font-sans font-light max-sm:mb-5 text-white text-lg leading-8 mb-10">
                      Nous sécurisons vos bâtiments avec des solutions fiables et évolutives :
                      vidéosurveillance HD, contrôle d’accès centralisé, systèmes d’intrusion et
                      supervision unifiée.
                    </p>
                  </div>
                  <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] font-display text-lg font-bold leading-6 flex mt-5 mb-16 py-2 flex-col">
                    {SURETE_STATS.map((stat) => (
                      <div
                        key={stat.value + stat.label}
                        id={stat.id}
                        className="gap-x-4 gap-y-4 justify-start items-center w-full flex [align-self:start]"
                      >
                        <div className="flex-none justify-center self-start items-start flex">
                          <div className="text-white text-3xl leading-10">{stat.value}</div>
                        </div>
                        <div className="justify-start items-center flex">
                          <p className="font-sans font-light text-white">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="gap-x-3 gap-y-3 flex-wrap items-center flex mt-6">
                      <Link
                        href="/contact"
                        className="cursor-pointer py-2.5 justify-center items-center h-16 text-lg no-underline flex px-5 rounded-2xl active:outline-0 hover:outline-0 text-brand-ink bg-white"
                      >
                        Contacter un expert
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-c4b2b98c-d316-2557-8fdf-9dd2b92c7aa5-214350f8"
                  className="object-contain rounded-3xl max-sm:order-first [transform-style:preserve-3d]"
                >
                  <Image
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt=""
                    src={SURETE_IMAGE_SRC}
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
