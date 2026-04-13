import { DigitalServicesLandingPage } from "@/components/digital-services-landing/digital-services-landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital",
  description:
    "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
  openGraph: {
    title: "Digital",
    description:
      "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital",
    description:
      "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
  },
};

export default function DigitalPage() {
  return <DigitalServicesLandingPage />;
}
