import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { SolutionsCaseStudiesSection } from "./solutions-case-studies-section";
import { SolutionsDiscoveryCtaSection } from "./solutions-discovery-cta-section";
import { SolutionsFaqSection } from "./solutions-faq-section";
import { SolutionsFeatureColumns } from "./solutions-feature-columns";
import { SolutionsHero } from "./solutions-hero";
import { SolutionsLogoMarquee } from "./solutions-logo-marquee";
import { SolutionsMarketingFooter } from "./solutions-marketing-footer";
import { SolutionsPageBanner } from "./solutions-page-banner";
import { SolutionsPageTestimonials } from "./solutions-page-testimonials";
import { SolutionsSectorsSection } from "./solutions-sectors-section";
import { SolutionsServicesCarousel } from "./solutions-services-carousel";
import { SolutionsWhySection } from "./solutions-why-section";

/**
 * Page « solutions techniques » alignée sur le gabarit Webflow /solutions (fond clair).
 */
export function TechnicalSolutionsLandingPage() {
  return (
    <div className="min-h-full bg-white font-sans text-base font-light leading-relaxed text-brand-ink antialiased">
      <SolutionsPageBanner />
      <ConsentPreferencesPanel />
      <main>
        <SolutionsHero />
        <section className="bg-white">
          <div className="max-sm:px-[3%] px-[5%]">
            <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
              <div className="2xl:pb-32 pt-20 pb-28">
                <SolutionsLogoMarquee />
                <SolutionsWhySection />
              </div>
            </div>
          </div>
        </section>
        <SolutionsFeatureColumns />
        <SolutionsServicesCarousel />
        <SolutionsSectorsSection />
        <SolutionsPageTestimonials />
        <SolutionsCaseStudiesSection />
        <SolutionsFaqSection />
        <SolutionsDiscoveryCtaSection />
      </main>
      <SolutionsMarketingFooter />
    </div>
  );
}
