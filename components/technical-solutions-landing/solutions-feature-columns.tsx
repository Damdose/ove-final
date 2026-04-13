import Image from "next/image";
import Link from "next/link";
import { GTB_BULLETS } from "./data";

const ARROW_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e2e4071875a40859f23f6_arrow_forward_24dp_FFF_FILL0_wght400_GRAD0_opsz24%20(1).svg";

const BG_SURETE =
  "url('https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c759b92cbf0e373d9aea7/_Rectangle%205959%20/(9/').avif')";
const BG_RESEAU =
  "url('https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927305bf82e4c40a8984015/_Rectangle%205959%20/(1/').avif')";
const BG_GTB =
  "url('https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692c58203f71462c74b79fbd/_Rectangle%205959%20/(7/').avif')";

const IMG_SURETE_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e41f6589353eb72890f1c_unnamed%20(8).jpg";

const PHOTO_RESEAU =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/6927308251d553db88a7ad52_photo%20(2).avif";

const IMG_GTB_SRC =
  "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/692e4242d89d4813ba20ef9d_unnamed%20(9).jpg";

const STATS = [
  { id: "w-node-c71c08cd-8ad6-6159-4255-24ab4d81db97-214350f8", value: "+300", text: "systèmes de sûreté déployés" },
  { id: "w-node-_7c6c5235-2a2a-380b-2e0c-33936ee29097-214350f8", value: "96%", text: "de satisfaction client" },
  { id: "w-node-_46742903-4288-b53b-6e75-aa8e52edba65-214350f8", value: "+50", text: "sites multiservices gérés en continu" },
];

