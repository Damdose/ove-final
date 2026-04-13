import type { PoleId } from "@/lib/brand-design-system";
import { POLE_THEMES } from "@/lib/brand-design-system";
import { BLOG_POSTS } from "@/lib/blog-articles";
import { extractYoutubeVideoId } from "@/lib/youtube";

export interface LogoSlide {
  src: string;
  alt: string;
  width?: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PillarCard {
  poleId: PoleId;
  bgClass: string;
  titleClass: string;
  imageSrc: string;
  imageSizes: string;
  title: string;
  description: string;
  /** Icône blanche (SVG) dans le carré accent sur la vignette */
  pillarIconSrc: string;
  pillarIconSquareClass: string;
}

const PILLAR_OVERLAY_ICONS: Record<
  PoleId,
  { pillarIconSrc: string; pillarIconSquareClass: string }
> = {
  digital: {
    pillarIconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2ec612f6c6607a5624ca_computer_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg",
    pillarIconSquareClass: "bg-[#57C4A5]",
  },
  solutions: {
    pillarIconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2f7b8c6c70a57f79a590_network_manage_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg",
    pillarIconSquareClass: "bg-[#7DAAF1]",
  },
  it: {
    pillarIconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2f213787d8b3474da720_lock_24dp_FFF_FILL0_wght400_GRAD0_opsz24%20(1).svg",
    pillarIconSquareClass: "bg-[#C287F4]",
  },
};

function pillarCard(
  pole: PoleId,
  data: Omit<PillarCard, "poleId" | "bgClass" | "titleClass" | "pillarIconSrc" | "pillarIconSquareClass">,
): PillarCard {
  const theme = POLE_THEMES[pole];
  return {
    poleId: pole,
    bgClass: theme.secondary.bgClass,
    titleClass: theme.headingOnSecondaryClass,
    ...PILLAR_OVERLAY_ICONS[pole],
    ...data,
  };
}

export interface DigitalFeature {
  iconSrc: string;
  text: string;
  id?: string;
}

export interface SolutionLinkItem {
  href: string;
  iconSrc: string;
  label: string;
}

export interface ItFeature {
  text: string;
  id?: string;
}

export interface WhyCard {
  title: string;
  description: string;
  titleSecondLine?: string;
  /** Icône blanche (SVG) sur pastille encre */
  iconSrc: string;
}

export interface Testimonial {
  quote: string;
  avatarSrc: string;
  avatarSizes?: string;
  name: string;
  role: string;
}

export interface NewsArticle {
  slug: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tagLabel: string;
  tagTextClass: string;
  tagBgClass: string;
  title: string;
  excerpt: string;
  readMinutes: string;
  publishedAtLabel: string;
  publishedAtIso: string;
}

export const LOGO_IMAGES: LogoSlide[] = [
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
    width: 100,
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10174_logo_snef_v3.avif",
    alt: "",
  },
];

export const STATS: StatItem[] = [
  { value: "+300", label: "Projets déployés" },
  { value: "96%", label: "Satisfaction client" },
  { value: "10 ans", label: "D'expérience métier" },
];

/** Vignette si aucune vidéo YouTube n’est configurée (iframe désactivée). */
export const SOCIAL_PROOF_VIDEO_POSTER_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927308251d553db88a7ad52_photo%20(2).avif";

/**
 * URL YouTube (`watch`, `youtu.be`, `embed`). L’ID est extrait pour l’iframe.
 * Remplacez par la vidéo de présentation Ovedex.
 */
export const SOCIAL_PROOF_VIDEO_HREF: string | undefined =
  "https://www.youtube.com/watch?v=Tn6-PIBmNUU";

/**
 * Surcharge : ID seul (11 caractères). Si renseigné, il prime sur l’URL ci-dessus.
 * Laissez vide pour n’utiliser que `SOCIAL_PROOF_VIDEO_HREF`.
 */
export const SOCIAL_PROOF_YOUTUBE_VIDEO_ID = "";

