/**
 * Catalogue des pages service du pôle Digital — utilisé par le carrousel
 * et les routes `/services-digital/[slug]`.
 */

/** Photos Unsplash (banque d’images) — licence : https://unsplash.com/license */
function stockPhoto(id: string): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;
}

/** Visuels distincts (Unsplash). */
const IMG = {
  video: stockPhoto("photo-1574717024653-61fd2cf4d44d"),
  charte: stockPhoto("photo-1561070791-2526d30994b5"),
  contenus: stockPhoto("photo-1522071820081-009f0129c71c"),
  logo: stockPhoto("photo-1560472354-b33ff0c44a43"),
  dev: stockPhoto("photo-1460925895917-afdab827c52f"),
  social: stockPhoto("photo-1611262588024-d12430b98920"),
  ads: stockPhoto("photo-1557804506-669a67965ba0"),
  landing: stockPhoto("photo-1504868584819-f8e8b4b6d7e3"),
  meta: stockPhoto("photo-1467232004584-a241de8bcf5d"),
  refonte: stockPhoto("photo-1551434678-e076c223a692"),
  brandingRs: stockPhoto("photo-1611926653458-09294b3142bf"),
  ecommerce: stockPhoto("photo-1556742049-0cfed4f6a45d"),
  vitrine: stockPhoto("photo-1472851294608-062f824d29cc"),
  print: stockPhoto("photo-1522542550221-31fd19575a2d"),
  strategie: stockPhoto("photo-1552664730-d307ca884978"),
} as const;

/** Contenu orienté landing page d’acquisition (Google Ads, campagnes). */
export interface DigitalServiceLp {
  /** Pastille au-dessus du titre (intention de recherche). */
  eyebrow: string;
  /** Promesse unique sous le titre. */
  subheadline: string;
  /** Bénéfices / livrables visibles au-dessus de la ligne de flottaison. */
  bullets: readonly string[];
}

export interface DigitalServiceDefinition {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  /** Texte court pour l’image (SEO / accessibilité) */
  imageAlt: string;
  /** Paragraphes affichés sur la page service */
  body: string[];
  lp: DigitalServiceLp;
}

