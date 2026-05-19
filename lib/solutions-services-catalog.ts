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
  /** Paragraphe de présentation complémentaire au hero — affiché sous la tagline des feature sections. */
  presentation: string;
  imageSrc: string;
  imageAlt: string;
  /** Titre dynamique section "Pourquoi nous" */
  whyHeading?: string;
  /** Titre dynamique section "Secteurs" */
  sectorsHeading?: string;
  /** Sous-titre dynamique section "Secteurs" */
  sectorsSubtitle?: string;
}

function fromCarousel(
  slug: string,
  presentation: string,
  headline?: string,
): SolutionsServiceDefinition {
  const c = SOLUTIONS_CAROUSEL_SERVICES.find((s) => s.slug === slug);
  if (!c) throw new Error(`Missing Solutions carousel service: ${slug}`);
  return { slug: c.slug, title: c.title, headline, description: c.description, presentation, imageSrc: c.imageSrc, imageAlt: c.imageAlt };
}

function svc(
  slug: string,
  title: string,
  description: string,
  presentation: string,
  imageSrc: string,
  imageAlt: string,
  headline?: string,
): SolutionsServiceDefinition {
  return { slug, title, headline, description, presentation, imageSrc, imageAlt };
}

/* ──────── Sûreté ──────── */

const SURETE: SolutionsServiceDefinition[] = [
  svc(
    "surete-de-chantier",
    "Sûreté de chantier",
    "Systèmes modulaires, connectés et autonomes — vidéosurveillance, détection périmétrique et alertes temps réel pour des chantiers protégés.",
    "Alimentation solaire, connexion 4G et alerte vidéo sur smartphone dès la détection d'un mouvement. Le système se déplace à chaque phase du chantier sans câblage lourd.",
    stockPhoto("photo-1504307651254-35680f356dfd"),
    "Caméras et détecteurs installés sur un chantier de construction",
    "Sûreté de chantier : protégez vos sites contre les intrusions et le vol",
  ),
  fromCarousel("detection-perimetrique",
    "La technologie s'adapte à votre terrain et chaque alerte est corrélée à vos caméras pour éliminer les fausses alarmes — jusqu'à plusieurs kilomètres de couverture, par tous les temps.",
    "Détection périmétrique : sécurisez vos périmètres avant l'intrusion",
  ),
  fromCarousel("boitiers-a-clefs",
    "Attribution par badge, horodatage automatique et alertes en cas d'anomalie. Idéal pour les sites où la rotation des clés est trop fréquente pour une gestion manuelle.",
    "Boîtiers à clefs connectés : chaque clé tracée en temps réel",
  ),
  svc(
    "portail-portique-barriere",
    "Portail, portique & barrière",
    "Portails, portiques et barrières intégrés à vos systèmes de contrôle d'accès et vidéosurveillance, avec maintenance préventive incluse.",
    "Badge, plaque ou code pour passer — toute autre tentative est bloquée et enregistrée. L'équipement s'intègre à votre écosystème de sécurité existant avec maintenance préventive incluse.",
    stockPhoto("photo-1558618666-fcd25c85cd64"),
    "Portail motorisé et barrière de contrôle d'accès sur site",
    "Portails, portiques et barrières : automatisez vos points d'accès",
  ),
  svc(
    "videophonie",
    "Vidéophonie",
    "Platines IP, postes connectés et déverrouillage à distance depuis smartphone pour un contrôle visuel de chaque accès.",
    "Image nette, historique consultable et gestion multi-sites depuis une seule application — compatible avec votre contrôle d'accès existant.",
    stockPhoto("photo-1558002038-1055907df827"),
    "Interphone vidéo et platine de rue en façade de bâtiment",
    "Vidéophonie IP : contrôlez visuellement chaque accès",
  ),
  svc(
    "videosurveillance",
    "Vidéosurveillance",
    "Caméras IP HD/4K, vidéo-analyse IA embarquée et stockage NVR/cloud — conformes RGPD, dimensionnées pour évoluer avec vos besoins.",
    "La vidéo-analyse IA transforme vos caméras en capteurs intelligents qui vous alertent instantanément. Conformes RGPD/CNIL et conçues pour évoluer sans repartir de zéro.",
    stockPhoto("photo-1557597774-9d273605dfa9"),
    "Caméras de surveillance installées en extérieur d'un bâtiment professionnel",
    "Vidéosurveillance intelligente : gardez un œil sur vos sites 24h/24",
  ),
  svc(
    "supervision-unifiee",
    "Supervision unifiée",
    "Vidéo, intrusion, accès et GTB réunis dans une seule interface avec corrélation d'événements, plans interactifs et rapports automatisés.",
    "Un tableau de bord unique avec plans interactifs et corrélation automatique des événements. Chaque alarme affiche instantanément la caméra, le badge et l'état des détecteurs associés.",
    stockPhoto("photo-1551434678-e076c223a692"),
    "Écran de supervision centralisée avec cartographie et alertes",
    "Supervision unifiée : pilotez toute votre sûreté depuis un seul écran",
  ),
  fromCarousel("controle-dacces",
    "Droits gérés depuis une console unique, traçabilité complète des mouvements et corrélation vidéo de chaque tentative d'accès pour une levée de doute immédiate.",
    "Contrôle d'accès : maîtrisez qui entre, où et quand",
  ),
  fromCarousel("alarme-anti-intrusion",
    "Dimensionné pour votre site et connecté à une télésurveillance avec levée de doute vidéo. En cas d'intrusion : alerte, notification et possibilité d'intervention 24h/24.",
    "Alarme anti-intrusion : détectez et réagissez immédiatement",
  ),
];

