import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { ItPolePageShell } from "@/components/it-landing/it-pole-page-shell";
import { getItCaseStudyCards } from "@/lib/case-studies-catalog";
import { BG_INK, PAGE_X, R_BTN, SECTION_PAD, TEXT_INK } from "@/lib/home-ui";
import { POLE_THEMES } from "@/lib/brand-design-system";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const path = "/it/cas-clients";
const canonical = absoluteUrl(path);
const itCaseStudies = getItCaseStudyCards();
const previewStudy = itCaseStudies[0];

export const metadata: Metadata = {
  title: "Cas clients — Pôle IT Ovedex",
  description:
    "Références infogérance, cybersécurité et projets SI pour entreprises, santé, finance et secteur public.",
  alternates: { canonical },
  openGraph: {
    title: "Cas clients — Pôle IT Ovedex",
    description:
      "Références infogérance, cybersécurité et projets SI pour entreprises, santé, finance et secteur public.",
    type: "website",
    url: canonical,
    locale: "fr_FR",
    ...(previewStudy
      ? {
          images: [
            {
              url: previewStudy.imageSrc,
              width: 960,
              height: 640,
              alt: previewStudy.title,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Cas clients — Pôle IT Ovedex",
    description:
      "Références infogérance, cybersécurité et projets SI pour entreprises, santé, finance et secteur public.",
    ...(previewStudy ? { images: [previewStudy.imageSrc] } : {}),
  },
};

const itTheme = POLE_THEMES.it;
const badge = `inline-flex items-center justify-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${itTheme.primary.bgClass} ${itTheme.primary.textOnPrimaryClass}`;

export default function ItCasClientsPage() {
  return (
    <ItPolePageShell>
      <div className="bg-gray-50">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={`${SECTION_PAD} pb-8 sm:pb-10`}>
              <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
                <div className={badge}>Cas clients</div>
                <h1 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                  Références IT
                </h1>
                <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg`}>
                  Projets sélectionnés : disponibilité, sécurité et évolution du SI pour organisations exigeantes.
                </p>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex h-12 items-center justify-center px-6 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 ${R_BTN} ${BG_INK}`}
                >
                  Parler de votre projet
                </Link>
              </div>
              <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {itCaseStudies.map((study, index) => (
                  <CaseStudyCard key={study.href} study={study} imagePriority={index < 3} poleAccent="it" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItPolePageShell>
  );
}
