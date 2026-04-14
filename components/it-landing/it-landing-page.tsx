import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";
import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { MobileStickyCta } from "@/components/technology-group-home/mobile-sticky-cta";
import { SiteFooter } from "@/components/technology-group-home/site-footer";
import { TestimonialsCarousel } from "@/components/technology-group-home/testimonials-carousel";
import { BRAND } from "@/lib/brand-design-system";
import { ItCaseStudiesSection } from "./it-case-studies-section";
import { ItLandingFaqSection } from "./it-landing-faq-section";
import { ItLandingFeatureSections } from "./it-landing-feature-sections";
import { ItLandingHero } from "./it-landing-hero";
import { ItLandingPartnersWhy } from "./it-landing-partners-why";
import { ItLandingSectors } from "./it-landing-sectors";
import { ItLandingServicesCarousel } from "./it-landing-services-carousel";
import { ItTopNavigation } from "./it-top-navigation";

/** Landing pôle IT — même parcours UX que Digital / Solutions, couleurs et contenus IT. */
export function ItLandingPage() {
  return (
    <div className={`min-h-full font-sans text-base leading-relaxed text-[#0D0B4A] antialiased ${BRAND.canvas.bgClass}`}>
      <ItTopNavigation />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">
        <ItLandingHero />
        <ItLandingPartnersWhy />
        <ItLandingFeatureSections />
        <ItLandingServicesCarousel />
        <ItLandingSectors />
        <TestimonialsCarousel />
        <ItCaseStudiesSection />
        <ItLandingFaqSection />
        <ClosingCtaSection
          heading="Un projet IT ou une infogérance à structurer ?"
          body="Parlons périmètre, SLA et sécurité — les coordonnées complètes figurent sur la page contact."
        />
      </main>
      <SiteFooter pole="it" />
      <MobileStickyCta />
    </div>
  );
}
