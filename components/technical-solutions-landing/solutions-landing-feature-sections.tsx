import Image from "next/image";
import Link from "next/link";
import { BRAND, POLE_THEMES } from "@/lib/brand-design-system";
import {
  BG_INK,
  BTN_PRIMARY_INK,
  PAGE_X,
  R_BTN,
  R_CARD,
  RING_INK_FOCUS,
  SECTION_PAD,
  SHADOW_MEDIA,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import { GTB_BULLETS, SURETE_STATS } from "./technical-solutions-landing-content";

const solutions = POLE_THEMES.solutions;

const IMG_SURETE_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e41f6589353eb72890f1c_unnamed%20(8).jpg";

const PHOTO_RESEAU =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927308251d553db88a7ad52_photo%20(2).avif";

const IMG_GTB_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e4242d89d4813ba20ef9d_unnamed%20(9).jpg";

const BTN_WHITE_ON_NAVY = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} bg-white px-6 text-lg font-medium ${TEXT_INK} no-underline shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink`;

const BTN_SOL_INK = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} ${BG_INK} px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${RING_INK_FOCUS}`;

export function SolutionsLandingFeatureSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="order-2 lg:order-1">
                  <div
                    className={`inline-flex items-center rounded-lg px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] ${solutions.primary.bgClass} ${solutions.primary.textOnPrimaryClass}`}
                  >
                    Solutions
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Sûreté électronique &amp; sécurité des sites
                  </h2>
                  <p className="mt-5 max-w-xl font-sans text-base font-normal leading-relaxed text-white/90 sm:text-lg">
                    Nous sécurisons vos bâtiments avec des solutions fiables et évolutives : vidéosurveillance HD,
                    contrôle d’accès centralisé, systèmes d’intrusion et supervision unifiée.
                  </p>
                  <div className="mt-8 flex flex-col gap-5 font-display text-lg font-semibold leading-snug lg:mt-10">
                    {SURETE_STATS.map((row) => (
                      <div key={row.id ?? row.label} className="flex items-start gap-4">
                        <div className="text-3xl font-bold leading-10 tabular-nums text-white">{row.value}</div>
                        <p className="max-w-xs pt-1 font-sans text-base font-normal leading-relaxed text-white/90">
                          {row.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={`${BTN_WHITE_ON_NAVY} mt-10`}>
                    Contacter un expert
                  </Link>
                </div>
                <div className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${solutions.primary.bgClass} rounded-[2.75rem] opacity-95`}
                  />
                  <div
                    className={`relative z-10 ml-0 overflow-hidden ${R_CARD} shadow-[0_28px_60px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt="Installation de sûreté et équipements de sécurité"
                      src={IMG_SURETE_SRC}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-square ${R_CARD}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={BRAND.canvas.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="relative order-1 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute left-0 bottom-6 top-6 z-0 w-[min(78%,400px)] rounded-r-[2.75rem] sm:bottom-8 sm:top-8 lg:bottom-10 lg:top-10 lg:w-[min(72%,440px)] ${solutions.primary.bgClass}`}
                  />
                  <div className={`relative z-10 ml-6 overflow-hidden sm:ml-10 lg:ml-14 ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06]`}>
                    <Image
                      sizes="(max-width: 1024px) 100vw, 960px"
                      alt="Baie technique et infrastructure réseau"
                      src={PHOTO_RESEAU}
                      width={960}
                      height={960}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-square ${R_CARD}`}
                    />
                  </div>
                </div>
                <div className="order-2 lg:order-2">
                  <div
                    className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutions.primary.bgClass} ${solutions.primary.textOnPrimaryClass}`}
                  >
                    Solutions
                  </div>
                  <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    Réseaux, communication &amp; infrastructures IoT
                  </h2>
                  <p className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK}`}>
                    Infrastructures réseau performantes : Wi-Fi professionnel, interphonie, IP sécurisé, capteurs IoT,
                    supervision et automatisation — pour une exploitation simple au quotidien.
                  </p>
                  <Link href="/contact" className={`${BTN_SOL_INK} mt-10`}>
                    Contacter un expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={BRAND.surfaceMuted.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center rounded-lg bg-blue-400 px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-white">
                    Solutions
                  </div>
                  <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    GTB, audiovisuel &amp; solutions techniques avancées
                  </h2>
                  <p className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    Systèmes intelligents pour le confort, la gestion énergétique et les opérations : GTB/GTC, salles de
                    réunion connectées, affichage dynamique, sonorisation et automatisation.
                  </p>
                  <ul className="mt-8 flex flex-col gap-5">
                    {GTB_BULLETS.map((b) => (
                      <li key={b.id ?? b.text} className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(13,11,74,0.1)] ring-1 ring-black/[0.06]">
                          <Image src={b.iconSrc} alt="" width={22} height={22} className="opacity-90" />
                        </span>
                        <p className={`pt-1.5 font-sans text-base font-bold leading-snug sm:text-[1.05rem] ${TEXT_INK}`}>
                          {b.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-10`}>
                    Contacter un expert
                  </Link>
                </div>
                <div className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${R_CARD} ${BG_INK}`}
                  />
                  <div className={`relative z-10 ml-0 overflow-hidden ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06] lg:ml-4`}>
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt="Salle de contrôle et équipements GTB"
                      src={IMG_GTB_SRC}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-[5/4] ${R_CARD}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
