/**
 * Données des 3 sections feature pour chaque service IT.
 */
import type { ServiceFeaturesData } from "@/components/shared/service-feature-sections";

export const IT_SERVICE_FEATURES: Record<string, ServiceFeaturesData> = {
  "infogerance-proactive": {
    heroStats: {
      tagline: "Votre SI supervisé, maintenu et piloté au quotidien",
      stats: [
        { value: "99,5%", label: "disponibilité cible" },
        { value: "<30 min", label: "prise en charge P1" },
        { value: "+200", label: "environnements supervisés" },
      ],
    },
    section1: {
      heading: "Supervision & maintien en condition opérationnelle",
      description:
        "Nous monitorons vos environnements critiques 24/7, appliquons les correctifs dans des fenêtres validées et tenons un reporting clair pour la direction et les métiers.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Supervision et infogérance proactive",
      stats: [
        { value: "99,5%", label: "disponibilité cible sur périmètres critiques" },
        { value: "< 30 min", label: "prise en charge des incidents P1" },
        { value: "+200", label: "environnements supervisés" },
      ],
    },
    section2: {
      heading: "Reporting & pilotage transparent",
      description:
        "Les indicateurs d'incidents, de disponibilité et de capacité sont partagés régulièrement pour prioriser les investissements utiles et anticiper les besoins d'évolution.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Tableaux de bord infogérance",
    },
    section3: {
      heading: "Un SI maîtrisé au quotidien",
      description:
        "De la gestion des tickets à la planification capacitaire, nous prenons en charge l'exploitation pour que vos équipes se concentrent sur leur métier.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion opérationnelle du SI",
      bullets: [
        { label: "Monitoring proactif et alertes temps réel" },
        { label: "Correctifs et mises à jour planifiés" },
        { label: "Comités de pilotage et reporting mensuel" },
      ],
    },
  },
  "support-utilisateur-entreprise": {
    heroStats: {
      tagline: "Un support IT réactif, adapté à vos collaborateurs",
      stats: [
        { value: "<15 min", label: "temps de première réponse" },
        { value: "85%", label: "résolution au premier contact" },
        { value: "24/7", label: "disponibilité selon contrat" },
      ],
    },
    section1: {
      heading: "Support utilisateur réactif et adapté",
      description:
        "Un canal unique pour vos collaborateurs, des SLA adaptés aux profils (VIP, terrain, production) et une base de connaissances alimentée pour réduire les demandes récurrentes.",
      imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Support utilisateur IT entreprise",
      stats: [
        { value: "< 15 min", label: "temps de première réponse moyen" },
        { value: "85%", label: "de résolution au premier contact" },
        { value: "24/7", label: "disponibilité selon contrat" },
      ],
    },
    section2: {
      heading: "Base de connaissances & self-service",
      description:
        "Nous alimentons une base documentaire qui réduit les sollicitations récurrentes. Vos utilisateurs trouvent les réponses aux questions fréquentes en autonomie.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Base de connaissances et self-service IT",
    },
    section3: {
      heading: "Pilotage qualité & amélioration continue",
      description:
        "Enquêtes de satisfaction, analyse des tendances et plans d'amélioration : le support s'améliore en continu grâce aux retours terrain.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Pilotage qualité du support IT",
      bullets: [
        { label: "Guichet unique multicanal (portail, email, téléphone)" },
        { label: "SLA différenciés par profil utilisateur" },
        { label: "Reporting satisfaction et délais de résolution" },
      ],
    },
  },
  "supervision-si": {
    heroStats: {
      tagline: "Une supervision alignée sur vos applications, pas seulement sur l'infra",
      stats: [
        { value: "100%", label: "des flux critiques cartographiés" },
        { value: "<5 min", label: "détection des incidents majeurs" },
        { value: "0", label: "angle mort" },
      ],
    },
    section1: {
      heading: "Supervision alignée sur vos applications métiers",
      description:
        "Cartographie des flux, corrélation d'événements et escalade maîtrisée : nous alignons la supervision sur vos applications métiers, pas seulement sur l'infrastructure.",
      imageSrc: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Supervision du système d'information",
      stats: [
        { value: "100%", label: "des flux critiques cartographiés" },
        { value: "< 5 min", label: "détection des incidents majeurs" },
        { value: "0", label: "angle mort grâce à la corrélation d'événements" },
      ],
    },
    section2: {
      heading: "Alertes intelligentes & escalade",
      description:
        "Les alertes sont filtrées, corrélées et qualifiées avant escalade. Vos équipes ne sont sollicitées que pour les actions qui nécessitent une intervention humaine.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion des alertes et escalade IT",
    },
    section3: {
      heading: "Tableaux de bord & capacité",
      description:
        "Dashboards temps réel, rapports de tendance et prévisions de capacité pour anticiper les besoins et piloter les investissements infrastructure.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Tableaux de bord supervision SI",
      bullets: [
        { label: "Cartographie applicative et dépendances" },
        { label: "Corrélation d'événements et réduction du bruit" },
        { label: "Prévisions de capacité et recommandations" },
      ],
    },
  },
  "audit-cybersecurite": {
    heroStats: {
      tagline: "Un audit cyber pragmatique pour arbitrer vos investissements sécurité",
      stats: [
        { value: "100%", label: "du périmètre critique couvert" },
        { value: "48h", label: "pour les quick wins" },
        { value: "ANSSI", label: "recommandations alignées" },
      ],
    },
    section1: {
      heading: "Audit cyber pragmatique et actionnable",
      description:
        "Revues de configuration, contrôle des comptes privilégiés et scénarios d'attaque documentés pour arbitrer les remédiations dans un budget réaliste.",
      imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Audit cybersécurité d'entreprise",
      stats: [
        { value: "100%", label: "du périmètre critique couvert" },
        { value: "48h", label: "pour les quick wins de remédiation" },
        { value: "ANSSI", label: "recommandations alignées sur les bonnes pratiques" },
      ],
    },
    section2: {
      heading: "Scénarios d'attaque & priorisation",
      description:
        "Nous simulons les chemins d'attaque réalistes et priorisons les remédiations par impact business. Vous savez exactement où investir en premier.",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Simulation d'attaques et priorisation sécurité",
    },
    section3: {
      heading: "Plan de remédiation structuré",
      description:
        "Un rapport clair avec des actions priorisées (criticité, effort, budget) et un accompagnement à la mise en œuvre si besoin.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Plan de remédiation cybersécurité",
      bullets: [
        { label: "Revues de configuration et comptes privilégiés" },
        { label: "Tests d'intrusion et scénarios d'attaque" },
        { label: "Plan de remédiation priorisé par impact" },
      ],
    },
  },
  "mfa-authentification-forte": {
    heroStats: {
      tagline: "Une authentification forte déployée sans friction pour vos utilisateurs",
      stats: [
        { value: "95%+", label: "taux d'adoption utilisateur" },
        { value: "-90%", label: "de risque de compromission" },
        { value: "FIDO2", label: "standards les plus sécurisés" },
      ],
    },
    section1: {
      heading: "MFA déployée sans friction utilisateur",
      description:
        "Nous intégrons les méthodes adaptées à vos usages (FIDO2, OTP, push) et simplifions l'expérience pour maximiser l'adoption dès le premier jour.",
      imageSrc: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Déploiement MFA et authentification forte",
      stats: [
        { value: "95%+", label: "taux d'adoption utilisateur" },
        { value: "-90%", label: "de risque de compromission de comptes" },
        { value: "FIDO2", label: "support des standards les plus sécurisés" },
      ],
    },
    section2: {
      heading: "Intégration & compatibilité",
      description:
        "Compatible avec Microsoft 365, VPN, applications métier et portails web. Nous configurons le MFA sur l'ensemble de vos points d'accès critiques.",
      imageSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration MFA multi-applications",
    },
    section3: {
      heading: "Conduite du changement",
      description:
        "Communication, tutoriels et accompagnement terrain : nous préparons vos collaborateurs pour une adoption fluide sans surcharge du support.",
      imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Accompagnement déploiement MFA",
      bullets: [
        { label: "FIDO2, OTP, push et biométrie selon vos usages" },
        { label: "Intégration M365, VPN et applications métier" },
        { label: "Conduite du changement et support au déploiement" },
      ],
    },
  },
  "sauvegarde-plan-reprise": {
    heroStats: {
      tagline: "Des sauvegardes fiables et un plan de reprise testé en conditions réelles",
      stats: [
        { value: "100%", label: "des sauvegardes chiffrées" },
        { value: "2x/an", label: "exercices de restauration" },
        { value: "RTO/RPO", label: "objectifs validés" },
      ],
    },
    section1: {
      heading: "Sauvegardes fiables, restauration testée",
      description:
        "Plans de sauvegarde chiffrés, rétention conforme et exercices de restauration planifiés pour valider vos RTO / RPO en conditions réelles.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sauvegarde et plan de reprise d'activité",
      stats: [
        { value: "100%", label: "des sauvegardes chiffrées et vérifiées" },
        { value: "2x/an", label: "exercices de restauration planifiés" },
        { value: "RTO/RPO", label: "objectifs validés contractuellement" },
      ],
    },
    section2: {
      heading: "PRA/PCI documenté et opérationnel",
      description:
        "Nous documentons les procédures de reprise, identifions les dépendances et formons vos équipes pour que le plan soit exécutable le jour J.",
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Documentation PRA et procédures de reprise",
    },
    section3: {
      heading: "Conformité & évolutivité",
      description:
        "Rétention alignée sur vos obligations réglementaires, architecture scalable et révisions périodiques pour couvrir l'évolution de votre SI.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Conformité et évolutivité des sauvegardes",
      bullets: [
        { label: "Sauvegardes chiffrées avec rétention conforme" },
        { label: "Exercices de restauration et validation RTO/RPO" },
        { label: "PRA/PCI documenté et maintenu à jour" },
      ],
    },
  },
  "cloud-public-prive-hybrid": {
    heroStats: {
      tagline: "Des architectures cloud maîtrisées, gouvernées et optimisées",
      stats: [
        { value: "-30%", label: "de coûts cloud après FinOps" },
        { value: "100%", label: "des workloads gouvernés" },
        { value: "Multi", label: "AWS, Azure, GCP et privé" },
      ],
    },
    section1: {
      heading: "Architectures cloud maîtrisées",
      description:
        "Choix IaaS / PaaS / SaaS, landing zones et politiques de gouvernance pour garder maîtrise et traçabilité sur vos charges, qu'elles soient publiques, privées ou hybrides.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Architecture cloud hybride entreprise",
      stats: [
        { value: "-30%", label: "de coûts cloud après optimisation FinOps" },
        { value: "100%", label: "des workloads documentés et gouvernés" },
        { value: "Multi", label: "compatibilité AWS, Azure, GCP et privé" },
      ],
    },
    section2: {
      heading: "Migration & landing zones",
      description:
        "Nous structurons les fondations cloud (réseau, identité, sécurité, logs) avant de migrer vos charges. Chaque migration suit un plan de rollback documenté.",
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Migration cloud et landing zones",
    },
    section3: {
      heading: "Gouvernance & FinOps",
      description:
        "Politiques de tags, alertes budgétaires et revues mensuelles : vous gardez la main sur les coûts et la conformité de vos environnements cloud.",
      imageSrc: "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gouvernance cloud et FinOps",
      bullets: [
        { label: "Landing zones sécurisées et gouvernées" },
        { label: "Migrations planifiées avec rollback documenté" },
        { label: "FinOps : optimisation continue des coûts" },
      ],
    },
  },
  "migration-cloud-microsoft-365": {
    heroStats: {
      tagline: "Migration Microsoft 365 sans interruption, avec conduite du changement",
      stats: [
        { value: "0", label: "interruption de service" },
        { value: "100%", label: "des données migrées" },
        { value: "1 sem", label: "adoption par les utilisateurs" },
      ],
    },
    section1: {
      heading: "Migration Microsoft 365 sans interruption",
      description:
        "Phases de cohabitation, migration des boîtes et des données, et conduite du changement pour limiter l'impact sur l'activité de vos collaborateurs.",
      imageSrc: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Migration Microsoft 365 entreprise",
      stats: [
        { value: "0", label: "interruption de service pendant la migration" },
        { value: "100%", label: "des données migrées et vérifiées" },
        { value: "1 sem", label: "adoption constatée par les utilisateurs" },
      ],
    },
    section2: {
      heading: "Conduite du changement & formation",
      description:
        "Ateliers, guides et support renforcé pendant la bascule : vos équipes sont accompagnées pour tirer parti des nouveaux outils (Teams, SharePoint, OneDrive).",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Formation Microsoft 365 et conduite du changement",
    },
    section3: {
      heading: "Sécurité & gouvernance M365",
      description:
        "Politiques de partage, DLP, rétention et conformité configurées dès la migration pour un environnement sécurisé et maîtrisé.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sécurité et gouvernance Microsoft 365",
      bullets: [
        { label: "Migration boîtes mail, OneDrive et SharePoint" },
        { label: "Conduite du changement et formation utilisateurs" },
        { label: "Politiques de sécurité et gouvernance M365" },
      ],
    },
  },
  "reseau-entreprise-wan-lan": {
    heroStats: {
      tagline: "Des réseaux d'entreprise fiables, sécurisés et documentés",
      stats: [
        { value: "99,9%", label: "disponibilité réseau cible" },
        { value: "Zero Trust", label: "segmentation et micro-segmentation" },
        { value: "QoS", label: "priorisation voix et vidéo" },
      ],
    },
    section1: {
      heading: "Réseaux d'entreprise fiables et sécurisés",
      description:
        "Segmentation Zero Trust, QoS pour la voix/vidéo et documentation à jour : nous concevons et maintenons des réseaux LAN/WAN adaptés à vos usages.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Réseau d'entreprise WAN LAN",
      stats: [
        { value: "99,9%", label: "disponibilité réseau cible" },
        { value: "Zero Trust", label: "segmentation et micro-segmentation" },
        { value: "QoS", label: "priorisation voix, vidéo et applicatif" },
      ],
    },
    section2: {
      heading: "Documentation & évolutivité",
      description:
        "Schémas réseau, IPAM et procédures à jour pour faciliter les interventions, les audits et les projets d'évolution sans dépendance à un expert unique.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Documentation réseau d'entreprise",
    },
    section3: {
      heading: "SD-WAN & interconnexions",
      description:
        "Optimisation des liens, priorisation applicative et visibilité centralisée sur vos sites distants grâce aux technologies SD-WAN.",
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "SD-WAN et interconnexions multi-sites",
      bullets: [
        { label: "Segmentation, QoS et sécurité périmétrique" },
        { label: "Documentation réseau et IPAM à jour" },
        { label: "SD-WAN et optimisation des liens multi-sites" },
      ],
    },
  },
  "vpn-acces-distance": {
    heroStats: {
      tagline: "Des accès distants sécurisés, audités et sans friction",
      stats: [
        { value: "100%", label: "des accès protégés par MFA" },
        { value: "0", label: "accès non journalisé" },
        { value: "ZTNA", label: "architecture Zero Trust" },
      ],
    },
    section1: {
      heading: "Accès distants sécurisés et audités",
      description:
        "Durcissement des configurations, MFA sur les accès distants et journalisation pour répondre aux exigences d'audit et protéger vos ressources internes.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "VPN et accès distant sécurisé",
      stats: [
        { value: "100%", label: "des accès protégés par MFA" },
        { value: "0", label: "accès non journalisé" },
        { value: "ZTNA", label: "architecture Zero Trust Network Access" },
      ],
    },
    section2: {
      heading: "Expérience utilisateur fluide",
      description:
        "Connexion transparente, split tunneling intelligent et compatibilité multi-OS : vos collaborateurs travaillent à distance sans friction technique.",
      imageSrc: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Expérience utilisateur VPN et télétravail",
    },
    section3: {
      heading: "Conformité & traçabilité",
      description:
        "Logs centralisés, rapports d'accès et alertes sur les comportements anormaux pour une traçabilité complète et une conformité audit.",
      imageSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Traçabilité des accès VPN",
      bullets: [
        { label: "Configurations durcies et MFA obligatoire" },
        { label: "Split tunneling et compatibilité multi-OS" },
        { label: "Journalisation et alertes comportementales" },
      ],
    },
  },
  "gestion-parc-postes": {
    heroStats: {
      tagline: "Un parc de postes inventorié, sécurisé et toujours conforme",
      stats: [
        { value: "100%", label: "des postes inventoriés" },
        { value: "<1h", label: "déploiement d'un nouveau poste" },
        { value: "MDM", label: "gestion centralisée" },
      ],
    },
    section1: {
      heading: "Parc de postes maîtrisé et sécurisé",
      description:
        "Cadrage des profils, déploiement silencieux et reporting de conformité pour sécuriser le poste de travail sans freiner les équipes.",
      imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion de parc informatique",
      stats: [
        { value: "100%", label: "des postes inventoriés et conformes" },
        { value: "< 1h", label: "déploiement d'un nouveau poste" },
        { value: "MDM", label: "gestion centralisée desktop et mobile" },
      ],
    },
    section2: {
      heading: "Déploiement & cycle de vie",
      description:
        "Masterisation, déploiement automatisé, gestion des mises à jour et renouvellement : nous gérons le cycle de vie complet de vos postes et terminaux.",
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Déploiement et cycle de vie des postes",
    },
    section3: {
      heading: "Conformité & sécurité endpoint",
      description:
        "Politiques de sécurité, chiffrement, EDR et reporting de conformité pour un parc protégé et auditable en permanence.",
      imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sécurité endpoint et conformité du parc",
      bullets: [
        { label: "Inventaire, masterisation et déploiement automatisé" },
        { label: "Gestion des mises à jour et correctifs" },
        { label: "Chiffrement, EDR et reporting de conformité" },
      ],
    },
  },
  "sensibilisation-collaborateurs": {
    heroStats: {
      tagline: "Réduire le risque humain avec des campagnes adaptées à vos métiers",
      stats: [
        { value: "-70%", label: "de clics phishing" },
        { value: "12", label: "modules courts adaptés" },
        { value: "1x/trim", label: "campagnes de simulation" },
      ],
    },
    section1: {
      heading: "Réduire le risque humain durablement",
      description:
        "Campagnes progressives, scoring individuel et modules courts adaptés aux métiers pour ancrer les bons réflexes cybersécurité dans la durée.",
      imageSrc: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sensibilisation cybersécurité collaborateurs",
      stats: [
        { value: "-70%", label: "de clics sur les simulations de phishing" },
        { value: "12", label: "modules courts adaptés aux métiers" },
        { value: "1x/trim", label: "campagnes de simulation programmées" },
      ],
    },
    section2: {
      heading: "Simulations & scoring",
      description:
        "Campagnes de phishing simulé, scoring par équipe et rapports de progression : vous mesurez l'efficacité de la sensibilisation dans le temps.",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Simulation de phishing et scoring",
    },
    section3: {
      heading: "Contenus adaptés à votre contexte",
      description:
        "Les modules sont personnalisés avec vos outils, vos processus et vos risques métier pour que les collaborateurs se reconnaissent dans les scénarios.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Modules de sensibilisation personnalisés",
      bullets: [
        { label: "Campagnes progressives et scoring individuel" },
        { label: "Simulations de phishing et ingénierie sociale" },
        { label: "Modules courts adaptés aux métiers et aux outils" },
      ],
    },
  },
  "astreinte-it": {
    heroStats: {
      tagline: "Une astreinte IT structurée pour vos incidents critiques",
      stats: [
        { value: "24/7", label: "couverture selon contrat" },
        { value: "<15 min", label: "prise en charge" },
        { value: "100%", label: "incidents documentés" },
      ],
    },
    section1: {
      heading: "Astreinte IT 24/7 pour incidents critiques",
      description:
        "Gestion des astreintes, procédures d'escalade et communication transparente pendant les incidents majeurs pour minimiser l'impact sur votre activité.",
      imageSrc: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Astreinte et intervention d'urgence IT",
      stats: [
        { value: "24/7", label: "couverture selon contrat" },
        { value: "< 15 min", label: "prise en charge des incidents critiques" },
        { value: "100%", label: "des incidents documentés et analysés" },
      ],
    },
    section2: {
      heading: "Escalade maîtrisée & communication",
      description:
        "Procédures d'escalade documentées, communication proactive vers les parties prenantes et post-mortems systématiques pour capitaliser sur chaque incident.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Procédures d'escalade et communication incident",
    },
    section3: {
      heading: "Périmètre & engagements clairs",
      description:
        "Le périmètre couvert, les SLA et les canaux d'escalade sont définis contractuellement. Pas de zone grise, pas de surprise.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Contrat d'astreinte IT et SLA",
      bullets: [
        { label: "Couverture 24/7 ou plages horaires adaptées" },
        { label: "Procédures d'escalade et post-mortems" },
        { label: "SLA et canaux d'escalade contractuels" },
      ],
    },
  },
  "antispam-email-securise": {
    heroStats: {
      tagline: "Votre messagerie protégée, les menaces bloquées à l'entrée",
      stats: [
        { value: "99,9%", label: "des spams et menaces bloqués" },
        { value: "0", label: "faux positif critique" },
        { value: "DLP", label: "prévention de fuite de données" },
      ],
    },
    section1: {
      heading: "Messagerie protégée, menaces bloquées",
      description:
        "Filtrage avancé, anti-phishing et conformité pour votre messagerie professionnelle. Réduction des menaces à l'entrée sans impact sur la productivité.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sécurisation de la messagerie professionnelle",
      stats: [
        { value: "99,9%", label: "des spams et menaces bloqués" },
        { value: "0", label: "faux positif critique toléré" },
        { value: "DLP", label: "règles de prévention de fuite de données" },
      ],
    },
    section2: {
      heading: "Anti-phishing & protection avancée",
      description:
        "Détection des pièces jointes malveillantes, analyse des liens et protection contre l'usurpation d'identité (SPF, DKIM, DMARC) pour une messagerie fiable.",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Protection anti-phishing avancée",
    },
    section3: {
      heading: "Conformité & reporting",
      description:
        "Rapports de quarantaine, statistiques de menaces et conformité RGPD : vous gardez la visibilité sur les flux et les risques.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Reporting sécurité messagerie",
      bullets: [
        { label: "Filtrage avancé et anti-phishing" },
        { label: "SPF, DKIM, DMARC configurés et surveillés" },
        { label: "Rapports de quarantaine et statistiques menaces" },
      ],
    },
  },
  "pilotage-strategique-si": {
    heroStats: {
      tagline: "Un SI piloté comme un actif stratégique de votre entreprise",
      stats: [
        { value: "100%", label: "des projets arbitrés par valeur" },
        { value: "1x/trim", label: "comités de pilotage" },
        { value: "ROI", label: "suivi du retour sur investissement" },
      ],
    },
    section1: {
      heading: "Aligner IT et stratégie d'entreprise",
      description:
        "Comités de pilotage, feuilles de route et priorisation des investissements IT pour que le système d'information soutienne réellement vos objectifs business.",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Pilotage stratégique du système d'information",
      stats: [
        { value: "100%", label: "des projets arbitrés par valeur business" },
        { value: "1x/trim", label: "comités de pilotage stratégique" },
        { value: "ROI", label: "suivi du retour sur investissement IT" },
      ],
    },
    section2: {
      heading: "Feuille de route & arbitrages",
      description:
        "Nous construisons une feuille de route pluriannuelle avec des jalons clairs, des dépendances identifiées et des critères d'arbitrage documentés pour chaque investissement.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Feuille de route SI et arbitrages",
    },
    section3: {
      heading: "Indicateurs de valeur & gouvernance",
      description:
        "Tableaux de bord de la valeur IT, indicateurs métier et rituels de gouvernance pour piloter le SI comme un actif stratégique.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gouvernance SI et indicateurs de valeur",
      bullets: [
        { label: "Alignement IT / métier documenté" },
        { label: "Feuille de route pluriannuelle et jalons" },
        { label: "Indicateurs de valeur et arbitrages documentés" },
      ],
    },
  },
  "cadrage-fonctionnel-projet": {
    heroStats: {
      tagline: "Des livrables de cadrage clairs pour lancer vos projets en confiance",
      stats: [
        { value: "-40%", label: "de dérives budget" },
        { value: "2 sem", label: "pour un cadrage complet" },
        { value: "100%", label: "des risques identifiés" },
      ],
    },
    section1: {
      heading: "Cadrage projet IT structuré",
      description:
        "Expression du besoin, backlog priorisé et cadrage des risques avant lancement des travaux. Des livrables clairs pour sécuriser budgets et délais.",
      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Atelier de cadrage projet IT",
      stats: [
        { value: "-40%", label: "de dérives budget grâce au cadrage" },
        { value: "2 sem", label: "pour un cadrage complet" },
        { value: "100%", label: "des risques identifiés et mitigés" },
      ],
    },
    section2: {
      heading: "Ateliers & expression du besoin",
      description:
        "Ateliers avec les métiers, cartographie des processus et priorisation MoSCoW : nous transformons les besoins en spécifications actionnables pour les équipes techniques.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Ateliers de cadrage fonctionnel",
    },
    section3: {
      heading: "Livrables de cadrage exploitables",
      description:
        "Note de cadrage, backlog priorisé, planning macro et matrice de risques : tout ce qu'il faut pour lancer les travaux en confiance.",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Livrables de cadrage projet",
      bullets: [
        { label: "Expression du besoin et backlog priorisé" },
        { label: "Planning macro et estimation budgétaire" },
        { label: "Matrice de risques et plan de mitigation" },
      ],
    },
  },
  "architecture-donnees-applicative": {
    heroStats: {
      tagline: "Une vision cible pour moderniser votre SI sans dette opaque",
      stats: [
        { value: "100%", label: "des flux cartographiés" },
        { value: "-50%", label: "de dette technique planifiée" },
        { value: "API", label: "architecture orientée services" },
      ],
    },
    section1: {
      heading: "Vision cible et trajectoire SI",
      description:
        "Schémas cibles, principes d'intégration et trajectoire de simplification pour moderniser votre architecture applicative et données sans dette opaque.",
      imageSrc: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Architecture applicative et données",
      stats: [
        { value: "100%", label: "des flux applicatifs cartographiés" },
        { value: "-50%", label: "de dette technique identifiée et planifiée" },
        { value: "API", label: "architecture orientée services et événements" },
      ],
    },
    section2: {
      heading: "Intégration & API",
      description:
        "Nous concevons les principes d'intégration entre vos applications (API, ESB, événements) pour un SI modulaire et évolutif.",
      imageSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Architecture d'intégration et API",
    },
    section3: {
      heading: "Données & gouvernance",
      description:
        "Modèle de données cible, politiques de qualité et conformité RGPD pour exploiter vos données en confiance.",
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gouvernance données et conformité",
      bullets: [
        { label: "Schémas cibles applicatifs et données" },
        { label: "Principes d'intégration API et événements" },
        { label: "Trajectoire de simplification et dette technique" },
      ],
    },
  },
  "recette-homologation": {
    heroStats: {
      tagline: "Des mises en production sereines grâce à une recette rigoureuse",
      stats: [
        { value: "-80%", label: "de régressions post-MEP" },
        { value: "100%", label: "des scénarios critiques couverts" },
        { value: "Go/NoGo", label: "décision documentée" },
      ],
    },
    section1: {
      heading: "Recette rigoureuse, mise en production sereine",
      description:
        "Plans de tests, jeux d'essai et validation avant mise en production. Réduction des régressions grâce à des scénarios de test traçables et reproductibles.",
      imageSrc: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Recette et validation avant production",
      stats: [
        { value: "-80%", label: "de régressions post-mise en production" },
        { value: "100%", label: "des scénarios critiques couverts" },
        { value: "Go/NoGo", label: "décision documentée et traçable" },
      ],
    },
    section2: {
      heading: "Automatisation & reproductibilité",
      description:
        "Nous automatisons les scénarios de test récurrents pour fiabiliser les cycles de livraison et réduire le temps de recette.",
      imageSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Automatisation des tests et recette",
    },
    section3: {
      heading: "Homologation & conformité",
      description:
        "Procès-verbaux de recette, matrices de couverture et dossiers d'homologation pour une mise en production conforme et auditée.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Homologation et conformité IT",
      bullets: [
        { label: "Plans de tests et jeux d'essai structurés" },
        { label: "Automatisation des scénarios récurrents" },
        { label: "PV de recette et dossier d'homologation" },
      ],
    },
  },
  "documentation-runbooks": {
    heroStats: {
      tagline: "Une documentation vivante pour que vos équipes opèrent en confiance",
      stats: [
        { value: "-60%", label: "de temps de résolution" },
        { value: "100%", label: "des procédures documentées" },
        { value: "Wiki", label: "base versionnée et recherchable" },
      ],
    },
    section1: {
      heading: "Documentation vivante et exploitable",
      description:
        "Procédures d'exploitation, runbooks et retours d'expérience capitalisés pour que vos équipes opèrent en autonomie et en confiance.",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Documentation d'exploitation IT",
      stats: [
        { value: "-60%", label: "de temps de résolution grâce aux runbooks" },
        { value: "100%", label: "des procédures critiques documentées" },
        { value: "Wiki", label: "base documentaire vivante et versionnée" },
      ],
    },
    section2: {
      heading: "Runbooks & procédures opérationnelles",
      description:
        "Chaque procédure est rédigée avec les pré-requis, les étapes et les critères de succès. Vos équipes savent exactement quoi faire en situation normale et dégradée.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Runbooks et procédures opérationnelles",
    },
    section3: {
      heading: "Capitalisation & amélioration continue",
      description:
        "Les retours d'expérience et post-mortems alimentent la base documentaire. La documentation évolue avec votre SI.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Capitalisation et amélioration continue",
      bullets: [
        { label: "Procédures d'exploitation et runbooks structurés" },
        { label: "Base documentaire versionnée et recherchable" },
        { label: "Capitalisation des retours d'expérience" },
      ],
    },
  },
};
