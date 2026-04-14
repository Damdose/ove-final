/**
 * Catalogue des pages service du pôle Solutions — utilisé par les routes `/services-solution/[slug]`.
 * Tous les services référencés dans la nav mega-menu Solutions sont définis ici.
 */

import { SOLUTIONS_CAROUSEL_SERVICES } from "./solutions-services-carousel-catalog";

function stockPhoto(id: string): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;
}

export interface SolutionsServiceDefinition {
  slug: string;
  title: string;
  /** Proposition de valeur affichée en H1 sur la page service (fallback: title). */
  headline?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  body: string[];
}

function fromCarousel(slug: string, body: string[], headline?: string): SolutionsServiceDefinition {
  const c = SOLUTIONS_CAROUSEL_SERVICES.find((s) => s.slug === slug);
  if (!c) throw new Error(`Missing Solutions carousel service: ${slug}`);
  return {
    slug: c.slug,
    title: c.title,
    headline,
    description: c.description,
    imageSrc: c.imageSrc,
    imageAlt: c.imageAlt,
    body,
  };
}

function svc(
  slug: string,
  title: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  body: string[],
  headline?: string,
): SolutionsServiceDefinition {
  return { slug, title, headline, description, imageSrc, imageAlt, body };
}

/* ──────── Sûreté ──────── */

const SURETE: SolutionsServiceDefinition[] = [
  svc(
    "surete-de-chantier",
    "Sûreté de chantier",
    "Systèmes modulaires, connectés et autonomes — vidéosurveillance, détection périmétrique et alertes temps réel pour des chantiers protégés.",
    stockPhoto("photo-1504307651254-35680f356dfd"),
    "Caméras et détecteurs installés sur un chantier de construction",
    [
      "Nous déployons des systèmes de sûreté modulaires, connectés et autonomes pour protéger vos chantiers contre les intrusions, les vols et les actes de malveillance.",
      "Vidéosurveillance, détection périmétrique et alertes en temps réel : nos installations sont pensées pour des environnements évolutifs et des durées de mission variables.",
    ],
    "Protégez vos chantiers contre les intrusions et le vol",
  ),
  fromCarousel("detection-perimetrique", [
    "Barrières infrarouges, câbles enterrés, détection par vidéo-analyse : nous concevons des périmètres de sécurité adaptés à la topographie et aux contraintes de chaque site.",
    "Les alertes sont corrélées à la vidéosurveillance et remontées sur votre poste de supervision ou votre smartphone pour une réaction immédiate.",
  ], "Sécurisez vos périmètres avec une détection fiable et immédiate"),
  fromCarousel("boitiers-a-clefs", [
    "Armoires et boîtiers connectés pour centraliser, tracer et sécuriser la gestion de vos clés : attribution par badge, historique complet et alertes en cas d'anomalie.",
    "Solution adaptée aux hôtels, résidences, sites multi-occupants et régies immobilières.",
  ], "Centralisez et tracez la gestion de toutes vos clés"),
  svc(
    "portail-portique-barriere",
    "Portail, portique & barrière",
    "Portails, portiques et barrières intégrés à vos systèmes de contrôle d'accès et vidéosurveillance, avec maintenance préventive incluse.",
    stockPhoto("photo-1558618666-fcd25c85cd64"),
    "Portail motorisé et barrière de contrôle d'accès sur site",
    [
      "Nous intégrons portails coulissants, battants, portiques piétons et barrières levantes avec les systèmes de contrôle d'accès, interphonie et vidéosurveillance.",
      "Paramétrage horaire, gestion des flux et maintenance préventive inclus pour un fonctionnement fiable au quotidien.",
    ],
    "Automatisez et sécurisez tous vos points d'accès",
  ),
  svc(
    "videophonie",
    "Vidéophonie",
    "Platines IP, postes connectés et déverrouillage à distance depuis smartphone pour un contrôle visuel de chaque accès.",
    stockPhoto("photo-1558002038-1055907df827"),
    "Interphone vidéo et platine de rue en façade de bâtiment",
    [
      "De la platine de rue IP aux postes intérieurs connectés, nous installons des solutions de vidéophonie compatibles avec vos systèmes de contrôle d'accès.",
      "Appel distant, déverrouillage à distance et intégration smartphone : vos résidents et collaborateurs gèrent les accès simplement.",
    ],
    "Contrôlez visuellement chaque accès à vos bâtiments",
  ),
  svc(
    "videosurveillance",
    "Vidéosurveillance",
    "Caméras IP, vidéo-analyse embarquée et stockage NVR/cloud — installations conformes RGPD, dimensionnées pour évoluer avec vos besoins.",
    stockPhoto("photo-1557597774-9d273605dfa9"),
    "Caméras de surveillance installées en extérieur d'un bâtiment professionnel",
    [
      "Conception, installation et paramétrage de systèmes de vidéosurveillance IP : caméras fixes, PTZ, thermiques, stockage NVR/cloud et vidéo-analyse embarquée.",
      "Nos installations respectent le cadre réglementaire (RGPD, CNIL) et sont dimensionnées pour évoluer avec vos besoins.",
    ],
    "Gardez un oeil sur vos sites, en temps réel et à distance",
  ),
  svc(
    "supervision-unifiee",
    "Supervision unifiée",
    "Vidéo, intrusion, accès et GTB réunis dans une seule interface avec corrélation d'événements, plans interactifs et rapports automatisés.",
    stockPhoto("photo-1551434678-e076c223a692"),
    "Écran de supervision centralisée avec cartographie et alertes",
    [
      "Nous intégrons vos différents systèmes (vidéo, intrusion, accès, GTB) dans une plateforme de supervision unifiée pour une vision temps réel de la sécurité de vos sites.",
      "Corrélation d'événements, plans interactifs, levées de doute vidéo et rapports automatisés pour un pilotage efficace.",
    ],
    "Pilotez toute votre sûreté depuis un seul écran",
  ),
  fromCarousel("controle-dacces", [
    "Lecteurs de badges, biométrie, serrures connectées et gestion centralisée des droits : nous concevons des architectures de contrôle d'accès adaptées à la taille et à la sensibilité de vos sites.",
    "Intégration avec la vidéosurveillance, l'interphonie et la supervision pour un écosystème de sécurité cohérent.",
  ], "Maîtrisez qui entre, où et quand sur vos sites"),
  fromCarousel("alarme-anti-intrusion", [
    "Centrales, détecteurs volumétriques, contacts d'ouverture et sirènes : nous dimensionnons et installons des systèmes anti-intrusion fiables, testés et maintenus.",
    "Télésurveillance, levée de doute et intervention possible selon vos contrats et exigences réglementaires.",
  ], "Détectez toute intrusion et réagissez immédiatement"),
];

