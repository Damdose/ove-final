/**
 * Pages service pôle IT — contenu pour `/services-it/[slug]`.
 */

import { IT_CAROUSEL_SERVICES } from "./it-services-carousel-catalog";

export interface ItServicePageDefinition {
  slug: string;
  title: string;
  /** Proposition de valeur affichée en H1 sur la page service (fallback: title). */
  headline?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  body: string[];
}

function fromCarousel(slug: string, body: string[], headline?: string): ItServicePageDefinition {
  const c = IT_CAROUSEL_SERVICES.find((s) => s.slug === slug);
  if (!c) throw new Error(`Missing IT carousel service: ${slug}`);
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

const FROM_CAROUSEL: ItServicePageDefinition[] = [
  fromCarousel("infogerance-proactive", [
    "Nous monitorons vos environnements critiques, appliquons les correctifs dans des fenêtres validées et tenons un reporting clair pour la direction et les métiers.",
    "Les indicateurs d’incidents, de disponibilité et de capacité sont partagés régulièrement pour prioriser les investissements utiles.",
  ], "Votre SI surveillé et maintenu, sans mobiliser vos équipes"),
  fromCarousel("support-utilisateur-entreprise", [
    "Un canal unique pour vos collaborateurs, des SLA adaptés aux profils (VIP, terrain, production) et une base de connaissances alimentée pour réduire les demandes récurrentes.",
  ], "Un support réactif pour que vos équipes restent productives"),
  fromCarousel("supervision-si", [
    "Cartographie des flux, corrélation d’événements et escalade maîtrisée : nous alignons la supervision sur vos applications métiers, pas seulement sur l’infrastructure.",
  ], "Détectez les incidents avant qu’ils n’impactent vos métiers"),
  fromCarousel("audit-cybersecurite", [
    "Revues de configuration, contrôle des comptes privilégiés et scénarios d’attaque documentés pour arbitrer les remédiations dans un budget réaliste.",
  ], "Identifiez vos failles avant qu’elles ne soient exploitées"),
  fromCarousel("mfa-authentification-forte", [
    "Nous intégrons les méthodes adaptées à vos usages (FIDO2, OTP, push) et simplifions l’expérience utilisateur pour maximiser l’adoption.",
  ], "Sécurisez vos accès sans complexifier le quotidien"),
  fromCarousel("sauvegarde-plan-reprise", [
    "Plans de sauvegarde chiffrés, rétention conforme et exercices de restauration planifiés pour valider vos RTO / RPO.",
  ], "Reprenez votre activité rapidement, quoi qu’il arrive"),
  fromCarousel("cloud-public-prive-hybrid", [
    "Choix IaaS / PaaS / SaaS, landing zones et politiques de gouvernance pour garder maîtrise et traçabilité sur vos charges.",
  ], "Le bon cloud, bien dimensionné, sous votre contrôle"),
  fromCarousel("migration-cloud-microsoft-365", [
    "Phases de cohabitation, migration des boîtes et des données, et conduite du changement pour limiter l’impact sur l’activité.",
  ], "Migrez vers Microsoft 365 sans perturber vos équipes"),
  fromCarousel("reseau-entreprise-wan-lan", [
    "Segmentation Zero Trust friendly, QoS pour la voix / vidéo et documentation à jour pour faciliter les évolutions.",
  ], "Un réseau d’entreprise fiable, segmenté et évolutif"),
  fromCarousel("vpn-acces-distance", [
    "Durcissement des configurations, MFA sur les accès distants et journalisation pour répondre aux exigences d’audit.",
  ], "Un accès distant sécurisé pour vos collaborateurs en mobilité"),
  fromCarousel("gestion-parc-postes", [
    "Cadrage des profils, déploiement silencieux et reporting de conformité pour sécuriser le poste de travail sans freiner les équipes.",
  ], "Des postes maîtrisés, déployés et sécurisés à grande échelle"),
  fromCarousel("sensibilisation-collaborateurs", [
    "Campagnes progressives, scoring et modules courts adaptés aux métiers pour réduire le risque humain durablement.",
  ], "Faites de vos collaborateurs votre première ligne de défense"),
];

function navOnly(
  slug: string,
  title: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  body: string[],
  headline?: string,
): ItServicePageDefinition {
  return { slug, title, headline, description, imageSrc, imageAlt, body };
}

const NAV_EXTRA: ItServicePageDefinition[] = [
  navOnly(
    "astreinte-it",
    "Astreinte IT",
    "Procédures d'escalade rodées et communication transparente pour ne jamais laisser un incident critique sans réponse, de jour comme de nuit.",
    IT_CAROUSEL_SERVICES[0].imageSrc,
    "Astreinte et intervention d’urgence IT",
    ["Gestion des astreintes, procédures d’escalade et communication transparente pendant les incidents majeurs."],
    "Une astreinte 24/7 pour ne jamais laisser un incident sans réponse",
  ),
  navOnly(
    "antispam-email-securise",
    "Antispam & messagerie sécurisée",
    "Réduction des menaces dès l'entrée, règles DLP et rapports de sécurité pour une messagerie professionnelle protégée du phishing et du spam.",
    IT_CAROUSEL_SERVICES[9].imageSrc,
    "Sécurisation de la messagerie professionnelle",
    ["Réduction des menaces à l’entrée, règles DLP simples et rapports pour les équipes sécurité."],
    "Protégez votre messagerie contre le phishing et le spam",
  ),
  navOnly(
    "pilotage-strategique-si",
    "Pilotage stratégique du SI",
    "Comités de pilotage, indicateurs de valeur et arbitrages documentés pour aligner votre SI sur les priorités métiers.",
    IT_CAROUSEL_SERVICES[2].imageSrc,
    "Pilotage stratégique du système d’information",
    ["Alignement IT / métier, indicateurs de valeur et arbitrages documentés."],
    "Alignez votre SI sur vos priorités métiers",
  ),
  navOnly(
    "cadrage-fonctionnel-projet",
    "Cadrage fonctionnel & projet",
    "Livrables de cadrage clairs — expression du besoin, backlog et analyse des risques — pour sécuriser budgets et délais avant le lancement.",
    IT_CAROUSEL_SERVICES[1].imageSrc,
    "Atelier de cadrage projet IT",
    ["Livrables de cadrage clairs pour sécuriser budgets et délais."],
    "Cadrez vos projets IT pour sécuriser budgets et délais",
  ),
  navOnly(
    "architecture-donnees-applicative",
    "Architecture données & applicative",
    "Vision cible, principes d’intégration et trajectoire de simplification pour prendre vos décisions IT en toute confiance.",
    IT_CAROUSEL_SERVICES[6].imageSrc,
    "Architecture applicative et données",
    ["Vision cible, principes d’intégration et trajectoire de simplification."],
    "Une architecture claire pour des décisions IT éclairées",
  ),
  navOnly(
    "recette-homologation",
    "Recette & homologation",
    "Scénarios de test traçables, jeux d’essai et validation rigoureuse pour réduire les régressions avant chaque mise en production.",
    IT_CAROUSEL_SERVICES[2].imageSrc,
    "Recette et validation avant production",
    ["Réduction des régressions grâce à des scénarios de test traçables."],
    "Validez avant de déployer, sans mauvaise surprise",
  ),
  navOnly(
    "documentation-runbooks",
    "Documentation & runbooks",
    "Base documentaire vivante et runbooks opérationnels pour que vos équipes exploitent le SI sereinement, même en cas de turnover.",
    IT_CAROUSEL_SERVICES[2].imageSrc,
    "Documentation d’exploitation IT",
    ["Base documentaire vivante et runbooks pour les opérations récurrentes."],
    "Des procédures claires pour une exploitation sereine au quotidien",
  ),
];

const ALL_DEFS: ItServicePageDefinition[] = [...FROM_CAROUSEL, ...NAV_EXTRA];

export function getItServiceBySlug(slug: string): ItServicePageDefinition | undefined {
  return ALL_DEFS.find((s) => s.slug === slug);
}

export function getAllItServiceSlugs(): string[] {
  return ALL_DEFS.map((s) => s.slug);
}
