import type { PoleId } from "@/lib/brand-design-system";
import { DigitalTopNavigation } from "@/components/digital-services-landing/digital-top-navigation";
import { ItPageBanner } from "@/components/it-landing/it-page-banner";
import { SolutionsPageBanner } from "@/components/technical-solutions-landing/solutions-page-banner";

export type PoleTopNavigationProps = {
  pole: PoleId;
};

/**
 * Barre de navigation du pôle concerné (Digital, Solutions ou IT).
 * À utiliser sur les pages « satellites » (articles, cas clients, fiches service) pour conserver le menu du bon pôle.
 */
export function PoleTopNavigation({ pole }: PoleTopNavigationProps) {
  switch (pole) {
    case "digital":
      return <DigitalTopNavigation />;
    case "solutions":
      return <SolutionsPageBanner />;
    case "it":
      return <ItPageBanner />;
  }
}