/* ──────── Infrastructure réseau ──────── */

const INFRA: SolutionsServiceDefinition[] = [
  fromCarousel("inpt",
    "Chaque lien certifié selon les normes NF C 15-100 et EN 50173, dimensionné pour anticiper vos évolutions futures. Un seul interlocuteur de l'étude à la recette.",
    "INPT : une infrastructure numérique pensée pour durer",
  ),
  svc(
    "wifi",
    "Wifi",
    "Site survey, cartographie de couverture et paramétrage fin des contrôleurs pour une connectivité fiable même en haute densité.",
    "Site survey terrain, positionnement optimisé des bornes et réseaux segmentés (collaborateurs, invités, IoT). Notre supervision détecte les anomalies avant vos utilisateurs.",
    stockPhoto("photo-1544197150-b99a580bb7a8"),
    "Point d'accès wifi professionnel installé en environnement tertiaire",
    "Wifi professionnel : une connectivité fiable dans chaque recoin",
  ),
  fromCarousel("antenne-gsm-4g-5g",
    "Étude de couverture puis installation DAS conforme aux exigences opérateurs. Signal rétabli dans les zones les plus contraintes, dimensionné au juste besoin.",
    "Antennes GSM/4G/5G : la couverture mobile garantie partout",
  ),
  svc(
    "reseau-vdi",
    "Réseau VDI",
    "Câblage cuivre Cat.6/6a, fibre optique et baies de brassage certifiés aux normes pour une infrastructure maintenable et évolutive.",
    "Infrastructure propre, étiquetée et documentée — évolutive vers 10 Gbit/s sans reprendre le câblage. Un investissement qui se rentabilise sur 15 à 20 ans.",
    stockPhoto("photo-1558494949-ef010cbdcc31"),
    "Baie de brassage et câblage structuré en local technique",
    "Réseau VDI : un câblage structuré prêt pour vos usages de demain",
  ),
  fromCarousel("audit-de-cablage",
    "Le problème vient souvent du câblage — invisible tant qu'on ne mesure pas. Rapport clair avec recommandations priorisées, indispensable avant toute extension ou migration.",
    "Audit de câblage : identifiez les faiblesses avant qu'elles ne vous ralentissent",
  ),
  fromCarousel("fibre-optique",
    "Chaque soudure contrôlée par mesures OTDR, chaque lien certifié avant livraison. Toute la chaîne maîtrisée en un seul prestataire, de l'étude à la mise en service.",
    "Fibre optique : des liaisons performantes entre vos bâtiments",
  ),
];

