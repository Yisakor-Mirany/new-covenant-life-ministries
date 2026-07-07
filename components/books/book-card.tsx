import Link from "next/link";

import type { Book } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { BookCover } from "@/components/books/book-cover";
import { StarRating } from "@/components/books/star-rating";

export function BookCard({ book, delay = 0 }: { book: Book; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <Link href={`/books/${book.slug}`} className="block">
          <BookCover
            gradient={book.coverGradient}
            className="transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
        <div className="mt-4 flex flex-1 flex-col">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{book.category}</Badge>
            {book.bestseller && <Badge variant="secondary">Bestseller</Badge>}
          </div>
          <h3 className="mt-3 font-display text-base font-semibold leading-snug">
            <Link href={`/books/${book.slug}`}>{book.title}</Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
          <StarRating rating={book.rating} className="mt-2" />
          <div className="mt-auto flex items-center justify-between pt-4">
            <p className="font-display text-lg font-bold text-primary">
              {formatCurrency(book.format === "Digital Download" ? book.digitalPrice ?? book.price : book.price)}
            </p>
            <Link
              href={`/books/${book.slug}`}
              className="text-sm font-semibold text-primary hover:underline"
            >
              View Book
            </Link>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
