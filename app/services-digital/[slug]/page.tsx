import { DigitalServiceAcquisitionPage } from "@/components/digital-services-landing/digital-service-acquisition-page";
import { getAllDigitalServiceSlugs, getDigitalServiceBySlug } from "@/lib/digital-services-catalog";
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
  return {
    title: `${s.title} — Ovedex Digital`,
    description: desc,
    openGraph: {
      title: `${s.title} — Ovedex Digital`,
      description: desc,
      type: "website",
      images: [{ url: s.imageSrc, width: 1200, height: 630, alt: s.imageAlt }],
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

  return <DigitalServiceAcquisitionPage service={service} />;
}
