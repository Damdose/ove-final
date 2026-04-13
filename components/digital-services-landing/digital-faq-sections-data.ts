/** FAQ complète du pôle Digital — structurée par thématique. */

export interface FaqItem {
  question: string;
  /** Paragraphes séparés par une ligne vide (double saut de ligne). */
  answer: string;
}

export interface DigitalFaqSectionBlock {
  id: string;
  title: string;
  blurb?: string;
  items: FaqItem[];
}

export const DIGITAL_FAQ_SECTIONS: DigitalFaqSectionBlock[] = [
  {
    id: "sites-web",
    title: "Sites web, refonte & technique",
    blurb: "Création, refonte, stack et bonnes pratiques pour votre présence en ligne.",
    items: [
      {
        question: "Livrez-vous tous types de sites web ?",
        answer:
          "Oui. Nous concevons et développons des sites vitrines, corporate, instituts et marques, des plateformes e-commerce (y compris marketplaces et parcours B2B), des landing pages orientées conversion, des prototypes ou POC, ainsi que des refontes complètes en préservant au maximum le référencement et les données utiles.\n\nChaque projet est dimensionné selon vos objectifs business, votre maturité digitale et vos contraintes internes (équipe marketing, outils existants, délais).",
      },
      {
        question: "Sur quelle base technique travaillez-vous ?",
        answer:
          "Nous privilégions des stacks modernes et maintenables (par exemple Next.js / React côté front lorsque le projet s’y prête), avec une attention particulière aux performances (Core Web Vitals), à l’accessibilité et au SEO technique.\n\nLe choix final dépend de vos besoins : intégration CRM, e-commerce, multilingue, workflows éditoriaux, ou contraintes d’hébergement. Nous documentons les choix pour que votre équipe ou un prestataire tiers puisse reprendre le projet sereinement.",
      },
      {
        question: "Proposez-vous des sites multilingues ou multi-marques ?",
        answer:
          "Oui. Nous mettons en place des arborescences et des gabarits adaptés (traductions, hreflang, rubriques par pays ou par filiale), en coordonnant si besoin avec vos équipes locales ou vos agences de traduction.\n\nL’objectif est d’éviter la duplication de contenu et de garder une administration simple pour vos équipes.",
      },
      {
        question: "Comment se déroule une refonte sans perdre le SEO ?",
        answer:
          "Nous planifions la refonte avec un inventaire d’URLs, des redirections 301 maîtrisées, une veille des positions et du trafic, et des tests avant bascule.\n\nNous pouvons aussi prévoir une phase de coexistence ou de bascule progressive selon la taille du site et le risque métier.",
      },
      {
        question: "Qui rédige les contenus texte du site ?",
        answer:
          "Nous pouvons reprendre vos contenus existants, proposer une restructuration (arborescence, ton, hiérarchie des messages) et rédiger ou faire rédiger des pages clés (accueil, offres, études de cas) en collaboration avec vous.\n\nPour les contenus très spécialisés (juridique, médical, technique), nous recommandons souvent la validation par vos experts métiers tout en gardant une plume adaptée au web.",
      },
      {
        question: "Le site sera-t-il responsive et performant sur mobile ?",
        answer:
          "Oui, c’est une exigence par défaut : mise en page adaptative, temps de chargement, lisibilité, formulaires utilisables au doigt, et tests sur appareils courants.\n\nLa performance mobile impacte directement l’expérience utilisateur et souvent le référencement ; nous la traitons dès la conception, pas en fin de projet.",
      },
      {
        question: "Pouvez-vous connecter le site à notre CRM ou à nos outils ?",
        answer:
          "Oui, c’est fréquent : HubSpot, Salesforce, outils internes, bons de commande, synchronisation de stocks, passerelles de paiement, outils d’analytics, balises marketing avec consentement, etc.\n\nNous définissons avec vous les flux (sens des données, fréquence, sources de vérité) et les scénarios d’erreur pour limiter les mauvaises surprises en production.",
      },
      {
        question: "Proposez-vous l’hébergement et les noms de domaine ?",
        answer:
          "Nous pouvons recommander des hébergeurs adaptés à votre stack et à votre volumétrie, configurer les environnements (préproduction / production), les certificats TLS, les sauvegardes et la supervision de base.\n\nLa propriété du domaine et des comptes reste en principe la vôtre ; nous documentons les accès pour que vous gardiez la maîtrise.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce & conversion",
    blurb: "Parcours d’achat, tunnel, paiement et optimisation continue.",
    items: [
      {
        question: "Accompagnez-vous tout le tunnel e-commerce (du panier au suivi commande) ?",
        answer:
          "Oui : fiches produit, filtres, tunnel de commande, moyens de paiement, livraisons, emails transactionnels, compte client, relances d’abandon de panier (dans le respect du consentement), et tableaux de bord pour suivre le CA et les ruptures.\n\nNous alignons le parcours sur vos règles métier (B2B, B2C, multi-dépôts, TVA, pays livrés).",
      },
      {
        question: "Comment améliorez-vous le taux de conversion ?",
        answer:
          "Nous combinons analyse des données (analytics, heatmaps si pertinent), revue UX des étapes critiques, tests A/B ciblés, et optimisations techniques (vitesse, friction mobile, clarté des CTA).\n\nL’amélioration est itérative : objectifs chiffrés, prioritisation des quick wins puis chantiers structurants.",
      },
      {
        question: "Gérez-vous les catalogues volumineux ou les imports fournisseurs ?",
        answer:
          "Oui, nous avons l’habitude des flux CSV/XML/API, de la déduplication, des règles de mise en avant et des campagnes merchandising.\n\nNous sécurisons les imports (logs, alertes, rollback) pour éviter d’exposer des données incohérentes aux clients.",
      },
      {
        question: "Proposez-vous du CRO (Conversion Rate Optimization) après le lancement ?",
        answer:
          "Oui, sous forme de missions récurrentes ou de sprint : analyse des entonnoirs, hypothèses, maquettes légères, implémentation et mesure d’impact.\n\nCela peut être couplé à des campagnes publicitaires pour accélérer l’apprentissage.",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding & identité visuelle",
    blurb: "Direction artistique, charte et déclinaisons digitales.",
    items: [
      {
        question: "Réalisez-vous l’identité visuelle complète (logo, charte) ?",
        answer:
          "Oui : positionnement visuel, logo et déclinaisons, palette, typographies, iconographie, templates réseaux sociaux, supports print si besoin, et guide d’utilisation pour vos équipes.\n\nNous veillons à ce que l’identité soit exploitable sur le web (lisibilité, contrastes, formats vectoriels et export).",
      },
      {
        question: "Pouvez-vous reprendre une charte existante et l’étendre au digital ?",
        answer:
          "Oui. Nous auditons les usages actuels, identifions les écarts (contrastes, tailles, composants manquants) et produisons une bibliothèque de composants ou un mini design system pour accélérer les futures pages et campagnes.",
      },
      {
        question: "Faites-vous aussi la création de photos et vidéos ?",
        answer:
          "Oui : shooting photo, vidéo corporate, formats courts pour les réseaux sociaux, montage, sous-titrage, motion design et déclinaisons publicitaires.\n\nNous pouvons coordonner casting, lieux et habillage graphique aligné sur votre charte.",
      },
    ],
  },
  {
    id: "publicite",
    title: "Publicité & acquisition (Google, Meta…)",
    blurb: "Campagnes, mesure, budgets et pilotage.",
    items: [
      {
        question: "Pouvez-vous gérer nos publicités Google et Meta (Facebook / Instagram) ?",
        answer:
          "Oui. Nous structurons les comptes (structure de campagnes, groupes d’annonces, audiences), rédigeons les créas texte, configurons les balises et conversions, et pilotons les enchères avec un reporting clair (CPA, ROAS, volumes, qualité du trafic).\n\nNous privilégions une approche test & learn avec des budgets progressifs lorsque c’est pertinent.",
      },
      {
        question: "Quel budget publicitaire minimum conseillez-vous ?",
        answer:
          "Il n’y a pas de montant universel : cela dépend du coût par clic ou par mille impressions dans votre secteur, de la taille de l’audience et de la vitesse à laquelle vous voulez apprendre.\n\nEn pratique, un budget trop faible sur une période trop courte limite l’algorithme et la significativité des résultats ; nous vous aidons à calibrer un plan réaliste sur 30 à 90 jours.",
      },
      {
        question: "Comment mesurez-vous les conversions sans violer le RGPD ?",
        answer:
          "Nous mettons en place le consentement (CMP si besoin), le mode consentement des plateformes lorsque disponible, et des conversions agrégées ou modélisées selon les cas.\n\nL’objectif est de concilier pilotage marketing et respect des choix des utilisateurs.",
      },
      {
        question: "Travaillez-vous le SEA et le SEO en même temps ?",
        answer:
          "Oui, et c’est souvent souhaitable : le SEA apporte du trafic immédiat et des signaux business, pendant que le SEO construit une base durable.\n\nNous évitons les cannibalisations inutiles et harmonisons les messages entre annonces et pages d’atterrissage.",
      },
      {
        question: "Proposez-vous aussi LinkedIn Ads ou d’autres canaux ?",
        answer:
          "Oui selon votre cible B2B / recrutement / notoriété. Nous adaptons les créas, les formats et les objectifs (lead gen, trafic, notoriété) au canal.\n\nLa stratégie média est discutée en amont pour ne pas disperser les budgets.",
      },
      {
        question: "À quelle fréquence avez-nous des points sur les campagnes ?",
        answer:
          "En général un point hebdomadaire ou bi-mensuel selon l’intensité des campagnes, complété par un reporting mensuel plus synthétique pour la direction.\n\nLes urgences (budget, tracking cassé, créa rejetée) sont traitées en dehors de ces créneaux.",
      },
    ],
  },
  {
    id: "reseaux-contenu",
    title: "Réseaux sociaux & contenus",
    blurb: "Stratégie éditoriale, production et animation de communauté.",
    items: [
      {
        question: "Proposez-vous la stratégie Social Media et le calendrier éditorial ?",
        answer:
          "Oui : audit des comptes, définition des territoires de contenu, ton de voix, formats, fréquences, rôles internes/externes, et calendrier trimestriel ou semestriel.\n\nNous lions la stratégie aux objectifs (notoriété, trafic site, leads, recrutement) plutôt qu’à une simple présence « pour paraître ».",
      },
      {
        question: "Rédigez-vous et publiez-vous les posts à notre place ?",
        answer:
          "Oui, en mode délégué ou co-construit : rédaction, validation client, planification, publication, veille des commentaires et modération de base.\n\nLes sujets sensibles (crise, juridique) font l’objet d’une gouvernance claire avec vos référents.",
      },
      {
        question: "Créez-vous des contenus SEO (blog, guides) ?",
        answer:
          "Oui : recherche d’intentions, plan de contenu, rédaction optimisée, maillage interne, mise en forme et mesure des positions et du trafic organique.\n\nNous privilégions la qualité et l’utilité lecteur plutôt que le bourrage de mots-clés.",
      },
      {
        question: "Gérez-vous les newsletters et l’emailing ?",
        answer:
          "Oui : templates, segmentation, scénarios d’automation simples à avancés, A/B testing, délivrabilité (SPF/DKIM/DMARC), et synchronisation avec le CRM.\n\nNous respectons le consentement et les règles de désinscription.",
      },
      {
        question: "Travaillez-vous avec des influenceurs ou partenariats média ?",
        answer:
          "Nous pouvons accompagner la définition du brief, la sélection d’profils alignés avec votre marque et le cadre contractuel de base, en coordination avec vos équipes juridiques si nécessaire.\n\nCe n’est pas systématique : nous le recommandons lorsque le levier est cohérent avec vos objectifs.",
      },
    ],
  },
  {
    id: "processus",
    title: "Méthode, projet & collaboration",
    blurb: "Organisation, transparence et rôles pendant la mission.",
    items: [
      {
        question: "Comment démarre-t-on une collaboration avec Ovedex Digital ?",
        answer:
          "Un premier échange permet de cadrer vos objectifs, contraintes et délais. Nous pouvons ensuite proposer un devis détaillé ou une phase d’audit / cadrage si le besoin n’est pas encore totalement formalisé.\n\nUn interlocuteur projet est désigné côté Ovedex pour fluidifier les échanges.",
      },
      {
        question: "Utilisez-vous une méthode agile ?",
        answer:
          "Nous empruntons aux bonnes pratiques agiles (itérations, démos, backlog priorisé) tout en restant pragmatiques : pas de dogme si votre organisation impose des jalons ou des comités de validation.\n\nL’important est une visibilité sur l’avancement et des livrables testables régulièrement.",
      },
      {
        question: "Quels sont les délais typiques pour un site vitrine ou un e-commerce ?",
        answer:
          "Les délais varient fortement selon l’ampleur du contenu, le nombre de langues, les intégrations et la disponibilité de vos validateurs.\n\nÀ titre indicatif, un site vitrine structuré peut prendre quelques semaines à quelques mois ; un e-commerce riche peut s’étaler sur plusieurs mois. Nous affinons un planning réaliste dès la phase de cadrage.",
      },
      {
        question: "Comment suivons-nous l’avancement du projet ?",
        answer:
          "Roadmap partagée, réunions de suivi, outil de gestion de tâches ou extranet selon le projet, et compte-rendu des décisions importantes.\n\nVous savez à tout moment ce qui est fait, ce qui est en cours et ce qui est bloqué par une validation client.",
      },
      {
        question: "Travaillez-vous avec nos équipes internes ou d’autres prestataires ?",
        answer:
          "Oui, c’est courant : DSI, agence média partenaire, freelance SEO, équipe juridique. Nous clarifions les périmètres et points d’interface pour éviter les zones grises.\n\nNous pouvons participer à des ateliers conjoints ou transmettre une documentation technique pour handover.",
      },
      {
        question: "Parlez-vous anglais ou gérez-vous des projets internationaux ?",
        answer:
          "Oui, nous pouvons mener des échanges en anglais et coordonner des livrables multilingues avec vos filiales ou partenaires.\n\nLes contrats et devis peuvent être adaptés selon votre structure.",
      },
    ],
  },
  {
    id: "tarifs-contrats",
    title: "Tarifs, devis & propriété intellectuelle",
    blurb: "Modalités commerciales et ce que vous possédez à la fin.",
    items: [
      {
        question: "Comment sont fixés vos tarifs ?",
        answer:
          "Ils dépendent du périmètre fonctionnel, du niveau de sur-mesure, des intégrations, des délais et du niveau d’accompagnement (stratégie, production, publicité).\n\nNous détaillons les postes dans le devis pour que vous puissiez arbitrer : must-have vs option, phase 1 vs phase 2.",
      },
      {
        question: "Proposez-vous du forfait ou du régie ?",
        answer:
          "Les deux existent : forfait pour des lots clairement définis (site, identité, lot de créas), régie ou abonnement pour du pilotage publicitaire, de la maintenance ou de la production continue.\n\nNous expliquons les avantages et risques de chaque mode pour votre contexte.",
      },
      {
        question: "À qui appartiennent les livrables (code, maquettes, créas) ?",
        answer:
          "Sauf clause contraire explicitement convenue, les livrables spécifiques à votre projet vous sont transférés après paiement complet des factures associées, dans les limites des droits que nous pouvons céder (notamment sur composants tiers sous licence).\n\nLes éléments réutilisables génériques (framework interne, snippets) peuvent rester notre savoir-faire ; cela est précisé contractuellement.",
      },
      {
        question: "Facturez-vous des acomptes ?",
        answer:
          "Oui, il est fréquent de prévoir un acompte au lancement puis des jalons de facturation alignés sur les phases du projet.\n\nLes modalités exactes figurent au devis et au contrat.",
      },
      {
        question: "Signez-vous un NDA ou des clauses de confidentialité ?",
        answer:
          "Oui, lorsque vos informations sont sensibles (roadmap produit, données business). Nous pouvons signer votre NDA ou proposer une clause adaptée.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Après lancement : maintenance, évolutions & formation",
    blurb: "Durabilité, sécurité et montée en compétence de vos équipes.",
    items: [
      {
        question: "Proposez-vous un accompagnement long terme après la mise en ligne ?",
        answer:
          "Oui : maintenance corrective et évolutive, mises à jour de sécurité, petites évolutions UX, production de contenus, campagnes publicitaires, automatisation, et conseil stratégique.\n\nNous adaptons le rythme (forfait mensuel, réservation de jours, tickets) à votre organisation.",
      },
      {
        question: "Qu’est-ce que la maintenance « classique » couvre ?",
        answer:
          "Surveillance de base, correctifs liés aux mises à jour des dépendances ou du CMS le cas échéant, correctifs critiques, sauvegardes, et hotline selon le niveau de service convenu.\n\nLes nouvelles fonctionnalités majeures font l’objet de devis complémentaires sauf package évolutif prévu.",
      },
      {
        question: "Formez-vous nos équipes à l’administration du site ou des outils ?",
        answer:
          "Oui : sessions live, documentation écrite ou vidéo courte, bonnes pratiques SEO éditorial, utilisation du studio publicitaire, etc.\n\nL’objectif est votre autonomie sur le quotidien tout en gardant un filet de sécurité côté Ovedex si besoin.",
      },
      {
        question: "Pouvez-vous reprendre un site ou des campagnes créés par un autre prestataire ?",
        answer:
          "Oui. Nous commençons par un audit technique et média pour comprendre l’existant, les accès, les dettes techniques et les risques.\n\nUne phase de transition peut être planifiée pour assurer la continuité de service.",
      },
      {
        question: "Existe-t-il une page dédiée à la maintenance Digital ?",
        answer:
          "Oui : depuis la navigation du pôle Digital, ouvrez la page « Maintenance » pour le détail des offres et modalités. Vous pouvez aussi nous écrire pour un besoin sur mesure.",
      },
    ],
  },
  {
    id: "donnees-rgpd",
    title: "Données, RGPD & accessibilité",
    blurb: "Conformité, cookies, analytics et inclusion.",
    items: [
      {
        question: "Nous aiderez-vous sur le RGPD (formulaires, politique de confidentialité, cookies) ?",
        answer:
          "Nous intégrons les bonnes pratiques techniques et UX (consentement, durées de conservation côté formulaires, documentation des traitements côté site) et pouvons vous mettre en relation avec un juriste spécialisé pour la validation juridique définitive.\n\nNous ne sommes pas un cabinet d’avocats : les mentions légales et politiques doivent refléter votre réalité juridique.",
      },
      {
        question: "Comment abordez-vous l’accessibilité numérique ?",
        answer:
          "Hiérarchie des titres, contrastes, navigation clavier, textes alternatifs pertinents, formulaires lisibles : nous intégrons ces exigences dès la maquette lorsque le cahier des charges l’impose ou que vous souhaitez viser un référentiel (RGAA-like).\n\nUn audit d’accessibilité complet peut être confié à un tiers ; nous corrigeons ensuite les écarts identifiés.",
      },
      {
        question: "Intégrez-vous des solutions CRM et automatisations (HubSpot, Make, Zapier…) ?",
        answer:
          "Oui. Nous déployons ou connectons HubSpot, Make, Zapier, Notion, Trello et d’autres briques selon votre stack, pour synchroniser leads, tâches et notifications.\n\nNous documentons les scénarios pour limiter la dépendance à une seule personne « qui connaît le fichier ».",
      },
      {
        question: "Comment gérez-vous les accès et la sécurité des comptes ?",
        answer:
          "Principe du moindre privilège, authentification forte lorsque possible, coffres pour les secrets, et rotation des accès lors du départ d’un intervenant.\n\nNous recommandons de centraliser les comptes critiques chez le client.",
      },
    ],
  },
];
