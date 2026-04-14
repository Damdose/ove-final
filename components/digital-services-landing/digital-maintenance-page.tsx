import { DigitalPolePageShell } from "@/components/digital-services-landing/digital-pole-page-shell";
import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";
import { TestimonialsCarousel } from "@/components/technology-group-home/testimonials-carousel";
import { BRAND, POLE_THEMES } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BG_INK,
  BTN_PRIMARY_INK,
  PAGE_X,
  R_BTN,
  R_CARD,
  SECTION_PAD,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import Link from "next/link";

const digitalTheme = POLE_THEMES.digital;

const PACKS = [
  {
    id: "start",
    name: "Pack Start",
    tagline: "L'essentiel pour garder votre site fonctionnel, sécurisé et opérationnel.",
    popular: false,
    includesLabel: "Inclus :",
    bullets: [
      "Mises à jour régulières (CMS, plugins, extensions, modules)",
      "Sauvegardes automatiques (quotidiennes ou hebdomadaires)",
      "Vérification uptime",
      "Tests des formulaires & fonctionnalités clés",
      "Correction des bugs mineurs",
      "Surveillance basique de sécurité",
      "Optimisation légère des performances",
      "Rapport mensuel synthétique",
    ],
  },
  {
    id: "flow",
    name: "Pack Flow",
    tagline: "Un suivi avancé pour un site rapide, fiable et optimisé en continu.",
    popular: true,
    includesLabel: "Start, plus :",
    bullets: [
      "Monitoring avancé (temps de chargement, disponibilité, erreurs)",
      "Optimisation des performances (cache, compression, images)",
      "Renforcement sécurité (firewall applicatif, scans des failles)",
      "Test UX mensuel & corrections des irritants",
      "Mise à jour des contenus simples",
      "Vérification approfondie du SEO technique",
      "Assistance prioritaire",
    ],
  },
  {
    id: "care",
    name: "Pack Care",
    tagline: "La tranquillité totale : supervision complète + support illimité + accompagnement.",
    popular: false,
    includesLabel: "Flow, plus :",
    bullets: [
      "Support illimité",
      "Intervention en urgence (priorité haute)",
      "Analyse mensuelle complète des performances",
      "Recommandations SEO & optimisation continue",
      "Mise à jour avancée des contenus",
      "Vérification RGPD, cookies & conformité",
      "Actions préventives en temps réel",
      "Améliorations UX & conversion",
      "Conseil digital trimestriel",
    ],
  },
] as const;

