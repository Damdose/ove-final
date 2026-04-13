"use client";

import Image from "next/image";
import Link from "next/link";
import { POLE_THEMES } from "@/lib/brand-design-system";
import {
  BD_CARD,
  PAGE_X,
  R_CARD,
  SECTION_PAD,
  RING_INK_FOCUS,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
  TEXT_INK,
  TEXT_INK_MUTED,
  BG_INK,
} from "@/lib/home-ui";
import { useCallback, useId, useState, type KeyboardEvent } from "react";
import { DigitalServiceCarouselIcon } from "./digital-service-carousel-icon";
import { SERVICE_SLIDES } from "./digital-services-landing-content";

const digital = POLE_THEMES.digital;

function CarouselChevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

const badgeServices = `inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${digital.primary.bgClass} ${digital.primary.textOnPrimaryClass}`;

function ServiceCardMediaBadge({ slug }: { slug: string }) {
  return (
    <span
      className={`pointer-events-none absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg shadow-[0_6px_16px_rgba(13,11,74,0.12)] ring-1 ring-white/30 ${digital.primary.bgClass}`}
      aria-hidden
    >
      <DigitalServiceCarouselIcon slug={slug} className={`h-5 w-5 ${digital.primary.textOnPrimaryClass}`} />
    </span>
  );
}

