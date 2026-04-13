"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { TESTIMONIAL_SLIDES } from "./data";

export function SolutionsPageTestimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIAL_SLIDES.length;

  const goPrev = useCallback(() => {
    setIndex((c) => (c - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((c) => (c + 1) % total);
  }, [total]);

  return (
    <section className="max-sm:overflow-x-clip max-sm:overflow-y-clip bg-gray-50 justify-center items-start flex">
      <div className="px-[5%] max-sm:max-w-full bg-brand-ink max-w-screen-xl rounded-3xl">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-sm:-mb-5 max-sm:pt-16 max-sm:pb-0 pt-24 pb-8 [transform-style:preserve-3d]">
            <div>
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="text-center justify-center items-center flex">
                  <div className="w-full max-w-4xl max-sm:mb-0 mb-4">
                    <div>
                      <div className="justify-center items-center inline-block tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] text-brand-ink bg-white">
                        Avis
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display text-5xl font-bold leading-tight text-white mb-8">
                        Témoignages clients
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-md:pb-12 text-center clear-both [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] relative justify-center items-center pb-16" role="region" aria-label="carousel">
                <div className="z-[1] whitespace-nowrap h-full relative overflow-x-hidden overflow-y-hidden inset-x-0" id="w-slider-mask-1">
                  <div
                    className="flex w-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {TESTIMONIAL_SLIDES.map((item, itemIndex) => (
                      <div
                        key={item.name}
                        className="max-md:px-0 align-top whitespace-normal text-left w-full h-full inline-block relative px-16 shrink-0 basis-full"
                        aria-label={`${itemIndex + 1} of ${total}`}
                        role="group"
                        aria-hidden={itemIndex === index ? undefined : true}
                      >
                        <div className="max-sm:max-w-full text-center max-w-screen-md h-full mx-auto" aria-hidden={itemIndex === index ? undefined : true}>
                          <h3
                            className="mt-5 max-md:text-xl font-display text-2xl font-semibold leading-snug mb-8 text-white"
                            aria-hidden={itemIndex === index ? undefined : true}
                          >
                            {item.quote}
                          </h3>
                          <div aria-hidden={itemIndex === index ? undefined : true}>
                            <div aria-hidden={itemIndex === index ? undefined : true}>
                              <div aria-hidden={itemIndex === index ? undefined : true}>
                                <div className="mb-5" aria-hidden={itemIndex === index ? undefined : true}>
                                  <Image
                                    loading="lazy"
                                    src={item.avatarSrc}
                                    sizes={item.avatarSizes ?? "64px"}
                                    alt=""
                                    width={64}
                                    height={64}
                                    className="inline-block object-cover w-16 min-w-16 h-16 min-h-16 rounded-[100%]"
                                    aria-hidden={itemIndex === index ? undefined : true}
                                  />
                                </div>
                              </div>
                              <div
                                className="text-base leading-6 mb-2.5 text-white font-display font-semibold"
                                aria-hidden={itemIndex === index ? undefined : true}
                              >
                                {item.name}
                              </div>
                              <div className="text-white whitespace-pre-line" aria-hidden={itemIndex === index ? undefined : true}>
                                {item.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    aria-live="off"
                    aria-atomic="true"
                    className="[clip:rect(0_0_0_0)] w-px h-px absolute overflow-x-hidden overflow-y-hidden -m-px"
                  />
                </div>
                <button
                  type="button"
                  className="cursor-pointer text-white [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] select-none text-4xl absolute overflow-x-hidden overflow-y-hidden z-[3] m-auto left-0 inset-y-0 justify-center items-center w-14 h-14 flex rounded-[100%] border border-solid max-sm:top-24 focus:outline-0 bg-[linear-gradient(#fff,#fff)]"
                  aria-label="previous slide"
                  aria-controls="w-slider-mask-1"
                  onClick={goPrev}
                >
                  <Image
                    src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/691e5a2f4ad9018806391cc0_ic_chevron_left.svg"
                    loading="lazy"
                    alt=""
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                </button>
                <button
                  type="button"
                  className="cursor-pointer text-white [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] select-none text-4xl absolute overflow-x-hidden overflow-y-hidden z-[4] m-auto right-0 inset-y-0 justify-center items-center w-14 h-14 flex rounded-[100%] border border-solid max-sm:top-24 focus:outline-0 bg-[linear-gradient(#fff,#fff)]"
                  aria-label="next slide"
                  aria-controls="w-slider-mask-1"
                  onClick={goNext}
                >
                  <Image
                    src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/691e5a2f4ad9018806391cc1_ic_chevron_right.svg"
                    loading="lazy"
                    alt=""
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
