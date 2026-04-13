import { BRAND } from "@/lib/brand-design-system";
import { ConsentPreferencesPanel } from "@/components/technology-group-home/consent-preferences-panel";
import { SiteFooter } from "@/components/technology-group-home/site-footer";
import { DigitalTopNavigation } from "./digital-top-navigation";

type DigitalPolePageShellProps = {
  children: React.ReactNode;
  /** Uniquement sur la landing `/digital`. */
  logoAriaCurrent?: boolean;
};

export function DigitalPolePageShell({ children, logoAriaCurrent = false }: DigitalPolePageShellProps) {
  return (
    <div className={`min-h-full font-sans text-base leading-relaxed text-[#0D0B4A] antialiased ${BRAND.canvas.bgClass}`}>
      <DigitalTopNavigation logoAriaCurrent={logoAriaCurrent} />
      <ConsentPreferencesPanel />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
