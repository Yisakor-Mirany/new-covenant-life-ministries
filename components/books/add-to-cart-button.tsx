"use client";

import * as React from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import type { Book } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AddToCartButton({ book, className }: { book: Book; className?: string }) {
  const { addItem } = useCart();
  const hasBoth = book.format === "Both";
  const [selected, setSelected] = React.useState<"Paperback" | "Digital Download">(
    hasBoth || book.format === "Paperback" ? "Paperback" : "Digital Download"
  );

  const price = selected === "Digital Download" ? book.digitalPrice ?? book.price : book.price;

  function handleAdd() {
    addItem({
      slug: book.slug,
      title: book.title,
      author: book.author,
      format: selected,
      price,
      coverGradient: book.coverGradient,
    });
    toast.success(`Added "${book.title}" (${selected}) to your cart.`);
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
      <div className="flex items-center gap-4">
        <p className="font-display text-2xl font-bold text-primary">{formatCurrency(price)}</p>
        <Button onClick={handleAdd} size="lg">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}
