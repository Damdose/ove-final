const TRUST_ITEMS = [
  { icon: CheckCircleIcon, label: "150+ projets livrés" },
  { icon: ClockIcon, label: "Réponse sous 24 h" },
  { icon: StarIcon, label: "98 % satisfaction client" },
] as const;

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * Trust badges displayed below hero CTAs.
 * Variant "light" = dark text on light background (hero sections).
 * Variant "dark"  = white text on dark background (navy sections).
 */
export function TrustBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const iconColor = variant === "light" ? "text-emerald-600" : "text-emerald-400";
  const textColor = variant === "light" ? "text-[#0D0B4A]/65" : "text-white/70";
  const ringColor = variant === "light" ? "ring-[#0D0B4A]/[0.08]" : "ring-white/[0.12]";

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
      {TRUST_ITEMS.map((item, i) => (
        <span
          key={i}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[13px] font-medium leading-tight ring-1 ${ringColor} ${textColor}`}
        >
          <item.icon className={`h-3.5 w-3.5 shrink-0 ${iconColor}`} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
