/**
 * Données des 3 sections feature pour chaque service Digital.
 */
import type { ServiceFeaturesData } from "@/components/shared/service-feature-sections";

export const DIGITAL_SERVICE_FEATURES: Record<string, ServiceFeaturesData> = {
  "campagne-video-youtube-tiktok": {
    heroStats: {
      tagline: "Des vidéos courtes qui captent l'attention et génèrent des résultats",
      stats: [
        { value: "+3x", label: "d'engagement vs contenus statiques" },
        { value: "48h", label: "délai de livraison des créas" },
        { value: "100%", label: "des campagnes pilotées et optimisées" },
      ],
    },
    section1: {
      heading: "Vidéos courtes conçues pour la performance",
      description:
        "Nous scénarisons, tournons et montons des formats courts calibrés pour YouTube Shorts et TikTok. Chaque vidéo est pensée avec un hook d'accroche, un storytelling clair et un CTA intégré.",
      imageSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Production vidéo pour campagnes sociales",
      stats: [
        { value: "+3x", label: "d'engagement moyen sur les formats vidéo courts vs statiques" },
        { value: "48h", label: "délai de livraison pour un lot de créas vidéo" },
        { value: "A/B", label: "variantes testées systématiquement sur chaque campagne" },
      ],
    },
    section2: {
      heading: "Diffusion & ciblage multi-plateformes",
      description:
        "Nous paramétrons les campagnes sponsorisées sur YouTube et TikTok Ads : audiences, budgets, objectifs (reach, trafic, conversions). Le ciblage est ajusté en continu selon les résultats.",
      imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Paramétrage campagnes vidéo sponsorisées",
    },
    section3: {
      heading: "Suivi des résultats & itérations",
      description:
        "Chaque campagne est pilotée avec des tableaux de bord clairs : coûts par vue, taux de complétion, conversions. Nous itérons sur les créas et les ciblages pour maximiser le ROI.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Dashboard de suivi des campagnes vidéo",
      bullets: [
        { label: "Scripts et hooks adaptés à chaque plateforme" },
        { label: "Montage, sous-titres et variantes A/B des créas" },
        { label: "Reporting hebdomadaire : engagement, coûts, résultats business" },
      ],
    },
  },
  "charte-graphique": {
    heroStats: {
      tagline: "Une identité visuelle forte et cohérente sur tous vos supports",
      stats: [
        { value: "100%", label: "des éléments visuels documentés" },
        { value: "3", label: "pistes créatives explorées" },
        { value: "1", label: "document opérationnel livré" },
      ],
    },
    section1: {
      heading: "Une identité visuelle cohérente et durable",
      description:
        "Nous définissons les règles d'usage de votre logo, vos couleurs, typographies et motifs pour garantir une image reconnaissable sur tous vos supports, du web au print.",
      imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Création de charte graphique professionnelle",
      stats: [
        { value: "100%", label: "des éléments visuels documentés et déclinés" },
        { value: "3", label: "pistes créatives explorées avant validation" },
        { value: "1", label: "document opérationnel livré pour vos équipes" },
      ],
    },
    section2: {
      heading: "Déclinaisons print & digital",
      description:
        "Chaque charte inclut des exemples d'application concrets : signatures email, réseaux sociaux, présentations, supports commerciaux. Vos équipes et partenaires savent exactement comment utiliser la marque.",
      imageSrc: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Exemples de déclinaisons visuelles multi-supports",
    },
    section3: {
      heading: "Livrables exploitables immédiatement",
      description:
        "Fichiers sources, guide d'usage synthétique et templates : tout est pensé pour une adoption rapide par vos équipes internes et vos prestataires.",
      imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Guide de marque et fichiers sources",
      bullets: [
        { label: "Règles logo, couleurs, typographies, iconographie" },
        { label: "Templates réseaux sociaux, présentations et signatures" },
        { label: "Fichiers sources vectoriels et guide PDF synthétique" },
      ],
    },
  },
  "creation-de-contenus": {
    heroStats: {
      tagline: "Des contenus qui travaillent pour votre business, pas juste pour alimenter un feed",
      stats: [
        { value: "+40%", label: "de trafic organique en 6 mois" },
        { value: "50+", label: "contenus produits par trimestre" },
        { value: "SEO", label: "optimisation intégrée dès la rédaction" },
      ],
    },
    section1: {
      heading: "Des contenus alignés sur vos objectifs business",
      description:
        "Articles, posts sociaux, newsletters, pages web : chaque contenu est pensé avec votre ton de voix, vos preuves sociales et un objectif clair — génération de leads, fidélisation ou SEO.",
      imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Création de contenus marketing digitaux",
      stats: [
        { value: "+40%", label: "de trafic organique en moyenne après 6 mois" },
        { value: "50+", label: "contenus produits par trimestre pour nos clients" },
        { value: "SEO", label: "optimisation intégrée dès la rédaction" },
      ],
    },
    section2: {
      heading: "Un processus éditorial structuré",
      description:
        "Brief → rédaction → validation → publication : nous intégrons le calendrier éditorial dans votre workflow. Chaque contenu passe par un cycle de relecture et d'optimisation avant mise en ligne.",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Processus éditorial et calendrier de publication",
    },
    section3: {
      heading: "Formats adaptés à chaque canal",
      description:
        "Du post LinkedIn au livre blanc, nous adaptons le format, la longueur et le ton à chaque plateforme pour maximiser l'engagement et les conversions.",
      imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Contenus multi-formats et multi-canaux",
      bullets: [
        { label: "Posts, carrousels et visuels pour les réseaux sociaux" },
        { label: "Articles SEO, pages web et landing pages" },
        { label: "Newsletters et séquences d'emailing" },
      ],
    },
  },
  "creation-de-logo": {
    heroStats: {
      tagline: "Un logo qui marque les esprits et s'adapte à tous les contextes",
      stats: [
        { value: "3+", label: "pistes créatives présentées" },
        { value: "100%", label: "des déclinaisons prévues" },
        { value: "∞", label: "licence d'utilisation illimitée" },
      ],
    },
    section1: {
      heading: "Un logo mémorable et professionnel",
      description:
        "Nous explorons plusieurs pistes créatives, testons la lisibilité sur tous les formats et validons avec vous une direction forte. Le résultat : un logo reconnaissable, durable et déclinable.",
      imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Processus de création de logo",
      stats: [
        { value: "3+", label: "pistes créatives présentées et argumentées" },
        { value: "100%", label: "des déclinaisons prévues dès le départ" },
        { value: "∞", label: "licence d'utilisation sans limite de durée" },
      ],
    },
    section2: {
      heading: "Tests de lisibilité & déclinaisons",
      description:
        "Petit format, mobile, monochrome, fond sombre : chaque variante est testée pour garantir un rendu impeccable partout. Favicon, réseaux sociaux et signatures sont livrés en même temps.",
      imageSrc: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Tests de lisibilité logo sur différents supports",
    },
    section3: {
      heading: "Fichiers et guide d'usage",
      description:
        "Vous recevez les fichiers sources exploitables (AI, SVG, PNG) et un guide d'usage synthétique pour déployer votre logo sans erreur.",
      imageSrc: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Livrables logo et guide de marque",
      bullets: [
        { label: "Fichiers vectoriels (AI, SVG, EPS) et bitmap (PNG, JPG)" },
        { label: "Pack favicon, réseaux sociaux et signatures email" },
        { label: "Guide d'usage : zones de protection, couleurs, interdits" },
      ],
    },
  },
  "developpement-wordpress-shopify": {
    heroStats: {
      tagline: "Des sites et boutiques sur-mesure, rapides et autonomes pour vos équipes",
      stats: [
        { value: "<2s", label: "temps de chargement mobile" },
        { value: "100+", label: "projets WordPress & Shopify livrés" },
        { value: "CMS", label: "interface éditeur pensée pour vous" },
      ],
    },
    section1: {
      heading: "Sites & boutiques sur-mesure, performants",
      description:
        "Nous développons sur WordPress et Shopify des thèmes et boutiques optimisés : performances, sécurité, SEO technique et expérience éditeur pensée pour votre autonomie.",
      imageSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Développement WordPress et Shopify",
      stats: [
        { value: "<2s", label: "temps de chargement cible sur mobile" },
        { value: "100+", label: "projets WordPress et Shopify livrés" },
        { value: "CMS", label: "interface éditeur pensée pour vos équipes" },
      ],
    },
    section2: {
      heading: "Intégrations métier & connecteurs",
      description:
        "CRM, paiement, ERP, PIM : nous documentons les flux et connectons vos outils pour une exploitation fluide au quotidien. Chaque intégration est testée et monitorée.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégrations CRM et ERP pour sites web",
    },
    section3: {
      heading: "Documentation & transfert de compétences",
      description:
        "Votre équipe est autonome dès la livraison : documentation technique, formation éditeur et support post-lancement inclus.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Formation et documentation technique",
      bullets: [
        { label: "Thème ou boutique sur-mesure, performant et sécurisé" },
        { label: "Intégrations paiement, CRM, ERP et PIM" },
        { label: "Documentation et formation pour vos équipes" },
      ],
    },
  },
  "gestion-des-reseaux-sociaux": {
    heroStats: {
      tagline: "Soyez visible là où vos clients vous cherchent : les réseaux sociaux",
      stats: [
        { value: "+120%", label: "d'engagement moyen après 3 mois" },
        { value: "4+", label: "plateformes gérées simultanément" },
        { value: "1x/sem", label: "point de pilotage et reporting" },
      ],
    },
    section1: {
      heading: "Animation social media clé en main",
      description:
        "Calendrier éditorial, création de contenus, modération et reporting : nous prenons en charge vos comptes sociaux avec une ligne éditoriale claire et des résultats mesurables.",
      imageSrc: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion des réseaux sociaux professionnels",
      stats: [
        { value: "+120%", label: "d'engagement moyen constaté après 3 mois" },
        { value: "4+", label: "plateformes gérées simultanément" },
        { value: "1x/sem", label: "point de pilotage et reporting" },
      ],
    },
    section2: {
      heading: "Créas adaptées à chaque plateforme",
      description:
        "Chaque post, story ou reel est conçu dans le format natif de la plateforme (Instagram, LinkedIn, TikTok, Facebook) pour maximiser la portée organique et l'interaction.",
      imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Création de contenus pour réseaux sociaux",
    },
    section3: {
      heading: "Modération, veille & reporting",
      description:
        "Nous assurons la modération quotidienne, la veille concurrentielle et un reporting clair (portée, engagement, trafic site) pour piloter votre présence sociale.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Reporting et veille social media",
      bullets: [
        { label: "Calendrier éditorial mensuel et créas adaptées" },
        { label: "Modération et veille des commentaires" },
        { label: "Reporting portée, engagement, trafic et leads" },
      ],
    },
  },
  "google-ads": {
    heroStats: {
      tagline: "Chaque euro investi doit rapporter : des campagnes Google Ads pilotées pour le ROI",
      stats: [
        { value: "-35%", label: "de CPA moyen après optimisation" },
        { value: "100%", label: "des conversions trackées" },
        { value: "2x/mois", label: "itérations annonces et enchères" },
      ],
    },
    section1: {
      heading: "Campagnes Google Ads structurées pour le ROI",
      description:
        "Search, Display, Performance Max, YouTube : nous structurons vos comptes, configurons le suivi de conversion et pilotons les enchères pour rentabiliser chaque euro investi.",
      imageSrc: "https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion de campagnes Google Ads",
      stats: [
        { value: "-35%", label: "de CPA moyen après optimisation des comptes" },
        { value: "100%", label: "des conversions trackées et attribuées" },
        { value: "2x/mois", label: "itérations sur les annonces et enchères" },
      ],
    },
    section2: {
      heading: "Annonces & pages d'atterrissage optimisées",
      description:
        "Nous rédigeons les annonces, testons les variantes A/B et alignons les pages d'atterrissage sur l'intention de recherche pour maximiser le Quality Score et le taux de conversion.",
      imageSrc: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Rédaction d'annonces Google Ads et landing pages",
    },
    section3: {
      heading: "Pilotage CPA/ROAS & reporting",
      description:
        "Des tableaux de bord lisibles pour vos équipes marketing et direction : coût par lead, ROAS, budget consommé et recommandations d'ajustement à chaque point de pilotage.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Dashboard de pilotage Google Ads",
      bullets: [
        { label: "Architecture campagnes alignée sur vos offres" },
        { label: "Balises, conversions et consentement RGPD" },
        { label: "Pilotage CPA / ROAS et points de pilotage réguliers" },
      ],
    },
  },
  "landing-page": {
    heroStats: {
      tagline: "Une page, un objectif, un résultat mesurable",
      stats: [
        { value: "+45%", label: "de taux de conversion moyen" },
        { value: "<1.5s", label: "temps de chargement mobile" },
        { value: "A/B", label: "variantes testées systématiquement" },
      ],
    },
    section1: {
      heading: "Pages d'atterrissage orientées conversion",
      description:
        "Message unique, preuves sociales, formulaire au-dessus de la ligne de flottaison : chaque landing page est conçue pour convertir le trafic payant en leads ou en ventes.",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Landing page optimisée pour la conversion",
      stats: [
        { value: "+45%", label: "de taux de conversion moyen vs pages classiques" },
        { value: "<1.5s", label: "temps de chargement mobile" },
        { value: "A/B", label: "variantes testées sur chaque campagne" },
      ],
    },
    section2: {
      heading: "Mobile-first & Core Web Vitals",
      description:
        "Performance, accessibilité et vitesse de chargement : chaque landing page est développée mobile-first et optimisée pour les Core Web Vitals de Google.",
      imageSrc: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Landing page mobile-first et performante",
    },
    section3: {
      heading: "Tracking & optimisation continue",
      description:
        "Micro-conversions, heatmaps et objectifs business : nous mesurons chaque étape du tunnel et itérons pour améliorer les résultats dans la durée.",
      imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Analyse et optimisation de landing pages",
      bullets: [
        { label: "Structure hero / bénéfices / preuves / FAQ / CTA" },
        { label: "Tracking des micro-conversions et objectifs" },
        { label: "Variantes A/B sur le trafic payant" },
      ],
    },
  },
  "meta-ads": {
    heroStats: {
      tagline: "Facebook & Instagram Ads structurées pour générer des résultats concrets",
      stats: [
        { value: "+60%", label: "de leads qualifiés en moyenne" },
        { value: "CAPI", label: "tracking server-side fiable" },
        { value: "1x/sem", label: "itérations créatives et ciblages" },
      ],
    },
    section1: {
      heading: "Campagnes Meta structurées pour vos objectifs",
      description:
        "Facebook et Instagram Ads : notoriété, trafic, leads ou ventes. Nous configurons les pixels, les audiences et les créatives pour coller à vos objectifs business.",
      imageSrc: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Campagnes Meta Ads Facebook et Instagram",
      stats: [
        { value: "+60%", label: "de leads qualifiés en moyenne après optimisation" },
        { value: "CAPI", label: "server-side tracking pour des données fiables" },
        { value: "1x/sem", label: "itérations créatives et ciblages" },
      ],
    },
    section2: {
      heading: "Créatives testées & audiences affinées",
      description:
        "Advantage+, catalogue dynamique, lead ads : nous testons les formats, les visuels et les audiences chaque semaine pour trouver les combinaisons gagnantes.",
      imageSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Création et test de publicités Meta",
    },
    section3: {
      heading: "Reporting & recommandations budget",
      description:
        "Coût par résultat, ROAS, fréquence et fatigue créative : des rapports clairs avec des recommandations d'allocation budget pour chaque campagne.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Reporting campagnes Meta Ads",
      bullets: [
        { label: "Pixel / CAPI et audiences remarketing configurés" },
        { label: "Formats Advantage+, catalogue et lead ads" },
        { label: "Reporting coût par résultat et recommandations budget" },
      ],
    },
  },
  "refonte-de-sites-existants": {
    heroStats: {
      tagline: "Moderniser sans casser : votre site évolue, votre référencement reste",
      stats: [
        { value: "+80%", label: "d'amélioration Core Web Vitals" },
        { value: "0", label: "perte de trafic SEO" },
        { value: "30j", label: "pour une refonte progressive" },
      ],
    },
    section1: {
      heading: "Modernisation sans perte de référencement",
      description:
        "Audit UX/UI, dette technique et SEO : nous identifions les chantiers prioritaires et livrons une feuille de route claire pour moderniser votre site sans casser l'existant.",
      imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Audit et refonte de site web existant",
      stats: [
        { value: "+80%", label: "d'amélioration des Core Web Vitals post-refonte" },
        { value: "0", label: "perte de trafic grâce aux redirections maîtrisées" },
        { value: "30j", label: "pour une refonte progressive type" },
      ],
    },
    section2: {
      heading: "UX repensée, parcours simplifié",
      description:
        "Nous redessinons les parcours utilisateurs en nous appuyant sur les données analytics et les retours terrain. Chaque écran est prototypé et validé avant développement.",
      imageSrc: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Prototypage UX pour refonte de site",
    },
    section3: {
      heading: "Plan de migration & suivi SEO",
      description:
        "Plan de redirections, veille trafic/positions et surveillance post-bascule : nous sécurisons le référencement à chaque étape de la refonte.",
      imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Migration SEO et suivi post-refonte",
      bullets: [
        { label: "Audit UX, technique et SEO avec quick wins identifiés" },
        { label: "Plan de redirections et veille trafic / positions" },
        { label: "Alignement avec vos campagnes et landing pages" },
      ],
    },
  },
  "reseaux-sociaux-branding": {
    heroStats: {
      tagline: "Une présence reconnaissable et professionnelle sur chaque réseau",
      stats: [
        { value: "5+", label: "formats déclinés par plateforme" },
        { value: "100%", label: "alignement charte graphique" },
        { value: "2", label: "variantes clair / sombre livrées" },
      ],
    },
    section1: {
      heading: "Branding social cohérent et professionnel",
      description:
        "Templates stories, reels covers, bannières et packs d'icônes : une présence reconnaissable et professionnelle sur chaque réseau social, alignée sur votre charte.",
      imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Branding réseaux sociaux professionnel",
      stats: [
        { value: "5+", label: "formats déclinés par plateforme" },
        { value: "100%", label: "alignement avec votre charte graphique" },
        { value: "2", label: "variantes clair / sombre livrées" },
      ],
    },
    section2: {
      heading: "Guides d'usage & zones de sécurité",
      description:
        "Chaque template inclut les placements, zones de sécurité et variantes par plateforme. Vos équipes et prestataires publient du contenu aligné sans effort.",
      imageSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Guide d'usage templates réseaux sociaux",
    },
    section3: {
      heading: "Cohérence organique & pub",
      description:
        "Les templates sont conçus pour fonctionner aussi bien en organique qu'en publicité sponsorisée. L'identité visuelle reste constante sur tous les points de contact.",
      imageSrc: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Templates social media pour campagnes sponsorisées",
      bullets: [
        { label: "Stories, reels, bannières et packs d'icônes" },
        { label: "Zones de sécurité et formats par plateforme" },
        { label: "Cohérence avec votre charte et vos campagnes" },
      ],
    },
  },
  "site-e-commerce": {
    heroStats: {
      tagline: "Des boutiques en ligne qui transforment le trafic en ventes",
      stats: [
        { value: "+65%", label: "d'augmentation de conversion" },
        { value: "<2s", label: "temps de chargement mobile" },
        { value: "100%", label: "des moyens de paiement intégrés" },
      ],
    },
    section1: {
      heading: "Boutique en ligne fluide et performante",
      description:
        "Parcours produit, tunnel de commande, paiement et logistique : nous concevons des boutiques pensées pour le mobile et optimisées pour convertir le trafic en ventes.",
      imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Conception de boutique e-commerce",
      stats: [
        { value: "+65%", label: "d'augmentation de conversion sur les boutiques optimisées" },
        { value: "<2s", label: "temps de chargement cible sur mobile" },
        { value: "100%", label: "des moyens de paiement courants intégrés" },
      ],
    },
    section2: {
      heading: "Connexion à vos outils métier",
      description:
        "PIM, ERP, CRM, emailing transactionnel : nous connectons la boutique à votre écosystème pour une gestion des stocks, commandes et clients centralisée.",
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégrations e-commerce ERP CRM PIM",
    },
    section3: {
      heading: "CRO & suivi des entonnoirs",
      description:
        "Suivi du tunnel (ads → fiche produit → panier → achat), tests A/B et optimisation continue pour améliorer le taux de conversion dans la durée.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Optimisation du tunnel d'achat e-commerce",
      bullets: [
        { label: "Architecture catalogue, filtres et fiches produit" },
        { label: "Tunnel de commande, paiement et logistique" },
        { label: "CRO et suivi des entonnoirs (ads → achat)" },
      ],
    },
  },
  "sites-vitrine": {
    heroStats: {
      tagline: "Un site professionnel qui présente votre expertise et capte des demandes",
      stats: [
        { value: "20j", label: "délai moyen de livraison" },
        { value: "100%", label: "responsive et mobile-first" },
        { value: "SEO", label: "optimisation technique incluse" },
      ],
    },
    section1: {
      heading: "Un site vitrine qui capte des demandes",
      description:
        "Présenter votre expertise, vos références et vos contacts avec un site rapide, accessible et aligné sur votre charte. Structure claire et formulaires anti-spam pour qualifier les demandes.",
      imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Site vitrine professionnel",
      stats: [
        { value: "20j", label: "délai moyen de livraison d'un site vitrine" },
        { value: "100%", label: "responsive et mobile-first" },
        { value: "SEO", label: "optimisation technique de base incluse" },
      ],
    },
    section2: {
      heading: "Design aligné charte & prêt pour les campagnes",
      description:
        "Le site est conçu pour accueillir vos futures landing pages et campagnes d'acquisition. Design cohérent avec votre identité visuelle existante ou en cours de création.",
      imageSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Design de site vitrine aligné sur la charte",
    },
    section3: {
      heading: "Autonomie & suivi analytics",
      description:
        "Interface éditeur simple, formulaires connectés à votre CRM et tableau de bord analytics pour suivre les demandes entrantes et le trafic.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Interface d'administration de site vitrine",
      bullets: [
        { label: "Arborescence claire : offres, preuves, contact" },
        { label: "Formulaires et anti-spam, événements analytics" },
        { label: "Performance mobile et SEO technique de base" },
      ],
    },
  },
  "support-print-digital": {
    heroStats: {
      tagline: "Brochures, affiches et présentations alignées sur votre marque",
      stats: [
        { value: "100%", label: "cohérence avec votre charte" },
        { value: "Print", label: "fichiers aux normes d'impression" },
        { value: "Web", label: "versions légères optimisées" },
      ],
    },
    section1: {
      heading: "Supports print & digital alignés sur votre marque",
      description:
        "Brochures, affiches, présentations et kits média : nous assurons la cohérence entre vos supports physiques et digitaux, avec des fichiers prêts à l'emploi.",
      imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Supports print et déclinaisons digitales",
      stats: [
        { value: "100%", label: "cohérence avec votre charte graphique" },
        { value: "Print", label: "fichiers aux normes d'impression (CMJN, traits de coupe)" },
        { value: "Web", label: "versions légères optimisées pour le digital" },
      ],
    },
    section2: {
      heading: "Du brief à l'impression",
      description:
        "Nous gérons la chaîne complète : brief créatif, maquettage, allers-retours et préparation des fichiers aux normes d'impression ou de diffusion en ligne.",
      imageSrc: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f39e6?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Processus de création de supports print",
    },
    section3: {
      heading: "Templates & livrables exploitables",
      description:
        "Vos équipes et imprimeurs reçoivent des fichiers exploitables immédiatement : templates modifiables, fichiers haute résolution et versions web optimisées.",
      imageSrc: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Templates et fichiers print exploitables",
      bullets: [
        { label: "Brochures, affiches, présentations et kits média" },
        { label: "Fichiers aux normes impression + versions web légères" },
        { label: "Livrables exploitables par vos équipes ou imprimeurs" },
      ],
    },
  },
  "strategie-social-media": {
    heroStats: {
      tagline: "Un plan social media qui connecte vos réseaux à la génération de business",
      stats: [
        { value: "+200%", label: "de portée organique après cadrage" },
        { value: "90j", label: "calendrier éditorial opérationnel" },
        { value: "KPI", label: "indicateurs définis dès le brief" },
      ],
    },
    section1: {
      heading: "Stratégie social media orientée résultats",
      description:
        "Positionnement, personas, axes de contenu et calendrier trimestriel : nous traduisons vos objectifs business en un plan d'action social mesurable et actionnable.",
      imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Stratégie social media et plan éditorial",
      stats: [
        { value: "+200%", label: "de portée organique après cadrage stratégique" },
        { value: "90j", label: "calendrier éditorial livré et opérationnel" },
        { value: "KPI", label: "indicateurs de succès définis dès le brief" },
      ],
    },
    section2: {
      heading: "Territoires de contenu & ton de voix",
      description:
        "Nous définissons les sujets sur lesquels votre marque prend la parole, le ton adapté à chaque réseau et les formats prioritaires pour maximiser l'engagement.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Définition du ton de voix et des territoires de contenu",
    },
    section3: {
      heading: "Pilotage & alignement acquisition",
      description:
        "La stratégie sociale est alignée avec vos campagnes payantes et vos landing pages pour un parcours cohérent de la découverte à la conversion.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Alignement stratégie social media et acquisition",
      bullets: [
        { label: "Positionnement, personas et ton de voix" },
        { label: "Calendrier trimestriel et rôles internes / externes" },
        { label: "KPI : reach, engagement, trafic, leads" },
      ],
    },
  },
};
