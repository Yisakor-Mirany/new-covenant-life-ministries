import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpen, Calendar, Layers } from "lucide-react";

import { books, getBookBySlug } from "@/data/books";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { BookCover } from "@/components/books/book-cover";
import { StarRating } from "@/components/books/star-rating";
import { AddToCartButton } from "@/components/books/add-to-cart-button";
import { AuthorBio } from "@/components/books/author-bio";
import { BookReviewsList } from "@/components/books/book-reviews-list";
import { RelatedBooks } from "@/components/books/related-books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  return { title: book.title, description: book.description };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Bookstore", href: "/books" }, { label: book.title }]} />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <BookCover gradient={book.coverGradient} className="shadow-lg" iconClassName="h-14 w-14" />
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{book.category}</Badge>
              {book.bestseller && <Badge variant="secondary">Bestseller</Badge>}
              <Badge variant="outline">{book.format}</Badge>
            </div>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {book.title}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">by {book.author}</p>
            <StarRating rating={book.rating} showValue className="mt-3" />

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {book.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" /> {book.pages} pages
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> Published {book.publishedYear}
              </span>
              <span className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" /> {book.format}
              </span>
            </div>

            <AddToCartButton book={book} className="mt-8" />

            <div className="mt-10">
              <AuthorBio name={book.author} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold">Reader Reviews</h2>
          <div className="mt-8">
            <BookReviewsList reviews={book.reviews} />
          </div>
        </div>
      </section>

      <RelatedBooks current={book} />
    </>
  );
}
