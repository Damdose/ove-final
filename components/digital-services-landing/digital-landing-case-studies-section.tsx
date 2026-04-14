import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { BRAND } from "@/lib/brand-design-system";
import { BTN_PRIMARY_INK, PAGE_X, SECTION_PAD, TEXT_INK } from "@/lib/home-ui";
import Link from "next/link";
import { CASE_STUDIES_LANDING } from "./digital-services-landing-content";

export function DigitalLandingCaseStudiesSection() {
  return (
    <section className={BRAND.canvas.bgClass}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Cas clients
              </div>
              <h2 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                Études de cas clients
              </h2>
              <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg ${TEXT_INK}`}>
                Des parcours utilisateurs, des sites performants et une image de marque alignée sur vos objectifs business.
              </p>
            </div>
            <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {CASE_STUDIES_LANDING.map((study, index) => (
                <CaseStudyCard key={study.slug} study={study} imagePriority={index < 3} />
              ))}
            </div>
            <div className="mt-10 flex justify-center sm:mt-12">
              <Link href="/digital/cas-clients" className={BTN_PRIMARY_INK}>
                Voir la page cas clients
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
