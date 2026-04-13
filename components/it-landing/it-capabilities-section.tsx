import Image from "next/image";
import Link from "next/link";
import { POLE_THEMES } from "@/lib/brand-design-system";
import { INK, PAGE_X, R_BTN, SECTION_PAD, SHADOW_SURFACE, SHADOW_SURFACE_HOVER } from "@/lib/home-ui";
import { IT_FEATURE_ICON, IT_FEATURES } from "@/components/technology-group-home/content";

const theme = POLE_THEMES.it;

export function ItCapabilitiesSection() {
  return (
    <section className="bg-white">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X} ${SECTION_PAD}`}>
        <div className="mb-10 max-w-2xl lg:mb-14">
          <div
            className={`mb-3 inline-flex items-center px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white ${R_BTN}`}
            style={{ backgroundColor: theme.primary.hex }}
          >
            Expertises
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
            Un partenaire IT pour sécuriser et faire évoluer votre SI
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-brand-ink/75 sm:text-lg">
            Support, supervision, cloud et cybersécurité : des équipes dédiées et des processus
            éprouvés pour les environnements exigeants.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {IT_FEATURES.map((feature) => (
            <li
              key={feature.id ?? feature.text}
              id={feature.id}
              className={`flex flex-col gap-4 border border-black/[0.06] bg-neutral-50/80 p-6 ${R_BTN} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`}
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: INK }}
              >
                <Image src={IT_FEATURE_ICON} loading="lazy" alt="" width={22} height={22} className="h-[22px] w-[22px]" />
              </span>
              <span className="font-display text-lg font-semibold leading-snug text-brand-ink">{feature.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16">
          <Link
            href="/solutions"
            className={`inline-flex h-12 items-center justify-center border border-black/10 bg-white px-5 text-sm font-semibold text-brand-ink no-underline transition hover:bg-neutral-50 ${R_BTN}`}
          >
            Solutions techniques
          </Link>
          <Link
            href="/contact"
            className={`inline-flex h-12 items-center justify-center px-5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-92 ${R_BTN}`}
            style={{ backgroundColor: INK }}
          >
            Parler à un expert
          </Link>
        </div>
      </div>
    </section>
  );
}
