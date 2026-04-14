import type { PoleId } from "@/lib/brand-design-system";

/** Liens principaux du pied de page pour le pôle concerné (alignés sur la nav haute). */
export function poleFooterPrimaryNav(pole: PoleId): readonly { href: string; label: string }[] {
  const base = `/${pole}`;
  return [
    { href: base, label: "Accueil" },
    { href: `${base}/newsroom`, label: "Newsroom" },
    { href: `${base}/cas-clients`, label: "Cas clients" },
    { href: `${base}/faq`, label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ] as const;
}

/** Phrase d’accroche sous le logo sur les pages pôle. */
export const POLE_FOOTER_TAGLINE: Record<PoleId, string> = {
  digital: "Sites, applicatifs et stratégie digitale pour accélérer votre croissance.",
  solutions: "Sûreté, réseaux, courants faibles et déploiements sur site pour les environnements exigeants.",
  it: "Infogérance, cybersécurité et cloud pour sécuriser et piloter votre système d’information.",
};
