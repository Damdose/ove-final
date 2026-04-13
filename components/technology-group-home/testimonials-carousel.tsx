"use client";

import { BRAND } from "@/lib/brand-design-system";
import {
  BD_CARD,
  BG_INK,
  PAGE_X,
  R_CARD,
  RING_INK_FOCUS,
  SECTION_PAD,
  SHADOW_SURFACE,
  TEXT_INK,
} from "@/lib/home-ui";
import Image from "next/image";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { TESTIMONIALS } from "./content";

const AUTO_MS = 5500;

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );
}

export function TestimonialsCarousel() {
  const uid = useId();
  const maskId = `home-testimonials-mask-${uid}`;
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pausedRef = useRef(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || total <= 1) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) {
        setIndex((c) => (c + 1) % total);
      }
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [reducedMotion, total]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  const active = useMemo(() => TESTIMONIALS[index], [index]);

  return (
    <section className={BRAND.surfaceMuted.bgClass}>
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className={SECTION_PAD}>
            <div
              className={`relative overflow-hidden ${R_CARD} ${BG_INK} ${BD_CARD} ${SHADOW_SURFACE} px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14`}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(125,170,241,0.14),transparent_58%)]"
                aria-hidden
              />

              <header className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
                <div
                  className={`inline-flex items-center justify-center rounded-full bg-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] ${TEXT_INK}`}
                >
                  Avis
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Témoignages clients
                </h2>
              </header>

              <div
                className="relative mx-auto max-w-2xl px-0 sm:px-2 md:px-10 lg:px-14"
                role="region"
                aria-roledescription="carousel"
                aria-label="Témoignages clients"
                onMouseEnter={() => {
                  pausedRef.current = true;
                }}
                onMouseLeave={() => {
                  pausedRef.current = false;
                }}
              >
                <div className="relative overflow-hidden" id={maskId}>
                  <div
                    className={`flex w-full ${reducedMotion ? "" : "transition-transform duration-500 ease-out"}`}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {TESTIMONIALS.map((item, itemIndex) => (
                      <div
                        key={item.name}
                        className="w-full shrink-0 basis-full px-1 sm:px-2"
                        aria-label={`${itemIndex + 1} sur ${total}`}
                        role="group"
                        aria-roledescription="slide"
                        aria-hidden={itemIndex === index ? undefined : true}
                      >
                        <blockquote className="mx-auto max-w-xl text-center">
                          <p className="font-display text-lg font-semibold leading-relaxed text-white sm:text-xl md:text-2xl md:leading-snug">
                            {item.quote}
                          </p>
                          <footer className="mt-8 flex flex-col items-center gap-2 sm:mt-10">
                            <Image
                              loading={itemIndex === 0 ? "eager" : "lazy"}
                              src={item.avatarSrc}
                              sizes={item.avatarSizes ?? "64px"}
                              alt=""
                              width={64}
                              height={64}
                              className="h-16 w-16 rounded-full object-cover ring-2 ring-white/35"
                            />
                            <cite className="not-italic">
                              <span className="block font-display text-base font-semibold text-white">{item.name}</span>
                              <span className="mt-1 block max-w-sm whitespace-pre-line font-sans text-sm font-normal text-white/80">
                                {item.role}
                              </span>
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    ))}
                  </div>
                  <div aria-live="polite" aria-atomic="true" className="sr-only">
                    {active.name}, {active.role}
                  </div>
                </div>

                <button
                  type="button"
                  className={`absolute left-0 top-1/2 z-[3] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0D0B4A] shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-[opacity,transform] hover:scale-105 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B4A] sm:left-0 sm:h-12 sm:w-12 md:-left-1 lg:-left-2 ${RING_INK_FOCUS}`}
                  aria-label="Témoignage précédent"
                  aria-controls={maskId}
                  onClick={goPrev}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className={`absolute right-0 top-1/2 z-[3] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0D0B4A] shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-[opacity,transform] hover:scale-105 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B4A] sm:right-0 sm:h-12 sm:w-12 md:-right-1 lg:-right-2 ${RING_INK_FOCUS}`}
                  aria-label="Témoignage suivant"
                  aria-controls={maskId}
                  onClick={goNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div
                className="relative mt-8 flex justify-center gap-2 sm:mt-10"
                role="tablist"
                aria-label="Choisir un témoignage"
              >
                {TESTIMONIALS.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Témoignage de ${item.name}`}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B4A] ${
                      i === index ? "w-8 bg-white" : "w-2 bg-white/35 hover:bg-white/55"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
