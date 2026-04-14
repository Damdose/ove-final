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
import { IT_FEATURE_BULLETS, IT_STATS } from "./it-landing-data";

const itTheme = POLE_THEMES.it;

const IMG_CYBER =
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82";

const IMG_CLOUD =
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82";

const IMG_PROJET =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82";

const BTN_WHITE_ON_NAVY = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} bg-white px-6 text-lg font-medium ${TEXT_INK} no-underline shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink`;

const BTN_IT_INK = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} ${BG_INK} px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${RING_INK_FOCUS}`;

function BulletCheck() {
  return (
    <span className="mt-1 flex h-2.5 w-2.5 shrink-0 rounded-full bg-purple-400" aria-hidden />
  );
}

export function ItLandingFeatureSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                <div className="order-2 lg:order-1">
                  <div
                    className={`inline-flex items-center rounded-lg px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] ${itTheme.primary.bgClass} ${itTheme.primary.textOnPrimaryClass}`}
                  >
                    IT
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Cybersécurité &amp; résilience opérationnelle
                  </h2>
                  <p className="mt-5 max-w-xl font-sans text-base font-normal leading-relaxed text-white/90 sm:text-lg">
                    Durcissement progressif, MFA, sauvegardes testées et supervision : nous réduisons la surface
                    d’attaque tout en gardant vos équipes productives.
                  </p>
                  <div className="mt-8 flex flex-col gap-5 font-display text-lg font-semibold leading-snug lg:mt-10">
                    {IT_STATS.map((row) => (
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
                    className={`pointer-events-none absolute -right-[10%] bottom-6 top-6 z-0 w-[min(92%,420px)] sm:bottom-8 sm:top-8 lg:-right-[6%] lg:bottom-10 lg:top-10 lg:w-[min(88%,520px)] ${itTheme.primary.bgClass} rounded-[2.75rem] opacity-95`}
                  />
                  <div
                    className={`relative z-10 ml-0 overflow-hidden ${R_CARD} shadow-[0_28px_60px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 lg:ml-4`}
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      alt="Analyse cybersécurité et supervision"
                      src={IMG_CYBER}
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
                    className={`pointer-events-none absolute left-0 bottom-6 top-6 z-0 w-[min(78%,400px)] rounded-r-[2.75rem] sm:bottom-8 sm:top-8 lg:bottom-10 lg:top-10 lg:w-[min(72%,440px)] ${itTheme.primary.bgClass}`}
                  />
                  <div className={`relative z-10 ml-6 overflow-hidden sm:ml-10 lg:ml-14 ${R_CARD} ${SHADOW_MEDIA} ring-1 ring-black/[0.06]`}>
                    <Image
                      sizes="(max-width: 1024px) 100vw, 960px"
                      alt="Infrastructure cloud et réseau d’entreprise"
                      src={IMG_CLOUD}
                      width={960}
                      height={960}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover sm:aspect-square ${R_CARD}`}
                    />
                  </div>
                </div>
                <div className="order-2 lg:order-2">
                  <div
                    className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${itTheme.primary.bgClass} ${itTheme.primary.textOnPrimaryClass}`}
                  >
                    IT
                  </div>
                  <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    Cloud, réseau &amp; collaboration
                  </h2>
                  <p className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK}`}>
                    Architectures hybrides, migrations Microsoft 365, VPN et segmentation : nous sécurisons les flux entre
                    vos sites, vos utilisateurs et vos fournisseurs SaaS.
                  </p>
                  <Link href="/contact" className={`${BTN_IT_INK} mt-10`}>
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
                  <div
                    className={`inline-flex items-center rounded-lg px-3 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.16em] ${itTheme.primary.bgClass} ${itTheme.primary.textOnPrimaryClass}`}
                  >
                    IT
                  </div>
                  <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                    Conseil, projets SI &amp; exploitation
                  </h2>
                  <p className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                    Cadrage, architecture cible, recette et documentation : des livrables exploitables par vos équipes
                    et les nôtres pour accélérer sans dette opaque.
                  </p>
                  <ul className="mt-8 flex flex-col gap-5">
                    {IT_FEATURE_BULLETS.map((b) => (
                      <li key={b.id ?? b.text} className="flex items-start gap-4">
                        <BulletCheck />
                        <p className={`pt-0.5 font-sans text-base font-bold leading-snug sm:text-[1.05rem] ${TEXT_INK}`}>
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
                      alt="Atelier de pilotage et projet SI"
                      src={IMG_PROJET}
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
