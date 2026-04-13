import Image from "next/image";
import { B2bContactForm } from "@/components/contact-page/b2b-contact-form";
import { CONTACT_PAGE_IMAGES, PARTNER_LOGOS } from "@/components/contact-page/contact-page-assets";
import { CONTACT } from "@/lib/contact";

const callbackHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Demande de rappel")}&body=${encodeURIComponent("Bonjour,\n\nMerci de me rappeler aux coordonnées suivantes :\n\nNom :\nTéléphone :\nCréneau souhaité :\n\n")}`;

export function ContactHeroSection() {
  return (
    <section className="bg-cover max-sm:pt-0 pt-5">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="w-full max-w-screen-xl mx-auto max-sm:max-w-none max-sm:px-2.5 bg-indigo-950 px-10 rounded-3xl">
          <div className="max-sm:pb-16 py-12">
            <div>
              <div className="max-lg:gap-x-12 max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] gap-x-32 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center justify-items-stretch grid">
                <div className="max-sm:row-start-[span_1] max-sm:col-start-[span_1] max-sm:row-end-[span_1] max-sm:col-end-[span_1]">
                  <div>
                    <h1 className="mt-5 max-sm:mb-0 font-display font-bold mb-8 max-sm:text-center max-sm:text-4xl text-white text-6xl">
                      Contacter l’équipe Ovedex
                    </h1>
                  </div>
                  <div>
                    <p className="font-sans text-lg font-light leading-7 mb-10 max-sm:text-center text-white">
                      Notre équipe commerciale est à votre disposition pour étudier vos besoins et pour vous guider dans
                      l’utilisation des solutions Ovedex.
                    </p>
                  </div>
                  <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] font-display text-lg font-bold leading-6 flex mt-5 mb-16 py-2 max-sm:mb-0 flex-col">
                    <a
                      href={`tel:${CONTACT.phoneTel}`}
                      className="max-sm:gap-x-2 max-sm:gap-y-2 max-sm:flex-col max-sm:py-4 bg-white justify-between items-center flex px-5 py-2.5 rounded-[48px] no-underline active:outline-0 hover:outline-0"
                    >
                      <div className="gap-x-2.5 gap-y-2.5 justify-start items-center flex">
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
                      <div className="max-sm:text-base font-light font-sans text-slate-800/50">{CONTACT.phoneDisplay}</div>
                    </a>
                    <a
                      href={callbackHref}
                      className="max-sm:gap-x-2 max-sm:gap-y-2 max-sm:flex-col max-sm:py-4 bg-white justify-between items-center flex px-5 py-2.5 rounded-[48px] no-underline active:outline-0 hover:outline-0"
                    >
                      <div className="gap-x-2.5 gap-y-2.5 justify-start items-center flex">
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
                      <div className="max-sm:text-base font-light font-sans text-slate-800/50">Demander à être rappelé</div>
                    </a>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="max-sm:gap-x-2 max-sm:gap-y-2 max-sm:flex-col max-sm:py-4 bg-white justify-between items-center flex px-5 py-2.5 rounded-[48px] no-underline active:outline-0 hover:outline-0"
                    >
                      <div className="gap-x-2.5 gap-y-2.5 justify-start items-center flex">
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
                      <div className="max-sm:text-base font-light font-sans text-slate-800/50">{CONTACT.email}</div>
                    </a>
                  </div>
                  <div className="max-md:pt-4 flex-wrap flex py-2 max-sm:flex-col max-sm:grid-rows-[auto_auto] max-sm:grid-cols-[1fr_1fr] max-sm:auto-cols-[1fr] max-sm:hidden gap-x-10 gap-y-10 justify-start items-center">
                    {PARTNER_LOGOS.map((logo) => (
                      <Image
                        key={logo.id}
                        loading="lazy"
                        alt=""
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        className="inline-block max-md:max-h-12 max-h-14 h-11 max-sm:justify-self-center w-auto"
                      />
                    ))}
                  </div>
                </div>
                <B2bContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
