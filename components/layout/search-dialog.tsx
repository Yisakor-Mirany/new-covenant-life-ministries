"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchIndex } from "@/lib/search-index";

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.description.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Search the site"
        className="rounded-full"
        onClick={() => setOpen(true)}
      >
        <Search className="h-[1.15rem] w-[1.15rem]" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-24 max-w-xl translate-y-0">
          <DialogHeader>
            <DialogTitle>Search NCLM</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            placeholder="Search programs, events, articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="mt-4 max-h-80 space-y-1 overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No results for &ldquo;{query}&rdquo;
              </p>
            )}
            {results.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium">{entry.title}</span>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    {entry.group}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-sm text-muted-foreground">
                  {entry.description}
                </p>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