export const SOCIAL_PROOF_YOUTUBE_EMBED_ID: string | null = (() => {
  const trimmed = SOCIAL_PROOF_YOUTUBE_VIDEO_ID.trim();
  if (trimmed.length > 0) return trimmed;
  return extractYoutubeVideoId(SOCIAL_PROOF_VIDEO_HREF);
})();

const PILLAR_CDN_BASE =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30";

/**
 * Section « 3 pôles » : images des cartes. Modifiez ici pour changer les visuels
 * (autre fichier sur le CDN, ou chemins `public/…` avec fichiers locaux).
 */
export const PILLAR_SECTION_CARD_IMAGES: Record<PoleId, string> = {
  digital: `${PILLAR_CDN_BASE}/69272ff20cb48a33e24329f5_photo%20(1).avif`,
  solutions: `${PILLAR_CDN_BASE}/69273165bf2a4cd5e47b3af5_Card%20(4).avif`,
  it: `${PILLAR_CDN_BASE}/692730dfa417929d47db1738_Image%20(72).avif`,
};

export const PILLAR_CARDS: PillarCard[] = [
  pillarCard("digital", {
    imageSrc: PILLAR_SECTION_CARD_IMAGES.digital,
    imageSizes: "(max-width: 972px) 100vw, 972px",
    title: "Digital",
    description:
      "Créez des expériences digitales performantes : sites web sur-mesure, contenus impactants, campagnes marketing pensées pour convertir.",
  }),
  pillarCard("solutions", {
    imageSrc: PILLAR_SECTION_CARD_IMAGES.solutions,
    imageSizes: "(max-width: 972px) 100vw, 972px",
    title: "Solutions",
    description:
      "Intégrez des infrastructures techniques robustes : vidéosurveillance, contrôle d'accès, réseaux, GTB/GTC et solutions IoT pour des bâtiments plus sûrs.",
  }),
  pillarCard("it", {
    imageSrc: PILLAR_SECTION_CARD_IMAGES.it,
    imageSizes: "(max-width: 972px) 100vw, 972px",
    title: "IT",
    description:
      "Sécurisez et optimisez votre système d'information grâce à une infogérance réactive, des infrastructures fiables et une cybersécurité de haut niveau.",
  }),
];

export const DIGITAL_FEATURES: DigitalFeature[] = [
  {
    id: "w-node-c71c08cd-8ad6-6159-4255-24ab4d81db97-06391c15",
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2ec612f6c6607a5624ca_computer_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg",
    text: "Création de sites web & e-commerce sur mesure",
  },
  {
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2ee30a6c771f5fe28fca_campaign_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg",
    text: "Stratégies digitales & campagnes d'acquisition",
  },
  {
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2effe5eb89d939cccd2e_content_copy_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg",
    text: "Production de contenus : vidéos, visuels & motion design",
  },
];

export const SOLUTION_LINKS: SolutionLinkItem[] = [
  {
    href: "/solutions",
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2f213787d8b3474da720_lock_24dp_FFF_FILL0_wght400_GRAD0_opsz24%20(1).svg",
    label: "Systèmes de sûreté électronique",
  },
  {
    href: "/solutions",
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2f7b8c6c70a57f79a590_network_manage_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg",
    label: "Réseaux, communication & infrastructures",
  },
  {
    href: "/solutions",
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2f52d0c439ce18a64800_door_front_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg",
    label: "GTB / GTC & solutions IoT",
  },
];

const itArrow =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2e4071875a40859f23f6_arrow_forward_24dp_FFF_FILL0_wght400_GRAD0_opsz24%20(1).svg";

export const IT_FEATURES: ItFeature[] = [
  {
    id: "w-node-_1b7bdad4-bf0d-aa6c-32df-8339e52b9491-06391c15",
    text: "Infogérance & support utilisateur",
  },
  { text: "Cybersécurité & protection des données" },
  {
    id: "w-node-_1b7bdad4-bf0d-aa6c-32df-8339e52b949e-06391c15",
    text: "Cloud & infrastructures réseau",
  },
];

export const IT_FEATURE_ICON = itArrow;

