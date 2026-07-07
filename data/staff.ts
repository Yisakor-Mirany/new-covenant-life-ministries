import type { StaffMember } from "@/types";

export const founder: StaffMember = {
  name: "Rev. Samuel Girma",
  role: "Founder & President",
  bio: "Rev. Samuel Girma founded New Covenant Life Ministries after two decades of pastoral and community leadership, driven by a conviction that transformed leaders build transformed families and nations. He holds a Master of Divinity and has trained leaders across East Africa.",
  initials: "SG",
};

export const leadership: StaffMember[] = [
  founder,
  {
    name: "Dr. Hana Bekele",
    role: "Executive Director",
    bio: "Dr. Hana oversees organizational strategy and program quality, bringing a background in nonprofit management and family counseling.",
    initials: "HB",
  },
  {
    name: "Pastor Tesfaye Alemu",
    role: "Director of Leadership Programs",
    bio: "Pastor Tesfaye leads the design and delivery of TLFDP and Servant Leadership Development, mentoring facilitators across the country.",
    initials: "TA",
  },
  {
    name: "Sister Ruth Wondimu",
    role: "Director of Youth & Marriage Ministries",
    bio: "Ruth brings over 12 years of youth ministry and marriage counseling experience to lead our fastest-growing ministry areas.",
    initials: "RW",
  },
  {
    name: "Mr. Dawit Kebede",
    role: "Director of Operations & Partnerships",
    bio: "Dawit manages organizational operations, church partnerships, and donor stewardship to sustain ministry growth.",
    initials: "DK",
  },
];

export const orgStructure = [
  {
    title: "Board of Directors",
    description: "Governance and strategic oversight",
  },
  {
    title: "Office of the President",
    description: "Vision, external relations, and organizational leadership",
  },
  {
    title: "Program Directorates",
    description: "Leadership, Youth, and Marriage Ministry program delivery",
  },
  {
    title: "Operations & Partnerships",
    description: "Finance, administration, church and donor partnerships",
  },
  {
    title: "Regional Facilitator Network",
    description: "Trained facilitators multiplying programs in local communities",
  },
];
