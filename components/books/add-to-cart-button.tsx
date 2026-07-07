"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingCart, Zap } from "lucide-react";
import { toast } from "sonner";

import type { Book } from "@/types";
import { getBookAvailability } from "@/data/books";
import { formatCurrency, cn } from "@/lib/utils";
import { useCart } from "@/providers/cart-provider";
import { Button } from "@/components/ui/button";

export function AddToCartButton({
  book,
  className,
  showBuyNow = true,
  showQuantity = true,
}: {
  book: Book;
  className?: string;
  showBuyNow?: boolean;
  showQuantity?: boolean;
}) {
  const router = useRouter();
  const { addItem } = useCart();
  const hasBoth = book.format === "Both";
  const [selected, setSelected] = React.useState<"Paperback" | "Digital Download">(
    hasBoth || book.format === "Paperback" ? "Paperback" : "Digital Download"
  );
  const [quantity, setQuantity] = React.useState(1);

  const availability = getBookAvailability(book);
  const outOfStock = availability === "Out of Stock";
  const isPreorder = availability === "Preorder";

  const price = selected === "Digital Download" ? book.digitalPrice ?? book.price : book.price;

  function handleAdd() {
    addItem(
      {
        slug: book.slug,
        title: book.title,
        author: book.author,
        format: selected,
        price,
        coverGradient: book.coverGradient,
      },
      quantity
    );
    toast.success(
      `Added ${quantity} × "${book.title}" (${selected}) to your cart${isPreorder ? " — preorder" : ""}.`
    );
  }

  function handleBuyNow() {
    handleAdd();
    router.push("/books/checkout");
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {hasBoth && (
        <div className="inline-flex w-fit rounded-full bg-muted p-1">
          {(["Paperback", "Digital Download"] as const).map((format) => (
            <button
              key={format}
              type="button"
              onClick={() => setSelected(format)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                selected === format
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {format}
            </button>
          ))}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <p className="font-display text-2xl font-bold text-primary">{formatCurrency(price)}</p>
        {showQuantity && (
          <div className="inline-flex items-center gap-2 rounded-full border border-input px-1.5 py-1">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-5 text-center text-sm font-medium">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleAdd} size="lg" disabled={outOfStock}>
          <ShoppingCart className="h-4 w-4" /> {isPreorder ? "Preorder Now" : "Add to Cart"}
        </Button>
        {showBuyNow && (
          <Button onClick={handleBuyNow} size="lg" variant="secondary" disabled={outOfStock}>
            <Zap className="h-4 w-4" /> Buy Now
          </Button>
        )}
      </div>
      {outOfStock && <p className="text-sm text-destructive">Currently out of stock.</p>}
    </div>
  );
}
