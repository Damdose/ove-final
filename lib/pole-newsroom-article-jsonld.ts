import type { PoleId } from "@/lib/brand-design-system";
import { POLE_THEMES } from "@/lib/brand-design-system";
import type { BlogPost } from "@/lib/blog-types";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

const ORG_NAME = "Ovedex";

function articleBodyText(post: BlogPost): string {
  return post.body.join("\n\n");
}

function poleBasePath(pole: Exclude<PoleId, "digital">): "/it" | "/solutions" {
  return pole === "it" ? "/it" : "/solutions";
}

/** BlogPosting + fil d’Ariane pour les articles IT / Solutions publiés sous `/actualites/[slug]`. */
export function itOrSolutionsNewsroomArticleJsonLd(post: BlogPost & { pole: "it" | "solutions" }) {
  const pole = post.pole;
  const pageUrl = absoluteUrl(`/actualites/${post.slug}`);
  const poleHome = absoluteUrl(poleBasePath(pole));
  const newsroomUrl = absoluteUrl(`${poleBasePath(pole)}/newsroom`);
  const poleLabel = POLE_THEMES[pole].label;
  const desc = post.seoDescription ?? post.excerpt;
  const bodyText = articleBodyText(post);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        headline: post.title,
        description: desc,
        image: [post.imageSrc],
        datePublished: post.publishedAtIso,
        dateModified: post.publishedAtIso,
        articleSection: poleLabel,
        inLanguage: "fr-FR",
        ...(post.keywords?.length ? { keywords: post.keywords.join(", ") } : {}),
        articleBody: bodyText,
        wordCount: bodyText.split(/\s+/).filter(Boolean).length,
        author: {
          "@type": "Organization",
          name: ORG_NAME,
          url: poleHome,
        },
        publisher: {
          "@type": "Organization",
          name: ORG_NAME,
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
            name: `Pôle ${poleLabel}`,
            item: poleHome,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Newsroom",
            item: newsroomUrl,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: post.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
