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
import { ECOMMERCE_STATS, MARKETING_BULLETS } from "./digital-services-landing-content";

const digital = POLE_THEMES.digital;

/** Section « Contenu visuel » — alignée maquette (teal #5EC4A7, encre marque). Fond : blanc marque (alternance). */
const VIDEO_TEAL = "bg-[#5EC4A7]";
const VIDEO_INK = TEXT_INK;
const BTN_VIDEO_INK = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} ${BG_INK} px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${RING_INK_FOCUS}`;

/** CTA clair sur fond marine (section e-commerce). */
const BTN_WHITE_ON_NAVY = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} bg-white px-6 text-lg font-medium ${TEXT_INK} no-underline shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink`;

const IMG_ECOM =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e40dd7ce32fa8d81385e1_unnamed%20(5).jpg";

const IMG_VIDEO =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e41592e7bb1c0e63c05a9_unnamed%20(6).jpg";

const IMG_MARKETING =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e41b45afe7e8355898c24_unnamed%20(7).jpg";

export function DigitalLandingFeatureSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="order-2 lg:order-1">
                  <div
                    className={`inline-flex items-center rounded-lg px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] ${digital.primary.bgClass} ${digital.primary.textOnPrimaryClass}`}
                  >
                    Digital
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Sites web &amp; e-commerce sur mesure
                  </h2>
                  <p className="mt-5 max-w-xl font-sans text-base font-normal leading-relaxed text-white/90 sm:text-lg">
                    Nous créons des sites modernes, rapides et orientés conversion : vitrine, corporate,
                    e-commerce ou applications web. Chaque interface est pensée pour valoriser votre image,
                    fluidifier l’expérience utilisateur et maximiser la performance.
                  </p>
                  <div className="mt-8 flex flex-col gap-5 font-display text-lg font-semibold leading-snug lg:mt-10">
                    {ECOMMERCE_STATS.map((row) => (
                      <div key={row.id} id={row.id} className="flex items-start gap-4">
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
                <div
                  id="w-node-c4b2b98c-d316-2557-8fdf-9dd2b92c7aa5-6e0b5dcc"
                  className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${digital.primary.bgClass} rounded-[2.75rem] opacity-95`}
                  />
                  <div
                    className={`relative z-10 ml-0 overflow-hidden ${R_CARD} shadow-[0_28px_60px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt="Espace de travail avec écrans affichant maquettes web et code"
                      src={IMG_ECOM}
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
                <div
                  className="relative order-1 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0"
                  id="digital-feature-visuel-media"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute left-0 bottom-6 top-6 z-0 w-[min(78%,400px)] rounded-r-[2.75rem] sm:bottom-8 sm:top-8 lg:bottom-10 lg:top-10 lg:w-[min(72%,440px)] ${VIDEO_TEAL}`}
                  />
                  <div
                    className={`relative z-10 ml-6 overflow-hidden sm:ml-10 lg:ml-14 ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06]`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt="Caméra professionnelle sur trépied, plateau avec éclairage annulaire"
                      src={IMG_VIDEO}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-square ${R_CARD}`}
                    />
                  </div>
                </div>
                <div className="order-2 lg:order-2">
                  <div
                    className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${VIDEO_TEAL} text-white`}
                  >
                    Digital
                  </div>
                  <h2
                    className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${VIDEO_INK}`}
                  >
                    Contenu visuel &amp; production vidéo
                  </h2>
                  <p
                    className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${VIDEO_INK}`}
                  >
                    Nous produisons du contenu premium qui capte l’attention : vidéos, photos, visuels,
                    campagnes sociales. Des assets professionnels pour renforcer votre image, enrichir vos
                    campagnes et accélérer l’engagement.
                  </p>
                  <Link href="/contact" className={`${BTN_VIDEO_INK} mt-10`}>
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
                  <div className="inline-flex items-center rounded-lg bg-[#58c4b6] px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-white">
                    Digital
                  </div>
                  <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    Marketing digital &amp; acquisition
                  </h2>
                  <p className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    Nous déployons des stratégies complètes pour attirer, convertir et fidéliser vos clients.
                    De la publicité à l’automatisation, chaque action est orientée performance et retour sur
                    investissement.
                  </p>
                  <ul className="mt-8 flex flex-col gap-5">
                    {MARKETING_BULLETS.map((b) => (
                      <li key={b.id} id={b.id} className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${BG_INK} font-sans text-sm font-semibold leading-none text-white shadow-[0_2px_10px_rgba(13,11,74,0.18)]`}
                          aria-hidden
                        >
                          →
                        </span>
                        <p className={`pt-1.5 font-sans text-base font-bold leading-snug sm:text-[1.05rem] ${TEXT_INK}`}>
                          {b.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-10`}>
                    Contacter un expert
                  </Link>
                </div>
                <div
                  id="w-node-_90dd0f8d-75ce-61fb-9036-2a84053824a1-6e0b5dcc"
                  className="relative order-1 lg:order-2 isolate min-h-[260px] sm:min-h-[320px] lg:min-h-0"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${R_CARD} ${BG_INK}`}
                  />
                  <div
                    className={`relative z-10 ml-0 overflow-hidden ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06] lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt="Poste de travail avec écrans d’analyse marketing et tableaux de bord publicitaires"
                      src={IMG_MARKETING}
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
