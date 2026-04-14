"use client";

import Image from "next/image";
import Link from "next/link";
import { POLE_THEMES } from "@/lib/brand-design-system";
import {
  BD_CARD,
  CAROUSEL_SERVICE_CTRL_CIRCLE,
  CAROUSEL_SERVICE_CTRL_DOT_BTN,
  CAROUSEL_SERVICE_CTRL_PILL,
  CAROUSEL_SERVICE_NAV_ROW,
  PAGE_X,
  RING_INK_FOCUS,
  SECTION_PAD,
  TEXT_INK,
  TEXT_INK_MUTED,
} from "@/lib/home-ui";
import { useCallback, useId, useState, type KeyboardEvent } from "react";
import { SERVICE_CAROUSEL_SLIDES } from "./data";
import { SolutionsServiceCarouselIcon } from "./solutions-service-carousel-icon";

const solutions = POLE_THEMES.solutions;

const SECTION_BG = "bg-[#f2f2f4]";
const CARD_ROUND = "rounded-[1.75rem]";
const CARD_SHADOW =
  "shadow-[0_4px_28px_rgba(13,11,74,0.07)] hover:shadow-[0_18px_44px_-14px_rgba(13,11,74,0.11)]";

function CarouselChevron({ direction, className }: { direction: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ?? "h-5 w-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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

const badgeServices = `inline-flex items-center rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${solutions.primary.bgClass} ${solutions.primary.textOnPrimaryClass}`;

function ServiceCardMediaBadge({ slug }: { slug: string }) {
  return (
    <span
      className={`pointer-events-none absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg shadow-[0_6px_16px_rgba(13,11,74,0.12)] ring-1 ring-white/30 ${solutions.primary.bgClass}`}
      aria-hidden
    >
      <SolutionsServiceCarouselIcon slug={slug} className={`h-5 w-5 ${solutions.primary.textOnPrimaryClass}`} />
    </span>
  );
}

export function SolutionsLandingServicesCarousel() {
  const maskId = useId();
  const [slide, setSlide] = useState(0);
  const total = SERVICE_CAROUSEL_SLIDES.length;

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
    <section className={`overflow-x-hidden ${SECTION_BG}`} aria-labelledby="solutions-services-carousel-heading">
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            <div className="mb-10 max-w-3xl sm:mb-12">
              <div className={badgeServices}>Services</div>
              <h2
                id="solutions-services-carousel-heading"
                className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}
              >
                Découvrez tous nos services Solutions
              </h2>
            </div>
            <div>
              <div
                className="relative mx-auto flex w-full flex-col pb-16 [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] sm:pb-[4.5rem]"
                role="region"
                aria-label="Carrousel des services Solutions"
              >
                <div
                  className="relative z-[1] mb-10 h-full w-full overflow-hidden whitespace-nowrap sm:mb-12"
                  id={`w-slider-mask-sol-${maskId}`}
                >
                  <div
                    className="flex w-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${slide * 100}%)` }}
                  >
                    {SERVICE_CAROUSEL_SLIDES.map((group, groupIndex) => (
                      <div
                        key={group.label}
                        className="relative mr-0 inline-block w-full shrink-0 basis-full align-top whitespace-normal text-left"
                        aria-label={group.label}
                        role="group"
                        aria-hidden={groupIndex === slide ? undefined : true}
                      >
                        <div aria-hidden={groupIndex === slide ? undefined : true}>
                          <div
                            role="list"
                            className="flex flex-col gap-5 sm:grid sm:auto-cols-[1fr] sm:grid-cols-3 sm:grid-rows-1 sm:gap-6"
                            aria-hidden={groupIndex === slide ? undefined : true}
                          >
                            {group.cards.map((card) => (
                              <div
                                key={card.href}
                                role="listitem"
                                className="h-full sm:col-span-1 sm:row-span-1"
                                aria-hidden={groupIndex === slide ? undefined : true}
                              >
                                <Link
                                  href={card.href}
                                  className={`group flex h-full min-h-0 max-w-full cursor-pointer flex-col no-underline outline-none transition-opacity active:outline-0 hover:outline-0 focus-visible:opacity-100 ${RING_INK_FOCUS} rounded-[inherit]`}
                                  tabIndex={groupIndex === slide ? 0 : -1}
                                  aria-hidden={groupIndex === slide ? undefined : true}
                                >
                                  <div
                                    className={`flex h-full min-h-0 w-full flex-col overflow-hidden text-left ${CARD_ROUND} ${BD_CARD} bg-white transition-shadow duration-300 ${CARD_SHADOW}`}
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
                                        className={`mt-8 inline-flex shrink-0 items-center gap-1.5 font-display text-base font-semibold ${TEXT_INK}`}
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
                  className={CAROUSEL_SERVICE_NAV_ROW}
                >
                  <div className={CAROUSEL_SERVICE_CTRL_PILL} role="presentation">
                    {SERVICE_CAROUSEL_SLIDES.map((_, i) => (
                      <button
                        key={String(i)}
                        type="button"
                        className={`${CAROUSEL_SERVICE_CTRL_DOT_BTN} ${RING_INK_FOCUS}`}
                        aria-label={`Afficher le groupe ${i + 1} sur ${total}`}
                        aria-current={i === slide ? "true" : undefined}
                        tabIndex={0}
                        onClick={() => setSlide(i)}
                      >
                        <span
                          className={`block rounded-full transition-colors duration-200 ${
                            i === slide ? "h-2 w-2 bg-blue-500" : "h-2 w-2 bg-neutral-300 hover:bg-neutral-400"
                          }`}
                          aria-hidden
                        />
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`${CAROUSEL_SERVICE_CTRL_CIRCLE} ${RING_INK_FOCUS}`}
                    aria-controls={`w-slider-mask-sol-${maskId}`}
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
