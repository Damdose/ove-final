import type { FaqItem } from "@/components/digital-services-landing/digital-faq-sections-data";
import { DIGITAL_FAQ_SECTIONS } from "@/components/digital-services-landing/digital-faq-sections-data";

type FaqPlanEntry = { sectionId: string; count: number };

const DEFAULT_LP_FAQ_PLAN: readonly FaqPlanEntry[] = [
  { sectionId: "processus", count: 2 },
  { sectionId: "tarifs-contrats", count: 2 },
  { sectionId: "sites-web", count: 1 },
];

/** Sections FAQ les plus pertinentes par page service (LP acquisition / Google Ads). */
const LP_FAQ_BY_SLUG: Record<string, readonly FaqPlanEntry[]> = {
  "google-ads": [{ sectionId: "publicite", count: 5 }],
  "meta-ads": [{ sectionId: "publicite", count: 5 }],
  "campagne-video-youtube-tiktok": [
    { sectionId: "publicite", count: 2 },
    { sectionId: "reseaux-contenu", count: 2 },
    { sectionId: "processus", count: 1 },
  ],
  "landing-page": [
    { sectionId: "ecommerce", count: 3 },
    { sectionId: "sites-web", count: 2 },
  ],
  "site-e-commerce": [
    { sectionId: "ecommerce", count: 3 },
    { sectionId: "sites-web", count: 2 },
  ],
  "sites-vitrine": [{ sectionId: "sites-web", count: 4 }, { sectionId: "processus", count: 1 }],
  "developpement-wordpress-shopify": [
    { sectionId: "sites-web", count: 4 },
    { sectionId: "processus", count: 1 },
  ],
  "refonte-de-sites-existants": [
    { sectionId: "sites-web", count: 3 },
    { sectionId: "ecommerce", count: 1 },
    { sectionId: "maintenance", count: 1 },
  ],
  "charte-graphique": [{ sectionId: "branding", count: 4 }, { sectionId: "processus", count: 1 }],
  "creation-de-logo": [{ sectionId: "branding", count: 4 }, { sectionId: "processus", count: 1 }],
  "reseaux-sociaux-branding": [{ sectionId: "branding", count: 3 }, { sectionId: "reseaux-contenu", count: 2 }],
  "support-print-digital": [{ sectionId: "branding", count: 4 }, { sectionId: "processus", count: 1 }],
  "creation-de-contenus": [
    { sectionId: "reseaux-contenu", count: 4 },
    { sectionId: "publicite", count: 1 },
  ],
  "gestion-des-reseaux-sociaux": [{ sectionId: "reseaux-contenu", count: 5 }],
  "strategie-social-media": [{ sectionId: "reseaux-contenu", count: 4 }, { sectionId: "processus", count: 1 }],
};

function sectionItems(id: string): FaqItem[] {
  return DIGITAL_FAQ_SECTIONS.find((b) => b.id === id)?.items ?? [];
}

function dedupeByQuestion(items: FaqItem[]): FaqItem[] {
  const seen = new Set<string>();
  const out: FaqItem[] = [];
  for (const it of items) {
    const k = it.question.trim();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(it);
  }
  return out;
}

/** FAQ courte et ciblée pour les LP services (cohérence annonces → page). */
export function getDigitalServiceLpFaqItems(slug: string, maxItems = 5): FaqItem[] {
  const plan = LP_FAQ_BY_SLUG[slug] ?? DEFAULT_LP_FAQ_PLAN;
  const collected: FaqItem[] = [];
  for (const { sectionId, count } of plan) {
    collected.push(...sectionItems(sectionId).slice(0, count));
  }
  return dedupeByQuestion(collected).slice(0, maxItems);
}
