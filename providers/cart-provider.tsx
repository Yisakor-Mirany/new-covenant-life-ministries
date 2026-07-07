"use client";

import * as React from "react";

import type { CartItem } from "@/types";

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (slug: string, format: CartItem["format"]) => void;
  updateQuantity: (slug: string, format: CartItem["format"], quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
};

const CartContext = React.createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "nclm-cart";

function sameLine(a: CartItem, slug: string, format: CartItem["format"]) {
  return a.slug === slug && a.format === format;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only read of localStorage, not derivable during render
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore malformed cart data
    } finally {
      setHydrated(true);
    }
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = React.useCallback((item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((line) => sameLine(line, item.slug, item.format));
      if (existing) {
        return prev.map((line) =>
          sameLine(line, item.slug, item.format)
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [...prev, { ...item, quantity }];
    });
  }, []);

  const removeItem = React.useCallback((slug: string, format: CartItem["format"]) => {
    setItems((prev) => prev.filter((line) => !sameLine(line, slug, format)));
  }, []);

  const updateQuantity = React.useCallback(
    (slug: string, format: CartItem["format"], quantity: number) => {
      setItems((prev) =>
        quantity <= 0
          ? prev.filter((line) => !sameLine(line, slug, format))
          : prev.map((line) =>
              sameLine(line, slug, format) ? { ...line, quantity } : line
            )
      );
    },
    []
  );

  const clearCart = React.useCallback(() => setItems([]), []);

  const subtotal = React.useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  const itemCount = React.useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = React.useMemo<CartContextValue>(
    () => ({ items, addItem, removeItem, updateQuantity, clearCart, subtotal, itemCount }),
    [items, addItem, removeItem, updateQuantity, clearCart, subtotal, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
