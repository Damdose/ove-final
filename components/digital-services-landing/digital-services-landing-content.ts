/** Données structurées pour la page « pôle digital » (extrait Webflow). */

import { buildDigitalServiceSlides } from "@/lib/digital-services-catalog";
import { DIGITAL_FAQ_SECTIONS, type FaqItem } from "./digital-faq-sections-data";

/** Visuels secteurs (Unsplash) — licence : https://unsplash.com/license */
function sectorStockPhoto(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=82`;
}

/** Même banque d’images, recadrage 3:2 pour cartes / pages cas clients */
function caseStudyHeroPhoto(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&h=1067&q=82`;
}

/** Identifiants Unsplash alignés cas clients ↔ tuiles secteurs */
const UNSPLASH_RETAIL_MODE = "photo-1441986300917-64674bd600d8";
const UNSPLASH_FINANCE_BI = "photo-1460925895917-afdab827c52f";
const UNSPLASH_EDUCATION_TEAM = "photo-1523240795612-9a054b0db644";
const UNSPLASH_HEALTH_CLINIC = "photo-1576091160399-112ba8d25d1d";
const UNSPLASH_HOSPITALITY = "photo-1566073771259-6a8506099945";
const UNSPLASH_INDUSTRIAL_B2B = "photo-1504307651254-35680f356dfd";

export interface PartnerLogo {
  src: string;
  alt: string;
}

export interface WhyCard {
  titleHtml: "expertise" | "agile" | "roi";
  body: string;
}

export interface StatRow {
  id: string;
  valueKind: "text" | "percent";
  value: string;
  label: string;
}

export interface MarketingBullet {
  id: string;
  label: string;
}

export interface ServiceCard {
  /** Identifiant service — icône du carrousel */
  slug: string;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ServiceSlide {
  ariaLabel: string;
  cards: ServiceCard[];
}

export interface SectorCard {
  id: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
  badge: string;
}

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

export type { DigitalFaqSectionBlock, FaqItem } from "./digital-faq-sections-data";
export { DIGITAL_FAQ_SECTIONS };

export interface ServiceNavLink {
  href: string;
  label: string;
}

export interface ServiceNavTab {
  id: string;
  /** Texte affiché (lignes gérées dans le composant) */
  labelLines: [string, string];
  links: ServiceNavLink[];
}

export const DIGITAL_LOGO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c76c50366b1991a7c9aa9_logovedex%201%20(1).svg";

export const DIGITAL_HERO_ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c7430878b06826a1f85f5_Icon%20(26).svg";

export const DIGITAL_HERO_IMAGE_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e4617ef4052eb32f30eeb_unnamed%20(14).jpg";

export const DIGITAL_BLUR_GRADIENT_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/691e5a2f4ad9018806391cc3_Blur%20Gradient%20(2).svg";

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10169_Bouygues-Logo-bianco.avif",
    alt: "",
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016f_VE_RGB_W.webp",
    alt: "",
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10166_Eiffage_Energie-systemes_2400_03_white_RGB-resize1024x398-crop1001x339-resize500x169.avif",
    alt: "",
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016c_SPIE-logo.avif",
    alt: "",
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10179_ENGIE-Customer-References-Logo%402x.6c4974215afc9e93f8694f555d6ceacc4a4c32d2.avif",
    alt: "",
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10174_logo_snef_v3.avif",
    alt: "",
  },
];

export const WHY_CARDS: WhyCard[] = [
  {
    titleHtml: "expertise",
    body: "Nous combinons créativité, design, technique et analyse pour délivrer des résultats concrets.",
  },
  {
    titleHtml: "agile",
    body: "Un interlocuteur dédié, une production rapide, et zéro complexité pour votre entreprise.",
  },
  {
    titleHtml: "roi",
    body: "Chaque action est suivie, optimisée, et alimentée par des KPIs précis pour maximiser votre retour sur investissement.",
  },
];

