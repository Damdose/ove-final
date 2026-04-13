import { DigitalLandingFaqSection } from "@/components/digital-services-landing/digital-landing-faq-section";
import { DigitalPolePageShell } from "@/components/digital-services-landing/digital-pole-page-shell";
import { DIGITAL_FAQ_SECTIONS } from "@/components/digital-services-landing/digital-faq-sections-data";
import { BRAND } from "@/lib/brand-design-system";
import { PAGE_X, SECTION_PAD, TEXT_INK, TEXT_INK_MUTED } from "@/lib/home-ui";
import type { Metadata } from "next";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DIGITAL_FAQ_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\s*\n\n+\s*/g, " ").trim(),
      },
    })),
  ),
};

export const metadata: Metadata = {
  title: "FAQ — Pôle Digital Ovedex",
  description:
    "FAQ complète : sites web, e-commerce, branding, Google & Meta Ads, réseaux sociaux, méthode projet, tarifs, maintenance, RGPD et accessibilité.",
  openGraph: {
    title: "FAQ — Pôle Digital Ovedex",
    description:
      "Plus de quarante réponses détaillées sur nos prestations digitales, nos modalités et notre façon de collaborer.",
    type: "website",
  },
};

export default function DigitalFaqPage() {
  return (
    <DigitalPolePageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className={BRAND.canvas.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={`${SECTION_PAD} pb-4 pt-10 sm:pt-12 lg:pb-6`}>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  FAQ
                </div>
                <h1 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                  Questions fréquentes
                </h1>
                <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${TEXT_INK_MUTED}`}>
                  Une FAQ structurée par thème : de la création de site à la publicité en passant par la méthode projet, les
                  tarifs et la conformité. Utilisez le sommaire pour aller directement à la rubrique qui vous concerne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalLandingFaqSection mode="full" />
    </DigitalPolePageShell>
  );
}
