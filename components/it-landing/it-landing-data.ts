/** Données landing & nav pôle IT. */

import { buildItServiceSlides } from "@/lib/it-services-carousel-catalog";
import type { CaseStudyCardStudy } from "@/components/case-studies/case-study-card";
import { caseStudiesForPoleLanding, getItCaseStudyCards } from "@/lib/case-studies-catalog";

export interface ItServiceNavLink {
  href: string;
  label: string;
}

export interface ItServiceNavTab {
  id: string;
  labelLines: [string, string];
  links: ItServiceNavLink[];
}

export const IT_LOGO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c76c50366b1991a7c9aa9_logovedex%201%20(1).svg";

export const IT_SERVICE_NAV_TABS: ItServiceNavTab[] = [
  {
    id: "w-tabs-it-pane-0",
    labelLines: ["Infogérance", "& support"],
    links: [
      { href: "/services-it/infogerance-proactive", label: "Infogérance proactive" },
      { href: "/services-it/support-utilisateur-entreprise", label: "Support utilisateur" },
      { href: "/services-it/supervision-si", label: "Supervision SI" },
      { href: "/services-it/astreinte-it", label: "Astreinte IT" },
      { href: "/services-it/gestion-parc-postes", label: "Gestion de parc postes" },
    ],
  },
  {
    id: "w-tabs-it-pane-1",
    labelLines: ["Cybersécurité", "& résilience"],
    links: [
      { href: "/services-it/audit-cybersecurite", label: "Audit cybersécurité" },
      { href: "/services-it/mfa-authentification-forte", label: "MFA & authentification forte" },
      { href: "/services-it/sauvegarde-plan-reprise", label: "Sauvegarde & PRA / PCI" },
      { href: "/services-it/antispam-email-securise", label: "Antispam & messagerie sécurisée" },
      { href: "/services-it/sensibilisation-collaborateurs", label: "Sensibilisation collaborateurs" },
    ],
  },
  {
    id: "w-tabs-it-pane-2",
    labelLines: ["Cloud &", "réseau"],
    links: [
      { href: "/services-it/cloud-public-prive-hybrid", label: "Cloud public, privé & hybride" },
      { href: "/services-it/migration-cloud-microsoft-365", label: "Migration Microsoft 365" },
      { href: "/services-it/reseau-entreprise-wan-lan", label: "Réseau d’entreprise (WAN / LAN)" },
      { href: "/services-it/vpn-acces-distance", label: "VPN & accès distant" },
    ],
  },
  {
    id: "w-tabs-it-pane-3",
    labelLines: ["Conseil &", "projets SI"],
    links: [
      { href: "/services-it/pilotage-strategique-si", label: "Pilotage stratégique du SI" },
      { href: "/services-it/cadrage-fonctionnel-projet", label: "Cadrage fonctionnel & projet" },
      { href: "/services-it/architecture-donnees-applicative", label: "Architecture données & applicative" },
      { href: "/services-it/recette-homologation", label: "Recette & homologation" },
      { href: "/services-it/documentation-runbooks", label: "Documentation & runbooks" },
    ],
  },
];

export const IT_CAROUSEL_SLIDES = buildItServiceSlides();

