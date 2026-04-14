import { DigitalPolePageShell } from "@/components/digital-services-landing/digital-pole-page-shell";
import { ItPolePageShell } from "@/components/it-landing/it-pole-page-shell";
import { SolutionsPolePageShell } from "@/components/technical-solutions-landing/solutions-pole-page-shell";
import type { CaseStudyRecord } from "@/lib/case-studies-builders";
import { getAllCaseStudySlugs, getCaseStudyRecordBySlug } from "@/lib/case-studies-catalog";
import type { PoleId } from "@/lib/brand-design-system";
import { BG_INK, PAGE_X, R_BTN, R_CARD, TEXT_INK, TEXT_INK_MUTED } from "@/lib/home-ui";
import { absoluteUrl, getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

function casClientsIndex(pole: PoleId): string {
  if (pole === "it") return "/it/cas-clients";
  if (pole === "solutions") return "/solutions/cas-clients";
  return "/digital/cas-clients";
}

const CATEGORY_CLASS: Record<PoleId, string> = {
  digital: "text-emerald-600",
  solutions: "text-blue-600",
  it: "text-purple-600",
};

const OUTCOME_DOT: Record<PoleId, string> = {
  digital: "before:bg-emerald-500",
  solutions: "before:bg-blue-500",
  it: "before:bg-purple-500",
};

const BACK_LINK_DECO: Record<PoleId, string> = {
  digital: "decoration-emerald-400/50 hover:decoration-emerald-500",
  solutions: "decoration-blue-400/50 hover:decoration-blue-500",
  it: "decoration-purple-400/50 hover:decoration-purple-500",
};

function caseStudyStructuredData(study: CaseStudyRecord, slug: string) {
  const pageUrl = absoluteUrl(`/case-studies/${slug}`);
  const { pole: _p, ...article } = study;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.intro,
        image: [article.imageSrc],
        url: pageUrl,
        articleSection: article.category,
        inLanguage: "fr-FR",
        publisher: {
          "@type": "Organization",
          name: "Ovedex",
          url: getSiteUrl(),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: getSiteUrl(),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cas clients",
            item: absoluteUrl(casClientsIndex(study.pole)),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyRecordBySlug(slug);
  if (!study) return { title: "Cas client introuvable — Ovedex" };
  const canonical = absoluteUrl(`/case-studies/${slug}`);
  return {
    title: `${study.title} — Cas clients Ovedex`,
    description: study.intro,
    authors: [{ name: "Ovedex", url: getSiteUrl() }],
    robots: { index: true, follow: true },
    alternates: { canonical },
    keywords: ["cas client", "Ovedex", study.category, study.title],
    openGraph: {
      title: study.title,
      description: study.intro,
      type: "article",
      url: canonical,
      locale: "fr_FR",
      siteName: "Ovedex",
      images: [{ url: study.imageSrc, width: 1200, height: 800, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.intro,
      images: [study.imageSrc],
    },
  };
}

function ShellForPole({ pole, children }: { pole: PoleId; children: ReactNode }) {
  if (pole === "it") return <ItPolePageShell>{children}</ItPolePageShell>;
  if (pole === "solutions") return <SolutionsPolePageShell>{children}</SolutionsPolePageShell>;
  return <DigitalPolePageShell>{children}</DigitalPolePageShell>;
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyRecordBySlug(slug);
  if (!study) notFound();

  const structuredData = caseStudyStructuredData(study, slug);
  const pole = study.pole;
  const dot = OUTCOME_DOT[pole];
  const backDeco = BACK_LINK_DECO[pole];

  return (
    <ShellForPole pole={pole}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <div className={PAGE_X}>
          <div className="mx-auto max-w-3xl pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
            <p className={`font-sans text-xs font-semibold uppercase tracking-[0.14em] ${CATEGORY_CLASS[pole]}`}>
              {study.category}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
              {study.title}
            </h1>
            <p className={`mt-4 text-lg leading-relaxed sm:text-xl ${TEXT_INK_MUTED}`}>{study.intro}</p>

            <figure
              className={`relative mt-10 aspect-[3/2] w-full overflow-hidden bg-neutral-100 ${R_CARD} shadow-[0_12px_40px_-12px_rgba(13,11,74,0.15)] ring-1 ring-black/[0.06]`}
            >
              <Image
                src={study.imageSrc}
                alt={study.title}
                width={1200}
                height={800}
                priority
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </figure>

            <div className="py-10 sm:py-12">
              <div className={`space-y-5 text-base leading-relaxed sm:text-lg sm:leading-relaxed ${TEXT_INK}`}>
                {study.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {study.outcomes ? (
                <section className="mt-12 rounded-2xl border border-black/[0.06] bg-gray-50/80 p-6 sm:p-8">
                  <h2 className="font-display text-xl font-bold sm:text-2xl">{study.outcomes.title}</h2>
                  <ul className="mt-4 list-none space-y-3 p-0">
                    {study.outcomes.items.map((item) => (
                      <li
                        key={item}
                        className={`relative pl-7 text-base leading-relaxed before:absolute before:left-0 before:top-[0.35em] before:h-2 before:w-2 before:rounded-full ${dot}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <div className="mt-12 flex flex-col gap-4 border-t border-black/[0.06] pt-10 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={casClientsIndex(pole)}
                  className={`text-sm font-semibold underline decoration-2 underline-offset-4 transition ${backDeco} ${TEXT_INK}`}
                >
                  Voir tous les cas clients
                </Link>
                <Link
                  href="/contact"
                  className={`inline-flex h-12 min-w-[11rem] items-center justify-center px-6 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 ${R_BTN} ${BG_INK}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </ShellForPole>
  );
}
