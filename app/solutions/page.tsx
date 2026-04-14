import { TechnicalSolutionsLandingPage } from "@/components/technical-solutions-landing/technical-solutions-landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pôle Solutions — Sûreté, audiovisuel & infrastructure réseau",
  description:
    "Ovedex Solutions : vidéosurveillance, contrôle d’accès, alarme anti-intrusion, audiovisuel, fibre optique et infrastructure réseau pour sécuriser vos bâtiments.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Pôle Solutions — Sûreté, audiovisuel & infrastructure réseau",
    description:
      "Ovedex Solutions : vidéosurveillance, contrôle d’accès, alarme anti-intrusion, audiovisuel, fibre optique et infrastructure réseau pour sécuriser vos bâtiments.",
    type: "website",
    url: "/solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pôle Solutions — Sûreté, audiovisuel & infrastructure réseau",
    description:
      "Ovedex Solutions : vidéosurveillance, contrôle d’accès, alarme anti-intrusion, audiovisuel, fibre optique et infrastructure réseau pour sécuriser vos bâtiments.",
  },
};

export default function SolutionsPage() {
  return <TechnicalSolutionsLandingPage />;
}
