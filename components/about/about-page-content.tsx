import Link from "next/link";
import { POLE_ORDER, POLE_THEMES } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BG_INK,
  INK,
  PAGE_X,
  R_BTN,
  R_CARD,
  RING_SOFT,
  SECTION_PAD,
  SHADOW_BANNER,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
} from "@/lib/home-ui";
import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";

/* ------------------------------------------------------------------ */
/*  Valeurs clés — affichées en grille dans la section Hero            */
/* ------------------------------------------------------------------ */
const VALUES = [
  { word: "Optimiser", desc: "Chaque projet peut être amélioré, simplifié, rationalisé." },
  { word: "Votre expérience", desc: "La réussite se mesure à la façon dont un projet est vécu au quotidien." },
  { word: "Services exceptionnels", desc: "Disponibilité, écoute, rigueur et engagement dans la durée." },
] as const;

/* ------------------------------------------------------------------ */
/*  Capacités — grille « expertise »                                   */
/* ------------------------------------------------------------------ */
const CAPABILITIES = [
  { title: "Analyse des usages", desc: "Comprendre les usages réels avant de concevoir." },
  { title: "Architectures évolutives", desc: "Concevoir des systèmes fiables et pérennes." },
  { title: "Coordination terrain", desc: "Piloter les intervenants et assurer la continuité." },
  { title: "Maintenance durable", desc: "Garantir la performance des solutions dans le temps." },
] as const;

/* ------------------------------------------------------------------ */
/*  Pôles                                                              */
/* ------------------------------------------------------------------ */
const POLE_DESCRIPTIONS: Record<string, string> = {
  digital:
    "Sites web, plateformes, contenus, vidéo, marketing digital et réseaux sociaux.",
  solutions:
    "Sûreté électronique, vidéosurveillance, contrôle d'accès, réseaux, audiovisuel, GTB.",
  it:
    "Infrastructures informatiques, infogérance, cybersécurité, environnements collaboratifs.",
};

