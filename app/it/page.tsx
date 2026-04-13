import { ItLandingPage } from "@/components/it-landing/it-landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT — Infogérance & cybersécurité",
  description:
    "Ovedex IT : infogérance réactive, cybersécurité, cloud et réseaux pour sécuriser et faire évoluer votre système d’information.",
  openGraph: {
    title: "IT — Infogérance & cybersécurité",
    description:
      "Ovedex IT : infogérance réactive, cybersécurité, cloud et réseaux pour sécuriser et faire évoluer votre système d’information.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT — Infogérance & cybersécurité",
    description:
      "Ovedex IT : infogérance réactive, cybersécurité, cloud et réseaux pour sécuriser et faire évoluer votre système d’information.",
  },
};

export default function ItPolePage() {
  return <ItLandingPage />;
}