function sectorStockPhoto(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=82`;
}

export interface ItSectorCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
  badge: string;
}

/** Neuf secteurs — une image Unsplash distincte par carte (licence Unsplash). */
export const IT_SECTOR_CARDS: ItSectorCard[] = [
  {
    id: "it-secteur-finance",
    imageSrc: sectorStockPhoto("photo-1460925895917-afdab827c52f"),
    imageAlt: "Analyses financières sur écran et données de marché",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Finance & assurance",
  },
  {
    id: "it-secteur-sante",
    imageSrc: sectorStockPhoto("photo-1576091160399-112ba8d25d1d"),
    imageAlt: "Professionnel de santé et environnement hospitalier numérique",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Santé",
  },
  {
    id: "it-secteur-industrie",
    imageSrc: sectorStockPhoto("photo-1581092918056-0c4c3acd3789"),
    imageAlt: "Ingénieur en contexte industriel et équipements de production",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Industrie",
  },
  {
    id: "it-secteur-tertiaire",
    imageSrc: sectorStockPhoto("photo-1497366216548-37526070297c"),
    imageAlt: "Espaces de bureaux modernes et collaboration en entreprise",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Tertiaire",
  },
  {
    id: "it-secteur-public",
    imageSrc: sectorStockPhoto("photo-1582719478250-c89cae4dc85b"),
    imageAlt: "Architecture institutionnelle et services aux citoyens",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Public & collectivités",
  },
  {
    id: "it-secteur-retail",
    imageSrc: sectorStockPhoto("photo-1441986300917-64674bd600d8"),
    imageAlt: "Rayon magasin et expérience d’achat omnicanale",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Retail & distribution",
  },
  {
    id: "it-secteur-logistique",
    imageSrc: sectorStockPhoto("photo-1586528116311-ad8dd3c8310d"),
    imageAlt: "Entrepôt logistique et flux de marchandises",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Transport & logistique",
  },
  {
    id: "it-secteur-energie",
    imageSrc: sectorStockPhoto("photo-1509391366360-2e959784a276"),
    imageAlt: "Réseau électrique et infrastructures énergétiques",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Énergie & utilities",
  },
  {
    id: "it-secteur-education",
    imageSrc: sectorStockPhoto("photo-1503676260728-1c00da094a0b"),
    imageAlt: "Salle de classe et outils numériques pour l’enseignement",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    badge: "Éducation & recherche",
  },
];

export interface ItFaqItem {
  question: string;
  answer: string;
}

export const IT_FAQ_ITEMS: ItFaqItem[] = [
  {
    question: "Quels niveaux d’astreinte proposez-vous ?",
    answer:
      "Des plages horaires classiques jusqu’à l’astreinte 24/7 sur des périmètres critiques, avec SLA et canaux d’escalade définis contractuellement.",
  },
  {
    question: "Intervenez-vous sur des environnements hybrides (cloud + on-premise) ?",
    answer:
      "Oui. Nous gérons les interconnexions, la supervision unifiée et la sécurisation des flux entre sites, datacenters et clouds publics.",
  },
  {
    question: "Comment sécurisez-vous les accès administrateurs ?",
    answer:
      "Comptes à privilèges limités dans le temps, MFA obligatoire, journalisation et revues périodiques des droits sont au cœur de nos recommandations.",
  },
  {
    question: "Proposez-vous des audits de conformité (RGPD, ISO) ?",
    answer:
      "Nous pouvons cadrer des écarts, prioriser les actions et accompagner la mise en œuvre technique ; la validation juridique reste de votre ressort ou de vos conseils spécialisés.",
  },
  {
    question: "Comment démarrer une mission avec le pôle IT ?",
    answer:
      "Un premier échange permet de cadrer le périmètre, les contacts et les outils ; nous proposons ensuite un plan d’intervention et des indicateurs de suivi.",
  },
];

export const IT_WHY_CARDS: { title: string; body: string }[] = [
  {
    title: "Infogérance réactive & transparence",
    body: "Des équipes dédiées, des comptes rendus réguliers et une vision claire des incidents, des changements et de la capacité.",
  },
  {
    title: "Sécurité intégrée au quotidien",
    body: "Durcissement progressif, MFA, sauvegardes testées et sensibilisation : une approche pragmatique, pas uniquement théorique.",
  },
  {
    title: "Cloud & réseau maîtrisés",
    body: "Architectures éprouvées, migrations planifiées et documentation à jour pour faire évoluer votre SI sans surprise.",
  },
];

/** Six références les plus récentes pour la section landing IT (liste complète sur `/it/cas-clients`). */
export const IT_CASE_STUDIES: CaseStudyCardStudy[] = caseStudiesForPoleLanding(getItCaseStudyCards());

export const IT_STATS: { id: string; value: string; label: string }[] = [
  { id: "it-stat-1", value: "99,5%", label: "disponibilité cible sur périmètres critiques" },
  { id: "it-stat-2", value: "< 30 min", label: "prise en charge incidents P1 (selon contrat)" },
  { id: "it-stat-3", value: "+200", label: "environnements supervisés pour nos clients" },
];

export const IT_FEATURE_BULLETS: { id?: string; text: string }[] = [
  { id: "it-bullet-1", text: "SOC managé & détection d’incidents" },
  { text: "Conformité, sauvegardes et plans de reprise testés" },
  { id: "it-bullet-3", text: "Accompagnement cloud Microsoft & hybride" },
];
