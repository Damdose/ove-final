import Image from "next/image";
import Link from "next/link";
import { INK, PAGE_X, R_BTN, R_CARD, SECTION_PAD, SHADOW_MEDIA, SHADOW_POP } from "@/lib/home-ui";
import { IT_FEATURE_ICON, IT_FEATURES } from "./content";
const lavender = "#bf86ff";

const IT_PHOTO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692730dfa417929d47db1738_Image%20(72).avif";

const MONITOR_ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2ec612f6c6607a5624ca_computer_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";

const BUBBLE_POSITIONS = [
  { className: "left-[6%] top-[10%] sm:left-[8%] sm:top-[12%]" },
  { className: "right-[8%] top-[20%] sm:right-[10%] sm:top-[22%]" },
  { className: "bottom-[12%] left-[36%] sm:bottom-[14%] sm:left-[40%]" },
] as const;

export function ItOfferingSection() {
  return (
    <section className="overflow-x-hidden bg-[#f4f5f7]">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className={SECTION_PAD}>
            <div className="grid grid-cols-1 items-center gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-x-16">
              <div className="order-2 lg:order-1">
                <div
                  className={`mb-3 inline-flex items-center ${R_BTN} px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white sm:mb-4`}
                  style={{ backgroundColor: lavender }}
                >
                  IT
                </div>
                <h2
                  className="mb-6 font-display text-2xl font-bold leading-tight sm:text-4xl lg:mb-8 lg:text-[2.35rem] lg:leading-[1.12]"
                  style={{ color: INK }}
                >
                  Infogérance, cybersécurité & infrastructures performantes
                </h2>
                <p className="mb-8 max-w-xl font-sans text-base font-normal leading-relaxed text-[#0D0B4A]/72 sm:text-lg lg:mb-10">
                  Nous assurons la disponibilité, la sécurité et l&apos;efficacité de votre système
                  d&apos;information grâce à une infogérance réactive et des infrastructures
                  maîtrisées. Support utilisateurs, gestion de parc, cybersécurité, cloud, réseaux…
                </p>
                <ul className="mb-10 flex flex-col gap-5 lg:mb-14">
                  {IT_FEATURES.map((feature) => (
                    <li
                      key={feature.text}
                      id={feature.id}
                      className="flex items-center gap-4"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: INK }}
                      >
                        <Image
                          src={IT_FEATURE_ICON}
                          loading="lazy"
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      </span>
                      <span
                        className="font-sans text-base font-bold leading-snug sm:text-lg"
                        style={{ color: INK }}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/it"
                  className={`inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 active:outline-none`}
                  style={{ backgroundColor: INK }}
                >
                  Découvrir le service
                </Link>
              </div>

              <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:mx-0 lg:max-w-none">
                <div
                  className={`pointer-events-none absolute -right-[10%] bottom-[6%] z-0 aspect-[3/4] w-[72%] ${R_CARD} sm:-right-[12%] sm:bottom-[8%] lg:-right-[14%] lg:w-[68%]`}
                  style={{ backgroundColor: lavender }}
                  aria-hidden
                />
                <div className="relative z-[1] mx-auto w-[92%] lg:mx-0 lg:ml-auto lg:mr-0 lg:w-[90%]">
                  <div className={`relative overflow-hidden ${R_CARD} ${SHADOW_MEDIA}`}>
                    <Image
                      loading="lazy"
                      src={IT_PHOTO_SRC}
                      alt="Caméra de sécurité professionnelle"
                      width={960}
                      height={960}
                      sizes="(max-width: 1024px) 92vw, 560px"
                      className="aspect-square w-full object-cover grayscale-[0.35] sm:grayscale-[0.25] lg:aspect-[5/6] lg:max-h-[min(32rem,70vh)]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-[#0D0B4A]/[0.18] mix-blend-multiply"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
                      {BUBBLE_POSITIONS.map((pos, i) => (
                        <div
                          key={i}
                          className={`absolute flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-white/60 ${SHADOW_POP} sm:h-14 sm:w-14 ${pos.className}`}
                          style={{ backgroundColor: lavender }}
                        >
                          <Image
                            src={MONITOR_ICON_SRC}
                            alt=""
                            width={22}
                            height={22}
                            className="h-[22px] w-[22px] object-contain opacity-95"
                          />
                        </div>
                      ))}
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
