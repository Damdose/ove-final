import { ItPolePageShell } from "@/components/it-landing/it-pole-page-shell";
import { POLE_THEMES } from "@/lib/brand-design-system";
import { getItBlogPosts } from "@/lib/blog-articles";
import { BG_INK, PAGE_X, R_BTN, SECTION_PAD, TEXT_INK } from "@/lib/home-ui";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const posts = getItBlogPosts();

const DESCRIPTION =
  "Articles du pôle IT Ovedex : cybersécurité, infogérance, cloud, SLA et bonnes pratiques pour votre système d’information.";

const canonical = absoluteUrl("/it/newsroom");

export const metadata: Metadata = {
  title: "Newsroom — Pôle IT Ovedex",
  description: DESCRIPTION,
  alternates: { canonical },
  openGraph: {
    title: "Newsroom — Pôle IT Ovedex",
    description: DESCRIPTION,
    type: "website",
    url: canonical,
    locale: "fr_FR",
    siteName: "Ovedex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsroom — Pôle IT Ovedex",
    description: DESCRIPTION,
  },
};

const itTheme = POLE_THEMES.it;
const badge = `inline-flex items-center justify-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${itTheme.primary.bgClass} ${itTheme.primary.textOnPrimaryClass}`;

export default function ItNewsroomPage() {
  return (
    <ItPolePageShell>
      <div className="bg-gray-50">
        <div className={PAGE_X}>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className={`${SECTION_PAD} pb-8 sm:pb-10`}>
              <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
                <div className={badge}>Newsroom</div>
                <h1 className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}>
                  Articles &amp; analyses IT
                </h1>
                <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg`}>
                  Cybersécurité, exploitation et pilotage SI pour entreprises et ETI.
                </p>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex h-12 items-center justify-center px-6 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 ${R_BTN} ${BG_INK}`}
                >
                  Échanger avec l’équipe
                </Link>
              </div>

              <ul role="list" className="m-0 grid list-none grid-cols-1 gap-7 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {posts.map((post) => (
                  <li key={post.slug} className="min-w-0">
                    <article
                      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_8px_30px_-12px_rgba(13,11,74,0.12)] transition-shadow duration-300 hover:shadow-[0_16px_40px_-14px_rgba(13,11,74,0.16)]`}
                    >
                      <Link
                        href={`/actualites/${post.slug}`}
                        className="group flex max-w-full flex-1 flex-col no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#0D0B4A]/25 focus-visible:ring-offset-2"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                          <Image
                            loading="lazy"
                            src={post.imageSrc}
                            alt={post.imageAlt}
                            width={640}
                            height={400}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs text-neutral-500">
                            <time dateTime={post.publishedAtIso}>{post.publishedAtLabel}</time>
                            <span aria-hidden>·</span>
                            <span>{post.readMinutes} de lecture</span>
                          </div>
                          <span
                            className={`inline-flex w-fit rounded-full px-2.5 py-0.5 font-display text-xs font-semibold sm:text-sm ${itTheme.tag.bgClass} ${itTheme.tag.textClass}`}
                          >
                            IT
                          </span>
                          <h2 className={`mt-3 font-display text-lg font-bold leading-snug sm:text-xl ${TEXT_INK}`}>
                            {post.title}
                          </h2>
                          <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-[#0D0B4A]/70 sm:text-[0.9375rem]">
                            {post.excerpt}
                          </p>
                          <span className={`mt-5 inline-flex items-center gap-1 font-sans text-sm font-semibold sm:mt-6 ${TEXT_INK}`}>
                            Lire l’article
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                              →
                            </span>
                          </span>
                        </div>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ItPolePageShell>
  );
}
