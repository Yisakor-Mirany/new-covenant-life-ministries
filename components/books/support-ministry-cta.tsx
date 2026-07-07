import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function SupportMinistryCta() {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-primary to-primary px-8 py-16 text-center text-white sm:px-16">
          <div className="bg-grid absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <HeartHandshake className="h-7 w-7 text-secondary" />
            </div>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold sm:text-4xl">
              Support the Ministry Through Book Purchases
            </h2>
            <p className="mt-4 text-balance text-lg text-white/85">
              Every book sold directly funds NCLM&rsquo;s leadership training, marriage
              restoration, and youth empowerment programs. Reading and giving, in one purchase.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/books">
                  Shop the Bookstore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-invert">
                <Link href="/donate">Give a Direct Gift</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
