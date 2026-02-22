import { MetadataRoute } from "next";
import { getBlogSlugs } from "@/lib/mdx";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wesrestauranttech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getBlogSlugs();
  const blogUrls = slugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
  }));

  const staticUrls = [
    "",
    "/apps",
    "/apps/gastromanager",
    "/apps/mesa",
    "/consultoria",
    "/desarrollo",
    "/precios",
    "/blog",
    "/contacto",
    "/demo",
    "/checkout/success",
    "/legal/privacidad",
    "/legal/terminos",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...blogUrls];
}
