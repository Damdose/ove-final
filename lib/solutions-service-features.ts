/**
 * Données des 3 sections feature pour chaque service Solutions.
 */
import type { ServiceFeaturesData } from "@/components/shared/service-feature-sections";

export const SOLUTIONS_SERVICE_FEATURES: Record<string, ServiceFeaturesData> = {
  /* ──────── Sûreté ──────── */
  "surete-de-chantier": {
    heroStats: {
      tagline: "Des dispositifs autonomes qui s'adaptent à chaque phase de votre projet",
      stats: [
        { value: "+300", label: "chantiers sécurisés" },
        { value: "24/7", label: "surveillance temps réel" },
        { value: "48h", label: "déploiement sur site" },
      ],
          advantages: [{"icon":"zap","title":"Déploiement en 48h sur site","text":"Systèmes autonomes installés rapidement, alimentés par panneau solaire ou groupe électrogène — opérationnels même sans réseau filaire."},{"icon":"eye","title":"Alerte vidéo en direct sur smartphone","text":"Dès qu'un mouvement suspect est détecté, vous recevez la vidéo en temps réel pour décider d'intervenir immédiatement."},{"icon":"settings","title":"Reconfigurable à chaque phase","text":"Le dispositif se déplace et s'adapte au fil de l'avancement du chantier, sans câblage lourd ni reprise d'installation."}],
    },
    section1: {
      heading: "Sécurisation temporaire de vos chantiers",
      description: "Vidéosurveillance, détection d'intrusion et contrôle d'accès modulaires pour protéger vos chantiers contre les vols, intrusions et actes de malveillance.",
      imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sécurisation de chantier avec caméras",
      stats: [
        { value: "+300", label: "chantiers sécurisés" },
        { value: "24/7", label: "surveillance et alertes temps réel" },
        { value: "48h", label: "déploiement rapide sur site" },
      ],
    },
    section2: {
      heading: "Systèmes autonomes et connectés",
      description: "Alimentés par panneau solaire ou groupe électrogène, nos systèmes fonctionnent même en l'absence de réseau filaire. Connexion 4G et remontée d'alertes sur smartphone.",
      imageSrc: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système de sûreté autonome sur chantier",
    },
    section3: {
      heading: "Adapté à chaque phase du chantier",
      description: "Le périmètre de sécurité évolue avec l'avancement des travaux. Nous ajustons les dispositifs au fur et à mesure de vos besoins.",
      imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Évolution du dispositif de sûreté chantier",
      bullets: [
        { label: "Vidéosurveillance et détection périmétrique" },
        { label: "Contrôle d'accès et gestion des entrées" },
        { label: "Alertes temps réel et levée de doute vidéo" },
      ],
    },
  },
  "detection-perimetrique": {
    heroStats: {
      tagline: "Identifiez les menaces avant qu'elles n'atteignent vos bâtiments",
      stats: [
        { value: "100%", label: "du périmètre couvert" },
        { value: "<3s", label: "temps de détection" },
        { value: "0", label: "fausse alarme après calibration" },
      ],
          advantages: [{"icon":"target","title":"Détection avant l'intrusion","text":"Le périmètre est sécurisé en amont de vos bâtiments — la menace est identifiée avant d'atteindre vos installations."},{"icon":"eye","title":"Levée de doute vidéo instantanée","text":"Chaque alerte est corrélée à vos caméras pour confirmer ou écarter la menace en quelques secondes."},{"icon":"globe","title":"Fiabilité par tous les temps","text":"Couverture de plusieurs kilomètres avec une précision constante, quelles que soient les conditions météo."}],
    },
    section1: {
      heading: "Protection périmétrique de vos sites",
      description: "Barrières infrarouges, câbles enterrés, vidéo-analyse : nous concevons des périmètres de sécurité adaptés à la topographie et aux contraintes de chaque site.",
      imageSrc: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Détection périmétrique sur site industriel",
      stats: [
        { value: "100%", label: "du périmètre couvert sans angle mort" },
        { value: "< 3s", label: "temps de détection d'une intrusion" },
        { value: "0", label: "fausse alarme tolérée après calibration" },
      ],
    },
    section2: {
      heading: "Corrélation vidéo & levée de doute",
      description: "Les alertes sont automatiquement corrélées à la vidéosurveillance pour une levée de doute immédiate sur votre poste de supervision ou votre smartphone.",
      imageSrc: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Corrélation vidéo et levée de doute",
    },
    section3: {
      heading: "Technologies adaptées au terrain",
      description: "Infrarouge, hyperfréquence, fibre optique enterrée ou vidéo-analyse : nous sélectionnons la technologie adaptée à votre environnement.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Technologies de détection périmétrique",
      bullets: [
        { label: "Barrières IR, câbles enterrés, vidéo-analyse" },
        { label: "Corrélation avec la vidéosurveillance" },
        { label: "Remontée d'alertes temps réel" },
      ],
    },
  },
  "boitiers-a-clefs": {
    heroStats: {
      tagline: "Chaque retrait horodaté, chaque anomalie signalée en temps réel",
      stats: [
        { value: "100%", label: "des mouvements tracés" },
        { value: "0", label: "clé perdue" },
        { value: "Badge", label: "attribution et restitution" },
      ],
          advantages: [{"icon":"lock","title":"Chaque clé tracée par badge","text":"Retrait et restitution horodatés automatiquement — vous savez qui détient quelle clé à chaque instant."},{"icon":"zap","title":"Alertes en cas d'anomalie","text":"Clé non restituée, ouverture hors horaires ou tentative non autorisée : notification immédiate."},{"icon":"bar-chart","title":"Historique complet et opposable","text":"Traçabilité complète consultable en temps réel, exploitable en cas d'audit ou d'incident."}],
    },
    section1: {
      heading: "Gestion sécurisée de vos clés",
      description: "Armoires et boîtiers connectés pour centraliser, tracer et sécuriser la gestion de vos clés : attribution par badge, historique complet et alertes en cas d'anomalie.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Armoire à clés sécurisée et connectée",
      stats: [
        { value: "100%", label: "des mouvements de clés tracés" },
        { value: "0", label: "clé perdue grâce à la traçabilité" },
        { value: "Badge", label: "attribution et restitution par badge" },
      ],
    },
    section2: {
      heading: "Traçabilité & alertes",
      description: "Historique complet des attributions, alertes de non-restitution et rapports d'utilisation pour une gestion transparente et auditable.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Traçabilité des clés et alertes",
    },
    section3: {
      heading: "Adapté à votre activité",
      description: "Hôtels, résidences, régies immobilières, sites multi-occupants : la solution s'adapte à votre volumétrie et à vos processus métier.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Solutions de gestion de clés par secteur",
      bullets: [
        { label: "Armoires et boîtiers connectés" },
        { label: "Attribution par badge et historique complet" },
        { label: "Alertes de non-restitution et rapports" },
      ],
    },
  },
  "portail-portique-barriere": {
    heroStats: {
      tagline: "Filtrez les flux sans ralentir l'activité de vos sites",
      stats: [
        { value: "+500", label: "accès automatisés" },
        { value: "100%", label: "intégration contrôle d'accès" },
        { value: "24/7", label: "fonctionnement continu" },
      ],
          advantages: [{"icon":"lock","title":"Accès par badge, plaque ou code","text":"Seuls les utilisateurs autorisés passent — toute tentative non reconnue est bloquée et enregistrée."},{"icon":"settings","title":"Règles paramétrables","text":"Horaires, niveaux d'autorisation et sens de circulation définis selon vos besoins opérationnels."},{"icon":"layers","title":"Intégré à votre écosystème","text":"Connecté à votre contrôle d'accès, interphonie et vidéosurveillance pour un pilotage cohérent."}],
    },
    section1: {
      heading: "Accès véhicules & piétons automatisés",
      description: "Motorisation, contrôle d'accès et automatisation de vos portails, portiques et barrières, intégrés à votre écosystème de sécurité.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Portail motorisé et barrière automatique",
      stats: [
        { value: "+500", label: "accès automatisés installés" },
        { value: "100%", label: "intégration contrôle d'accès et vidéo" },
        { value: "24/7", label: "fonctionnement sans interruption" },
      ],
    },
    section2: {
      heading: "Intégration & paramétrage",
      description: "Portails coulissants, battants, portiques piétons et barrières levantes connectés à vos systèmes de contrôle d'accès, interphonie et vidéosurveillance.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration portail avec contrôle d'accès",
    },
    section3: {
      heading: "Maintenance & fiabilité",
      description: "Paramétrage horaire, gestion des flux et maintenance préventive inclus pour un fonctionnement fiable au quotidien.",
      imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Maintenance des accès automatisés",
      bullets: [
        { label: "Motorisation et automatisation des accès" },
        { label: "Intégration contrôle d'accès et vidéo" },
        { label: "Maintenance préventive et paramétrage horaire" },
      ],
    },
  },
  "videophonie": {
    heroStats: {
      tagline: "Voyez, parlez et ouvrez depuis n'importe où",
      stats: [
        { value: "IP", label: "technologie full IP" },
        { value: "100%", label: "compatible contrôle d'accès" },
        { value: "Mobile", label: "déverrouillage smartphone" },
      ],
          advantages: [{"icon":"eye","title":"Contrôle visuel de chaque visiteur","text":"Image HD de la platine de rue, conversation audio et déverrouillage à distance en un seul geste."},{"icon":"globe","title":"Gestion multi-sites centralisée","text":"Pilotez tous vos accès depuis une seule application mobile, où que vous soyez."},{"icon":"layers","title":"Compatible contrôle d'accès existant","text":"S'intègre à vos systèmes en place pour un parcours visiteur fluide et sécurisé."}],
    },
    section1: {
      heading: "Vidéophonie IP pour vos bâtiments",
      description: "Platines de rue, postes intérieurs et connexion smartphone : nous installons des solutions de vidéophonie compatibles avec vos systèmes de contrôle d'accès.",
      imageSrc: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Vidéophonie IP et interphone vidéo",
      stats: [
        { value: "IP", label: "technologie full IP pour l'évolutivité" },
        { value: "100%", label: "compatible avec le contrôle d'accès" },
        { value: "Mobile", label: "déverrouillage à distance par smartphone" },
      ],
    },
    section2: {
      heading: "Confort & sécurité des accès",
      description: "Appel distant, déverrouillage à distance et intégration smartphone : vos résidents et collaborateurs gèrent les accès simplement depuis leur téléphone.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion des accès par vidéophonie",
    },
    section3: {
      heading: "Solutions pour tous les bâtiments",
      description: "Résidentiel, tertiaire, santé : nous adaptons la solution au type de bâtiment et au volume d'utilisateurs.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Vidéophonie adaptée à chaque bâtiment",
      bullets: [
        { label: "Platines de rue IP et postes intérieurs" },
        { label: "Appel et déverrouillage à distance" },
        { label: "Intégration contrôle d'accès existant" },
      ],
    },
  },
  "videosurveillance": {
    heroStats: {
      tagline: "Des caméras qui analysent, alertent et s'adaptent à vos besoins",
      stats: [
        { value: "+300", label: "systèmes déployés" },
        { value: "96%", label: "de satisfaction client" },
        { value: "RGPD", label: "conformité CNIL intégrée" },
      ],
          advantages: [{"icon":"cpu","title":"Vidéo-analyse IA embarquée","text":"Détection de franchissement, comptage, reconnaissance de plaques — vos caméras deviennent des capteurs intelligents."},{"icon":"zap","title":"Alerte instantanée, pas de replay","text":"Vous êtes prévenu en temps réel au lieu de découvrir l'incident en épluchant des heures de vidéo."},{"icon":"shield-check","title":"Conforme RGPD, évolutif sans limite","text":"Ajout de caméras, extension multi-sites ou intégration supervision — le système grandit avec vous."}],
    },
    section1: {
      heading: "Vidéosurveillance IP professionnelle",
      description: "Conception, installation et paramétrage de systèmes vidéo IP : caméras fixes, PTZ, thermiques, stockage NVR/cloud et vidéo-analyse embarquée.",
      imageSrc: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système de vidéosurveillance IP professionnel",
      stats: [
        { value: "+300", label: "systèmes de vidéosurveillance déployés" },
        { value: "96%", label: "de satisfaction client" },
        { value: "RGPD", label: "conformité CNIL intégrée" },
      ],
    },
    section2: {
      heading: "Vidéo-analyse & intelligence embarquée",
      description: "Détection de mouvement, comptage, reconnaissance de plaques : les caméras deviennent des capteurs intelligents au service de votre sécurité et de votre exploitation.",
      imageSrc: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Vidéo-analyse et intelligence embarquée",
    },
    section3: {
      heading: "Stockage, conformité & évolutivité",
      description: "NVR sur site ou stockage cloud, rétention conforme RGPD/CNIL et architecture dimensionnée pour évoluer avec vos besoins.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Stockage vidéo et conformité RGPD",
      bullets: [
        { label: "Caméras fixes, PTZ, thermiques et panoramiques" },
        { label: "Vidéo-analyse et détection intelligente" },
        { label: "Stockage NVR/cloud conforme RGPD" },
      ],
    },
  },
  "supervision-unifiee": {
    heroStats: {
      tagline: "Fini les logiciels éparpillés — une vision complète en un coup d'œil",
      stats: [
        { value: "1", label: "interface pour tous les systèmes" },
        { value: "<10s", label: "corrélation des événements" },
        { value: "Multi", label: "sites supervisés" },
      ],
          advantages: [{"icon":"layers","title":"Tous vos systèmes sur un seul écran","text":"Vidéo, intrusion, accès et GTB centralisés dans un tableau de bord unique avec plans interactifs."},{"icon":"zap","title":"Corrélation automatique des événements","text":"Le système détecte les scénarios complexes et déclenche les procédures adaptées sans intervention manuelle."},{"icon":"bar-chart","title":"Rapports et tableaux de bord","text":"Données fiables pour piloter votre sûreté, générées automatiquement et personnalisables."}],
    },
    section1: {
      heading: "Pilotage centralisé de tous vos systèmes",
      description: "Vidéosurveillance, contrôle d'accès, intrusion et GTB réunis dans une plateforme unique pour une vision temps réel de la sécurité de vos sites.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Plateforme de supervision unifiée",
      stats: [
        { value: "1", label: "interface unique pour tous vos systèmes" },
        { value: "< 10s", label: "corrélation et affichage des événements" },
        { value: "Multi", label: "sites supervisés depuis un point central" },
      ],
    },
    section2: {
      heading: "Corrélation d'événements & levée de doute",
      description: "Les événements intrusion, accès et vidéo sont corrélés automatiquement. L'opérateur visualise la situation en un clic pour une prise de décision rapide.",
      imageSrc: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Corrélation d'événements sur supervision",
    },
    section3: {
      heading: "Plans interactifs & rapports",
      description: "Plans de bâtiment interactifs, historique des événements et rapports automatisés pour un pilotage efficace et une traçabilité complète.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Plans interactifs et reporting supervision",
      bullets: [
        { label: "Intégration vidéo, intrusion, accès et GTB" },
        { label: "Plans interactifs et levée de doute vidéo" },
        { label: "Rapports automatisés et historique complet" },
      ],
    },
  },
  "controle-dacces": {
    heroStats: {
      tagline: "Traçabilité complète et gestion centralisée, même multi-sites",
      stats: [
        { value: "+500", label: "points d'accès gérés" },
        { value: "100%", label: "des droits audités" },
        { value: "Bio", label: "multi-technologies" },
      ],
          advantages: [{"icon":"lock","title":"Droits gérés depuis une console unique","text":"Création, modification et révocation instantanées des accès, même sur plusieurs sites simultanément."},{"icon":"eye","title":"Corrélation vidéo de chaque accès","text":"Chaque tentative d'accès est associée aux images pour une levée de doute immédiate."},{"icon":"bar-chart","title":"Traçabilité complète des mouvements","text":"Historique détaillé de qui a accédé où et quand, exploitable en cas d'incident ou d'audit."}],
    },
    section1: {
      heading: "Contrôle d'accès sur mesure",
      description: "Lecteurs de badges, biométrie, serrures connectées et gestion centralisée des droits pour sécuriser vos accès selon la sensibilité de chaque zone.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Contrôle d'accès professionnel par badge",
      stats: [
        { value: "+500", label: "points d'accès gérés pour nos clients" },
        { value: "100%", label: "des droits gérés et audités" },
        { value: "Bio", label: "biométrie et lecteurs multi-technologies" },
      ],
    },
    section2: {
      heading: "Gestion centralisée des droits",
      description: "Attribution, révocation et audit des droits depuis une console unique. Intégration annuaire (Active Directory, LDAP) pour automatiser les mouvements de personnel.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Console de gestion des droits d'accès",
    },
    section3: {
      heading: "Intégration écosystème sécurité",
      description: "Le contrôle d'accès s'intègre avec la vidéosurveillance, l'interphonie et la supervision pour un écosystème de sécurité cohérent.",
      imageSrc: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration contrôle d'accès et vidéo",
      bullets: [
        { label: "Badges, biométrie et serrures connectées" },
        { label: "Gestion centralisée et intégration annuaire" },
        { label: "Intégration vidéo, intrusion et supervision" },
      ],
    },
  },
  "alarme-anti-intrusion": {
    heroStats: {
      tagline: "Une protection active connectée à des professionnels, 24h/24",
      stats: [
        { value: "+300", label: "systèmes installés" },
        { value: "<30s", label: "alerte et levée de doute" },
        { value: "NF", label: "conformité normes" },
      ],
          advantages: [{"icon":"shield-check","title":"Télésurveillance professionnelle 24h/24","text":"Chaque alerte est traitée par des opérateurs avec levée de doute vidéo et possibilité d'intervention."},{"icon":"zap","title":"Réaction en quelques secondes","text":"Alerte sonore, notification instantanée et levée de doute vidéo déclenchées simultanément."},{"icon":"settings","title":"Dimensionné et maintenu pour votre site","text":"Chaque composant est testé, paramétré et maintenu pour garantir une fiabilité maximale."}],
    },
    section1: {
      heading: "Détection d'intrusion fiable et réactive",
      description: "Centrales, détecteurs volumétriques, contacts d'ouverture et sirènes dimensionnés pour votre site, avec télésurveillance et levée de doute intégrées.",
      imageSrc: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système alarme anti-intrusion professionnel",
      stats: [
        { value: "+300", label: "systèmes anti-intrusion installés" },
        { value: "< 30s", label: "alerte et levée de doute" },
        { value: "NF", label: "conformité aux normes en vigueur" },
      ],
    },
    section2: {
      heading: "Télésurveillance & intervention",
      description: "Connexion à un centre de télésurveillance, levée de doute vidéo et intervention possible selon vos contrats et exigences réglementaires.",
      imageSrc: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Télésurveillance et levée de doute",
    },
    section3: {
      heading: "Maintenance & conformité",
      description: "Tests périodiques, maintenance préventive et mise à jour des systèmes pour une protection fiable dans la durée.",
      imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Maintenance système anti-intrusion",
      bullets: [
        { label: "Centrales, détecteurs et sirènes dimensionnés" },
        { label: "Télésurveillance et levée de doute vidéo" },
        { label: "Maintenance préventive et tests réguliers" },
      ],
    },
  },

  /* ──────── Infrastructure réseau ──────── */
  "inpt": {
    heroStats: {
      tagline: "Le socle certifié sur lequel reposent tous vos systèmes connectés",
      stats: [
        { value: "+50", label: "bâtiments équipés" },
        { value: "100%", label: "conformité normes" },
        { value: "25 ans", label: "durée de vie" },
      ],
          advantages: [{"icon":"layers","title":"Socle de tous vos systèmes","text":"Téléphonie, wifi, vidéosurveillance, GTB — tout repose sur une infrastructure numérique bien conçue."},{"icon":"shield-check","title":"Certifié et documenté","text":"Chaque lien est certifié selon les normes NF C 15-100 et EN 50173, avec documentation complète."},{"icon":"settings","title":"Dimensionné pour évoluer","text":"Montée en débit, ajout de postes, convergence IP — votre infrastructure anticipe vos besoins futurs."}],
    },
    section1: {
      heading: "Infrastructures numériques pour bâtiments",
      description: "Étude, conception et déploiement d'INPT pour bâtiments neufs ou en rénovation : câblage structuré, baies de brassage, locaux techniques conformes.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Infrastructure numérique de bâtiment",
      stats: [
        { value: "+50", label: "bâtiments équipés en INPT" },
        { value: "100%", label: "conformité normes en vigueur" },
        { value: "25 ans", label: "durée de vie des infrastructures" },
      ],
    },
    section2: {
      heading: "Dimensionné pour l'avenir",
      description: "Nos installations sont conçues pour supporter vos usages actuels (data, voix, vidéo) et futurs (IoT, Wi-Fi 6E) sans reprise de câblage.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Infrastructure réseau évolutive",
    },
    section3: {
      heading: "Certification & documentation",
      description: "Chaque liaison est certifiée, les plans de câblage documentés et les baies étiquetées pour une exploitation et une maintenance facilitées.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Certification câblage et documentation",
      bullets: [
        { label: "Câblage structuré cuivre et fibre" },
        { label: "Baies de brassage et locaux techniques" },
        { label: "Certification des liens et documentation" },
      ],
    },
  },
  "wifi": {
    heroStats: {
      tagline: "Conçu pour la haute densité, le roaming et la supervision proactive",
      stats: [
        { value: "100%", label: "couverture garantie" },
        { value: "Wi-Fi 6", label: "dernière génération" },
        { value: "BYOD", label: "segmentation sécurisée" },
      ],
          advantages: [{"icon":"wifi","title":"Roaming transparent entre zones","text":"Vos utilisateurs passent d'une zone à l'autre sans coupure ni reconnexion."},{"icon":"target","title":"Site survey et positionnement optimisé","text":"Cartographie terrain des zones d'ombre et interférences pour un placement précis des bornes."},{"icon":"eye","title":"Supervision proactive","text":"Les anomalies sont détectées et traitées avant que vos utilisateurs ne les remarquent."}],
    },
    section1: {
      heading: "Wifi professionnel haute performance",
      description: "Couverture, capacité, sécurité et roaming : nous concevons des réseaux wifi adaptés aux contraintes de vos bâtiments et à la densité d'utilisateurs.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Réseau wifi professionnel haute densité",
      stats: [
        { value: "100%", label: "de couverture garantie après site survey" },
        { value: "Wi-Fi 6", label: "technologies dernière génération" },
        { value: "BYOD", label: "segmentation sécurisée des flux" },
      ],
    },
    section2: {
      heading: "Site survey & cartographie",
      description: "Étude terrain, simulation de couverture et cartographie des interférences pour un déploiement optimal dès la première installation.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Site survey wifi et cartographie de couverture",
    },
    section3: {
      heading: "Sécurité & gestion centralisée",
      description: "Portail captif, RADIUS, segmentation VLAN et contrôleur centralisé pour un réseau wifi sécurisé et administrable.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sécurité réseau wifi entreprise",
      bullets: [
        { label: "Site survey et cartographie de couverture" },
        { label: "Points d'accès Wi-Fi 6 / 6E" },
        { label: "Sécurité, portail captif et gestion centralisée" },
      ],
    },
  },
  "antenne-gsm-4g-5g": {
    heroStats: {
      tagline: "Fini les zones blanches, même en sous-sol et béton armé",
      stats: [
        { value: "100%", label: "de couverture intérieure" },
        { value: "4G/5G", label: "technologies supportées" },
        { value: "ERP", label: "conformité opérateurs" },
      ],
          advantages: [{"icon":"wifi","title":"Signal restauré partout","text":"Sous-sols, parkings, béton armé — le signal 4G/5G est rétabli dans les zones les plus contraintes."},{"icon":"shield-check","title":"Conforme aux exigences opérateurs","text":"Installation DAS validée par les opérateurs, sans risque de non-conformité."},{"icon":"target","title":"Dimensionné au juste besoin","text":"Étude de couverture préalable pour une solution adaptée, sans sur-investissement."}],
    },
    section1: {
      heading: "Couverture mobile intérieure garantie",
      description: "Systèmes d'amplification et antennes distribuées (DAS) pour garantir la couverture mobile dans vos bâtiments, parkings et sous-sols.",
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Couverture mobile intérieure DAS",
      stats: [
        { value: "100%", label: "de couverture intérieure atteinte" },
        { value: "4G/5G", label: "technologies supportées" },
        { value: "ERP", label: "conformité opérateurs et réglementation" },
      ],
    },
    section2: {
      heading: "Étude de couverture & conformité",
      description: "Mesures terrain, simulation et validation avec les opérateurs pour des installations conformes et performantes, même en environnement complexe.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Étude de couverture mobile",
    },
    section3: {
      heading: "Environnements complexes couverts",
      description: "Béton, sous-sols, grandes surfaces et parkings : nos solutions sont conçues pour les environnements les plus exigeants en propagation radio.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Couverture mobile en environnement complexe",
      bullets: [
        { label: "Amplificateurs et antennes distribuées (DAS)" },
        { label: "Études de couverture et mesures terrain" },
        { label: "Conformité opérateurs et réglementation" },
      ],
    },
  },
  "reseau-vdi": {
    heroStats: {
      tagline: "Une infrastructure documentée, prête pour les 20 prochaines années",
      stats: [
        { value: "Cat.6a", label: "cuivre haute performance" },
        { value: "100%", label: "des liens certifiés" },
        { value: "25 ans", label: "garantie constructeur" },
      ],
          advantages: [{"icon":"layers","title":"Infrastructure propre et étiquetée","text":"Câblage structuré, certifié et documenté — pas un plat de spaghettis dans une armoire."},{"icon":"settings","title":"Évolutif vers 10 Gbit/s","text":"Compatible vidéosurveillance IP, GTB et wifi sans reprendre le câblage existant."},{"icon":"clock","title":"Rentabilisé sur 15 à 20 ans","text":"Un investissement structurant qui supporte toutes vos évolutions technologiques futures."}],
    },
    section1: {
      heading: "Câblage VDI structuré et certifié",
      description: "Conception et réalisation de réseaux voix-données-images conformes aux normes : cuivre Cat.6/6a, fibre optique, rocades et baies de brassage.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Câblage VDI structuré professionnel",
      stats: [
        { value: "Cat.6a", label: "câblage cuivre haute performance" },
        { value: "100%", label: "des liens certifiés et recettés" },
        { value: "25 ans", label: "garantie constructeur sur le câblage" },
      ],
    },
    section2: {
      heading: "Recette & certification",
      description: "Certification de chaque lien, rapport de mesures et documentation complète pour une infrastructure maintenable et évolutive.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Certification et recette câblage VDI",
    },
    section3: {
      heading: "Documentation & évolutivité",
      description: "Plans de câblage, étiquetage des baies et documentation à jour pour faciliter les interventions et les extensions futures.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Documentation réseau VDI",
      bullets: [
        { label: "Cuivre Cat.6/6a et fibre optique" },
        { label: "Certification et recette de chaque lien" },
        { label: "Plans, étiquetage et documentation complète" },
      ],
    },
  },
  "audit-de-cablage": {
    heroStats: {
      tagline: "Mesurez, diagnostiquez et priorisez avant d'investir",
      stats: [
        { value: "100%", label: "des liens mesurés" },
        { value: "48h", label: "rapport avec recommandations" },
        { value: "Plan", label: "cartographie livrée" },
      ],
          advantages: [{"icon":"target","title":"Mesures certifiées sur chaque lien","text":"Atténuation, diaphonie, catégorie réelle — chaque point faible est identifié avec précision."},{"icon":"bar-chart","title":"Rapport clair et priorisé","text":"Recommandations classées par criticité et budget pour investir là où ça compte."},{"icon":"shield-check","title":"Indispensable avant toute évolution","text":"Extension, migration ou déménagement : ne construisez pas sur des fondations fragiles."}],
    },
    section1: {
      heading: "Audit complet de vos infrastructures câblées",
      description: "Mesures, certification et cartographie de vos réseaux existants : identification des points faibles, non-conformités et axes d'amélioration.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Audit de câblage réseau",
      stats: [
        { value: "100%", label: "des liens mesurés et qualifiés" },
        { value: "48h", label: "pour le rapport avec recommandations" },
        { value: "Plan", label: "cartographie complète livrée" },
      ],
    },
    section2: {
      heading: "Rapport & recommandations priorisées",
      description: "Rapport détaillé avec identification des non-conformités, des risques et des recommandations priorisées pour fiabiliser vos réseaux.",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Rapport d'audit de câblage",
    },
    section3: {
      heading: "Préparer vos projets d'évolution",
      description: "L'audit sert de base pour dimensionner vos projets réseau : extension, migration fibre, Wi-Fi haute densité ou convergence IP.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Préparation projet réseau après audit",
      bullets: [
        { label: "Mesures et certification des liens existants" },
        { label: "Cartographie et identification des non-conformités" },
        { label: "Recommandations priorisées et chiffrées" },
      ],
    },
  },
  "fibre-optique": {
    heroStats: {
      tagline: "Débit maximal, latence minimale et immunité aux interférences",
      stats: [
        { value: "10 Gbps+", label: "bande passante" },
        { value: "100%", label: "soudures mesurées OTDR" },
        { value: "25 ans", label: "durée de vie" },
      ],
          advantages: [{"icon":"zap","title":"Débit élevé, latence minimale","text":"La seule technologie qui garantit des performances constantes sur de longues distances."},{"icon":"shield-check","title":"Chaque lien certifié avant livraison","text":"Soudures contrôlées par mesures OTDR pour des liaisons fiables et pérennes."},{"icon":"settings","title":"Toute la chaîne maîtrisée","text":"Étude de tracé, tirage, soudure, raccordement et certification — un seul prestataire."}],
    },
    section1: {
      heading: "Déploiement fibre optique professionnel",
      description: "Liens monomode et multimode pour vos interconnexions inter-bâtiments, campus et datacenters. Soudure, mesures et certification incluses.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Déploiement fibre optique entreprise",
      stats: [
        { value: "10 Gbps+", label: "bande passante disponible" },
        { value: "100%", label: "des soudures mesurées par réflectométrie" },
        { value: "25 ans", label: "durée de vie de l'infrastructure" },
      ],
    },
    section2: {
      heading: "Soudure & certification",
      description: "Soudures par fusion, mesures réflectométriques OTDR et certification de chaque lien pour des liaisons fiables et pérennes.",
      imageSrc: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Soudure et certification fibre optique",
    },
    section3: {
      heading: "Campus, inter-bâtiments & datacenter",
      description: "Nous dimensionnons et déployons la fibre pour tous vos cas d'usage : campus, liaisons inter-bâtiments, backbone datacenter et raccordement opérateur.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Fibre optique campus et datacenter",
      bullets: [
        { label: "Fibre monomode et multimode" },
        { label: "Soudure par fusion et mesures OTDR" },
        { label: "Certification et documentation complète" },
      ],
    },
  },

  /* ──────── Audiovisuel ──────── */
  "reservation-salle-de-reunion": {
    heroStats: {
      tagline: "Réservation en un geste, libération automatique, données exploitables",
      stats: [
        { value: "+30%", label: "d'utilisation effective" },
        { value: "0", label: "conflit de réservation" },
        { value: "M365", label: "intégration Microsoft & Google" },
      ],
          advantages: [{"icon":"clock","title":"Libération automatique des salles vides","text":"Les capteurs de présence détectent les no-shows et libèrent le créneau en temps réel."},{"icon":"layers","title":"Synchronisé avec votre calendrier","text":"Connecté à Microsoft 365 et Google Workspace pour une gestion sans double saisie."},{"icon":"bar-chart","title":"Données d'occupation exploitables","text":"Identifiez les salles sous-utilisées et les créneaux de pointe pour optimiser vos espaces."}],
    },
    section1: {
      heading: "Optimisez l'usage de vos salles",
      description: "Tablettes murales, intégration calendrier et capteurs d'occupation pour une gestion fluide de vos espaces de réunion.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système de réservation de salle de réunion",
      stats: [
        { value: "+30%", label: "d'utilisation effective des salles" },
        { value: "0", label: "conflit de réservation" },
        { value: "M365", label: "intégration Microsoft et Google" },
      ],
    },
    section2: {
      heading: "Réservation & libération en temps réel",
      description: "Réservation depuis le calendrier ou la tablette, libération automatique en cas de no-show et visibilité temps réel sur la disponibilité.",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Tablette de réservation et calendrier",
    },
    section3: {
      heading: "Données d'occupation pour décider",
      description: "Les données de fréquentation alimentent vos décisions d'aménagement : taux d'occupation, pics d'utilisation et salles sous-utilisées.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Données d'occupation des salles",
      bullets: [
        { label: "Tablettes murales et intégration calendrier" },
        { label: "Capteurs d'occupation et libération automatique" },
        { label: "Reporting et données pour l'aménagement" },
      ],
    },
  },
  "musique-dambiance": {
    heroStats: {
      tagline: "Chaque espace a sa propre atmosphère, pilotée à distance",
      stats: [
        { value: "100%", label: "couverture uniforme" },
        { value: "Multi", label: "zones programmables" },
        { value: "SACEM", label: "compatibilité droits" },
      ],
          advantages: [{"icon":"settings","title":"Zonage et programmation automatique","text":"Chaque espace a sa propre ambiance, pilotée à distance sans intervention manuelle."},{"icon":"eye","title":"Matériel invisible et esthétique","text":"Enceintes encastrées et amplificateurs réseau qui se fondent dans votre décor."},{"icon":"shield-check","title":"Maintenance incluse","text":"Rendu sonore constant dans la durée, sans dégradation ni intervention de votre part."}],
    },
    section1: {
      heading: "Ambiance sonore professionnelle",
      description: "Sonorisation d'ambiance pour commerces, hôtels, restaurants et espaces d'accueil : sélection des sources, zonage et programmation horaire.",
      imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sonorisation d'ambiance professionnelle",
      stats: [
        { value: "100%", label: "des zones couvertes uniformément" },
        { value: "Multi", label: "zones indépendantes programmables" },
        { value: "SACEM", label: "compatibilité droits musicaux" },
      ],
    },
    section2: {
      heading: "Zonage & programmation",
      description: "Chaque zone dispose de sa propre ambiance sonore, volume et programmation horaire. La gestion se fait depuis une interface centralisée.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Zonage et programmation sonore",
    },
    section3: {
      heading: "Matériel professionnel & maintenance",
      description: "Haut-parleurs encastrés, amplificateurs et sources professionnelles pour un rendu sonore constant et agréable dans la durée.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Équipements de sonorisation d'ambiance",
      bullets: [
        { label: "Sélection des sources et zonage" },
        { label: "Programmation horaire et gestion du volume" },
        { label: "Matériel professionnel et maintenance" },
      ],
    },
  },
  "ecrans-interactifs": {
    heroStats: {
      tagline: "Un seul écran qui remplace vidéoprojecteur, tableau blanc et barre de visio",
      stats: [
        { value: "4K", label: "résolution parfaite" },
        { value: "20+", label: "points de contact" },
        { value: "Teams", label: "compatible Teams & Zoom" },
      ],
          advantages: [{"icon":"layers","title":"Tout-en-un : annotation, partage et visio","text":"Un seul écran tactile qui remplace vidéoprojecteur, tableau blanc et barre de visioconférence."},{"icon":"globe","title":"Compatible Teams, Zoom et Meet","text":"Intégré à votre IT existant pour une adoption immédiate par vos équipes."},{"icon":"zap","title":"Productif dès le premier jour","text":"Dimensionné pour votre salle et vos usages — pas besoin de formation."}],
    },
    section1: {
      heading: "Collaboration tactile et interactive",
      description: "Écrans interactifs pour la collaboration, la présentation et la formation : annotation, partage d'écran et visioconférence intégrée.",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Écran interactif en salle de réunion",
      stats: [
        { value: "4K", label: "résolution pour une lisibilité parfaite" },
        { value: "20+", label: "points de contact simultanés" },
        { value: "Teams", label: "compatible Teams, Zoom et Google Meet" },
      ],
    },
    section2: {
      heading: "Intégration avec vos outils",
      description: "Compatible avec Microsoft Teams, Zoom et Google Meet. L'écran s'intègre dans votre environnement collaboratif existant sans rupture.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration écran interactif avec Teams",
    },
    section3: {
      heading: "Installation & accompagnement",
      description: "Installation, câblage, paramétrage et formation de vos équipes pour une adoption rapide et un usage quotidien fluide.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Installation écran interactif",
      bullets: [
        { label: "Écrans tactiles 4K pour collaboration" },
        { label: "Annotation, partage d'écran et visioconférence" },
        { label: "Installation et formation de vos équipes" },
      ],
    },
  },
  "affichage-dynamique": {
    heroStats: {
      tagline: "Remplacez l'affichage statique par un canal vivant et réactif",
      stats: [
        { value: "Multi", label: "sites pilotés" },
        { value: "24/7", label: "diffusion continue" },
        { value: "Flux", label: "météo, KPI, actualités" },
      ],
          advantages: [{"icon":"globe","title":"Pilotage multi-sites centralisé","text":"Mettez à jour tous vos écrans en quelques clics depuis une seule plateforme."},{"icon":"clock","title":"Programmation horaire et flux dynamiques","text":"Météo, KPI, actualités — le contenu s'adapte au contexte et au moment de la journée."},{"icon":"shield-check","title":"Écrans professionnels 24/7","text":"Luminosité et durabilité conçues pour un fonctionnement continu, pas du matériel grand public."}],
    },
    section1: {
      heading: "Communication visuelle digitale",
      description: "Écrans professionnels et gestion de contenu centralisée pour diffuser vos messages en temps réel : accueil, communication interne, affichage réglementaire.",
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Affichage dynamique professionnel",
      stats: [
        { value: "Multi", label: "sites pilotés depuis une seule interface" },
        { value: "24/7", label: "diffusion continue et programmée" },
        { value: "Flux", label: "intégration météo, actualités et KPI" },
      ],
    },
    section2: {
      heading: "Pilotage centralisé multi-sites",
      description: "Programmation horaire, gestion des playlists et diffusion ciblée par zone : vous contrôlez l'ensemble de vos écrans depuis une plateforme unique.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Pilotage centralisé affichage dynamique",
    },
    section3: {
      heading: "Contenus dynamiques & interactifs",
      description: "Intégration de flux temps réel (météo, réseaux sociaux, KPI), templates personnalisés et contenus interactifs pour un affichage vivant.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Contenus dynamiques sur écrans",
      bullets: [
        { label: "Écrans professionnels et players média" },
        { label: "Gestion de contenu et programmation centralisée" },
        { label: "Flux dynamiques et templates personnalisés" },
      ],
    },
  },
  "sonorisation-despaces": {
    heroStats: {
      tagline: "Chaque mot entendu clairement, du premier au dernier rang",
      stats: [
        { value: "100%", label: "d'intelligibilité" },
        { value: "EVAC", label: "conforme sécurité incendie" },
        { value: "DSP", label: "traitement numérique" },
      ],
          advantages: [{"icon":"target","title":"Étude acoustique sur site","text":"Volume, matériaux, réverbération — chaque paramètre est mesuré pour un résultat optimal."},{"icon":"shield-check","title":"Conforme EVAC/SSS si nécessaire","text":"Intégration de l'évacuation sonore incendie dans la même installation, une seule certification."},{"icon":"settings","title":"Calibration sur mesure","text":"Positionnement des enceintes et traitement du signal adaptés à votre configuration exacte."}],
    },
    section1: {
      heading: "Sonorisation professionnelle",
      description: "Auditoriums, salles de conférence et espaces événementiels : étude acoustique, choix des enceintes et traitement du signal pour une intelligibilité optimale.",
      imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Sonorisation d'auditorium professionnel",
      stats: [
        { value: "100%", label: "d'intelligibilité dans chaque zone" },
        { value: "EVAC", label: "systèmes conformes sécurité incendie" },
        { value: "DSP", label: "traitement numérique du signal" },
      ],
    },
    section2: {
      heading: "Étude acoustique & dimensionnement",
      description: "Nous réalisons l'étude acoustique de vos espaces pour dimensionner la sonorisation et garantir une couverture uniforme sans zone morte.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Étude acoustique pour sonorisation",
    },
    section3: {
      heading: "Évacuation sonore & conformité",
      description: "Systèmes EVAC/SSS conformes aux normes de sécurité incendie si nécessaire, intégrés à votre sonorisation d'ambiance.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système d'évacuation sonore conforme",
      bullets: [
        { label: "Enceintes, amplification et traitement DSP" },
        { label: "Étude acoustique et couverture uniforme" },
        { label: "EVAC/SSS conforme sécurité incendie" },
      ],
    },
  },
  "installation-de-videoprojecteurs-et-ecrans-de-projection": {
    heroStats: {
      tagline: "La technologie guidée par vos contraintes, pas par un catalogue",
      stats: [
        { value: "4K", label: "présentations nettes" },
        { value: "Laser", label: "sans lampe à remplacer" },
        { value: "100%", label: "intégration AV" },
      ],
          advantages: [{"icon":"target","title":"Technologie adaptée à votre salle","text":"Laser, courte focale ou lampe — le choix est guidé par la luminosité, la distance et votre budget."},{"icon":"layers","title":"Intégration AV complète","text":"Câblage, support, paramétrage colorimétrique et connexion à vos systèmes existants inclus."},{"icon":"eye","title":"Image nette et lumineuse garantie","text":"Chaque installation est calibrée pour offrir le meilleur rendu dans votre configuration."}],
    },
    section1: {
      heading: "Vidéoprojection professionnelle",
      description: "Vidéoprojecteurs courte focale, laser ou lampe, écrans motorisés ou fixes : la solution adaptée à la taille de la salle et aux usages.",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Vidéoprojecteur professionnel installé",
      stats: [
        { value: "4K", label: "résolution pour des présentations nettes" },
        { value: "Laser", label: "technologie sans lampe à remplacer" },
        { value: "100%", label: "intégration avec vos systèmes AV" },
      ],
    },
    section2: {
      heading: "Installation & câblage soignés",
      description: "Support plafond ou mural, câblage encastré et paramétrage optimal : une installation propre et professionnelle, prête à l'usage.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Installation vidéoprojecteur au plafond",
    },
    section3: {
      heading: "Intégration salle de réunion",
      description: "Le vidéoprojecteur s'intègre dans votre écosystème audiovisuel : partage sans fil, commutation de sources et pilotage tactile.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Vidéoprojecteur intégré en salle de réunion",
      bullets: [
        { label: "Vidéoprojecteurs courte focale, laser ou lampe" },
        { label: "Écrans motorisés ou fixes selon l'espace" },
        { label: "Câblage et intégration avec vos systèmes AV" },
      ],
    },
  },
  "integration-de-salles-de-reunion-connectees": {
    heroStats: {
      tagline: "Un seul bouton, zéro galère technique, compatibilité certifiée",
      stats: [
        { value: "1 clic", label: "pour lancer une réunion" },
        { value: "Teams", label: "certifié Teams & Zoom Rooms" },
        { value: "0", label: "câble à brancher" },
      ],
          advantages: [{"icon":"zap","title":"Opérationnel au premier clic","text":"Un seul bouton pour rejoindre la réunion — cadrage auto, micros sans écho, partage sans fil."},{"icon":"shield-check","title":"Certifié Teams Rooms / Zoom Rooms","text":"Compatibilité garantie, zéro problème d'interopérabilité entre les plateformes."},{"icon":"settings","title":"Zéro intervention IT salle par salle","text":"Supervision centralisée de tous les systèmes déployés pour vos équipes techniques."}],
    },
    section1: {
      heading: "Salles de réunion clé en main",
      description: "Caméra, micro, écran, partage sans fil et pilotage tactile : tous les équipements intégrés pour une expérience fluide en présentiel et à distance.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Salle de réunion connectée et équipée",
      stats: [
        { value: "1 clic", label: "pour lancer une réunion" },
        { value: "Teams", label: "certifié Teams Rooms et Zoom Rooms" },
        { value: "0", label: "câble à brancher pour les participants" },
      ],
    },
    section2: {
      heading: "Expérience hybride sans friction",
      description: "Les participants distants et présentiels bénéficient de la même qualité audio/vidéo grâce à des équipements professionnels calibrés et intégrés.",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Réunion hybride avec équipements intégrés",
    },
    section3: {
      heading: "Certifications & support",
      description: "Certifiés Microsoft Teams Rooms, Zoom Rooms et solutions tierces pour une compatibilité garantie. Support IT inclus.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Salle certifiée Teams Rooms",
      bullets: [
        { label: "Caméra, micro, écran et partage sans fil" },
        { label: "Pilotage tactile et démarrage en 1 clic" },
        { label: "Certifié Teams Rooms et Zoom Rooms" },
      ],
    },
  },
  "systeme-de-visioconference": {
    heroStats: {
      tagline: "Qualité broadcast de la huddle room à la salle de direction",
      stats: [
        { value: "4K", label: "qualité vidéo" },
        { value: "PTZ", label: "suivi automatique" },
        { value: "Multi", label: "Teams, Zoom, Webex" },
      ],
          advantages: [{"icon":"eye","title":"Cadrage automatique de l'orateur","text":"Les caméras PTZ suivent l'orateur actif pour une expérience naturelle et immersive."},{"icon":"zap","title":"Audio crystal clear","text":"Annulation d'écho, suppression de bruit et beamforming pour une intelligibilité parfaite."},{"icon":"settings","title":"Pilotage par panneau tactile unique","text":"Rejoindre, partager et ajuster le volume en un geste, sans formation nécessaire."}],
    },
    section1: {
      heading: "Visioconférence professionnelle",
      description: "De la huddle room à la salle de direction : caméras PTZ, barres de son, processeurs DSP et intégration plateforme pour une qualité audio/vidéo irréprochable.",
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système de visioconférence professionnel",
      stats: [
        { value: "4K", label: "qualité vidéo pour chaque participant" },
        { value: "PTZ", label: "caméras avec suivi automatique" },
        { value: "Multi", label: "compatibilité Teams, Zoom, Webex" },
      ],
    },
    section2: {
      heading: "Audio irréprochable",
      description: "Barres de son, micros de plafond et processeurs DSP pour une intelligibilité parfaite, même dans les grandes salles. Suppression d'écho et réduction de bruit intégrées.",
      imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Audio professionnel pour visioconférence",
    },
    section3: {
      heading: "Pilotage simplifié & support",
      description: "Interface de pilotage unifiée pour les utilisateurs et monitoring à distance pour votre équipe IT. Formation et support inclus.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Pilotage et support visioconférence",
      bullets: [
        { label: "Caméras PTZ et barres de son professionnelles" },
        { label: "Traitement audio DSP et suppression d'écho" },
        { label: "Compatible Teams, Zoom et Webex" },
      ],
    },
  },
  "mur-decrans-led-walls": {
    heroStats: {
      tagline: "Conception sur mesure, calibration professionnelle, fiabilité 24/7",
      stats: [
        { value: "∞", label: "taille sur mesure" },
        { value: "24/7", label: "fonctionnement continu" },
        { value: "HDR", label: "haute luminosité" },
      ],
          advantages: [{"icon":"eye","title":"Impact visuel hors norme","text":"Luminosité, contraste et taille d'image qu'aucun écran unitaire ne peut égaler."},{"icon":"settings","title":"Conception 100% sur mesure","text":"Choix du pitch, calibration colorimétrique et gestion thermique adaptés à votre espace."},{"icon":"shield-check","title":"Fiabilité 24/7 garantie","text":"Alimentation redondante et maintenance préventive pour un fonctionnement continu sans dégradation."}],
    },
    section1: {
      heading: "Murs d'images LED grand format",
      description: "Conception, installation et calibration de murs LED ou LCD pour supervision, accueil, retail et événementiel. Impact visuel maximal.",
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Mur d'écrans LED professionnel",
      stats: [
        { value: "∞", label: "taille et forme sur mesure" },
        { value: "24/7", label: "fonctionnement continu possible" },
        { value: "HDR", label: "rendu haute luminosité et contraste" },
      ],
    },
    section2: {
      heading: "Gestion de contenu centralisée",
      description: "Diffusion de contenus multi-sources, découpage en zones et programmation horaire depuis une interface centralisée.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion de contenu mur d'écrans",
    },
    section3: {
      heading: "Calibration & maintenance",
      description: "Calibration colorimétrique, maintenance préventive et remplacement de modules pour un affichage fiable et percutant dans la durée.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Calibration et maintenance mur LED",
      bullets: [
        { label: "LED ou LCD selon usage et budget" },
        { label: "Gestion de contenu multi-sources centralisée" },
        { label: "Calibration et maintenance préventive" },
      ],
    },
  },

  /* ──────── Divers ──────── */
  "systeme-dappel-durgence": {
    heroStats: {
      tagline: "Chaque alerte localisée, corrélée et transmise sans délai",
      stats: [
        { value: "100%", label: "conformité ERP" },
        { value: "<3s", label: "transmission de l'alerte" },
        { value: "Multi", label: "zones couvertes" },
      ],
          advantages: [{"icon":"zap","title":"Alerte instantanée avec localisation","text":"L'appel remonte sur votre supervision avec l'emplacement exact du dispositif activé."},{"icon":"eye","title":"Corrélation vidéo automatique","text":"Chaque alerte est associée à l'image de la caméra la plus proche pour identifier la situation."},{"icon":"shield-check","title":"Conforme aux normes ERP","text":"Positionnement, signalétique et retour de confirmation selon les règles d'accessibilité."}],
    },
    section1: {
      heading: "Appel d'urgence pour ERP et santé",
      description: "Dispositifs conformes aux normes ERP : boutons-poussoirs, tirettes, signalisation lumineuse et sonore avec remontée d'alertes centralisée.",
      imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système d'appel d'urgence en établissement",
      stats: [
        { value: "100%", label: "conformité réglementaire ERP" },
        { value: "< 3s", label: "transmission de l'alerte" },
        { value: "Multi", label: "zones et niveaux couverts" },
      ],
    },
    section2: {
      heading: "Intégration supervision",
      description: "Les alertes remontent sur votre système de supervision et/ou sur les terminaux du personnel pour une prise en charge immédiate.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration supervision appel d'urgence",
    },
    section3: {
      heading: "Installation & conformité",
      description: "Installation conforme, tests de fonctionnement et maintenance périodique pour garantir la fiabilité du dispositif en permanence.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Installation système appel d'urgence",
      bullets: [
        { label: "Boutons, tirettes et signalisation" },
        { label: "Remontée d'alertes centralisée" },
        { label: "Tests périodiques et maintenance" },
      ],
    },
  },
  "interphonie-eas": {
    heroStats: {
      tagline: "Intelligibilité garantie dans chaque zone, conformité certifiée",
      stats: [
        { value: "EAS", label: "conforme incendie" },
        { value: "100%", label: "couverture des espaces" },
        { value: "SSS", label: "sécurité sonore intégrée" },
      ],
          advantages: [{"icon":"target","title":"Intelligibilité garantie partout","text":"Étude acoustique et zonage pour que chaque message soit compris, même dans les espaces bruyants."},{"icon":"layers","title":"Un seul système, deux fonctions","text":"Interphonie de sécurité et évacuation sonore combinées dans une installation unique."},{"icon":"shield-check","title":"Certification commission de sécurité","text":"Installation documentée et certifiée pour satisfaire les exigences réglementaires."}],
    },
    section1: {
      heading: "Interphonie & évacuation sonore",
      description: "Interphonie de sécurité, évacuation sonore (EAS/SSS) et diffusion de messages de sécurité conformes à la réglementation incendie.",
      imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Interphonie et évacuation sonore",
      stats: [
        { value: "EAS", label: "systèmes conformes réglementation incendie" },
        { value: "100%", label: "couverture de tous les espaces" },
        { value: "SSS", label: "système de sécurité sonore intégré" },
      ],
    },
    section2: {
      heading: "Étude acoustique & zonage",
      description: "Études acoustiques, zonage des messages et certification pour des installations fiables qui répondent aux exigences de sécurité incendie.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Étude acoustique pour interphonie EAS",
    },
    section3: {
      heading: "Conformité & maintenance",
      description: "Vérifications périodiques, tests d'évacuation et mise à jour des messages pour une conformité continue.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Maintenance interphonie et évacuation",
      bullets: [
        { label: "Interphonie de sécurité et postes" },
        { label: "Évacuation sonore EAS/SSS conforme" },
        { label: "Études acoustiques et certification" },
      ],
    },
  },
  "gestion-des-visiteurs": {
    heroStats: {
      tagline: "De l'enregistrement au badge en moins de 30 secondes",
      stats: [
        { value: "-50%", label: "de temps d'accueil" },
        { value: "100%", label: "visites tracées RGPD" },
        { value: "Badge", label: "impression automatique" },
      ],
          advantages: [{"icon":"clock","title":"Accueil en moins de 30 secondes","text":"Pré-enregistrement, borne tactile, badge photo et notification de l'hôte — sans file d'attente."},{"icon":"lock","title":"Badges intégrés au contrôle d'accès","text":"Chaque visiteur n'accède qu'aux zones autorisées, avec traçabilité complète de sa visite."},{"icon":"shield-check","title":"Conforme RGPD","text":"Purge automatique des données personnelles selon les délais définis par votre politique."}],
    },
    section1: {
      heading: "Accueil digitalisé et sécurisé",
      description: "Bornes d'accueil, pré-enregistrement en ligne, impression de badges et notification des hôtes pour un accueil fluide et traçable.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Borne d'accueil et gestion des visiteurs",
      stats: [
        { value: "-50%", label: "de temps d'accueil par visiteur" },
        { value: "100%", label: "des visites tracées et conformes RGPD" },
        { value: "Badge", label: "impression automatique à l'arrivée" },
      ],
    },
    section2: {
      heading: "Intégration contrôle d'accès",
      description: "Le badge visiteur donne accès aux zones autorisées et se désactive automatiquement à l'expiration. Intégration complète avec votre contrôle d'accès.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Badge visiteur et contrôle d'accès",
    },
    section3: {
      heading: "Conformité RGPD & reporting",
      description: "Gestion des données visiteurs conforme RGPD, purge automatique et rapports de fréquentation pour votre pilotage.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Conformité RGPD gestion visiteurs",
      bullets: [
        { label: "Bornes d'accueil et pré-enregistrement" },
        { label: "Impression de badges et notification hôtes" },
        { label: "Conformité RGPD et reporting" },
      ],
    },
  },
  "systeme-dappel-malade": {
    heroStats: {
      tagline: "Du bouton au soignant en quelques secondes, avec escalade automatique",
      stats: [
        { value: "<5s", label: "transmission de l'appel" },
        { value: "100%", label: "des espaces couverts" },
        { value: "IP", label: "technologie flexible" },
      ],
          advantages: [{"icon":"zap","title":"Escalade automatique","text":"Si l'appel n'est pas pris en charge dans le délai défini, il remonte au poste de garde."},{"icon":"wifi","title":"Couverture IP et radio","text":"Fonctionne même dans les bâtiments anciens sans câblage dédié grâce aux technologies radio."},{"icon":"layers","title":"Intégration logiciels hospitaliers","text":"Connecté à vos GAP et DPI pour enrichir le suivi patient et simplifier le reporting."}],
    },
    section1: {
      heading: "Communication patient pour la santé",
      description: "Boutons d'appel, afficheurs couloir et médaillons adaptés aux parcours de soins en hôpitaux, cliniques et EHPAD.",
      imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système d'appel malade en milieu hospitalier",
      stats: [
        { value: "< 5s", label: "transmission de l'appel au soignant" },
        { value: "100%", label: "des chambres et espaces couverts" },
        { value: "IP", label: "technologie IP et radio pour flexibilité" },
      ],
    },
    section2: {
      heading: "Technologies IP et radio",
      description: "Technologies IP et radio pour une couverture complète, y compris dans les bâtiments anciens. Médaillons portables pour les patients mobiles.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Technologie IP et radio appel malade",
    },
    section3: {
      heading: "Intégration & traçabilité",
      description: "Intégration avec les systèmes de gestion hospitalière et traçabilité des appels pour améliorer la qualité des soins.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration système appel malade",
      bullets: [
        { label: "Boutons d'appel et afficheurs couloir" },
        { label: "Médaillons portables pour patients" },
        { label: "Traçabilité et intégration système hospitalier" },
      ],
    },
  },
  "systeme-de-demence": {
    heroStats: {
      tagline: "Sécurité sans contrainte, dignité préservée",
      stats: [
        { value: "0", label: "fugue grâce à la détection" },
        { value: "24/7", label: "surveillance discrète" },
        { value: "Confort", label: "préservé pour les résidents" },
      ],
          advantages: [{"icon":"lock","title":"Verrouillage conditionnel discret","text":"Les issues se verrouillent uniquement à l'approche d'un résident équipé — pas de contrainte pour les autres."},{"icon":"zap","title":"Alerte sans alarme anxiogène","text":"Le personnel est notifié en temps réel sans déclencher de sirène qui perturberait les résidents."},{"icon":"layers","title":"Centralisé avec l'appel malade","text":"Toutes les alertes remontent sur une seule interface pour une gestion simplifiée."}],
    },
    section1: {
      heading: "Protection des résidents vulnérables",
      description: "Bracelets, détecteurs de passage et verrouillage conditionnel des issues pour protéger les résidents atteints de troubles cognitifs.",
      imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système anti-errance en EHPAD",
      stats: [
        { value: "0", label: "fugue grâce à la détection temps réel" },
        { value: "24/7", label: "surveillance continue et discrète" },
        { value: "Confort", label: "préservé pour les résidents" },
      ],
    },
    section2: {
      heading: "Alertes temps réel pour les soignants",
      description: "Le personnel soignant est alerté en temps réel sur ses terminaux. Les zones de circulation sont surveillées sans contraindre les déplacements autorisés.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Alertes anti-errance pour soignants",
    },
    section3: {
      heading: "Intégration appel malade",
      description: "Le système s'intègre avec les solutions d'appel malade existantes pour un écosystème cohérent et centralisé.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration anti-errance et appel malade",
      bullets: [
        { label: "Bracelets et détecteurs de passage" },
        { label: "Verrouillage conditionnel des issues" },
        { label: "Intégration appel malade et supervision" },
      ],
    },
  },
  "systeme-de-ronde": {
    heroStats: {
      tagline: "Chaque passage prouvé, chaque retard signalé, chaque rapport automatisé",
      stats: [
        { value: "100%", label: "des passages horodatés" },
        { value: "0", label: "ronde manquée sans alerte" },
        { value: "PDF", label: "rapports automatiques" },
      ],
          advantages: [{"icon":"target","title":"Chaque passage géolocalisé et horodaté","text":"Points NFC/RFID scannés par smartphone au fil du parcours pour une preuve irréfutable."},{"icon":"zap","title":"Alerte immédiate en cas de retard","text":"Le poste de commandement est prévenu dès qu'un point de contrôle n'est pas scanné à temps."},{"icon":"bar-chart","title":"Rapports générés automatiquement","text":"Disponibles en temps réel pour vos clients, donneurs d'ordres et auditeurs."}],
    },
    section1: {
      heading: "Contrôle de ronde digitalisé",
      description: "Points de contrôle NFC/RFID, application mobile et rapports automatisés pour une traçabilité complète des rondes de sécurité.",
      imageSrc: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Système de contrôle de ronde NFC",
      stats: [
        { value: "100%", label: "des passages horodatés et tracés" },
        { value: "0", label: "ronde manquée sans alerte" },
        { value: "PDF", label: "rapports automatiques pour vos clients" },
      ],
    },
    section2: {
      heading: "Application mobile & temps réel",
      description: "L'agent scanne les points NFC avec son smartphone. Les passages sont remontés en temps réel et les anomalies déclenchent des alertes immédiates.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Application mobile de contrôle de ronde",
    },
    section3: {
      heading: "Reporting & preuves",
      description: "Historiques horodatés, alertes de non-passage et rapports PDF automatiques pour vos clients et donneurs d'ordres.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Reporting rondes de sécurité",
      bullets: [
        { label: "Points de contrôle NFC/RFID" },
        { label: "Application mobile et alertes temps réel" },
        { label: "Rapports automatiques et historique complet" },
      ],
    },
  },
  "gestion-de-stationnement": {
    heroStats: {
      tagline: "Identification, guidage et traçabilité de chaque véhicule",
      stats: [
        { value: "+20%", label: "de rotation des places" },
        { value: "LAPI", label: "lecture automatique plaques" },
        { value: "Temps réel", label: "supervision occupation" },
      ],
          advantages: [{"icon":"eye","title":"Lecture de plaques à l'entrée","text":"Chaque véhicule est identifié automatiquement, orienté et tracé jusqu'à sa sortie."},{"icon":"target","title":"Guidage dynamique à la place","text":"Les conducteurs sont dirigés vers les emplacements disponibles pour fluidifier la circulation."},{"icon":"layers","title":"Intégré au contrôle d'accès bâtiment","text":"Parkings réservés, visiteurs et livraisons gérés dans un seul système cohérent."}],
    },
    section1: {
      heading: "Gestion intelligente de vos parkings",
      description: "Barrières, lecteurs de plaques, bornes de paiement et guidage à la place pour des parkings fluides et bien gérés.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Gestion de stationnement intelligente",
      stats: [
        { value: "+20%", label: "de rotation des places" },
        { value: "LAPI", label: "lecture automatique des plaques" },
        { value: "Temps réel", label: "supervision de l'occupation" },
      ],
    },
    section2: {
      heading: "Supervision temps réel",
      description: "Statistiques d'occupation, alertes de saturation et rapports d'utilisation pour piloter vos parkings et optimiser les flux.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Supervision parking temps réel",
    },
    section3: {
      heading: "Intégration contrôle d'accès",
      description: "Le parking s'intègre dans l'écosystème de contrôle d'accès du bâtiment : badge unique, droits centralisés et traçabilité complète.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Intégration parking et contrôle d'accès",
      bullets: [
        { label: "Barrières et lecteurs de plaques (LAPI)" },
        { label: "Guidage à la place et bornes de paiement" },
        { label: "Intégration contrôle d'accès du bâtiment" },
      ],
    },
  },
  "detection-de-vapotage": {
    heroStats: {
      tagline: "Analyse de l'air en continu, alertes instantanées, vie privée respectée",
      stats: [
        { value: "100%", label: "des zones sensibles couvertes" },
        { value: "<10s", label: "détection et alerte" },
        { value: "0", label: "caméra nécessaire" },
      ],
          advantages: [{"icon":"cpu","title":"Analyse chimique en continu","text":"Les capteurs identifient les signatures du vapotage et du THC sans caméra ni micro."},{"icon":"zap","title":"Alertes temps réel au personnel","text":"Notification instantanée dès qu'un événement est détecté, avec historique des zones récurrentes."},{"icon":"layers","title":"Double usage sécurité / confort","text":"Mesure aussi la qualité de l'air (CO2, COV) dans le même dispositif."}],
    },
    section1: {
      heading: "Détection discrète du vapotage",
      description: "Capteurs environnementaux discrets pour détecter le vapotage dans les espaces clos : sanitaires, salles de classe, chambres d'hôtel.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Capteur de détection de vapotage",
      stats: [
        { value: "100%", label: "des zones sensibles couvertes" },
        { value: "< 10s", label: "détection et alerte" },
        { value: "0", label: "caméra nécessaire (respect vie privée)" },
      ],
    },
    section2: {
      heading: "Alertes & historique",
      description: "Alertes en temps réel sur les terminaux du personnel, historique des événements et intégration avec vos systèmes de supervision existants.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Alertes détection vapotage",
    },
    section3: {
      heading: "Respect de la vie privée",
      description: "Pas de caméra ni de micro : la détection se fait uniquement par analyse des particules dans l'air. Solution respectueuse de la vie privée.",
      imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
      imageAlt: "Capteur vapotage respectueux vie privée",
      bullets: [
        { label: "Capteurs discrets sans caméra ni micro" },
        { label: "Alertes temps réel et historique" },
        { label: "Intégration supervision existante" },
      ],
    },
    },
};
