import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { SolutionsPolePageShell } from "@/components/technical-solutions-landing/solutions-pole-page-shell";
import { getSolutionsCaseStudyCards } from "@/lib/case-studies-catalog";
import { BG_INK, PAGE_X, R_BTN, SECTION_PAD, TEXT_INK } from "@/lib/home-ui";
import { POLE_THEMES } from "@/lib/brand-design-system";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const path = "/solutions/cas-clients";
const canonical = absoluteUrl(path);
const solutionsCaseStudies = getSolutionsCaseStudyCards();
const previewStudy = solutionsCaseStudies[0];

export const metadata: Metadata = {
  title: "Cas clients — Pôle Solutions Ovedex",
  description:
    "Références installations courants faibles, sûreté électronique et supervision pour entreprises et sites sensibles.",
  alternates: { canonical },
  openGraph: {
    title: "Cas clients — Pôle Solutions Ovedex",
    description:
      "Références installations courants faibles, sûreté électronique et supervision pour entreprises et sites sensibles.",
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
    title: "Cas clients — Pôle Solutions Ovedex",
    description:
      "Références installations courants faibles, sûreté électronique et supervision pour entreprises et sites sensibles.",
    ...(previewStudy ? { images: [previewStudy.imageSrc] } : {}),
  },
};

const solutions = POLE_THEMES.solutions;
const badge = `inline-flex items-center justify-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutions.primary.bgClass} ${solutions.primary.textOnPrimaryClass}`;

export default function SolutionsCasClientsPage() {
  return (
    <SolutionsPolePageShell>
      <div className="bg-gray-50">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={`${SECTION_PAD} pb-8 sm:pb-10`}>
              <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
                <div className={badge}>Cas clients</div>
                <h1 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                  Références Solutions
                </h1>
                <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg`}>
                  Projets techniques sélectionnés : sûreté, réseaux et intégration sur sites exigeants.
                </p>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex h-12 items-center justify-center px-6 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 ${R_BTN} ${BG_INK}`}
                >
                  Parler de votre projet
                </Link>
              </div>
              <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {solutionsCaseStudies.map((study, index) => (
                  <CaseStudyCard key={study.href} study={study} imagePriority={index < 3} poleAccent="solutions" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SolutionsPolePageShell>
  );
}
