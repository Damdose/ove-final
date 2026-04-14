import type { ReactNode } from "react";
import { BRAND } from "@/lib/brand-design-system";
import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { MobileStickyCta } from "@/components/technology-group-home/mobile-sticky-cta";
import { SiteFooter } from "@/components/technology-group-home/site-footer";
import { ItTopNavigation } from "./it-top-navigation";

type ItPolePageShellProps = {
  children: ReactNode;
};

export function ItPolePageShell({ children }: ItPolePageShellProps) {
  return (
    <div className={`min-h-full font-sans text-base leading-relaxed text-[#0D0B4A] antialiased ${BRAND.canvas.bgClass}`}>
      <ItTopNavigation />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter pole="it" />
      <MobileStickyCta />
    </div>
  );
}
