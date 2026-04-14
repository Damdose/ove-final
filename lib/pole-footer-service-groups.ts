import type { PoleId } from "@/lib/brand-design-system";
import { SERVICE_NAV_TABS } from "@/components/digital-services-landing/digital-services-landing-content";
import { SOLUTIONS_SERVICE_NAV_TABS } from "@/components/technical-solutions-landing/data";
import { IT_SERVICE_NAV_TABS } from "@/components/it-landing/it-landing-data";

export type PoleFooterServiceGroup = {
  heading: string;
  links: readonly { href: string; label: string }[];
};

function joinTabHeading(labelLines: readonly [string, string]): string {
  return `${labelLines[0]} ${labelLines[1]}`.replace(/\s+/g, " ").trim();
}

/** Familles de services pour le footer (mêmes liens que le mega-menu du pôle). */
export function poleFooterServiceGroups(pole: PoleId): PoleFooterServiceGroup[] {
  switch (pole) {
    case "digital":
      return SERVICE_NAV_TABS.map((tab) => ({
        heading: joinTabHeading(tab.labelLines),
        links: tab.links,
      }));
    case "solutions":
      return SOLUTIONS_SERVICE_NAV_TABS.map((tab) => ({
        heading: joinTabHeading(tab.labelLines),
        links: tab.links,
      }));
    case "it":
      return IT_SERVICE_NAV_TABS.map((tab) => ({
        heading: joinTabHeading(tab.labelLines),
        links: tab.links,
      }));
  }
}
