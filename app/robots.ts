import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/books/checkout", "/books/order-confirmation", "/donate/confirmation"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
