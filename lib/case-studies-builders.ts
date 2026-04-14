import type { PoleId } from "@/lib/brand-design-system";
import type { CaseStudyItem } from "@/lib/case-study-item";

export type CaseStudyRecord = CaseStudyItem & { pole: PoleId };

export function hero(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&h=1067&q=82`;
}

type ShortSeed = { slug: string; title: string; category: string; excerpt: string; imageId: string };

export function itRecordFromShort(s: ShortSeed): CaseStudyRecord {
  return {
    pole: "it",
    slug: s.slug,
    href: `/case-studies/${s.slug}`,
    imageSrc: hero(s.imageId),
    category: s.category,
    title: s.title,
    excerpt: s.excerpt,
    intro: `Accompagnement IT pour « ${s.title} » : disponibilité, sécurité et pilotage au quotidien.`,
    paragraphs: [
      `Le contexte : ${s.excerpt} Les équipes métiers attendaient une meilleure visibilité sur les incidents et des délais d’intervention prévisibles.`,
      "Nous avons cadré le périmètre, harmonisé la supervision, sécurisé les accès administrateurs (MFA, moindre privilège) et documenté les procédures critiques.",
      "Des revues mensuelles avec la direction permettent d’ajuster la roadmap technique et d’anticiper les investissements (stockage, postes, licences).",
    ],
    outcomes: {
      title: "Résultats",
      items: [
        "Indicateurs consolidés (disponibilité, incidents, changements)",
        "Réduction des incidents récurrents sur le périmètre accompagné",
        "Feuille de route claire pour les prochains chantiers sécurité & cloud",
      ],
    },
  };
}

export function solutionsRecordFromShort(s: ShortSeed): CaseStudyRecord {
  return {
    pole: "solutions",
    slug: s.slug,
    href: `/case-studies/${s.slug}`,
    imageSrc: hero(s.imageId),
    category: s.category,
    title: s.title,
    excerpt: s.excerpt,
    intro: `Projet courants faibles et sûreté pour « ${s.title} » : conception, déploiement et mise en service.`,
    paragraphs: [
      `L’existant posait des limites : ${s.excerpt} Il fallait intégrer des équipements certifiés et garantir la supervision multi-sites.`,
      "Nous avons réalisé l’étude d’implantation, le câblage structuré associé, le paramétrage des centrales et la formation des équipes locales.",
      "Les livrables incluent schémas, dossiers d’exploitation et procédures d’astreinte ; une phase de recette a validé les scénarios critiques (intrusion, incendie, accès).",
    ],
    outcomes: {
      title: "Livrables & impacts",
      items: [
        "Installation conforme aux normes et aux attentes du client",
        "Supervision centralisée des équipements clés",
        "Réduction des fausses alertes grâce au réglage fin des détecteurs et scénarios",
      ],
    },
  };
}

export function digitalRecordFromShort(s: ShortSeed): CaseStudyRecord {
  return {
    pole: "digital",
    slug: s.slug,
    href: `/case-studies/${s.slug}`,
    imageSrc: hero(s.imageId),
    category: s.category,
    title: s.title,
    excerpt: s.excerpt,
    intro: `Projet digital pour « ${s.title} » : stratégie, production et mesure des performances.`,
    paragraphs: [
      `La problématique : ${s.excerpt} L’objectif était d’aligner l’expérience utilisateur, le contenu et les canaux d’acquisition.`,
      "Nous avons co-construit les parcours, accéléré les pages sensibles, posé un tracking fiable (consentement, événements) et branché les leads sur le CRM.",
      "Les équipes internes disposent de gabarits, d’une documentation courte et d’un tableau de bord pour suivre les campagnes et le SEO.",
    ],
    outcomes: {
      title: "Impacts",
      items: [
        "Parcours utilisateur clarifié et taux d’engagement en hausse sur les pages clés",
        "Mesure marketing exploitable (UTM, conversions, attribution simplifiée)",
        "Image de marque cohérente sur le site et les campagnes",
      ],
    },
  };
}
