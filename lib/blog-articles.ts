import type { BlogPost } from "@/lib/blog-types";
import { BLOG_POSTS } from "@/lib/blog-posts-data";

export type { BlogPost };

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getDigitalBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.pole === "digital");
}

export function getDigitalPostSlugs(): string[] {
  return getDigitalBlogPosts().map((p) => p.slug);
}

export function getSolutionsBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.pole === "solutions");
}

export function getSolutionsPostSlugs(): string[] {
  return getSolutionsBlogPosts().map((p) => p.slug);
}

export function getItBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.pole === "it");
}

export function getItPostSlugs(): string[] {
  return getItBlogPosts().map((p) => p.slug);
}

const HOMEPAGE_NEWSROOM_MAX = 6;

/** Articles les plus récents pour la section Newsroom de la page d’accueil. */
export function getHomepageNewsroomPosts(): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => b.publishedAtIso.localeCompare(a.publishedAtIso))
    .slice(0, HOMEPAGE_NEWSROOM_MAX);
}

export { BLOG_POSTS };
