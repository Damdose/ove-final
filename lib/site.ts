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

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
