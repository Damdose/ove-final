import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";
import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { MobileStickyCta } from "@/components/technology-group-home/mobile-sticky-cta";
import { SiteFooter } from "@/components/technology-group-home/site-footer";
import { TestimonialsCarousel } from "@/components/technology-group-home/testimonials-carousel";
import { BRAND } from "@/lib/brand-design-system";
import { SolutionsCaseStudiesSection } from "./solutions-case-studies-section";
import { SolutionsHero } from "./solutions-hero";
import { SolutionsLandingFaqSection } from "./solutions-landing-faq-section";
import { SolutionsLandingFeatureSections } from "./solutions-landing-feature-sections";
import { SolutionsLandingPartnersWhy } from "./solutions-landing-partners-why";
import { SolutionsLandingSectors } from "./solutions-landing-sectors";
import { SolutionsLandingServicesCarousel } from "./solutions-landing-services-carousel";
import { SolutionsTopNavigation } from "./solutions-top-navigation";

/** Landing pôle Solutions — même parcours UX que `/digital`, couleurs et contenus Solutions. */
export function TechnicalSolutionsLandingPage() {
  return (
    <div className={`min-h-full font-sans text-base leading-relaxed text-[#0D0B4A] antialiased ${BRAND.canvas.bgClass}`}>
      <SolutionsTopNavigation />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">
        <SolutionsHero />
        <SolutionsLandingPartnersWhy />
        <SolutionsLandingFeatureSections />
        <SolutionsLandingServicesCarousel />
        <SolutionsLandingSectors />
        <TestimonialsCarousel />
        <SolutionsCaseStudiesSection />
        <SolutionsLandingFaqSection />
        <ClosingCtaSection
          heading="Un projet technique ou multi-sites ?"
          body="Parlons contraintes, normes et planning — les coordonnées complètes figurent sur la page contact."
        />
      </main>
      <SiteFooter pole="solutions" />
      <MobileStickyCta />
    </div>
  );
}
