import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-[#0a0f1c] text-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Ovedex
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-300">
              Trois expertises, une vision, une croissance partagée.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Domaines
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#digital" className="hover:text-white">
                  Digital
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#it" className="hover:text-white">
                  IT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Entreprise
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-white">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-generales-de-vente" className="hover:text-white">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Newsletter
          </p>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Inscrivez-vous pour être tenu au courant des nouveautés.
          </p>
          <NewsletterForm />
          <p className="mt-3 text-xs text-zinc-500">
            En vous inscrivant, vous acceptez notre{" "}
            <Link href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-zinc-300">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
        <p className="mt-12 text-center text-xs text-zinc-600">
          Copyright © {new Date().getFullYear()} Ovedex. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