/* ──────── Audiovisuel ──────── */

const AUDIO: SolutionsServiceDefinition[] = [
  svc(
    "reservation-salle-de-reunion",
    "Réservation salle de réunion",
    "Tablettes murales, intégration calendrier et capteurs d'occupation pour éliminer les salles fantômes et optimiser vos espaces.",
    "Les salles vides se libèrent automatiquement grâce aux capteurs de présence. Les données d'occupation alimentent vos décisions d'aménagement en identifiant créneaux de pointe et espaces sous-utilisés.",
    stockPhoto("photo-1497366216548-37526070297c"),
    "Tablette de réservation de salle de réunion en entrée de salle",
    "Réservation de salles : fini les salles fantômes, optimisez vos espaces",
  ),
  svc(
    "musique-dambiance",
    "Musique d'ambiance",
    "Zonage, programmation horaire et matériel professionnel pour créer l'atmosphère sonore adaptée à votre activité et vos espaces.",
    "Musique douce en réception, dynamique en vente, discrète en restauration — tout est programmé et piloté à distance. Matériel invisible avec maintenance incluse pour un rendu constant.",
    stockPhoto("photo-1511671782779-c97d3d27a1d4"),
    "Haut-parleurs encastrés dans un espace commercial",
    "Musique d'ambiance : créez l'atmosphère sonore qui reflète votre identité",
  ),
  svc(
    "ecrans-interactifs",
    "Écrans interactifs",
    "Annotation, partage d'écran et visioconférence intégrée, compatibles Teams, Zoom et Google Meet pour une collaboration sans friction.",
    "Tout est réuni dans un seul écran tactile intégré à votre IT existant. Adoption immédiate par vos équipes, réunions plus productives dès le premier jour.",
    stockPhoto("photo-1550751827-4bd374c3f58b"),
    "Écran interactif tactile dans une salle de réunion",
    "Écrans interactifs : collaborez mieux grâce au tactile",
  ),
  fromCarousel("affichage-dynamique",
    "Programmation horaire, flux dynamiques et mise à jour multi-sites en quelques clics. Écrans professionnels 24/7 avec une plateforme de gestion qui vous donne un contrôle total.",
    "Affichage dynamique : le bon message, au bon endroit, au bon moment",
  ),
  svc(
    "sonorisation-despaces",
    "Sonorisation d'espaces",
    "Étude acoustique, amplification et traitement du signal pour une intelligibilité optimale dans chaque configuration d'espace.",
    "Étude acoustique sur site, positionnement et calibration sur mesure. Intégration possible de l'évacuation sonore (EVAC/SSS) dans la même installation pour une seule certification.",
    stockPhoto("photo-1470229722913-7c0e2dbbafd3"),
    "Système de sonorisation dans un auditorium",
    "Sonorisation d'espaces : un son clair et puissant partout",
  ),
  svc(
    "installation-de-videoprojecteurs-et-ecrans-de-projection",
    "Vidéoprojecteurs & écrans de projection",
    "Courte focale, laser ou lampe, écrans motorisés ou fixes — dimensionnés pour votre salle et intégrés à votre installation AV existante.",
    "Le choix de la technologie (laser, courte focale, lampe) est guidé par vos contraintes réelles — luminosité, distance, budget. Câblage, paramétrage et intégration AV complète.",
    stockPhoto("photo-1517502884422-41eaead166d4"),
    "Vidéoprojecteur installé au plafond dans une salle de réunion",
    "Vidéoprojecteurs : l'image grand format adaptée à chaque salle",
  ),
  svc(
    "integration-de-salles-de-reunion-connectees",
    "Salles de réunion connectées",
    "Caméra, micro, écran et partage sans fil intégrés — certifiés Teams Rooms et Zoom Rooms pour une expérience fluide dès la première seconde.",
    "Cadrage auto, micros sans écho et partage sans fil dans un système certifié Teams Rooms / Zoom Rooms. Vos équipes IT n'ont plus à intervenir salle par salle.",
    stockPhoto("photo-1497366811353-6870744d04b2"),
    "Salle de réunion équipée visioconférence et écran interactif",
    "Salles de réunion connectées : tout fonctionne dès la première seconde",
  ),
  svc(
    "systeme-de-visioconference",
    "Système de visioconférence",
    "Caméras PTZ, barres de son et DSP intégrés à Teams, Zoom ou Webex pour des réunions hybrides de qualité professionnelle.",
    "Cadrage automatique, annulation d'écho et beamforming adaptés à chaque espace. Pilotage par panneau tactile unique et supervision centralisée pour vos équipes IT.",
    stockPhoto("photo-1516321318423-f06f85e504b3"),
    "Système de visioconférence professionnel avec caméra PTZ",
    "Visioconférence pro : des réunions fluides, en un clic",
  ),
  svc(
    "mur-decrans-led-walls",
    "Mur d'écrans & LED Walls",
    "Murs LED ou LCD calibrés pour halls, centres de supervision et retail, avec gestion de contenu centralisée et maintenance préventive.",
    "Choix du pitch, calibration colorimétrique et alimentation redondante pour un fonctionnement 24/7. Maintenance préventive incluse, plateforme de gestion de contenu intégrée.",
    stockPhoto("photo-1517457373958-b7bdd4587205"),
    "Mur d'écrans LED dans un hall d'accueil professionnel",
    "Murs d'écrans LED : un affichage grand format qui capte l'attention",
  ),
];

