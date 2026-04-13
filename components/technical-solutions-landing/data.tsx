import type { ReactNode } from "react";

export interface ServiceLink {
  href: string;
  label: string;
}

export interface ServiceMegaTab {
  id: string;
  tabId: string;
  paneId: string;
  labelHtml: ReactNode;
  links: ServiceLink[];
}

export interface ServiceCarouselCard {
  href: string;
  title: string;
  description: string;
}

export interface ServiceCarouselSlide {
  label: string;
  cards: ServiceCarouselCard[];
}

export interface SectorCard {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
  badge: string;
}

export interface TestimonialSlide {
  quote: string;
  avatarSrc: string;
  avatarSrcSet?: string;
  avatarSizes?: string;
  name: string;
  role: string;
}

export interface CaseStudyItem {
  href: string;
  imageSrc: string;
  title: string;
  excerpt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const LOGO_MARQUEE_SRCS: string[] = [
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10169_Bouygues-Logo-bianco.avif",
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016f_VE_RGB_W.webp",
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10166_Eiffage_Energie-systemes_2400_03_white_RGB-resize1024x398-crop1001x339-resize500x169.avif",
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016c_SPIE-logo.avif",
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10179_ENGIE-Customer-References-Logo%402x.6c4974215afc9e93f8694f555d6ceacc4a4c32d2.avif",
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10174_logo_snef_v3.avif",
];

export const WHY_CHOOSE_CARDS: { title: ReactNode; body: string }[] = [
  {
    title: "Expertise certifiée sur les systèmes critiques",
    body: "Nos équipes interviennent sur des environnements complexes : sécurité, santé, industrie, hôtellerie, tertiaire.",
  },
  {
    title: (
      <>
        Intégration complète <br />
        et sur-mesure
      </>
    ),
    body: "Nous gérons l’intégralité de vos projets courants faibles : étude, installation, paramétrage et maintenance.",
  },
  {
    title: "Fiabilité, conformité & traçabilité",
    body: "Nos installations respectent les standards de sûreté et de cybersécurité. Vous bénéficiez d’un système sécurisé.",
  },
];

export const SERVICE_MEGA_TABS: ServiceMegaTab[] = [
  {
    id: "surete",
    tabId: "tabelement",
    paneId: "w-tabs-0-data-w-pane-0",
    labelHtml: (
      <>
        <strong className="font-bold">Sûreté</strong>
      </>
    ),
    links: [
      { href: "/services-solution/surete-de-chantier", label: "Sûreté de chantier" },
      { href: "/services-solution/detection-perimetrique", label: "Détection périmétrique" },
      { href: "/services-solution/boitiers-a-clefs", label: "Boîtiers à clefs" },
      {
        href: "/services-solution/portail-portique-barriere",
        label: "Portail, portique & barrière",
      },
      { href: "/services-solution/videophonie", label: "Vidéophonie" },
      { href: "/services-solution/videosurveillance", label: "Vidéosurveillance" },
      { href: "/services-solution/supervision-unifiee", label: "Supervision unifiée" },
      { href: "/services-solution/controle-dacces", label: "Contrôle d’accès" },
      { href: "/services-solution/alarme-anti-intrusion", label: "Alarme anti-intrusion" },
    ],
  },
  {
    id: "infra",
    tabId: "w-tabs-0-data-w-tab-1",
    paneId: "w-tabs-0-data-w-pane-1",
    labelHtml: (
      <>
        <strong className="font-bold">Infrastructure réseau</strong>
      </>
    ),
    links: [
      { href: "/services-solution/inpt", label: "INPT" },
      { href: "/services-solution/wifi", label: "Wifi" },
      { href: "/services-solution/antenne-gsm-4g-5g", label: "Antenne GSM/4G/5G" },
      { href: "/services-solution/reseau-vdi", label: "Réseau VDI" },
      { href: "/services-solution/audit-de-cablage", label: "Audit de câblage" },
      { href: "/services-solution/fibre-optique", label: "Fibre optique" },
    ],
  },
  {
    id: "audio",
    tabId: "w-tabs-0-data-w-tab-2",
    paneId: "w-tabs-0-data-w-pane-2",
    labelHtml: (
      <>
        <strong className="font-bold">Audiovisuel</strong>
      </>
    ),
    links: [
      { href: "/services-solution/reservation-salle-de-reunion", label: "Réservation salle de réunion" },
      { href: "/services-solution/musique-dambiance", label: "Musique d’ambiance" },
      { href: "/services-solution/ecrans-interactifs", label: "Écrans interactifs" },
      { href: "/services-solution/affichage-dynamique", label: "Affichage dynamique" },
      { href: "/services-solution/sonorisation-despaces", label: "Sonorisation d’espaces" },
      {
        href: "/services-solution/installation-de-videoprojecteurs-et-ecrans-de-projection",
        label: "Installation de vidéoprojecteurs et écrans de projection",
      },
      {
        href: "/services-solution/integration-de-salles-de-reunion-connectees",
        label: "Intégration de salles de réunion connectées",
      },
      {
        href: "/services-solution/systeme-de-visioconference",
        label: "Système de visioconférence",
      },
      { href: "/services-solution/mur-decrans-led-walls", label: "Mur d’écrans & LED Walls" },
    ],
  },
  {
    id: "divers",
    tabId: "w-tabs-0-data-w-tab-3",
    paneId: "w-tabs-0-data-w-pane-3",
    labelHtml: (
      <>
        <strong className="font-bold">Divers</strong>
      </>
    ),
    links: [
      { href: "/services-solution/systeme-dappel-durgence", label: "Système d’appel d’urgence" },
      { href: "/services-solution/interphonie-eas", label: "Interphonie EAS" },
      { href: "/services-solution/gestion-des-visiteurs", label: "Gestion des visiteurs" },
      { href: "/services-solution/systeme-dappel-malade", label: "Système d’appel malade" },
      { href: "/services-solution/systeme-de-demence", label: "Système de démence" },
      { href: "/services-solution/systeme-de-ronde", label: "Système de ronde" },
      { href: "/services-solution/gestion-de-stationnement", label: "Gestion de stationnement" },
      { href: "/services-solution/detection-de-vapotage", label: "Détection de vapotage" },
    ],
  },
];

const GROUP_ILLUSTRATION_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69272caefd35e7d609f260fe_Group%20427319225%20(2).avif";
const GROUP_ILLUSTRATION_SRCSET =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69272caefd35e7d609f260fe_Group%20427319225%20(2)-p-500.avif 500w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69272caefd35e7d609f260fe_Group%20427319225%20(2).avif 972w";

export const SERVICE_CAROUSEL_SLIDES: ServiceCarouselSlide[] = [
  {
    label: "1 of 4",
    cards: [
      {
        href: "/services-solution/affichage-dynamique",
        title: "Affichage dynamique",
        description: "Diffusion de contenus digitaux sur écrans professionnels",
      },
      {
        href: "/services-solution/alarme-anti-intrusion",
        title: "Alarme anti-intrusion",
        description: "Solutions de détection et d’alerte contre les intrusions",
      },
      {
        href: "/services-solution/antenne-gsm-4g-5g",
        title: "Antenne GSM/4G/5G",
        description: "Solutions de couverture mobile et télécom en environnement complexe",
      },
    ],
  },
  {
    label: "2 of 4",
    cards: [
      {
        href: "/services-solution/audit-de-cablage",
        title: "Audit de câblage",
        description: "Analyse et optimisation des infrastructures de câblage existantes",
      },
      {
        href: "/services-solution/boitiers-a-clefs",
        title: "Boîtiers à clefs",
        description: "Solutions sécurisées de gestion et de stockage des clés",
      },
      {
        href: "/services-solution/controle-dacces",
        title: "Contrôle d’accès",
        description: "Le contrôle d’accès est aujourd’hui un pilier essentiel de la sécurité des entreprises.",
      },
    ],
  },
  {
    label: "3 of 4",
    cards: [
      {
        href: "/services-solution/detection-de-vapotage",
        title: "Détection de vapotage",
        description: "Systèmes de détection des usages non autorisés en intérieur",
      },
      {
        href: "/services-solution/detection-perimetrique",
        title: "Détection périmétrique",
        description: "Systèmes de détection des intrusions en périphérie de site",
      },
      {
        href: "/services-solution/fibre-optique",
        title: "Fibre optique",
        description: "Déploiement de réseaux fibre haut débit pour entreprises",
      },
    ],
  },
  {
    label: "4 of 4",
    cards: [
      {
        href: "/services-solution/gestion-de-stationnement",
        title: "Gestion de stationnement",
        description: "Solutions intelligentes de gestion des parkings et accès",
      },
      {
        href: "/services-solution/gestion-des-visiteurs",
        title: "Gestion des visiteurs",
        description: "Solutions d’accueil et de gestion des flux visiteurs",
      },
      {
        href: "/services-solution/inpt",
        title: "INPT",
        description: "Infrastructures numériques pour bâtiments tertiaires et industriels",
      },
    ],
  },
];

export const SERVICE_CAROUSEL_IMAGE = {
  src: GROUP_ILLUSTRATION_SRC,
  srcSet: GROUP_ILLUSTRATION_SRCSET,
  sizes: "(max-width: 972px) 100vw, 972px",
} as const;

/** Visuels secteurs (Unsplash) — licence : https://unsplash.com/license */
function unsplashSectorCard(photoPath: string): Pick<SectorCard, "src" | "srcSet" | "sizes" | "width" | "height"> {
  const params = "auto=format&fit=crop&q=82";
  const src = `https://images.unsplash.com/${photoPath}?${params}&w=1086&h=720`;
  const srcSet = [500, 800, 1080, 1086]
    .map(
      (w) =>
        `https://images.unsplash.com/${photoPath}?${params}&w=${w}&h=${Math.round((w * 720) / 1086)} ${w}w`,
    )
    .join(", ");
  return {
    src,
    srcSet,
    sizes: "(max-width: 1086px) 100vw, 1086px",
    width: 1086,
    height: 720,
  };
}

export const SECTOR_CARDS: SectorCard[] = [
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd7d33227985c07981_Card%20(9).png",
    srcSet:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd7d33227985c07981_Card%20(9)-p-500.png 500w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd7d33227985c07981_Card%20(9)-p-800.png 800w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd7d33227985c07981_Card%20(9)-p-1080.png 1080w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd7d33227985c07981_Card%20(9).png 1086w",
    sizes: "(max-width: 1086px) 100vw, 1086px",
    width: 1086,
    height: 720,
    badge: "Industrie",
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cdeef4b9310681709b_Card%20(8).png",
    srcSet:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cdeef4b9310681709b_Card%20(8)-p-500.png 500w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cdeef4b9310681709b_Card%20(8)-p-800.png 800w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cdeef4b9310681709b_Card%20(8)-p-1080.png 1080w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cdeef4b9310681709b_Card%20(8).png 1086w",
    sizes: "(max-width: 1086px) 100vw, 1086px",
    width: 1086,
    height: 720,
    badge: "Tertiaire",
  },
  {
    src: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd6940e6425bd2eb7d_Group%20427319222%20(2).png",
    srcSet:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd6940e6425bd2eb7d_Group%20427319222%20(2)-p-500.png 500w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd6940e6425bd2eb7d_Group%20427319222%20(2)-p-800.png 800w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd6940e6425bd2eb7d_Group%20427319222%20(2)-p-1080.png 1080w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693063cd6940e6425bd2eb7d_Group%20427319222%20(2).png 1086w",
    sizes: "(max-width: 1086px) 100vw, 1086px",
    width: 1086,
    height: 720,
    badge: "Logistique",
  },
  {
    ...unsplashSectorCard("photo-1576091160399-112ba8d25d1d"),
    badge: "Santé",
  },
  {
    ...unsplashSectorCard("photo-1566073771259-6a8506099945"),
    badge: "Hôtellerie",
  },
  {
    ...unsplashSectorCard("photo-1504307651254-35680f356dfd"),
    badge: "BTP & chantiers",
  },
];

