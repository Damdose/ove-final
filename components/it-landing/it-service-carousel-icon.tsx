/**
 * Icônes distinctes pour le carrousel services IT (SVG ligne).
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

function IconHeadset({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </SvgFrame>
  );
}

function IconGauge({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M12 2a10 10 0 0 1 10 10" />
      <path d="M12 12l4-2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </SvgFrame>
  );
}

function IconShield({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </SvgFrame>
  );
}

function IconKeyLock({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </SvgFrame>
  );
}

function IconCloud({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </SvgFrame>
  );
}

function IconMailLock({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </SvgFrame>
  );
}

function IconUsers({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </SvgFrame>
  );
}

function IconNetwork({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="19" cy="6" r="2" />
      <path d="M5 8v2a7 7 0 0 0 7 7M19 8v2a7 7 0 0 1-7 7" />
    </SvgFrame>
  );
}

function IconLaptop({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="2" y="4" width="20" height="12" rx="2" />
      <path d="M6 20h12" />
    </SvgFrame>
  );
}

function IconClipboard({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </SvgFrame>
  );
}

function IconLayers({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </SvgFrame>
  );
}

function IconCheckCircle({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </SvgFrame>
  );
}

function IconBook({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </SvgFrame>
  );
}

function IconMoon({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </SvgFrame>
  );
}

const ICON_BY_SLUG: Record<string, (p: IconProps) => ReactElement> = {
  "infogerance-proactive": IconGauge,
  "support-utilisateur-entreprise": IconHeadset,
  "supervision-si": IconGauge,
  "audit-cybersecurite": IconShield,
  "mfa-authentification-forte": IconKeyLock,
  "sauvegarde-plan-reprise": IconCloud,
  "cloud-public-prive-hybrid": IconCloud,
  "migration-cloud-microsoft-365": IconCloud,
  "reseau-entreprise-wan-lan": IconNetwork,
  "vpn-acces-distance": IconKeyLock,
  "gestion-parc-postes": IconLaptop,
  "sensibilisation-collaborateurs": IconUsers,
  "astreinte-it": IconMoon,
  "antispam-email-securise": IconMailLock,
  "pilotage-strategique-si": IconClipboard,
  "cadrage-fonctionnel-projet": IconClipboard,
  "architecture-donnees-applicative": IconLayers,
  "recette-homologation": IconCheckCircle,
  "documentation-runbooks": IconBook,
};

function IconFallback({ className }: IconProps) {
  return <IconShield className={className} />;
}

export function ItServiceCarouselIcon({ slug, className }: { slug: string; className?: string }) {
  const Cmp = ICON_BY_SLUG[slug] ?? IconFallback;
  return <Cmp className={className} />;
}
