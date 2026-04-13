"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceMegaTabChevron } from "@/components/service-mega-tab-chevron";
import { STICKY_POLE_NAV } from "@/lib/home-ui";
import { useCallback, useId, useState } from "react";
import { SERVICE_MEGA_TABS } from "./data";

const LOGO_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c76c50366b1991a7c9aa9_logovedex%201%20(1).svg";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
        className="fill-current"
      />
    </svg>
  );
}

export function SolutionsPageBanner() {
  const baseId = useId();
  const servicesListId = `w-dropdown-list-0-${baseId}`;
  const servicesToggleId = `w-dropdown-toggle-0-${baseId}`;
  const resourcesListId = `w-dropdown-list-1-${baseId}`;
  const resourcesToggleId = `w-dropdown-toggle-1-${baseId}`;

  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = useCallback(() => {
    setServicesOpen(false);
    setResourcesOpen(false);
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`${STICKY_POLE_NAV} max-sm:px-[3%] relative z-[1] flex min-h-16 items-center bg-white px-[5%] font-sans text-base font-light text-brand-ink before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both sm:min-h-[4.5rem]`}
      role="banner"
    >
      <div className="justify-between items-center w-full max-w-screen-xl h-full flex mx-auto">
        <Link
          href="/"
          className="cursor-pointer font-light float-left text-zinc-800 no-underline relative active:outline-0 hover:outline-0"
          aria-label="home"
        >
          <Image width={182} height={48} loading="lazy" alt="" src={LOGO_SRC} className="inline-block h-auto w-[182px]" />
        </Link>
        <nav
          role="navigation"
          className={
            "max-lg:[-webkit-text-fill-color:inherit] max-lg:[border-bottom-style:solid] max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-full max-lg:z-50 max-lg:overflow-x-auto max-lg:overflow-y-auto max-lg:pt-4 max-lg:px-[5%] max-lg:border-b float-right items-center flex max-md:pb-24 max-sm:bg-[linear-gradient(#fff,#fff)] max-sm:pt-0 max-sm:pb-8 max-lg:bg-white max-lg:transition-all max-lg:duration-500 max-lg:pb-28 max-lg:border-b-slate-800/5 " +
            (mobileOpen ? "max-lg:flex max-lg:flex-col" : "max-lg:hidden") +
            " lg:flex"
          }
        >
          <div className="max-lg:flex-col max-lg:grid-rows-[auto_auto] max-lg:grid-cols-[1fr] max-lg:items-stretch max-lg:ml-0 max-lg:mt-6 gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center flex ml-4">
            <Link
              href="/"
              className="max-sm:justify-start cursor-pointer no-underline px-4 py-2.5 text-brand-ink [border-style:#ff4320] justify-center items-center h-12 font-normal flex rounded-md border bg-brand-ink/4 active:outline-0 hover:outline-0"
            >
              ADN
            </Link>
            <div className="max-sm:w-full text-left z-[900] mx-auto">
              <div
                className="max-lg:w-full max-sm:justify-between max-sm:items-stretch align-top text-left whitespace-nowrap select-none cursor-pointer relative mx-auto text-sm font-bold text-white duration-200 flex rounded-md bg-brand-ink/4 pl-5 pr-3 py-3 focus:outline-0 hover:text-blue-600"
                id={servicesToggleId}
                aria-controls={servicesListId}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                role="button"
                tabIndex={0}
                onClick={() => setServicesOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setServicesOpen((v) => !v);
                  }
                }}
              >
                <div className="text-brand-ink text-base font-normal">Services</div>
                <div className="text-brand-ink justify-center items-center w-6 h-6 flex p-0.5 before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both">
                  <ChevronDownIcon className="align-baseline inline h-full fill-none overflow-x-hidden overflow-y-hidden" />
                </div>
              </div>
              <nav
                className={`bg-zinc-300 ${servicesOpen ? "block" : "hidden"} absolute min-w-full`}
                id={servicesListId}
                aria-labelledby={servicesToggleId}
              >
                <div className="max-lg:shadow-none max-sm:px-[0%] max-sm:py-0 bg-white overflow-x-hidden overflow-y-hidden shadow-[33px_115px_100px_#0414341a] pt-10 pb-12 px-[3%]">
                  <div className="max-lg:py-5 max-sm:pb-0 bg-white max-w-screen-xl flex mx-auto">
                    <div className="max-lg:grid-cols-[1fr] auto-cols-[1fr] grid gap-x-11 gap-y-0 grid-rows-[auto] grid-cols-[2.5fr_1fr] w-full">
                      <div>
                        <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400 max-sm:hidden mb-8">
                          Nos services
                        </div>
                        <div className="max-lg:mb-10 max-md:flex-col max-sm:mb-0 relative flex before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both">
                          <div
                            className="max-lg:min-w-64 max-md:flex-wrap max-md:mr-0 max-md:mb-8 max-sm:gap-x-1 max-sm:gap-y-1 max-sm:mb-5 relative flex-col min-w-80 flex mr-8"
                            role="tablist"
                          >
                            {SERVICE_MEGA_TABS.map((tab, index) => {
                              const selected = index === activeTab;
                              return (
                                <Link
                                  key={tab.id}
                                  id={tab.tabId}
                                  href={`#${tab.paneId}`}
                                  role="tab"
                                  aria-controls={tab.paneId}
                                  aria-selected={selected}
                                  tabIndex={selected ? 0 : -1}
                                  className={
                                    selected
                                      ? "max-sm:block max-md:mb-0 max-md:py-2.5 max-w-full align-top text-left cursor-pointer no-underline relative pr-8 text-brand-ink justify-between text-base duration-200 flex mb-1 pl-4 py-3.5 rounded-xl active:outline-0 hover:outline-0 focus:outline-0 font-semibold bg-brand-ink/4"
                                      : "max-sm:block max-md:mb-0 max-md:py-2.5 max-w-full align-top text-left cursor-pointer no-underline relative pr-8 text-brand-ink bg-white justify-between text-base font-bold duration-200 flex mb-1 pl-4 py-3.5 rounded-xl active:outline-0 hover:outline-0 focus:outline-0 hover:bg-brand-ink/4"
                                  }
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(index);
                                  }}
                                >
                                  <div>{tab.labelHtml}</div>
                                  <ServiceMegaTabChevron className="inline-block shrink-0 text-brand-ink/45" />
                                </Link>
                              );
                            })}
                          </div>
                          <div className="max-lg:[border-left-style:none] max-lg:[border-right-style:none] relative overflow-x-hidden overflow-y-hidden [border-left-style:solid] [border-right-style:solid] w-full border-x border-x-slate-900/10">
                            {SERVICE_MEGA_TABS.map((tab, index) => (
                              <div
                                key={tab.paneId}
                                className={`max-md:px-0 relative h-full px-8 ${index === activeTab ? "" : "hidden"}`}
                                id={tab.paneId}
                                role="tabpanel"
                                aria-labelledby={tab.tabId}
                              >
                                <div>
                                  <div
                                    role="list"
                                    className="gap-x-1 gap-y-1 flex-col grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] flex"
                                  >
                                    {tab.links.map((link) => (
                                      <div key={link.href} role="listitem">
                                        <Link
                                          href={link.href}
                                          className="cursor-pointer max-sm:mb-0 max-sm:py-2.5 max-w-full inline-block text-brand-ink text-sm font-bold no-underline mb-1 px-2.5 py-3.5 active:outline-0 hover:outline-0 hover:text-brand-ink hover:rounded-lg hover:bg-brand-ink/4"
                                          tabIndex={0}
                                          onClick={closeAll}
                                        >
                                          <div className="text-base font-medium">{link.label}</div>
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="max-sm:hidden">
                        <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-brand-ink mb-8">
                          NOUS CONTACTER
                        </div>
                        <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] font-display text-lg font-bold leading-6 flex mt-5 mb-16 py-2 max-sm:mb-0 flex-col">
                          <div className="max-sm:gap-x-2 max-sm:gap-y-2 max-sm:flex-col max-sm:py-4 bg-white justify-between items-center flex pr-5 py-2.5 rounded-[48px]">
                            <div className="gap-x-2.5 gap-y-2.5 justify-start items-center flex">
                              <Image
                                src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273e73fd44bd92aabd5175_Icon%20(22).svg"
                                loading="lazy"
                                alt=""
                                width={24}
                                height={24}
                                className="inline-block"
                              />
                              <div className="text-brand-ink">Téléphone</div>
                            </div>
                            <div className="max-sm:text-base font-light text-slate-800/50">06 51 75 85 13</div>
                          </div>
                          <div className="max-sm:gap-x-2 max-sm:gap-y-2 max-sm:flex-col max-sm:py-4 bg-white justify-between items-center flex pr-5 py-2.5 rounded-[48px]">
                            <div className="gap-x-2.5 gap-y-2.5 justify-start items-center flex">
                              <Image
                                src="https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273e7381c78eab45715fa3_Icon%20(24).svg"
                                loading="lazy"
                                alt=""
                                width={24}
                                height={24}
                                className="inline-block"
                              />
                              <div className="text-brand-ink">Email</div>
                            </div>
                            <div className="max-sm:text-base font-light text-slate-800/50">contact@ovedex.com</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="text-left z-[900] inline-block relative">
              <div
                className="max-lg:justify-between max-lg:items-center align-top text-left select-none cursor-pointer relative mx-auto gap-x-1 gap-y-1 text-brand-ink whitespace-nowrap text-base font-normal leading-normal transition-colors duration-300 ease-in-out flex pl-4 pr-3 py-3 rounded-md bg-brand-ink/4 focus:outline-0 hover:text-black hover:bg-neutral-100"
                id={resourcesToggleId}
                aria-controls={resourcesListId}
                aria-haspopup="menu"
                aria-expanded={resourcesOpen}
                role="button"
                tabIndex={0}
                onClick={() => setResourcesOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setResourcesOpen((v) => !v);
                  }
                }}
              >
                <div>Ressources</div>
                <div className="text-brand-ink justify-center items-center w-6 h-6 flex p-0.5 before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both">
                  <ChevronDownIcon className="align-baseline inline h-full fill-none overflow-x-hidden overflow-y-hidden" />
                </div>
              </div>
              <nav
                className={`min-w-full ${resourcesOpen ? "block" : "hidden"} max-lg:static absolute pt-4 inset-x-[0%]`}
                id={resourcesListId}
                aria-labelledby={resourcesToggleId}
              >
                <div className="max-lg:px-[0%] max-lg:py-0 gap-x-2.5 gap-y-2.5 bg-white flex-col flex px-[5%] py-2.5 rounded-xl">
                  <div className="z-[1] w-full max-w-screen-xl relative mx-auto">
                    <div className="max-lg:grid-cols-[1fr] gap-x-4 gap-y-4 flex-wrap grid-rows-[auto] grid-cols-[repeat(auto-fit,minmax(600px,1fr))] auto-cols-[1fr] grid overflow-x-hidden overflow-y-hidden">
                      <div className="gap-x-1.5 gap-y-1.5 flex-col grid-rows-[auto_auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] w-full min-w-full max-w-full flex">
                        <Link
                          href="/actualites"
                          className="text-purple-200 cursor-pointer font-light gap-x-3 gap-y-3 whitespace-normal max-w-full no-underline transition-colors duration-300 flex pl-2 pr-6 py-2 rounded-lg active:outline-0 hover:outline-0 hover:bg-brand-ink/4"
                          tabIndex={0}
                          onClick={closeAll}
                        >
                          <div className="gap-x-1 gap-y-1 flex-col flex">
                            <div className="text-brand-ink font-medium">Newsrooom</div>
                          </div>
                        </Link>
                        <Link
                          href="/case-studies"
                          className="text-purple-200 cursor-pointer font-light gap-x-3 gap-y-3 whitespace-normal max-w-full no-underline transition-colors duration-300 flex pl-2 pr-6 py-2 rounded-lg active:outline-0 hover:outline-0 hover:bg-brand-ink/4"
                          tabIndex={0}
                          onClick={closeAll}
                        >
                          <div className="gap-x-1 gap-y-1 flex-col flex">
                            <div className="text-brand-ink font-medium">Cas clients</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <Link
              href="/maintenance-solutions"
              className="max-sm:justify-start cursor-pointer no-underline px-4 py-2.5 text-brand-ink [border-style:#ff4320] justify-center items-center h-12 font-normal flex rounded-md border bg-brand-ink/4 active:outline-0 hover:outline-0"
            >
              Maintenance
            </Link>
            <Link
              href="/contact"
              className="flex h-12 cursor-pointer items-center justify-center rounded-xl bg-brand-ink px-5 text-lg font-medium text-white no-underline transition-opacity hover:opacity-95 active:outline-0"
            >
              Contactez-nous
            </Link>
          </div>
        </nav>
        <div
          className="float-right cursor-pointer [-webkit-tap-highlight-color:#0000] [tap-highlight-color:#0000] select-none text-2xl hidden relative focus:outline-0 max-lg:block"
          aria-label="menu"
          role="button"
          tabIndex={0}
          aria-controls="w-nav-overlay-0"
          aria-haspopup="menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setMobileOpen((v) => !v);
            }
          }}
        >
          <div className="max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:w-12 max-lg:h-12 max-lg:flex max-lg:-mr-2">
            <div className="max-lg:h-0.5 max-lg:w-6 max-lg:rounded-full max-lg:bg-brand-ink" />
            <div className="max-lg:my-1.5 flex max-lg:h-0.5 max-lg:w-6 max-lg:items-center max-lg:justify-center max-lg:rounded-full max-lg:bg-brand-ink">
              <div className="max-lg:h-0 max-lg:w-1" />
            </div>
            <div className="max-lg:h-0.5 max-lg:w-6 max-lg:rounded-full max-lg:bg-brand-ink" />
          </div>
        </div>
      </div>
      <div
        className={`w-full ${mobileOpen ? "block" : "hidden"} absolute overflow-x-hidden overflow-y-hidden top-full inset-x-0`}
        id="w-nav-overlay-0"
      />
    </header>
  );
}
