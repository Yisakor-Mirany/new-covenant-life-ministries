"use client";

import * as React from "react";
import Link from "next/link";
import { Eye } from "lucide-react";

import type { Book } from "@/types";
import { getBookAvailability } from "@/data/books";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookCover } from "@/components/books/book-cover";
import { StarRating } from "@/components/books/star-rating";
import { AddToCartButton } from "@/components/books/add-to-cart-button";

export function QuickViewDialog({ book }: { book: Book }) {
  const [open, setOpen] = React.useState(false);
  const availability = getBookAvailability(book);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-1.5 rounded-full bg-black/70 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
      >
        <Eye className="h-3.5 w-3.5" /> Quick View
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="sr-only">{book.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 sm:grid-cols-2">
            <BookCover gradient={book.coverGradient} />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{book.category}</Badge>
                {book.bestseller && <Badge variant="secondary">Bestseller</Badge>}
                {availability !== "In Stock" && <Badge variant="accent">{availability}</Badge>}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{book.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">by {book.author}</p>
              {book.reviews.length > 0 && <StarRating rating={book.rating} showValue className="mt-2" />}
              <p className="mt-3 text-sm text-muted-foreground">{book.description}</p>
              <AddToCartButton book={book} className="mt-5" />
              <Link
                href={`/books/${book.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                onClick={() => setOpen(false)}
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
