import type { MetadataRoute } from "next";

const baseUrl = "https://jdaerialsolutions.com";
const pages = ["", "/construction-progress", "/roof-documentation", "/3d-models", "/site-overview-imagery", "/commercial-properties", "/vacant-land-development"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
