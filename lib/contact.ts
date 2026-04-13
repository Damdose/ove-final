/**
 * Coordonnées affichées sur le site (CTA, contact).
 * Mettre à jour l’e-mail si besoin.
 */
export const CONTACT = {
  company: "Ovedex",
  addressLine1: "32 rue de Paris",
  addressLine2: "92100 Boulogne-Billancourt",
  country: "France",
  /** Lien carte */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=32+Rue+de+Paris,+92100+Boulogne-Billancourt,+France",
  phoneDisplay: "+33 6 51 75 85 13",
  phoneTel: "+33651758513",
  email: "contact@ovedex.com",
  hours: "Lundi — vendredi · 9h — 18h",
  whatsappHref:
    "https://api.whatsapp.com/send/?phone=33651758513&text&type=phone_number&app_absent=0",
  linkedInHref: "https://fr.linkedin.com/company/opensi-ecommerce",
  /** Mettre à jour avec le compte officiel si différent. */
  instagramHref: "https://www.instagram.com/ovedex/",
} as const;
