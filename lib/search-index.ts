import { programs } from "@/data/programs";
import { events } from "@/data/events";
import { blogPosts } from "@/data/blog-posts";
import { books } from "@/data/books";

export interface SearchEntry {
  title: string;
  description: string;
  href: string;
  group: "Pages" | "Programs" | "Events" | "Resources" | "Books";
}

const pages: SearchEntry[] = [
  { title: "Home", description: "Welcome to New Covenant Life Ministries", href: "/", group: "Pages" },
  { title: "About", description: "Our history, vision, mission, and leadership", href: "/about", group: "Pages" },
  { title: "Programs", description: "Explore our leadership development portfolio", href: "/programs", group: "Pages" },
  { title: "Leadership Academy", description: "Courses, certificates, and cohorts", href: "/leadership-academy", group: "Pages" },
  { title: "Youth Development", description: "Bible study, entrepreneurship, mentorship", href: "/youth-development", group: "Pages" },
  { title: "Marriage Ministry", description: "Courses, counseling, and family resources", href: "/marriage-ministry", group: "Pages" },
  { title: "Impact", description: "Statistics, stories, and annual reports", href: "/impact", group: "Pages" },
  { title: "Events", description: "Upcoming conferences, retreats, and workshops", href: "/events", group: "Pages" },
  { title: "Resources", description: "Blog, teaching materials, downloads", href: "/resources", group: "Pages" },
  { title: "Bookstore", description: "Books, manuals, and Bible studies from NCLM", href: "/books", group: "Pages" },
  { title: "Get Involved", description: "Volunteer, partner, mentor, sponsor", href: "/get-involved", group: "Pages" },
  { title: "Donate", description: "Fuel transformation across communities", href: "/donate", group: "Pages" },
  { title: "Contact", description: "Reach our team", href: "/contact", group: "Pages" },
];

const programEntries: SearchEntry[] = programs.map((p) => ({
  title: p.name,
  description: p.shortDescription,
  href: `/programs/${p.slug}`,
  group: "Programs",
}));

const eventEntries: SearchEntry[] = events.map((e) => ({
  title: e.title,
  description: e.description,
  href: `/events/${e.slug}`,
  group: "Events",
}));

const resourceEntries: SearchEntry[] = blogPosts.map((b) => ({
  title: b.title,
  description: b.excerpt,
  href: `/resources/${b.slug}`,
  group: "Resources",
}));

const bookEntries: SearchEntry[] = books.map((b) => ({
  title: b.title,
  description: b.description,
  href: `/books/${b.slug}`,
  group: "Books",
}));

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...programEntries,
  ...eventEntries,
  ...resourceEntries,
  ...bookEntries,
];
