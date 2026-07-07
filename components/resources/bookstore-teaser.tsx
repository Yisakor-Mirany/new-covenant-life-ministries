import { FeaturedBooks } from "@/components/books/featured-books";

export function BookstoreTeaser() {
  return (
    <section id="bookstore" className="section-y scroll-mt-24">
      <div className="container-page">
        <FeaturedBooks
          eyebrow="NCLM Bookstore"
          title="Books & Publications"
          description="Own the teaching. Browse books, manuals, and Bible studies written by our team — every purchase supports NCLM's ministry."
        />
      </div>
    </section>
  );
}
