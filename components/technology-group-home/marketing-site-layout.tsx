import type { ReactNode } from "react";
import { ConsentPreferencesPanel } from "./consent-preferences-panel";
import { SiteBanner } from "./site-banner";
import { SiteFooter } from "./site-footer";

/**
 * En-tête et pied de page alignés sur la homepage (pages généralistes).
 * Les pôles Digital / Solutions / IT utilisent leurs propres barres de navigation.
 */
export function MarketingSiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-[#f9f9f9] font-sans text-[#0D0B4A] antialiased">
      <SiteBanner />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
