/**
 * URL publique du site (canonical, Open Graph, JSON-LD).
 * Définir NEXT_PUBLIC_SITE_URL en production, ex. https://www.ovedex.com
 */
const FALLBACK_SITE_URL = "https://ovedex.com";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw && /^https?:\/\//i.test(raw)) {
    return raw.replace(/\/+$/, "");
  }
  return FALLBACK_SITE_URL;
}

/**
 * Image Open Graph par défaut (partages LinkedIn, etc.).
 * Générée par app/opengraph-image.tsx — à référencer dans les
 * blocs `openGraph` des pages, car Next remplace l'objet hérité.
 */
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Ovedex — Digital, IT & Solutions techniques",
} as const;

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
