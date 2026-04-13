import Image from "next/image";
import Link from "next/link";
import { InstagramGlyph, LinkedInGlyph } from "@/components/brand-social-icons";
import { CONTACT } from "@/lib/contact";
import { BG_INK, INK, PAGE_X, R_BTN, SHADOW_POP, TEXT_INK } from "@/lib/home-ui";

const domainLinks = [
  { href: "/digital", label: "Digital" },
  { href: "/solutions", label: "Solutions" },
  { href: "/it", label: "IT" },
] as const;

const companyLinks = [
  { href: "/contact", label: "Contactez-nous" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
  { href: "/conditions-generales-de-vente", label: "CGV" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-white pt-12 sm:pt-14 lg:pt-20">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 sm:gap-12 sm:pb-16 lg:grid-cols-4 lg:gap-10 lg:pb-20 xl:gap-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#0D0B4A]/30 focus-visible:ring-offset-2">
              <Image
                width={220}
                height={72}
                loading="lazy"
                alt="Ovedex"
                src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c76c50366b1991a7c9aa9_logovedex%201%20(1).svg"
                className="h-auto w-[200px] max-w-full sm:w-[220px]"
              />
            </Link>
            <p
              className="mt-6 max-w-xs font-sans text-base font-normal leading-relaxed"
              style={{ color: INK }}
            >
              Trois expertises, une vision, une croissance partagée.
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

          <nav aria-label="Domaines" className="flex flex-col">
            <p className="mb-4 font-display text-base font-bold" style={{ color: INK }}>
              Domaines
            </p>
            <ul className="flex flex-col gap-1">
              {domainLinks.map((item) => (
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

        <div className="border-t border-neutral-200 py-6 text-center sm:py-8">
          <p className="font-sans text-sm font-normal text-neutral-600">
            Copyright © 2026 Ovedex. Tous droits réservés.
          </p>
        </div>
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
        href="https://api.whatsapp.com/send/?phone=33651758513&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2.5 right-2.5 z-30 sm:bottom-[1%] sm:right-[1%]"
        aria-label="Contacter Ovedex sur WhatsApp"
      >
        <span
          className={`relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/30 ${SHADOW_POP} transition-transform hover:scale-105 sm:h-24 sm:w-24`}
          style={{ backgroundColor: INK }}
        >
          <Image
            width={43}
            height={43}
            loading="lazy"
            alt=""
            src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69305d25a750d6d9e5271492_whatsapp.svg"
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
          <span className="absolute left-1.5 top-1.5 h-4 w-4 rounded-full bg-green-600 ring-2 ring-white" aria-hidden />
        </span>
      </Link>
    </footer>
  );
}
