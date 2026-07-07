"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { useCart } from "@/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { CheckoutForm } from "@/components/books/checkout-form";

export function CheckoutPageContent() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        <h2 className="font-display text-xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground">Browse the bookstore to find your next read.</p>
        <Button asChild size="lg">
          <Link href="/books">Visit the Bookstore</Link>
        </Button>
      </div>
    );
  }

  return <CheckoutForm />;
}
