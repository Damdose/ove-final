/**
 * Technologies utilisées par service — affichées sur les pages service
 * juste au-dessus du carrousel témoignages.
 *
 * Chaque entrée associe un slug de service à un ensemble de catégories,
 * chacune contenant une liste de marques / outils.
 */

export interface TechnologyCategory {
  label: string;
  brands: string[];
}

export interface ServiceTechnologies {
  categories: TechnologyCategory[];
}

/* ═══════════════════════════════════════════
   Pôle Solutions
   ═══════════════════════════════════════════ */

const SOLUTIONS_TECHNOLOGIES: Record<string, ServiceTechnologies> = {
  /* ── Sûreté ── */
  "videosurveillance": {
    categories: [
      { label: "Caméras", brands: ["Axis", "Hanwha", "Hikvision", "Dahua", "Bosch", "Vivotek"] },
      { label: "Enregistrement", brands: ["Milestone", "Genetec", "Synology", "IDIS", "Hanwha"] },
      { label: "Vidéo-analyse", brands: ["Briefcam", "Agent Vi", "Avigilon", "Axis ACAP"] },
    ],
  },
  "controle-dacces": {
    categories: [
      { label: "Contrôle d'accès", brands: ["Nedap", "Dorma Kaba", "HID Global", "CDVI", "Salto", "Axis"] },
      { label: "Lecteurs & badges", brands: ["HID", "STid", "Legic", "Deister", "Nedap"] },
      { label: "Logiciels", brands: ["Genetec", "Nedap AEOS", "Salto Space", "TIL Technologies"] },
    ],
  },
  "alarme-anti-intrusion": {
    categories: [
      { label: "Centrales", brands: ["Honeywell", "Bosch", "Vanderbilt", "Risco", "Ajax"] },
      { label: "Détection", brands: ["Optex", "Bosch", "Honeywell", "Texecom", "Ajax"] },
      { label: "Télésurveillance", brands: ["Horus", "Securitas", "Sotel"] },
    ],
  },
  "detection-perimetrique": {
    categories: [
      { label: "Détection", brands: ["Optex", "Cias", "Sorhea", "Southwest Microwave", "Senstar"] },
      { label: "Vidéo-analyse", brands: ["Axis", "Briefcam", "Agent Vi", "Avigilon"] },
      { label: "Intégration", brands: ["Genetec", "Milestone", "TIL Technologies"] },
    ],
  },
  "boitiers-a-clefs": {
    categories: [
      { label: "Gestion de clés", brands: ["Deister", "Traka", "KeyWatcher", "Morse Watchmans", "Creone"] },
    ],
  },
  "portail-portique-barriere": {
    categories: [
      { label: "Motorisation", brands: ["CAME", "FAAC", "Nice", "BFT", "Hörmann"] },
      { label: "Portiques", brands: ["Automatic Systems", "Boon Edam", "Gunnebo", "Dormakaba"] },
      { label: "Barrières", brands: ["CAME", "FAAC", "Magnetic", "Nice"] },
    ],
  },
  "videophonie": {
    categories: [
      { label: "Interphonie IP", brands: ["2N", "Comelit", "Intratone", "Aiphone", "Axis"] },
      { label: "Platines", brands: ["2N", "Comelit", "Urmet", "Dahua", "Hikvision"] },
    ],
  },
  "supervision-unifiee": {
    categories: [
      { label: "Hypervision", brands: ["Genetec", "Milestone", "CNS", "PcVue", "WIN-911"] },
      { label: "GTB", brands: ["Schneider Electric", "Siemens", "Honeywell", "Delta Controls"] },
    ],
  },
  "surete-de-chantier": {
    categories: [
      { label: "Vidéosurveillance", brands: ["Axis", "Hikvision", "Dahua", "Hanwha"] },
      { label: "Détection", brands: ["Optex", "Ajax", "Risco"] },
      { label: "Autonomie", brands: ["Solar Shield", "BauWatch", "EyeSite"] },
    ],
  },

  /* ── Infrastructure réseau ── */
  "inpt": {
    categories: [
      { label: "Câblage", brands: ["Nexans", "CommScope", "Legrand", "Corning", "R&M"] },
      { label: "Baies & chemins", brands: ["Legrand", "Schneider Electric", "Rittal", "APW"] },
      { label: "Actifs réseau", brands: ["Cisco", "HPE Aruba", "Juniper", "Ruckus"] },
    ],
  },
  "wifi": {
    categories: [
      { label: "Points d'accès", brands: ["Cisco Meraki", "HPE Aruba", "Ruckus", "Juniper Mist", "Ubiquiti"] },
      { label: "Contrôleurs", brands: ["Cisco", "HPE Aruba", "Juniper", "Cambium"] },
      { label: "Survey & analyse", brands: ["Ekahau", "iBwave", "NetSpot", "Acrylic"] },
    ],
  },
  "antenne-gsm-4g-5g": {
    categories: [
      { label: "DAS", brands: ["CommScope", "Corning", "SOLiD", "JMA Wireless", "Comba"] },
      { label: "Amplification", brands: ["Cel-Fi", "SureCall", "Nextivity", "Stella Doradus"] },
    ],
  },
  "reseau-vdi": {
    categories: [
      { label: "Câblage cuivre", brands: ["Nexans", "CommScope", "Legrand", "R&M", "Corning"] },
      { label: "Fibre optique", brands: ["Corning", "Nexans", "CommScope", "Prysmian"] },
      { label: "Certification", brands: ["Fluke Networks", "VIAVI", "Softing"] },
    ],
  },
  "audit-de-cablage": {
    categories: [
      { label: "Mesure & certification", brands: ["Fluke Networks", "VIAVI", "Softing", "IDEAL Networks"] },
      { label: "Cartographie", brands: ["NetBrain", "Nmap", "SolarWinds"] },
    ],
  },
  "fibre-optique": {
    categories: [
      { label: "Fibre", brands: ["Corning", "Nexans", "Prysmian", "CommScope", "AFL"] },
      { label: "Soudure & test", brands: ["Fujikura", "Sumitomo", "EXFO", "VIAVI", "Fluke Networks"] },
    ],
  },

  /* ── Audiovisuel ── */
  "sonorisation-despaces": {
    categories: [
      { label: "Sonorisation", brands: ["Majorcom", "TOA", "Bosch", "Powersoft", "Tannoy", "Bose"] },
      { label: "Amplification", brands: ["Powersoft", "Crown", "QSC", "Bose", "Apart"] },
      { label: "Traitement", brands: ["Biamp", "QSC Q-SYS", "BSS Audio", "Shure", "Symetrix"] },
      { label: "EVAC / SSS", brands: ["Bosch Praesensa", "TOA", "Majorcom", "Honeywell"] },
    ],
  },
  "musique-dambiance": {
    categories: [
      { label: "Sonorisation", brands: ["Bose", "Apart", "JBL", "Sonos Pro", "Tannoy"] },
      { label: "Sources & gestion", brands: ["Mood Media", "Soundsuit", "Radioplayer", "Spotify Business"] },
    ],
  },
  "affichage-dynamique": {
    categories: [
      { label: "Écrans", brands: ["Samsung", "LG", "Philips", "NEC", "BenQ", "iiyama"] },
      { label: "Players & CMS", brands: ["Scala", "Navori", "BrightSign", "Samsung MagicINFO", "Intuiface"] },
    ],
  },
  "ecrans-interactifs": {
    categories: [
      { label: "Écrans tactiles", brands: ["Samsung Flip", "Microsoft Surface Hub", "SMART", "BenQ", "Newline"] },
      { label: "Collaboration", brands: ["Logitech", "Barco ClickShare", "Mersive Solstice", "Crestron"] },
    ],
  },
  "integration-de-salles-de-reunion-connectees": {
    categories: [
      { label: "Visioconférence", brands: ["Poly", "Logitech", "Jabra", "Yealink", "Neat"] },
      { label: "Pilotage", brands: ["Crestron", "Extron", "Q-SYS", "AMX"] },
      { label: "Affichage", brands: ["Samsung", "LG", "SMART", "Microsoft Surface Hub"] },
    ],
  },
  "systeme-de-visioconference": {
    categories: [
      { label: "Matériel", brands: ["Poly", "Logitech", "Jabra", "Yealink", "Neat", "Cisco"] },
      { label: "Plateformes", brands: ["Microsoft Teams", "Zoom", "Webex", "Google Meet"] },
      { label: "Audio", brands: ["Biamp", "QSC", "Shure", "Sennheiser"] },
    ],
  },
  "installation-de-videoprojecteurs-et-ecrans-de-projection": {
    categories: [
      { label: "Vidéoprojecteurs", brands: ["Epson", "Panasonic", "Sony", "BenQ", "Christie", "Barco"] },
      { label: "Écrans", brands: ["Lumene", "Screen Innovations", "Da-Lite", "Draper"] },
    ],
  },
  "reservation-salle-de-reunion": {
    categories: [
      { label: "Réservation", brands: ["Evoko", "Joan", "GoBright", "Crestron", "Logitech Tap Scheduler"] },
      { label: "Capteurs", brands: ["Disruptive Technologies", "Pointgrab", "Irisys"] },
    ],
  },
  "mur-decrans-led-walls": {
    categories: [
      { label: "LED Walls", brands: ["Samsung", "LG", "Absen", "Unilumin", "Barco", "Leyard"] },
      { label: "Processeurs", brands: ["Barco", "Analog Way", "Novastar", "Datapath"] },
    ],
  },

  /* ── Divers ── */
  "gestion-des-visiteurs": {
    categories: [
      { label: "Accueil digital", brands: ["Proxyclick", "Envoy", "SwipedOn", "HID Visitor Manager"] },
      { label: "Bornes", brands: ["Elo", "Samsung Kiosk", "Aures", "Custom"] },
    ],
  },
  "gestion-de-stationnement": {
    categories: [
      { label: "Barrières", brands: ["CAME", "FAAC", "Magnetic", "Skidata"] },
      { label: "LAPI", brands: ["Hikvision", "Axis", "Genetec", "Dahua"] },
      { label: "Guidage", brands: ["ParkAssist", "Indect", "Quercus", "Circontrol"] },
    ],
  },
  "detection-de-vapotage": {
    categories: [
      { label: "Capteurs", brands: ["Halo Smart Sensor", "Verkada", "Triax", "Forensics Detectors"] },
    ],
  },
  "systeme-dappel-malade": {
    categories: [
      { label: "Appel malade", brands: ["Ackermann (Honeywell)", "Ascom", "Legrand", "Atea", "Schrack Seconet"] },
      { label: "Communication", brands: ["Ascom", "Spectralink", "Cisco", "Zebra"] },
    ],
  },
  "systeme-dappel-durgence": {
    categories: [
      { label: "Appel d'urgence", brands: ["Ackermann (Honeywell)", "Schrack Seconet", "Legrand", "Bosch"] },
    ],
  },
  "interphonie-eas": {
    categories: [
      { label: "Interphonie", brands: ["2N", "Commend", "Zenitel", "Stentofon"] },
      { label: "EAS / EVAC", brands: ["Bosch Praesensa", "TOA", "Honeywell", "Majorcom"] },
    ],
  },
  "systeme-de-demence": {
    categories: [
      { label: "Anti-errance", brands: ["Stanley Healthcare", "Elpas", "CenTrak", "Multitone", "Televic"] },
    ],
  },
  "systeme-de-ronde": {
    categories: [
      { label: "Ronde", brands: ["Pointeuse Deister", "Guardline", "TrackForce", "STANLEY Guard", "Terrier"] },
    ],
  },
};

