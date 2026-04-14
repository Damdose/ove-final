import { SolutionsServiceDetailPage } from "@/components/technical-solutions-landing/solutions-service-detail-page";
import { getAllSolutionsServiceSlugs, getSolutionsServiceBySlug } from "@/lib/solutions-services-catalog";
import { solutionsServiceDetailJsonLd } from "@/lib/service-detail-jsonld";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSolutionsServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolutionsServiceBySlug(slug);
  if (!s) {
    return { title: "Service — Ovedex Solutions" };
  }
  const desc = s.description.trim();
  const canonical = absoluteUrl(`/services-solution/${s.slug}`);
  return {
    title: `${s.title} — Ovedex Solutions`,
    description: desc,
    authors: [{ name: "Ovedex", url: absoluteUrl("/solutions") }],
    robots: { index: true, follow: true },
    alternates: { canonical },
    keywords: ["solutions techniques", "courants faibles", "Ovedex", s.title],
    openGraph: {
      title: `${s.title} — Ovedex Solutions`,
      description: desc,
      type: "website",
      url: canonical,
      locale: "fr_FR",
      siteName: "Ovedex",
      images: [{ url: s.imageSrc, width: 1200, height: 630, alt: s.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.title} — Ovedex Solutions`,
      description: desc,
      images: [s.imageSrc],
    },
  };
}

export default async function SolutionsServiceRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getSolutionsServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const jsonLd = solutionsServiceDetailJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SolutionsServiceDetailPage service={service} />
    </>
  );
}