const WHY_CARDS = [
  {
    title: "Performance & disponibilité",
    body: "Monitoring continu, temps de chargement optimisé et uptime garanti pour ne jamais perdre de visiteurs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Sécurité & conformité",
    body: "Firewall applicatif, scans de vulnérabilités, conformité RGPD et certificats SSL toujours à jour.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "SEO & croissance",
    body: "Audits techniques réguliers, optimisation continue et recommandations pour améliorer votre visibilité.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
] as const;

const STATS = [
  { value: "100%", label: "des mises à jour appliquées" },
  { value: "24h", label: "délai max de correction" },
  { value: "+95", label: "score performance cible" },
] as const;

const FAQ_ITEMS = [
  {
    q: "Livrez-vous tous types de sites web ?",
    a: "Oui : vitrines, corporate, e-commerce, marketplace, prototypes ou refontes complètes.",
  },
  {
    q: "Proposez-vous un accompagnement long terme ?",
    a: "Oui. Maintenance, optimisation continue, production de contenu, campagnes, automatisation… tout peut être géré par notre équipe.",
  },
  {
    q: "Pouvez-vous gérer nos publicités Google ou Meta Ads ?",
    a: "Oui. Nous créons, optimisons et pilotons vos campagnes avec un suivi mensuel détaillé.",
  },
  {
    q: "Faites-vous aussi la création de photos et vidéos ?",
    a: "Oui : shooting photo, vidéo corporate, vidéos sociales, montage, animation, motion design.",
  },
  {
    q: "Intégrez-vous des solutions CRM et automatisations ?",
    a: "Oui. Nous déployons HubSpot, Make, Zapier, Notion, Trello, et automatisations sur mesure.",
  },
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-emerald-500 ${className ?? ""}`}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function HeroIcon() {
  return (
    <span
      className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-white shadow-[0_6px_20px_rgba(52,211,153,0.35)] ring-2 ring-emerald-300/60"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838.838-2.872a2 2 0 01.506-.854z" />
      </svg>
    </span>
  );
}

export function DigitalMaintenancePage() {
  return (
    <DigitalPolePageShell>
      {/* ── Hero ── */}
      <header className="relative overflow-hidden">
        <div className={`${digitalTheme.secondary.bgClass}`}>
          <div className={PAGE_X}>
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="pb-12 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
                <div className="mx-auto max-w-3xl text-center">
                  <HeroIcon />
                  <div className={`mt-6 inline-flex items-center justify-center rounded-full ${digitalTheme.primary.bgClass} px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white`}>
                    Maintenance
                  </div>
                  <h1 className={`mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl sm:leading-[1.12] lg:text-5xl lg:leading-[1.08] ${TEXT_INK}`}>
                    Des offres de maintenance digitale adaptées à vos enjeux
                  </h1>
                  <p className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg lg:leading-8 ${TEXT_INK_MUTED}`}>
                    Performance, sécurité et évolutivité : choisissez le pack qui garantit la fiabilité de vos actifs digitaux.
                  </p>
                  <div className="mt-8 sm:mt-10">
                    <Link href="/contact" className={BTN_PRIMARY_INK}>
                      Contacter un expert
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="bg-brand-ink">
          <div className={PAGE_X}>
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-3 sm:gap-8 sm:py-10">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-3xl font-bold tabular-nums text-white lg:text-4xl">
                      {stat.value}
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-white/80 sm:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Pourquoi nous ── */}
      <section className={BRAND.surfaceMuted.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
                <p className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${digitalTheme.tag.bgClass} ${digitalTheme.tag.textClass}`}>
                  Pourquoi nous
                </p>
                <h2 className={`mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${TEXT_INK}`}>
                  Pourquoi choisir la maintenance Ovedex ?
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {WHY_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className={`group/card flex flex-col bg-white p-7 transition-shadow duration-300 sm:p-8 ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${BG_INK} text-white shadow-[0_6px_20px_rgba(13,11,74,0.18)] ring-2 ring-emerald-400/35 transition-[box-shadow,transform] duration-300 group-hover/card:scale-[1.03] group-hover/card:ring-emerald-400/50`}
                    >
                      {card.icon}
                    </div>
                    <h3 className={`mt-5 font-display text-xl font-semibold leading-snug sm:text-2xl ${TEXT_INK}`}>
                      {card.title}
                    </h3>
                    <p className={`mt-3 font-sans text-base font-normal leading-relaxed ${TEXT_INK_MUTED}`}>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packs ── */}
      <section className={BRAND.canvas.bgClass}>
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
                <h2 className={`font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${TEXT_INK}`}>
                  Nos packs de maintenance
                </h2>
                <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${TEXT_INK_MUTED}`}>
                  Contactez-nous pour découvrir nos tarifs et l'offre qui correspond le plus à vos enjeux.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5 lg:items-stretch">
                {PACKS.map((pack) => (
                  <article
                    key={pack.id}
                    className={`relative flex flex-col ${R_CARD} border bg-white p-6 sm:p-7 transition-shadow duration-300 ${
                      pack.popular
                        ? "border-emerald-400/80 shadow-[0_12px_40px_-12px_rgba(52,211,153,0.35)] ring-2 ring-emerald-400/90"
                        : `${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`
                    }`}
                  >
                    {pack.popular ? (
                      <div className="absolute -top-3 left-1/2 z-[1] -translate-x-1/2">
                        <span className="inline-flex rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_4px_12px_rgba(52,211,153,0.35)]">
                          Populaire
                        </span>
                      </div>
                    ) : null}
                    <h2 className={`font-display text-xl font-bold sm:text-2xl ${TEXT_INK} ${pack.popular ? "mt-2" : ""}`}>
                      {pack.name}
                    </h2>
                    <p className={`mt-3 text-sm leading-relaxed sm:text-base ${TEXT_INK_MUTED}`}>{pack.tagline}</p>
                    <div className={`mt-6 h-px w-full ${pack.popular ? "bg-emerald-200" : "bg-black/[0.06]"}`} />
                    <p className={`mt-5 text-sm font-semibold ${TEXT_INK}`}>{pack.includesLabel}</p>
                    <ul className="mt-3 flex flex-1 flex-col gap-2.5" role="list">
                      {pack.bullets.map((line) => (
                        <li key={line} className="flex gap-2.5 text-sm leading-snug text-[#0D0B4A]/90">
                          <CheckIcon className="mt-0.5" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`mt-8 inline-flex h-12 w-full items-center justify-center text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 ${R_BTN} ${
                        pack.popular ? "bg-emerald-500 shadow-[0_6px_20px_rgba(52,211,153,0.3)]" : BG_INK
                      }`}
                    >
                      Commencer maintenant
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* ── FAQ ── */}
      <section className={BRAND.surfaceMuted.bgClass} aria-labelledby="faq-maintenance-heading">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="mx-auto max-w-2xl text-center">
                <p className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${digitalTheme.tag.bgClass} ${digitalTheme.tag.textClass}`}>
                  FAQ
                </p>
                <h2
                  id="faq-maintenance-heading"
                  className={`mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${TEXT_INK}`}
                >
                  Questions fréquentes
                </h2>
                <p className={`mx-auto mt-4 max-w-xl text-base leading-relaxed ${TEXT_INK_MUTED}`}>
                  Consultez notre FAQ ou contactez-nous : notre équipe vous répond rapidement et vous accompagne selon vos
                  besoins.
                </p>
                <Link href="/contact" className={`mt-6 inline-flex ${BTN_PRIMARY_INK}`}>
                  Contacter un expert
                </Link>
              </div>

              <div className="mx-auto mt-12 max-w-3xl space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className={`group ${R_CARD} ${BD_CARD} bg-white px-4 py-1 shadow-sm open:shadow-md sm:px-5`}
                  >
                    <summary className="cursor-pointer list-none py-4 font-display text-base font-semibold leading-snug text-[#0D0B4A] marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-3">
                        <span>{item.q}</span>
                        <span
                          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition group-open:rotate-180"
                          aria-hidden
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </span>
                    </summary>
                    <p className="border-t border-black/[0.06] pb-4 pt-3 text-sm leading-relaxed text-[#0D0B4A]/80">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCtaSection
        heading="Un projet digital à maintenir ou à faire évoluer ?"
        body="Performance, sécurité, SEO — parlons de vos besoins et trouvons le bon pack ensemble."
      />
    </DigitalPolePageShell>
  );
}
