"use client";

import * as React from "react";

import type { WishlistItem } from "@/types";

type WishlistContextValue = {
  items: WishlistItem[];
  isWishlisted: (slug: string) => boolean;
  toggleItem: (item: WishlistItem) => void;
  removeItem: (slug: string) => void;
  itemCount: number;
};

const WishlistContext = React.createContext<WishlistContextValue | undefined>(undefined);

const STORAGE_KEY = "nclm-wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<WishlistItem[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only read of localStorage, not derivable during render
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore malformed wishlist data
    } finally {
      setHydrated(true);
    }
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const isWishlisted = React.useCallback(
    (slug: string) => items.some((item) => item.slug === slug),
    [items]
  );

  const toggleItem = React.useCallback((item: WishlistItem) => {
    setItems((prev) =>
      prev.some((line) => line.slug === item.slug)
        ? prev.filter((line) => line.slug !== item.slug)
        : [...prev, item]
    );
  }, []);

  const removeItem = React.useCallback((slug: string) => {
    setItems((prev) => prev.filter((line) => line.slug !== slug));
  }, []);

  const value = React.useMemo<WishlistContextValue>(
    () => ({ items, isWishlisted, toggleItem, removeItem, itemCount: items.length }),
    [items, isWishlisted, toggleItem, removeItem]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = React.useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
}
