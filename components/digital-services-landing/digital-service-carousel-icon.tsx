/**
 * Icônes distinctes pour les tuiles du carrousel services Digital (SVG ligne).
 */

import type { ReactElement, ReactNode } from "react";

const stroke = {
  w: 1.65 as const,
  cap: "round" as const,
  join: "round" as const,
};

type IconProps = { className?: string };

function SvgFrame({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke.w}
      strokeLinecap={stroke.cap}
      strokeLinejoin={stroke.join}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function IconVideo({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="2" y="5" width="14" height="12" rx="1.5" />
      <polygon points="10,9 10,15 15,12" fill="currentColor" stroke="none" />
      <path d="M18 9l4-2v10l-4-2" />
    </SvgFrame>
  );
}

function IconPalette({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <circle cx="8" cy="10" r="3.5" />
      <circle cx="16" cy="8" r="3.5" />
      <circle cx="15" cy="16" r="3.5" />
    </SvgFrame>
  );
}

function IconDocument({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </SvgFrame>
  );
}

function IconLogoMark({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    </SvgFrame>
  );
}

function IconCode({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </SvgFrame>
  );
}

function IconMessages({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
      <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
    </SvgFrame>
  );
}

function IconTrending({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </SvgFrame>
  );
}

function IconLanding({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <rect x="7" y="12" width="10" height="6" rx="1" />
    </SvgFrame>
  );
}

function IconMetaCards({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="5" y="5" width="10" height="12" rx="1.5" transform="rotate(-8 10 11)" />
      <rect x="9" y="7" width="10" height="12" rx="1.5" />
    </SvgFrame>
  );
}

function IconRefresh({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.48L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </SvgFrame>
  );
}

function IconMobileBrand({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10 7h4M10 10h4M10 13h3" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </SvgFrame>
  );
}

function IconCart({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </SvgFrame>
  );
}

function IconMonitor({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="2" y="4" width="20" height="12" rx="2" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16" x2="12" y2="20" />
    </SvgFrame>
  );
}

function IconPrinter({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <polyline points="6 9 6 4 18 4 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </SvgFrame>
  );
}

function IconTarget({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </SvgFrame>
  );
}

function IconDevicesFallback({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="2" y="4" width="13" height="9" rx="1" />
      <path d="M6 17h5M8.5 13v4" />
      <rect x="14" y="7" width="8" height="13" rx="1.5" />
      <path d="M16.5 17h3" />
    </SvgFrame>
  );
}

const ICON_BY_SLUG: Record<string, (p: IconProps) => ReactElement> = {
  "campagne-video-youtube-tiktok": IconVideo,
  "charte-graphique": IconPalette,
  "creation-de-contenus": IconDocument,
  "creation-de-logo": IconLogoMark,
  "developpement-wordpress-shopify": IconCode,
  "gestion-des-reseaux-sociaux": IconMessages,
  "google-ads": IconTrending,
  "landing-page": IconLanding,
  "meta-ads": IconMetaCards,
  "refonte-de-sites-existants": IconRefresh,
  "reseaux-sociaux-branding": IconMobileBrand,
  "site-e-commerce": IconCart,
  "sites-vitrine": IconMonitor,
  "support-print-digital": IconPrinter,
  "strategie-social-media": IconTarget,
};

export function DigitalServiceCarouselIcon({ slug, className }: { slug: string; className?: string }) {
  const Cmp = ICON_BY_SLUG[slug] ?? IconDevicesFallback;
  return <Cmp className={className} />;
}
