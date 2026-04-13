import { BG_INK, PAGE_X } from "@/lib/home-ui";
import { ECOMMERCE_STATS } from "./digital-services-landing-content";

export function DigitalServiceLpTrustStats() {
  return (
    <section className={`${BG_INK} text-white`} aria-label="Indicateurs de confiance">
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {ECOMMERCE_STATS.map((row) => (
              <div key={row.id} className="text-center sm:text-left">
                <div className="font-display text-3xl font-bold tabular-nums text-white sm:text-4xl">{row.value}</div>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/88 sm:text-base">{row.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
