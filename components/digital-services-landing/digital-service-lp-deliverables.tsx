import Link from "next/link";
import type { DigitalServiceDefinition } from "@/lib/digital-services-catalog";
import { BRAND, POLE_THEMES } from "@/lib/brand-design-system";
import { BTN_PRIMARY_INK, PAGE_X, R_CARD, SECTION_PAD, SHADOW_SURFACE, TEXT_INK, TEXT_INK_MUTED } from "@/lib/home-ui";

const digital = POLE_THEMES.digital;

const eyebrowClass = `inline-flex w-fit items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${digital.tag.bgClass} ${digital.tag.textClass}`;

function CheckIcon() {
  return (
    <span
      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${digital.primary.bgClass} font-sans text-sm font-bold text-white shadow-[0_2px_10px_rgba(13,11,74,0.12)]`}
      aria-hidden
    >
      ✓
    </span>
  );
}

export function DigitalServiceLpDeliverables({ service }: { service: DigitalServiceDefinition }) {
  return (
    <section className={BRAND.canvas.bgClass}>
      <div className={PAGE_X}>
        <div className={`mx-auto w-full max-w-screen-xl ${SECTION_PAD}`}>
          <div className="mx-auto max-w-3xl text-center">
            <p className={`mx-auto ${eyebrowClass}`}>Ce que vous obtenez</p>
            <h2 className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl ${TEXT_INK}`}>
              Un cadrage clair, des livrables actionnables
            </h2>
            <p className={`mt-4 font-sans text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
              Contenu pensé pour vos campagnes : message cohérent avec l’annonce, preuves et appel à l’action explicite.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="flex flex-col gap-4">
              {service.lp.bullets.map((label) => (
                <li
                  key={label}
                  className={`flex items-start gap-4 bg-white px-5 py-4 sm:px-6 sm:py-5 ${R_CARD} border border-black/[0.06] ${SHADOW_SURFACE}`}
                >
                  <CheckIcon />
                  <p className={`pt-1 font-sans text-base font-semibold leading-snug sm:text-[1.05rem] ${TEXT_INK}`}>
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className={`mx-auto mt-12 max-w-3xl space-y-5 ${R_CARD} border border-black/[0.06] bg-white px-6 py-7 sm:px-8 sm:py-8 ${SHADOW_SURFACE}`}>
            <h3 className={`font-display text-xl font-bold ${TEXT_INK}`}>Comment on travaille avec vous</h3>
            {service.body.map((p, i) => (
              <p key={i} className={`font-sans text-base leading-relaxed ${TEXT_INK_MUTED}`}>
                {p}
              </p>
            ))}
            <Link href="/contact" className={`${BTN_PRIMARY_INK} mt-2`}>
              Lancer la discussion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
