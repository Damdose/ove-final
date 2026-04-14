/** Modèle partagé des fiches cas clients (détail + cartes). */

export interface CaseStudyItem {
  /** Segment d’URL pour `/case-studies/[slug]` */
  slug: string;
  href: string;
  imageSrc: string;
  category: string;
  title: string;
  excerpt: string;
  /** Texte d’introduction sous le titre sur la page détail */
  intro: string;
  /** Paragraphes du corps de page */
  paragraphs: string[];
  /** Bloc optionnel titre + liste (page détail) */
  outcomes?: { title: string; items: string[] };
}
