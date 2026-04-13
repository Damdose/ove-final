import type { PoleId } from "@/lib/brand-design-system";

export type BlogPost = {
  slug: string;
  title: string;
  pole: PoleId;
  excerpt: string;
  /** Meta description dédiée (≈150–160 car.) ; sinon l’extrait est utilisé. */
  seoDescription?: string;
  /** Mots-clés pour meta keywords + JSON-LD (pôles concernés uniquement). */
  keywords?: string[];
  readMinutes: string;
  /** Affichage court type « 12 mars 2026 » */
  publishedAtLabel: string;
  /** ISO 8601 (date seule) pour <time datetime> */
  publishedAtIso: string;
  imageSrc: string;
  imageAlt: string;
  body: string[];
};

/**
 * Articles éditoriaux Ovedex (contenu original).
 * Visuels : Unsplash (licence Unsplash), hotlink autorisé.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cybersecurite-entreprise-2026",
    title: "Cybersécurité en entreprise : les priorités pour 2026",
    pole: "it",
    excerpt:
      "Cartographie des risques, MFA, sauvegardes testées et culture sécurité : le socle à renforcer avant d’investir dans les outils.",
    readMinutes: "7 min",
    publishedAtLabel: "8 janvier 2026",
    publishedAtIso: "2026-01-08",
    imageSrc:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professionnelle travaillant sur la sécurité informatique",
    body: [
      "Les équipes IT voient la surface d’attaque s’élargir avec le télétravail, le SaaS et l’IA générative : une politique de mots de passe unique ne suffit plus. La priorité est une gouvernance claire (qui décide, qui alerte, qui restaure) et des contrôles mesurables.",
      "La double authentification (MFA) sur les comptes sensibles, la segmentation réseau et la journalisation centralisée restent les trois leviers au meilleur rapport effort / réduction de risque pour une PME ou une ETI.",
      "Enfin, les sauvegardes ne valent que si elles sont testées : un plan de reprise annuel, chronométré, évite les mauvaises surprises le jour où un ransomware frappe.",
    ],
  },
  {
    slug: "infogerance-sla-comment-choisir",
    title: "Infogérance : comment lire un SLA et choisir son prestataire",
    pole: "it",
    excerpt:
      "Disponibilité, temps d’intervention, périmètre d’astreinte et exclusions : les clauses à comparer ligne à ligne avant de signer.",
    readMinutes: "6 min",
    publishedAtLabel: "22 janvier 2026",
    publishedAtIso: "2026-01-22",
    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Baie serveurs et câblage réseau en datacenter",
    body: [
      "Le SLA (accord de niveau de service) traduit l’engagement du prestataire en indicateurs chiffrés : taux de disponibilité cible, délais de prise en charge (TTR) et de résolution (TTR max), souvent différenciés selon la criticité des incidents.",
      "Méfiez-vous des SLA « 99,9 % » sans fenêtre de maintenance définie ni précision sur ce qui est mesuré (uniquement le lien internet ou bien l’ensemble des services métiers hébergés ?).",
      "Un bon contrat précise aussi les canaux d’escalade, les rapports mensuels fournis et les pénalités ou crédits en cas de manquement répété — c’est le seul moyen d’aligner les intérêts sur la durée.",
    ],
  },
  {
    slug: "refonte-site-b2b-cles-reussite",
    title: "Refonte d’un site B2B : cinq clés pour ne pas rater l’exercice",
    pole: "digital",
    excerpt:
      "Objectifs métiers, contenus, performance Web et intégration CRM : la checklist avant le premier maquettage.",
    seoDescription:
      "Refonte site B2B : fixer les objectifs métiers, auditer les contenus et le SEO, viser les Core Web Vitals et préparer l’intégration CRM avant de lancer les maquettes.",
    keywords: [
      "refonte site B2B",
      "UX",
      "Core Web Vitals",
      "migration SEO",
      "intégration CRM",
      "performance web",
      "stratégie contenu",
    ],
    readMinutes: "8 min",
    publishedAtLabel: "5 février 2026",
    publishedAtIso: "2026-02-05",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Écran d’ordinateur affichant graphiques et analytics web",
    body: [
      "Une refonte ne commence pas par la charte graphique mais par les objectifs : génération de leads, recrutement, support client self-service ou valorisation d’offres complexes ? Chaque choix UX en découle.",
      "Les contenus existants doivent être audités (SEO, doublons, pages zombies) avant migration : c’est souvent là que l’on gagne le plus en clarté et en positionnement.",
      "Côté technique, viser les Core Web Vitals et une structure de données propre facilite la mesure marketing et l’intégration avec votre CRM ou votre plateforme d’emailing.",
    ],
  },
  {
    slug: "videosurveillance-rgpd-entreprise",
    title: "Vidéosurveillance en entreprise et RGPD : rappel des bases",
    pole: "solutions",
    excerpt:
      "Finalité, durée de conservation, information des personnes et accès aux enregistrements : ce que dit le cadre français.",
    readMinutes: "6 min",
    publishedAtLabel: "18 février 2026",
    publishedAtIso: "2026-02-18",
    imageSrc:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Caméra de surveillance moderne sur façade de bâtiment",
    body: [
      "La vidéosurveillance sur le lieu de travail doit répondre à une finalité précise (sécurité des biens et des personnes, contrôle d’accès) et être proportionnée : on évite les angles qui filment des espaces de détente ou des circulations sans lien avec le risque.",
      "Les personnes filmées doivent être informées par affichage lisible ; les enregistrements sont conservés pour une durée limitée, en principe trente jours sauf justification particulière.",
      "Les accès aux images doivent être tracés et réservés aux personnes habilitées ; en cas d’incident, la coopération avec l’autorité compétente s’appuie sur des procédures préalablement documentées.",
    ],
  },
  {
    slug: "reseau-lan-wifi-entreprise-fiabilite",
    title: "Réseau LAN et Wi-Fi en entreprise : viser la fiabilité avant la vitesse affichée",
    pole: "solutions",
    excerpt:
      "Qualité de câblage, dimensionnement des points d’accès et supervision proactive : les leviers souvent négligés.",
    readMinutes: "5 min",
    publishedAtLabel: "3 mars 2026",
    publishedAtIso: "2026-03-03",
    imageSrc:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Serveurs rackés dans une salle technique",
    body: [
      "Un débit Wi-Fi annoncé sur la boîte du routeur ne dit rien de l’expérience réelle en open space : la densité d’utilisateurs, les cloisons et les interférences Bluetooth ou micro-ondes dégradent fortement le signal.",
      "Un audit radio et un plan de positionnement des AP, parfois complété d’Ethernet filaire pour les postes critiques, restent la base d’un réseau stable.",
      "La supervision (SNMP, sondes, alertes) permet d’anticiper la saturation des liens et les pannes matérielles avant qu’elles n’impactent la production ou la VoIP.",
    ],
  },
  {
    slug: "mesurer-roi-campagnes-digitales-b2b",
    title: "Mesurer le ROI des campagnes digitales B2B sans se perdre dans les métriques",
    pole: "digital",
    excerpt:
      "Du clic à la signature : aligner Google Analytics, le CRM et la marge pour des décisions d’budget plus sereines.",
    seoDescription:
      "ROI marketing B2B : indicateurs utiles (CPL, conversion, cycle de vente), attribution multi-touch pragmatique et alignement Google Analytics / CRM pour arbitrer le budget digital.",
    keywords: [
      "ROI marketing B2B",
      "Google Analytics",
      "CRM",
      "attribution marketing",
      "campagnes digitales",
      "lead qualifié",
      "UTM",
      "tableau de bord marketing",
    ],
    readMinutes: "7 min",
    publishedAtLabel: "20 mars 2026",
    publishedAtIso: "2026-03-20",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tableaux de bord et indicateurs sur écran",
    body: [
      "Les équipes marketing accumulent les tableaux de bord ; la difficulté est d’isoler les indicateurs qui prédisent le chiffre d’affaires : coût par lead qualifié, taux de conversion étape par étape, cycle de vente moyen.",
      "L’attribution multi-touch reste un compromis : l’important est de figer une règle simple, comprise par la direction commerciale, plutôt que de viser la perfection statistique.",
      "En reliant les UTM, les formulaires et les étapes CRM, on peut enfin arbitrer entre contenu organique, paid search et événements terrain avec des chiffres comparables.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getDigitalBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.pole === "digital");
}

export function getDigitalPostSlugs(): string[] {
  return getDigitalBlogPosts().map((p) => p.slug);
}
