import Image from "next/image";
import Link from "next/link";

const RESEAUX_PHOTO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927308251d553db88a7ad52_photo%20(2).avif";

export function SolutionsReseauxSection() {
  return (
    <section className="max-sm:bg-none max-sm:bg-repeat bg-gray-50 bg-[url('https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927305bf82e4c40a8984015/_Rectangle%205959%20/(1/').avif)] bg-no-repeat">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div>
              <div className="max-lg:gap-x-12 max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] gap-x-32 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center justify-items-stretch grid">
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
                    <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-brand-ink font-display text-5xl font-bold leading-tight mb-8">
                      Réseaux, communication & infrastructures IoT
                    </h2>
                  </div>
                  <div>
                    <p className="max-md:text-base text-brand-ink font-sans text-base font-light leading-7 mb-5">
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