/* ──────── Infrastructure réseau ──────── */

const INFRA: SolutionsServiceDefinition[] = [
  fromCarousel("inpt", [
    "Étude, conception et déploiement d'infrastructures numériques pour bâtiments neufs ou en rénovation : câblage structuré, baies de brassage, locaux techniques.",
    "Nos installations sont conformes aux normes en vigueur et dimensionnées pour supporter vos usages actuels et futurs.",
  ], "Une infrastructure numérique pensée pour durer et évoluer"),
  svc(
    "wifi",
    "Wifi",
    "Site survey, cartographie de couverture et paramétrage fin des contrôleurs pour une connectivité fiable même en haute densité.",
    stockPhoto("photo-1544197150-b99a580bb7a8"),
    "Point d'accès wifi professionnel installé en environnement tertiaire",
    [
      "Couverture, capacité, sécurité et roaming : nous concevons des réseaux wifi adaptés aux contraintes de vos bâtiments et à la densité d'utilisateurs.",
      "Site survey, cartographie de couverture et paramétrage fin des contrôleurs pour une connectivité fiable.",
    ],
    "Un wifi professionnel fiable dans chaque recoin de vos locaux",
  ),
  fromCarousel("antenne-gsm-4g-5g", [
    "Étude de couverture, installation de systèmes d'amplification et d'antennes distribuées (DAS) pour garantir la couverture mobile dans vos bâtiments, parkings et sous-sols.",
    "Solutions conformes aux exigences des opérateurs et adaptées aux environnements complexes (béton, sous-sol, grande surface).",
  ], "Garantissez la couverture mobile dans tous vos bâtiments"),
  svc(
    "reseau-vdi",
    "Réseau VDI",
    "Câblage cuivre Cat.6/6a, fibre optique et baies de brassage certifiés aux normes pour une infrastructure maintenable et évolutive.",
    stockPhoto("photo-1558494949-ef010cbdcc31"),
    "Baie de brassage et câblage structuré en local technique",
    [
      "Conception et réalisation de réseaux VDI conformes aux normes : câblage cuivre Cat.6/6a, fibre optique, rocades et baies de brassage.",
      "Certification des liens, recette et documentation pour une infrastructure maintenable et évolutive.",
    ],
    "Un câblage structuré aux normes, prêt pour vos usages de demain",
  ),
  fromCarousel("audit-de-cablage", [
    "Mesures, certification et cartographie de vos infrastructures de câblage existantes : identification des points faibles, des non-conformités et des axes d'amélioration.",
    "Rapport détaillé avec recommandations priorisées pour fiabiliser vos réseaux et préparer vos projets d'évolution.",
  ], "Identifiez les faiblesses de votre câblage avant qu'elles ne vous ralentissent"),
  fromCarousel("fibre-optique", [
    "Déploiement de liens fibre optique monomode et multimode pour vos interconnexions inter-bâtiments, campus et datacenters.",
    "Soudure, mesures réflectométriques et certification pour des liaisons performantes et pérennes.",
  ], "Des liaisons fibre performantes entre vos bâtiments et datacenters"),
];