/* ──────── Divers ──────── */

const DIVERS: SolutionsServiceDefinition[] = [
  svc(
    "systeme-dappel-durgence",
    "Système d'appel d'urgence",
    "Boutons-poussoirs, tirettes et signalisation conformes aux normes ERP, intégrés à votre supervision pour une remontée d'alertes centralisée.",
    "Alerte instantanée avec localisation précise, corrélée à une image vidéo via l'intégration GTB + vidéosurveillance pour identifier la nature de l'urgence sans ambiguïté.",
    stockPhoto("photo-1576091160399-112ba8d25d1d"),
    "Bouton d'appel d'urgence dans un couloir d'hôpital",
    "Appel d'urgence : des alertes fiables pour protéger vos occupants",
  ),
  svc(
    "interphonie-eas",
    "Interphonie EAS",
    "Interphonie de sécurité et évacuation sonore (EAS/SSS) conformes à la réglementation incendie, avec études acoustiques et certification.",
    "Un seul système pour interphonie et évacuation avec étude acoustique et zonage par secteur. Installation certifiée et documentée pour les commissions de sécurité.",
    stockPhoto("photo-1558002038-1055907df827"),
    "Poste d'interphonie et haut-parleur d'évacuation en bâtiment",
    "Interphonie EAS : évacuation sonore conforme et interphonie sans faille",
  ),
  fromCarousel("gestion-des-visiteurs",
    "Badges intégrés au contrôle d'accès, traçabilité complète de chaque visite et conformité RGPD avec purge automatique des données.",
    "Gestion des visiteurs : un accueil fluide, traçable et professionnel",
  ),
  svc(
    "systeme-dappel-malade",
    "Système d'appel malade",
    "Boutons d'appel, afficheurs couloir et médaillons IP/radio pour une couverture complète, même dans les bâtiments anciens.",
    "Escalade automatique si pas de prise en charge dans le délai défini. Technologies IP et radio pour couvrir même les bâtiments anciens, avec intégration aux logiciels hospitaliers.",
    stockPhoto("photo-1519494026892-80bbd2d6fd0d"),
    "Bouton d'appel patient et afficheur dans une chambre d'hôpital",
    "Appel malade : chaque appel patient reçu et traité sans délai",
  ),
  svc(
    "systeme-de-demence",
    "Système de démence",
    "Bracelets, détecteurs de passage et verrouillage conditionnel des issues pour protéger les résidents vulnérables en toute discrétion.",
    "Dès qu'un résident s'approche d'une sortie, la porte se verrouille et le personnel est alerté sans alarme anxiogène. Toutes les alertes centralisées sur une seule interface.",
    stockPhoto("photo-1576765608535-5f04d1e3f289"),
    "Bracelet de géolocalisation et système anti-errance en EHPAD",
    "Système anti-errance : protégez vos résidents en toute discrétion",
  ),
  svc(
    "systeme-de-ronde",
    "Système de ronde",
    "Points NFC/RFID, application mobile et rapports automatisés pour une traçabilité complète des rondes et alertes de non-passage.",
    "Chaque passage horodaté et géolocalisé, avec alerte immédiate en cas de retard. Rapports générés automatiquement et disponibles en temps réel pour vos clients et auditeurs.",
    stockPhoto("photo-1489515217757-5fd1be406fef"),
    "Agent de sécurité effectuant une ronde avec badge NFC",
    "Système de ronde : chaque passage tracé, prouvé et auditable",
  ),
  fromCarousel("gestion-de-stationnement",
    "Chaque véhicule identifié, orienté et tracé jusqu'à sa sortie. Intégration au contrôle d'accès du bâtiment pour gérer parkings réservés, visiteurs et livraisons dans un seul système.",
    "Gestion de stationnement : fluidifiez vos parkings et maîtrisez les accès",
  ),
  fromCarousel("detection-de-vapotage",
    "Capteurs invisibles qui détectent vapotage et THC sans caméra ni micro. Double usage : sécurité et qualité de l'air (CO2, COV) dans un même dispositif.",
    "Détection de vapotage : identifiez les infractions en toute discrétion",
  ),
];