export const ECOMMERCE_STATS: StatRow[] = [
  {
    id: "w-node-c71c08cd-8ad6-6159-4255-24ab4d81db97-6e0b5dcc",
    valueKind: "text",
    value: "+100",
    label: "Sites web & projets digitaux réalisés",
  },
  {
    id: "w-node-_7c6c5235-2a2a-380b-2e0c-33936ee29097-6e0b5dcc",
    valueKind: "percent",
    value: "+65%",
    label: "Max d’augmentation constatée sur les conversions",
  },
  {
    id: "w-node-_46742903-4288-b53b-6e75-aa8e52edba65-6e0b5dcc",
    valueKind: "text",
    value: "20j",
    label: "Délai moyen pour livrer un site complet & opérationnel",
  },
];

export const MARKETING_BULLETS: MarketingBullet[] = [
  { id: "w-node-_9795c107-d221-dee5-0ac0-60072bb069ba-6e0b5dcc", label: "Google Ads, Meta Ads & LinkedIn Ads" },
  { id: "m-seo", label: "Référencement naturel (SEO)" },
  {
    id: "w-node-_9795c107-d221-dee5-0ac0-60072bb069c6-6e0b5dcc",
    label: "Emailing & automatisation marketing",
  },
];

export const SERVICE_SLIDES: ServiceSlide[] = buildDigitalServiceSlides();