/* ──────── Audiovisuel ──────── */

const AUDIO: SolutionsServiceDefinition[] = [
  svc(
    "reservation-salle-de-reunion",
    "Réservation salle de réunion",
    "Solutions de réservation et d'affichage pour optimiser l'usage de vos salles de réunion.",
    stockPhoto("photo-1497366216548-37526070297c"),
    "Tablette de réservation de salle de réunion en entrée de salle",
    [
      "Tablettes murales, intégration calendrier (Microsoft 365, Google Workspace) et capteurs d'occupation pour une gestion fluide de vos espaces.",
      "Vos collaborateurs réservent et libèrent les salles en temps réel, et les données d'occupation alimentent vos décisions d'aménagement.",
    ],
    "Fini les salles fantômes : optimisez l'usage de vos espaces",
  ),
  svc(
    "musique-dambiance",
    "Musique d'ambiance",
    "Sonorisation d'ambiance pour commerces, hôtels, restaurants et espaces d'accueil.",
    stockPhoto("photo-1511671782779-c97d3d27a1d4"),
    "Haut-parleurs encastrés dans un espace commercial",
    [
      "Sélection des sources, zonage, programmation horaire et gestion du volume : nous créons l'ambiance sonore adaptée à votre activité et à vos espaces.",
      "Matériel professionnel, installation soignée et maintenance pour un rendu sonore constant et agréable.",
    ],
    "Créez l'ambiance sonore qui reflète votre identité",
  ),
  svc(
    "ecrans-interactifs",
    "Écrans interactifs",
    "Écrans tactiles et interactifs pour salles de réunion, showrooms et espaces collaboratifs.",
    stockPhoto("photo-1550751827-4bd374c3f58b"),
    "Écran interactif tactile dans une salle de réunion",
    [
      "Installation et intégration d'écrans interactifs pour la collaboration, la présentation et la formation : annotation, partage d'écran et visioconférence intégrée.",
      "Compatible avec vos outils (Teams, Zoom, Google Meet) et dimensionné pour vos usages quotidiens.",
    ],
    "Collaborez mieux grâce à des écrans tactiles pensés pour vos équipes",
  ),
  fromCarousel("affichage-dynamique", [
    "Déploiement d'écrans professionnels et de solutions de gestion de contenu pour diffuser vos messages en temps réel : accueil, communication interne, affichage réglementaire.",
    "Pilotage centralisé multi-sites, programmation horaire et intégration de flux dynamiques (météo, actualités, KPI).",
  ], "Diffusez le bon message, au bon endroit, au bon moment"),
  svc(
    "sonorisation-despaces",
    "Sonorisation d'espaces",
    "Sonorisation professionnelle pour auditoriums, salles de conférence et espaces événementiels.",
    stockPhoto("photo-1470229722913-7c0e2dbbafd3"),
    "Système de sonorisation dans un auditorium",
    [
      "Étude acoustique, choix des enceintes, amplification et traitement du signal pour une intelligibilité optimale dans chaque configuration d'espace.",
      "Systèmes évacuation (EVAC/SSS) conformes aux normes de sécurité incendie si nécessaire.",
    ],
    "Un son clair et puissant dans chacun de vos espaces",
  ),
  svc(
    "installation-de-videoprojecteurs-et-ecrans-de-projection",
    "Vidéoprojecteurs & écrans de projection",
    "Installation de vidéoprojecteurs et écrans de projection pour salles de réunion et espaces de formation.",
    stockPhoto("photo-1517502884422-41eaead166d4"),
    "Vidéoprojecteur installé au plafond dans une salle de réunion",
    [
      "Vidéoprojecteurs courte focale, laser ou lampe, écrans motorisés ou fixes : nous dimensionnons la solution adaptée à la taille de la salle et aux usages.",
      "Câblage, support, paramétrage et intégration avec vos systèmes audiovisuels existants.",
    ],
    "L'image grand format adaptée à chaque salle et chaque usage",
  ),
  svc(
    "integration-de-salles-de-reunion-connectees",
    "Salles de réunion connectées",
    "Intégration complète de salles de réunion équipées pour la visioconférence et la collaboration.",
    stockPhoto("photo-1497366811353-6870744d04b2"),
    "Salle de réunion équipée visioconférence et écran interactif",
    [
      "Caméra, micro, écran, partage sans fil et pilotage tactile : nous intégrons tous les équipements pour une expérience fluide en présentiel et à distance.",
      "Certifiés Microsoft Teams Rooms, Zoom Rooms et solutions tierces pour une compatibilité garantie.",
    ],
    "Des salles de réunion où tout fonctionne dès la première seconde",
  ),
  svc(
    "systeme-de-visioconference",
    "Système de visioconférence",
    "Solutions de visioconférence professionnelles pour salles de réunion et espaces de direction.",
    stockPhoto("photo-1516321318423-f06f85e504b3"),
    "Système de visioconférence professionnel avec caméra PTZ",
    [
      "De la huddle room à la salle de direction : caméras PTZ, barres de son, processeurs DSP et intégration plateforme (Teams, Zoom, Webex).",
      "Pilotage simplifié, qualité audio/vidéo professionnelle et support pour vos équipes IT.",
    ],
    "Des visioconférences fluides, en un clic, sans galère technique",
  ),
  svc(
    "mur-decrans-led-walls",
    "Mur d'écrans & LED Walls",
    "Murs d'images LED et écrans grand format pour halls d'accueil, centres de supervision et événements.",
    stockPhoto("photo-1517457373958-b7bdd4587205"),
    "Mur d'écrans LED dans un hall d'accueil professionnel",
    [
      "Conception, installation et calibration de murs d'écrans LED ou LCD pour la communication visuelle grand format : supervision, accueil, retail, événementiel.",
      "Gestion de contenu centralisée et maintenance préventive pour un affichage fiable et percutant.",
    ],
    "Un affichage grand format qui capte l'attention",
  ),
];

