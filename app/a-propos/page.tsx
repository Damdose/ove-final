import { MarketingSiteLayout } from "@/components/technology-group-home/marketing-site-layout";
import { AboutPageContent } from "@/components/about/about-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire d'Ovedex, notre ADN, nos expertises et notre vision : optimiser vos expériences avec des services exceptionnels.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos — Ovedex",
    description:
      "Découvrez l'histoire d'Ovedex, notre ADN, nos expertises et notre vision : optimiser vos expériences avec des services exceptionnels.",
    type: "website",
    url: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <MarketingSiteLayout>
      <AboutPageContent />
    </MarketingSiteLayout>
  );
}
