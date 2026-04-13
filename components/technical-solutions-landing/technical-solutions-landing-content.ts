/** Données structurées pour la page marketing « solutions techniques » (extrait Webflow). */

export interface PartnerLogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BenefitCardItem {
  iconSrc: string;
  title: string;
  /** Deuxième ligne de titre (ex. « et sur-mesure » sous « Intégration complète »). */
  titleLine2?: string;
  description: string;
}

export interface StatLineItem {
  value: string;
  label: string;
  id?: string;
}

export interface BulletWithIconItem {
  iconSrc: string;
  text: string;
  id?: string;
}

export const SOLUTIONS_HERO_ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c7570006b6004ba728e21_Icon%20(27).svg";

export const SOLUTIONS_HERO_IMAGE_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e4617ef4052eb32f30eeb_unnamed%20(14).jpg";

export const SOLUTIONS_BLUR_GRADIENT_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/691e5a2f4ad9018806391cc3_Blur%20Gradient%20(2).svg";

export const PARTNER_LOGOS: PartnerLogoItem[] = [
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10169_Bouygues-Logo-bianco.avif",
    alt: "",
    width: 120,
    height: 48,
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016f_VE_RGB_W.webp",
    alt: "",
    width: 120,
    height: 48,
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10166_Eiffage_Energie-systemes_2400_03_white_RGB-resize1024x398-crop1001x339-resize500x169.avif",
    alt: "",
    width: 180,
    height: 60,
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016c_SPIE-logo.avif",
    alt: "",
    width: 120,
    height: 48,
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10179_ENGIE-Customer-References-Logo%402x.6c4974215afc9e93f8694f555d6ceacc4a4c32d2.avif",
    alt: "",
    width: 120,
    height: 48,
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10174_logo_snef_v3.avif",
    alt: "",
    width: 120,
    height: 48,
  },
];

export const BENEFIT_CARDS: BenefitCardItem[] = [
  {
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692731cf9fdbe05111e87044_691e5a2f4ad9018806391c84_Icon%20(1)%201.svg",
    title: "Expertise certifiée sur les systèmes critiques",
    description:
      "Nos équipes interviennent sur des environnements complexes : sécurité, santé, industrie, hôtellerie, tertiaire.",
  },
  {
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692731cf9fdbe05111e87044_691e5a2f4ad9018806391c84_Icon%20(1)%201.svg",
    title: "Intégration complète",
    titleLine2: "et sur-mesure",
    description:
      "Nous gérons l’intégralité de vos projets courants faibles : étude, installation, paramétrage et maintenance.",
  },
  {
    iconSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692731cf9fdbe05111e87044_691e5a2f4ad9018806391c84_Icon%20(1)%201.svg",
    title: "Fiabilité, conformité & traçabilité",
    description:
      "Nos installations respectent les standards de sûreté et de cybersécurité. Vous bénéficiez d’un système sécurisé.",
  },
];

export const SURETE_STATS: StatLineItem[] = [
  {
    id: "w-node-c71c08cd-8ad6-6159-4255-24ab4d81db97-214350f8",
    value: "+300",
    label: "systèmes de sûreté déployés",
  },
  {
    id: "w-node-_7c6c5235-2a2a-380b-2e0c-33936ee29097-214350f8",
    value: "96%",
    label: "de satisfaction client",
  },
  {
    id: "w-node-_46742903-4288-b53b-6e75-aa8e52edba65-214350f8",
    value: "+50",
    label: "sites multiservices gérés en continu",
  },
];

export const SURETE_IMAGE_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e41f6589353eb72890f1c_unnamed%20(8).jpg";

export const ARROW_ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2e4071875a40859f23f6_arrow_forward_24dp_FFF_FILL0_wght400_GRAD0_opsz24%20(1).svg";

export const GTB_BULLETS: BulletWithIconItem[] = [
  {
    id: "w-node-cd28f778-9631-6c81-9096-85e22f749d00-214350f8",
    iconSrc: ARROW_ICON_SRC,
    text: "Automatisation & gestion énergétique (GTB/GTC)",
  },
  {
    iconSrc: ARROW_ICON_SRC,
    text: "Audiovisuel & salles de réunion connectées",
  },
  {
    id: "w-node-cd28f778-9631-6c81-9096-85e22f749d0c-214350f8",
    iconSrc: ARROW_ICON_SRC,
    text: "Supervision & solutions techniques sur mesure",
  },
];

export const GTB_IMAGE_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e4242d89d4813ba20ef9d_unnamed%20(9).jpg";
