import Image from "next/image";
import Link from "next/link";
import {
  BD_CARD,
  INK,
  PAGE_X,
  R_CARD,
  RING_SOFT,
  SECTION_PAD,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
} from "@/lib/home-ui";
import { NEWS_ARTICLES } from "./content";

function newsTagPillClass(label: string) {
  if (label === "Solutions") return "bg-[#0D0B4A]/10 text-[#0D0B4A]";
  if (label === "IT") return "bg-[#0D0B4A]/14 text-[#0D0B4A]";
  return "bg-[#0D0B4A]/08 text-[#0D0B4A]";
}

export function NewsroomSection() {
  return (
    <section id="newsroom" className="bg-[#f4f5f7]">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className={SECTION_PAD}>
            <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
              <div
                className="mb-4 inline-flex items-center justify-center rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white sm:mb-5"
                style={{ backgroundColor: INK }}
              >
                Ressources
              </div>
              <h2
                className="font-display text-[1.65rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
                style={{ color: INK }}
              >
                Newsroom
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#0D0B4A]/72 sm:text-lg">
                Articles et repères sur le digital, les solutions techniques et l’IT en entreprise.
              </p>
            </header>

            <ul
              role="list"
              className="grid list-none grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {NEWS_ARTICLES.map((article) => (
                <li key={article.slug} className="min-w-0">
                  <article
                    className={`flex h-full flex-col overflow-hidden ${R_CARD} ${BD_CARD} bg-white ${RING_SOFT} ${SHADOW_SURFACE} transition duration-300 hover:-translate-y-0.5 ${SHADOW_SURFACE_HOVER}`}
                  >
                    <Link
                      href={article.href}
                      className="group flex max-w-full flex-1 flex-col no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#0D0B4A]/25 focus-visible:ring-offset-2"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                        <Image
                          loading="lazy"
                          src={article.imageSrc}
                          alt={article.imageAlt}
                          width={640}
                          height={400}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs text-neutral-500">
                          <time dateTime={article.publishedAtIso}>{article.publishedAtLabel}</time>
                          <span aria-hidden>·</span>
                          <span>{article.readMinutes} de lecture</span>
                        </div>
                        <span
                          className={`inline-flex w-fit rounded-full px-2.5 py-0.5 font-display text-xs font-semibold sm:text-sm ${newsTagPillClass(article.tagLabel)}`}
                        >
                          {article.tagLabel}
                        </span>
                        <h3
                          className="mt-3 font-display text-lg font-bold leading-snug sm:text-xl"
                          style={{ color: INK }}
                        >
                          {article.title}
                        </h3>
                        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-[#0D0B4A]/68 sm:text-[0.9375rem]">
                          {article.excerpt}
                        </p>
                        <span
                          className="mt-5 inline-flex items-center gap-1 font-sans text-sm font-semibold sm:mt-6 sm:text-base"
                          style={{ color: INK }}
                        >
                          Lire l’article
                          <span
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                            aria-hidden
                          >
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
    </section>
  );
}
