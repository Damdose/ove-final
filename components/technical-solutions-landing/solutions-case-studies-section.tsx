import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "./data";

export function SolutionsCaseStudiesSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-sm:px-[3%] px-[5%]">
        <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
          <div className="max-lg:py-24 max-md:py-16 py-32">
            <div className="flex-col items-center [transform-style:preserve-3d]">
              <div className="overflow-x-hidden overflow-y-hidden">
                <div className="text-center justify-center items-center flex">
                  <div className="w-full max-w-screen-md">
                    <div>
                      <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                        Cas clients
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-brand-ink font-display text-5xl font-bold leading-tight mb-16">
                        Études de cas clients
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div
                    role="list"
                    className="max-sm:grid-cols-[1fr] gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] grid"
                  >
                    {CASE_STUDIES.map((item) => (
                      <div key={item.href} role="listitem">
                        <div className="bg-white flex-col items-stretch h-full min-h-[auto] flex p-5 rounded-[30px] border">
                          <Link
                            href={item.href}
                            className="text-purple-200 cursor-pointer font-light max-w-full flex-col justify-start h-full no-underline flex active:outline-0 hover:outline-0"
                          >
                            <div className="w-full overflow-x-hidden overflow-y-hidden">
                              <Image
                                src={item.imageSrc}
                                loading="lazy"
                                alt=""
                                width={960}
                                height={640}
                                className="inline-block aspect-[3/2] object-cover w-full h-full rounded-[30px]"
                              />
                            </div>
                            <div className="max-sm:px-5 flex-col flex-1 justify-between flex p-6">
                              <div>
                                <div className="flex mb-2">
                                  <div className="text-base leading-6 mb-2.5 font-display font-medium px-4 py-0.5 rounded-[100px] text-blue-400 bg-blue-200">
                                    Solutions
                                  </div>
                                </div>
                                <div className="mb-2">
                                  <h3 className="mt-5 max-md:text-xl text-brand-ink font-display text-2xl font-semibold leading-snug mb-8">
                                    {item.title}
                                  </h3>
                                </div>
                                <div className="text-brand-ink text-base font-light leading-6">{item.excerpt}</div>
                              </div>
                              <div className="text-brand-ink text-left text-base font-medium mt-10">
                                -&gt; &nbsp;Lire plus
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
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
