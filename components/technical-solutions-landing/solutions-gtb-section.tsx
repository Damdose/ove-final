import Image from "next/image";
import Link from "next/link";
import { GTB_BULLETS, GTB_IMAGE_SRC } from "./technical-solutions-landing-content";

const GTB_BG =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c58203f71462c74b79fbd/_Rectangle%205959%20/(7/').avif";

export function SolutionsGtbSection() {
  return (
    <section className="relative bg-gray-50">
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[length:100%] bg-[position:0_0] bg-no-repeat sm:block"
        style={{ backgroundImage: `url('${GTB_BG}')` }}
        aria-hidden
      />
      <div className="relative z-10 px-[3%] sm:px-[5%]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div>
              <div className="grid auto-cols-[1fr] grid-cols-1 grid-rows-[auto] items-center justify-items-stretch gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-32 lg:gap-y-16">
                <div>
                  <div>
                    <div className="inline-block rounded-[100px] bg-blue-400 px-3 py-1 font-sans text-xs font-medium uppercase leading-4 tracking-[1px] text-white">
                      Solutions
                    </div>
                  </div>
                  <div>
                    <h2 className="mt-5 mb-0 font-display text-3xl font-bold leading-tight text-brand-ink sm:mb-8 md:text-4xl lg:text-5xl">
                      GTB, audiovisuel & solutions techniques avancées
                    </h2>
                  </div>
                  <div>
                    <p className="mb-5 font-sans text-base font-light leading-7 text-brand-ink lg:text-lg">
                      Nous intégrons des systèmes intelligents pour optimiser le confort, la gestion
                      énergétique et les opérations : GTB/GTC, salles de réunion, affichage dynamique,
                      sonorisation et automatisation.
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col gap-x-4 gap-y-4 py-2 font-display text-lg font-bold leading-6">
                    {GTB_BULLETS.map((item, index) => (
                      <div
                        key={item.text}
                        id={item.id}
                        className={
                          index === 1
                            ? "flex w-full items-center justify-start gap-x-4 gap-y-4"
                            : "flex w-full [align-self:start] items-center justify-start gap-x-4 gap-y-4"
                        }
                      >
                        <div className="flex items-center justify-start gap-x-5 gap-y-5">
                          <Image
                            src={item.iconSrc}
                            loading="lazy"
                            alt=""
                            width={40}
                            height={40}
                            className="inline-block rounded-[40px] border bg-brand-ink p-2 [border-style:#fff]"
                          />
                        </div>
                        <div className="flex items-center justify-start">
                          <p className="font-sans dark:font-medium dark:text-brand-ink">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
                      <Link
                        href="/contact"
                        className="flex h-16 cursor-pointer items-center justify-center rounded-2xl bg-brand-ink px-5 py-2.5 text-lg text-white no-underline active:outline-0 hover:outline-0"
                      >
                        Contacter un expert
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_90dd0f8d-75ce-61fb-9036-2a84053824a1-214350f8"
                  className="order-first [transform-style:preserve-3d] lg:order-none"
                >
                  <Image
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt=""
                    src={GTB_IMAGE_SRC}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="inline-block aspect-[1] h-full w-full rounded-3xl object-cover"
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
