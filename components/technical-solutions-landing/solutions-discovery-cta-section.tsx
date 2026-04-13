import Link from "next/link";

export function SolutionsDiscoveryCtaSection() {
  return (
    <section className="relative flex-col items-center justify-start">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="mx-auto w-full max-w-screen-xl max-sm:max-w-full">
          <div className="max-lg:pt-24 max-md:pt-16 pt-32">
            <div>
              <div className="relative min-h-[22rem] overflow-hidden rounded-[30px] border border-black/[0.06] bg-brand-ink [transform-style:preserve-3d] sm:min-h-[24rem]">
                <div className="relative z-10 flex min-h-[22rem] flex-col items-center justify-center max-lg:p-12 max-md:p-8 sm:min-h-[24rem] p-16">
                  <div className="flex items-center justify-center text-center">
                    <div className="w-full max-w-screen-md">
                      <div>
                        <h2 className="mb-8 mt-5 font-display text-5xl font-bold leading-tight text-white max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
                          Prêt à découvrir Ovedex ?
                        </h2>
                      </div>
                      <p className="mb-10 font-sans text-lg font-light leading-8 text-white max-sm:mb-5">
                        Ovedex, une technostructure agile et un partenaire de confiance dans tous vos
                        défis numériques et technologiques.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
                      <Link
                        href="/contact"
                        className="flex h-16 cursor-pointer items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-lg text-brand-ink no-underline hover:outline-0 active:outline-0"
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
