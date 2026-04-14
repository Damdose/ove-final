import Image from "next/image";
import Link from "next/link";
import { InstagramGlyph, LinkedInGlyph } from "@/components/brand-social-icons";
import { CONTACT } from "@/lib/contact";
import type { PoleId } from "@/lib/brand-design-system";
import { POLE_THEMES } from "@/lib/brand-design-system";
import type { PoleFooterServiceGroup } from "@/lib/pole-footer-service-groups";
import { BG_INK, INK, PAGE_X, R_BTN, SHADOW_POP, TEXT_INK } from "@/lib/home-ui";
import { POLE_FOOTER_TAGLINE, poleFooterPrimaryNav } from "@/lib/pole-footer-nav";

const domainLinks = [
  { href: "/digital", label: "Digital" },
  { href: "/solutions", label: "Solutions" },
  { href: "/it", label: "IT" },
] as const;

const companyLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contactez-nous" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
  { href: "/conditions-generales-de-vente", label: "CGV" },
] as const;

export type SiteFooterProps = {
  /** Si défini, colonne « Domaines » remplacée par la navigation du pôle et texte d’intro adapté. */
  pole?: PoleId;
};

export async function SiteFooter({ pole }: SiteFooterProps = {}) {
  const intro = pole ? POLE_FOOTER_TAGLINE[pole] : "Trois expertises, une vision, une croissance partagée.";
  const primaryNav = pole ? poleFooterPrimaryNav(pole) : domainLinks;
  const primaryNavLabel = pole ? `Pôle ${POLE_THEMES[pole].label}` : "Domaines";
  const { poleFooterServiceGroups } = await import("@/lib/pole-footer-service-groups");
  const serviceGroups = pole != null ? poleFooterServiceGroups(pole) : null;
  const poleLabel = pole ? POLE_THEMES[pole].label : "";


  return (
    <footer className="border-t border-black/[0.06] bg-white pt-12 sm:pt-14 lg:pt-20">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 sm:gap-12 sm:pb-14 lg:grid-cols-4 lg:gap-10 lg:pb-16 xl:gap-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#0D0B4A]/30 focus-visible:ring-offset-2"
              aria-label="Ovedex — accueil groupe"
            >
              <Image
                width={220}
                height={72}
                loading="lazy"
                alt=""
                src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c76c50366b1991a7c9aa9_logovedex%201%20(1).svg"
                className="h-auto w-[200px] max-w-full sm:w-[220px]"
              />
            </Link>
            <p
              className="mt-6 max-w-xs font-sans text-base font-normal leading-relaxed"
              style={{ color: INK }}
            >
              {intro}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={CONTACT.linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-10 w-10 items-center justify-center ${R_BTN} ${BG_INK} text-white no-underline transition-colors hover:bg-[#15124a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40`}
                aria-label="Ovedex sur LinkedIn"
              >
                <LinkedInGlyph className="h-5 w-5" />
              </Link>
              <Link
                href={CONTACT.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-10 w-10 items-center justify-center ${R_BTN} ${BG_INK} text-white no-underline transition-colors hover:bg-[#15124a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40`}
                aria-label="Ovedex sur Instagram"
              >
                <InstagramGlyph className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <nav aria-label={primaryNavLabel} className="flex flex-col">
            <p className="mb-4 font-display text-base font-bold" style={{ color: INK }}>
              {primaryNavLabel}
            </p>
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1.5 font-sans text-base font-normal no-underline transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ color: INK }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Entreprise" className="flex flex-col">
            <p className="mb-4 font-display text-base font-bold" style={{ color: INK }}>
              Entreprise
            </p>
            <ul className="flex flex-col gap-1">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1.5 font-sans text-base font-normal no-underline transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ color: INK }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-4 font-display text-base font-bold leading-snug" style={{ color: INK }}>
              S&apos;abonner à notre newsletter
            </p>
            <p className="mb-4 font-sans text-sm font-normal leading-relaxed text-neutral-600 sm:text-base">
              Inscrivez-vous à notre newsletter pour être tenu au courant des nouveautés.
            </p>
            <form
              id="footer-newsletter-form"
              name="email-form"
              method="get"
              className={`mb-3 flex flex-col gap-3 ${R_BTN} bg-neutral-100 p-1.5 pl-4 sm:flex-row sm:items-stretch sm:gap-0 sm:pr-1.5`}
              aria-label="Inscription newsletter"
            >
              <input
                className={`min-h-11 min-w-0 flex-1 border-0 bg-transparent font-sans text-sm outline-none placeholder:text-neutral-400 ${TEXT_INK}`}
                maxLength={256}
                name="email-2"
                placeholder="Votre mail"
                type="email"
                id="email-2"
                required
              />
              <button
                type="submit"
                className={`shrink-0 ${R_BTN} ${BG_INK} px-5 py-2.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-92 sm:my-0.5 sm:px-6`}
              >
                S&apos;inscrire
              </button>
            </form>
            <p className="font-sans text-xs font-normal leading-relaxed text-neutral-500">
              En vous inscrivant, vous acceptez notre{" "}
              <Link href="/politique-de-confidentialite" className="underline underline-offset-2 hover:opacity-80">
                politique de confidentialité
              </Link>{" "}
              et consentez à recevoir des mises à jour.
            </p>
          </div>
        </div>
      </div>

      {serviceGroups ? (
        <nav
          aria-label={`Services ${poleLabel}`}
          className="w-full border-t border-neutral-200 bg-neutral-50 py-10 sm:py-12 lg:py-14"
        >
          <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
            <p className="mb-8 font-display text-lg font-bold tracking-tight sm:mb-10 sm:text-xl" style={{ color: INK }}>
              Services
            </p>
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12 xl:gap-x-12">
              {serviceGroups.map((group) => (
                <div key={group.heading} className="min-w-0">
                  <p className="mb-3 border-b border-neutral-200 pb-2 font-display text-sm font-bold leading-snug text-neutral-900">
                    {group.heading}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {group.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="inline-block py-0.5 font-sans text-sm font-normal leading-snug text-[#0D0B4A]/90 no-underline transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </nav>
      ) : null}


      <div className={`mx-auto w-full max-w-screen-xl border-t border-neutral-200 ${PAGE_X} py-6 text-center sm:py-8`}>
        <p className="font-sans text-sm font-normal text-neutral-600">
          Copyright © 2026 Ovedex. Tous droits réservés.
        </p>
      </div>

      <Image
        src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273c7887620f90d015c069_logovedex%201.svg"
        loading="lazy"
        alt=""
        width={1}
        height={1}
        className="hidden"
      />
      <Link
        href="/contact"
        className="fixed bottom-4 right-4 z-30 hidden sm:flex sm:bottom-6 sm:right-6"
        aria-label="Contacter un expert Ovedex"
      >
        <span
          className={`flex cursor-pointer items-center gap-2.5 rounded-full border border-white/20 bg-[#0D0B4A] px-5 py-3.5 font-sans text-sm font-semibold text-white ${SHADOW_POP} transition-transform hover:scale-105`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Contacter un expert
        </span>
      </Link>
    </footer>
  );
}
