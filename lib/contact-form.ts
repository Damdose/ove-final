/**
 * Valeurs, libellés et formatage partagés entre les formulaires (client)
 * et la route d'envoi `/api/contact` (serveur).
 *
 * Les <select> n'envoient que des valeurs courtes ("digital", "commercial") :
 * le serveur les retraduit lui-même en libellés via les tables ci-dessous, et
 * rejette toute valeur inconnue. Un visiteur ne peut donc pas injecter de texte
 * arbitraire ailleurs que dans les champs libres.
 */

export const CONTACT_REASON_VALUES = [
  "commercial",
  "demo",
  "project",
  "support",
  "partner",
  "other",
] as const;
export type ContactReasonValue = (typeof CONTACT_REASON_VALUES)[number];

export const REASON_LABELS: Record<ContactReasonValue, string> = {
  commercial: "Information commerciale / cadrage",
  demo: "Demande de démonstration",
  project: "Projet en cours ou appel d’offres",
  support: "Support (client existant)",
  partner: "Partenariat / intégration",
  other: "Autre",
};

export const CONTACT_POLE_VALUES = [
  "digital",
  "it",
  "solutions",
  "multi",
  "unknown",
] as const;
export type ContactPoleChoice = (typeof CONTACT_POLE_VALUES)[number];

export const POLE_LABELS: Record<ContactPoleChoice, string> = {
  digital: "Digital",
  it: "IT",
  solutions: "Solutions techniques",
  multi: "Transversal / plusieurs pôles",
  unknown: "Je ne sais pas encore",
};

export const COMPANY_SIZE_VALUES = ["", "1-10", "11-50", "51-200", "200+"] as const;
export type CompanySizeValue = (typeof COMPANY_SIZE_VALUES)[number];

export const COMPANY_SIZE_LABELS: Record<CompanySizeValue, string> = {
  "": "—",
  "1-10": "1 — 10",
  "11-50": "11 — 50",
  "51-200": "51 — 200",
  "200+": "200+",
};

export const TIMELINE_VALUES = ["", "urgent", "1m", "3m", "6m", "explore"] as const;
export type TimelineValue = (typeof TIMELINE_VALUES)[number];

export const TIMELINE_LABELS: Record<TimelineValue, string> = {
  "": "—",
  urgent: "Urgent (moins de 2 semaines)",
  "1m": "Sous 1 mois",
  "3m": "1 à 3 mois",
  "6m": "3 à 6 mois",
  explore: "Veille / exploration",
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Longueurs maximales acceptées côté serveur (garde-fou anti-abus). */
export const MAX_LEN = { short: 256, message: 5000 } as const;

/** Payload envoyé à POST /api/contact. */
export type ContactFormPayload = {
  form: "b2b" | "newsletter";
  firstName?: string;
  lastName?: string;
  company?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  pole?: string;
  reason?: string;
  companySize?: string;
  timeline?: string;
  productScope?: string;
  message?: string;
  /** Champ piège : rempli uniquement par les robots. */
  honeypot?: string;
};

export type ContactFormResponse = { ok: true } | { ok: false; error: string };
