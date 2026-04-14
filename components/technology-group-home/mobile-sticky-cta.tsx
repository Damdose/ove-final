import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

/**
 * Bouton WhatsApp flottant (mobile + desktop).
 */
export function MobileStickyCta() {
  return (
    <>
      {/* Bouton WhatsApp flottant mobile */}
      <Link
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform active:scale-[0.97] sm:hidden"
        aria-label="Contacter sur WhatsApp"
      >
        <Image
          width={28}
          height={28}
          alt=""
          src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69305d25a750d6d9e5271492_whatsapp.svg"
          className="h-7 w-7"
        />
      </Link>

      {/* Bouton WhatsApp flottant desktop */}
      <Link
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 active:scale-[0.97] sm:flex"
        aria-label="Contacter sur WhatsApp"
      >
        <Image
          width={32}
          height={32}
          alt=""
          src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69305d25a750d6d9e5271492_whatsapp.svg"
          className="h-8 w-8"
        />
      </Link>
    </>
  );
}
