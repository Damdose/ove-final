import { ItPolePageShell } from "@/components/it-landing/it-pole-page-shell";
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

const itTheme = POLE_THEMES.it;

const PACKS = [
  {
    id: "start",
    name: "Pack Start",
    tagline: "L'essentiel pour maîtriser votre parc et renforcer votre sécurité dès le premier jour.",
    subtitle: "Un pack modernisé, orienté pilotage en temps réel et sécurité intelligente.",
    popular: false,
    includesLabel: "Inclus :",
    bullets: [
      "Inventaire du parc en temps réel",
      "Gestion et pilotage des ordinateurs (MDM)",
      "Sécurisation avancée des postes",
      "Supervision proactive par un expert",
      "Achat & location de PC / Mac",
      "Configuration Zero-Touch",
      "Recyclage / reprise / don du matériel",
      "Maintenance des postes",
      "Surveillance des mises à jour et correctifs",
      "Tableau de bord centralisé",
      "Gestion des antivirus / EDR nouvelle génération",
      "Authentification renforcée (MFA) – recommandée",
    ],
  },
  {
    id: "flow",
    name: "Pack Flow",
    tagline: "La fluidité totale pour vos arrivées, départs et processus internes.",
    subtitle: "Pensé pour les entreprises en croissance, avec une approche workflow first.",
    popular: false,
    includesLabel: "Start, plus :",
    bullets: [
      "Préparation des ordinateurs (atelier ou à distance)",
      "Onboarding : création des accès & configuration automatisée",
      "Offboarding : désactivation sécurisée & traçabilité",
      "Notifications aux responsables internes",
      "Gestion des droits par rôle (RBAC)",
      "Provisioning automatique (Google, Microsoft, apps métier)",
      "Checklist onboarding/offboarding partagée avec les managers",
      "Stockage sécurisé des appareils non attribués",
      "Suivi du cycle de vie du matériel (âge, remplacement, garantie)",
    ],
  },
  {
    id: "care",
    name: "Pack Care",
    tagline: "La tranquillité totale : support instantané, illimité et pilotage avancé.",
    subtitle: "Une expérience support moderne, à la fois humaine, rapide et data-driven.",
    popular: true,
    includesLabel: "Flow, plus :",
    bullets: [
      "Support illimité",
      "Assistance matériel & logiciel",
      "Réponse garantie < 10 minutes",
      "Support via Slack, Teams ou email",
      "Mise en place des workflows de validation",
      "Tableau de bord des demandes",
      "Rapports mensuels (tendances, charge, incidents récurrents)",
      "Suivi de la satisfaction (CSAT) en temps réel",
      "Escalade prioritaire en cas d'incident",
      "Gestion proactive : détection automatique des problèmes",
      "Accompagnement sécurité : sensibilisation & bonnes pratiques",
    ],
  },
] as const;

const WHY_CARDS = [
  {
    title: "Support réactif & transparent",
    body: "Des équipes dédiées, des SLA clairs et une communication proactive sur chaque incident.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Sécurité intégrée",
    body: "EDR nouvelle génération, MFA, sauvegardes chiffrées et sensibilisation de vos collaborateurs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Pilotage & visibilité",
    body: "Tableaux de bord en temps réel, rapports mensuels et recommandations d'amélioration continue.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
  },
] as const;

const STATS = [
  { value: "99,5%", label: "de disponibilité cible" },
  { value: "< 10 min", label: "temps de réponse garanti" },
  { value: "+200", label: "environnements supervisés" },
] as const;