export const SECTOR_CARDS: SectorCard[] = [
  {
    id: "secteur-industrie",
    href: "/digital",
    imageSrc: sectorStockPhoto("photo-1581092918056-0c4c3acd3789"),
    imageAlt: "Ingénierie et production industrielle, contexte manufacturier",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Industrie",
  },
  {
    id: "secteur-tertiaire",
    href: "/digital",
    imageSrc: sectorStockPhoto("photo-1497366216548-37526070297c"),
    imageAlt: "Espaces de travail et bureaux modernes pour le secteur tertiaire",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Tertiaire",
  },
  {
    id: "secteur-logistique",
    href: "/digital",
    imageSrc: sectorStockPhoto("photo-1578575437130-527eed3abbec"),
    imageAlt: "Chaîne logistique, entrepôt et flux de marchandises",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Logistique",
  },
  {
    id: "secteur-retail-mode",
    href: "/case-studies/client-g",
    imageSrc: sectorStockPhoto(UNSPLASH_RETAIL_MODE),
    imageAlt: "Enseigne prêt-à-porter : rails de vêtements et espace de vente au détail",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Retail & mode",
  },
  {
    id: "secteur-finance",
    href: "/case-studies/client-d",
    imageSrc: sectorStockPhoto(UNSPLASH_FINANCE_BI),
    imageAlt: "Environnement de travail finance : indicateurs et pilotage sur écran",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Finance",
  },
  {
    id: "secteur-education",
    href: "/case-studies/client-c",
    imageSrc: sectorStockPhoto(UNSPLASH_EDUCATION_TEAM),
    imageAlt: "Formation professionnelle : collaboration et apprentissage en groupe",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Éducation",
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    slug: "client-g",
    href: "/case-studies/client-g",
    imageSrc: caseStudyHeroPhoto(UNSPLASH_RETAIL_MODE),
    category: "Mode & retail",
    title: "Maison Atelier — Retail & e-commerce",
    excerpt:
      "Refonte du site marchand, catalogue saisonnier et image de marque alignée pour une enseigne prêt-à-porter multicanale.",
    intro:
      "Refonte de l’expérience e-commerce et harmonisation de la marque pour une enseigne de mode prêt-à-porter et retail physique.",
    paragraphs: [
      "La direction retail souhaitait moderniser le site marchand tout en conservant une identité forte et un parcours d’achat fluide sur mobile, cohérent avec l’expérience en boutique.",
      "Nous avons repensé l’architecture des collections, accéléré les pages produit et mis en place un design system partagé entre le site, les newsletters et les campagnes social ads.",
      "Les équipes marketing gagnent en autonomie grâce à des gabarits modulables et à une documentation claire des composants.",
    ],
    outcomes: {
      title: "Résultats",
      items: [
        "Temps de chargement initial réduit sur les pages clés",
        "Hausse du taux de conversion panier sur mobile",
        "Alignement visuel entre site, newsletters et réseaux sociaux",
      ],
    },
  },
  {
    slug: "client-d",
    href: "/case-studies/client-d",
    imageSrc: caseStudyHeroPhoto(UNSPLASH_FINANCE_BI),
    category: "Finance",
    title: "Horizon Conseil — Services financiers",
    excerpt:
      "Plateforme institutionnelle, contenus réglementés et tunnel de prise de contact pour un cabinet indépendant.",
    intro:
      "Plateforme de contenus et tunnel d’acquisition pour un cabinet de services financiers réglementés.",
    paragraphs: [
      "L’enjeu principal était de rendre des sujets complexes accessibles tout en respectant les obligations de conformité et de disclaimers.",
      "Nous avons structuré une bibliothèque de contenus (guides, études, FAQ) avec une recherche pertinente et des parcours par persona.",
      "Les formulaires de contact et de téléchargement ont été simplifiés et reliés au CRM pour un suivi commercial plus fiable.",
    ],
    outcomes: {
      title: "Axes livrés",
      items: [
        "Parcours « expertise » et « secteurs » clarifiés",
        "SEO technique et balisage schema sur les pages piliers",
        "Intégration analytics et événements de conversion suivis",
      ],
    },
  },
  {
    slug: "client-c",
    href: "/case-studies/client-c",
    imageSrc: caseStudyHeroPhoto(UNSPLASH_EDUCATION_TEAM),
    category: "Éducation & formation",
    title: "Campus Pro Formation",
    excerpt:
      "Portail d’inscriptions, parcours par filière et accompagnement des pics de trafic en période de rentrée.",
    intro:
      "Portail d’information et d’inscription pour un organisme de formation à forte volumétrie saisonnière.",
    paragraphs: [
      "Les périodes d’inscription généraient des pics de trafic et des abandons lorsque les parcours n’étaient pas assez guidés.",
      "Nous avons redesigné les parcours par filière, ajouté une FAQ dynamique et sécurisé les étapes de paiement / pièces jointes.",
      "Une zone authentifiée permet aux apprenants de suivre leur dossier et de recevoir des notifications ciblées.",
    ],
    outcomes: {
      title: "Bénéfices",
      items: [
        "Réduction des appels support en période de rentrée",
        "Parcours mobile-first pour les inscriptions sur le terrain",
        "Tableaux de bord internes sur les conversions par filière",
      ],
    },
  },
  {
    slug: "client-h",
    href: "/case-studies/client-h",
    imageSrc: caseStudyHeroPhoto(UNSPLASH_HEALTH_CLINIC),
    category: "Santé",
    title: "Clinique Santé Horizon — Parcours patient",
    excerpt:
      "Site institutionnel, prise de rendez-vous en ligne et contenus médicaux vulgarisés pour un groupe de cliniques.",
    intro:
      "Digitalisation du parcours patient et clarification de l’offre de soins pour un réseau de cliniques sur plusieurs sites.",
    paragraphs: [
      "Les patients cherchaient surtout des créneaux disponibles et des informations fiables avant de se déplacer, alors que les contenus existants étaient dispersés et peu lisibles sur mobile.",
      "Nous avons unifié la présentation des spécialités, intégré un module de prise de rendez-vous synchronisé avec l’outil métier et revu les fiches praticiens pour un référencement local plus net.",
      "Les équipes communication disposent désormais de gabarits validés médicalement et d’un calendrier éditorial aligné sur les campagnes de prévention.",
    ],
    outcomes: {
      title: "Livrables clés",
      items: [
        "Parcours « urgence / rendez-vous / spécialités » simplifié",
        "Accessibilité renforcée (contrastes, tailles, structure des titres)",
        "Suivi des demandes de contact et des réservations par établissement",
      ],
    },
  },
  {
    slug: "client-i",
    href: "/case-studies/client-i",
    imageSrc: caseStudyHeroPhoto(UNSPLASH_HOSPITALITY),
    category: "Hôtellerie & loisirs",
    title: "Hôtel Les Baies — Réservation directe",
    excerpt:
      "Refonte du site, moteur de réservation et mise en avant des expériences pour réduire la dépendance aux OTAs.",
    intro:
      "Refonte web et stratégie de conversion pour un établissement haut de gamme qui souhaitait développer les réservations directes.",
    paragraphs: [
      "Le site précédent ne mettait pas assez en valeur les suites et les services, et les visiteurs abandonnaient avant d’atteindre le tunnel de réservation.",
      "Nous avons repensé la navigation autour des séjours (affaires, week-end, événements), produit des visuels immersifs et optimisé le parcours mobile jusqu’au paiement.",
      "Des campagnes Meta et Google ciblant les recherches locales complètent le dispositif avec des pages d’atterrissage dédiées aux offres saisonnières.",
    ],
    outcomes: {
      title: "Impacts",
      items: [
        "Hausse du taux de complétion sur le tunnel de réservation",
        "Temps moyen sur site en hausse sur les fiches chambres",
        "Cohérence visuelle avec les brochures print et les réseaux sociaux",
      ],
    },
  },
  {
    slug: "client-j",
    href: "/case-studies/client-j",
    imageSrc: caseStudyHeroPhoto(UNSPLASH_INDUSTRIAL_B2B),
    category: "Industrie & B2B",
    title: "Métalor Ingénierie — Portail technique",
    excerpt:
      "Portail documentaire, fiches produit normalisées et espace distributeurs pour un équipementier industriel export.",
    intro:
      "Portail B2B et base documentaire pour un équipementier qui vend via un réseau de distributeurs à l’international.",
    paragraphs: [
      "Les fiches techniques et notices étaient éparpillées entre PDF, emails et intranet, ce qui ralentissait les réponses commerciales et le support.",
      "Nous avons structuré un référentiel produit unique, des filtres par norme et par secteur d’usage, et un espace connecté pour les partenaires avec droits différenciés.",
      "Les équipes export peuvent publier des versions localisées tout en conservant une source de vérité centralisée pour les données techniques.",
    ],
    outcomes: {
      title: "Résultats",
      items: [
        "Recherche full-text sur la documentation et les fiches produit",
        "Réduction du temps de réponse des équipes commerciales sur les demandes récurrentes",
        "Analytics sur les contenus les plus consultés par zone géographique",
      ],
    },
  },
];

