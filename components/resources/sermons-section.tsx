import { PlayCircle } from "lucide-react";

import { sermons } from "@/data/downloads";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

export function SermonsSection() {
  return (
    <section id="sermons" className="section-y bg-muted/30 scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Sermons & Teaching"
          title="Recent Teaching Series"
          description="Messages from our team on leadership, family, and faith."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, i) => (
            <Reveal key={sermon.title} delay={i * 0.08}>
              <Card className="flex h-full items-start gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PlayCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    {sermon.series}
                  </p>
                  <h3 className="mt-1 font-display font-semibold leading-snug">
                    {sermon.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {sermon.speaker} &middot; {formatDate(sermon.date)}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
