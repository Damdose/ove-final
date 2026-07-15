import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { ContactPageExperience } from "@/components/technology-group-home/contact-page-experience";
import { MarketingSiteLayout } from "@/components/technology-group-home/marketing-site-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Téléphone, e-mail, WhatsApp et formulaire : contactez l’équipe Ovedex pour vos projets Digital, Solutions et IT.",
  alternates: { canonical: "/contact" },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Contactez-nous — Ovedex",
    description:
      "Téléphone, e-mail, WhatsApp et formulaire : contactez l’équipe Ovedex pour vos projets Digital, Solutions et IT.",
    type: "website",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <MarketingSiteLayout>
      <ContactPageExperience />
    </MarketingSiteLayout>
  );
}