export const SERVICE_NAV_TABS: ServiceNavTab[] = [
  {
    id: "w-tabs-0-data-w-pane-0",
    labelLines: ["Création de", "site web"],
    links: [
      { href: "/services-digital/site-e-commerce", label: "Site e-commerce" },
      {
        href: "/services-digital/developpement-wordpress-shopify",
        label: "Développement WordPress / Shopify",
      },
      {
        href: "/services-digital/refonte-de-sites-existants",
        label: "Refonte de sites existants",
      },
      { href: "/services-digital/landing-page", label: "Landing page" },
      { href: "/services-digital/sites-vitrine", label: "Sites vitrine" },
    ],
  },
  {
    id: "w-tabs-0-data-w-pane-1",
    labelLines: ["Branding &", "identité visuelle"],
    links: [
      { href: "/services-digital/support-print-digital", label: "Support print & digital" },
      {
        href: "/services-digital/reseaux-sociaux-branding",
        label: "Réseaux sociaux (branding)",
      },
      { href: "/services-digital/charte-graphique", label: "Charte graphique" },
      { href: "/services-digital/creation-de-logo", label: "Création de logo" },
    ],
  },
  {
    id: "w-tabs-0-data-w-pane-2",
    labelLines: ["Publicité &", "Acquisition"],
    links: [
      {
        href: "/services-digital/campagne-video-youtube-tiktok",
        label: "Campagne vidéo (YouTube & TikTok)",
      },
      { href: "/services-digital/meta-ads", label: "Meta Ads" },
      { href: "/services-digital/google-ads", label: "Google Ads" },
    ],
  },
  {
    id: "w-tabs-0-data-w-pane-3",
    labelLines: ["Marketing", "digital & réseaux sociaux"],
    links: [
      { href: "/services-digital/creation-de-contenus", label: "Création de contenus" },
      {
        href: "/services-digital/gestion-des-reseaux-sociaux",
        label: "Gestion des réseaux sociaux",
      },
      {
        href: "/services-digital/strategie-social-media",
        label: "Stratégie Social Media",
      },
    ],
  },
];

/** Toutes les entrées FAQ à plat (SEO, intégrations). */
export const FAQ_ITEMS: FaqItem[] = DIGITAL_FAQ_SECTIONS.flatMap((s) => s.items);
