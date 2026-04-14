import { DigitalMaintenancePage } from "@/components/digital-services-landing/digital-maintenance-page";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";

const path = "/maintenance-digital";
const canonical = absoluteUrl(path);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Livrez-vous tous types de sites web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui : vitrines, corporate, e-commerce, marketplace, prototypes ou refontes complètes.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous un accompagnement long terme ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Maintenance, optimisation continue, production de contenu, campagnes, automatisation… tout peut être géré par notre équipe.",
      },
    },
    {
      "@type": "Question",
      name: "Pouvez-vous gérer nos publicités Google ou Meta Ads ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous créons, optimisons et pilotons vos campagnes avec un suivi mensuel détaillé.",
      },
    },
    {
      "@type": "Question",
      name: "Faites-vous aussi la création de photos et vidéos ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui : shooting photo, vidéo corporate, vidéos sociales, montage, animation, motion design.",
      },
    },
    {
      "@type": "Question",
      name: "Intégrez-vous des solutions CRM et automatisations ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous déployons HubSpot, Make, Zapier, Notion, Trello, et automatisations sur mesure.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Maintenance Digital — offres & tarifs | Ovedex",
  description:
    "Packs Start, Flow et Care : mises à jour, sauvegardes, sécurité, performance et accompagnement. Contactez-nous pour une offre adaptée à votre site.",
  alternates: { canonical },
  openGraph: {
    title: "Maintenance Digital — offres & tarifs | Ovedex",
    description:
      "Maintenance web sur mesure : CMS, sauvegardes, monitoring, SEO technique, contenus et conformité. Demandez nos tarifs.",
    type: "website",
    url: canonical,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maintenance Digital — offres & tarifs | Ovedex",
    description:
      "Maintenance web sur mesure : CMS, sauvegardes, monitoring, SEO technique, contenus et conformité. Demandez nos tarifs.",
  },
};

export default function MaintenanceDigitalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <DigitalMaintenancePage />
    </>
  );
}
