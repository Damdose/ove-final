/**
 * Icônes distinctes pour les tuiles du carrousel services Solutions (SVG ligne).
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

function IconScreenGrid({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 8h8M8 12h5" />
      <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none" />
    </SvgFrame>
  );
}

function IconBell({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 7-3 14h18c0-7-3-7-3-14" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </SvgFrame>
  );
}

function IconAntenna({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M12 2v4M8.5 5.5l2.5 2.5M15.5 5.5L13 8" />
      <path d="M5 10h14v2H5z" />
      <path d="M8 14v6M12 14v6M16 14v6" />
    </SvgFrame>
  );
}

function IconCable({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M4 12h3l2-4 4 8 2-4h5" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </SvgFrame>
  );
}

function IconKey({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <circle cx="8" cy="8" r="3.5" />
      <path d="M11 11l9 9M15 19l2 2M11 15l2 2" />
    </SvgFrame>
  );
}

function IconDoorCard({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="5" y="2" width="14" height="20" rx="1" />
      <circle cx="12" cy="12" r="2" />
      <line x1="16" y1="17" x2="16" y2="17.01" strokeWidth="2" />
    </SvgFrame>
  );
}

function IconSensor({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </SvgFrame>
  );
}

function IconFence({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M4 20V8l4-2 4 2 4-2 4 2v12" />
      <path d="M8 8v12M12 10v10M16 8v12" />
    </SvgFrame>
  );
}

function IconFiber({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M12 2v20" />
      <path d="M8 6c2 2 2 10 0 12M16 6c-2 2-2 10 0 12" />
      <path d="M5 9c1.5 1.5 1.5 4.5 0 6M19 9c-1.5 1.5-1.5 4.5 0 6" />
    </SvgFrame>
  );
}

function IconParking({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h3a3 3 0 0 1 0 6H9" />
    </SvgFrame>
  );
}

function IconVisitor({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 11h5M18.5 8.5v5" />
    </SvgFrame>
  );
}

function IconBuildingNet({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M3 21h18M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none" />
      <path d="M2 12h3M19 12h3" />
    </SvgFrame>
  );
}

function IconShieldFallback({ className }: IconProps) {
  return (
    <SvgFrame className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </SvgFrame>
  );
}

const ICON_BY_SLUG: Record<string, (p: IconProps) => ReactElement> = {
  "affichage-dynamique": IconScreenGrid,
  "alarme-anti-intrusion": IconBell,
  "antenne-gsm-4g-5g": IconAntenna,
  "audit-de-cablage": IconCable,
  "boitiers-a-clefs": IconKey,
  "controle-dacces": IconDoorCard,
  "detection-de-vapotage": IconSensor,
  "detection-perimetrique": IconFence,
  "fibre-optique": IconFiber,
  "gestion-de-stationnement": IconParking,
  "gestion-des-visiteurs": IconVisitor,
  inpt: IconBuildingNet,
};

export function SolutionsServiceCarouselIcon({ slug, className }: { slug: string; className?: string }) {
  const Cmp = ICON_BY_SLUG[slug] ?? IconShieldFallback;
  return <Cmp className={className} />;
}
