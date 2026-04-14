import { SolutionsPolePageShell } from "@/components/technical-solutions-landing/solutions-pole-page-shell";
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

const solutionsTheme = POLE_THEMES.solutions;

const PACKS = [
  {
    id: "start",
    name: "Pack Start",
    tagline: "La maintenance pour garantir le bon fonctionnement de vos équipements de sécurité.",
    popular: false,
    includesLabel: "Inclus :",
    bullets: [
      "Vérifications périodiques des systèmes (vidéo, contrôle d'accès, intrusion)",
      "Maintenance préventive selon les normes en vigueur",
      "Tests des équipements critiques",
      "Nettoyage & réglage optique des caméras",
      "Contrôle de l'état réseau & connectivité des équipements",
      "Remplacement des pièces défectueuses (hors matériel)",
      "Support technique sur demande",
      "Gestion de votre inventaire équipements",
      "Rapports de visite digitalisés",
      "Relevé des anomalies et recommandations",
    ],
  },
  {
    id: "flow",
    name: "Pack Flow",
    tagline: "La maintenance avancée pour automatiser, superviser et optimiser la sécurité du site.",
    popular: true,
    includesLabel: "Start, plus :",
    bullets: [
      "Supervision à distance des équipements clés",
      "Monitoring de l'état des caméras (flux, stockage, santé réseau)",
      "Contrôle automatisé de l'état du système (logs, alertes)",
      "Gestion des accès & badges (créations / suppressions)",
      "Reprogrammation légère & ajustements des scénarios",
      "Mise à jour logicielle régulière",
      "Audit annuel simplifié de la configuration",
      "Suivi du cycle de vie des équipements",
      "Plan de maintenance annuel partagé",
      "Notifications automatiques lors d'anomalies",
    ],
  },
  {
    id: "care",
    name: "Pack Care",
    tagline: "La tranquillité totale : support instantané, illimité et pilotage avancé.",
    popular: false,
    includesLabel: "Flow, plus :",
    bullets: [
      "Interventions sur site prioritaires",
      "Support illimité & hotline dédiée",
      "Engagement de délai d'intervention (GTR)",
      "Supervision 24/7 des systèmes critiques",
      "Analyse automatique des pannes et dégradations",
      "Rapport mensuel : disponibilité, incidents, zones à risques",
      "Conseils d'amélioration continue",
      "Assistance à la conformité (RGPD, ANSSI)",
      "Accompagnement cybersécurité sur les équipements",
      "Pilotage global : indicateurs, risques, recommandations, roadmap",
    ],
  },
] as const;

