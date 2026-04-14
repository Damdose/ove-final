import Image from "next/image";
import Link from "next/link";
import type { ItServicePageDefinition } from "@/lib/it-services-catalog";
import { IT_SERVICE_FEATURES } from "@/lib/it-service-features";
import { BRAND, POLE_THEMES } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BG_INK,
  BTN_PRIMARY_INK,
  PAGE_X,
  R_CARD,
  RING_SOFT,
  SHADOW_MEDIA,
  SHADOW_SURFACE,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import { PARTNER_LOGOS } from "@/components/technical-solutions-landing/technical-solutions-landing-content";
import { getServiceTechnologies } from "@/lib/service-technologies";
import { ServiceFeatureSections } from "@/components/shared/service-feature-sections";
import { ServiceTechnologiesSection } from "@/components/shared/service-technologies-section";
import { ClosingCtaSection } from "@/components/technology-group-home/closing-cta-section";
import { TestimonialsCarousel } from "@/components/technology-group-home/testimonials-carousel";
import { ItCaseStudiesSection } from "./it-case-studies-section";
import { ItLandingFaqSection } from "./it-landing-faq-section";
import { ItLandingPartnersWhy } from "./it-landing-partners-why";
import { ItLandingSectors } from "./it-landing-sectors";
import { ItLandingServicesCarousel } from "./it-landing-services-carousel";
import { ItPolePageShell } from "./it-pole-page-shell";

const itTheme = POLE_THEMES.it;

function ItServiceHero({ service }: { service: ItServicePageDefinition }) {
  return (
    <header className={`relative overflow-x-hidden ${BRAND.canvas.bgClass}`}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12">
          <div className={`overflow-hidden bg-purple-200 ${R_CARD} ${BD_CARD} ${RING_SOFT} ${SHADOW_SURFACE}`}>
            <div
              className="grid grid-cols-1 items-center gap-x-10 gap-y-10 px-5 pt-6 pb-5 sm:px-10 sm:pt-8 sm:pb-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-x-14 lg:gap-y-12 lg:px-14 lg:pt-10 lg:pb-8"
            >
              <div className="order-2 lg:order-1">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${itTheme.primary.bgClass} ${itTheme.primary.textOnPrimaryClass}`}
                >
                  Pôle IT
                </span>
                <h1
                  className={`mt-5 max-w-[26ch] font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl sm:leading-[1.12] lg:mt-6 lg:text-5xl lg:leading-[1.08] ${TEXT_INK}`}
                >
                  {service.headline ?? service.title}
                </h1>
                <p
                  className={`mt-5 max-w-xl font-sans text-base font-normal leading-relaxed sm:mt-6 sm:text-lg lg:leading-8 ${TEXT_INK_MUTED}`}
                >
                  {service.description}
                </p>
                <div className="mt-8 sm:mt-10">
                  <Link href="/contact" className={BTN_PRIMARY_INK}>
                    Contacter un expert
                  </Link>
                </div>
              </div>

              <div
                className={`relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none ${R_CARD} ${SHADOW_MEDIA}`}
              >
                <Image
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  alt={service.imageAlt}
                  src={service.imageSrc}
                  width={1024}
                  height={1024}
                  priority
                  className={`aspect-[16/10] w-full object-cover lg:aspect-square ${R_CARD}`}
                />
              </div>
            </div>

            <div className={`group border-t border-black/[0.08] ${BG_INK} py-4 sm:py-5`} role="region" aria-label="Logos de clients et partenaires">
              <div className="logo-marquee-outer">
                <div className="logo-marquee-track gap-x-14 px-4 group-hover:[animation-play-state:paused] sm:gap-x-20 sm:px-6">
                  {PARTNER_LOGOS.map((logo, i) => (
                    <Image
                      key={`it-svc-marquee-a-${i}`}
                      loading="eager"
                      src={logo.src}
                      alt=""
                      width={logo.width}
                      height={logo.height}
                      className="max-h-9 w-auto max-w-[7.5rem] shrink-0 object-contain brightness-0 invert sm:max-h-10 sm:max-w-[8.5rem]"
                      aria-hidden
                    />
                  ))}
                  {PARTNER_LOGOS.map((logo, i) => (
                    <Image
                      key={`it-svc-marquee-b-${i}`}
                      loading="eager"
                      src={logo.src}
                      alt=""
                      width={logo.width}
                      height={logo.height}
                      className="max-h-9 w-auto max-w-[7.5rem] shrink-0 object-contain brightness-0 invert sm:max-h-10 sm:max-w-[8.5rem]"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function ItServiceDetailPage({ service }: { service: ItServicePageDefinition }) {
  const features = IT_SERVICE_FEATURES[service.slug];
  const technologies = getServiceTechnologies(service.slug);

  return (
    <ItPolePageShell>
      <ItServiceHero service={service} />
      {features && (
        <ServiceFeatureSections features={features} pole="it" badgeLabel="IT" />
      )}
      <ItLandingServicesCarousel />
      <ItLandingPartnersWhy />
      <ItLandingSectors />
      {technologies && <ServiceTechnologiesSection technologies={technologies} />}
      <TestimonialsCarousel />
      <ItCaseStudiesSection />
      <ItLandingFaqSection />
      <ClosingCtaSection
        heading="Besoin d'aller plus loin sur ce sujet ?"
        body="Décrivez votre contexte technique sur la page contact : un expert IT vous recontacte."
      />
    </ItPolePageShell>
  );
}
