"use client";

import * as React from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

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

export function CartSheet() {
  const { items, itemCount, subtotal, updateQuantity, removeItem } = useCart();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Open cart">
          <ShoppingBag className="h-[1.15rem] w-[1.15rem]" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-secondary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link href="/books">Browse the Bookstore</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="mt-4 flex-1 space-y-4">
              {items.map((item) => (
                <div key={`${item.slug}-${item.format}`} className="flex gap-3">
                  <BookCover gradient={item.coverGradient} className="w-16 shrink-0" iconClassName="h-5 w-5" />
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-semibold leading-snug">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.format}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.format, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-input hover:bg-muted"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.format, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-input hover:bg-muted"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug, item.format)}
                    aria-label={`Remove ${item.title}`}
                    className="h-fit text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-4 border-t border-border pt-4">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <SheetClose asChild>
                <Button asChild size="lg" className="w-full">
                  <Link href="/books/checkout">Proceed to Checkout</Link>
                </Button>
              </SheetClose>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