const WHY_CARDS = [
  {
    title: "Fiabilité & prévention",
    body: "Maintenance préventive planifiée, tests réguliers et détection proactive des anomalies pour zéro surprise.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Supervision à distance",
    body: "Monitoring temps réel de vos équipements, alertes automatiques et interventions rapides à distance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Conformité & expertise",
    body: "Technologies certifiées, normes respectées et accompagnement RGPD / ANSSI pour vos installations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
] as const;

const STATS = [
  { value: "24/7", label: "supervision systèmes critiques" },
  { value: "< 4h", label: "GTR sur incidents prioritaires" },
  { value: "+500", label: "équipements maintenus" },
] as const;

const FAQ_ITEMS = [
  {
    q: "Quels types de bâtiments prenez-vous en charge ?",
    a: "PME, ETI, sites industriels, hôpitaux, hôtels, commerces, bâtiments publics et sites sensibles nécessitant des solutions de sécurité avancées.",
  },
  {
    q: "Travaillez-vous avec des marques et technologies certifiées ?",
    a: "Oui. Ovedex Solutions intègre uniquement des technologies reconnues : Hikvision, Aritech, Axis, Honeywell, LenelS2, Siemens, Bosch, Milestone, Genetec…",
  },
  {
    q: "Proposez-vous la maintenance et le support des installations ?",
    a: "Oui. Nous assurons la maintenance préventive, corrective, l'évolution des systèmes et les interventions rapides en cas d'incident.",
  },
  {
    q: "Pouvez-vous reprendre un projet ou une installation existante ?",
    a: "Oui, nos équipes réalisent un audit complet avant d'intégrer, remettre à niveau ou étendre vos installations.",
  },
  {
    q: "Intervenez-vous sur plusieurs sites ou réseaux multi-établissements ?",
    a: "Oui. Nous gérons des installations multi-sites pour des groupes, réseaux de magasins, bâtiments tertiaires ou entreprises multisites.",
  },
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-blue-500 ${className ?? ""}`}
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
      className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-400 text-white shadow-[0_6px_20px_rgba(96,165,250,0.35)] ring-2 ring-blue-300/60"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    </span>
  );
}

export function SolutionsMaintenancePage() {
  return (
    <SolutionsPolePageShell>
      {/* ── Hero ── */}
      <header className="relative overflow-hidden">
        <div className={`${solutionsTheme.secondary.bgClass}`}>
          <div className={PAGE_X}>
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="pb-12 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
                <div className="mx-auto max-w-3xl text-center">
                  <HeroIcon />
                  <div className={`mt-6 inline-flex items-center justify-center rounded-full ${solutionsTheme.primary.bgClass} px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white`}>
                    Maintenance
                  </div>
                  <h1 className={`mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl sm:leading-[1.12] lg:text-5xl lg:leading-[1.08] ${TEXT_INK}`}>
                    Des offres de maintenance adaptées à vos installations
                  </h1>
                  <p className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg lg:leading-8 ${TEXT_INK_MUTED}`}>
                    Vidéosurveillance, contrôle d'accès, intrusion : choisissez le pack qui sécurise et pérennise vos équipements.
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
                <p className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutionsTheme.tag.bgClass} ${solutionsTheme.tag.textClass}`}>
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
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${BG_INK} text-white shadow-[0_6px_20px_rgba(13,11,74,0.18)] ring-2 ring-blue-400/35 transition-[box-shadow,transform] duration-300 group-hover/card:scale-[1.03] group-hover/card:ring-blue-400/50`}
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
                        ? "border-blue-400/80 shadow-[0_12px_40px_-12px_rgba(96,165,250,0.35)] ring-2 ring-blue-400/90"
                        : `${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`
                    }`}
                  >
                    {pack.popular ? (
                      <div className="absolute -top-3 left-1/2 z-[1] -translate-x-1/2">
                        <span className="inline-flex rounded-full bg-blue-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_4px_12px_rgba(96,165,250,0.35)]">
                          Populaire
                        </span>
                      </div>
                    ) : null}
                    <h2 className={`font-display text-xl font-bold sm:text-2xl ${TEXT_INK} ${pack.popular ? "mt-2" : ""}`}>
                      {pack.name}
                    </h2>
                    <p className={`mt-3 text-sm leading-relaxed sm:text-base ${TEXT_INK_MUTED}`}>{pack.tagline}</p>
                    <div className={`mt-6 h-px w-full ${pack.popular ? "bg-blue-200" : "bg-black/[0.06]"}`} />
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
                        pack.popular ? "bg-blue-500 shadow-[0_6px_20px_rgba(96,165,250,0.3)]" : BG_INK
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
      <section className={BRAND.surfaceMuted.bgClass} aria-labelledby="faq-maintenance-solutions-heading">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={SECTION_PAD}>
              <div className="mx-auto max-w-2xl text-center">
                <p className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutionsTheme.tag.bgClass} ${solutionsTheme.tag.textClass}`}>
                  FAQ
                </p>
                <h2
                  id="faq-maintenance-solutions-heading"
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
                          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-open:rotate-180"
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
        heading="Un projet de sécurité à maintenir ou à étendre ?"
        body="Vidéosurveillance, contrôle d'accès, intrusion — parlons de vos installations et trouvons le bon pack."
      />
    </SolutionsPolePageShell>
  );
}