export function DigitalLandingServicesCarousel() {
  const maskId = useId();
  const [slide, setSlide] = useState(0);
  const total = SERVICE_SLIDES.length;

  const goNext = useCallback(() => {
    setSlide((s) => (s + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setSlide((s) => (s - 1 + total) % total);
  }, [total]);

  const onNavKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    },
    [goNext, goPrev],
  );

  return (
    <section className={`overflow-x-hidden ${BG_INK}`} aria-labelledby="digital-services-carousel-heading">
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            <div className="mb-10 max-w-3xl sm:mb-12">
              <div className={badgeServices}>Services</div>
              <h2
                id="digital-services-carousel-heading"
                className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Découvrez tous nos services Digital
              </h2>
            </div>
            <div className="max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-start max-sm:mt-10">
              <div
                className="relative clear-both mx-auto mb-8 flex w-full max-sm:mt-10 max-sm:pb-7 items-center justify-start pb-12 text-center [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent]"
                role="region"
                aria-label="Carrousel des services Digital"
              >
                <div
                  className="relative inset-x-0 z-[1] mb-8 h-full w-full overflow-hidden whitespace-nowrap"
                  id={`w-slider-mask-0-${maskId}`}
                >
                  <div
                    className="flex w-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${slide * 100}%)` }}
                  >
                    {SERVICE_SLIDES.map((group, groupIndex) => (
                      <div
                        key={group.ariaLabel}
                        className="relative mr-0 inline-block w-full shrink-0 basis-full align-top whitespace-normal text-left max-sm:ml-2.5 max-sm:mr-0 max-sm:w-auto"
                        aria-label={group.ariaLabel}
                        role="group"
                        aria-hidden={groupIndex === slide ? undefined : true}
                      >
                        <div aria-hidden={groupIndex === slide ? undefined : true}>
                          <div
                            role="list"
                            className="grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] grid-rows-1 gap-x-4 gap-y-4 max-sm:flex max-sm:flex-col"
                            aria-hidden={groupIndex === slide ? undefined : true}
                          >
                            {group.cards.map((card) => (
                              <div
                                key={card.href}
                                role="listitem"
                                className="h-full max-sm:col-end-[span_1] max-sm:col-start-[span_1] max-sm:row-end-[span_1] max-sm:row-start-[span_1]"
                                aria-hidden={groupIndex === slide ? undefined : true}
                              >
                                <Link
                                  href={card.href}
                                  className={`group flex h-full min-h-0 max-w-full cursor-pointer flex-col no-underline outline-none transition-opacity active:outline-0 hover:outline-0 focus-visible:opacity-100 ${RING_INK_FOCUS} rounded-[inherit]`}
                                  tabIndex={groupIndex === slide ? 0 : -1}
                                  aria-hidden={groupIndex === slide ? undefined : true}
                                >
                                  <div
                                    className={`flex h-full min-h-0 w-full flex-col overflow-hidden text-left ${R_CARD} ${BD_CARD} bg-white ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER}`}
                                    aria-hidden={groupIndex === slide ? undefined : true}
                                  >
                                    <div className="relative aspect-[243/100] w-full shrink-0 overflow-hidden bg-neutral-100">
                                      <ServiceCardMediaBadge slug={card.slug} />
                                      <Image
                                        src={card.imageSrc}
                                        loading="lazy"
                                        sizes="(max-width: 972px) 100vw, 33vw"
                                        alt={card.imageAlt}
                                        width={972}
                                        height={400}
                                        className="h-full w-full object-cover"
                                        aria-hidden={groupIndex === slide ? undefined : true}
                                      />
                                    </div>
                                    <div
                                      className="flex min-h-0 flex-1 flex-col p-6 sm:p-8"
                                      aria-hidden={groupIndex === slide ? undefined : true}
                                    >
                                      <h3 className={`font-display text-2xl font-semibold ${TEXT_INK}`}>{card.title}</h3>
                                      <p
                                        className={`mt-3 flex-1 font-sans text-base font-normal leading-relaxed ${TEXT_INK_MUTED}`}
                                      >
                                        {card.description}
                                      </p>
                                      <span
                                        className={`mt-8 inline-flex shrink-0 items-center gap-1.5 font-display text-base font-semibold ${TEXT_INK} underline decoration-emerald-400/45 decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-emerald-400`}
                                        aria-hidden={groupIndex === slide ? undefined : true}
                                      >
                                        <span aria-hidden>→</span> Découvrir
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  aria-live="off"
                  aria-atomic="true"
                  className="absolute -m-px h-px w-px overflow-hidden [clip:rect(0_0_0_0)]"
                />
                <nav
                  aria-label="Navigation du carrousel"
                  onKeyDown={onNavKeyDown}
                  className="absolute bottom-0 left-0 right-0 z-[4] mx-auto flex w-max max-w-full items-center gap-5 text-white/75 sm:left-auto sm:right-0 sm:mx-0"
                >
                  <button
                    type="button"
                    className={`flex h-10 w-10 shrink-0 cursor-pointer select-none items-center justify-center rounded-full text-white/55 transition-colors hover:text-white focus:outline-0 ${RING_INK_FOCUS}`}
                    aria-controls={`w-slider-mask-0-${maskId}`}
                    aria-label="Diapositive précédente"
                    onClick={goPrev}
                  >
                    <CarouselChevron direction="left" />
                  </button>
                  <div className="flex items-center justify-center gap-2">
                    {SERVICE_SLIDES.map((_, i) => (
                      <button
                        key={String(i)}
                        type="button"
                        className={`flex min-h-10 min-w-10 cursor-pointer select-none items-center justify-center rounded-full transition-opacity focus:outline-0 hover:opacity-100 ${RING_INK_FOCUS} ${i === slide ? "opacity-100" : "opacity-70"}`}
                        aria-label={`Afficher le groupe ${i + 1} sur ${total}`}
                        aria-current={i === slide ? "true" : undefined}
                        tabIndex={0}
                        onClick={() => setSlide(i)}
                      >
                        <span
                          className={`block rounded-full transition-[width,height,background-color] duration-200 ease-out ${
                            i === slide ? "h-2 w-2 bg-white" : "h-1.5 w-1.5 bg-white/40 hover:bg-white/55"
                          }`}
                          aria-hidden
                        />
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`flex h-10 w-10 shrink-0 cursor-pointer select-none items-center justify-center rounded-full text-white/55 transition-colors hover:text-white focus:outline-0 ${RING_INK_FOCUS}`}
                    aria-controls={`w-slider-mask-0-${maskId}`}
                    aria-label="Diapositive suivante"
                    onClick={goNext}
                  >
                    <CarouselChevron direction="right" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
