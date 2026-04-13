import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { CONTACT } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Ovedex",
  description: "Conditions applicables aux prestations et services proposés par Ovedex.",
};

export default function CgvPage() {
  return (
    <LegalPageShell
      title="Conditions générales de vente"
      description="Les présentes conditions générales de vente (CGV) s’appliquent aux prestations de services et d’accompagnement proposées par Ovedex auprès de ses clients professionnels, sauf accord écrit contraire."
    >
      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 1 — Objet</h2>
        <p className="mt-3">
          Les CGV définissent les droits et obligations des parties dans le cadre de la vente des prestations
          commercialisées par <strong className="font-semibold text-[#0D0B4A]">{CONTACT.company}</strong> (ci-après «
          le Prestataire ») à tout client professionnel (ci-après « le Client »). Elles prévalent sur toute autre
          condition figurant dans les documents du Client, sauf dérogation expresse et préalablement acceptée par
          écrit.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 2 — Devis et commande</h2>
        <p className="mt-3">
          Toute prestation fait l’objet d’un devis ou d’une proposition commerciale détaillant la nature des services,
          les délais indicatifs, les prix et les conditions de facturation. La commande est réputée ferme à réception par
          le Prestataire de l’accord du Client sur le devis (signature, bon pour accord ou confirmation par e-mail).
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 3 — Prix et modalités de paiement</h2>
        <p className="mt-3">
          Les prix sont indiqués en euros hors taxes, sauf mention contraire. La TVA applicable est celle en vigueur à
          la date de facturation. Le paiement s’effectue selon l’échéancier figurant sur le devis ou la facture. Tout
          retard de paiement pourra entraîner des pénalités de retard au taux légal en vigueur, ainsi qu’une indemnité
          forfaitaire pour frais de recouvrement lorsque la réglementation l’autorise.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 4 — Exécution des prestations</h2>
        <p className="mt-3">
          Le Prestataire s’engage à mettre en œuvre les moyens nécessaires à la bonne exécution des prestations. Les
          délais communiqués sont indicatifs. Le Client s’engage à fournir les informations, accès et validations
          nécessaires dans les délais utiles. Tout retard imputable au Client pourra reporter la livraison ou engendrer
          des prestations complémentaires facturées en sus.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 5 — Obligations du Client</h2>
        <p className="mt-3">
          Le Client garantit l’exactitude des informations transmises et dispose des droits nécessaires sur les
          contenus et données qu’il fournit. Il est seul responsable de l’usage qu’il fait des livrables et du respect
          des lois et réglementations applicables à son activité.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 6 — Propriété intellectuelle</h2>
        <p className="mt-3">
          Sauf stipulation contraire au contrat ou au devis, les éléments préexistants du Prestataire demeurent sa
          propriété exclusive. Les livrables spécifiques au Client sont cédés ou licenciés dans les conditions définies
          au devis ou au contrat de prestation.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 7 — Responsabilité</h2>
        <p className="mt-3">
          La responsabilité du Prestataire, toutes causes confondues, est limitée au montant des sommes effectivement
          payées par le Client au titre de la prestation concernée sur les douze (12) mois précédant le fait
          générateur, sauf faute lourde ou dol et dans la limite des dispositions d’ordre public.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 8 — Confidentialité</h2>
        <p className="mt-3">
          Chaque partie s’engage à préserver la confidentialité des informations identifiées comme confidentielles ou
          manifestement sensibles échangées dans le cadre de la relation commerciale.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 9 — Résiliation</h2>
        <p className="mt-3">
          En cas de manquement grave à l’une des obligations contractuelles, l’autre partie pourra résilier le contrat
          de plein droit, sous réserve d’une mise en demeure restée infructueuse dans un délai de quinze (15) jours,
          sauf urgence dûment justifiée. Les dispositions relatives aux paiements dus et à la confidentialité survivront à
          la résiliation.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 10 — Droit applicable et litiges</h2>
        <p className="mt-3">
          Les CGV sont régies par le droit français. À défaut de résolution amiable, les tribunaux compétents seront ceux
          du ressort du siège social du Prestataire, sous réserve des règles d’ordre public applicables.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-[#0D0B4A]">Article 11 — Contact</h2>
        <p className="mt-3">
          Pour toute question relative aux présentes CGV&nbsp;:{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-[#0D0B4A] break-all hover:underline">
            {CONTACT.email}
          </a>
          .
        </p>
      </section>

      <p className="border-t border-black/10 pt-6 text-sm text-neutral-600">
        <Link href="/mentions-legales" className="font-semibold text-[#0D0B4A] underline-offset-2 hover:underline">
          Mentions légales
        </Link>
        {" · "}
        <Link
          href="/politique-de-confidentialite"
          className="font-semibold text-[#0D0B4A] underline-offset-2 hover:underline"
        >
          Politique de confidentialité
        </Link>
      </p>
    </LegalPageShell>
  );
}