const FAQ_ITEMS = [
  {
    q: "Qu'est-ce que l'infogérance et quels services sont inclus ?",
    a: "L'infogérance regroupe la gestion complète de votre système informatique : support utilisateur, supervision 24/7, mises à jour, maintenance, gestion des incidents et optimisation de vos équipements. Notre objectif : un SI fluide, sécurisé et sans interruption.",
  },
  {
    q: "Comment Ovedex protège-t-il mes données et mon infrastructure ?",
    a: "Nous appliquons les standards de cybersécurité : antivirus de nouvelle génération (EDR), MFA, firewalls, sauvegardes chiffrées, segmentation réseau, monitoring en temps réel et audits de sécurité réguliers. Toute votre infrastructure est protégée contre les menaces internes et externes.",
  },
  {
    q: "Proposez-vous un support pour les outils cloud ?",
    a: "Oui. Nous gérons l'installation, la configuration, la sécurité, la gestion des licences et le support quotidien. Vos équipes bénéficient d'outils performants et correctement administrés.",
  },
  {
    q: "Ovedex peut-il gérer plusieurs sites ou une organisation multi-implantations ?",
    a: "Absolument. Nous déployons des infrastructures réseau sécurisées, interconnectées et centralisées. Cela vous garantit une gestion homogène, une sécurité cohérente et une montée en charge simple, même avec plusieurs sites.",
  },
  {
    q: "Quelle est la durée d'engagement pour vos prestations IT ?",
    a: "Nos prestations sont flexibles. Nous proposons des contrats mensuels sans engagement longue durée, ou des packs annuels pour les entreprises souhaitant un accompagnement structuré et économique.",
  },
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-purple-500 ${className ?? ""}`}
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
      className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-400 text-white shadow-[0_6px_20px_rgba(147,51,234,0.35)] ring-2 ring-purple-300/60"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h2" /><path d="M7 11h4" />
      </svg>
    </span>
  );
}

export function ItMaintenancePage() {
  return (
    <ItPolePageShell>
      {/* ── Hero ── */}
      <header className="relative overflow-hidden">
        <div className={`${itTheme.secondary.bgClass}`}>
          <div className={PAGE_X}>
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="pb-12 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
                <div className="mx-auto max-w-3xl text-center">
                  <HeroIcon />
                  <div className={`mt-6 inline-flex items-center justify-center rounded-full ${itTheme.primary.bgClass} px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white`}>
                    Infogérance
                  </div>
                  <h1 className={`mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl sm:leading-[1.12] lg:text-5xl lg:leading-[1.08] ${TEXT_INK}`}>
                    Des offres d'infogérance adaptées à vos enjeux
                  </h1>
                  <p className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg lg:leading-8 ${TEXT_INK_MUTED}`}>
                    Support réactif, cybersécurité intégrée et pilotage transparent : choisissez le pack qui correspond à votre maturité IT.
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
                <p className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${itTheme.tag.bgClass} ${itTheme.tag.textClass}`}>
                  Pourquoi nous
                </p>
                <h2 className={`mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${TEXT_INK}`}>
                  Pourquoi choisir l'infogérance Ovedex ?
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {WHY_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className={`group/card flex flex-col bg-white p-7 transition-shadow duration-300 sm:p-8 ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${BG_INK} text-white shadow-[0_6px_20px_rgba(13,11,74,0.18)] ring-2 ring-purple-400/35 transition-[box-shadow,transform] duration-300 group-hover/card:scale-[1.03] group-hover/card:ring-purple-400/50`}
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
                  Nos packs d'infogérance
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
                        ? "border-purple-400/80 shadow-[0_12px_40px_-12px_rgba(192,132,252,0.35)] ring-2 ring-purple-400/90"
                        : `${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`
                    }`}
                  >
                    {pack.popular ? (
                      <div className="absolute -top-3 left-1/2 z-[1] -translate-x-1/2">
                        <span className="inline-flex rounded-full bg-purple-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_4px_12px_rgba(192,132,252,0.35)]">
                          Populaire
                        </span>
                      </div>
                    ) : null}
                    <h2 className={`font-display text-xl font-bold sm:text-2xl ${TEXT_INK} ${pack.popular ? "mt-2" : ""}`}>
                      {pack.name}
                    </h2>
                    <p className={`mt-3 text-sm leading-relaxed sm:text-base ${TEXT_INK_MUTED}`}>{pack.tagline}</p>
                    <p className={`mt-2 text-sm leading-relaxed sm:text-base ${TEXT_INK_MUTED}`}>{pack.subtitle}</p>
                    <div className={`mt-6 h-px w-full ${pack.popular ? "bg-purple-200" : "bg-black/[0.06]"}`} />
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
                        pack.popular ? "bg-purple-500 shadow-[0_6px_20px_rgba(147,51,234,0.3)]" : BG_INK
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
      <section className={BRAND.surfaceMuted.bgClass} aria-labelledby="faq-maintenance-it-heading">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="mx-auto max-w-2xl text-center">
                <p className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${itTheme.tag.bgClass} ${itTheme.tag.textClass}`}>
                  FAQ
                </p>
                <h2
                  id="faq-maintenance-it-heading"
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
                          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition group-open:rotate-180"
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
        heading="Un projet IT ou une infogérance à structurer ?"
        body="Parlons périmètre, SLA et sécurité — les coordonnées complètes figurent sur la page contact."
      />
    </ItPolePageShell>
  );
}