/* ═══════════════════════════════════════════
   Pôle IT
   ═══════════════════════════════════════════ */

const IT_TECHNOLOGIES: Record<string, ServiceTechnologies> = {
  "infogerance-proactive": {
    categories: [
      { label: "Supervision", brands: ["Zabbix", "Datadog", "PRTG", "Centreon", "Nagios"] },
      { label: "ITSM", brands: ["ServiceNow", "Freshservice", "GLPI", "Jira Service Management"] },
      { label: "Endpoint", brands: ["Microsoft Intune", "SCCM", "Ivanti", "ManageEngine"] },
    ],
  },
  "support-utilisateur-entreprise": {
    categories: [
      { label: "Helpdesk", brands: ["ServiceNow", "Freshservice", "GLPI", "Jira Service Management"] },
      { label: "Prise en main", brands: ["TeamViewer", "AnyDesk", "BeyondTrust", "ConnectWise"] },
      { label: "Knowledge", brands: ["Confluence", "Notion", "BookStack", "IT Glue"] },
    ],
  },
  "supervision-si": {
    categories: [
      { label: "Monitoring", brands: ["Zabbix", "Datadog", "Grafana", "Centreon", "PRTG"] },
      { label: "Logs & SIEM", brands: ["Elastic (ELK)", "Splunk", "Graylog", "Microsoft Sentinel"] },
      { label: "APM", brands: ["Datadog", "New Relic", "Dynatrace", "AppDynamics"] },
    ],
  },
  "audit-cybersecurite": {
    categories: [
      { label: "Scan & audit", brands: ["Nessus", "Qualys", "Rapid7", "CrowdStrike"] },
      { label: "SIEM", brands: ["Microsoft Sentinel", "Splunk", "Elastic SIEM", "IBM QRadar"] },
      { label: "EDR", brands: ["CrowdStrike", "SentinelOne", "Microsoft Defender", "Sophos"] },
    ],
  },
  "mfa-authentification-forte": {
    categories: [
      { label: "MFA", brands: ["Microsoft Entra ID", "Okta", "Duo Security", "YubiKey", "Thales"] },
      { label: "SSO / IAM", brands: ["Okta", "Microsoft Entra", "Ping Identity", "OneLogin"] },
    ],
  },
  "sauvegarde-plan-reprise": {
    categories: [
      { label: "Sauvegarde", brands: ["Veeam", "Acronis", "Commvault", "Rubrik", "Nakivo"] },
      { label: "PRA / Cloud", brands: ["Zerto", "VMware SRM", "Azure Site Recovery", "AWS Backup"] },
    ],
  },
  "cloud-public-prive-hybrid": {
    categories: [
      { label: "Cloud public", brands: ["Microsoft Azure", "AWS", "Google Cloud", "OVHcloud"] },
      { label: "Virtualisation", brands: ["VMware vSphere", "Proxmox", "Nutanix", "Hyper-V"] },
      { label: "Conteneurs", brands: ["Docker", "Kubernetes", "Red Hat OpenShift", "Rancher"] },
    ],
  },
  "migration-cloud-microsoft-365": {
    categories: [
      { label: "Microsoft 365", brands: ["Exchange Online", "SharePoint", "Teams", "OneDrive", "Intune"] },
      { label: "Migration", brands: ["BitTitan", "ShareGate", "Quest", "AvePoint"] },
    ],
  },
  "reseau-entreprise-wan-lan": {
    categories: [
      { label: "Réseau", brands: ["Cisco", "HPE Aruba", "Fortinet", "Juniper", "Meraki"] },
      { label: "SD-WAN", brands: ["Fortinet", "Cisco Viptela", "VMware VeloCloud", "Cato Networks"] },
    ],
  },
  "vpn-acces-distance": {
    categories: [
      { label: "VPN / ZTNA", brands: ["Fortinet", "Palo Alto", "Cisco AnyConnect", "Zscaler", "Cloudflare"] },
      { label: "Firewall", brands: ["Fortinet FortiGate", "Palo Alto", "Sophos", "Check Point"] },
    ],
  },
  "gestion-parc-postes": {
    categories: [
      { label: "UEM / MDM", brands: ["Microsoft Intune", "SCCM", "Ivanti", "VMware Workspace ONE", "Jamf"] },
      { label: "Déploiement", brands: ["Autopilot", "SCCM", "PDQ Deploy", "ManageEngine"] },
    ],
  },
  "sensibilisation-collaborateurs": {
    categories: [
      { label: "Phishing simulation", brands: ["KnowBe4", "Cofense", "Proofpoint", "Terranova"] },
      { label: "E-learning", brands: ["KnowBe4", "SANS Security Awareness", "Riot", "MetaCompliance"] },
    ],
  },
  "astreinte-it": {
    categories: [
      { label: "Alerting", brands: ["PagerDuty", "OpsGenie", "VictorOps", "Zabbix"] },
      { label: "ITSM", brands: ["ServiceNow", "Freshservice", "GLPI"] },
    ],
  },
  "antispam-email-securise": {
    categories: [
      { label: "Email security", brands: ["Proofpoint", "Mimecast", "Barracuda", "Microsoft Defender for O365"] },
      { label: "Anti-spam", brands: ["Vade Secure", "SpamTitan", "Hornetsecurity", "Mailinblack"] },
    ],
  },
  "pilotage-strategique-si": {
    categories: [
      { label: "Gouvernance", brands: ["ServiceNow", "LeanIX", "MEGA HOPEX", "Ardoq"] },
      { label: "BI / Reporting", brands: ["Power BI", "Tableau", "Looker", "Grafana"] },
    ],
  },
  "cadrage-fonctionnel-projet": {
    categories: [
      { label: "Gestion de projet", brands: ["Jira", "Azure DevOps", "Monday.com", "Notion", "Linear"] },
      { label: "Design", brands: ["Figma", "Miro", "Lucidchart", "Draw.io"] },
    ],
  },
  "architecture-donnees-applicative": {
    categories: [
      { label: "Architecture", brands: ["LeanIX", "Ardoq", "Draw.io", "Sparx EA"] },
      { label: "Bases de données", brands: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "Elasticsearch"] },
    ],
  },
  "recette-homologation": {
    categories: [
      { label: "Tests", brands: ["Selenium", "Cypress", "Postman", "JMeter", "SQUASH TM"] },
      { label: "Suivi", brands: ["Jira", "Azure DevOps", "TestRail", "Xray"] },
    ],
  },
  "documentation-runbooks": {
    categories: [
      { label: "Documentation", brands: ["Confluence", "Notion", "IT Glue", "BookStack", "GitBook"] },
      { label: "Automatisation", brands: ["Ansible", "Rundeck", "Terraform", "PowerShell DSC"] },
    ],
  },
};

