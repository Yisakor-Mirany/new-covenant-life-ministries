import type { Course, Cohort } from "@/types";

export const courses: Course[] = [
  {
    title: "Foundations of Servant Leadership",
    level: "Foundational",
    duration: "6 weeks",
    description:
      "Biblical leadership principles, character formation, and self-leadership fundamentals.",
  },
  {
    title: "Family Systems & Health",
    level: "Foundational",
    duration: "4 weeks",
    description: "Understanding family dynamics, communication, and generational health.",
  },
  {
    title: "Leading Teams & Organizations",
    level: "Intermediate",
    duration: "8 weeks",
    description: "Vision casting, delegation, conflict resolution, and organizational leadership.",
  },
  {
    title: "Marriage Mentor Certification",
    level: "Intermediate",
    duration: "10 weeks",
    description: "Training for couples preparing to mentor and counsel other couples.",
  },
  {
    title: "Facilitator Certification",
    level: "Advanced",
    duration: "12 weeks",
    description:
      "Advanced training and certification for graduates preparing to lead their own cohorts.",
  },
  {
    title: "Strategic Ministry Leadership",
    level: "Advanced",
    duration: "8 weeks",
    description: "Advanced strategy, fundraising, and organizational growth for ministry leaders.",
  },
];

export const cohorts: Cohort[] = [
  {
    name: "Servant Leadership Cohort 14",
    startDate: "2026-08-03",
    format: "Hybrid — Addis Ababa + Online",
    seatsLeft: 12,
  },
  {
    name: "Marriage Mentor Certification Cohort 6",
    startDate: "2026-09-07",
    format: "In-Person — NCLM Training Center",
    seatsLeft: 8,
  },
  {
    name: "Facilitator Certification Cohort 4",
    startDate: "2026-10-05",
    format: "In-Person — NCLM Training Center",
    seatsLeft: 5,
  },
];
