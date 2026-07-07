import type { Metadata } from "next";

import { bookStoreTestimonials } from "@/data/book-reviews";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeaturedBooks } from "@/components/books/featured-books";
import { BookCatalog } from "@/components/books/book-catalog";
import { BundlesSection } from "@/components/books/bundles-section";
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel";
import { SupportMinistryCta } from "@/components/books/support-ministry-cta";

export const metadata: Metadata = {
  title: "Bookstore",
  description:
    "Browse books, manuals, Bible studies, and training resources from New Covenant Life Ministries. Every purchase supports our leadership, marriage, and youth programs.",
};

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="NCLM Bookstore"
        title="Resources That Form Leaders, Marriages, and Families"
        description="Books, manuals, and Bible studies written by our team — every purchase directly supports NCLM's ministry."
      />
      <Breadcrumbs items={[{ label: "Bookstore" }]} />

      <section className="section-y">
        <div className="container-page">
          <FeaturedBooks />
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading
            eyebrow="Browse the Bookstore"
            title="Find Your Next Read"
            description="Search or filter by category and format to find leadership books, youth resources, marriage guides, training manuals, and Bible studies."
          />
          <div className="mt-14">
            <BookCatalog />
          </div>
        </div>
      </section>

      <BundlesSection />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Reader Reviews" title="What Readers Are Saying" />
          <div className="mt-14">
            <TestimonialsCarousel testimonials={bookStoreTestimonials} />
          </div>
        </div>
      </section>

      <SupportMinistryCta />
    </>
  );
}