export const DIGITAL_SERVICES: readonly DigitalServiceDefinition[] = [
  {
    slug: "campagne-video-youtube-tiktok",
    title: "Campagne vidéo (YouTube & TikTok)",
    description: "Diffusion de campagnes vidéo sur plateformes sociales",
    imageSrc: IMG.video,
    imageAlt: "Production et diffusion de contenus vidéo pour les réseaux sociaux",
    body: [
      "Nous concevons des formats courts adaptés aux codes YouTube Shorts et TikTok : accroche, storytelling et appels à l’action alignés sur vos objectifs de notoriété ou de conversion.",
      "De la définition du message à la mise en ligne des campagnes sponsorisées, nous assurons cohérence créative, ciblage et suivi des performances.",
    ],
    lp: {
      eyebrow: "Vidéo social ads",
      subheadline:
        "Des formats courts prêts à diffuser, avec des campagnes sponsorisées pilotées pour la notoriété ou la conversion.",
      bullets: [
        "Scripts et hooks adaptés YouTube Shorts / TikTok",
        "Montage, sous-titres et variantes A/B des créas",
        "Mise en ligne des campagnes et ciblage (reach, trafic, conversions)",
        "Tableaux de bord : coûts, engagement, résultats business",
      ],
    },
  },
  {
    slug: "charte-graphique",
    title: "Charte graphique",
    description: "Définition des codes visuels et graphiques d’une marque",
    imageSrc: IMG.charte,
    imageAlt: "Identité visuelle et charte graphique pour marques professionnelles",
    body: [
      "Une charte graphique pose les règles d’usage du logo, des couleurs, des typographies et des motifs pour garantir une image cohérente sur tous vos supports.",
      "Nous livrons un document opérationnel pour vos équipes et partenaires, avec des exemples d’application print et digital.",
    ],
    lp: {
      eyebrow: "Identité de marque",
      subheadline:
        "Une charte claire pour déployer la même marque sur le web, les réseaux sociaux et vos supports imprimés.",
      bullets: [
        "Règles logo, couleurs, typographies, iconographie",
        "Exemples d’application web, print et présentations",
        "Livrable exploitable par vos équipes et prestataires",
        "Cohérence visuelle pour vos landing pages et campagnes",
      ],
    },
  },
  {
    slug: "creation-de-contenus",
    title: "Création de contenus",
    description: "Production de contenus visuels et éditoriaux digitaux",
    imageSrc: IMG.contenus,
    imageAlt: "Création de contenus marketing et visuels pour le digital",
    body: [
      "Articles, posts, newsletters, visuels social ads ou pages web : nous produisons des contenus utiles pour votre audience et optimisés pour vos canaux.",
      "Chaque livrable est pensé avec votre ton de voix, vos preuves sociales et vos objectifs business (lead gen, fidélisation, SEO).",
    ],
    lp: {
      eyebrow: "Contenus marketing",
      subheadline:
        "Des textes et visuels prêts à publier, alignés sur vos offres et sur la suite de votre tunnel d’acquisition.",
      bullets: [
        "Posts, carrousels, newsletters, pages web",
        "Ton de voix, preuves et CTA adaptés à chaque étape",
        "Variantes pour tests A/B sur les campagnes",
        "Coordination avec SEO et pages d’atterrissage",
      ],
    },
  },
  {
    slug: "creation-de-logo",
    title: "Création de logo",
    description: "Conception de logos uniques et cohérents avec l’identité de marque",
    imageSrc: IMG.logo,
    imageAlt: "Conception de logo et identité de marque",
    body: [
      "Le logo est le point d’ancrage de votre identité : nous explorons plusieurs pistes, testons la lisibilité et validons avec vous une direction forte et durable.",
      "Les déclinaisons favicon, réseaux sociaux et monochrome sont prévues dès le départ pour un déploiement sans surprise.",
    ],
    lp: {
      eyebrow: "Logo & déclinaisons",
      subheadline:
        "Un logo lisible, mémorable et prêt pour le web, les réseaux sociaux et vos supports commerciaux.",
      bullets: [
        "Plusieurs pistes créatives puis direction validée ensemble",
        "Tests de lisibilité (petit format, mobile, monochrome)",
        "Pack favicon, réseaux sociaux, signatures",
        "Fichiers sources et guide d’usage synthétique",
      ],
    },
  },
  {
    slug: "developpement-wordpress-shopify",
    title: "Développement WordPress / Shopify",
    description: "Développement de sites sur CMS WordPress et Shopify",
    imageSrc: IMG.dev,
    imageAlt: "Développement web sur WordPress et Shopify",
    body: [
      "Nous développons des thèmes et boutiques sur-mesure ou sur bases éprouvées, avec attention aux performances, à la sécurité et à l’expérience éditeur.",
      "Intégrations CRM, paiement, ERP ou PIM : nous documentons les flux et assurons la maintenabilité de votre stack.",
    ],
    lp: {
      eyebrow: "WordPress & Shopify",
      subheadline:
        "Un site ou une boutique rapide, sécurisée et facile à faire évoluer — avec les bons connecteurs métier.",
      bullets: [
        "Thème / boutique sur-mesure ou base éprouvée",
        "Performance, SEO technique et expérience éditeur",
        "Paiement, CRM, ERP, PIM selon vos flux",
        "Documentation et transfert de compétences",
      ],
    },
  },
  {
    slug: "gestion-des-reseaux-sociaux",
    title: "Gestion des réseaux sociaux",
    description: "Animation et gestion quotidienne des comptes sociaux",
    imageSrc: IMG.social,
    imageAlt: "Community management et animation des réseaux sociaux",
    body: [
      "Calendrier éditorial, modération, veille et reporting : nous tenons vos comptes avec une ligne éditoriale claire et des créatives adaptées à chaque plateforme.",
      "Les campagnes ponctuelles (lancement produit, événement) s’intègrent à votre stratégie globale pour maximiser portée et engagement.",
    ],
    lp: {
      eyebrow: "Animation social media",
      subheadline:
        "Publication, modération et pilotage de vos comptes avec un calendrier clair et des indicateurs lisibles.",
      bullets: [
        "Calendrier éditorial et créas adaptées à chaque réseau",
        "Modération et veille des commentaires",
        "Rituels de reporting (portée, engagement, trafic site)",
        "Couplage possible avec campagnes sponsorisées",
      ],
    },
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "Création et pilotage de campagnes publicitaires Google",
    imageSrc: IMG.ads,
    imageAlt: "Campagnes Google Ads et acquisition search",
    body: [
      "Search, Display, Performance Max ou YouTube : nous structurons les comptes, les audiences et les suivis de conversion pour piloter le CPA ou le ROAS.",
      "Tests A/B d’annonces et d’atterrissages, ajustements d’enchères et rapports lisibles pour vos équipes marketing et direction.",
    ],
    lp: {
      eyebrow: "Acquisition Google",
      subheadline:
        "Comptes structurés, conversions fiables et itérations régulières pour rentabiliser vos budgets Search, PMax et Display.",
      bullets: [
        "Architecture de campagnes et groupes d’annonces alignée sur vos offres",
        "Balises, conversions et consentement (RGPD) pris en compte",
        "Rédaction / tests d’annonces et pages d’atterrissage",
        "Pilotage CPA / ROAS et points de pilotage clairs",
      ],
    },
  },
  {
    slug: "landing-page",
    title: "Landing page",
    description: "Création de pages d’atterrissage optimisées pour la conversion",
    imageSrc: IMG.landing,
    imageAlt: "Landing page orientée conversion",
    body: [
      "Une landing page concentre l’attention sur une offre ou une campagne : message unique, preuves, formulaire ou CTA mis en avant au-dessus de la ligne de flottaison.",
      "Nous alignons vitesse de chargement, mobile-first et tracking analytics pour mesurer chaque étape du tunnel.",
    ],
    lp: {
      eyebrow: "LP & conversion",
      subheadline:
        "Une page unique par offre ou par campagne : message clair, preuves, formulaire — prête pour Google Ads et le mobile.",
      bullets: [
        "Structure hero / bénéfices / preuves / FAQ / CTA",
        "Vitesse, Core Web Vitals et mobile-first",
        "Tracking des micro-conversions et objectifs business",
        "Variantes pour tests A/B sur le trafic payant",
      ],
    },
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Gestion et optimisation de campagnes publicitaires sur Meta",
    imageSrc: IMG.meta,
    imageAlt: "Publicité Meta Ads Facebook Instagram",
    body: [
      "Campagnes Advantage+, remarketing catalogue ou lead ads : nous configurons les pixels, les audiences et les créatives pour coller à vos objectifs.",
      "Itérations hebdomadaires sur créas et ciblages avec une vision claire des coûts par résultat.",
    ],
    lp: {
      eyebrow: "Facebook & Instagram Ads",
      subheadline:
        "Campagnes Meta structurées (notoriété, trafic, leads, ventes) avec créas testées et mesure des résultats.",
      bullets: [
        "Pixel / CAPI et audiences remarketing",
        "Formats Advantage+, catalogue, lead ads selon vos objectifs",
        "Itérations créatives et ciblages hebdomadaires",
        "Reporting coût par résultat et recommandations budget",
      ],
    },
  },
  {
    slug: "refonte-de-sites-existants",
    title: "Refonte de sites existants",
    description: "Modernisation et optimisation de sites web existants",
    imageSrc: IMG.refonte,
    imageAlt: "Refonte de site web et expérience utilisateur",
    body: [
      "Audit UX/UI, dette technique et SEO : nous priorisons les chantiers qui apportent le plus de valeur utilisateur et business à court terme.",
      "Refonte progressive ou big bang, avec plan de redirections et préservation du référencement lorsque c’est pertinent.",
    ],
    lp: {
      eyebrow: "Refonte & performance",
      subheadline:
        "Moderniser votre site sans casser le SEO : audit, priorisation des chantiers et feuille de route claire.",
      bullets: [
        "Audit UX, technique et SEO avec quick wins identifiés",
        "Plan de redirections et veille trafic / positions",
        "Refonte progressive ou bascule maîtrisée",
        "Alignement avec vos campagnes et pages d’atterrissage",
      ],
    },
  },
  {
    slug: "reseaux-sociaux-branding",
    title: "Réseaux sociaux (branding)",
    description: "Création d’identités visuelles adaptées aux réseaux sociaux",
    imageSrc: IMG.brandingRs,
    imageAlt: "Branding et identité visuelle pour réseaux sociaux",
    body: [
      "Templates stories, reels covers, bannières et packs d’icônes pour une présence reconnaissable et professionnelle sur chaque réseau.",
      "Les guides d’usage précisent placements, zones de sécurité et variantes sombre / claire.",
    ],
    lp: {
      eyebrow: "Branding social",
      subheadline:
        "Templates et guides pour une présence reconnaissable sur chaque réseau — prête pour l’organique et la pub.",
      bullets: [
        "Stories, reels, bannières, packs d’icônes",
        "Zones de sécurité et formats par plateforme",
        "Variantes clair / sombre si besoin",
        "Cohérence avec votre charte et vos campagnes",
      ],
    },
  },
  {
    slug: "site-e-commerce",
    title: "Site e-commerce",
    description: "Conception de boutiques en ligne performantes et sécurisées",
    imageSrc: IMG.ecommerce,
    imageAlt: "Boutique en ligne et expérience d’achat",
    body: [
      "Parcours produit, tunnel de commande, moyens de paiement et logistique : nous concevons une boutique fluide sur desktop et mobile.",
      "Connexion aux outils de gestion (stocks, CRM, emailing transactionnel) pour une exploitation au quotidien simplifiée.",
    ],
    lp: {
      eyebrow: "Boutique en ligne",
      subheadline:
        "Un parcours d’achat fluide sur mobile, des fiches produit claires et un tunnel optimisé pour vos campagnes.",
      bullets: [
        "Architecture catalogue, filtres et fiches produit",
        "Tunnel de commande, paiement et logistique",
        "Connexion PIM / ERP / CRM selon vos outils",
        "CRO et suivi des entonnoirs (ads → panier → achat)",
      ],
    },
  },
  {
    slug: "sites-vitrine",
    title: "Sites vitrine",
    description: "Sites vitrine professionnels pour présenter votre activité en ligne",
    imageSrc: IMG.vitrine,
    imageAlt: "Site vitrine professionnel",
    body: [
      "Présenter votre expertise, vos références et vos contacts avec un site rapide, accessible et aligné sur votre charte.",
      "Structure claire, formulaires anti-spam et intégrations analytics pour suivre les demandes entrantes.",
    ],
    lp: {
      eyebrow: "Site vitrine pro",
      subheadline:
        "Mettre en avant votre expertise et capter des demandes qualifiées — avec un site rapide et aligné sur vos campagnes.",
      bullets: [
        "Arborescence claire : offres, preuves, contact",
        "Formulaires et anti-spam, événements analytics",
        "Performance mobile et SEO technique de base",
        "Design aligné charte et prêt pour les landing pages",
      ],
    },
  },
  {
    slug: "support-print-digital",
    title: "Support print & digital",
    description: "Supports print et déclinaisons digitales alignés sur votre charte",
    imageSrc: IMG.print,
    imageAlt: "Supports print et déclinaisons digitales",
    body: [
      "Brochures, affiches, présentations et kits média : nous assurons la cohérence avec vos templates digitaux et vos fichiers sources.",
      "Préparation des fichiers aux normes d’impression et versions web optimisées (poids, formats).",
    ],
    lp: {
      eyebrow: "Print & digital",
      subheadline:
        "Brochures, affiches et présentations alignées sur votre charte — avec des fichiers prêts à imprimer et à diffuser en ligne.",
      bullets: [
        "Brochures, affiches, présentations, kits média",
        "Fichiers aux normes impression + versions web légères",
        "Cohérence avec vos templates digitaux",
        "Livrables exploitables par vos équipes ou imprimeurs",
      ],
    },
  },
  {
    slug: "strategie-social-media",
    title: "Stratégie Social Media",
    description: "Stratégie éditoriale et présence sociale orientées résultats",
    imageSrc: IMG.strategie,
    imageAlt: "Stratégie social media et plan éditorial",
    body: [
      "Positionnement, personas, axes de contenu et calendrier trimestriel : nous traduisons vos objectifs business en plan d’action social.",
      "Indicateurs de succès (reach, engagement, trafic site, leads) et rituels de pilotage pour ajuster la stratégie dans la durée.",
    ],
    lp: {
      eyebrow: "Stratégie social",
      subheadline:
        "Un plan éditorial et des indicateurs clairs pour relier vos réseaux sociaux à la génération de leads et au trafic site.",
      bullets: [
        "Positionnement, territoires de contenu, ton de voix",
        "Calendrier trimestriel et rôles internes / externes",
        "KPI : reach, engagement, trafic, leads",
        "Alignement avec acquisition payante et landing pages",
      ],
    },
  },
];

