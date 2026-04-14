"use client";

import { ContactHeroSection } from "@/components/contact-page/contact-hero-section";
import { CONTACT_PAGE_IMAGES } from "@/components/contact-page/contact-page-assets";
import { CONTACT } from "@/lib/contact";
import Image from "next/image";

export function ContactPageExperience() {
  return (
    <div className="relative bg-white text-indigo-950">
      <ContactHeroSection />

      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-200 cursor-pointer font-light underline max-w-full inline-block active:outline-0 hover:outline-0"
        aria-label="Contacter Ovedex sur WhatsApp"
      >
        <div
          id="whatsapp-button"
          className="fixed bottom-2.5 right-2.5 z-30 flex h-20 w-20 cursor-pointer items-center justify-center rounded-[100%] border border-solid border-white/30 bg-indigo-950 duration-300 ease-in-out hover:scale-105 hover:bg-neutral-700 sm:bottom-[1%] sm:right-[1%] sm:h-24 sm:w-24"
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
