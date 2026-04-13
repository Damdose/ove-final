import type { DigitalServiceDefinition } from "@/lib/digital-services-catalog";
import { getDigitalServiceLpFaqItems } from "@/lib/digital-service-lp-faq";
import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";
import { TestimonialsCarousel } from "@/components/technology-group-home/testimonials-carousel";
import { DigitalLandingFaqSection } from "./digital-landing-faq-section";
import { DigitalLandingPartnersWhy } from "./digital-landing-partners-why";
import { DigitalPolePageShell } from "./digital-pole-page-shell";
import { DigitalServiceLpDeliverables } from "./digital-service-lp-deliverables";
import { DigitalServiceLpHero } from "./digital-service-lp-hero";
import { DigitalServiceLpTrustStats } from "./digital-service-lp-trust-stats";

export function DigitalServiceAcquisitionPage({ service }: { service: DigitalServiceDefinition }) {
  const faqItems = getDigitalServiceLpFaqItems(service.slug);

  return (
    <DigitalPolePageShell>
      <DigitalServiceLpHero service={service} />
      <DigitalServiceLpTrustStats />
      <DigitalServiceLpDeliverables service={service} />
      <DigitalLandingPartnersWhy />
      <TestimonialsCarousel />
      <DigitalLandingFaqSection
        items={faqItems}
        heading="Questions fréquentes"
        intro="Réponses courtes pour valider le fit avant votre prise de contact — complétez par un échange avec l’équipe Digital."
        showFullFaqLink
      />
      <ClosingCtaSection
        heading="Un projet Digital à lancer ou à accélérer ?"
        body="Décrivez votre contexte (objectif, budget indicatif, délais) : nous revenons vers vous avec une proposition structurée."
      />
    </DigitalPolePageShell>
  );
}
