import { FeaturedBooks } from "@/components/books/featured-books";

export function FeaturedBooksSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <FeaturedBooks
          eyebrow="NCLM Bookstore"
          title="Books That Build Leaders and Families"
          description="Take the teaching home. Every book purchase supports NCLM's leadership, marriage, and youth programs."
        />
      </div>
    </section>
  );
}
