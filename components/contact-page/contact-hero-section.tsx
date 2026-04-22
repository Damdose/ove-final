import Image from "next/image";
import { Suspense } from "react";
import { B2bContactForm } from "@/components/contact-page/b2b-contact-form";
import { CONTACT_PAGE_IMAGES, PARTNER_LOGOS } from "@/components/contact-page/contact-page-assets";
import { CONTACT } from "@/lib/contact";

const callbackHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Demande de rappel")}&body=${encodeURIComponent("Bonjour,\n\nMerci de me rappeler aux coordonnées suivantes :\n\nNom :\nTéléphone :\nCréneau souhaité :\n\n")}`;

export function ContactHeroSection() {
  return (
    <section className="w-full bg-[#0D0B4A]">
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-5 lg:px-6">
        <div className="pt-10 pb-14 sm:pt-12 sm:pb-10 md:py-14 lg:py-16">
          <div>
            <div className="grid min-h-0 auto-cols-[1fr] grid-cols-1 grid-rows-[auto] items-stretch justify-items-stretch gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-14 lg:gap-y-12 xl:gap-x-24">
                <div className="col-span-1 flex min-h-0 flex-col justify-between gap-8 md:h-auto md:justify-start md:gap-10">
                  <div>
                    <h1 className="mt-0 mb-0 text-center font-display text-4xl font-bold text-white sm:mb-5 sm:text-left sm:text-5xl lg:text-6xl">
                      Contacter l’équipe Ovedex
                    </h1>
                    <p className="mb-8 text-center font-sans text-base font-light leading-relaxed text-white/95 sm:text-left sm:text-lg">
                      Notre équipe commerciale est à votre disposition pour étudier vos besoins et pour vous guider dans
                      l’utilisation des solutions Ovedex.
                    </p>
                    <div className="mb-0 flex flex-col gap-x-3 gap-y-3 py-1 font-display text-base font-bold leading-6 sm:mb-0 sm:text-lg">
                      <a
                        href={`tel:${CONTACT.phoneTel}`}
                        className="flex flex-col items-center justify-between gap-x-2 gap-y-2 rounded-[48px] bg-white px-5 py-4 no-underline active:outline-0 hover:outline-0 sm:flex-row sm:py-2.5"
                      >
                        <div className="flex items-center justify-start gap-x-2.5 gap-y-2.5">
                          <Image
                            src={CONTACT_PAGE_IMAGES.iconPhone}
                            alt=""
                            width={24}
                            height={24}
                            className="inline-block"
                            loading="lazy"
                          />
                          <div className="text-indigo-950">Téléphone</div>
                        </div>
                        <div className="text-base font-light font-sans text-slate-800/50 sm:text-lg">{CONTACT.phoneDisplay}</div>
                      </a>
                      <a
                        href={callbackHref}
                        className="flex flex-col items-center justify-between gap-x-2 gap-y-2 rounded-[48px] bg-white px-5 py-4 no-underline active:outline-0 hover:outline-0 sm:flex-row sm:py-2.5"
                      >
                        <div className="flex items-center justify-start gap-x-2.5 gap-y-2.5">
                          <Image
                            src={CONTACT_PAGE_IMAGES.iconCallback}
                            alt=""
                            width={24}
                            height={24}
                            className="inline-block"
                            loading="lazy"
                          />
                          <div className="text-indigo-950">Rappel gratuit</div>
                        </div>
                        <div className="text-base font-light font-sans text-slate-800/50 sm:text-lg">Demander à être rappelé</div>
                      </a>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="flex flex-col items-center justify-between gap-x-2 gap-y-2 rounded-[48px] bg-white px-5 py-4 no-underline active:outline-0 hover:outline-0 sm:flex-row sm:py-2.5"
                      >
                        <div className="flex items-center justify-start gap-x-2.5 gap-y-2.5">
                          <Image
                            src={CONTACT_PAGE_IMAGES.iconEmail}
                            alt=""
                            width={24}
                            height={24}
                            className="inline-block"
                            loading="lazy"
                          />
                          <div className="text-indigo-950">Email</div>
                        </div>
                        <div className="text-base font-light font-sans text-slate-800/50 sm:text-lg">{CONTACT.email}</div>
                      </a>
                    </div>
                  </div>
                  <div className="mt-auto hidden flex-wrap items-center justify-start gap-x-8 gap-y-6 sm:flex md:mt-8 md:border-t md:border-white/10 md:pt-6">
                    {PARTNER_LOGOS.map((logo) => (
                      <Image
                        key={logo.id}
                        loading="lazy"
                        alt=""
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        className="inline-block h-10 w-auto justify-self-center opacity-95 sm:max-h-11 sm:justify-self-auto md:h-12"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex min-h-0 w-full items-start justify-center lg:justify-end">
                  <Suspense>
                    <B2bContactForm />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
