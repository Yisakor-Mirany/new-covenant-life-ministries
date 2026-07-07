"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { books, bookCategories } from "@/data/books";
import type { Book } from "@/types";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookCard } from "@/components/books/book-card";

const categories = ["All", ...bookCategories] as const;
const formats = ["All Formats", "Paperback", "Digital Download"] as const;
const sortOptions = [
  { value: "newest", label: "Sort: Newest" },
  { value: "price-asc", label: "Sort: Price (Low to High)" },
  { value: "price-desc", label: "Sort: Price (High to Low)" },
  { value: "popularity", label: "Sort: Most Popular" },
] as const;

function matchesFormat(book: Book, format: (typeof formats)[number]) {
  if (format === "All Formats") return true;
  return book.format === format || book.format === "Both";
}

function sortBooks(list: Book[], sort: (typeof sortOptions)[number]["value"]) {
  const sorted = [...list];
  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => b.publishedYear - a.publishedYear);
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "popularity":
      return sorted.sort((a, b) => {
        if (a.bestseller !== b.bestseller) return a.bestseller ? -1 : 1;
        return b.rating - a.rating;
      });
    default:
      return sorted;
  }
}

export function BookCatalog() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<(typeof categories)[number]>("All");
  const [format, setFormat] = React.useState<(typeof formats)[number]>("All Formats");
  const [sort, setSort] = React.useState<(typeof sortOptions)[number]["value"]>("newest");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = books.filter((book) => {
      const matchesCategory = category === "All" || book.category === category;
      const matchesQuery =
        !q || book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q);
      return matchesCategory && matchesQuery && matchesFormat(book, format);
    });
    return sortBooks(matches, sort);
  }, [query, category, format, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by title or author…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Search books"
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Select value={sort} onValueChange={(v) => setSort(v as (typeof sortOptions)[number]["value"])}>
            <SelectTrigger aria-label="Sort books" className="w-full sm:w-56">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Tabs value={format} onValueChange={(v) => setFormat(v as (typeof formats)[number])}>
            <TabsList>
              {formats.map((f) => (
                <TabsTrigger key={f} value={f}>
                  {f}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Tabs
        value={category}
        onValueChange={(v) => setCategory(v as (typeof categories)[number])}
        className="mt-6 flex flex-col items-center"
      >
        <TabsList className="flex-wrap">
          {categories.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-8 w-full">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              No books match your search. Try a different keyword or category.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((book, i) => (
                <BookCard key={book.slug} book={book} delay={i * 0.05} />
              ))}
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
}
