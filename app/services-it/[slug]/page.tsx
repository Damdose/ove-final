import { ItServiceDetailPage } from "@/components/it-landing/it-service-detail-page";
import { getAllItServiceSlugs, getItServiceBySlug } from "@/lib/it-services-catalog";
import { itServiceDetailJsonLd } from "@/lib/service-detail-jsonld";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllItServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getItServiceBySlug(slug);
  if (!s) {
    return { title: "Service — Ovedex IT" };
  }
  const desc = `${s.description}`.trim();
  const canonical = absoluteUrl(`/services-it/${s.slug}`);
  return {
    title: `${s.title} — Ovedex IT`,
    description: desc,
    authors: [{ name: "Ovedex", url: absoluteUrl("/it") }],
    robots: { index: true, follow: true },
    alternates: { canonical },
    keywords: ["IT", "infogérance", "Ovedex", s.title],
    openGraph: {
      title: `${s.title} — Ovedex IT`,
      description: desc,
      type: "website",
      url: canonical,
      locale: "fr_FR",
      siteName: "Ovedex",
      images: [{ url: s.imageSrc, width: 1200, height: 630, alt: s.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.title} — Ovedex IT`,
      description: desc,
      images: [s.imageSrc],
    },
  };
}

export default async function ItServiceDetailRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getItServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const jsonLd = itServiceDetailJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ItServiceDetailPage service={service} />
    </>
  );
}
