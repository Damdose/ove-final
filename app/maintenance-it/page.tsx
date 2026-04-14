import { ItMaintenancePage } from "@/components/it-landing/it-maintenance-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infogérance & maintenance IT",
  description:
    "Packs Start, Flow et Care : infogérance, MDM, sécurité des postes, onboarding/offboarding et support. Contactez-nous pour nos tarifs.",
  alternates: { canonical: "/maintenance-it" },
  openGraph: {
    title: "Infogérance & maintenance IT — Ovedex",
    description:
      "Packs Start, Flow et Care : infogérance, MDM, sécurité des postes, onboarding/offboarding et support.",
    type: "website",
    url: "/maintenance-it",
  },
};

export default function MaintenanceItPage() {
  return <ItMaintenancePage />;
}
