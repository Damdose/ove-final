import Image from "next/image";
import { WHY_CHOOSE_CARDS } from "./data";

const ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692731cf9fdbe05111e87044_691e5a2f4ad9018806391c84_Icon%20(1)%201.svg";

export function SolutionsWhySection() {
  return (
    <div>
      <div className="overflow-x-hidden overflow-y-hidden">
        <div className="text-center justify-center items-center flex">
          <div className="w-full max-sm:mb-8 max-w-4xl mb-12 [transform-style:preserve-3d]">
            <div>
              <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-brand-ink font-display text-5xl font-bold leading-tight mb-8">
                Pourquoi choisir Ovedex Solutions ?
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:gap-y-12 max-md:grid-cols-[1fr] max-sm:gap-x-6 max-sm:gap-y-6 gap-x-8 gap-y-8 grid-rows-[auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] [align-items:start] justify-items-center grid">
        {WHY_CHOOSE_CARDS.map((card, index) => (
          <div
            key={index}
            className="text-center w-full h-full p-8 rounded-[30px] dark:bg-brand-ink/10 [transform-style:preserve-3d]"
          >
            <div className="flex">
              <div className="inline-block">
                <Image
                  loading="lazy"
                  src={ICON_SRC}
                  alt=""
                  width={64}
                  height={64}
                  className="inline-block object-contain w-16 h-16"
                />
              </div>
            </div>
            <div>
              <h3 className="mt-5 mb-2.5 text-brand-ink text-left font-display text-2xl font-semibold">
                {card.title}
              </h3>
            </div>
            <p className="font-sans font-light mb-2.5 text-brand-ink text-left text-base leading-7">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
