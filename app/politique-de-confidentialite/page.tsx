import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { CONTACT } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Modalités de collecte et de traitement des données personnelles sur le site Ovedex.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageShell
      title="Politique de confidentialité"
      description="Dernière mise à jour : avril 2026. Ce document décrit comment Ovedex traite les données personnelles dans le cadre du site vitrine et des prises de contact."
    >
      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Responsable du traitement</h2>
        <p className="mt-3">
          Le responsable du traitement des données est <strong className="font-semibold text-[#0D0B4A]">{CONTACT.company}</strong>,{" "}
          {CONTACT.addressLine1}, {CONTACT.addressLine2}, {CONTACT.country}.
        </p>
        <p className="mt-3">
          Pour toute question relative à vos données&nbsp;:{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-[#0D0B4A] break-all hover:underline">
            {CONTACT.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Données collectées et finalités</h2>
        <p className="mt-3">Nous pouvons traiter les catégories de données suivantes&nbsp;:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#0D0B4A]/50">
          <li>
            <strong className="font-semibold text-[#0D0B4A]">Données de navigation et techniques</strong> (adresse IP
            approximative, type d’appareil, pages consultées, logs techniques)&nbsp;: sécurité du site, mesure
            d’audience anonymisée lorsque des outils d’analyse sont utilisés, et amélioration de l’expérience.
          </li>
          <li>
            <strong className="font-semibold text-[#0D0B4A]">Données communiquées via les formulaires</strong> (nom,
            prénom, société, adresse e-mail, message, etc.)&nbsp;: répondre à votre demande, vous recontacter, gérer la
            relation commerciale le cas échéant.
          </li>
          <li>
            <strong className="font-semibold text-[#0D0B4A]">Données liées à la newsletter</strong> (adresse
            e-mail)&nbsp;: envoi d’informations sur nos activités, dans la limite de votre consentement ou de notre
            intérêt légitime selon le cadre applicable.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Bases légales</h2>
        <p className="mt-3">
          Les traitements reposent notamment sur l’exécution de mesures précontractuelles ou contractuelles, votre
          consentement lorsqu’il est requis (par exemple pour certaines communications marketing), notre intérêt
          légitime (sécurité, amélioration du site) ou une obligation légale.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Durée de conservation</h2>
        <p className="mt-3">
          Les données issues des formulaires de contact sont conservées le temps nécessaire au traitement de la demande
          puis archivées selon les obligations légales applicables. Les données marketing sont conservées jusqu’à
          retrait du consentement ou trois ans à compter du dernier contact, selon les usages en vigueur.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Destinataires et sous-traitants</h2>
        <p className="mt-3">
          Les données sont accessibles uniquement aux personnes habilitées au sein d’{CONTACT.company} et, le cas
          échéant, à des prestataires techniques (hébergement, messagerie, outils CRM) contractuellement tenus à la
          confidentialité et au respect du RGPD.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Transferts hors Union européenne</h2>
        <p className="mt-3">
          Lorsque des prestataires sont situés en dehors de l’Espace économique européen, nous nous assurons qu’un
          niveau de protection adéquat est garanti (décision d’adéquation de la Commission européenne ou clauses
          contractuelles types approuvées).
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Vos droits</h2>
        <p className="mt-3">
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, de
          portabilité et d’opposition, ainsi que du droit de retirer votre consentement à tout moment lorsque le
          traitement en est fondé. Vous pouvez introduire une réclamation auprès de la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0D0B4A] underline-offset-2 hover:underline"
          >
            cnil.fr
          </a>
          ).
        </p>
        <p className="mt-3">
          Pour exercer vos droits, écrivez-nous à l’adresse indiquée ci-dessus en joignant, le cas échéant, une copie
          d’un justificatif d’identité.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Cookies</h2>
        <p className="mt-3">
          Des cookies ou traceurs peuvent être déposés lors de votre visite. Vous pouvez paramétrer votre navigateur
          pour les refuser ou les supprimer. Pour plus de détail sur les finalités et la durée de conservation, une
          information complémentaire pourra être ajoutée lorsque des outils de mesure d’audience ou publicitaires sont
          activés sur le site.
        </p>
      </section>

      <p className="border-t border-black/10 pt-6 text-sm text-neutral-600">
        Voir également les{" "}
        <Link href="/mentions-legales" className="font-semibold text-[#0D0B4A] underline-offset-2 hover:underline">
          mentions légales
        </Link>{" "}
        et les{" "}
        <Link href="/conditions-generales-de-vente" className="font-semibold text-[#0D0B4A] underline-offset-2 hover:underline">
          conditions générales de vente
        </Link>
        .
      </p>
    </LegalPageShell>
  );
}
