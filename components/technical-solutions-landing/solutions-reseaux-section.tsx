import Image from "next/image";
import Link from "next/link";

const RESEAUX_PHOTO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927308251d553db88a7ad52_photo%20(2).avif";

const RESEAUX_BG =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927305bf82e4c40a8984015/_Rectangle%205959%20/(1/').avif";

export function SolutionsReseauxSection() {
  return (
    <section className="relative bg-gray-50">
      <div
        className="pointer-events-none absolute inset-0 hidden bg-no-repeat sm:block"
        style={{ backgroundImage: `url('${RESEAUX_BG}')` }}
        aria-hidden
      />
      <div className="relative z-10 px-[3%] sm:px-[5%]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div>
              <div className="grid auto-cols-[1fr] grid-cols-1 grid-rows-[auto] items-center justify-items-stretch gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-32 lg:gap-y-16">
                <div className="[transform-style:preserve-3d]">
                  <Image
                    loading="lazy"
                    src={RESEAUX_PHOTO_SRC}
                    alt=""
                    width={960}
                    height={960}
                    className="inline-block w-full h-full rounded-3xl"
                  />
                </div>
                <div>
                  <div>
                    <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                      Solutions
                    </div>
                  </div>
                  <div>
                    <h2 className="mt-5 mb-0 font-display text-3xl font-bold leading-tight text-brand-ink sm:mb-8 md:text-4xl lg:text-5xl">
                      Réseaux, communication & infrastructures IoT
                    </h2>
                  </div>
                  <div>
                    <p className="mb-5 font-sans text-base font-light leading-7 text-brand-ink lg:text-lg">
                      Nous concevons des infrastructures réseau performantes : Wi-Fi pro,
                      interphonie, réseaux IP sécurisés, capteurs IoT, supervision et automatisation.
                      Objectif : performance, disponibilité et simplicité d’exploitation.
                    </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
