import Image from "next/image";
import Link from "next/link";
import { INK, PAGE_X, R_BTN, R_CARD, SECTION_PAD, SHADOW_MEDIA } from "@/lib/home-ui";
import { SOLUTION_LINKS } from "./content";
const accent = "#7DAAF1";

const SOLUTIONS_PHOTO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927308251d553db88a7ad52_photo%20(2).avif";

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SolutionsOfferingSection() {
  return (
    <section className="overflow-x-hidden bg-white">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className={SECTION_PAD}>
            <div className="grid grid-cols-1 items-center gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-x-16">
              <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                <div
                  className={`pointer-events-none absolute -bottom-[4%] -left-[6%] z-0 aspect-[4/3] w-[92%] ${R_CARD} sm:-left-[8%] lg:-bottom-[5%] lg:w-[88%]`}
                  style={{ backgroundColor: accent }}
                  aria-hidden
                />
                <div className="relative z-[1] mx-auto w-[92%] sm:ml-auto sm:mr-0 sm:w-[86%] lg:w-[92%]">
                  <Image
                    loading="lazy"
                    src={SOLUTIONS_PHOTO_SRC}
                    alt="Vue satellite de la Terre de nuit avec liaisons lumineuses"
                    width={960}
                    height={960}
                    sizes="(max-width: 1024px) 92vw, 640px"
                    className={`aspect-square w-full ${R_CARD} object-cover ${SHADOW_MEDIA} lg:aspect-[5/6] lg:max-h-[min(32rem,70vh)]`}
                  />
                </div>
              </div>

              <div>
                <div
                  className="mb-3 inline-flex items-center rounded-full px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white sm:mb-4"
                  style={{ backgroundColor: accent }}
                >
                  Solutions
                </div>
                <h2
                  className="mb-6 font-display text-2xl font-bold leading-tight sm:text-4xl lg:mb-8 lg:text-[2.35rem] lg:leading-[1.12]"
                  style={{ color: INK }}
                >
                  Conception, intégration & ingénierie courant faible
                </h2>
                <p className="mb-8 max-w-xl font-sans text-base font-normal leading-relaxed text-[#0D0B4A]/72 sm:text-lg lg:mb-10">
                  Nous accompagnons vos projets techniques de bout en bout : études, installation,
                  intégration et maintenance de vos infrastructures en courants faibles.
                  Vidéosurveillance, contrôle d&apos;accès, réseaux, GTB/GTC, IoT…
                </p>
                <div className="mb-10 flex flex-col gap-3 lg:mb-12">
                  {SOLUTION_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`group flex items-center justify-between gap-4 ${R_CARD} bg-neutral-100 px-4 py-3.5 no-underline transition-colors hover:bg-neutral-200/80 sm:px-5 sm:py-4`}
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: INK }}
                        >
                          <Image
                            src={item.iconSrc}
                            loading="lazy"
                            alt=""
                            width={22}
                            height={22}
                            className="h-[22px] w-[22px] object-contain"
                          />
                        </span>
                        <span
                          className="font-sans text-base font-semibold leading-snug sm:text-lg"
                          style={{ color: INK }}
                        >
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRightIcon className="shrink-0 text-[#0D0B4A]/55 transition-colors group-hover:text-[#0D0B4A]" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/solutions"
                  className={`inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 active:outline-none`}
                  style={{ backgroundColor: INK }}
                >
                  Découvrir le service
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
