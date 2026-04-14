import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

/**
 * Barre sticky mobile "Appeler maintenant" + WhatsApp.
 * Visible uniquement sur mobile (< sm). Masquée sur desktop.
 */
export function MobileStickyCta() {
  return (
    <>
      {/* Barre sticky mobile : appel + WhatsApp */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-white/10 bg-[#0D0B4A] px-4 py-3 sm:hidden">
        {/* Bouton Contacter un expert */}
        <Link
          href={`tel:${CONTACT.phoneTel}`}
          className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-white px-4 py-3.5 font-sans text-base font-semibold text-[#0D0B4A] shadow-lg transition-transform active:scale-[0.97]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Contacter un expert
        </Link>

        {/* Bouton WhatsApp (mobile, dans la barre) */}
        <Link
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-lg transition-transform active:scale-[0.97]"
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
      </div>

      {/* Bouton WhatsApp flottant desktop */}
      <Link
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[5.5rem] right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 active:scale-[0.97] sm:flex"
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
