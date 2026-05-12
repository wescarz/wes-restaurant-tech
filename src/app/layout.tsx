import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroSplash } from "@/components/ui/IntroSplash";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "whet studio — Afilamos restaurantes",
  description:
    "Consultoría gastronómica y tecnología propia para restaurantes. GastroManager, MESA y más. Abrimos, ordenamos y optimizamos restaurantes.",
  openGraph: {
    title: "whet studio — Afilamos restaurantes",
    description:
      "Consultoría gastronómica y tecnología propia para restaurantes. GastroManager, MESA y más.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/whet-logo.png" as="image" />
      </head>
      <body className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}>
        <IntroSplash />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