export function getDigitalServiceBySlug(slug: string): DigitalServiceDefinition | undefined {
  return DIGITAL_SERVICES.find((s) => s.slug === slug);
}

export function getAllDigitalServiceSlugs(): string[] {
  return DIGITAL_SERVICES.map((s) => s.slug);
}

const CARDS_PER_SLIDE = 3;

/** Jeux de cartes pour le carrousel « services Digital » (sans cartes fantômes). */
export function buildDigitalServiceSlides(): {
  ariaLabel: string;
  cards: {
    slug: string;
    href: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }[];
}[] {
  const totalSlides = Math.ceil(DIGITAL_SERVICES.length / CARDS_PER_SLIDE);
  const slides: {
    ariaLabel: string;
    cards: {
      slug: string;
      href: string;
      title: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
    }[];
  }[] = [];

  for (let i = 0; i < DIGITAL_SERVICES.length; i += CARDS_PER_SLIDE) {
    const chunk = DIGITAL_SERVICES.slice(i, i + CARDS_PER_SLIDE);
    slides.push({
      ariaLabel: `${slides.length + 1} of ${totalSlides}`,
      cards: chunk.map((s) => ({
        slug: s.slug,
        href: `/services-digital/${s.slug}`,
        title: s.title,
        description: s.description,
        imageSrc: s.imageSrc,
        imageAlt: s.imageAlt,
      })),
    });
  }

  return slides;
}
