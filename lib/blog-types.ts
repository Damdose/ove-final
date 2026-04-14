import type { PoleId } from "@/lib/brand-design-system";

export type BlogPost = {
  slug: string;
  title: string;
  pole: PoleId;
  excerpt: string;
  /** Meta description dédiée (≈150–160 car.) ; sinon l’extrait est utilisé. */
  seoDescription?: string;
  /** Mots-clés pour meta keywords + JSON-LD (pôles concernés uniquement). */
  keywords?: string[];
  readMinutes: string;
  /** Affichage court type « 12 mars 2026 » */
  publishedAtLabel: string;
  /** ISO 8601 (date seule) pour <time datetime> */
  publishedAtIso: string;
  imageSrc: string;
  imageAlt: string;
  body: string[];
};
