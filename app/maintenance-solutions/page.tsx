import { SolutionsMaintenancePage } from "@/components/technical-solutions-landing/solutions-maintenance-page";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";

const path = "/maintenance-solutions";
const canonical = absoluteUrl(path);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels types de bâtiments prenez-vous en charge ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PME, ETI, sites industriels, hôpitaux, hôtels, commerces, bâtiments publics et sites sensibles nécessitant des solutions de sécurité avancées.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des marques et technologies certifiées ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Ovedex Solutions intègre uniquement des technologies reconnues : Hikvision, Aritech, Axis, Honeywell, LenelS2, Siemens, Bosch, Milestone, Genetec…",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous la maintenance et le support des installations ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous assurons la maintenance préventive, corrective, l’évolution des systèmes et les interventions rapides en cas d’incident.",
      },
    },
    {
      "@type": "Question",
      name: "Pouvez-vous reprendre un projet ou une installation existante ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nos équipes réalisent un audit complet avant d’intégrer, remettre à niveau ou étendre vos installations.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous sur plusieurs sites ou réseaux multi-établissements ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous gérons des installations multi-sites pour des groupes, réseaux de magasins, bâtiments tertiaires ou entreprises multisites.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Maintenance Solutions — offres & tarifs | Ovedex",
  description:
    "Packs Start, Flow et Care pour la sûreté : préventif, supervision, GTR et conformité. Contactez-nous pour une offre adaptée à vos installations.",
  alternates: { canonical },
  openGraph: {
    title: "Maintenance Solutions — offres & tarifs | Ovedex",
    description:
      "Maintenance des équipements de sécurité : vidéo, contrôle d’accès, intrusion, supervision et pilotage. Demandez nos tarifs.",
    type: "website",
    url: canonical,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maintenance Solutions — offres & tarifs | Ovedex",
    description:
      "Maintenance des équipements de sécurité : vidéo, contrôle d’accès, intrusion, supervision et pilotage. Demandez nos tarifs.",
  },
};

export default function MaintenanceSolutionsRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SolutionsMaintenancePage />
    </>
  );
}
