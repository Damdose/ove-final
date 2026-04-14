import type { Metadata, Viewport } from "next";
import { Figtree, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Ovedex — Digital, IT & Solutions techniques",
    template: "%s — Ovedex",
  },
  description:
    "Ovedex regroupe trois pôles d’expertise — Digital, IT et Solutions techniques — pour accompagner les entreprises dans leur croissance et leur transformation numérique.",
  keywords: [
    "Ovedex",
    "agence digitale",
    "infogérance",
    "cybersécurité",
    "solutions techniques",
    "sûreté",
    "vidéosurveillance",
    "contrôle d’accès",
    "création de site web",
    "SEO",
    "réseaux sociaux",
    "cloud",
    "maintenance informatique",
  ],
  authors: [{ name: "Ovedex" }],
  creator: "Ovedex",
  publisher: "Ovedex",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Ovedex",
    title: "Ovedex — Digital, IT & Solutions techniques",
    description:
      "Ovedex regroupe trois pôles d’expertise — Digital, IT et Solutions techniques — pour accompagner les entreprises dans leur croissance et leur transformation numérique.",
    type: "website",
    locale: "fr_FR",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovedex — Digital, IT & Solutions techniques",
    description:
      "Ovedex regroupe trois pôles d’expertise — Digital, IT et Solutions techniques — pour accompagner les entreprises dans leur croissance et leur transformation numérique.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-FR"
      className={`${inter.variable} ${figtree.variable} ${geistMono.variable} h-full font-sans`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ovedex",
              url: getSiteUrl(),
              logo: `${getSiteUrl()}/logo.svg`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33651758513",
                contactType: "customer service",
                availableLanguage: "French",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "32 rue de Paris",
                addressLocality: "Boulogne-Billancourt",
                postalCode: "92100",
                addressCountry: "FR",
              },
              sameAs: [
                "https://fr.linkedin.com/company/opensi-ecommerce",
                "https://www.instagram.com/ovedex/",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
