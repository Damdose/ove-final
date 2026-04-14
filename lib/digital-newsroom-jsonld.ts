import type { BlogPost } from "@/lib/blog-types";
import { absoluteUrl } from "@/lib/site";

const ORG_NAME = "Ovedex";

function articleBodyText(post: BlogPost): string {
  return post.body.join("\n\n");
}

/** CollectionPage + ItemList pour l’index /digital/newsroom */
export function newsroomIndexJsonLd(posts: BlogPost[]) {
  const pageUrl = absoluteUrl("/digital/newsroom");
  const siteUrl = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        url: pageUrl,
        name: "Blog du pôle Digital — Ovedex",
        description:
          "Articles et analyses sur la refonte web B2B, l’UX, la performance, l’acquisition et le pilotage du ROI des campagnes digitales.",
        inLanguage: "fr-FR",
        isPartOf: {
          "@type": "WebSite",
          name: ORG_NAME,
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: ORG_NAME,
          url: siteUrl,
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: posts.length,
          itemListElement: posts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/digital/newsroom/${p.slug}`),
            name: p.title,
          })),
        },
      },
    ],
  };
}

/** BlogPosting + fil d’Ariane pour un article Digital */
export function digitalArticleJsonLd(post: BlogPost) {
  const url = absoluteUrl(`/digital/newsroom/${post.slug}`);
  const desc = post.seoDescription ?? post.excerpt;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        headline: post.title,
        description: desc,
        image: [post.imageSrc],
        datePublished: post.publishedAtIso,
        dateModified: post.publishedAtIso,
        articleSection: "Digital",
        inLanguage: "fr-FR",
        keywords: post.keywords?.length ? post.keywords.join(", ") : undefined,
        articleBody: articleBodyText(post),
        wordCount: articleBodyText(post).split(/\s+/).filter(Boolean).length,
        author: {
          "@type": "Organization",
          name: ORG_NAME,
          url: absoluteUrl("/digital"),
        },
        publisher: {
          "@type": "Organization",
          name: ORG_NAME,
          url: absoluteUrl("/"),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Pôle Digital",
            item: absoluteUrl("/digital"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Newsroom",
            item: absoluteUrl("/digital/newsroom"),
          },
          {
            "@type": "ListItem",
            position: 4,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}
