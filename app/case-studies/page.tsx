import { CASE_STUDIES } from "@/components/digital-services-landing/digital-services-landing-content";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { DigitalPolePageShell } from "@/components/digital-services-landing/digital-pole-page-shell";
import { BG_INK, PAGE_X, R_BTN, SECTION_PAD, TEXT_INK } from "@/lib/home-ui";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const indexPath = "/case-studies";
const indexCanonical = absoluteUrl(indexPath);
const previewStudy = CASE_STUDIES[0];

export const metadata: Metadata = {
  title: "Cas clients — Ovedex Digital",
  description:
    "Découvrez des exemples de projets web, e-commerce et marketing digital menés avec nos clients.",
  alternates: { canonical: indexCanonical },
  openGraph: {
    title: "Cas clients — Ovedex Digital",
    description:
      "Découvrez des exemples de projets web, e-commerce et marketing digital menés avec nos clients.",
    type: "website",
    url: indexCanonical,
    locale: "fr_FR",
    ...(previewStudy
      ? {
          images: [
            {
              url: previewStudy.imageSrc,
              width: 1600,
              height: 1067,
              alt: previewStudy.title,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Cas clients — Ovedex Digital",
    description:
      "Découvrez des exemples de projets web, e-commerce et marketing digital menés avec nos clients.",
    ...(previewStudy ? { images: [previewStudy.imageSrc] } : {}),
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <DigitalPolePageShell>
      <div className="bg-gray-50">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={`${SECTION_PAD} pb-8 sm:pb-10`}>
              <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
                <div className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Cas clients
                </div>
                <h1 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                  Études de cas clients
                </h1>
                <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg`}>
                  Projets digitaux sélectionnés : expérience utilisateur, acquisition et image de marque.
                </p>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex h-12 items-center justify-center px-6 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 ${R_BTN} ${BG_INK}`}
                >
                  Parler de votre projet
                </Link>
              </div>
              <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {CASE_STUDIES.map((study, index) => (
                  <CaseStudyCard key={study.slug} study={study} imagePriority={index < 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DigitalPolePageShell>
  );
}
