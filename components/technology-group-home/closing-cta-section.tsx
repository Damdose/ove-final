import Link from "next/link";
import { BRAND } from "@/lib/brand-design-system";
import { CONTACT } from "@/lib/contact";
import { PAGE_X, R_BTN, R_CARD, SECTION_PAD, SHADOW_BANNER, SHADOW_THUMB, TEXT_INK } from "@/lib/home-ui";

export type ClosingCtaSectionProps = {
  heading?: string;
  body?: string;
};

export function ClosingCtaSection({
  heading = "Prêt à avancer avec Ovedex ?",
  body = "Échangeons sur votre projet — les coordonnées complètes figurent sur la page contact.",
}: ClosingCtaSectionProps = {}) {
  return (
    <section id="contact" className={BRAND.canvas.bgClass}>
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X} ${SECTION_PAD}`}>
        <div
          className={`relative min-h-[10.5rem] overflow-hidden ${R_CARD} ${SHADOW_BANNER} bg-brand-ink ring-1 ring-black/[0.06] sm:min-h-[11.5rem] lg:min-h-[12rem]`}
        >
          <div className="relative z-10 flex min-h-[10.5rem] flex-col justify-center gap-5 px-6 py-7 sm:min-h-[11.5rem] sm:px-8 sm:py-8 lg:min-h-[12rem] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:py-7 xl:px-14">
            <div className="max-w-2xl lg:max-w-none lg:flex-1 xl:max-w-3xl">
              <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[1.9rem] lg:leading-snug xl:text-4xl">
                {heading}
              </h2>
              <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-white/88 sm:text-base lg:mt-2.5">
                {body}
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href="/contact"
                className={`inline-flex h-11 items-center justify-center ${R_BTN} bg-white px-6 text-sm font-semibold ${TEXT_INK} no-underline ${SHADOW_THUMB} transition hover:bg-white/95 sm:h-12 sm:px-7 sm:text-base`}
              >
                Nous contacter
              </Link>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 items-center justify-center ${R_BTN} border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 sm:h-12 sm:px-6 sm:text-base`}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
