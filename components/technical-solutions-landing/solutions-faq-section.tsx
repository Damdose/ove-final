"use client";

import Link from "next/link";
import { useState } from "react";
import { FAQ_ITEMS } from "./data";

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      width="100%"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
        className="fill-current"
      />
    </svg>
  );
}

export function SolutionsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-brand-ink/10">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div>
              <div className="max-lg:gap-x-12 max-lg:grid-cols-[1fr_1fr] max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] max-sm:grid-cols-[1fr] gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[0.75fr_1fr] auto-cols-[1fr] [align-items:start] grid [transform-style:preserve-3d]">
                <div>
                  <div>
                    <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-brand-ink font-display text-5xl font-bold leading-tight mb-8">
                      Questions fréquentes
                    </h2>
                  </div>
                  <p className="max-md:text-base text-brand-ink font-sans text-base font-light leading-7 mb-5">
                    Consultez notre FAQ ou contactez-nous : notre équipe vous répond rapidement et vous accompagne selon
                    vos besoins.
                  </p>
                  <div>
                    <div className="gap-x-3 gap-y-3 flex-wrap items-center flex mt-6">
                      <Link
                        href="/contact"
                        className="text-white cursor-pointer py-2.5 bg-brand-ink justify-center items-center h-16 text-lg no-underline flex px-5 rounded-2xl active:outline-0 hover:outline-0"
                      >
                        Contacter un expert
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] [align-items:start] justify-items-stretch grid">
                    {FAQ_ITEMS.map((item, index) => {
                      const open = openIndex === index;
                      return (
                        <div key={item.question} className="bg-white flex-col justify-start items-stretch rounded-3xl border">
                          <button
                            type="button"
                            className="max-md:px-5 max-md:py-4 gap-x-6 gap-y-6 cursor-pointer justify-between items-center flex px-6 py-8 w-full text-left bg-transparent border-0"
                            aria-expanded={open}
                            onClick={() => setOpenIndex(open ? null : index)}
                          >
                            <div className="text-brand-ink font-display text-2xl font-semibold leading-9">
                              {item.question}
                            </div>
                            <div className="max-md:w-7 self-start w-8 flex">
                              <div className="flex-col justify-center items-center w-8 h-8 flex before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both">
                                <PlusIcon className="align-baseline inline h-full fill-none overflow-x-hidden overflow-y-hidden" />
                              </div>
                            </div>
                          </button>
                          <div
                            className={
                              open
                                ? "max-md:px-5 overflow-x-hidden overflow-y-hidden px-6 w-full"
                                : "max-md:px-5 overflow-x-hidden overflow-y-hidden px-6 w-full h-0"
                            }
                          >
                            <div>
                              <div className="w-full max-w-screen-md">
                                <p className="font-sans text-brand-ink text-base font-light leading-6 mb-5">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