export function AboutPageContent() {
  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(13,11,74,0.06),transparent_55%)]"
          aria-hidden
        />
        <div className={`relative mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
          <div className="pb-10 pt-16 sm:pb-14 sm:pt-24 lg:pb-20 lg:pt-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white">
                À propos
              </div>
              <h1 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#0D0B4A] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                Optimisez vos expériences
                <br className="hidden sm:block" />
                <span className="text-[#0D0B4A]/50"> avec des services exceptionnels</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#0D0B4A]/65 sm:mt-7 sm:text-lg sm:leading-relaxed">
                Ovedex est née d&apos;une conviction simple&nbsp;: la technologie ne doit jamais
                compliquer la vie des utilisateurs. Elle doit la rendre plus fluide, plus sûre,
                plus efficace.
              </p>
            </div>

            {/* Valeurs — 3 colonnes */}
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:mt-16">
              {VALUES.map((v) => (
                <div
                  key={v.word}
                  className={`relative overflow-hidden ${R_CARD} ${BD_CARD} bg-white p-5 ${SHADOW_SURFACE} sm:p-6`}
                >
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-[#0D0B4A]" aria-hidden />
                  <p className="pl-3 font-display text-base font-bold text-[#0D0B4A] sm:text-lg">
                    {v.word}
                  </p>
                  <p className="mt-2 pl-3 text-sm leading-relaxed text-[#0D0B4A]/65">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── HISTOIRE ────────────────────── */}
      <section className="bg-neutral-50">
        <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X} ${SECTION_PAD}`}>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Gauche — titre + signature */}
            <div className="lg:col-span-2">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white">
                ADN
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-[#0D0B4A] sm:text-3xl lg:text-[2rem]">
                L&apos;histoire
                <br />
                d&apos;Ovedex
              </h2>
              <blockquote className="mt-6 border-l-[3px] border-[#0D0B4A]/20 py-1 pl-5 font-display text-base font-semibold leading-snug text-[#0D0B4A] sm:text-lg lg:mt-8">
                &laquo;&thinsp;Optimisez vos expériences avec des services exceptionnels.&thinsp;&raquo;
              </blockquote>
            </div>

            {/* Droite — texte */}
            <div className="space-y-5 font-sans text-base leading-relaxed text-[#0D0B4A]/75 sm:text-[1.05rem] lg:col-span-3">
              <p>
                Trop souvent, les projets techniques sont vécus comme complexes, fragmentés,
                impersonnels. Ovedex est née pour changer cela.
              </p>
              <p>
                L&apos;histoire d&apos;Ovedex est celle d&apos;un dirigeant issu du terrain,
                confronté très tôt à des projets où les études, l&apos;exécution et
                l&apos;exploitation ne se parlaient pas toujours. Où les clients devaient
                jongler entre plusieurs interlocuteurs, sans avoir une vision claire ni un
                responsable réellement engagé.
              </p>
              <p>
                Ovedex est née de ce constat, avec l&apos;envie de créer un partenaire
                différent, capable de relier la technique, l&apos;opérationnel et l&apos;humain.
              </p>
              <p>
                Ovedex a grandi en structurant ses expertises autour de pôles complémentaires,
                tout en conservant un même état d&apos;esprit&nbsp;: faire bien, et le faire
                avec sens. Chaque projet est une rencontre, chaque installation une
                responsabilité, chaque client une relation dans la durée.
              </p>
              <p className={`${R_CARD} bg-[#0D0B4A] p-5 text-sm leading-relaxed text-white/90 sm:p-6 sm:text-base`}>
                Ovedex n&apos;est pas seulement une entreprise de solutions techniques.
                C&apos;est une promesse&nbsp;: transformer la complexité en expérience
                maîtrisée, et construire, projet après projet, une relation de confiance
                durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── EXPERTISE ────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(13,11,74,0.04),transparent_50%)]"
          aria-hidden
        />
        <div className={`relative mx-auto w-full max-w-screen-xl ${PAGE_X} ${SECTION_PAD}`}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white sm:mb-5">
              Expertise
            </div>
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-[#0D0B4A] sm:text-3xl lg:text-[2rem]">
              Une maîtrise transversale des technologies
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0D0B4A]/65 sm:mt-5 sm:text-[1.05rem]">
              Nos équipes interviennent sur la sûreté électronique, les réseaux, l&apos;audiovisuel
              professionnel, le contrôle d&apos;accès et les infrastructures intelligentes.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:gap-5">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className={`group relative flex items-start gap-4 overflow-hidden ${R_CARD} ${BD_CARD} bg-white p-5 transition duration-300 ease-out hover:-translate-y-0.5 ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER} sm:p-6`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center ${R_BTN} ${BG_INK} font-display text-sm font-bold text-white`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-base font-bold text-[#0D0B4A]">{cap.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#0D0B4A]/65">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── OVEDEX & ORENIS ────────────────────── */}
      <section className="bg-neutral-50">
        <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X} ${SECTION_PAD}`}>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white sm:mb-5">
              Complémentarité
            </div>
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-[#0D0B4A] sm:text-3xl lg:text-[2rem]">
              Ovedex &amp; Orenis
            </h2>
            <p className="mt-2 text-base text-[#0D0B4A]/55 sm:text-lg">
              Deux entités complémentaires, deux rôles distincts
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 lg:gap-5">
              {/* Orenis */}
              <div className={`${R_CARD} ${BD_CARD} bg-white p-6 ${SHADOW_SURFACE} sm:p-7`}>
                <p className="mb-1 font-display text-xs font-semibold uppercase tracking-widest text-[#0D0B4A]/40">
                  Bureau d&apos;études
                </p>
                <p className="font-display text-lg font-bold text-[#0D0B4A] sm:text-xl">Orenis</p>
                <p className="mt-3 text-sm leading-relaxed text-[#0D0B4A]/65">
                  Conception, études techniques, études d&apos;exécution et production de
                  livrables&nbsp;: plans, DOE, dossiers techniques.
                </p>
              </div>
              {/* Ovedex */}
              <div className={`${R_CARD} bg-[#0D0B4A] p-6 ${SHADOW_BANNER} sm:p-7`}>
                <p className="mb-1 font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                  Intégrateur opérationnel
                </p>
                <p className="font-display text-lg font-bold text-white sm:text-xl">Ovedex</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Solutions concrètes installées, exploitées et maintenues. Pilotage de
                  projets, coordination terrain et continuité de service.
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#0D0B4A]/65 sm:mt-8 sm:text-[1.05rem]">
              Cette complémentarité permet d&apos;offrir une vision globale&nbsp;: de la
              réflexion technique à la réalisation opérationnelle, sans rupture.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────── PÔLES ────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(13,11,74,0.05),transparent_55%)]"
          aria-hidden
        />
        <div className={`relative mx-auto w-full max-w-screen-xl ${PAGE_X} ${SECTION_PAD}`}>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white sm:mb-5">
              Organisation
            </div>
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-[#0D0B4A] sm:text-3xl lg:text-[2rem]">
              Une équipe structurée par pôles d&apos;expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0D0B4A]/65 sm:mt-5 sm:text-[1.05rem]">
              Chaque pôle repose sur des compétences spécifiques. Cette organisation permet
              d&apos;aborder les projets de manière transversale tout en conservant un haut
              niveau de spécialisation.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 lg:gap-6">
            {POLE_ORDER.map((poleId) => {
              const theme = POLE_THEMES[poleId];
              return (
                <Link
                  key={poleId}
                  href={`/${poleId}`}
                  className={`group flex flex-col overflow-hidden ${R_CARD} ${BD_CARD} bg-white no-underline transition duration-300 ease-out hover:-translate-y-1 ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`}
                >
                  {/* Barre de couleur */}
                  <div className={`h-1.5 w-full ${theme.primary.bgClass}`} />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center ${R_BTN} ${theme.secondary.bgClass}`}>
                      <span className={`font-display text-sm font-bold ${theme.primary.bgClass === "bg-emerald-400" ? "text-emerald-600" : theme.primary.bgClass === "bg-blue-400" ? "text-blue-600" : "text-purple-600"}`}>
                        {theme.label.charAt(0)}
                      </span>
                    </div>
                    <p className="font-display text-lg font-bold text-[#0D0B4A]">
                      {theme.label}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0D0B4A]/60">
                      {POLE_DESCRIPTIONS[poleId]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0D0B4A]/50 transition-colors group-hover:text-[#0D0B4A]">
                      Découvrir
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
            <p className="text-base leading-relaxed text-[#0D0B4A]/60 sm:text-[1.05rem]">
              La force d&apos;Ovedex réside dans la collaboration entre ses pôles,
              chacun apportant son expertise sans silos, pour des solutions complètes
              alignées sur les enjeux techniques, informatiques et digitaux des clients.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────── CTA ────────────────────── */}
      <ClosingCtaSection
        heading="Prêt à découvrir Ovedex ?"
        body="Une technostructure agile et un partenaire de confiance dans tous vos défis numériques et technologiques."
      />
    </>
  );
}
