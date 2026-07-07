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
  prefix?: string;
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

export type BookCategory =
  | "Leadership"
  | "Christian Living"
  | "Youth Development"
  | "Marriage & Family"
  | "Training Manuals"
  | "Bible Study";

export type BookFormat = "Paperback" | "Digital Download" | "Both";

export type BookAvailability = "In Stock" | "Preorder" | "Out of Stock";

export interface BookReview {
  name: string;
  rating: number;
  comment: string;
}

export interface Book {
  slug: string;
  title: string;
  titleAmharic?: string;
  subtitle?: string;
  author: string;
  category: BookCategory;
  format: BookFormat;
  price: number;
  digitalPrice?: number;
  description: string;
  longDescription: string;
  coverGradient: string;
  bestseller?: boolean;
  featured?: boolean;
  newRelease?: boolean;
  availability?: BookAvailability;
  releaseDate?: string;
  pages: number;
  publishedYear: number;
  rating: number;
  reviews: BookReview[];
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface BookBundle {
  slug: string;
  title: string;
  description: string;
  bookSlugs: string[];
  price: number;
  donationIncluded: number;
}

export interface CartItem {
  slug: string;
  title: string;
  author: string;
  format: "Paperback" | "Digital Download" | "Bundle";
  price: number;
  quantity: number;
  coverGradient: string;
}

export interface WishlistItem {
  slug: string;
  title: string;
  author: string;
  price: number;
  coverGradient: string;
}

export type DonationRegion = "international" | "local";

export interface PaymentMethod {
  id: string;
  label: string;
  region: DonationRegion;
  icon: string;
  instructions?: {
    label: string;
    value: string;
  }[];
}

export interface Campaign {
  slug: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  currency: string;
}

export interface DonationImpact {
  amount: number;
  description: string;
}
