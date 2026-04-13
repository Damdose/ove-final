import {
  CASE_STUDIES,
  type CaseStudyItem,
} from "@/components/digital-services-landing/digital-services-landing-content";

export function getDigitalCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((s) => s.slug);
}

export function getDigitalCaseStudyBySlug(slug: string): CaseStudyItem | null {
  return CASE_STUDIES.find((s) => s.slug === slug) ?? null;
}
