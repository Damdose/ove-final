"use client";

import { useState } from "react";
import { BRAND } from "@/lib/brand-design-system";
import { PAGE_X, SECTION_PAD, TEXT_INK, BG_INK } from "@/lib/home-ui";
import type { ServiceTechnologies } from "@/lib/service-technologies";

interface ServiceTechnologiesSectionProps {
  technologies: ServiceTechnologies;
}

export function ServiceTechnologiesSection({ technologies }: ServiceTechnologiesSectionProps) {
  const { categories } = technologies;
  const [activeIdx, setActiveIdx] = useState(0);
  const activeBrands = categories[activeIdx]?.brands ?? [];

  return (
    <section className={`${BRAND.surfaceMuted.bgClass} pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-24 lg:pb-16`}>
      <div className={`${PAGE_X} mx-auto max-w-screen-xl`}>
        {/* Badge */}
        <div className="flex justify-center">
          <span
            className={`inline-flex items-center rounded-full ${BG_INK} px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white`}
          >
            Technologies
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`mx-auto mt-5 max-w-2xl text-center font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${TEXT_INK}`}
        >
          Les technologies que nous utilisons
        </h2>

        {/* Category tabs */}
        {categories.length > 1 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10">
            {categories.map((cat, idx) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`inline-flex cursor-pointer items-center rounded-full border px-5 py-2.5 font-sans text-sm font-medium transition-colors ${
                  idx === activeIdx
                    ? `${BG_INK} border-transparent text-white`
                    : `border-black/[0.08] bg-white ${TEXT_INK} hover:bg-gray-100`
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Brands grid — columns adapt to count so it never looks sparse */}
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4 sm:mt-12">
          {activeBrands.map((brand) => (
            <div
              key={brand}
              className="flex w-[calc(50%-0.5rem)] items-center justify-center rounded-2xl bg-white/70 px-5 py-7 text-center font-sans text-sm font-semibold tracking-tight text-[#0D0B4A] ring-1 ring-black/[0.04] sm:w-[calc(33.333%-0.75rem)] sm:py-8 sm:text-base md:w-[clamp(10rem,18%,13rem)]"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
