import { DigitalServiceAcquisitionPage } from "@/components/digital-services-landing/digital-service-acquisition-page";
import { getAllDigitalServiceSlugs, getDigitalServiceBySlug } from "@/lib/digital-services-catalog";
import { digitalServiceDetailJsonLd } from "@/lib/service-detail-jsonld";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllDigitalServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getDigitalServiceBySlug(slug);
  if (!s) {
    return { title: "Service — Ovedex Digital" };
  }
  const desc = `${s.lp.subheadline} ${s.description}`.trim();
  const canonical = absoluteUrl(`/services-digital/${s.slug}`);
  return {
    title: `${s.title} — Ovedex Digital`,
    description: desc,
    authors: [{ name: "Ovedex", url: absoluteUrl("/digital") }],
    robots: { index: true, follow: true },
    alternates: { canonical },
    keywords: ["marketing digital", "acquisition", "Ovedex", s.title],
    openGraph: {
      title: `${s.title} — Ovedex Digital`,
      description: desc,
      type: "website",
      url: canonical,
      locale: "fr_FR",
      siteName: "Ovedex",
      images: [{ url: s.imageSrc, width: 1200, height: 630, alt: s.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.title} — Ovedex Digital`,
      description: desc,
      images: [s.imageSrc],
    },
  };
}

export default async function DigitalServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getDigitalServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const jsonLd = digitalServiceDetailJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <DigitalServiceAcquisitionPage service={service} />
    </>
  );
}
