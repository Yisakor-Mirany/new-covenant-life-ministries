import type { Metadata } from "next";

import { bookStoreTestimonials } from "@/data/book-reviews";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { BookHero } from "@/components/books/book-hero";
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
      <BookHero />
      <Breadcrumbs items={[{ label: "Bookstore" }]} />

      <section className="section-y">
        <div className="container-page">
          <FeaturedBooks />
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <FeaturedBooks
            eyebrow="Just Released"
            title="New Releases"
            description="The newest additions to the NCLM library."
            filter={(book) => Boolean(book.newRelease)}
            showCta={false}
          />
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <FeaturedBooks
            eyebrow="Reader Favorites"
            title="Best Sellers"
            description="The books our readers recommend most."
            filter={(book) => Boolean(book.bestseller)}
            showCta={false}
          />
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Browse the Bookstore"
            title="Find Your Next Read"
            description="Search, sort, or filter by category and format to find leadership books, youth resources, marriage guides, training manuals, and Bible studies."
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
