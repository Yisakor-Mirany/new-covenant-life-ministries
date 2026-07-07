"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";

import type { Book } from "@/types";
import { useWishlist } from "@/providers/wishlist-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function WishlistButton({
  book,
  variant = "icon",
  className,
}: {
  book: Book;
  variant?: "icon" | "full";
  className?: string;
}) {
  const { isWishlisted, toggleItem } = useWishlist();
  const active = isWishlisted(book.slug);

  function handleToggle() {
    toggleItem({
      slug: book.slug,
      title: book.title,
      author: book.author,
      price: book.price,
      coverGradient: book.coverGradient,
    });
    toast.success(active ? `Removed "${book.title}" from your wishlist.` : `Added "${book.title}" to your wishlist.`);
  }

  if (variant === "full") {
    return (
      <Button variant="outline" size="lg" onClick={handleToggle} className={className}>
        <Heart className={cn("h-4 w-4", active && "fill-destructive text-destructive")} />
        {active ? "Wishlisted" : "Add to Wishlist"}
      </Button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-white",
        className
      )}
    >
      <Heart className={cn("h-4 w-4", active ? "fill-destructive text-destructive" : "text-foreground")} />
    </button>
  );
}
