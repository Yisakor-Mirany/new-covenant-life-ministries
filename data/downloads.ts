export interface DownloadResource {
  title: string;
  type: "PDF Guide" | "Workbook" | "Devotional" | "Manual";
  description: string;
}

export const downloads: DownloadResource[] = [
  {
    title: "Family Devotional Guide",
    type: "Devotional",
    description: "A 30-day devotional guide for families to grow together in faith.",
  },
  {
    title: "Servant Leadership Workbook",
    type: "Workbook",
    description: "Companion workbook for the Servant Leadership Development course.",
  },
  {
    title: "Marriage Communication Toolkit",
    type: "PDF Guide",
    description: "Practical exercises for couples to strengthen communication.",
  },
  {
    title: "Facilitator Training Manual",
    type: "Manual",
    description: "Comprehensive guide for certified NCLM program facilitators.",
  },
];

export interface Sermon {
  title: string;
  speaker: string;
  date: string;
  series: string;
}

export const sermons: Sermon[] = [
  {
    title: "The Weight of Servant Leadership",
    speaker: "Rev. Samuel Girma",
    date: "2026-06-14",
    series: "Faithful Leadership",
  },
  {
    title: "Restoring the Covenant Home",
    speaker: "Sister Ruth Wondimu",
    date: "2026-05-17",
    series: "Family Restoration",
  },
  {
    title: "Raising Kingdom-Minded Youth",
    speaker: "Pastor Tesfaye Alemu",
    date: "2026-04-19",
    series: "Next Generation",
  },
];
