/** Encre institutionnelle (alignée sur le site). */
export const INK = "#0D0B4A";

/** Classes Tailwind liées à `--color-brand-ink` (globals.css @theme). */
export const TW_INK_TEXT = "text-brand-ink";
export const TW_INK_BG = "bg-brand-ink";

/**
 * Encre #0D0B4A en classes littérales — préféré sur les pages pôle pour un
 * contraste fiable (évite tout souci de résolution du token `brand-ink`).
 */
export const TEXT_INK = "text-[#0D0B4A]";
export const TEXT_INK_MUTED = "text-[#0D0B4A]/75";
export const BG_INK = "bg-[#0D0B4A]";
export const BG_INK_SUBTLE = "bg-[#0D0B4A]/10";
export const RING_INK_FOCUS = "focus-visible:ring-[#0D0B4A]/25";

/** Bandeau sticky pages pôle (même logique que `SiteBanner`). */
export const STICKY_POLE_NAV =
  "sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85";

/** Padding vertical standard des sections pleine largeur. */
export const SECTION_PAD = "py-14 sm:py-16 lg:py-24";

/** Marges horizontales alignées sur le bandeau (contenu ~ max-w-screen-xl). */
export const PAGE_X = "px-[3%] sm:px-[5%]";

// --- Rayons (uniformes) ---

/** Cartes, blocs médias, encadrés principaux. */
export const R_CARD = "rounded-2xl";

/** Boutons, champs, pastilles d’icône, liens d’action. */
export const R_BTN = "rounded-xl";

/**
 * CTA principal encre sur fond clair (pages pôle Digital, FAQ, etc.) —
 * même gabarit partout : 56px de haut, texte blanc, focus anneau encre.
 */
export const BTN_PRIMARY_INK = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} ${BG_INK} px-6 text-lg font-medium text-white no-underline shadow-[0_4px_14px_rgba(13,11,74,0.35)] transition-all duration-200 hover:opacity-92 hover:shadow-[0_6px_20px_rgba(13,11,74,0.45)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS}`;

/**
 * CTA secondaire outline encre (même gabarit que BTN_PRIMARY_INK) —
 * utilisé pour « Planifier une démo » et actions secondaires sur fond clair.
 */
export const BTN_SECONDARY_INK = `inline-flex h-14 min-w-[12rem] items-center justify-center ${R_BTN} border-2 border-[#0D0B4A]/25 bg-transparent px-6 text-lg font-medium ${TEXT_INK} no-underline transition hover:bg-[#0D0B4A]/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS}`;

// --- Bordures & anneaux ---

/** Bordure standard sur fond clair. */
export const BD_CARD = "border border-black/[0.06]";

/** Anneau discret autour des surfaces. */
export const RING_SOFT = "ring-1 ring-black/[0.04]";

// --- Ombres (palette unique basée sur l’encre) ---

/** Cartes blanches au repos. */
export const SHADOW_SURFACE =
  "shadow-[0_4px_24px_rgba(13,11,74,0.06)]";

/** Cartes cliquables au survol. */
export const SHADOW_SURFACE_HOVER =
  "hover:shadow-[0_16px_40px_-12px_rgba(13,11,74,0.12)]";

/** Photos, vidéos, illustrations mises en avant. */
export const SHADOW_MEDIA =
  "shadow-[0_22px_50px_-14px_rgba(13,11,74,0.2)]";

/** Bandeaux CTA pleine largeur. */
export const SHADOW_BANNER =
  "shadow-[0_12px_40px_-16px_rgba(13,11,74,0.2)]";

/** Éléments flottants (play, flèches, menus). */
export const SHADOW_POP =
  "shadow-[0_10px_28px_-8px_rgba(13,11,74,0.16)]";

/** Visuel secondaire dans une carte (relief très léger). */
export const SHADOW_THUMB =
  "shadow-[0_2px_12px_rgba(13,11,74,0.06)]";

// --- Carrousels « services » (IT / Digital / Solutions) : pilule + suivant ---

/** Ombre des contrôles flottants (pilule à points + bouton rond). */
export const CAROUSEL_SERVICE_CTRL_SHADOW =
  "shadow-[0_2px_12px_rgba(13,11,74,0.07)]";

/** Rangée basse : alignement vertical explicite entre pilule et bouton suivant. */
export const CAROUSEL_SERVICE_NAV_ROW =
  "absolute bottom-0 left-0 right-0 z-[4] flex items-center justify-end gap-2";

/**
 * Pilule à points : même hauteur que le bouton rond (44px), sans py asymétrique,
 * points centrés optiquement.
 */
export const CAROUSEL_SERVICE_CTRL_PILL = `flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-2.5 sm:gap-2 sm:px-3 ${CAROUSEL_SERVICE_CTRL_SHADOW}`;

/** Bouton « suivant » : gabarit identique à la pilule sur l’axe vertical. */
export const CAROUSEL_SERVICE_CTRL_CIRCLE = `flex h-11 w-11 shrink-0 cursor-pointer select-none items-center justify-center rounded-full bg-white text-[#0D0B4A]/55 transition-colors hover:text-[#0D0B4A] focus:outline-none ${CAROUSEL_SERVICE_CTRL_SHADOW}`;

/** Zone cliquable compacte autour de chaque point (évite une pilule trop longue). */
export const CAROUSEL_SERVICE_CTRL_DOT_BTN =
  "flex size-8 shrink-0 cursor-pointer select-none items-center justify-center rounded-full sm:size-9";
