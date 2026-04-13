import { TechnicalSolutionsLandingPage } from "@/components/technical-solutions-landing/technical-solutions-landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
  openGraph: {
    title: "Solutions",
    description:
      "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions",
    description:
      "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
  },
};

export default function SolutionsPage() {
  return <TechnicalSolutionsLandingPage />;
}
