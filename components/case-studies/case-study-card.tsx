import Image from "next/image";
import Link from "next/link";
import type { CaseStudyItem } from "@/lib/case-study-item";
import { BD_CARD, R_CARD, SHADOW_SURFACE, SHADOW_SURFACE_HOVER, TEXT_INK } from "@/lib/home-ui";

export type CaseStudyCardStudy = Pick<CaseStudyItem, "href" | "imageSrc" | "category" | "title" | "excerpt">;

type Props = {
  study: CaseStudyCardStudy;
  /** Premières cartes visibles : améliore le LCP sur les grilles cas clients */
  imagePriority?: boolean;
  /** Pastille catégorie : couleur pôle Digital (défaut), Solutions ou IT. */
  poleAccent?: "digital" | "solutions" | "it";
};

const CATEGORY_PILL: Record<NonNullable<Props["poleAccent"]>, string> = {
  digital: "bg-emerald-100 text-emerald-800",
  solutions: "bg-blue-200 text-blue-800",
  it: "bg-purple-200 text-purple-900",
};

export function CaseStudyCard({ study, imagePriority = false, poleAccent = "digital" }: Props) {
  return (
    <div
      role="listitem"
      className={`flex h-full flex-col bg-white p-4 sm:p-5 ${R_CARD} ${BD_CARD} ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER} transition-shadow duration-300`}
    >
      <Link
        href={study.href}
        className={`group flex h-full min-h-0 max-w-full flex-col justify-start no-underline ${TEXT_INK}`}
      >
        <div className="w-full overflow-hidden">
          <Image
            src={study.imageSrc}
            alt={study.title}
            width={800}
            height={533}
            priority={imagePriority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`aspect-[3/2] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] ${R_CARD}`}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
          <div>
            <div className="mb-3">
              <span
                className={`inline-block rounded-full px-3 py-0.5 font-display text-sm font-semibold ${CATEGORY_PILL[poleAccent]}`}
              >
                {study.category}
              </span>
            </div>
            <h3 className={`mb-3 font-display text-xl font-semibold leading-snug sm:text-2xl ${TEXT_INK}`}>
              {study.title}
            </h3>
            <p className={`text-base font-normal leading-relaxed ${TEXT_INK} opacity-[0.88]`}>{study.excerpt}</p>
          </div>
          <div
            className={`mt-8 text-left text-base font-semibold transition-opacity group-hover:opacity-80 ${TEXT_INK}`}
          >
            <span aria-hidden className="mr-1.5">
              →
            </span>
            Lire plus
          </div>
        </div>
      </Link>
    </div>
  );
}
