import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Whet Studio — Consultoría gastronómica y tecnología para restaurantes en Barcelona",
  description:
    "Consultoría gastronómica y operativa para restaurantes en Barcelona. Aperturas, escandallos, food cost, formación de equipos y tecnología propia: GastroManager y MESA.",
  keywords: [
    "consultoría gastronómica Barcelona",
    "consultor gastronómico Barcelona",
    "apertura de restaurantes Barcelona",
    "food cost restaurante",
    "escandallos restaurante",
    "formación equipos restauración",
    "rentabilidad restaurante",
    "software gestión restaurante",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Whet Studio — Consultoría gastronómica y tecnología para restaurantes en Barcelona",
    description:
      "Aperturas, escandallos, food cost, formación de equipos y tecnología propia para restaurantes en Barcelona.",
    type: "website",
    locale: "es_ES",
    siteName: "Whet Studio",
    url: "https://whet.es",
  },
  alternates: { canonical: "https://whet.es" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Whet Studio",
  alternateName: "whet studio",
  description:
    "Consultoría gastronómica y tecnología para restaurantes. Apertura de restaurantes, escandallos, food cost, formación de equipos y tecnología propia en Barcelona.",
  url: "https://whet.es",
  email: "wes@whet.es",
  logo: "https://whet.es/whet-logo.png",
  image: "https://whet.es/whet-logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressRegion: "Cataluña",
    addressCountry: "ES",
  },
  areaServed: { "@type": "City", name: "Barcelona" },
  serviceType: [
    "Consultoría gastronómica",
    "Apertura de restaurantes",
    "Control de food cost y escandallos",
    "Formación de equipos de restauración",
    "Software para restaurantes",
  ],
  knowsAbout: [
    "food cost",
    "escandallos",
    "rentabilidad en restaurantes",
    "formación de equipos de hostelería",
    "apertura de restaurantes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="preload" href="/whet-logo.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <IntroSplash />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
