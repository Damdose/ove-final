/**
 * Design system Ovedex — couleurs par pôle (Digital, Solutions, IT)
 * et marque globale. Les classes Tailwind correspondent au site actuel.
 *
 * Référence visuelle : fond pastel = « secondaire », accent vif = « primaire »
 * (pilules, pastilles de section, boutons nav pôles).
 */

export type PoleId = "digital" | "solutions" | "it";

/** Nuancier documenté (aligné sur la palette Tailwind par défaut). */
export interface PoleColorScale {
  /** Hex indicatif (palette Tailwind) */
  hex: string;
  /** Classe utilitaire Tailwind (bg-*, text-*, etc.) */
  tailwind: string;
}

export interface PoleTagStyles {
  textClass: string;
  bgClass: string;
}

export interface PoleTheme {
  id: PoleId;
  label: string;
  /** Accent principal : pastilles de section (texte blanc), bouton pill nav */
  primary: PoleColorScale & { bgClass: string; textOnPrimaryClass: string };
  /**
   * Fond secondaire : cartes « 3 pôles », ambiance par pôle.
   * Digital : emerald-100 · Solutions : blue-200 · IT : purple-200 (comme le site).
   */
  secondary: PoleColorScale & { bgClass: string };
  /** Titres de cartes pôle sur fond pastel (lisibilité) */
  headingOnSecondaryClass: string;
  /** Tags type newsroom (texte accent + fond très léger) */
  tag: PoleTagStyles;
  /** Bouton rond nav desktop (texte blanc sur accent) */
  navPillClass: string;
}

/** Marque transverselle (hors pôles) */
export const BRAND = {
  /** Texte principal, titres, boutons pleins institutionnels (aligné `INK` / `--color-brand-ink`) */
  ink: {
    hex: "#0d0b4a",
    textClass: "text-brand-ink",
    bgClass: "bg-brand-ink",
    borderClass: "border-brand-ink",
  },
  canvas: {
    hex: "#ffffff",
    bgClass: "bg-white",
  },
  /** Sections alternées */
  surfaceMuted: {
    hex: "#f9fafb",
    bgClass: "bg-gray-50",
  },
  /** Accent lien / bordure CTA secondaire (ex. bouton ADN) */
  accentCoral: {
    hex: "#ff4320",
    borderStyleClass: "[border-style:#ff4320]",
  },
  /** Liens discrets footer / cartes */
  linkMuted: {
    textClass: "text-purple-200",
  },
} as const;

export const POLE_THEMES: Record<PoleId, PoleTheme> = {
  digital: {
    id: "digital",
    label: "Digital",
    primary: {
      hex: "#34d399",
      tailwind: "emerald-400",
      bgClass: "bg-emerald-400",
      textOnPrimaryClass: "text-white",
    },
    secondary: {
      hex: "#d1fae5",
      tailwind: "emerald-100",
      bgClass: "bg-emerald-100",
    },
    headingOnSecondaryClass: "text-emerald-800",
    tag: {
      textClass: "text-emerald-400",
      bgClass: "bg-emerald-100",
    },
    navPillClass:
      "text-white bg-[#57C4A5] cursor-pointer align-top text-left no-underline relative mx-0 inline-flex shrink-0 items-center gap-x-2 rounded-full px-4 py-2.5 text-sm font-medium active:outline-0 hover:outline-0 lg:py-2",
  },
  solutions: {
    id: "solutions",
    label: "Solutions",
    primary: {
      hex: "#60a5fa",
      tailwind: "blue-400",
      bgClass: "bg-blue-400",
      textOnPrimaryClass: "text-white",
    },
    secondary: {
      hex: "#bfdbfe",
      tailwind: "blue-200",
      bgClass: "bg-blue-200",
    },
    headingOnSecondaryClass: "text-blue-800",
    tag: {
      textClass: "text-blue-400",
      bgClass: "bg-blue-200",
    },
    navPillClass:
      "text-white bg-[#7DAAF1] cursor-pointer align-top text-left no-underline relative mx-0 inline-flex shrink-0 items-center gap-x-2 rounded-full px-4 py-2.5 text-sm font-medium active:outline-0 hover:outline-0 lg:py-2",
  },
  it: {
    id: "it",
    label: "IT",
    primary: {
      hex: "#c084fc",
      tailwind: "purple-400",
      bgClass: "bg-purple-400",
      textOnPrimaryClass: "text-white",
    },
    secondary: {
      hex: "#e9d5ff",
      tailwind: "purple-200",
      bgClass: "bg-purple-200",
    },
    headingOnSecondaryClass: "text-purple-800",
    tag: {
      textClass: "text-purple-600",
      bgClass: "bg-purple-200",
    },
    navPillClass:
      "text-white bg-[#C287F4] cursor-pointer align-top text-left no-underline relative mx-0 inline-flex shrink-0 items-center gap-x-2 rounded-full px-4 py-2.5 text-sm font-medium active:outline-0 hover:outline-0 lg:py-2",
  },
} as const;

export const POLE_ORDER: readonly PoleId[] = ["digital", "solutions", "it"] as const;

export function getPoleTheme(pole: PoleId): PoleTheme {
  return POLE_THEMES[pole];
}
