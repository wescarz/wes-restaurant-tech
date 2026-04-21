import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
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

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ascua Lab — Consultoría gastronómica, operativa y tecnológica",
  description:
    "Consultoría gastronómica y tecnología propia para restaurantes. GastroManager, Mesa y más. Abrimos, ordenamos y optimizamos restaurantes.",
  openGraph: {
    title: "Ascua Lab — Consultoría gastronómica, operativa y tecnológica",
    description:
      "Consultoría gastronómica y tecnología propia para restaurantes. GastroManager, Mesa y más.",
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
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <IntroSplash />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
