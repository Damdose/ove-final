import Image from "next/image";
import Link from "next/link";
import { SURETE_IMAGE_SRC, SURETE_STATS } from "./technical-solutions-landing-content";

const SURETE_BG =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c759b92cbf0e373d9aea7/_Rectangle%205959%20/(9/').avif";

export function SolutionsSureteSection() {
  return (
    <section className="relative bg-indigo-950">
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[length:100%] bg-[position:0_0] bg-no-repeat sm:block"
        style={{ backgroundImage: `url('${SURETE_BG}')` }}
        aria-hidden
      />
      <div className="relative z-10 px-[3%] sm:px-[5%]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div>
              <div className="grid min-h-0 auto-cols-[1fr] grid-cols-1 grid-rows-[auto] items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 lg:gap-y-16">
                <div>
                  <div>
                    <div className="inline-block rounded-[100px] bg-blue-400 px-3 py-1 font-sans text-xs font-medium uppercase leading-4 tracking-[1px] text-white">
                      Solutions
                    </div>
                  </div>
                  <div>
                    <h2 className="mt-5 mb-8 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                      Sûreté électronique & sécurité des sites
                    </h2>
                  </div>
                  <div>
                    <p className="mb-5 font-sans text-lg font-light leading-8 text-white sm:mb-10">
                      Nous sécurisons vos bâtiments avec des solutions fiables et évolutives :
                      vidéosurveillance HD, contrôle d’accès centralisé, systèmes d’intrusion et
                      supervision unifiée.
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col gap-x-4 gap-y-4 py-2 font-display text-lg font-bold leading-6">
                    {SURETE_STATS.map((stat) => (
                      <div
                        key={stat.value + stat.label}
                        id={stat.id}
                        className="flex w-full [align-self:start] items-start justify-start gap-x-4 gap-y-4"
                      >
                        <div className="flex flex-none items-start justify-center self-start">
                          <div className="text-3xl leading-10 text-white">{stat.value}</div>
                        </div>
                        <div className="flex items-center justify-start">
                          <p className="font-sans font-light text-white">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
                      <Link
                        href="/contact"
                        className="flex h-16 cursor-pointer items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-lg text-brand-ink no-underline active:outline-0 hover:outline-0"
                      >
                        Contacter un expert
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-c4b2b98c-d316-2557-8fdf-9dd2b92c7aa5-214350f8"
                  className="order-first object-contain [transform-style:preserve-3d] lg:order-none"
                >
                  <Image
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt=""
                    src={SURETE_IMAGE_SRC}
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
