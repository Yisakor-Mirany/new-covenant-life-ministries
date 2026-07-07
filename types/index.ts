export interface Program {
  slug: string;
  acronym?: string;
  name: string;
  shortDescription: string;
  overview: string;
  icon: string;
  color: "primary" | "secondary" | "accent";
  heroImageAlt: string;
  objectives: string[];
  targetAudience: string[];
  curriculum: { title: string; description: string }[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
  successStories: { name: string; role: string; quote: string }[];
  duration: string;
  format: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  program?: string;
}

export interface EventItem {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  category: "Conference" | "Retreat" | "Workshop" | "Training" | "Community";
  description: string;
  registrationOpen: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface Partner {
  name: string;
}

export interface Course {
  title: string;
  level: "Foundational" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
}

export interface Cohort {
  name: string;
  startDate: string;
  format: string;
  seatsLeft: number;
}
