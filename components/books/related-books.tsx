import { books } from "@/data/books";
import type { Book } from "@/types";
import { BookCard } from "@/components/books/book-card";

export function RelatedBooks({ current }: { current: Book }) {
  const related = books
    .filter((book) => book.slug !== current.slug && book.category === current.category)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <h2 className="text-center font-display text-2xl font-bold">Related Resources</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((book, i) => (
            <BookCard key={book.slug} book={book} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
