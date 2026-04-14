import { BRAND } from "@/lib/brand-design-system";
import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { MobileStickyCta } from "@/components/technology-group-home/mobile-sticky-cta";
import { SiteFooter } from "@/components/technology-group-home/site-footer";
import { SolutionsTopNavigation } from "./solutions-top-navigation";

type SolutionsPolePageShellProps = {
  children: React.ReactNode;
};

export function SolutionsPolePageShell({ children }: SolutionsPolePageShellProps) {
  return (
    <div className={`min-h-full font-sans text-base leading-relaxed text-[#0D0B4A] antialiased ${BRAND.canvas.bgClass}`}>
      <SolutionsTopNavigation />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter pole="solutions" />
      <MobileStickyCta />
    </div>
  );
}
