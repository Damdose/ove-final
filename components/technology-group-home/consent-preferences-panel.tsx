import { INK, R_BTN } from "@/lib/home-ui";

export function ConsentPreferencesPanel() {
  return (
    <div fs-consent-styledcategories="false" fs-consent-element="internal-component">
      <div
        fs-consent-easing="ease"
        fs-consent-element="preferences"
        fs-consent-animation="slide-up"
        fs-consent-duration="300"
        className="z-[60] gap-x-4 gap-y-4 grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] fixed inset-[0%] hidden"
      >
        <div className="z-[997] flex-col justify-center items-center w-full h-full flex fixed p-8 inset-[0%]">
          <div className="z-[2] relative">
            <form
              id="consent-email-form"
              name="email-form"
              method="get"
              fs-consent-element="form"
              className="bg-white w-full max-w-xl h-full max-h-[70vh] relative"
              aria-label="Email Form"
            >
              <div className="gap-x-6 gap-y-6 flex-col h-full flex overflow-x-scroll overflow-y-scroll p-8">
                <div className="[border-bottom-style:solid] pb-6 border-b border-b-black/20">
                  <div className="text-base sm:text-xl">
                    <strong className="font-bold">
                      Gérer vos préférences de consentement
                      <br />
                      par catégorie
                    </strong>
                  </div>
                </div>
                <div
                  fs-consent-element="internal-categories-wrapper"
                  className="gap-x-4 gap-y-4 flex-col flex"
                >
                  <div
                    fs-consent-element="internal-category-essential"
                    className="gap-x-2 gap-y-2 [border-bottom-style:solid] flex-col justify-start items-stretch w-full flex pb-4 border-b border-b-black/20"
                  >
                    <div className="justify-start items-center w-full flex">
                      <div className="mr-3">Essentiels</div>
                      <div>
                        <strong className="font-bold">
                          Toujours
                          <br />
                          actifs
                        </strong>
                      </div>
                    </div>
                    <p className="text-[#0D0B4A] [font-family:var(--font-inter),Arial,sans-serif] font-light text-xs">
                      Nécessaire au fonctionnement du site. Toujours activé.
                      <br />
                    </p>
                  </div>
                  <div
                    fs-consent-element="internal-category-marketing"
                    className="gap-x-2 gap-y-2 [border-bottom-style:solid] flex-col justify-start items-stretch w-full flex pb-4 border-b border-b-black/20"
                  >
                    <label
                      htmlFor="marketing"
                      className="font-bold pl-5 justify-start items-center w-full flex before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:clear-both after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table"
                    >
                      <input
                        type="checkbox"
                        name="marketing"
                        id="marketing"
                        fs-consent-element="checkbox-marketing"
                        className="float-left leading-4 -ml-5 mr-2"
                      />
                      <span className="cursor-pointer font-normal inline-block mr-3">
                        Marketing
                      </span>
                    </label>
                    <p className="text-[#0D0B4A] [font-family:var(--font-inter),Arial,sans-serif] font-light text-xs">
                      Utilisé pour la publicité ciblée.
                      <br />
                    </p>
                  </div>
                  <div
                    fs-consent-element="internal-category-personalization"
                    className="gap-x-2 gap-y-2 [border-bottom-style:solid] flex-col justify-start items-stretch w-full flex pb-4 border-b border-b-black/20"
                  >
                    <label
                      htmlFor="personalization"
                      className="font-bold pl-5 justify-start items-center w-full flex before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:clear-both after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table"
                    >
                      <input
                        type="checkbox"
                        name="personalization"
                        id="personalization"
                        fs-consent-element="checkbox-personalization"
                        className="float-left leading-4 -ml-5 mr-2"
                      />
                      <span className="cursor-pointer font-normal inline-block mr-3">
                        Personnalisation
                      </span>
                    </label>
                    <p className="text-[#0D0B4A] [font-family:var(--font-inter),Arial,sans-serif] font-light text-xs">
                      Mémorise vos préférences et propose des fonctionnalités améliorées.
                      <br />
                    </p>
                  </div>
                  <div
                    fs-consent-element="internal-category-analytics"
                    className="gap-x-2 gap-y-2 [border-bottom-style:solid] flex-col justify-start items-stretch w-full flex pb-4 border-b border-b-black/20"
                  >
                    <label
                      htmlFor="analytics"
                      className="font-bold pl-5 justify-start items-center w-full flex before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:clear-both after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table"
                    >
                      <input
                        type="checkbox"
                        name="analytics"
                        id="analytics"
                        fs-consent-element="checkbox-analytics"
                        className="float-left leading-4 -ml-5 mr-2"
                      />
                      <span className="cursor-pointer font-normal inline-block mr-3">
                        Analytique
                      </span>
                    </label>
                    <p className="text-[#0D0B4A] [font-family:var(--font-inter),Arial,sans-serif] font-light text-xs">
                      Mesure l&apos;utilisation et améliore votre expérience.
                      <br />
                    </p>
                  </div>
                </div>
                <div className="gap-x-4 gap-y-4 flex-wrap justify-start items-center w-full flex">
                  <a
                    {...{ "fs-consent-element": "deny" }}
                    href="#"
                    className={`font-light cursor-pointer text-zinc-800 bg-rose-100 no-underline block px-6 py-3 ${R_BTN} active:outline-0 hover:outline-0`}
                  >
                    {" "}
                    Tout refuser
                  </a>
                  <a
                    {...{ "fs-consent-element": "allow" }}
                    href="#"
                    className={`font-light cursor-pointer text-white no-underline block px-6 py-3 ${R_BTN} active:outline-0 hover:outline-0`}
                    style={{ backgroundColor: INK }}
                  >
                    Tout accepter
                  </a>
                  <input
                    type="submit"
                    className={`[appearance:auto] cursor-pointer border-0 px-4 py-2 font-sans text-sm font-semibold text-white ${R_BTN}`}
                    style={{ backgroundColor: INK }}
                    value="Sauvegarder"
                  />
                </div>
                <div
                  fs-consent-element="close"
                  className="text-white cursor-pointer bg-black flex absolute p-2 right-[0%] top-[0%]"
                >
                  <div className="w-4 leading-[0] before:content-['_'] before:row-start-1 before:col-start-1 before:row-end-2 before:col-end-2 before:table after:content-['_'] after:row-start-1 after:col-start-1 after:row-end-2 after:col-end-2 after:table after:clear-both">
                    <svg
                      width="100%"
                      viewBox="0 0 16 17"
                      xmlns="http://www.w3.org/2000/svg"
                      className="align-baseline inline h-full fill-none overflow-x-hidden overflow-y-hidden"
                    >
                      <g>
                        <path
                          id="icon"
                          d="M3.41424 2.25L2.00003 3.66421L6.58582 8.25L1.99988 12.8359L3.41409 14.2502L8.00003 9.66421L12.5854 14.2496L13.9996 12.8354L9.41424 8.25L13.9995 3.66476L12.5853 2.25055L8.00003 6.83579L3.41424 2.25Z"
                          className="fill-current"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="text-center bg-zinc-300 hidden p-5"
              tabIndex={-1}
              role="region"
              aria-label="Email Form success"
            >
              <div>Merci! Votre demande a été reçue !</div>
            </div>
            <div
              className="bg-red-100 hidden mt-2.5 p-2.5"
              tabIndex={-1}
              role="region"
              aria-label="Email Form failure"
            >
              <div>Oops! Quelque chose n&apos;a pas fonctionnée</div>
            </div>
          </div>
          <div
            fs-consent-element="close"
            className="z-[1] w-full h-full absolute inset-[0%] bg-black/10"
          />
        </div>
      </div>
    </div>
  );
}
