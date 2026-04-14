import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { getAllDigitalServiceSlugs } from "@/lib/digital-services-catalog";
import { getAllItServiceSlugs } from "@/lib/it-services-catalog";
import { getAllSolutionsServiceSlugs } from "@/lib/solutions-services-catalog";
import { getAllCaseStudySlugs } from "@/lib/case-studies-catalog";
import { getDigitalPostSlugs, getItPostSlugs, getSolutionsPostSlugs } from "@/lib/blog-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/digital`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/it`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/solutions`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/a-propos`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/digital/newsroom`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/digital/cas-clients`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/digital/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/it/newsroom`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/it/cas-clients`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/it/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/solutions/newsroom`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/solutions/cas-clients`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/solutions/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/maintenance-it`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/maintenance-digital`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/maintenance-solutions`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politique-de-confidentialite`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/conditions-generales-de-vente`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const digitalServices = getAllDigitalServiceSlugs().map((slug) => ({
    url: `${base}/services-digital/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const itServices = getAllItServiceSlugs().map((slug) => ({
    url: `${base}/services-it/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionsServices = getAllSolutionsServiceSlugs().map((slug) => ({
    url: `${base}/services-solution/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudies = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/case-studies/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const digitalPosts = getDigitalPostSlugs().map((slug) => ({
    url: `${base}/digital/newsroom/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const itAndSolutionsPosts = [
    ...getItPostSlugs(),
    ...getSolutionsPostSlugs(),
  ].map((slug) => ({
    url: `${base}/actualites/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...digitalServices,
    ...itServices,
    ...solutionsServices,
    ...caseStudies,
    ...digitalPosts,
    ...itAndSolutionsPosts,
  ];
}
