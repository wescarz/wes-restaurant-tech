import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://whet.es";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createMetadata({ title, description, path = "", image }: SEOProps): Metadata {
  const url = `${SITE_URL}${path || ""}`;
  const ogImage = image ? `${SITE_URL}${image}` : `${SITE_URL}/og.png`;

  return {
    title: title.includes("|") ? title : `${title} | Whet Studio`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Whet Studio",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
  };
}
