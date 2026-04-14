import Image from "next/image";
import { BRAND, POLE_THEMES } from "@/lib/brand-design-system";
import { BD_CARD, PAGE_X, R_CARD, SECTION_PAD, SHADOW_SURFACE, TEXT_INK, TEXT_INK_MUTED } from "@/lib/home-ui";
import { SECTOR_CARDS } from "./data";

const solutions = POLE_THEMES.solutions;

const eyebrowSecteurs = `inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutions.primary.bgClass} ${solutions.primary.textOnPrimaryClass}`;

const sectorPill = `inline-flex max-w-[min(100%,11rem)] items-center justify-center text-balance rounded-full px-3 py-1.5 text-center font-sans text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.1em] shadow-[0_6px_18px_rgba(13,11,74,0.18)] ring-1 ring-white/40 sm:text-xs ${solutions.primary.bgClass} ${solutions.primary.textOnPrimaryClass}`;

export function SolutionsLandingSectors() {
  return (
    <section id="secteurs" className={BRAND.canvas.bgClass}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
              <div className={eyebrowSecteurs}>Secteurs</div>
              <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                Nos secteurs d&apos;activité
              </h2>
              <p
                className={`mx-auto mt-4 max-w-2xl text-pretty font-sans text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}
              >
                Une approche technique adaptée aux contraintes de chaque vertical — sûreté, réseaux et environnements
                sensibles.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:max-w-4xl sm:grid-cols-2 sm:gap-4 lg:max-w-5xl lg:grid-cols-3">
              {SECTOR_CARDS.map((card) => (
                <article
                  key={card.id}
                  className={`relative overflow-hidden ${R_CARD} ${BD_CARD} bg-neutral-100 ring-1 ring-[#0D0B4A]/[0.07] ${SHADOW_SURFACE}`}
                >
                  <div className="relative h-28 w-full overflow-hidden sm:h-32">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes={card.imageSizes}
                      className="object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0D0B4A]/78 via-[#0D0B4A]/32 to-[#0D0B4A]/[0.03]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-60"
                      style={{
                        background: "radial-gradient(120% 80% at 50% 100%, rgba(96,165,250,0.22), transparent 55%)",
                      }}
                      aria-hidden
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4">
                      <span className={sectorPill}>{card.badge}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
