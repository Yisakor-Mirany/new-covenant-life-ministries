import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { programs } from "@/data/programs";
import { generalFaqs } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramCard } from "@/components/shared/program-card";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore New Covenant Life Ministries' leadership development portfolio: TLFDP, Servant Leadership Development, Youth Leadership Development, and Christian Marriage Leadership.",
};

const whyOurPrograms = [
  "Rooted in Scripture and grounded in practical application",
  "Delivered by trained, experienced facilitators",
  "Designed for multiplication — graduates train others",
  "Paired with ongoing mentorship, not just a one-time event",
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Leadership Development for Every Season of Life"
        description="From family leadership to youth entrepreneurship and marriage restoration, explore our full portfolio of transformational programs."
      />
      <Breadcrumbs items={[{ label: "Programs" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Explore Our Portfolio"
            title="Four Pathways to Transformation"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, i) => (
              <ProgramCard key={program.slug} program={program} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Why Our Programs Work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Lasting, Multiplying Impact
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every NCLM program is built around a simple philosophy: teach truth, model it in
              community, and equip graduates to pass it on.
            </p>
            <ul className="mt-6 space-y-3">
              {whyOurPrograms.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold">Not Sure Where to Start?</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Reach out to our team and we&rsquo;ll help you find the right program for you,
                your marriage, your family, or your organization.
              </p>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
