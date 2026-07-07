"use client";

import { Gift } from "lucide-react";
import { toast } from "sonner";

import { bookBundles } from "@/data/book-bundles";
import { getBookBySlug } from "@/data/books";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/providers/cart-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookCover } from "@/components/books/book-cover";

export function BundlesSection() {
  const { addItem } = useCart();

  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Donation + Book Bundle"
          title="Bundle & Give"
          description="Curated book bundles at a discount — each one includes a built-in gift that funds NCLM scholarships and program support."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {bookBundles.map((bundle, i) => {
            const bundleBooks = bundle.bookSlugs.map(getBookBySlug).filter(Boolean);
            return (
              <Reveal key={bundle.slug} delay={i * 0.08}>
                <Card className="flex h-full flex-col p-6">
                  <div className="flex -space-x-6">
                    {bundleBooks.map((book) => (
                      <BookCover
                        key={book!.slug}
                        gradient={book!.coverGradient}
                        className="w-16 shrink-0 ring-4 ring-card"
                        iconClassName="h-5 w-5"
                      />
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{bundle.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{bundle.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="accent">
                      <Gift className="h-3 w-3" /> {formatCurrency(bundle.donationIncluded)} gift included
                    </Badge>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-display text-xl font-bold text-primary">
                      {formatCurrency(bundle.price)}
                    </p>
                    <Button
                      onClick={() => {
                        addItem({
                          slug: bundle.slug,
                          title: bundle.title,
                          author: "NCLM Bookstore",
                          format: "Bundle",
                          price: bundle.price,
                          coverGradient: bundleBooks[0]?.coverGradient ?? "from-primary/80 to-primary",
                        });
                        toast.success(`Added "${bundle.title}" to your cart.`);
                      }}
                    >
                      Add Bundle
                    </Button>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
