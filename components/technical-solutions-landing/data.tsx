import type { ReactNode } from "react";
import { buildSolutionsServiceSlides } from "@/lib/solutions-services-carousel-catalog";
import { caseStudiesForPoleLanding, getSolutionsCaseStudyCards } from "@/lib/case-studies-catalog";

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
  slug: string;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ServiceCarouselSlide {
  label: string;
  cards: ServiceCarouselCard[];
}

export interface SectorCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
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

/** Onglets mega-menu nav pôle Solutions (mêmes liens que `SERVICE_MEGA_TABS`, libellés sur deux lignes). */
const SOLUTIONS_NAV_TAB_LABELS: Record<string, [string, string]> = {
  surete: ["Sûreté", "intrusion & accès"],
  infra: ["Infrastructure", "réseau & télécoms"],
  audio: ["Audiovisuel", "salles connectées"],
  divers: ["Systèmes", "métier & spécifiques"],
};

export interface SolutionsServiceNavTab {
  id: string;
  labelLines: [string, string];
  links: ServiceLink[];
}

export const SOLUTIONS_SERVICE_NAV_TABS: SolutionsServiceNavTab[] = SERVICE_MEGA_TABS.map((tab) => ({
  id: tab.paneId,
  labelLines: SOLUTIONS_NAV_TAB_LABELS[tab.id] ?? ["Services", "Solutions"],
  links: tab.links,
}));

export const SOLUTIONS_LOGO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c76c50366b1991a7c9aa9_logovedex%201%20(1).svg";

export const SERVICE_CAROUSEL_SLIDES: ServiceCarouselSlide[] = buildSolutionsServiceSlides();

/** Visuels secteurs (Unsplash) — licence : https://unsplash.com/license */
function sectorStockPhoto(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=82`;
}

export const SECTOR_CARDS: SectorCard[] = [
  {
    id: "sol-secteur-industrie",
    imageSrc: sectorStockPhoto("photo-1581092918056-0c4c3acd3789"),
    imageAlt: "Ingénierie et production industrielle, contexte manufacturier",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Industrie",
  },
  {
    id: "sol-secteur-tertiaire",
    imageSrc: sectorStockPhoto("photo-1497366216548-37526070297c"),
    imageAlt: "Espaces de travail et bureaux modernes pour le secteur tertiaire",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Tertiaire",
  },
  {
    id: "sol-secteur-logistique",
    imageSrc: sectorStockPhoto("photo-1578575437130-527eed3abbec"),
    imageAlt: "Chaîne logistique, entrepôt et flux de marchandises",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Logistique",
  },
  {
    id: "sol-secteur-sante",
    imageSrc: sectorStockPhoto("photo-1576091160399-112ba8d25d1d"),
    imageAlt: "Environnement hospitalier et équipements techniques",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Santé",
  },
  {
    id: "sol-secteur-hotellerie",
    imageSrc: sectorStockPhoto("photo-1566073771259-6a8506099945"),
    imageAlt: "Hôtellerie et espaces d’accueil haut de gamme",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Hôtellerie",
  },
  {
    id: "sol-secteur-btp",
    imageSrc: sectorStockPhoto("photo-1504307651254-35680f356dfd"),
    imageAlt: "Chantier et équipements techniques BTP",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "BTP & chantiers",
  },
  {
    id: "sol-secteur-finance",
    imageSrc: sectorStockPhoto("photo-1460925895917-afdab827c52f"),
    imageAlt: "Sites sensibles finance : contrôle d’accès et vidéosurveillance",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Finance & assurance",
  },
  {
    id: "sol-secteur-retail",
    imageSrc: sectorStockPhoto("photo-1441986300917-64674bd600d8"),
    imageAlt: "Enseignes retail : sûreté magasins et flux clients",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Retail & distribution",
  },
  {
    id: "sol-secteur-public",
    imageSrc: sectorStockPhoto("photo-1582719478250-c89cae4dc85b"),
    imageAlt: "Bâtiments publics et équipements de sécurité collective",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Public & collectivités",
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

/** Six références les plus récentes pour la section landing Solutions (grille complète sur `/solutions/cas-clients`). */
export const CASE_STUDIES = caseStudiesForPoleLanding(getSolutionsCaseStudyCards());

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
