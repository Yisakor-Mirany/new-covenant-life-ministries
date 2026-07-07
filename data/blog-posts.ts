import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "what-makes-a-servant-leader",
    title: "What Makes a Servant Leader?",
    excerpt:
      "Biblical leadership flips the world's model upside down. Here's what that means in practice — at home, church, and work.",
    content: [
      "The world defines leadership by position, influence, and authority over others. Jesus defined it differently: 'Whoever wants to become great among you must be your servant' (Mark 10:43).",
      "At New Covenant Life Ministries, every program we teach — from TLFDP to Youth Leadership Development — is built on this single, countercultural conviction: the greatest leaders serve first.",
      "In practice, this looks like leaders who listen before they speak, who measure success by the growth of others, and who lead their homes with the same humility they hope to model publicly.",
    ],
    author: "Pastor Tesfaye Alemu",
    date: "2026-05-14",
    category: "Leadership",
    readTime: "4 min read",
  },
  {
    slug: "building-a-marriage-that-lasts",
    title: "Building a Marriage That Lasts",
    excerpt:
      "Five practices from our Christian Marriage Leadership curriculum that help couples move from surviving to thriving.",
    content: [
      "Marriage was never meant to be merely endured — it was designed by God to flourish. Through years of walking with couples, we've identified five practices that consistently strengthen marriages.",
      "1. Daily honest communication. 2. Shared spiritual practices. 3. Conflict resolved, not avoided. 4. Intentional time together. 5. A support community of other covenant-minded couples.",
      "These aren't quick fixes — they're habits cultivated over a lifetime. That's why our Christian Marriage Leadership course spans twelve weeks of teaching, practice, and community.",
    ],
    author: "Sister Ruth Wondimu",
    date: "2026-04-02",
    category: "Marriage & Family",
    readTime: "5 min read",
  },
  {
    slug: "why-youth-need-more-than-good-advice",
    title: "Why Youth Need More Than Good Advice",
    excerpt:
      "Mentorship, not just information, is transforming young leaders across our Youth Leadership Development program.",
    content: [
      "Young people today are saturated with information but starving for relationship. Our Youth Leadership Development program is built around one core belief: transformation happens in relationship, not just in a classroom.",
      "Every participant is paired with a trained mentor who walks alongside them through leadership training, entrepreneurship, and life's everyday challenges.",
      "The result: young leaders who don't just know what to do, but have someone walking with them as they do it.",
    ],
    author: "Sister Ruth Wondimu",
    date: "2026-02-20",
    category: "Youth",
    readTime: "3 min read",
  },
  {
    slug: "the-family-as-the-first-classroom-of-leadership",
    title: "The Family as the First Classroom of Leadership",
    excerpt:
      "Before anyone leads a church, company, or nation, they first learn to lead — or fail to lead — at home.",
    content: [
      "Every leadership program we run eventually returns to this truth: the family is the first and most formative classroom of leadership.",
      "This is why TLFDP integrates family development directly into leadership formation, rather than treating them as separate tracks.",
      "Leaders who cannot lead their own homes with integrity will struggle to sustain integrity anywhere else. Restoration starts at home.",
    ],
    author: "Rev. Samuel Girma",
    date: "2026-01-10",
    category: "Family",
    readTime: "4 min read",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
