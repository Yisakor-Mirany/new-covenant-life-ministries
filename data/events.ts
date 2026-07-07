import type { EventItem } from "@/types";

export const events: EventItem[] = [
  {
    slug: "annual-leadership-conference-2026",
    title: "Annual Leadership Conference 2026",
    date: "2026-09-18",
    endDate: "2026-09-20",
    location: "Addis Ababa International Convention Center",
    category: "Conference",
    description:
      "Our flagship gathering of leaders, pastors, and partners for three days of teaching, worship, and vision-casting under the theme 'Faithful Leadership for a New Generation.'",
    registrationOpen: true,
  },
  {
    slug: "marriage-restoration-retreat",
    title: "Marriage Restoration Retreat",
    date: "2026-08-07",
    endDate: "2026-08-09",
    location: "Debre Zeit Retreat Center",
    category: "Retreat",
    description:
      "A weekend getaway for couples to reconnect, receive biblical counseling, and renew their covenant commitment.",
    registrationOpen: true,
  },
  {
    slug: "youth-entrepreneurship-workshop",
    title: "Youth Entrepreneurship Workshop",
    date: "2026-07-25",
    location: "NCLM Youth Center, Bole",
    category: "Workshop",
    description:
      "A hands-on workshop introducing young leaders to business planning, digital tools, and microloan readiness.",
    registrationOpen: true,
  },
  {
    slug: "servant-leadership-facilitator-training",
    title: "Servant Leadership Facilitator Training",
    date: "2026-10-12",
    location: "NCLM Training Center",
    category: "Training",
    description:
      "Certification training for graduates preparing to facilitate Servant Leadership Development cohorts in their communities.",
    registrationOpen: false,
  },
  {
    slug: "community-service-day",
    title: "Community Service Day",
    date: "2026-07-19",
    location: "Multiple locations, Addis Ababa",
    category: "Community",
    description:
      "Youth and volunteer teams serve local communities through clean-up projects, health outreach, and family support services.",
    registrationOpen: true,
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