export const WHY_CARDS: WhyCard[] = [
  {
    title: "Expertise multi-pôles intégrée",
    description:
      "Nous réunissons le digital, les solutions techniques et l'IT pour offrir une réponse globale, cohérente et performante à tous vos besoins.",
    iconSrc: `${PILLAR_CDN_BASE}/692e2f7b8c6c70a57f79a590_network_manage_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg`,
  },
  {
    title: "Accompagnement de bout en bout",
    description:
      "Études, conception, installation, développement, support : nous pilotons chaque étape pour garantir fluidité, qualité et résultat.",
    iconSrc: `${PILLAR_CDN_BASE}/692e2e4071875a40859f23f6_arrow_forward_24dp_FFF_FILL0_wght400_GRAD0_opsz24%20(1).svg`,
  },
  {
    title: "Solutions évolutives & sécurisées",
    description:
      "Nous concevons des systèmes durables, scalables et conformes aux meilleures pratiques de cybersécurité et d'infrastructure.",
    iconSrc: `${PILLAR_CDN_BASE}/692e2f213787d8b3474da720_lock_24dp_FFF_FILL0_wght400_GRAD0_opsz24%20(1).svg`,
  },
  {
    title: "Qualité d'exécution reconnue",
    description:
      "Plus de 300 projets livrés, un taux de satisfaction de 96% et une expertise en IT, sureté et digital éprouvée dans des secteurs exigeants.",
    iconSrc: `${PILLAR_CDN_BASE}/692e2ee30a6c771f5fe28fca_campaign_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg`,
  },
  {
    title: "Vision orientée performance",
    description:
      "Chaque solution vise un objectif clair : améliorer votre efficacité, réduire vos risques et soutenir la croissance de votre entreprise.",
    iconSrc: `${PILLAR_CDN_BASE}/692e2ec612f6c6607a5624ca_computer_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg`,
  },
];

/** Photo grande tuile « Pourquoi choisir » — modifiable avec les autres visuels. */
export const WHY_PHOTO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273165bf2a4cd5e47b3af5_Card%20(4).avif";

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "« Ovedex a transformé la gestion de notre système d’information. Leur réactivité et la qualité de leur infogérance nous ont permis d’éliminer les interruptions et de sécuriser entièrement notre infrastructure. Une équipe sur laquelle on peut vraiment compter. »",
    avatarSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/691e5a2f4ad9018806391cc6_hardloop-portrait-xs.avif",
    name: "Julien M.",
    role: "Directeur Général — Groupe Sirotech",
  },
  {
    quote:
      "« Nous travaillons avec Ovedex Solutions depuis plusieurs années pour la vidéosurveillance et le contrôle d’accès de nos sites. Leur rigueur, leur expertise technique et la fiabilité des installations en font un partenaire de confiance pour nos environnements sensibles. »",
    avatarSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e363781f35fb629570463_Capture%20d%E2%80%99e%CC%81cran%202025-12-02%20a%CC%80%2001.43.29.png",
    avatarSizes: "(max-width: 884px) 100vw, 884px",
    name: "Sophie L.",
    role: "Responsable Sécurité —\n                          Hôtellerie Excellence France",
  },
  {
    quote:
      "« Ovedex Digital nous a accompagné sur la refonte de notre site et la mise en place de nos campagnes. Les résultats ont été immédiats : plus de visibilité, plus de leads et une image de marque enfin à la hauteur de nos ambitions. Un accompagnement irréprochable. »",
    avatarSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e367d947cc30e4abbaedd_Benali%2C%20Karim%20Headshot%202023_Web.jpg",
    name: "Karim B.",
    role: "CEO — Aspen France",
  },
];

export const NEWS_ARTICLES: NewsArticle[] = BLOG_POSTS.map((p) => ({
  slug: p.slug,
  href: `/actualites/${p.slug}`,
  imageSrc: p.imageSrc,
  imageAlt: p.imageAlt,
  tagLabel: POLE_THEMES[p.pole].label,
  tagTextClass: POLE_THEMES[p.pole].tag.textClass,
  tagBgClass: POLE_THEMES[p.pole].tag.bgClass,
  title: p.title,
  excerpt: p.excerpt,
  readMinutes: p.readMinutes,
  publishedAtLabel: p.publishedAtLabel,
  publishedAtIso: p.publishedAtIso,
}));
