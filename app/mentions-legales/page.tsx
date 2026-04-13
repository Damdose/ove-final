import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { CONTACT } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Ovedex",
  description: "Informations sur l’éditeur du site, l’hébergement et la propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell
      title="Mentions légales"
      description="Informations réglementaires concernant le site ovedex.com et son éditeur."
    >
      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Éditeur du site</h2>
        <p className="mt-3">
          Le site est édité par <strong className="font-semibold text-[#0D0B4A]">{CONTACT.company}</strong>, dont le
          siège est situé à l’adresse suivante&nbsp;:
        </p>
        <p className="mt-2">
          {CONTACT.addressLine1}
          <br />
          {CONTACT.addressLine2}, {CONTACT.country}
        </p>
        <ul className="mt-4 list-none space-y-2 pl-0">
          <li>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Téléphone</span>
            <br />
            <a href={`tel:${CONTACT.phoneTel}`} className="font-semibold text-[#0D0B4A] hover:underline">
              {CONTACT.phoneDisplay}
            </a>
          </li>
          <li>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">E-mail</span>
            <br />
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-[#0D0B4A] break-all hover:underline">
              {CONTACT.email}
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm text-neutral-600">
          Les mentions complémentaires obligatoires (forme juridique, capital social, numéro RCS, numéro de TVA
          intracommunautaire, etc.) seront indiquées ici dès leur validation auprès des autorités compétentes.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Directeur de la publication</h2>
        <p className="mt-3">Le directeur de la publication est le représentant légal d’{CONTACT.company}.</p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Hébergement</h2>
        <p className="mt-3">
          Le site est hébergé par <strong className="font-semibold text-[#0D0B4A]">Vercel Inc.</strong>, 340 S Lemon
          Ave #4133, Walnut, CA 91789, États-Unis —{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0D0B4A] underline-offset-2 hover:underline"
          >
            vercel.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Propriété intellectuelle</h2>
        <p className="mt-3">
          L’ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, structure, etc.) est
          la propriété exclusive d’{CONTACT.company} ou de ses partenaires, sauf mention contraire, et est protégé par
          les législations françaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p className="mt-3">
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du
          site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Données personnelles</h2>
        <p className="mt-3">
          Pour les informations relatives au traitement des données personnelles, veuillez consulter notre{" "}
          <Link href="/politique-de-confidentialite" className="font-semibold text-[#0D0B4A] underline-offset-2 hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
