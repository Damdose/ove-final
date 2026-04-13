"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BD_CARD,
  BG_INK,
  PAGE_X,
  R_BTN,
  R_CARD,
  RING_INK_FOCUS,
  SHADOW_POP,
  SHADOW_SURFACE,
  SHADOW_SURFACE_HOVER,
  STICKY_POLE_NAV,
  TEXT_INK,
} from "@/lib/home-ui";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { ServiceMegaTabChevron } from "@/components/service-mega-tab-chevron";
import { DIGITAL_LOGO_SRC, SERVICE_NAV_TABS } from "./digital-services-landing-content";

const PHONE_ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273e73fd44bd92aabd5175_Icon%20(22).svg";

const EMAIL_ICON_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273e7381c78eab45715fa3_Icon%20(24).svg";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 fill-none ${className ?? ""}`}
      aria-hidden
    >
      <path
        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
        className="fill-current"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 fill-none stroke-current stroke-2 ${className ?? ""}`}
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navItem =
  `inline-flex h-11 items-center justify-center rounded-lg px-3 text-sm font-medium no-underline transition-colors ${TEXT_INK} hover:bg-black/[0.05] active:bg-black/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS}`;

const triggerBase =
  `inline-flex h-11 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border-0 bg-transparent px-3 text-left text-sm font-medium transition-colors ${TEXT_INK} hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS} max-lg:justify-between lg:w-auto lg:justify-center`;

const triggerOpen = "bg-black/[0.06]";

const RESOURCE_LINKS = [
  {
    href: "/digital/newsroom",
    title: "Newsroom",
    description: "Actualités, analyses et annonces du pôle Digital.",
  },
  {
    href: "/digital/cas-clients",
    title: "Cas clients",
    description: "Projets livrés, contexte et résultats concrets.",
  },
  {
    href: "/digital/faq",
    title: "FAQ",
    description: "Réponses rapides sur nos services et modalités.",
  },
] as const;

const resourceRowClass = `group flex w-full items-start gap-3 rounded-xl border border-transparent px-3 py-3 text-left no-underline transition-all duration-200 hover:border-black/[0.08] hover:bg-slate-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS} ${TEXT_INK}`;

export type DigitalTopNavigationProps = {
  /** À activer uniquement sur `/digital` : `aria-current` sur le logo pôle. */
  logoAriaCurrent?: boolean;
};

export function DigitalTopNavigation({ logoAriaCurrent = false }: DigitalTopNavigationProps) {
  const baseId = useId();
  const servicesToggleId = `w-dropdown-toggle-0-${baseId}`;
  const servicesListId = `w-dropdown-list-0-${baseId}`;
  const resourcesToggleId = `w-dropdown-toggle-1-${baseId}`;
  const resourcesListId = `w-dropdown-list-1-${baseId}`;

  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRootRef = useRef<HTMLDivElement>(null);
  const resourcesRootRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const closeAll = useCallback(() => {
    setServicesOpen(false);
    setResourcesOpen(false);
    setMobileOpen(false);
  }, []);

  const closeDropdowns = useCallback(() => {
    setServicesOpen(false);
    setResourcesOpen(false);
  }, []);

  useEffect(() => {
    if (!servicesOpen && !resourcesOpen && !mobileOpen) return;
    const onDocPointer = (e: PointerEvent) => {
      const node = e.target as Node;
      if (mobileOpen) {
        if (mobileNavRef.current?.contains(node) || burgerRef.current?.contains(node)) return;
        closeAll();
        return;
      }
      if (servicesRootRef.current?.contains(node) || resourcesRootRef.current?.contains(node)) return;
      closeDropdowns();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("pointerdown", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen, resourcesOpen, mobileOpen, closeAll, closeDropdowns]);

  const tabIds = useMemo(
    () => SERVICE_NAV_TABS.map((_, i) => ({ tab: `w-tabs-0-data-w-tab-${i}-${baseId}` })),
    [baseId],
  );

  const servicesMega = (
    <div
      className={`border-black/[0.06] bg-white max-lg:mt-2 max-lg:overflow-hidden max-lg:rounded-2xl max-lg:border max-lg:shadow-lg lg:fixed lg:inset-x-0 lg:top-[4.5rem] lg:z-[41] lg:max-h-[min(85vh,calc(100dvh-5rem))] lg:overflow-y-auto lg:border-b lg:shadow-[0_24px_48px_-12px_rgba(13,11,74,0.14)] ${servicesOpen ? "max-lg:block" : "max-lg:hidden"} ${servicesOpen ? "lg:block" : "lg:hidden"}`}
      id={servicesListId}
      role="navigation"
      aria-labelledby={servicesToggleId}
    >
        <div className={`${PAGE_X} py-6 sm:py-8 lg:py-10`}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid w-full grid-cols-1 gap-10 gap-x-11 lg:grid-cols-[2.5fr_1fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-emerald-400 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Nos services
              </div>
              <div className="flex flex-col gap-0 md:flex-row md:gap-0">
                <div
                  className="flex min-w-0 shrink-0 flex-col border-black/[0.06] pb-2 md:mr-6 md:min-w-[16rem] md:border-r md:pb-0 md:pr-5 lg:min-w-[18rem] lg:pr-6"
                  role="tablist"
                  aria-label="Catégories de services"
                >
                  {SERVICE_NAV_TABS.map((tab, index) => {
                    const selected = index === activeTabIndex;
                    return (
                      <Link
                        key={tab.id}
                        id={index === 0 ? "tabelement" : tabIds[index]?.tab}
                        className={`mb-1 flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-base no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS} ${selected ? `bg-black/[0.07] font-semibold ring-1 ring-[#0D0B4A]/12 ${TEXT_INK}` : `font-medium ${TEXT_INK} hover:bg-black/[0.04]`}`}
                        href={`#${tab.id}`}
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={selected}
                        tabIndex={selected ? 0 : -1}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTabIndex(index);
                        }}
                      >
                        <span className="leading-snug">
                          <span className={selected ? "font-semibold" : "font-medium"}>
                            {tab.labelLines[0]}
                          </span>
                          <br />
                          <span className={selected ? "font-semibold" : "font-medium"}>
                            {tab.labelLines[1]}
                          </span>
                        </span>
                        <ServiceMegaTabChevron className="hidden text-[#0D0B4A]/45 sm:inline-block" />
                      </Link>
                    );
                  })}
                </div>
                <div className={`min-w-0 flex-1 md:pl-5 lg:pl-6`}>
                  {SERVICE_NAV_TABS.map((tab, index) => {
                    const panelTitle = `${tab.labelLines[0]} ${tab.labelLines[1]}`;
                    const serviceCardClass = `group flex min-h-[3.5rem] items-center justify-between gap-3 rounded-xl border border-black/[0.08] bg-white px-4 py-3.5 text-left no-underline transition-all duration-200 ${SHADOW_SURFACE} ${SHADOW_SURFACE_HOVER} hover:border-[#0D0B4A]/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS}`;
                    return (
                      <div
                        key={tab.id}
                        className={index === activeTabIndex ? "block" : "hidden"}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={index === 0 ? "tabelement" : tabIds[index]?.tab}
                      >
                        <div className={`${BD_CARD} ${R_CARD} bg-gradient-to-br from-white to-slate-50/90 p-4 sm:p-5`}>
                          <p className={`mb-1 font-display text-lg font-semibold tracking-tight sm:text-xl ${TEXT_INK}`}>
                            {panelTitle}
                          </p>
                          <p className="mb-4 text-sm leading-relaxed text-slate-600">
                            Accédez à la fiche détaillée de chaque prestation.
                          </p>
                          <ul className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3" role="list">
                            {tab.links.map((link) => (
                              <li key={link.href} role="none">
                                <Link href={link.href} className={serviceCardClass} onClick={closeAll}>
                                  <span className={`text-sm font-semibold leading-snug sm:text-[0.9375rem] ${TEXT_INK}`}>
                                    {link.label}
                                  </span>
                                  <ArrowRightIcon className="text-[#0D0B4A]/35 transition group-hover:translate-x-0.5 group-hover:text-[#0D0B4A]/70" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className={`mb-6 inline-block rounded-full ${BG_INK} px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white`}>
                Nous contacter
              </div>
              <div className="flex flex-col gap-3 font-display">
                <a
                  href="tel:+33651758513"
                  className={`flex items-center justify-between gap-3 rounded-2xl border border-black/[0.08] bg-white px-4 py-3 no-underline transition-colors hover:border-[#0D0B4A]/15 hover:bg-slate-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS}`}
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Image src={PHONE_ICON_SRC} loading="lazy" alt="" width={22} height={22} />
                    <span className={`text-sm font-semibold ${TEXT_INK}`}>Téléphone</span>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-slate-600">06 51 75 85 13</span>
                </a>
                <a
                  href="mailto:contact@ovedex.com"
                  className={`flex items-center justify-between gap-3 rounded-2xl border border-black/[0.08] bg-white px-4 py-3 no-underline transition-colors hover:border-[#0D0B4A]/15 hover:bg-slate-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS}`}
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Image src={EMAIL_ICON_SRC} loading="lazy" alt="" width={22} height={22} />
                    <span className={`text-sm font-semibold ${TEXT_INK}`}>Email</span>
                  </div>
                  <span className="min-w-0 truncate text-sm font-medium text-slate-600">contact@ovedex.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`${STICKY_POLE_NAV} relative z-50 font-sans text-base font-light`}
      role="banner"
    >
      {servicesOpen ? (
        <button
          type="button"
          aria-label="Fermer le menu Services"
          className="fixed inset-0 z-40 hidden cursor-default bg-[#0D0B4A]/20 lg:block"
          tabIndex={-1}
          onClick={closeDropdowns}
        />
      ) : null}

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/25 lg:hidden"
          aria-hidden
          onClick={closeAll}
        />
      ) : null}

      <div
        className={`relative z-50 mx-auto flex min-h-16 w-full max-w-screen-xl items-center justify-between gap-4 sm:min-h-[4.5rem] ${PAGE_X}`}
      >
        <Link
          href="/digital"
          {...(logoAriaCurrent ? { "aria-current": "page" as const } : {})}
          className="relative shrink-0 text-zinc-800 no-underline transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <Image
            width={182}
            height={48}
            loading="lazy"
            alt="ovedex"
            src={DIGITAL_LOGO_SRC}
            className="h-auto w-[148px] sm:w-[182px]"
          />
        </Link>

        <nav
          ref={mobileNavRef}
          id="digital-nav-mobile"
          role="navigation"
          aria-label="Principal"
          className={`max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-full max-lg:z-10 max-lg:max-h-[min(88vh,calc(100dvh-4rem))] max-lg:overflow-y-auto max-lg:border-b max-lg:border-black/[0.06] max-lg:bg-white max-lg:px-[5%] max-lg:pb-10 max-lg:pt-5 max-lg:transition-all max-lg:duration-200 ${
            mobileOpen ? "max-lg:flex" : "max-lg:hidden"
          } max-lg:flex-col lg:flex lg:items-center lg:gap-1`}
        >
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
            <Link href="/" className={`${navItem} max-lg:w-full max-lg:px-4`} onClick={closeAll}>
              ADN
            </Link>

            <div ref={servicesRootRef} className="relative z-[1] w-full lg:w-auto">
              <button
                type="button"
                id={servicesToggleId}
                className={`${triggerBase} ${servicesOpen ? triggerOpen : ""}`}
                aria-controls={servicesListId}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => {
                  setServicesOpen((o) => !o);
                  setResourcesOpen(false);
                }}
              >
                <span>Services</span>
                <span className={`flex text-current transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                  <ChevronDownIcon />
                </span>
              </button>
              {servicesMega}
            </div>

            <div ref={resourcesRootRef} className="relative z-[1] w-full lg:w-auto">
              <button
                type="button"
                id={resourcesToggleId}
                className={`${triggerBase} ${resourcesOpen ? triggerOpen : ""}`}
                aria-controls={resourcesListId}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                onClick={() => {
                  setResourcesOpen((o) => !o);
                  setServicesOpen(false);
                }}
              >
                <span>Ressources</span>
                <span className={`flex text-current transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}>
                  <ChevronDownIcon />
                </span>
              </button>
              <div
                className={`left-0 right-0 top-full z-[42] max-lg:mt-2 lg:absolute lg:right-0 lg:mt-2 lg:min-w-[min(100vw-2rem,22rem)] lg:max-w-[min(100vw-2rem,26rem)] ${resourcesOpen ? "block" : "hidden"}`}
                id={resourcesListId}
                role="navigation"
                aria-labelledby={resourcesToggleId}
              >
                <div className={`overflow-hidden bg-white ${R_CARD} ${BD_CARD} ${SHADOW_POP}`}>
                  <div className="border-b border-black/[0.06] bg-gradient-to-br from-slate-50/80 to-white px-4 py-3">
                    <p className={`m-0 font-display text-xs font-semibold uppercase tracking-[0.12em] text-[#0D0B4A]/55`}>
                      Ressources
                    </p>
                    <p className={`m-0 mt-1 text-sm leading-snug text-slate-600`}>
                      Contenus utiles pour comprendre notre approche et nos réalisations.
                    </p>
                  </div>
                  <ul className="m-0 flex list-none flex-col gap-0.5 p-2" role="list">
                    {RESOURCE_LINKS.map((item) => (
                      <li key={item.href} role="none">
                        <Link href={item.href} className={resourceRowClass} onClick={closeAll}>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-center justify-between gap-2">
                              <span className="text-sm font-semibold leading-tight">{item.title}</span>
                              <ArrowRightIcon className="shrink-0 text-[#0D0B4A]/30 transition group-hover:translate-x-0.5 group-hover:text-[#0D0B4A]/60" />
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed text-slate-500">{item.description}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/maintenance-digital"
              className={`${navItem} max-lg:w-full max-lg:px-4`}
              onClick={closeAll}
            >
              Maintenance
            </Link>
            <Link
              href="/contact"
              className={`mt-1 flex h-11 items-center justify-center px-5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${RING_INK_FOCUS} ${BG_INK} ${R_BTN} max-lg:mt-3 max-lg:w-full lg:ml-2`}
              onClick={closeAll}
            >
              Contactez-nous
            </Link>
          </div>
        </nav>

        <button
          ref={burgerRef}
          type="button"
          className="relative -mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#0D0B4A] transition-colors hover:bg-black/[0.05] [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls="digital-nav-mobile"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 rounded-full bg-[#0D0B4A] transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-[#0D0B4A] transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-[#0D0B4A] transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
    </header>
  );
}
