import { BookOpen, Sparkles } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

export function HistorySection() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Our History
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From a Small Gathering to a Movement
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              New Covenant Life Ministries began in 2009 as a small gathering of church
              leaders meeting to pray for their families and congregations. What started as
              informal mentorship grew into a formal ministry in 2012, built on a simple
              conviction: leaders who are transformed at home transform everything they touch.
            </p>
            <p>
              Since then, we have trained thousands of leaders, strengthened hundreds of
              marriages, and equipped a rising generation of young leaders — always rooted in
              Scripture, always centered on Christ.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">Why We Exist</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Broken leadership breaks families, and broken families break nations. We exist
                to reverse that cycle — one leader, one marriage, one young person at a time.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:mt-0">
              <Sparkles className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 font-display text-lg font-semibold">Our Conviction</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Real transformation is generational. We don&rsquo;t just train leaders — we
                equip them to multiply into others.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
