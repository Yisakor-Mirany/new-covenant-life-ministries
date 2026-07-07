"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import { useWishlist } from "@/providers/wishlist-provider";
import { useCart } from "@/providers/cart-provider";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { BookCover } from "@/components/books/book-cover";

export function WishlistSheet() {
  const { items, itemCount, removeItem } = useWishlist();
  const { addItem } = useCart();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Open wishlist">
          <Heart className="h-[1.15rem] w-[1.15rem]" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-secondary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Your Wishlist</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <Heart className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Your wishlist is empty.</p>
            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link href="/books">Browse the Bookstore</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <div className="mt-4 flex-1 space-y-4">
            {items.map((item) => (
              <div key={item.slug} className="flex gap-3">
                <Link href={`/books/${item.slug}`} onClick={() => setOpen(false)}>
                  <BookCover gradient={item.coverGradient} className="w-16 shrink-0" iconClassName="h-5 w-5" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <Link href={`/books/${item.slug}`} onClick={() => setOpen(false)} className="text-sm font-semibold leading-snug hover:underline">
                    {item.title}
                  </Link>
                  <p className="text-xs text-muted-foreground">{item.author}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">{formatCurrency(item.price)}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        addItem({
                          slug: item.slug,
                          title: item.title,
                          author: item.author,
                          format: "Paperback",
                          price: item.price,
                          coverGradient: item.coverGradient,
                        });
                        toast.success(`Added "${item.title}" to your cart.`);
                      }}
                    >
                      <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
                    </Button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.slug)}
                  aria-label={`Remove ${item.title} from wishlist`}
                  className="h-fit text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
