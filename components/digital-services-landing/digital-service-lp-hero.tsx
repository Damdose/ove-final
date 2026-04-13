import Image from "next/image";
import Link from "next/link";
import type { DigitalServiceDefinition } from "@/lib/digital-services-catalog";
import { POLE_THEMES } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BTN_PRIMARY_INK,
  PAGE_X,
  R_CARD,
  SECTION_PAD,
  SHADOW_MEDIA,
  SHADOW_SURFACE,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";

const digital = POLE_THEMES.digital;

const badgeClass = `inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${digital.primary.bgClass} ${digital.primary.textOnPrimaryClass}`;

export function DigitalServiceLpHero({ service }: { service: DigitalServiceDefinition }) {
  return (
    <header className={`relative overflow-hidden ${SECTION_PAD} pb-10 sm:pb-12 lg:pb-14`}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <Link
            href="/digital"
            className={`inline-flex text-sm font-medium ${TEXT_INK_MUTED} underline decoration-emerald-400/45 decoration-2 underline-offset-[6px] transition-colors hover:decoration-emerald-400`}
          >
            ← Tous les services Digital
          </Link>

          <div
            className={`mt-8 overflow-hidden bg-white ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ring-1 ring-black/[0.04]`}
          >
            <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                <p className={badgeClass}>{service.lp.eyebrow}</p>
                <h1
                  className={`mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08] ${TEXT_INK}`}
                >
                  {service.title}
                </h1>
                <p className={`mt-4 max-w-xl text-lg font-medium leading-relaxed sm:text-xl ${TEXT_INK}`}>
                  {service.lp.subheadline}
                </p>
                <p className={`mt-4 max-w-xl text-base leading-relaxed ${TEXT_INK_MUTED}`}>{service.description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link href="/contact" className={BTN_PRIMARY_INK}>
                    Demander un devis
                  </Link>
                  <Link
                    href="/contact"
                    className={`inline-flex h-14 min-w-[12rem] items-center justify-center rounded-xl border border-black/[0.1] bg-white px-6 text-lg font-medium text-[#0D0B4A] no-underline transition-colors hover:bg-black/[0.02]`}
                  >
                    Parler à un expert
                  </Link>
                </div>
              </div>
              <div className={`relative h-full min-h-[260px] bg-neutral-100 sm:min-h-[320px] lg:min-h-[22rem] ${SHADOW_MEDIA}`}>
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
