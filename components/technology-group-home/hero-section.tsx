import Image from "next/image";
import Link from "next/link";
import { INK, PAGE_X, R_BTN, R_CARD } from "@/lib/home-ui";
import { LOGO_IMAGES } from "./content";

export function HeroSection() {
  return (
    <header className="relative overflow-x-hidden bg-white">
      <div className={PAGE_X}>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="pb-8 pt-4 sm:pb-10 sm:pt-6 lg:pb-14 lg:pt-10">
            <div className="grid auto-cols-[1fr] grid-cols-1 items-center gap-x-14 gap-y-12 lg:grid-cols-[1fr_1fr] lg:gap-y-10">
              <div className="order-2 lg:order-1">
                <h1
                  className="mb-5 max-w-[22ch] font-display text-[1.65rem] font-bold leading-snug tracking-tight text-[#0D0B4A] sm:text-5xl sm:leading-[1.12] lg:text-[2.65rem] lg:leading-[1.1]"
                >
                  Trois expertises, une vision, une croissance partagée.
                </h1>
                <p className="mb-9 max-w-xl font-sans text-base font-normal leading-relaxed text-[#0D0B4A]/75 sm:text-lg">
                  Nous accompagnons les entreprises dans leurs projets digitaux, techniques et
                  informatiques grâce à une synergie unique entre nos trois pôles : Digital,
                  Solutions et IT.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className={`inline-flex h-14 min-w-[11rem] items-center justify-center ${R_BTN} px-6 text-lg font-medium text-white no-underline transition-opacity hover:opacity-92 active:outline-none`}
                    style={{ backgroundColor: INK }}
                  >
                    Contacter un expert
                  </Link>
                  <Link
                    href="#3-poles"
                    className={`inline-flex h-14 min-w-[11rem] items-center justify-center ${R_BTN} border border-solid bg-transparent px-6 text-lg font-medium no-underline transition-colors hover:bg-[#0D0B4A]/[0.04] active:outline-none`}
                    style={{ borderColor: INK, color: INK }}
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div
                  className="relative mx-auto max-w-[36rem] lg:mx-0 lg:ml-auto"
                  aria-hidden
                >
                  <Image
                    width={640}
                    height={520}
                    alt=""
                    src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/691e5d1830c4ac0edbb4d809_illu%20(1).avif"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pb-10 sm:pb-12">
            <div
              className={`logo-marquee-outer ${R_CARD} px-6 py-7 sm:px-10 sm:py-8`}
              style={{ backgroundColor: INK }}
              role="region"
              aria-label="Logos partenaires"
            >
              <div className="logo-marquee-track gap-x-10 sm:gap-x-12">
                {LOGO_IMAGES.map((logo, index) => (
                  <Image
                    key={`hero-logo-a-${index}`}
                    loading="eager"
                    src={logo.src}
                    alt={logo.alt || "Partenaire"}
                    width={logo.width ?? 96}
                    height={40}
                    className="h-7 w-auto shrink-0 object-contain opacity-90 brightness-0 invert sm:h-8"
                  />
                ))}
                {LOGO_IMAGES.map((logo, index) => (
                  <Image
                    key={`hero-logo-b-${index}`}
                    loading="eager"
                    src={logo.src}
                    alt=""
                    aria-hidden
                    width={logo.width ?? 96}
                    height={40}
                    className="h-7 w-auto shrink-0 object-contain opacity-90 brightness-0 invert sm:h-8"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
