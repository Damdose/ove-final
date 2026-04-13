/** URLs distantes (extrait Webflow) — hébergeur autorisé dans `next.config.ts`. */
export const CONTACT_PAGE_IMAGES = {
  iconPhone:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273e73fd44bd92aabd5175_Icon%20(22).svg",
  iconCallback:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273e739dd4d2fb9085a7c3_Icon%20(23).svg",
  iconEmail:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273e7381c78eab45715fa3_Icon%20(24).svg",
  logoVe:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016f_VE_RGB_W.webp",
  logoSpie:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c1016c_SPIE-logo.avif",
  logoBouygues:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10169_Bouygues-Logo-bianco.avif",
  logoEngie:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69273d1bf906339f22c10179_ENGIE-Customer-References-Logo%402x.6c4974215afc9e93f8694f555d6ceacc4a4c32d2.avif",
  ecosystemDigital:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69272cae8100e0f086f41aa9_Group%20427319225%20(1).avif",
  ecosystemSolutions:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69272caefd35e7d609f260fe_Group%20427319225%20(2).avif",
  ecosystemIt:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69272cae44df9872fa88bd0f_Group%20427319225%20(3).avif",
  whatsapp:
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/691e5a2f4ad9018806391c30/69305d25a750d6d9e5271492_whatsapp.svg",
} as const;

export interface EcosystemCardData {
  id: string;
  imageSrc: string;
  title: string;
  body: string;
  cardClass: string;
}

export const ECOSYSTEM_CARDS: readonly EcosystemCardData[] = [
  {
    id: "eco-digital",
    imageSrc: CONTACT_PAGE_IMAGES.ecosystemDigital,
    title: "Augmenter la productivité",
    body: "Gagnez du temps dans le traitement des commandes clients.",
    cardClass: "bg-emerald-100",
  },
  {
    id: "eco-solutions",
    imageSrc: CONTACT_PAGE_IMAGES.ecosystemSolutions,
    title: "Optimisez vos stocks",
    body: "Vos stocks sont à jour en permanence avec votre boutique.",
    cardClass: "bg-blue-200",
  },
  {
    id: "eco-it",
    imageSrc: CONTACT_PAGE_IMAGES.ecosystemIt,
    title: "Assurez une fiabilité accrue",
    body: "Limitez les erreurs de préparation et augmenter la satisfaction client.",
    cardClass: "bg-purple-200",
  },
] as const;

export const PARTNER_LOGOS: readonly { id: string; src: string; width: number; height: number }[] = [
  { id: "ve", src: CONTACT_PAGE_IMAGES.logoVe, width: 120, height: 44 },
  { id: "spie", src: CONTACT_PAGE_IMAGES.logoSpie, width: 120, height: 44 },
  { id: "bouygues", src: CONTACT_PAGE_IMAGES.logoBouygues, width: 140, height: 44 },
  { id: "engie", src: CONTACT_PAGE_IMAGES.logoEngie, width: 140, height: 44 },
] as const;
