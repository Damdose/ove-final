import Image from "next/image";
import Link from "next/link";
import { RING_SOFT, SHADOW_SURFACE } from "@/lib/home-ui";

const HERO_ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c7570006b6004ba728e21_Icon%20(27).svg";
const HERO_IMAGE_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e4617ef4052eb32f30eeb_unnamed%20(14).jpg";
const BLUR_GRADIENT_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/691e5a2f4ad9018806391cc3_Blur%20Gradient%20(2).svg";

export function SolutionsHero() {
  return (
    <header className="max-sm:overflow-x-hidden max-sm:overflow-y-hidden max-sm:pt-0 relative pt-5">
      <div className="max-sm:px-[3%] px-[5%]">
        <div
          className={`mx-auto w-full max-w-screen-xl max-sm:max-w-full max-sm:px-0 rounded-3xl bg-blue-200 px-16 ${RING_SOFT} ${SHADOW_SURFACE}`}
        >
          <div className="max-sm:pt-4 max-sm:px-5 pt-20 pb-28">
            <div>
              <div className="max-lg:min-h-[auto] grid grid-rows-[auto] auto-cols-[1fr] items-center max-sm:flex-col max-sm:flex gap-x-8 gap-y-8 grid-cols-[1.25fr_1fr]">
                <div>
                  <div>
                    <Image
                      src={HERO_ICON_SRC}
                      loading="lazy"
                      alt=""
                      width={48}
                      height={48}
                      className="inline-block"
                    />
                    <h1 className="text-brand-ink mt-5 mb-2.5 max-lg:text-6xl max-lg:leading-[72px] max-md:text-4xl max-md:leading-10 max-sm:text-4xl max-sm:leading-10 max-sm:mt-6 max-sm:mb-8 font-display text-5xl font-bold leading-[65px]">
                      Solutions techniques pour PME, ETI et sites sensibles
                    </h1>
                  </div>
                  <p className="text-brand-ink font-sans text-lg font-light leading-7 mb-10 max-sm:pr-0 pr-10">
                    Conception, intégration et ingénierie en courants faibles : Ovedex Solutions accompagne les
                    entreprises, collectivités et structures exigeantes dans la mise en place de systèmes techniques
                    sûrs, fiables et pérennes.
                  </p>
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
                  id="w-node-ac8b4c9c-b2a0-a996-e77e-11a78010f431-214350f8"
                  className="max-sm:order-first"
                >
                  <Image
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    src={HERO_IMAGE_SRC}
                    alt=""
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="inline-block aspect-[1] object-cover w-full h-full rounded-3xl max-sm:hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={BLUR_GRADIENT_SRC}
        loading="lazy"
        alt=""
        width={800}
        height={400}
        className="inline-block max-sm:overflow-x-hidden max-sm:overflow-y-hidden max-sm:left-auto max-sm:top-[0%] z-[-1] absolute left-[12%] top-[-13%] h-auto w-[min(80vw,720px)]"
      />
    </header>
  );
}
