import { ItLandingPage } from "@/components/it-landing/it-landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pôle IT — Infogérance & cybersécurité",
  description:
    "Ovedex IT : infogérance réactive, cybersécurité, cloud et réseaux pour sécuriser et faire évoluer votre système d’information.",
  alternates: { canonical: "/it" },
  openGraph: {
    title: "Pôle IT — Infogérance & cybersécurité",
    description:
      "Ovedex IT : infogérance réactive, cybersécurité, cloud et réseaux pour sécuriser et faire évoluer votre système d’information.",
    type: "website",
    url: "/it",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pôle IT — Infogérance & cybersécurité",
    description:
      "Ovedex IT : infogérance réactive, cybersécurité, cloud et réseaux pour sécuriser et faire évoluer votre système d’information.",
  },
};

export default function ItPolePage() {
  return <ItLandingPage />;
}
