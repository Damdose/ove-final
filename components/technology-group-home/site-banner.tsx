"use client";

import Image from "next/image";
import Link from "next/link";
import { POLE_ORDER, POLE_THEMES } from "@/lib/brand-design-system";
import { INK, R_BTN, SHADOW_POP } from "@/lib/home-ui";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

export function SiteBanner() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  return (
    <header
      className="relative sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-md"
      role="banner"
    >
      <div className="relative mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between gap-3 px-[3%] sm:h-[4.5rem] sm:gap-4 sm:px-[5%]">
        <div className="hidden shrink-0 flex-wrap items-center gap-2 lg:flex">
          {POLE_ORDER.map((poleId) => {
            const theme = POLE_THEMES[poleId];
            return (
              <Link key={poleId} href={`/${poleId}`} className={theme.navPillClass}>
                {theme.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/"
          {...(isHome ? { "aria-current": "page" as const } : {})}
          className="shrink-0 no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#0D0B4A]/25 focus-visible:ring-offset-2"
          aria-label="Ovedex — accueil"
        >
          <Image
            width={220}
            height={48}
            loading="lazy"
            alt=""
            src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/693acc5ed127f3ac25749d17_logovedex%202.svg"
            className="h-10 w-auto sm:h-11 lg:h-12"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-3 lg:flex" aria-label="Actions">
            <Link
              href="/a-propos"
              className={`flex h-10 items-center justify-center ${R_BTN} border border-black/10 bg-neutral-50 px-4 text-sm font-medium text-[#0D0B4A] no-underline transition hover:bg-neutral-100`}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className={`flex h-10 items-center justify-center ${R_BTN} px-5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95`}
              style={{ backgroundColor: INK }}
            >
              Nous contacter
            </Link>
          </nav>

          <button
            type="button"
            className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 ${R_BTN} border border-transparent text-[#0D0B4A] transition hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D0B4A]/25 lg:hidden`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-[#0D0B4A] transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-[#0D0B4A] transition ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-[#0D0B4A] transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-40 bg-black/25 lg:hidden"
            onClick={closeMenu}
          />
          <div
            className={`absolute left-0 right-0 top-full z-50 border-b border-black/[0.06] bg-white px-[5%] py-5 ${SHADOW_POP} lg:hidden`}
          >
            <nav className="mx-auto flex max-w-screen-xl flex-col gap-3" aria-label="Menu mobile">
              <p className="px-1 text-xs font-semibold uppercase tracking-widest text-black/40">
                Nos pôles
              </p>
              <div className="flex flex-wrap gap-2">
                {POLE_ORDER.map((poleId) => {
                  const theme = POLE_THEMES[poleId];
                  return (
                    <Link
                      key={poleId}
                      href={`/${poleId}`}
                      className={theme.navPillClass}
                      onClick={closeMenu}
                    >
                      {theme.label}
                    </Link>
                  );
                })}
              </div>
              <div className="my-1 border-t border-black/[0.06]" />
              <Link
                href="/a-propos"
                className={`flex h-12 items-center justify-center ${R_BTN} border border-black/10 bg-neutral-50 text-sm font-medium text-[#0D0B4A] no-underline`}
                onClick={closeMenu}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className={`flex h-12 items-center justify-center ${R_BTN} text-sm font-semibold text-white no-underline`}
                style={{ backgroundColor: INK }}
                onClick={closeMenu}
              >
                Nous contacter
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
