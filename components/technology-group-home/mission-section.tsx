import {
  PAGE_X,
  R_CARD,
  SECTION_PAD,
  SHADOW_MEDIA,
  SHADOW_SURFACE_HOVER,
} from "@/lib/home-ui";

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfc]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_65%_at_50%_-15%,rgba(13,11,74,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[15%] top-1/2 h-[min(36rem,70vw)] w-[min(36rem,70vw)] -translate-y-1/2 rounded-full bg-[#0D0B4A]/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[10%] bottom-0 h-[min(28rem,55vw)] w-[min(28rem,55vw)] translate-y-1/4 rounded-full bg-[#0D0B4A]/[0.035] blur-3xl"
        aria-hidden
      />

      <div
        className={`relative mx-auto w-full max-w-screen-xl ${PAGE_X} ${SECTION_PAD} lg:py-28`}
      >
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-20">
          <div className="mb-5 inline-flex items-center justify-center rounded-full bg-[#0D0B4A] px-5 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white sm:mb-6">
            Mission
          </div>
          <h2 className="font-display text-[1.75rem] font-bold leading-[1.1] tracking-tight text-[#0D0B4A] sm:text-4xl lg:text-5xl lg:leading-[1.08]">
            Notre mission
          </h2>
        </header>

        <div className="mx-auto max-w-5xl">
          <figure
            className={`group relative overflow-hidden ${R_CARD} border border-[#0D0B4A]/[0.1] bg-gradient-to-br from-white via-white to-[#eef0f4] px-8 py-14 ${SHADOW_MEDIA} ring-1 ring-white/90 transition duration-500 ease-out hover:border-[#0D0B4A]/[0.14] ${SHADOW_SURFACE_HOVER} sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24`}
          >
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0D0B4A] via-[#0D0B4A]/85 to-[#0D0B4A]/45"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute left-3 top-4 font-display text-[clamp(5rem,22vw,11rem)] font-bold leading-none text-[#0D0B4A]/[0.06] sm:left-5 sm:top-6 md:left-8 md:top-8"
              aria-hidden
            >
              «
            </span>
            <blockquote className="relative z-[1] mx-auto max-w-4xl text-center">
              <p className="text-balance font-display text-xl font-semibold leading-snug tracking-tight text-[#0D0B4A] sm:text-2xl sm:leading-relaxed md:text-[1.75rem] md:leading-[1.4] lg:text-3xl lg:leading-[1.42]">
                Ovedex se positionne comme un partenaire de confiance, reconnu pour son expertise et sa
                capacité à concevoir des solutions innovantes dans les domaines techniques, IT et
                digitaux.
              </p>
            </blockquote>
            <div
              className="relative z-[1] mx-auto mt-12 flex max-w-md justify-center gap-2.5 sm:mt-14 md:mt-16"
              aria-hidden
            >
              <span className="h-1.5 flex-1 max-w-[5rem] rounded-full bg-[#0D0B4A]/20" />
              <span className="h-1.5 flex-1 max-w-[5rem] rounded-full bg-[#0D0B4A]/35" />
              <span className="h-1.5 flex-1 max-w-[5rem] rounded-full bg-[#0D0B4A]/50" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