/* ═══════════════════════════════════════════
   Pôle Digital
   ═══════════════════════════════════════════ */

const DIGITAL_TECHNOLOGIES: Record<string, ServiceTechnologies> = {
  "campagne-video-youtube-tiktok": {
    categories: [
      { label: "Plateformes", brands: ["YouTube Ads", "TikTok Ads", "Meta Ads"] },
      { label: "Montage", brands: ["Adobe Premiere", "DaVinci Resolve", "CapCut", "After Effects"] },
      { label: "Analytics", brands: ["YouTube Studio", "TikTok Analytics", "Google Analytics"] },
    ],
  },
  "charte-graphique": {
    categories: [
      { label: "Design", brands: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Canva Pro"] },
      { label: "Typographie", brands: ["Google Fonts", "Adobe Fonts", "Fontshare"] },
    ],
  },
  "creation-de-contenus": {
    categories: [
      { label: "Rédaction", brands: ["Notion", "Google Docs", "Grammarly", "Antidote"] },
      { label: "Visuel", brands: ["Figma", "Canva Pro", "Adobe Creative Cloud", "Midjourney"] },
      { label: "SEO", brands: ["Semrush", "Ahrefs", "Surfer SEO", "Frase"] },
    ],
  },
  "creation-de-logo": {
    categories: [
      { label: "Design", brands: ["Adobe Illustrator", "Figma", "Affinity Designer"] },
      { label: "Prototypage", brands: ["Figma", "InVision", "Adobe XD"] },
    ],
  },
  "developpement-wordpress-shopify": {
    categories: [
      { label: "CMS", brands: ["WordPress", "Shopify", "WooCommerce", "Elementor"] },
      { label: "Hébergement", brands: ["WP Engine", "Kinsta", "Cloudflare", "Shopify Plus"] },
      { label: "Intégrations", brands: ["Zapier", "Make", "HubSpot", "Klaviyo", "Stripe"] },
    ],
  },
  "gestion-des-reseaux-sociaux": {
    categories: [
      { label: "Planification", brands: ["Hootsuite", "Buffer", "Swello", "Later", "Agorapulse"] },
      { label: "Réseaux", brands: ["Instagram", "LinkedIn", "Facebook", "TikTok", "X"] },
      { label: "Analytics", brands: ["Sprout Social", "Iconosquare", "Metricool"] },
    ],
  },
  "google-ads": {
    categories: [
      { label: "Google", brands: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Looker Studio"] },
      { label: "Landing pages", brands: ["Unbounce", "WordPress", "Webflow", "Instapage"] },
      { label: "Tracking", brands: ["Google Consent Mode", "Cookiebot", "Axeptio", "Server-side GTM"] },
    ],
  },
  "landing-page": {
    categories: [
      { label: "Builders", brands: ["WordPress", "Webflow", "Unbounce", "Instapage", "Elementor"] },
      { label: "Analytics", brands: ["Google Analytics 4", "Hotjar", "Microsoft Clarity", "Mixpanel"] },
      { label: "A/B testing", brands: ["Google Optimize", "VWO", "AB Tasty", "Kameleoon"] },
    ],
  },
  "meta-ads": {
    categories: [
      { label: "Meta", brands: ["Meta Business Suite", "Meta Ads Manager", "Facebook CAPI"] },
      { label: "Créa", brands: ["Canva Pro", "Adobe Creative Cloud", "Figma", "CapCut"] },
      { label: "Tracking", brands: ["Meta Pixel", "CAPI", "Google Tag Manager", "Axeptio"] },
    ],
  },
  "refonte-de-sites-existants": {
    categories: [
      { label: "Audit", brands: ["Semrush", "Screaming Frog", "GTmetrix", "PageSpeed Insights"] },
      { label: "CMS", brands: ["WordPress", "Shopify", "Webflow", "Next.js"] },
      { label: "UX", brands: ["Figma", "Hotjar", "Microsoft Clarity", "Maze"] },
    ],
  },
  "reseaux-sociaux-branding": {
    categories: [
      { label: "Design", brands: ["Figma", "Canva Pro", "Adobe Illustrator", "Adobe Photoshop"] },
      { label: "Templates", brands: ["Canva Pro", "Adobe Express", "Figma"] },
    ],
  },
  "site-e-commerce": {
    categories: [
      { label: "Plateformes", brands: ["Shopify", "WooCommerce", "PrestaShop", "Magento"] },
      { label: "Paiement", brands: ["Stripe", "PayPal", "Mollie", "Adyen"] },
      { label: "Marketing", brands: ["Klaviyo", "Mailchimp", "Google Merchant Center", "Meta Commerce"] },
    ],
  },
  "sites-vitrine": {
    categories: [
      { label: "CMS", brands: ["WordPress", "Webflow", "Next.js", "Squarespace"] },
      { label: "Hébergement", brands: ["Vercel", "WP Engine", "Kinsta", "Cloudflare Pages"] },
      { label: "Analytics", brands: ["Google Analytics 4", "Hotjar", "Microsoft Clarity"] },
    ],
  },
  "support-print-digital": {
    categories: [
      { label: "Print", brands: ["Adobe InDesign", "Adobe Illustrator", "Canva Pro"] },
      { label: "Digital", brands: ["Figma", "Adobe Photoshop", "Adobe After Effects"] },
    ],
  },
  "strategie-social-media": {
    categories: [
      { label: "Stratégie", brands: ["Semrush", "Brandwatch", "Sprout Social", "Meltwater"] },
      { label: "Planification", brands: ["Notion", "Airtable", "Trello", "Asana"] },
      { label: "Analytics", brands: ["Sprout Social", "Iconosquare", "Google Analytics 4", "Looker Studio"] },
    ],
  },
};

/* ═══════════════════════════════════════════
   Accès unifié
   ═══════════════════════════════════════════ */

export function getServiceTechnologies(slug: string): ServiceTechnologies | undefined {
  return (
    SOLUTIONS_TECHNOLOGIES[slug] ??
    IT_TECHNOLOGIES[slug] ??
    DIGITAL_TECHNOLOGIES[slug]
  );
}
