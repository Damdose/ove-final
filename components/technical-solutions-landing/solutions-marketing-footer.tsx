import Image from "next/image";
import Link from "next/link";
import { InstagramGlyph, LinkedInGlyph } from "@/components/brand-social-icons";
import { CONTACT } from "@/lib/contact";

const LOGO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c76c50366b1991a7c9aa9_logovedex%201%20(1).svg";

export function SolutionsMarketingFooter() {
  return (
    <footer className="max-sm:pt-16 pt-32">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="[transform-style:preserve-3d]">
            <div>
              <div className="max-lg:gap-y-16 max-lg:grid-cols-[1fr] max-md:gap-y-12 max-sm:gap-y-12 auto-cols-[1fr] grid gap-x-[8vw] gap-y-4 grid-rows-[auto] grid-cols-[1fr_0.5fr] [align-items:start] mb-20">
                <div className="max-lg:gap-y-12 max-lg:grid-cols-[1fr_1fr_1fr] max-md:gap-x-6 max-sm:gap-y-10 max-sm:grid-cols-[1fr] auto-cols-[1fr] grid gap-x-8 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr_1fr_1fr] [align-items:start]">
                  <div
                    id="w-node-c130372e-c75b-f8d8-bb83-1fd99d4c12f4-ceddf671"
                    className="flex-col flex row-start-[span_1] col-start-[span_2] row-end-[span_1] col-end-[span_2]"
                  >
                    <Link
                      href="#"
                      id="w-node-c2d827b3-9528-11bd-fd2c-895eceddf678-ceddf671"
                      className="cursor-pointer font-light max-md:pl-2.5 float-left text-zinc-800 no-underline relative mb-6 active:outline-0 hover:outline-0 max-lg:row-start-1 max-lg:col-start-1 max-lg:row-end-2 max-lg:col-end-4 max-sm:row-start-[span_1] max-sm:col-start-[span_1] max-sm:row-end-[span_1] max-sm:col-end-[span_1]"
                    >
                      <Image
                        width={242}
                        loading="lazy"
                        alt=""
                        src={LOGO_SRC}
                        height={64}
                        className="inline-block ml-[-5%] mt-[-4%]"
                      />
                    </Link>
                    <div className="text-brand-ink text-base font-light leading-6">
                      Trois expertises,
                      une vision, <br />
                      une croissance partagée.
                    </div>
                    <div className="mt-12 flex items-center gap-4">
                      <Link
                        href={CONTACT.linkedInHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-brand-ink text-white no-underline transition-colors hover:bg-[#15124a] active:outline-0 hover:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                        aria-label="Ovedex sur LinkedIn"
                      >
                        <LinkedInGlyph className="h-5 w-5" />
                      </Link>
                      <Link
                        href={CONTACT.instagramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-brand-ink text-white no-underline transition-colors hover:bg-[#15124a] active:outline-0 hover:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                        aria-label="Ovedex sur Instagram"
                      >
                        <InstagramGlyph className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="text-brand-ink text-base leading-6 mb-2.5 font-display font-bold">
                        Domaines
                      </div>
                    </div>
                    <div className="gap-x-0.5 gap-y-0.5 flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                      <Link
                        href="/digital"
                        className="cursor-pointer text-brand-ink font-sans no-underline py-2 active:outline-0 hover:outline-0"
                      >
                        Digital
                      </Link>
                      <Link
                        href="/solutions"
                        aria-current="page"
                        className="cursor-pointer text-brand-ink font-sans no-underline py-2 active:outline-0 hover:outline-0"
                      >
                        Solutions
                      </Link>
                      <Link
                        href="/it"
                        className="cursor-pointer text-brand-ink font-sans no-underline py-2 active:outline-0 hover:outline-0"
                      >
                        IT
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="text-brand-ink text-base leading-6 mb-2.5 font-display font-bold">
                        Entreprise
                      </div>
                    </div>
                    <div className="gap-x-0.5 gap-y-0.5 flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                      <Link
                        href="/contact"
                        className="cursor-pointer text-brand-ink font-sans no-underline py-2 active:outline-0 hover:outline-0"
                      >
                        Contactez-nous
                      </Link>
                      <Link
                        href="/mentions-legales"
                        className="cursor-pointer text-brand-ink font-sans no-underline py-2 active:outline-0 hover:outline-0"
                      >
                        Mentions légales
                      </Link>
                      <Link
                        href="/politique-de-confidentialite"
                        className="cursor-pointer text-brand-ink font-sans no-underline py-2 active:outline-0 hover:outline-0"
                      >
                        Confidentialité
                      </Link>
                      <Link
                        href="/conditions-generales-de-vente"
                        className="cursor-pointer text-brand-ink font-sans no-underline py-2 active:outline-0 hover:outline-0"
                      >
                        CGV
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="gap-x-2 gap-y-2 flex-col flex">
                  <div>
                    <div className="text-brand-ink text-base leading-6 mb-2.5 font-display font-bold">
                      S&apos;abonner à notre newsletter
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-light leading-6">
                      Inscrivez-vous à notre newsletter pour être tenu au courant des nouveautés.
                    </div>
                  </div>
                  <div className="max-w-xl mt-2.5">
                    <form
                      id="email-form-solutions-footer"
                      name="email-form-solutions-footer"
                      method="get"
                      className="max-sm:gap-y-3 max-sm:grid-cols-[1fr] max-sm:items-end gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_max-content] auto-cols-[1fr] justify-start items-center flex mb-4 px-4 py-1.5 rounded-xl bg-slate-800/5"
                      aria-label="Email Form"
                    >
                      <input
                        className="text-zinc-800 align-middle w-full h-10 text-sm leading-snug block pr-3 py-2 border-stone-300 [border-style:#000] font-light border placeholder:text-neutral-400 focus:outline-0 focus:border-blue-500"
                        maxLength={256}
                        name="email-2"
                        placeholder="Votre mail"
                        type="email"
                        id="email-2-solutions-footer"
                        required
                      />
                      <input
                        type="submit"
                        className="[appearance:auto] text-white cursor-pointer px-4 py-2.5 border-0 bg-brand-ink rounded-xl"
                        value="S'inscrire"
                      />
                    </form>
                    <div className="text-center hidden mt-4 mb-5" tabIndex={-1} role="region" aria-label="Email Form success">
                      <div className="bg-rose-100 py-5 rounded-xl">
                        <div>Merci !</div>
                      </div>
                    </div>
                    <div className="text-brand-ink text-xs font-light">
                      En vous inscrivant, vous acceptez notre politique de confidentialité et
                      consentez à recevoir des mises à jour.
                    </div>
                    <div className="bg-red-100 hidden mt-4" tabIndex={-1} role="region" aria-label="Email Form failure">
                      <div className="flex-col justify-center items-center flex p-4">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px" />
            <div className="[border-top-style:solid] pb-12 border-t border-t-neutral-200">
              <div className="max-lg:flex-col-reverse max-lg:justify-start max-lg:items-start max-md:pb-4 justify-center items-center flex mt-10">
                <div className="max-md:gap-x-0 max-md:gap-y-4 max-md:flex-col max-md:grid-flow-row gap-x-6 gap-y-0 whitespace-normal grid-rows-[auto] grid-cols-[max-content] auto-cols-max grid-flow-col justify-center flex">
                  <div
                    id="w-node-c2d827b3-9528-11bd-fd2c-895eceddf6b8-ceddf671"
                    className="max-md:mt-4 text-brand-ink text-sm font-light max-md:row-start-4 max-md:col-start-1 max-md:row-end-5 max-md:col-end-2"
                  >
                    Copyright © 2025 Ovedex. Tous droits réservés.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273c7887620f90d015c069_logovedex%201.svg"
        loading="lazy"
        alt=""
        width={1}
        height={1}
        className="hidden"
      />
      <Link
        href="https://api.whatsapp.com/send/?phone=33651758513&text&type=phone_number&app_absent=0"
        target="_blank"
        className="text-purple-200 cursor-pointer font-light underline max-w-full inline-block active:outline-0 hover:outline-0"
        rel="noopener noreferrer"
      >
        <div
          id="whatsapp-button"
          className="max-sm:w-20 max-sm:h-20 max-sm:right-2.5 max-sm:bottom-2.5 z-30 cursor-pointer bg-brand-ink justify-center items-center w-24 h-24 duration-300 ease-in-out flex fixed rounded-[100%] border border-solid right-[1%] bottom-[1%] border-white/30 hover:bg-neutral-700 hover:scale-105"
        >
          <Image
            width={43}
            loading="lazy"
            alt=""
            src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69305d25a750d6d9e5271492_whatsapp.svg"
            height={43}
            className="inline-block"
          />
          <div className="bg-green-600 w-4 h-4 absolute rounded-[100%] left-1.5 top-1.5" />
        </div>
      </Link>
    </footer>
  );
}
