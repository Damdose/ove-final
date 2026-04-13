"use client";

import { ContactEcosystemSection } from "@/components/contact-page/contact-ecosystem-section";
import { ContactHeroSection } from "@/components/contact-page/contact-hero-section";
import { CONTACT_PAGE_IMAGES } from "@/components/contact-page/contact-page-assets";
import { CONTACT } from "@/lib/contact";
import Image from "next/image";

export function ContactPageExperience() {
  return (
    <div className="relative bg-white pb-28 text-indigo-950">
      <ContactHeroSection />
      <ContactEcosystemSection />

      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-200 cursor-pointer font-light underline max-w-full inline-block active:outline-0 hover:outline-0"
        aria-label="Contacter Ovedex sur WhatsApp"
      >
        <div
          id="whatsapp-button"
          className="max-sm:w-20 max-sm:h-20 max-sm:right-2.5 max-sm:bottom-2.5 z-30 cursor-pointer bg-indigo-950 justify-center items-center w-24 h-24 duration-300 ease-in-out flex fixed rounded-[100%] border border-solid right-[1%] bottom-[1%] border-white/30 hover:bg-neutral-700 hover:scale-105"
        >
          <Image
            width={43}
            height={43}
            loading="lazy"
            alt=""
            src={CONTACT_PAGE_IMAGES.whatsapp}
            className="inline-block"
          />
          <div className="bg-green-600 w-4 h-4 absolute rounded-[100%] left-1.5 top-1.5" aria-hidden />
        </div>
      </a>
    </div>
  );
}
