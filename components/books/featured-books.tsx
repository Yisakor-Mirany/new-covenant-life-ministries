import Link from "next/link";

import { books } from "@/data/books";
import { SectionHeading } from "@/components/shared/section-heading";
import { BookCard } from "@/components/books/book-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedBooks({
  eyebrow = "Featured Books",
  title = "Reader Favorites",
  description,
  limit = 4,
  showCta = true,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  limit?: number;
  showCta?: boolean;
}) {
  const featured = books.filter((book) => book.featured).slice(0, limit);

  return (
    <div>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((book, i) => (
          <BookCard key={book.slug} book={book} delay={i * 0.08} />
        ))}
      </div>
      {showCta && (
        <Reveal className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/books">Visit the Bookstore</Link>
          </Button>
        </Reveal>
      )}
    </div>
  );
}
