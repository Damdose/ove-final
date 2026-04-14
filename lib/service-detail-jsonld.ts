import { absoluteUrl, getSiteUrl } from "@/lib/site";

type ServiceSeed = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
};

function serviceJsonLd(
  service: ServiceSeed,
  pathPrefix: "/services-it" | "/services-digital" | "/services-solution",
  poleHomePath: "/it" | "/digital" | "/solutions",
  poleListLabel: string,
) {
  const url = absoluteUrl(`${pathPrefix}/${service.slug}`);
  const poleHome = absoluteUrl(poleHomePath);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.description,
        url,
        inLanguage: "fr-FR",
        image: service.imageSrc,
        provider: {
          "@type": "Organization",
          name: "Ovedex",
          url: getSiteUrl(),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: getSiteUrl(),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: poleListLabel,
            item: poleHome,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export function itServiceDetailJsonLd(service: ServiceSeed) {
  return serviceJsonLd(service, "/services-it", "/it", "Pôle IT");
}

export function digitalServiceDetailJsonLd(service: ServiceSeed) {
  return serviceJsonLd(service, "/services-digital", "/digital", "Pôle Digital");
}

export function solutionsServiceDetailJsonLd(service: ServiceSeed) {
  return serviceJsonLd(service, "/services-solution", "/solutions", "Pôle Solutions");
}
