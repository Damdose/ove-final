import { ClosingCtaSection } from "./closing-cta-section";
import { ConsentPreferencesPanel } from "./consent-preferences-panel";
import { DigitalOfferingSection } from "./digital-offering-section";
import { HeroSection } from "./hero-section";
import { ItOfferingSection } from "./it-offering-section";
import { MissionSection } from "./mission-section";
import { NewsroomSection } from "./newsroom-section";
import { PillarsSection } from "./pillars-section";
import { SiteBanner } from "./site-banner";
import { MobileStickyCta } from "./mobile-sticky-cta";
import { SiteFooter } from "./site-footer";
import { SocialProofSection } from "./social-proof-section";
import { SolutionsOfferingSection } from "./solutions-offering-section";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { WhyChooseSection } from "./why-choose-section";

export function TechnologyGroupHomePage() {
  return (
    <div className="flex min-h-full flex-col bg-white font-sans text-base leading-relaxed text-[#0D0B4A] antialiased">
      <SiteBanner />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SocialProofSection />
        <PillarsSection />
        <DigitalOfferingSection />
        <SolutionsOfferingSection />
        <ItOfferingSection />
        <WhyChooseSection />
        <MissionSection />
        <TestimonialsCarousel />
        <NewsroomSection />
        <ClosingCtaSection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}
