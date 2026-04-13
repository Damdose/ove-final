/** Chevron fine pour les onglets du méga-menu Services (remplace l’asset Webflow trop épais). */
export function ServiceMegaTabChevron({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 fill-none stroke-current stroke-1 ${className ?? ""}`}
      aria-hidden
    >
      <path d="M10 8.5 14.5 12 10 15.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
