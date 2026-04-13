"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { SERVICE_CAROUSEL_IMAGE, SERVICE_CAROUSEL_SLIDES } from "./data";

const NEXT_ARROW_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693b65dabaf9fb660ed37252_path.svg";

function ServiceCard({
  card,
  hidden,
}: {
  card: (typeof SERVICE_CAROUSEL_SLIDES)[number]["cards"][number];
  hidden: boolean;
}) {
  return (
    <div role="listitem" aria-hidden={hidden || undefined}>
      <Link
        href={card.href}
        className="text-purple-200 cursor-pointer font-light max-w-full inline-block no-underline active:outline-0 hover:outline-0"
        tabIndex={hidden ? -1 : 0}
        aria-hidden={hidden || undefined}
      >
        <div
          className="text-center w-full h-full p-8 rounded-[30px] max-sm:px-6 bg-white min-h-full shadow-md [transform-style:preserve-3d]"
          aria-hidden={hidden || undefined}
        >
          <div className="flex" aria-hidden={hidden || undefined}>
            <Image
              src={SERVICE_CAROUSEL_IMAGE.src}
              sizes={SERVICE_CAROUSEL_IMAGE.sizes}
              loading="lazy"
              alt=""
              width={972}
              height={540}
              className="inline-block"
              aria-hidden={hidden || undefined}
            />
          </div>
          <div aria-hidden={hidden || undefined}>
            <h3
              className="mt-5 mb-2.5 text-brand-ink text-left font-display text-2xl font-semibold"
              aria-hidden={hidden || undefined}
            >
              {card.title}
            </h3>
          </div>
          <p
            className="font-sans font-light mb-2.5 text-brand-ink text-left text-base leading-7"
            aria-hidden={hidden || undefined}
          >
            {card.description}
          </p>
          <div className="text-brand-ink text-left text-base font-medium mt-8" aria-hidden={hidden || undefined}>
            -&gt; &nbsp;Découvrir
          </div>
        </div>
      </Link>
    </div>
  );
}

export function SolutionsServicesCarousel() {
  const [index, setIndex] = useState(0);
  const total = SERVICE_CAROUSEL_SLIDES.length;

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  return (
    <section className="bg-gray-50 overflow-x-hidden overflow-y-hidden">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div className="text-center flex justify-start items-center">
              <div className="w-full max-w-4xl max-sm:mb-0 mb-4">
                <div className="flex">
                  <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                    Services
                  </div>
                </div>
                <div>
                  <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 font-display text-5xl font-bold leading-tight mb-8 text-brand-ink text-left">
                    Découvrez tous nos services Solutions
                  </h2>
                </div>
              </div>
            </div>
            <div className="max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:flex max-sm:mt-10">
              <div
                className="max-sm:pb-9 text-center clear-both [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] relative justify-start items-center w-full flex mx-auto pb-16"
                role="region"
                aria-label="carousel"
              >
                <div className="z-[1] relative inset-x-0 w-full mb-10 overflow-hidden" id="w-slider-mask-0">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {SERVICE_CAROUSEL_SLIDES.map((slide) => (
                      <div
                        key={slide.label}
                        className="w-full shrink-0 whitespace-normal text-left px-1 sm:px-0"
                        aria-label={slide.label}
                        role="group"
                        aria-hidden={slide.label !== SERVICE_CAROUSEL_SLIDES[index]?.label}
                      >
                        <div>
                          <div
                            role="list"
                            className="max-sm:flex-col max-sm:flex gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] grid"
                          >
                            {slide.cards.map((card) => (
                              <ServiceCard
                                key={card.href}
                                card={card}
                                hidden={slide.label !== SERVICE_CAROUSEL_SLIDES[index]?.label}
                              />
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
                  className="[clip:rect(0_0_0_0)] w-px h-px absolute overflow-x-hidden overflow-y-hidden -m-px"
                />
                <button
                  type="button"
                  className="cursor-pointer [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] select-none z-[3] ml-auto my-auto text-white flex-none justify-center items-center w-11 h-11 text-base font-medium transition-shadow duration-300 absolute overflow-x-hidden overflow-y-hidden p-2 rounded-[200px] border-2 bottom-[0%] focus:outline-0 bg-gray-100 mr-5 border-none right-10 max-sm:right-4 hidden sm:flex"
                  aria-label="previous slide"
                  aria-controls="w-slider-mask-0"
                  onClick={goPrev}
                >
                  <div className="flex-none justify-center items-center w-4 h-4 flex text-zinc-900/60 before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both">
                    <svg
                      width="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      className="align-baseline inline h-4 fill-none overflow-x-hidden overflow-y-hidden"
                      aria-hidden
                    >
                      <path
                        d="M7.21763 8.00047L10.5175 11.3003L9.5747 12.2431L5.33203 8.00047L9.5747 3.75781L10.5175 4.70062L7.21763 8.00047Z"
                        className="fill-white"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  type="button"
                  className="cursor-pointer [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] select-none z-[4] m-auto text-white bg-white [border-style:#23272f] flex-none justify-center items-center w-11 h-11 text-base font-medium transition-shadow duration-300 flex absolute overflow-x-hidden overflow-y-hidden p-2 rounded-[200px] border-2 right-[0%] bottom-[0%] focus:outline-0 max-sm:right-2"
                  aria-label="next slide"
                  aria-controls="w-slider-mask-0"
                  onClick={goNext}
                >
                  <Image loading="lazy" src={NEXT_ARROW_SRC} alt="" width={20} height={20} className="inline-block" />
                </button>
                <div className="z-[2] text-center [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] m-auto justify-start items-center flex absolute bottom-[0%] text-brand-ink bg-white h-10 pt-2 px-5 rounded-[200px] right-16 max-sm:right-14">
                  {SERVICE_CAROUSEL_SLIDES.map((slide, dotIndex) => (
                    <button
                      key={slide.label}
                      type="button"
                      className={
                        dotIndex === index
                          ? "cursor-pointer transition-colors duration-100 ease-in-out inline-block relative mb-2 focus:outline-0 bg-brand-ink w-3 h-3 rounded-[100%] mx-[3px]"
                          : "cursor-pointer transition-colors duration-100 ease-in-out inline-block relative bg-zinc-200 w-2 h-2 mb-2 focus:outline-0 focus:shadow-[0_0_0_2px_#fff] rounded-[100%] mx-[3px]"
                      }
                      aria-label={`Show slide ${dotIndex + 1} of ${total}`}
                      aria-pressed={dotIndex === index}
                      tabIndex={dotIndex === index ? 0 : -1}
                      onClick={() => setIndex(dotIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
