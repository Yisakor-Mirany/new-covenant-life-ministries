"use client";

import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";

import { getHeroBook, getBookAvailability } from "@/data/books";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Book3D } from "@/components/books/book-3d";
import { AddToCartButton } from "@/components/books/add-to-cart-button";
import { WishlistButton } from "@/components/books/wishlist-button";
import { ShareButtons } from "@/components/resources/share-buttons";

export function BookHero() {
  const book = getHeroBook();
  const availability = getBookAvailability(book);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/60 to-background py-16 sm:py-20">
      <div className="bg-grid absolute inset-0 opacity-[0.04]" />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Featured Book</Badge>
            {availability !== "In Stock" && <Badge variant="accent">{availability}</Badge>}
          </div>

          <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {book.title}
          </h1>
          {book.titleAmharic && (
            <p className="mt-1 font-display text-2xl font-semibold text-primary">{book.titleAmharic}</p>
          )}
          {book.subtitle && <p className="mt-2 text-lg font-medium text-secondary">{book.subtitle}</p>}

          <p className="mt-2 text-sm font-medium text-muted-foreground">by {book.author}</p>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{book.description}</p>

          {book.releaseDate && (
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
              <CalendarClock className="h-4 w-4" />
              Releasing {formatDate(book.releaseDate)} — reserve your copy today
            </p>
          )}

          <AddToCartButton book={book} className="mt-6" />

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <WishlistButton book={book} variant="full" />
            <ShareButtons title={book.title} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <Book3D gradient={book.coverGradient} className="max-w-sm" />
        </motion.div>
      </div>
    </section>
  );
}
