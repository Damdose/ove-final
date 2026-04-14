import type { DigitalServiceDefinition } from "@/lib/digital-services-catalog";
import { getDigitalServiceLpFaqItems } from "@/lib/digital-service-lp-faq";
import { DIGITAL_SERVICE_FEATURES } from "@/lib/digital-service-features";
import { getServiceTechnologies } from "@/lib/service-technologies";
import { ServiceFeatureSections } from "@/components/shared/service-feature-sections";
import { ServiceTechnologiesSection } from "@/components/shared/service-technologies-section";
import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";
import { TestimonialsCarousel } from "@/components/technology-group-home/testimonials-carousel";
import { DigitalLandingCaseStudiesSection } from "./digital-landing-case-studies-section";
import { DigitalLandingFaqSection } from "./digital-landing-faq-section";
import { DigitalLandingPartnersWhy } from "./digital-landing-partners-why";
import { DigitalLandingSectors } from "./digital-landing-sectors";
import { DigitalLandingServicesCarousel } from "./digital-landing-services-carousel";
import { DigitalPolePageShell } from "./digital-pole-page-shell";
import { DigitalServiceLpHero } from "./digital-service-lp-hero";

export function DigitalServiceAcquisitionPage({ service }: { service: DigitalServiceDefinition }) {
  const faqItems = getDigitalServiceLpFaqItems(service.slug);
  const features = DIGITAL_SERVICE_FEATURES[service.slug];
  const technologies = getServiceTechnologies(service.slug);

  return (
    <DigitalPolePageShell>
      <DigitalServiceLpHero service={service} />
      {features && (
        <ServiceFeatureSections features={features} pole="digital" badgeLabel="Digital" />
      )}
      <DigitalLandingServicesCarousel />
      <DigitalLandingPartnersWhy />
      <DigitalLandingSectors />
      {technologies && <ServiceTechnologiesSection technologies={technologies} />}
      <TestimonialsCarousel />
      <DigitalLandingCaseStudiesSection />
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
