import { Mail } from "lucide-react";

import { NewsletterForm } from "@/components/shared/newsletter-form";
import { Reveal } from "@/components/shared/reveal";

export function NewsletterSection() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
            <Mail className="h-7 w-7" />
          </div>
          <h2 className="font-display text-3xl font-bold">Stay Connected</h2>
          <p className="text-lg text-muted-foreground">
            Get stories of transformation, upcoming events, and ministry updates delivered
            straight to your inbox.
          </p>
          <NewsletterForm className="mt-2 w-full max-w-md justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
