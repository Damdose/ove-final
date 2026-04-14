import { SolutionsLandingFaqSection } from "@/components/technical-solutions-landing/solutions-landing-faq-section";
import { SolutionsPolePageShell } from "@/components/technical-solutions-landing/solutions-pole-page-shell";
import { FAQ_ITEMS } from "@/components/technical-solutions-landing/data";
import { BRAND, POLE_THEMES } from "@/lib/brand-design-system";
import { PAGE_X, SECTION_PAD, TEXT_INK, TEXT_INK_MUTED } from "@/lib/home-ui";
import type { Metadata } from "next";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/\s*\n\n+\s*/g, " ").trim(),
    },
  })),
};

export const metadata: Metadata = {
  title: "FAQ — Pôle Solutions Ovedex",
  description:
    "Questions fréquentes : types de bâtiments, marques et technologies, maintenance, reprise d’installations existantes et interventions multi-sites.",
  openGraph: {
    title: "FAQ — Pôle Solutions Ovedex",
    description: "Réponses sur nos prestations courants faibles, sûreté et modalités d’intervention.",
    type: "website",
  },
};

const solutions = POLE_THEMES.solutions;
const badge = `inline-flex items-center justify-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutions.primary.bgClass} ${solutions.primary.textOnPrimaryClass}`;

export default function SolutionsFaqPage() {
  return (
    <SolutionsPolePageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className={BRAND.canvas.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={`${SECTION_PAD} pb-4 pt-10 sm:pt-12 lg:pb-6`}>
              <div className="mx-auto max-w-3xl text-center">
                <div className={badge}>FAQ</div>
                <h1 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                  Questions fréquentes
                </h1>
                <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                  Tout savoir sur nos interventions Solutions : périmètre, méthode et suivi des installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SolutionsLandingFaqSection variant="page" />
    </SolutionsPolePageShell>
  );
}
