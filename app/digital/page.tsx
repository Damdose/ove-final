import { DigitalServicesLandingPage } from "@/components/digital-services-landing/digital-services-landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pôle Digital — Création web, SEO & réseaux sociaux",
  description:
    "Ovedex Digital : création de sites web, SEO, gestion des réseaux sociaux, Google Ads, Meta Ads et création de contenus pour accélérer votre croissance en ligne.",
  alternates: { canonical: "/digital" },
  openGraph: {
    title: "Pôle Digital — Création web, SEO & réseaux sociaux",
    description:
      "Ovedex Digital : création de sites web, SEO, gestion des réseaux sociaux, Google Ads, Meta Ads et création de contenus pour accélérer votre croissance en ligne.",
    type: "website",
    url: "/digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pôle Digital — Création web, SEO & réseaux sociaux",
    description:
      "Ovedex Digital : création de sites web, SEO, gestion des réseaux sociaux, Google Ads, Meta Ads et création de contenus pour accélérer votre croissance en ligne.",
  },
};

export default function DigitalPage() {
  return <DigitalServicesLandingPage />;
}
