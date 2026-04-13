import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { SiteFooter } from "@/components/technology-group-home/site-footer";
import { ItCapabilitiesSection } from "./it-capabilities-section";
import { ItLandingHero } from "./it-landing-hero";
import { ItPageBanner } from "./it-page-banner";

export function ItLandingPage() {
  return (
    <div className="flex min-h-full flex-col bg-white font-sans text-base leading-relaxed text-brand-ink antialiased">
      <ItPageBanner />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">
        <ItLandingHero />
        <ItCapabilitiesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
