import type { BookBundle } from "@/types";

export const bookBundles: BookBundle[] = [
  {
    slug: "leadership-starter-bundle",
    title: "Leadership Starter Bundle",
    description:
      "Everything a new leader needs: three foundational reads on servant leadership, plus a $10 gift toward scholarships for leaders who can't afford program fees.",
    bookSlugs: [
      "the-weight-of-servant-leadership",
      "foundations-of-servant-leadership",
      "leading-in-community",
    ],
    price: 34.99,
    donationIncluded: 10,
  },
  {
    slug: "marriage-restoration-bundle",
    title: "Marriage Restoration Bundle",
    description:
      "Two of our most-loved marriage resources, bundled together with a $10 gift toward NCLM's marriage counseling scholarship fund.",
    bookSlugs: ["restoring-the-covenant-home", "building-a-marriage-that-lasts-book"],
    price: 26.99,
    donationIncluded: 10,
  },
  {
    slug: "next-generation-bundle",
    title: "Next Generation Bundle",
    description:
      "Equip a young leader in your life with both of our youth development titles, plus a $5 gift supporting NCLM's youth microloan fund.",
    bookSlugs: ["raising-kingdom-minded-youth", "the-young-entrepreneurs-bible-study"],
    price: 21.99,
    donationIncluded: 5,
  },
];

export function getBundleBySlug(slug: string) {
  return bookBundles.find((bundle) => bundle.slug === slug);
}
