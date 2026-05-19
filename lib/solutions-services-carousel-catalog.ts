/**
 * Visuels et découpe du carrousel « services Solutions » — une image distincte par prestation (comme Digital).
 */

function stockPhoto(id: string): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;
}

const IMG = {
  affichage: stockPhoto("photo-1550751827-4bd374c3f58b"),
  alarme: stockPhoto("photo-1555949963-aa79dcee981c"),
  antenne: stockPhoto("photo-1563986768609-322da13575f3"),
  cablage: stockPhoto("photo-1558494949-ef010cbdcc31"),
  cles: stockPhoto("photo-1589829085413-5664521e630f"),
  acces: stockPhoto("photo-1558618666-fcd25c85cd64"),
  vapotage: stockPhoto("photo-1582719478-6c0849487858"),
  perimetre: stockPhoto("photo-1489515217757-5fd1be406fef"),
  fibre: stockPhoto("photo-1544197150-b99a580bb7a8"),
  parking: stockPhoto("photo-1506521781263-d8422e82f27a"),
  visiteurs: stockPhoto("photo-1521791136064-7986c2920216"),
  inpt: stockPhoto("photo-1497366216548-37526070297c"),
} as const;

export interface SolutionsCarouselServiceDefinition {
  slug: string;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

/** Ordre aligné sur l’ancien carrousel (4 × 3 cartes). */
export const SOLUTIONS_CAROUSEL_SERVICES: readonly SolutionsCarouselServiceDefinition[] = [
  {
    slug: "affichage-dynamique",
    href: "/services-solution/affichage-dynamique",
    title: "Affichage dynamique",
    description: "Diffusez le bon contenu au bon endroit : écrans professionnels pilotés à distance, programmation horaire et flux dynamiques pour l’accueil, la com’ interne et le retail.",
    imageSrc: IMG.affichage,
    imageAlt: "Mur d’écrans et affichage digital en espace professionnel",
  },
  {
    slug: "alarme-anti-intrusion",
    href: "/services-solution/alarme-anti-intrusion",
    title: "Alarme anti-intrusion",
    description: "Détectez toute présence non autorisée et déclenchez une réaction immédiate : centrales certifiées, détecteurs, sirènes et télésurveillance avec levée de doute vidéo.",
    imageSrc: IMG.alarme,
    imageAlt: "Centrale et détecteurs d’alarme intrusion en bâtiment",
  },
  {
    slug: "antenne-gsm-4g-5g",
    href: "/services-solution/antenne-gsm-4g-5g",
    title: "Antenne GSM/4G/5G",
    description: "Plus de zones blanches : amplification et antennes distribuées (DAS) pour un signal 4G/5G stable dans vos sous-sols, parkings et bâtiments béton.",
    imageSrc: IMG.antenne,
    imageAlt: "Antennes relais et infrastructure radio sur site",
  },
  {
    slug: "audit-de-cablage",
    href: "/services-solution/audit-de-cablage",
    title: "Audit de câblage",
    description: "Identifiez les faiblesses de votre réseau avant qu’elles ne vous ralentissent : mesures certifiées, diagnostic complet et recommandations priorisées.",
    imageSrc: IMG.cablage,
    imageAlt: "Baie de brassage et câblage structuré en salle technique",
  },
  {
    slug: "boitiers-a-clefs",
    href: "/services-solution/boitiers-a-clefs",
    title: "Boîtiers à clefs",
    description: "Chaque clé tracée, chaque retrait horodaté : armoires connectées avec attribution par badge et alertes en cas d’anomalie pour une traçabilité totale.",
    imageSrc: IMG.cles,
    imageAlt: "Armoire sécurisée et gestion de clés en entreprise",
  },
  {
    slug: "controle-dacces",
    href: "/services-solution/controle-dacces",
    title: "Contrôle d’accès",
    description: "Maîtrisez qui entre, où et quand : badges, biométrie, serrures connectées et gestion centralisée des droits, intégrés à votre écosystème de sûreté.",
    imageSrc: IMG.acces,
    imageAlt: "Lecteur badge et contrôle d’accès à une porte sécurisée",
  },
  {
    slug: "detection-de-vapotage",
    href: "/services-solution/detection-de-vapotage",
    title: "Détection de vapotage",
    description: "Capteurs invisibles qui analysent la qualité de l’air et détectent le vapotage en temps réel — sanitaires, salles de classe, chambres d’hôtel.",
    imageSrc: IMG.vapotage,
    imageAlt: "Capteurs environnementaux et détection dans les locaux",
  },
  {
    slug: "detection-perimetrique",
    href: "/services-solution/detection-perimetrique",
    title: "Détection périmétrique",
    description: "Première ligne de défense : détectez les intrusions avant qu’elles n’atteignent vos bâtiments grâce à l’infrarouge, les câbles enterrés et la vidéo-analyse IA.",
    imageSrc: IMG.perimetre,
    imageAlt: "Clôture et détection périmétrique autour d’un site industriel",
  },
  {
    slug: "fibre-optique",
    href: "/services-solution/fibre-optique",
    title: "Fibre optique",
    description: "Interconnexions haut débit entre bâtiments et datacenters : déploiement, soudure certifiée et mesures réflectométriques pour des liaisons pérennes.",
    imageSrc: IMG.fibre,
    imageAlt: "Raccordement fibre et équipements réseau en baie",
  },
  {
    slug: "gestion-de-stationnement",
    href: "/services-solution/gestion-de-stationnement",
    title: "Gestion de stationnement",
    description: "Fluidifiez vos parkings : barrières automatiques, lecture de plaques, guidage à la place et supervision temps réel intégrés au contrôle d’accès du bâtiment.",
    imageSrc: IMG.parking,
    imageAlt: "Parking d’entreprise et gestion des accès véhicules",
  },
  {
    slug: "gestion-des-visiteurs",
    href: "/services-solution/gestion-des-visiteurs",
    title: "Gestion des visiteurs",
    description: "Accueil digitalisé en 30 secondes : pré-enregistrement, borne tactile, badge photo et notification automatique de l’hôte — traçable et conforme RGPD.",
    imageSrc: IMG.visiteurs,
    imageAlt: "Accueil et enregistrement des visiteurs en réception",
  },
  {
    slug: "inpt",
    href: "/services-solution/inpt",
    title: "INPT",
    description: "Le socle de tous vos usages numériques : câblage structuré, baies de brassage et locaux techniques conformes, dimensionnés pour aujourd’hui et demain.",
    imageSrc: IMG.inpt,
    imageAlt: "Bâtiment tertiaire et réseaux numériques intégrés",
  },
] as const;

const CARDS_PER_SLIDE = 3;

export function buildSolutionsServiceSlides(): {
  label: string;
  cards: SolutionsCarouselServiceDefinition[];
}[] {
  const list = [...SOLUTIONS_CAROUSEL_SERVICES];
  const totalSlides = Math.ceil(list.length / CARDS_PER_SLIDE);
  const slides: { label: string; cards: SolutionsCarouselServiceDefinition[] }[] = [];

  for (let i = 0; i < list.length; i += CARDS_PER_SLIDE) {
    const chunk = list.slice(i, i + CARDS_PER_SLIDE);
    slides.push({
      label: `${slides.length + 1} sur ${totalSlides}`,
      cards: chunk,
    });
  }

  return slides;
}