/* ──────── Divers ──────── */

const DIVERS: SolutionsServiceDefinition[] = [
  svc(
    "systeme-dappel-durgence",
    "Système d'appel d'urgence",
    "Systèmes d'appel d'urgence et de mise en sécurité pour établissements recevant du public.",
    stockPhoto("photo-1576091160399-112ba8d25d1d"),
    "Bouton d'appel d'urgence dans un couloir d'hôpital",
    [
      "Installation de dispositifs d'appel d'urgence conformes aux normes ERP : boutons-poussoirs, tirettes, signalisation lumineuse et sonore.",
      "Intégration avec vos systèmes de supervision et de gestion technique pour une remontée d'alertes centralisée.",
    ],
    "Des alertes d'urgence fiables pour protéger vos occupants",
  ),
  svc(
    "interphonie-eas",
    "Interphonie EAS",
    "Systèmes d'interphonie et d'évacuation sonore pour bâtiments tertiaires et ERP.",
    stockPhoto("photo-1558002038-1055907df827"),
    "Poste d'interphonie et haut-parleur d'évacuation en bâtiment",
    [
      "Interphonie de sécurité, évacuation sonore (EAS/SSS) et diffusion de messages de sécurité conformes à la réglementation incendie.",
      "Études acoustiques, zonage et certification pour des installations fiables et conformes.",
    ],
    "Une évacuation sonore conforme et une interphonie sans faille",
  ),
  fromCarousel("gestion-des-visiteurs", [
    "Bornes d'accueil, pré-enregistrement en ligne, impression de badges et notification des hôtes : nous digitalisons l'accueil de vos visiteurs pour plus de fluidité et de traçabilité.",
    "Intégration avec le contrôle d'accès et conformité RGPD pour une gestion des données visiteurs maîtrisée.",
  ], "Un accueil visiteurs fluide, traçable et professionnel"),
  svc(
    "systeme-dappel-malade",
    "Système d'appel malade",
    "Solutions d'appel malade et de communication patient pour établissements de santé et EHPAD.",
    stockPhoto("photo-1519494026892-80bbd2d6fd0d"),
    "Bouton d'appel patient et afficheur dans une chambre d'hôpital",
    [
      "Boutons d'appel, afficheurs couloir, médaillons et intégration avec les systèmes de gestion hospitalière : nous installons des solutions adaptées aux parcours de soins.",
      "Technologies IP et radio pour une couverture complète, y compris dans les bâtiments anciens.",
    ],
    "Chaque appel patient reçu et traité sans délai",
  ),
  svc(
    "systeme-de-demence",
    "Système de démence",
    "Solutions anti-errance et de sécurisation pour les résidents atteints de troubles cognitifs.",
    stockPhoto("photo-1576765608535-5f04d1e3f289"),
    "Bracelet de géolocalisation et système anti-errance en EHPAD",
    [
      "Bracelets, détecteurs de passage et verrouillage conditionnel des issues : nous protégeons les résidents vulnérables tout en préservant leur confort.",
      "Alertes en temps réel pour le personnel soignant et intégration avec les systèmes d'appel malade existants.",
    ],
    "Protégez vos résidents vulnérables en toute discrétion",
  ),
  svc(
    "systeme-de-ronde",
    "Système de ronde",
    "Solutions de contrôle de ronde pour agents de sécurité et gardiennage.",
    stockPhoto("photo-1489515217757-5fd1be406fef"),
    "Agent de sécurité effectuant une ronde avec badge NFC",
    [
      "Points de contrôle NFC/RFID, application mobile et rapports automatisés : nous équipons vos agents pour une traçabilité complète des rondes.",
      "Historique horodaté, alertes de non-passage et reporting pour vos clients et donneurs d'ordres.",
    ],
    "Des rondes tracées, prouvées et auditables en temps réel",
  ),
  fromCarousel("gestion-de-stationnement", [
    "Barrières, lecteurs de plaques, bornes de paiement et guidage à la place : nous concevons des solutions de gestion de parking adaptées au flux et à la taille de vos sites.",
    "Supervision temps réel, statistiques d'occupation et intégration avec le contrôle d'accès du bâtiment.",
  ], "Fluidifiez vos parkings et maîtrisez l'accès véhicules"),
  fromCarousel("detection-de-vapotage", [
    "Capteurs environnementaux discrets pour détecter le vapotage dans les espaces clos : sanitaires, salles de classe, chambres d'hôtel.",
    "Alertes en temps réel, historique des événements et intégration avec vos systèmes de supervision existants.",
  ], "Détectez le vapotage dans vos espaces clos en toute discrétion"),
];

const ALL: SolutionsServiceDefinition[] = [...SURETE, ...INFRA, ...AUDIO, ...DIVERS];

export function getSolutionsServiceBySlug(slug: string): SolutionsServiceDefinition | undefined {
  return ALL.find((s) => s.slug === slug);
}

export function getAllSolutionsServiceSlugs(): string[] {
  return ALL.map((s) => s.slug);
}
