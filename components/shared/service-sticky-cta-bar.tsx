"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { R_BTN, BG_INK } from "@/lib/home-ui";

/**
 * Sticky bottom CTA bar for service landing pages (mobile only).
 * Appears after scrolling 600px and hides when back at top.
 * Sits above the WhatsApp floating button.
 */
export function ServiceStickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[#0D0B4A]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-lg transition-transform duration-300 sm:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
      role="complementary"
      aria-label="Actions rapides"
    >
      <div className="flex items-center gap-3">
        <Link
          href="/contact"
          className={`flex h-11 flex-1 items-center justify-center ${R_BTN} bg-white px-4 text-sm font-semibold text-[#0D0B4A] no-underline shadow-[0_2px_8px_rgba(255,255,255,0.15)] transition-colors hover:bg-white/95`}
        >
          Contacter un expert
        </Link>
        <Link
          href="/contact?raison=demo"
          className={`flex h-11 items-center justify-center ${R_BTN} border border-white/25 px-4 text-sm font-semibold text-white no-underline transition-colors hover:bg-white/10`}
        >
          Démo
        </Link>
      </div>
    </div>
  );
}
