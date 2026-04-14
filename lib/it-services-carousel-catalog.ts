/**
 * Carrousel services pôle IT — image distincte par prestation (même logique que Digital / Solutions).
 */

function stockPhoto(id: string): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;
}

const IMG = {
  infogerance: stockPhoto("photo-1558494949-ef010cbdcc31"),
  support: stockPhoto("photo-1522071820081-009f0129c71c"),
  supervision: stockPhoto("photo-1551288049-bebda4e38f71"),
  parc: stockPhoto("photo-1496181133206-80ce9b88a853"),
  audit: stockPhoto("photo-1563986768609-322da13575f3"),
  mfa: stockPhoto("photo-1633265486064-086b219458ec"),
  backup: stockPhoto("photo-1451187580459-43490279c0fa"),
  emailSec: stockPhoto("photo-1614064641938-3bbcee529721"),
  sensibilisation: stockPhoto("photo-1523240795612-9a054b0db644"),
  cloud: stockPhoto("photo-1544197150-b99a580bb7a8"),
  migration: stockPhoto("photo-1639762681485-074b7f938ba0"),
  reseau: stockPhoto("photo-1558618666-fcd25c85cd64"),
} as const;

export interface ItCarouselServiceDefinition {
  slug: string;
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const IT_CAROUSEL_SERVICES: readonly ItCarouselServiceDefinition[] = [
  {
    slug: "infogerance-proactive",
    href: "/services-it/infogerance-proactive",
    title: "Infogérance proactive",
    description: "Monitoring continu, correctifs planifiés et reporting clair pour une infrastructure stable sans mobiliser vos équipes internes.",
    imageSrc: IMG.infogerance,
    imageAlt: "Baie serveurs et équipements supervisés en salle technique",
  },
  {
    slug: "support-utilisateur-entreprise",
    href: "/services-it/support-utilisateur-entreprise",
    title: "Support utilisateur",
    description: "Un canal unique pour vos collaborateurs, des SLA adaptés par profil et une base de connaissances pour réduire les demandes récurrentes.",
    imageSrc: IMG.support,
    imageAlt: "Équipe support collaborant autour d’écrans et de tickets",
  },
  {
    slug: "supervision-si",
    href: "/services-it/supervision-si",
    title: "Supervision SI",
    description: "Corrélation d’événements, alertes intelligentes et escalade maîtrisée alignées sur vos applications métiers, pas seulement l’infrastructure.",
    imageSrc: IMG.supervision,
    imageAlt: "Tableaux de supervision et indicateurs sur écrans",
  },
  {
    slug: "audit-cybersecurite",
    href: "/services-it/audit-cybersecurite",
    title: "Audit cybersécurité",
    description: "Revue de configuration, scénarios d’attaque documentés et plan de remédiation priorisé dans un budget réaliste.",
    imageSrc: IMG.audit,
    imageAlt: "Analyse de sécurité informatique et conformité",
  },
  {
    slug: "mfa-authentification-forte",
    href: "/services-it/mfa-authentification-forte",
    title: "MFA & authentification forte",
    description: "FIDO2, OTP ou push intégrés à vos outils métier, avec une expérience utilisateur pensée pour maximiser l’adoption.",
    imageSrc: IMG.mfa,
    imageAlt: "Authentification sécurisée et accès aux applications",
  },
  {
    slug: "sauvegarde-plan-reprise",
    href: "/services-it/sauvegarde-plan-reprise",
    title: "Sauvegarde & PRA / PCI",
    description: "Sauvegardes chiffrées, rétention conforme et exercices de restauration planifiés pour valider vos RTO/RPO en conditions réelles.",
    imageSrc: IMG.backup,
    imageAlt: "Infrastructure de sauvegarde et continuité d’activité",
  },
  {
    slug: "cloud-public-prive-hybrid",
    href: "/services-it/cloud-public-prive-hybrid",
    title: "Cloud public, privé & hybride",
    description: "IaaS, PaaS ou SaaS dimensionné selon vos contraintes de souveraineté, de coûts et de performance, avec gouvernance intégrée.",
    imageSrc: IMG.cloud,
    imageAlt: "Schéma cloud et datacenters",
  },
  {
    slug: "migration-cloud-microsoft-365",
    href: "/services-it/migration-cloud-microsoft-365",
    title: "Migration Microsoft 365",
    description: "Migration des boîtes, identités et données avec conduite du changement pour limiter l'impact sur la productivité de vos équipes.",
    imageSrc: IMG.migration,
    imageAlt: "Migration vers le cloud Microsoft et postes de travail",
  },
  {
    slug: "reseau-entreprise-wan-lan",
    href: "/services-it/reseau-entreprise-wan-lan",
    title: "Réseau d’entreprise (WAN / LAN)",
    description: "Segmentation Zero Trust, QoS voix/vidéo et interconnexion multi-sites documentée pour un réseau fiable et évolutif.",
    imageSrc: IMG.reseau,
    imageAlt: "Ingénieurs réseau et équipements d’interconnexion",
  },
  {
    slug: "vpn-acces-distance",
    href: "/services-it/vpn-acces-distance",
    title: "VPN & accès distant",
    description: "Configurations durcies, MFA systématique et journalisation complète pour des accès distants conformes à vos exigences d'audit.",
    imageSrc: IMG.emailSec,
    imageAlt: "Connexion sécurisée à distance au système d’information",
  },
  {
    slug: "gestion-parc-postes",
    href: "/services-it/gestion-parc-postes",
    title: "Gestion de parc postes",
    description: "Déploiement silencieux, reporting de conformité et sécurisation des postes de travail sans freiner vos collaborateurs.",
    imageSrc: IMG.parc,
    imageAlt: "Parc d’ordinateurs professionnels géré en entreprise",
  },
  {
    slug: "sensibilisation-collaborateurs",
    href: "/services-it/sensibilisation-collaborateurs",
    title: "Sensibilisation collaborateurs",
    description: "Campagnes progressives, scoring individuel et modules courts adaptés aux métiers pour réduire durablement le risque humain.",
    imageSrc: IMG.sensibilisation,
    imageAlt: "Formation et sensibilisation cybersécurité en équipe",
  },
] as const;

const CARDS_PER_SLIDE = 3;

export function buildItServiceSlides(): { label: string; cards: ItCarouselServiceDefinition[] }[] {
  const list = [...IT_CAROUSEL_SERVICES];
  const totalSlides = Math.ceil(list.length / CARDS_PER_SLIDE);
  const slides: { label: string; cards: ItCarouselServiceDefinition[] }[] = [];
  for (let i = 0; i < list.length; i += CARDS_PER_SLIDE) {
    slides.push({
      label: `${slides.length + 1} sur ${totalSlides}`,
      cards: list.slice(i, i + CARDS_PER_SLIDE),
    });
  }
  return slides;
}
