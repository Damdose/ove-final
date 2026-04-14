import { ItPolePageShell } from "@/components/it-landing/it-pole-page-shell";
import { SolutionsPolePageShell } from "@/components/technical-solutions-landing/solutions-pole-page-shell";
import { POLE_THEMES } from "@/lib/brand-design-system";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog-articles";
import type { BlogPost } from "@/lib/blog-types";
import { itOrSolutionsNewsroomArticleJsonLd } from "@/lib/pole-newsroom-article-jsonld";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { ReactNode } from "react";

type Props = { params: Promise<{ slug: string }> };

function assertItOrSolutionsPost(p: BlogPost): asserts p is BlogPost & { pole: "it" | "solutions" } {
  if (p.pole !== "it" && p.pole !== "solutions") notFound();
}

const BACK_LINK_DECO: Record<"it" | "solutions", string> = {
  it: "decoration-purple-400/50 hover:decoration-purple-500",
  solutions: "decoration-blue-400/50 hover:decoration-blue-500",
};

const NEWSROOM_BACK: Record<"it" | "solutions", { href: string; label: string }> = {
  it: { href: "/it/newsroom", label: "Tous les articles IT" },
  solutions: { href: "/solutions/newsroom", label: "Tous les articles Solutions" },
};

function ShellForPole({ pole, children }: { pole: "it" | "solutions"; children: ReactNode }) {
  if (pole === "it") return <ItPolePageShell>{children}</ItPolePageShell>;
  return <SolutionsPolePageShell>{children}</SolutionsPolePageShell>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable — Ovedex" };

  if (post.pole === "digital") {
    const description = post.seoDescription ?? post.excerpt;
    const pageUrl = absoluteUrl(`/digital/newsroom/${post.slug}`);
    return {
      title: `${post.title} · Blog Digital Ovedex`,
      description,
      keywords: post.keywords,
      category: "Marketing digital B2B",
      authors: [{ name: "Ovedex", url: absoluteUrl("/digital") }],
      robots: { index: true, follow: true },
      alternates: { canonical: pageUrl },
      openGraph: {
        title: post.title,
        description,
        type: "article",
        url: pageUrl,
        locale: "fr_FR",
        siteName: "Ovedex",
        publishedTime: `${post.publishedAtIso}T08:00:00+01:00`,
        modifiedTime: `${post.publishedAtIso}T08:00:00+01:00`,
        section: "Digital",
        images: [{ url: post.imageSrc, width: 1200, height: 800, alt: post.imageAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description,
        images: [post.imageSrc],
      },
    };
  }

  const description = post.seoDescription ?? post.excerpt;
  const pageUrl = absoluteUrl(`/actualites/${post.slug}`);
  const poleLabel = POLE_THEMES[post.pole].label;
  const polePath = post.pole === "it" ? "/it" : "/solutions";

  return {
    title: `${post.title} · Blog ${poleLabel} Ovedex`,
    description,
    keywords: post.keywords,
    category: post.pole === "it" ? "Services informatiques B2B" : "Solutions techniques & sûreté B2B",
    authors: [{ name: "Ovedex", url: absoluteUrl(polePath) }],
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: pageUrl,
      locale: "fr_FR",
      siteName: "Ovedex",
      publishedTime: `${post.publishedAtIso}T08:00:00+01:00`,
      modifiedTime: `${post.publishedAtIso}T08:00:00+01:00`,
      section: poleLabel,
      images: [{ url: post.imageSrc, width: 1200, height: 800, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.imageSrc],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  if (post.pole === "digital") {
    redirect(`/digital/newsroom/${post.slug}`);
  }

  assertItOrSolutionsPost(post);

  const tag = POLE_THEMES[post.pole].label;
  const jsonLd = itOrSolutionsNewsroomArticleJsonLd(post);
  const back = NEWSROOM_BACK[post.pole];
  const backDeco = BACK_LINK_DECO[post.pole];

  return (
    <ShellForPole pole={post.pole}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#0D0B4A]/60">{tag}</p>
        <h1 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl lg:leading-[1.15]">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-neutral-500">
          <time dateTime={post.publishedAtIso}>{post.publishedAtLabel}</time>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} de lecture</span>
        </div>

        <figure className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_12px_40px_-12px_rgba(13,11,74,0.15)] ring-1 ring-black/[0.06]">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            width={1200}
            height={750}
            priority
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption className="sr-only">Illustration d’article</figcaption>
        </figure>

        <div className="mt-10 space-y-6 font-sans text-base leading-relaxed text-[#0D0B4A]/90 sm:text-lg sm:leading-relaxed">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={back.href}
            className={`text-sm font-semibold text-[#0D0B4A] underline decoration-2 underline-offset-4 transition ${backDeco}`}
          >
            {back.label}
          </Link>
          <p className="m-0 font-sans text-xs text-neutral-500 sm:text-right">
            Visuels :{" "}
            <a
              href="https://unsplash.com"
              className="text-[#0D0B4A] underline underline-offset-2 hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            . Textes rédigés par Ovedex à titre informatif.
          </p>
        </div>
      </article>
    </ShellForPole>
  );
}