export const TESTIMONIAL_SLIDES: TestimonialSlide[] = [
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
    avatarSrcSet:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e363781f35fb629570463_Capture%20d%E2%80%99e%CC%81cran%202025-12-02%20a%CC%80%2001.43.29-p-500.png 500w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e363781f35fb629570463_Capture%20d%E2%80%99e%CC%81cran%202025-12-02%20a%CC%80%2001.43.29-p-800.png 800w, https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e363781f35fb629570463_Capture%20d%E2%80%99e%CC%81cran%202025-12-02%20a%CC%80%2001.43.29.png 884w",
    avatarSizes: "(max-width: 884px) 100vw, 884px",
    name: "Sophie L.",
    role: "Responsable Sécurité — Hôtellerie Excellence France",
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

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    href: "/references-opensi/client-10",
    imageSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c3f/692c822b448b21e150a0adc9_image5.jpeg",
    title: "Client J",
    excerpt: "Un client dans le secteur de la construction.",
  },
  {
    href: "/references-opensi/client-1",
    imageSrc:
      "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c3f/692c822b448b21e150a0add0_image14.jpeg",
    title: "Client A",
    excerpt: "Un client important dans le secteur technologique.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quels types de bâtiments prenez-vous en charge ?",
    answer:
      "PME, ETI, sites industriels, hôpitaux, hôtels, commerces, bâtiments publics et sites sensibles nécessitant des solutions de sécurité avancées.",
  },
  {
    question: "Travaillez-vous avec des marques et technologies certifiées ?",
    answer:
      "Oui. Ovedex Solutions intègre uniquement des technologies reconnues : Hikvision, Aritech, Axis, Honeywell, LenelS2, Siemens, Bosch, Milestone, Genetec…",
  },
  {
    question: "Proposez-vous la maintenance et le support des installations ?",
    answer:
      "Oui. Nous assurons la maintenance préventive, corrective, l’évolution des systèmes et les interventions rapides en cas d’incident.",
  },
  {
    question: "Pouvez-vous reprendre un projet ou une installation existante ?",
    answer:
      "Oui, nos équipes réalisent un audit complet avant d’intégrer, remettre à niveau ou étendre vos installations.",
  },
  {
    question: "Intervenez-vous sur plusieurs sites ou réseaux multi-établissements ?",
    answer:
      "Oui. Nous gérons des installations multi-sites pour des groupes, réseaux de magasins, bâtiments tertiaires ou entreprises multisites.",
  },
];

export const GTB_BULLETS: string[] = [
  "Automatisation & gestion énergétique (GTB/GTC)",
  "Audiovisuel & salles de réunion connectées",
  "Supervision & solutions techniques sur mesure",
];
