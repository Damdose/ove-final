import Image from "next/image";
import Link from "next/link";
import { PAGE_X, R_CARD, SECTION_PAD, SHADOW_MEDIA, SHADOW_POP } from "@/lib/home-ui";
import { extractYoutubeVideoId } from "@/lib/youtube";
import {
  SOCIAL_PROOF_VIDEO_HREF,
  SOCIAL_PROOF_VIDEO_POSTER_SRC,
  SOCIAL_PROOF_YOUTUBE_EMBED_ID,
  STATS,
} from "./content";

function PlayDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
      aria-hidden
    >
      <span
        className={`flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-white ${SHADOW_POP} sm:h-[5rem] sm:w-[5rem]`}
      >
        <svg
          className="ml-1 h-9 w-9 text-[#0D0B4A] sm:h-11 sm:w-11"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </div>
  );
}

export function SocialProofSection() {
  const videoHref = SOCIAL_PROOF_VIDEO_HREF;
  const embedId = SOCIAL_PROOF_YOUTUBE_EMBED_ID;
  const posterLinkIsYoutube = Boolean(videoHref && extractYoutubeVideoId(videoHref));

  return (
    <section className="bg-[#f4f5f7]">
      <div className={`mx-auto w-full max-w-screen-xl ${PAGE_X}`}>
        <div className={SECTION_PAD}>
            <h2 className="mx-auto mb-10 max-w-4xl text-center font-display text-[1.35rem] font-bold leading-snug tracking-tight text-[#0D0B4A] sm:mb-14 sm:text-4xl sm:leading-[1.2] lg:mb-16 lg:text-[2.35rem] lg:leading-tight">
              Des solutions techniques de pointe, guidées par le savoir-être, la collaboration
              et la passion du service.
            </h2>

            <div className="mx-auto mb-14 grid max-w-4xl grid-cols-1 gap-y-10 sm:mb-16 sm:grid-cols-3 sm:gap-x-6 lg:mb-20 lg:max-w-none lg:gap-x-16">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl font-bold leading-none text-[#0D0B4A] sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-sans text-base font-bold text-[#0D0B4A] sm:text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {embedId ? (
              <figure
                className={`mx-auto max-w-5xl overflow-hidden ${R_CARD} ${SHADOW_MEDIA}`}
              >
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    title="Vidéo de présentation Ovedex (YouTube)"
                    className="absolute inset-0 h-full w-full border-0"
                    src={`https://www.youtube-nocookie.com/embed/${embedId}?rel=0&modestbranding=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                </div>
              </figure>
            ) : (
              <figure
                className={`relative mx-auto max-w-5xl overflow-hidden ${R_CARD} ${SHADOW_MEDIA}`}
              >
                <Image
                  src={SOCIAL_PROOF_VIDEO_POSTER_SRC}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  alt="Ovedex : collaboration et expertise terrain"
                  width={1200}
                  height={675}
                  className="block h-auto w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[#0D0B4A]/[0.22] mix-blend-multiply"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0B4A]/15 to-transparent to-40%"
                  aria-hidden
                />
                {videoHref && !posterLinkIsYoutube ? (
                  <Link
                    href={videoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-[1] outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#0D0B4A]"
                    aria-label="Lire la vidéo de présentation"
                  >
                    <span className="sr-only">Lire la vidéo de présentation</span>
                  </Link>
                ) : null}
                <PlayDecoration />
              </figure>
            )}
        </div>
      </div>
    </section>
  );
}
