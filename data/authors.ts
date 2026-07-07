import type { Author } from "@/types";

export const authors: Author[] = [
  {
    name: "Rev. Samuel Girma",
    role: "Founder & President, NCLM",
    bio: "Rev. Samuel Girma founded New Covenant Life Ministries after two decades of pastoral and community leadership. His writing distills three decades of discipleship and leadership formation into practical, biblically grounded books for everyday leaders.",
    initials: "SG",
  },
  {
    name: "Pastor Tesfaye Alemu",
    role: "Director of Leadership Programs, NCLM",
    bio: "Pastor Tesfaye leads the design and delivery of NCLM's flagship leadership programs. His books equip leaders and young people to build character before competency.",
    initials: "TA",
  },
  {
    name: "Sister Ruth Wondimu",
    role: "Director of Youth & Marriage Ministries, NCLM",
    bio: "Ruth brings over 12 years of youth ministry and marriage counseling experience to her writing, helping families and young leaders build lasting, Christ-centered foundations.",
    initials: "RW",
  },
  {
    name: "Dr. Hana Bekele",
    role: "Executive Director, NCLM",
    bio: "Dr. Hana writes at the intersection of nonprofit leadership and family health, drawing on her background in organizational management and family counseling.",
    initials: "HB",
  },
  {
    name: "NCLM Publishing Team",
    role: "Curriculum & Training Resources",
    bio: "Our in-house publishing team develops workbooks, facilitator manuals, and training curricula used across every NCLM program, refined through years of cohort feedback.",
    initials: "NP",
  },
];

export function getAuthorByName(name: string) {
  return authors.find((author) => author.name === name);
}