// ── Titres dynamiques par service ──
const SERVICE_COPY: { slug: string; whyHeading: string; sectorsHeading: string; sectorsSubtitle: string }[] = [
  { slug: "surete-de-chantier", whyHeading: "Pourquoi sécuriser vos chantiers avec Ovedex ?", sectorsHeading: "Des chantiers sécurisés dans tous les secteurs", sectorsSubtitle: "BTP, travaux publics, promotion immobilière — nous protégeons vos sites de la fondation à la livraison." },
  { slug: "detection-perimetrique", whyHeading: "Pourquoi choisir notre détection périmétrique ?", sectorsHeading: "Des périmètres sécurisés pour chaque industrie", sectorsSubtitle: "Sites industriels, logistiques, data centers — une détection adaptée à vos contraintes terrain." },
  { slug: "boitiers-a-clefs", whyHeading: "Pourquoi digitaliser la gestion de vos clés ?", sectorsHeading: "La gestion de clés connectée pour chaque secteur", sectorsSubtitle: "Hôtellerie, résidences, régies immobilières, sites multi-occupants — la traçabilité sans effort." },
  { slug: "portail-portique-barriere", whyHeading: "Pourquoi automatiser vos points d'accès ?", sectorsHeading: "Des accès automatisés pour chaque environnement", sectorsSubtitle: "Tertiaire, industrie, logistique, santé — un filtrage adapté à vos flux quotidiens." },
  { slug: "videophonie", whyHeading: "Pourquoi passer à la vidéophonie IP ?", sectorsHeading: "La vidéophonie adaptée à chaque type de bâtiment", sectorsSubtitle: "Résidences, bureaux, sites tertiaires — un contrôle visuel fiable à chaque entrée." },
  { slug: "videosurveillance", whyHeading: "Pourquoi choisir notre vidéosurveillance ?", sectorsHeading: "La vidéosurveillance adaptée à votre secteur", sectorsSubtitle: "Industrie, retail, santé, tertiaire — des systèmes dimensionnés pour vos enjeux spécifiques." },
  { slug: "supervision-unifiee", whyHeading: "Pourquoi unifier votre supervision ?", sectorsHeading: "Une supervision centralisée pour chaque secteur", sectorsSubtitle: "Multi-sites, campus, centres de supervision — une vue d'ensemble adaptée à votre échelle." },
  { slug: "controle-dacces", whyHeading: "Pourquoi nous confier votre contrôle d'accès ?", sectorsHeading: "Le contrôle d'accès adapté à votre secteur", sectorsSubtitle: "Tertiaire, santé, industrie, hôtellerie — des architectures sur mesure pour chaque niveau de sensibilité." },
  { slug: "alarme-anti-intrusion", whyHeading: "Pourquoi nous confier votre alarme intrusion ?", sectorsHeading: "La détection d'intrusion pour chaque environnement", sectorsSubtitle: "Bureaux, entrepôts, commerces, sites sensibles — une protection dimensionnée pour vos risques." },
  { slug: "inpt", whyHeading: "Pourquoi nous confier votre infrastructure ?", sectorsHeading: "Des infrastructures numériques pour chaque secteur", sectorsSubtitle: "Bâtiments neufs ou rénovation — câblage structuré adapté à vos usages métier." },
  { slug: "wifi", whyHeading: "Pourquoi nous confier votre réseau wifi ?", sectorsHeading: "Le wifi professionnel pour chaque environnement", sectorsSubtitle: "Open spaces, hôpitaux, hôtels, sites événementiels — une couverture adaptée à votre densité." },
  { slug: "antenne-gsm-4g-5g", whyHeading: "Pourquoi nous confier votre couverture mobile ?", sectorsHeading: "La couverture mobile rétablie dans chaque bâtiment", sectorsSubtitle: "Tours de bureaux, centres commerciaux, hôpitaux, parkings — signal restauré même en sous-sol." },
  { slug: "reseau-vdi", whyHeading: "Pourquoi nous confier votre réseau VDI ?", sectorsHeading: "Un câblage structuré pour chaque type de bâtiment", sectorsSubtitle: "Neuf ou rénovation, tertiaire ou industriel — une infrastructure qui dure." },
  { slug: "audit-de-cablage", whyHeading: "Pourquoi auditer votre câblage ?", sectorsHeading: "L'audit câblage pour chaque situation", sectorsSubtitle: "Avant une extension, un déménagement ou une migration — le diagnostic qui évite les mauvaises surprises." },
  { slug: "fibre-optique", whyHeading: "Pourquoi nous confier vos liaisons fibre ?", sectorsHeading: "La fibre optique pour chaque configuration", sectorsSubtitle: "Inter-bâtiments, campus, datacenters — des liaisons adaptées à vos distances et débits." },
  { slug: "reservation-salle-de-reunion", whyHeading: "Pourquoi digitaliser vos réservations de salles ?", sectorsHeading: "La réservation de salles pour chaque organisation", sectorsSubtitle: "Sièges sociaux, coworkings, campus — optimisez vos espaces quel que soit votre modèle." },
  { slug: "musique-dambiance", whyHeading: "Pourquoi professionnaliser votre ambiance sonore ?", sectorsHeading: "L'ambiance sonore adaptée à chaque activité", sectorsSubtitle: "Retail, hôtellerie, restauration, espaces de travail — le son qui sert votre image." },
  { slug: "ecrans-interactifs", whyHeading: "Pourquoi passer aux écrans interactifs ?", sectorsHeading: "Les écrans interactifs pour chaque usage", sectorsSubtitle: "Réunions, formations, brainstorming — une collaboration adaptée à vos équipes." },
  { slug: "affichage-dynamique", whyHeading: "Pourquoi passer à l'affichage dynamique ?", sectorsHeading: "L'affichage dynamique pour chaque secteur", sectorsSubtitle: "Accueil, retail, communication interne — le bon message au bon endroit, au bon moment." },
  { slug: "sonorisation-despaces", whyHeading: "Pourquoi nous confier votre sonorisation ?", sectorsHeading: "La sonorisation adaptée à chaque espace", sectorsSubtitle: "Auditoriums, salles de conférence, espaces ouverts — une acoustique sur mesure." },
  { slug: "installation-de-videoprojecteurs-et-ecrans-de-projection", whyHeading: "Pourquoi nous confier votre vidéoprojection ?", sectorsHeading: "La vidéoprojection pour chaque salle", sectorsSubtitle: "Amphithéâtres, salles de formation, salles de réunion — l'image adaptée à votre configuration." },
  { slug: "integration-de-salles-de-reunion-connectees", whyHeading: "Pourquoi nous confier vos salles connectées ?", sectorsHeading: "Des salles connectées pour chaque organisation", sectorsSubtitle: "PME, grands groupes, coworkings — des réunions hybrides qui fonctionnent du premier coup." },
  { slug: "systeme-de-visioconference", whyHeading: "Pourquoi nous confier votre visioconférence ?", sectorsHeading: "La visioconférence adaptée à chaque espace", sectorsSubtitle: "Huddle rooms, salles de direction, amphithéâtres — une qualité pro dans chaque configuration." },
  { slug: "mur-decrans-led-walls", whyHeading: "Pourquoi nous confier votre mur d'écrans ?", sectorsHeading: "Les murs d'écrans pour chaque usage", sectorsSubtitle: "Halls d'accueil, centres de contrôle, retail, événementiel — l'impact visuel adapté à votre espace." },
  { slug: "systeme-dappel-durgence", whyHeading: "Pourquoi nous confier vos appels d'urgence ?", sectorsHeading: "L'appel d'urgence pour chaque établissement", sectorsSubtitle: "Hôpitaux, EHPAD, écoles, centres commerciaux — des dispositifs conformes à votre type d'ERP." },
  { slug: "interphonie-eas", whyHeading: "Pourquoi nous confier votre interphonie EAS ?", sectorsHeading: "L'évacuation sonore pour chaque bâtiment", sectorsSubtitle: "ERP, IGH, sites industriels — une installation conforme et intelligible dans chaque zone." },
  { slug: "gestion-des-visiteurs", whyHeading: "Pourquoi digitaliser l'accueil de vos visiteurs ?", sectorsHeading: "La gestion des visiteurs pour chaque site", sectorsSubtitle: "Sièges sociaux, sites industriels, hôpitaux — un accueil adapté à votre niveau de sûreté." },
  { slug: "systeme-dappel-malade", whyHeading: "Pourquoi nous confier vos appels patients ?", sectorsHeading: "L'appel malade pour chaque établissement de soins", sectorsSubtitle: "Hôpitaux, EHPAD, cliniques — une chaîne d'alerte adaptée à vos parcours de soins." },
  { slug: "systeme-de-demence", whyHeading: "Pourquoi nous confier votre système anti-errance ?", sectorsHeading: "Le système anti-errance pour chaque structure", sectorsSubtitle: "EHPAD, unités Alzheimer, services de gériatrie — sécurité et dignité préservées." },
  { slug: "systeme-de-ronde", whyHeading: "Pourquoi digitaliser vos rondes de sécurité ?", sectorsHeading: "Le système de ronde pour chaque type de site", sectorsSubtitle: "Sites industriels, tertiaire, résidentiel — une traçabilité adaptée à vos contrats." },
  { slug: "gestion-de-stationnement", whyHeading: "Pourquoi automatiser la gestion de vos parkings ?", sectorsHeading: "La gestion de parking pour chaque site", sectorsSubtitle: "Bureaux, centres commerciaux, hôpitaux, sites industriels — des flux adaptés à votre fréquentation." },
  { slug: "detection-de-vapotage", whyHeading: "Pourquoi installer des capteurs de vapotage ?", sectorsHeading: "La détection de vapotage pour chaque environnement", sectorsSubtitle: "Établissements scolaires, hôtels, espaces de travail — une solution discrète et respectueuse." },
];
for (const c of SERVICE_COPY) {
  const s = SURETE.concat(INFRA, AUDIO, DIVERS).find((x) => x.slug === c.slug);
  if (s) { s.whyHeading = c.whyHeading; s.sectorsHeading = c.sectorsHeading; s.sectorsSubtitle = c.sectorsSubtitle; }
}

const ALL: SolutionsServiceDefinition[] = [...SURETE, ...INFRA, ...AUDIO, ...DIVERS];

export function getSolutionsServiceBySlug(slug: string): SolutionsServiceDefinition | undefined {
  return ALL.find((s) => s.slug === slug);
}

export function getAllSolutionsServiceSlugs(): string[] {
  return ALL.map((s) => s.slug);
}
