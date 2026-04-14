import type { CaseStudyItem } from "@/lib/case-study-item";
import type { CaseStudyRecord } from "@/lib/case-studies-builders";
import {
  digitalRecordFromShort,
  hero,
  itRecordFromShort,
  solutionsRecordFromShort,
} from "@/lib/case-studies-builders";
import type { CaseStudyCardStudy } from "@/components/case-studies/case-study-card";

const D_RETAIL = "photo-1441986300917-64674bd600d8";
const D_FINANCE = "photo-1460925895917-afdab827c52f";
const D_EDU = "photo-1523240795612-9a054b0db644";
const D_HEALTH = "photo-1576091160399-112ba8d25d1d";
const D_HOTEL = "photo-1566073771259-6a8506099945";
const D_INDUS = "photo-1504307651254-35680f356dfd";

/** Six cas clients Digital historiques (contenu détaillé inchangé). */
const DIGITAL_CORE: CaseStudyRecord[] = [
  {
    pole: "digital",
    slug: "client-g",
    href: "/case-studies/client-g",
    imageSrc: hero(D_RETAIL),
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
    pole: "digital",
    slug: "client-d",
    href: "/case-studies/client-d",
    imageSrc: hero(D_FINANCE),
    category: "Finance",
    title: "Horizon Conseil — Services financiers",
    excerpt:
      "Plateforme institutionnelle, contenus réglementés et tunnel de prise de contact pour un cabinet indépendant.",
    intro: "Plateforme de contenus et tunnel d’acquisition pour un cabinet de services financiers réglementés.",
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
    pole: "digital",
    slug: "client-c",
    href: "/case-studies/client-c",
    imageSrc: hero(D_EDU),
    category: "Éducation & formation",
    title: "Campus Pro Formation",
    excerpt: "Portail d’inscriptions, parcours par filière et accompagnement des pics de trafic en période de rentrée.",
    intro: "Portail d’information et d’inscription pour un organisme de formation à forte volumétrie saisonnière.",
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
    pole: "digital",
    slug: "client-h",
    href: "/case-studies/client-h",
    imageSrc: hero(D_HEALTH),
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
    pole: "digital",
    slug: "client-i",
    href: "/case-studies/client-i",
    imageSrc: hero(D_HOTEL),
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
    pole: "digital",
    slug: "client-j",
    href: "/case-studies/client-j",
    imageSrc: hero(D_INDUS),
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

const DIGITAL_EXTRA = [
  {
    slug: "digital-cas-07",
    title: "Aciérie Nord — LinkedIn Ads & leads industriels",
    category: "Industrie & acquisition",
    excerpt:
      "Campagnes LinkedIn ciblées, landing techniques et synchronisation CRM pour nourrir les commerciaux terrain.",
    imageId: "photo-1504307651254-35680f356dfd",
  },
  {
    slug: "digital-cas-08",
    title: "Nexora Finance — charte & design system",
    category: "Branding B2B",
    excerpt: "Identité institutionnelle, composants UI et templates PowerPoint pour une société de gestion.",
    imageId: "photo-1552664730-d307ca884978",
  },
  {
    slug: "digital-cas-09",
    title: "Boutique Lumen — migration SEO e-commerce",
    category: "E-commerce",
    excerpt: "Refonte Shopify, redirections 301 maîtrisées et plan de contenus produit sans perte de trafic.",
    imageId: "photo-1563013544-824ae1b704d3",
  },
  {
    slug: "digital-cas-10",
    title: "SportFit — UGC & social ads",
    category: "Réseaux sociaux",
    excerpt: "Production UGC, tests créatifs Meta/TikTok et tableaux de bord d’apprentissage hebdomadaire.",
    imageId: "photo-1611162617213-7d7a39e9b1d7",
  },
  {
    slug: "digital-cas-11",
    title: "Helios SaaS — automation & nurturing",
    category: "Marketing automation",
    excerpt: "Scénarios email, scoring léger et intégration HubSpot pour qualifier les essais gratuits.",
    imageId: "photo-1551434678-e076c223a692",
  },
  {
    slug: "digital-cas-12",
    title: "Lex & Partners — site vitrine juridique",
    category: "Services professionnels",
    excerpt: "Architecture éditoriale, pages expertises et formulaires conformes aux obligations déontologiques.",
    imageId: "photo-1450101499163-c8848c66ca85",
  },
  {
    slug: "digital-cas-13",
    title: "Flowgrid — identité scale-up",
    category: "Scale-up & branding",
    excerpt: "Logo, déclinaisons motion légères et guidelines pour une levée de fonds et un recrutement international.",
    imageId: "photo-1557804506-669a67965ba0",
  },
  {
    slug: "digital-cas-14",
    title: "Medilink — hub contenus santé",
    category: "Santé & SEO",
    excerpt: "Piliers SEO médicaux, FAQ patients et pages spécialités reliées à la prise de rendez-vous.",
    imageId: "photo-1579684385127-1ef15d508118",
  },
  {
    slug: "digital-cas-15",
    title: "Paystack FR — performance acquisition",
    category: "SaaS & growth",
    excerpt: "Google Ads, pages payantes et CRO sur le tunnel d’inscription pour réduire le coût par compte activé.",
    imageId: "photo-1460925895917-afdab827c52f",
  },
].map(digitalRecordFromShort);

const IT_SHORT = [
  {
    slug: "it-ref-01",
    title: "Crédit Septentrion — Microsoft 365 & postes durcis",
    category: "Finance & assurance",
    excerpt: "Migration messagerie, Intune/MDM et baseline sécurité pour 800 postes répartis sur 12 sites.",
    imageId: "photo-1563986768609-322da13575f3",
  },
  {
    slug: "it-ref-02",
    title: "Retail Nova — supervision 24/7 multi-magasins",
    category: "Retail & distribution",
    excerpt: "SOC léger, corrélation alertes et astreinte partagée pour un parc POS et back-office hétérogène.",
    imageId: "photo-1556742049-0cfed4f6a45d",
  },
  {
    slug: "it-ref-03",
    title: "Métaline Industrie — PRA & sauvegardes immuables",
    category: "Industrie",
    excerpt: "Plan de reprise testé, copies air-gapped et restauration granulaire des serveurs de production.",
    imageId: "photo-1531297484001-80022131f5a1",
  },
  {
    slug: "it-ref-04",
    title: "Atlas Conseil — Zero Trust & MFA généralisée",
    category: "Conseil & audit",
    excerpt: "Conditional Access, segmentation VLAN invité et revue des comptes à privilèges.",
    imageId: "photo-1454165804606-c3d57bc86b40",
  },
  {
    slug: "it-ref-05",
    title: "EuroLog — SD-WAN & interconnexion entrepôts",
    category: "Transport & logistique",
    excerpt: "Déploiement SD-WAN, QoS VoIP et monitoring des liens pour quinze sites logistiques.",
    imageId: "photo-1586528116311-ad8dd3c8310d",
  },
  {
    slug: "it-ref-06",
    title: "Lycée Horizon — MDM & mobilité enseignants",
    category: "Éducation",
    excerpt: "Déploiement Apple School Manager, profils Wi-Fi sécurisés et coffre apps pour les classes.",
    imageId: "photo-1503676260728-1c00da094a0b",
  },
  {
    slug: "it-ref-07",
    title: "Métropole Littoral — durcissement SI public",
    category: "Public & collectivités",
    excerpt: "Audit ANSSI-friendly, durcissement Active Directory et journalisation centralisée.",
    imageId: "photo-1582719478250-c89cae4dc85b",
  },
  {
    slug: "it-ref-08",
    title: "Atelier PME+ — infogérance pack Flow",
    category: "PME & croissance",
    excerpt: "Onboarding/offboarding automatisé, Intune et ticketing unifié pour une équipe de 120 personnes.",
    imageId: "photo-1522071820081-009f0129c71c",
  },
  {
    slug: "it-ref-09",
    title: "Clinique des Alpes — données de santé & accès",
    category: "Santé",
    excerpt: "Segmentation réseau SOG, chiffrement poste et traçabilité des accès dossiers patients.",
    imageId: "photo-1576091160399-112ba8d25d1d",
  },
  {
    slug: "it-ref-10",
    title: "Voltéa — segmentation OT/IT",
    category: "Énergie & utilities",
    excerpt: "DMZ industrielle, bastion SSH et inventaire OT pour un opérateur de réseau électrique.",
    imageId: "photo-1509391366360-2e959784a276",
  },
  {
    slug: "it-ref-11",
    title: "Lexicom — coffre-fort & journaux probants",
    category: "Juridique",
    excerpt: "Archivage WORM, signature électronique qualifiée et supervision des accès avocats/clercs.",
    imageId: "photo-1589829545856-d10d557cf95f",
  },
  {
    slug: "it-ref-12",
    title: "Pulse Média — droits & stockage créatif",
    category: "Médias & création",
    excerpt: "NAS haute dispo, sauvegarde LTO et gestion des droits sur les rushs vidéo.",
    imageId: "photo-1492691527719-9d1e07e534b4",
  },
  {
    slug: "it-ref-13",
    title: "Panier Express — pics e-commerce & WAF",
    category: "E-commerce & retail tech",
    excerpt: "Autoscalling Kubernetes, WAF managé et runbooks pour les opérations commerciales flash.",
    imageId: "photo-1556740758-90de374c12ad",
  },
  {
    slug: "it-ref-14",
    title: "Mutuelle Alpina — tests PRA semestriels",
    category: "Assurance",
    excerpt: "Orchestration de tests de restauration, RTO/RPO contractualisés et reporting CA.",
    imageId: "photo-1551288049-bebda4e38f71",
  },
  {
    slug: "it-ref-15",
    title: "SaaS Northwind — SOC managé & EDR",
    category: "SaaS & software",
    excerpt: "Corrélations Sentinel, playbooks IR et sensibilisation développeurs aux secrets.",
    imageId: "photo-1555949963-aa79dcee981c",
  },
].map(itRecordFromShort);

const SOL_SHORT = [
  {
    slug: "sol-ref-01",
    title: "Tour Opaline — vidéo IP & contrôle d’accès",
    category: "Tertiaire & siège",
    excerpt: "800 badges, lecteurs cryptés et flux vidéo centralisés pour un campus de bureaux.",
    imageId: "photo-1497366216548-37526070297c",
  },
  {
    slug: "sol-ref-02",
    title: "CHU Lumière — vidéosurveillance périmétrique",
    category: "Santé",
    excerpt: "Caméras 4K, zones floutées RGPD et enregistrement chiffré pour les accès urgences.",
    imageId: "photo-1519494026892-80bbd2d6fd0d",
  },
  {
    slug: "sol-ref-03",
    title: "Université du Midi — intrusion volumétrique",
    category: "Éducation",
    excerpt: "Centrale multisite, détecteurs doubles techno et supervision pour campus étendu.",
    imageId: "photo-1562564055-71e051d33c19",
  },
  {
    slug: "sol-ref-04",
    title: "FroidLog — détection incendie entrepôts",
    category: "Logistique",
    excerpt: "Détection adressable, boucles gel et signalisation ERP pour trois entrepôts -18 °C.",
    imageId: "photo-1586528116311-ad8dd3c8310d",
  },
  {
    slug: "sol-ref-05",
    title: "Retail Nation — CCTV siège & magasins",
    category: "Retail",
    excerpt: "Architecture VMS fédérée, comptage flux et accès lecture contrôlé pour le siège.",
    imageId: "photo-1441986300917-64674bd600d8",
  },
  {
    slug: "sol-ref-06",
    title: "Chimie Atlantique — détection gaz & flammes",
    category: "Industrie",
    excerpt: "Détecteurs IR3, barrières optiques et intégration GTB pour zones ATEX.",
    imageId: "photo-1504307651254-35680f356dfd",
  },
  {
    slug: "sol-ref-07",
    title: "Résidence Carré Or — portier vidéo IP",
    category: "Résidentiel haut de gamme",
    excerpt: "Interphones SIP, badges et visiophonie mobile pour 180 logements.",
    imageId: "photo-1600607687939-ce8a6c25118c",
  },
  {
    slug: "sol-ref-08",
    title: "NeoColo — contrôle d’accès biométrique",
    category: "Data center",
    excerpt: "Mantraps, lecteurs vein pattern et audit trail pour cages clients.",
    imageId: "photo-1558494949-ef010cbdcc31",
  },
  {
    slug: "sol-ref-09",
    title: "Gare Centrale — vidéo PTZ & ANPR",
    category: "Transport",
    excerpt: "Couverture quais, analytics foule et lecture plaques pour coordination sûreté.",
    imageId: "photo-1544620347-c4fd4a3d5957",
  },
  {
    slug: "sol-ref-10",
    title: "Musée des Lumières — vidéo discrète",
    category: "Culture",
    excerpt: "Capteurs compacts, éclairage IR respectueux des œuvres et stockage court.",
    imageId: "photo-1574958269340-fa927503f3dd",
  },
  {
    slug: "sol-ref-11",
    title: "Hyper Ulysse — intrusion grandes surfaces",
    category: "Grande distribution",
    excerpt: "Centrale IP, sirènes intérieures et boucles caisse synchronisées avec vidéo.",
    imageId: "photo-1604719312566-8912e9227c6a",
  },
  {
    slug: "sol-ref-12",
    title: "Siège Verdana — incendie adressable multisite",
    category: "Multi-sites",
    excerpt: "ESSER adressable, boucles ouvertes et supervision graphique nationale.",
    imageId: "photo-1486406146926-c627a92ad1ab",
  },
  {
    slug: "sol-ref-13",
    title: "Usine Nova Auto — vidéo ligne de production",
    category: "Automobile",
    excerpt: "Enregistrement qualité, ralenti synchro MES et accès restreint atelier.",
    imageId: "photo-1565043589221-1a6fd9ae45c7",
  },
  {
    slug: "sol-ref-14",
    title: "Réseau Banque Héritage — alarme agences",
    category: "Banque & assurance",
    excerpt: "Typage A2P, télésurveillance certifiée et maintenance préventive trimestrielle.",
    imageId: "photo-1563986768609-322da13575f3",
  },
  {
    slug: "sol-ref-15",
    title: "Resort Baie Bleue — EVAC & sonorisation",
    category: "Hôtellerie",
    excerpt: "Système EVAC multizone, musique d’ambiance IP et déclenchement feu coordonné.",
    imageId: "photo-1566073771259-6a8506099945",
  },
].map(solutionsRecordFromShort);

const ALL_RECORDS: CaseStudyRecord[] = [...DIGITAL_CORE, ...DIGITAL_EXTRA, ...IT_SHORT, ...SOL_SHORT];

function stripPole(r: CaseStudyRecord): CaseStudyItem {
  const { pole: _p, ...item } = r;
  return item;
}

export function getDigitalCaseStudies(): CaseStudyItem[] {
  return ALL_RECORDS.filter((r) => r.pole === "digital").map(stripPole);
}

export function getItCaseStudyCards(): CaseStudyCardStudy[] {
  return ALL_RECORDS.filter((r) => r.pole === "it").map((r) => ({
    href: r.href,
    imageSrc: r.imageSrc,
    category: r.category,
    title: r.title,
    excerpt: r.excerpt,
  }));
}

export function getSolutionsCaseStudyCards(): CaseStudyCardStudy[] {
  return ALL_RECORDS.filter((r) => r.pole === "solutions").map((r) => ({
    href: r.href,
    imageSrc: r.imageSrc,
    category: r.category,
    title: r.title,
    excerpt: r.excerpt,
  }));
}

/** Nombre max de fiches cas clients dans la section landing d’un pôle. */
export const POLE_LANDING_CASE_STUDIES_MAX = 6;

/**
 * Dernières entrées du catalogue pour une landing : l’ordre source suit les références
 * ajoutées en fin de fichier (les plus récentes en tête après retournement).
 */
export function caseStudiesForPoleLanding<T>(items: T[], max = POLE_LANDING_CASE_STUDIES_MAX): T[] {
  const n = Math.min(max, items.length);
  return items.slice(-n).reverse();
}

export function getAllCaseStudySlugs(): string[] {
  return ALL_RECORDS.map((r) => r.slug);
}

export function getCaseStudyRecordBySlug(slug: string): CaseStudyRecord | null {
  return ALL_RECORDS.find((r) => r.slug === slug) ?? null;
}
