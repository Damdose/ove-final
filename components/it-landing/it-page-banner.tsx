"use client";

import Image from "next/image";
import Link from "next/link";
import { POLE_ORDER, POLE_THEMES, type PoleId } from "@/lib/brand-design-system";
import { INK, R_BTN, STICKY_POLE_NAV } from "@/lib/home-ui";
import { useCallback, useState } from "react";
import { IT_LOGO_SRC } from "./it-landing-data";

function poleHref(p: PoleId): string {
  return `/${p}`;
}

export function ItPageBanner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <header className={STICKY_POLE_NAV} role="banner">
      <div className="relative mx-auto flex min-h-16 w-full max-w-screen-xl items-center justify-between gap-3 px-[3%] sm:min-h-[4.5rem] sm:gap-4 sm:px-[5%]">
        <Link
          href="/"
          className="shrink-0 no-underline outline-none focus-visible:ring-2 focus-visible:ring-brand-ink/25 focus-visible:ring-offset-2"
          aria-label="Ovedex — accueil"
        >
          <Image
            width={182}
            height={48}
            loading="lazy"
            alt=""
            src={IT_LOGO_SRC}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <div className="hidden flex-wrap items-center justify-end gap-2 lg:flex lg:gap-3">
          {POLE_ORDER.map((poleId) => {
            const theme = POLE_THEMES[poleId];
            const active = poleId === "it";
            return (
              <Link
                key={poleId}
                href={poleHref(poleId)}
                className={
                  active
                    ? `${theme.navPillClass} ring-2 ring-purple-300/90 ring-offset-2 ring-offset-white`
                    : `${theme.navPillClass} opacity-95 hover:opacity-100`
                }
                aria-current={active ? "page" : undefined}
              >
                {theme.label}
              </Link>
            );
          })}
          <Link
            href="/"
            className={`flex h-10 items-center justify-center border border-black/10 bg-neutral-50 px-4 text-sm font-medium text-brand-ink no-underline transition hover:bg-neutral-100 ${R_BTN}`}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className={`flex h-10 items-center justify-center px-5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 ${R_BTN}`}
            style={{ backgroundColor: INK }}
          >
            Nous contacter
          </Link>
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-transparent text-brand-ink transition hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink/25 lg:hidden ${R_BTN}`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-brand-ink transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 rounded-full bg-brand-ink transition ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 rounded-full bg-brand-ink transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-40 bg-black/25 lg:hidden"
            onClick={closeMenu}
          />
          <div className="absolute left-0 right-0 top-full z-50 border-b border-black/[0.06] bg-white px-[5%] py-5 shadow-[0_10px_28px_-8px_rgba(13,11,74,0.16)] lg:hidden">
            <nav className="mx-auto flex max-w-screen-xl flex-col gap-3" aria-label="Menu mobile">
              {POLE_ORDER.map((poleId) => {
                const theme = POLE_THEMES[poleId];
                return (
                  <Link
                    key={poleId}
                    href={poleHref(poleId)}
                    className={`flex min-h-12 items-center justify-center text-sm font-medium no-underline ${R_BTN} ${theme.navPillClass}`}
                    onClick={closeMenu}
                  >
                    {theme.label}
                  </Link>
                );
              })}
              <Link
                href="/"
                className={`flex h-12 items-center justify-center border border-black/10 bg-neutral-50 text-sm font-medium text-brand-ink no-underline ${R_BTN}`}
                onClick={closeMenu}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className={`flex h-12 items-center justify-center text-sm font-semibold text-white no-underline ${R_BTN}`}
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
