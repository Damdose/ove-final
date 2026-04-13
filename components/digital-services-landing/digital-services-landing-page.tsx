import { BRAND } from "@/lib/brand-design-system";
import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";
import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { SiteFooter } from "@/components/technology-group-home/site-footer";
import { TestimonialsCarousel } from "@/components/technology-group-home/testimonials-carousel";
import { DigitalLandingCaseStudiesSection } from "./digital-landing-case-studies-section";
import { DigitalLandingFaqSection } from "./digital-landing-faq-section";
import { DigitalLandingFeatureSections } from "./digital-landing-feature-sections";
import { DigitalLandingHero } from "./digital-landing-hero";
import { DigitalLandingPartnersWhy } from "./digital-landing-partners-why";
import { DigitalLandingSectors } from "./digital-landing-sectors";
import { DigitalLandingServicesCarousel } from "./digital-landing-services-carousel";
import { DigitalTopNavigation } from "./digital-top-navigation";

export function DigitalServicesLandingPage() {
  return (
    <div className={`min-h-full font-sans text-base leading-relaxed text-[#0D0B4A] antialiased ${BRAND.canvas.bgClass}`}>
      <DigitalTopNavigation logoAriaCurrent />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">
        <DigitalLandingHero />
        <DigitalLandingPartnersWhy />
        <DigitalLandingFeatureSections />
        <DigitalLandingServicesCarousel />
        <DigitalLandingSectors />
        <TestimonialsCarousel />
        <DigitalLandingCaseStudiesSection />
        <DigitalLandingFaqSection />
        <ClosingCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
