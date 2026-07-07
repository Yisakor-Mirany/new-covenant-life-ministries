import type { Book } from "@/types";

export const books: Book[] = [
  {
    slug: "the-weight-of-servant-leadership",
    title: "The Weight of Servant Leadership",
    author: "Rev. Samuel Girma",
    category: "Leadership",
    format: "Both",
    price: 14.99,
    digitalPrice: 8.99,
    description:
      "A foundational look at biblical leadership — why the greatest leaders serve first, and how to build that conviction into daily life.",
    longDescription:
      "Drawing on three decades of pastoral and organizational leadership, Rev. Samuel Girma unpacks what it truly means to lead like Christ. The Weight of Servant Leadership moves beyond leadership theory into the daily, often unseen decisions that form a servant's heart — at home, in the church, and in the marketplace. Each chapter closes with reflection questions ideal for individual study or small group discussion, making this the companion volume to NCLM's Servant Leadership Development program.",
    coverGradient: "from-primary/80 to-primary",
    bestseller: true,
    featured: true,
    pages: 212,
    publishedYear: 2024,
    rating: 4.8,
    reviews: [
      {
        name: "Mekdes A.",
        rating: 5,
        comment: "This book reframed everything I thought I knew about leadership. Required reading for our whole staff.",
      },
      {
        name: "Biniam T.",
        rating: 5,
        comment: "Practical, biblical, and honest. I underlined nearly every page.",
      },
      {
        name: "Selam K.",
        rating: 4,
        comment: "A great companion to the SLD course — I wish I'd had it sooner.",
      },
    ],
  },
  {
    slug: "foundations-of-servant-leadership",
    title: "Foundations of Servant Leadership",
    author: "Pastor Tesfaye Alemu",
    category: "Leadership",
    format: "Both",
    price: 12.99,
    digitalPrice: 6.99,
    description:
      "The core text behind NCLM's Servant Leadership Development program — biblical leadership principles for emerging leaders.",
    longDescription:
      "Foundations of Servant Leadership is the primary text used in NCLM's Servant Leadership Development cohorts. Pastor Tesfaye Alemu walks readers through the biblical basis for leadership as service, self-leadership before leading others, and the disciplines that sustain leaders over the long haul. Written for rising leaders in church, workplace, and community settings.",
    coverGradient: "from-secondary/80 to-secondary",
    featured: true,
    pages: 168,
    publishedYear: 2023,
    rating: 4.6,
    reviews: [
      {
        name: "Yared M.",
        rating: 5,
        comment: "Clear, well-organized, and deeply rooted in Scripture. Perfect for group study.",
      },
      {
        name: "Hanna G.",
        rating: 4,
        comment: "Used this with my church leadership team — sparked great discussion.",
      },
    ],
  },
  {
    slug: "leading-in-community",
    title: "Leading in Community",
    author: "Pastor Tesfaye Alemu",
    category: "Leadership",
    format: "Paperback",
    price: 13.99,
    description:
      "Practical tools for leading teams, churches, and community initiatives with wisdom and humility.",
    longDescription:
      "Leadership rarely happens alone. Leading in Community offers practical, field-tested tools for building healthy teams, navigating conflict, and leading community initiatives without losing sight of servanthood. This volume is especially suited to leaders coordinating multiple stakeholders — church committees, nonprofit boards, and community coalitions.",
    coverGradient: "from-accent/80 to-accent",
    pages: 184,
    publishedYear: 2022,
    rating: 4.5,
    reviews: [
      {
        name: "Dawit N.",
        rating: 4,
        comment: "Full of practical wisdom for anyone coordinating teams of volunteers.",
      },
    ],
  },
  {
    slug: "facilitator-training-manual",
    title: "Facilitator Training Manual",
    author: "NCLM Publishing Team",
    category: "Training Manuals",
    format: "Digital Download",
    digitalPrice: 19.99,
    price: 19.99,
    description:
      "The official certification manual for graduates preparing to facilitate NCLM program cohorts.",
    longDescription:
      "This comprehensive manual equips certified facilitators to lead NCLM program cohorts with fidelity and excellence. Covers session planning, group facilitation skills, common challenges, and assessment tools. Required reading for all Facilitator Certification cohort participants.",
    coverGradient: "from-primary/70 via-secondary/60 to-accent/70",
    pages: 96,
    publishedYear: 2025,
    rating: 4.7,
    reviews: [
      {
        name: "Ruth B.",
        rating: 5,
        comment: "Everything I needed to confidently lead my first cohort.",
      },
    ],
  },
  {
    slug: "servant-leadership-workbook",
    title: "Servant Leadership Development Workbook",
    author: "NCLM Publishing Team",
    category: "Training Manuals",
    format: "Both",
    price: 16.99,
    digitalPrice: 9.99,
    description:
      "The official companion workbook for the Servant Leadership Development course, with guided exercises and reflection prompts.",
    longDescription:
      "Designed to accompany every session of the Servant Leadership Development program, this workbook includes guided exercises, Scripture reflection prompts, and accountability check-ins. Also useful as a standalone resource for individual or small-group leadership study.",
    coverGradient: "from-secondary/70 via-primary/60 to-secondary/80",
    pages: 120,
    publishedYear: 2024,
    rating: 4.6,
    reviews: [
      {
        name: "Amanuel F.",
        rating: 5,
        comment: "The reflection prompts alone were worth the price.",
      },
    ],
  },
  {
    slug: "raising-kingdom-minded-youth",
    title: "Raising Kingdom-Minded Youth",
    author: "Pastor Tesfaye Alemu",
    category: "Youth Development",
    format: "Both",
    price: 13.99,
    digitalPrice: 7.99,
    description:
      "A practical guide for parents, mentors, and youth leaders raising the next generation of Christ-centered leaders.",
    longDescription:
      "Raising Kingdom-Minded Youth addresses the real questions parents and mentors face: how do we disciple young people in a way that produces lasting faith and genuine leadership? Pastor Tesfaye draws on years of youth leadership training to offer practical frameworks for discipleship, mentorship, and character formation in adolescence and young adulthood.",
    coverGradient: "from-secondary/80 via-accent/50 to-secondary/60",
    featured: true,
    pages: 176,
    publishedYear: 2023,
    rating: 4.7,
    reviews: [
      {
        name: "Genet W.",
        rating: 5,
        comment: "As a youth pastor, this has become my go-to recommendation for parents.",
      },
      {
        name: "Samrawit L.",
        rating: 4,
        comment: "Warm, practical, and full of real stories.",
      },
    ],
  },
  {
    slug: "the-young-entrepreneurs-bible-study",
    title: "The Young Entrepreneur's Bible Study",
    author: "Sister Ruth Wondimu",
    category: "Youth Development",
    format: "Both",
    price: 11.99,
    digitalPrice: 5.99,
    description:
      "A six-week Bible study connecting biblical stewardship principles to entrepreneurship and financial responsibility.",
    longDescription:
      "Written for the young entrepreneurs in NCLM's Youth Leadership Development program, this six-week Bible study connects biblical principles of stewardship, integrity, and diligence to the practical realities of starting a small business. Each week pairs Scripture study with a practical business exercise.",
    coverGradient: "from-accent/70 via-secondary/50 to-accent/80",
    pages: 88,
    publishedYear: 2024,
    rating: 4.5,
    reviews: [
      {
        name: "Nathnael Y.",
        rating: 5,
        comment: "Used this with our youth cohort — the business exercises were a hit.",
      },
    ],
  },
  {
    slug: "restoring-the-covenant-home",
    title: "Restoring the Covenant Home",
    author: "Sister Ruth Wondimu",
    category: "Marriage & Family",
    format: "Both",
    price: 15.99,
    digitalPrice: 8.99,
    description:
      "A hope-filled guide to rebuilding marriages and homes on a foundation of covenant faithfulness.",
    longDescription:
      "Restoring the Covenant Home speaks directly to couples and families walking through brokenness, offering both biblical hope and practical steps toward restoration. Ruth Wondimu draws on years of marriage counseling to address communication breakdown, trust repair, and the process of rebuilding a covenant home. Widely used alongside NCLM's Christian Marriage Leadership course.",
    coverGradient: "from-primary/70 via-accent/50 to-primary/80",
    bestseller: true,
    featured: true,
    pages: 224,
    publishedYear: 2023,
    rating: 4.9,
    reviews: [
      {
        name: "Abel & Helen M.",
        rating: 5,
        comment: "This book, alongside the CML course, gave us our marriage back.",
      },
      {
        name: "Tigist S.",
        rating: 5,
        comment: "Compassionate, honest, and deeply practical.",
      },
      {
        name: "Kaleb R.",
        rating: 4,
        comment: "A must-read for any couple, not just those in crisis.",
      },
    ],
  },
  {
    slug: "building-a-marriage-that-lasts-book",
    title: "Building a Marriage That Lasts",
    author: "Dr. Hana Bekele",
    category: "Marriage & Family",
    format: "Both",
    price: 14.99,
    digitalPrice: 7.99,
    description:
      "Five practical, biblically grounded habits that move a marriage from surviving to thriving.",
    longDescription:
      "Expanding on themes from NCLM's teaching series of the same name, Dr. Hana Bekele identifies five daily habits that consistently strengthen Christian marriages: honest communication, shared spiritual practice, healthy conflict resolution, intentional time together, and community with other covenant-minded couples. Includes discussion questions for couples and small groups.",
    coverGradient: "from-accent/70 via-primary/50 to-accent/80",
    pages: 196,
    publishedYear: 2024,
    rating: 4.7,
    reviews: [
      {
        name: "Dagim & Meron A.",
        rating: 5,
        comment: "We read a chapter a week together — it transformed our date nights.",
      },
    ],
  },
  {
    slug: "family-devotional-guide-book",
    title: "The Family Devotional Guide",
    author: "Rev. Samuel Girma",
    category: "Marriage & Family",
    format: "Digital Download",
    digitalPrice: 6.99,
    price: 6.99,
    description:
      "A 30-day devotional guide to help families grow together in faith, one evening at a time.",
    longDescription:
      "Designed for busy households, The Family Devotional Guide offers 30 short, engaging devotions — each with a Scripture reading, reflection question, and prayer prompt suitable for children through adults. A favorite resource among NCLM's Marriage Ministry families.",
    coverGradient: "from-primary/60 via-secondary/50 to-primary/70",
    pages: 64,
    publishedYear: 2025,
    rating: 4.8,
    reviews: [
      {
        name: "Selamawit D.",
        rating: 5,
        comment: "Our kids look forward to devotional time now — simple and meaningful.",
      },
    ],
  },
  {
    slug: "new-covenant-new-life-devotional",
    title: "New Covenant, New Life: A 40-Day Devotional",
    author: "Rev. Samuel Girma",
    category: "Bible Study",
    format: "Both",
    price: 12.99,
    digitalPrice: 6.99,
    description:
      "A 40-day journey through Scripture exploring what it means to live as a new creation in Christ.",
    longDescription:
      "New Covenant, New Life traces the story of covenant throughout Scripture, guiding readers through 40 days of reflection on identity, transformation, and purpose in Christ. Ideal for personal devotion, small groups, or as a gift — this devotional is New Covenant Life Ministries' flagship Bible study resource, named for the conviction at the heart of our mission.",
    coverGradient: "from-secondary/70 via-primary/60 to-accent/60",
    bestseller: true,
    featured: true,
    pages: 152,
    publishedYear: 2022,
    rating: 4.9,
    reviews: [
      {
        name: "Fikirte H.",
        rating: 5,
        comment: "I've gifted this to nearly a dozen friends. Beautifully written.",
      },
      {
        name: "Robel Z.",
        rating: 5,
        comment: "The perfect companion for a new believer or a seasoned one.",
      },
    ],
  },
];

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export const bookCategories: Book["category"][] = [
  "Leadership",
  "Youth Development",
  "Marriage & Family",
  "Training Manuals",
  "Bible Study",
];
