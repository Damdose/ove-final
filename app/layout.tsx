import type { Metadata } from "next";
import { Figtree, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Ovedex - Trois expertises, une vision, une croissance partagée.",
  description:
    "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
  openGraph: {
    title: "Ovedex - Trois expertises, une vision, une croissance partagée.",
    description:
      "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovedex - Trois expertises, une vision, une croissance partagée.",
    description:
      "Ovedex: Optimisez Votre Expérience avec Des services Exceptionnels. Ensemble, développons votre entreprise avec les technologies d’aujourd’hui et de demain.",
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