export function SolutionsFeatureColumns() {
  return (
    <>
      <section
        className="max-sm:bg-[0_0] bg-[100%] bg-no-repeat max-sm:bg-none max-sm:bg-repeat bg-no-repeat"
        style={{ backgroundImage: BG_SURETE }}
      >
        <div className="max-sm:px-[3%] px-[5%]">
          <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
            <div className="max-lg:py-24 max-md:py-16 py-32">
              <div>
                <div className="max-lg:gap-x-12 max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
                  <div>
                    <div>
                      <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                        Solutions
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display text-5xl font-bold leading-tight text-white mb-8">
                        Sûreté électronique & sécurité des sites
                      </h2>
                    </div>
                    <div>
                      <p className="font-sans font-light max-sm:mb-5 text-white text-lg leading-8 mb-10">
                        Nous sécurisons vos bâtiments avec des solutions fiables et évolutives : vidéosurveillance HD,
                        contrôle d’accès centralisé, systèmes d’intrusion et supervision unifiée.
                      </p>
                    </div>
                    <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] font-display text-lg font-bold leading-6 flex mt-5 mb-16 py-2 flex-col">
                      {STATS.map((row) => (
                        <div
                          key={row.id}
                          id={row.id}
                          className="gap-x-4 gap-y-4 justify-start items-center w-full flex [align-self:start]"
                        >
                          <div className="flex-none justify-center self-start items-start flex">
                            <div className="text-white text-3xl leading-10">{row.value}</div>
                          </div>
                          <div className="justify-start items-center flex">
                            <p className="font-sans font-light text-white">{row.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="gap-x-3 gap-y-3 flex-wrap items-center flex mt-6">
                        <Link
                          href="/contact"
                          className="cursor-pointer py-2.5 justify-center items-center h-16 text-lg no-underline flex px-5 rounded-2xl active:outline-0 hover:outline-0 text-brand-ink bg-white"
                        >
                          Contacter un expert
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-c4b2b98c-d316-2557-8fdf-9dd2b92c7aa5-214350f8"
                    className="object-contain rounded-3xl max-sm:order-first [transform-style:preserve-3d]"
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      src={IMG_SURETE_SRC}
                      alt=""
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="inline-block aspect-[1] object-cover w-full h-full rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-sm:bg-none max-sm:bg-repeat bg-gray-50 bg-no-repeat"
        style={{ backgroundImage: BG_RESEAU }}
      >
        <div className="max-sm:px-[3%] px-[5%]">
          <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
            <div className="max-lg:py-24 max-md:py-16 py-32">
              <div>
                <div className="max-lg:gap-x-12 max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] gap-x-32 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center justify-items-stretch grid">
                  <div className="[transform-style:preserve-3d]">
                    <Image
                      loading="lazy"
                      src={PHOTO_RESEAU}
                      alt=""
                      width={960}
                      height={960}
                      className="inline-block w-full h-full rounded-3xl object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                        Solutions
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-brand-ink font-display text-5xl font-bold leading-tight mb-8">
                        Réseaux, communication & infrastructures IoT
                      </h2>
                    </div>
                    <div>
                      <p className="max-md:text-base text-brand-ink font-sans text-base font-light leading-7 mb-5">
                        Nous concevons des infrastructures réseau performantes : Wi-Fi pro, interphonie, réseaux IP
                        sécurisés, capteurs IoT, supervision et automatisation. Objectif : performance, disponibilité
                        et simplicité d’exploitation.
                      </p>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-sm:bg-[0_0] bg-[100%] bg-no-repeat max-sm:bg-none max-sm:bg-repeat bg-no-repeat"
        style={{ backgroundImage: BG_GTB }}
      >
        <div className="max-sm:px-[3%] px-[5%]">
          <div className="max-sm:max-w-full w-full max-w-screen-xl mx-auto">
            <div className="max-lg:py-24 max-md:py-16 py-32">
              <div>
                <div className="max-lg:gap-x-12 max-lg:min-h-[auto] max-md:gap-y-12 max-md:grid-cols-[1fr] gap-x-32 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center justify-items-stretch grid">
                  <div>
                    <div>
                      <div className="justify-center items-center inline-block text-white tracking-[1px] uppercase font-sans text-xs font-medium leading-4 px-3 py-1 rounded-[100px] bg-blue-400">
                        Solutions
                      </div>
                    </div>
                    <div>
                      <h2 className="mt-5 max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:mb-0 text-brand-ink font-display text-5xl font-bold leading-tight mb-8">
                        GTB, audiovisuel & solutions techniques avancées
                      </h2>
                    </div>
                    <div>
                      <p className="max-md:text-base text-brand-ink font-sans text-base font-light leading-7 mb-5">
                        Nous intégrons des systèmes intelligents pour optimiser le confort, la gestion énergétique et les
                        opérations : GTB/GTC, salles de réunion, affichage dynamique, sonorisation et automatisation.
                      </p>
                    </div>
                    <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] font-display text-lg font-bold leading-6 flex mt-5 mb-16 py-2 flex-col">
                      {GTB_BULLETS.map((text, index) => (
                        <div
                          key={text}
                          id={
                            index === 0
                              ? "w-node-cd28f778-9631-6c81-9096-85e22f749d00-214350f8"
                              : index === 2
                                ? "w-node-cd28f778-9631-6c81-9096-85e22f749d0c-214350f8"
                                : undefined
                          }
                          className={
                            index === 1
                              ? "gap-x-4 gap-y-4 justify-start items-center w-full flex"
                              : "gap-x-4 gap-y-4 justify-start items-center w-full flex [align-self:start]"
                          }
                        >
                          <div className="flex gap-x-5 gap-y-5 justify-start items-center">
                            <Image
                              src={ARROW_SRC}
                              loading="lazy"
                              alt=""
                              width={40}
                              height={40}
                              className="inline-block bg-brand-ink [border-style:#fff] p-2 rounded-[40px] border"
                            />
                          </div>
                          <div className="justify-start items-center flex">
                            <p className="font-sans dark:text-brand-ink dark:font-medium">{text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
                  <div
                    id="w-node-_90dd0f8d-75ce-61fb-9036-2a84053824a1-214350f8"
                    className="max-sm:order-first [transform-style:preserve-3d]"
                  >
                    <Image
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      src={IMG_GTB_SRC}
                      alt=""
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="inline-block aspect-[1] object-cover w-full h-full rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
