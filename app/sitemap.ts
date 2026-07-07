import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";
import { programs } from "@/data/programs";
import { events } from "@/data/events";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/leadership-academy",
    "/youth-development",
    "/marriage-ministry",
    "/impact",
    "/events",
    "/resources",
    "/get-involved",
    "/donate",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const programRoutes = programs.map((program) => ({
    url: `${siteConfig.url}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const eventRoutes = events.map((event) => ({
    url: `${siteConfig.url}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/resources/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...programRoutes, ...eventRoutes, ...blogRoutes];
}
