import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Layers, Quote, Target, Users } from "lucide-react";

import { programs, getProgramBySlug } from "@/data/programs";
import { getIcon } from "@/lib/icon-map";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const Icon = getIcon(program.icon);
  const galleryCaptions = [
    `${program.acronym ?? program.name} — Cohort Session`,
    "Small Group Discussion",
    "Graduation & Commissioning",
    "Community Outreach",
  ];

  return (
    <>
      <PageHero eyebrow={program.acronym ?? "Program"} title={program.name} description={program.shortDescription} />
      <Breadcrumbs items={[{ label: "Programs", href: "/programs" }, { label: program.acronym ?? program.name }]} />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              {/* eslint-disable-next-line react-hooks/static-components -- icon name always resolves to the same stable lucide component reference */}
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {program.overview}
            </p>

            <h3 className="mt-10 font-display text-2xl font-bold">Objectives</h3>
            <ul className="mt-4 space-y-3">
              {program.objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="sticky top-24 p-7">
              <h3 className="font-display text-lg font-semibold">Quick Facts</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <dt className="text-muted-foreground">Duration</dt>
                    <dd className="font-medium">{program.duration}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="h-4 w-4 text-primary" />
                  <div>
                    <dt className="text-muted-foreground">Format</dt>
                    <dd className="font-medium">{program.format}</dd>
                  </div>
                </div>
              </dl>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/contact">Register Your Interest</Link>
              </Button>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="Who It's For" title="Target Audience" align="left" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {program.targetAudience.map((audience, i) => (
              <Reveal key={audience} delay={i * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-5">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{audience}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="What You'll Learn" title="Curriculum" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {program.curriculum.map((module, i) => (
              <Reveal key={module.title} delay={i * 0.08}>
                <Card className="h-full p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{module.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="The Results" title="Expected Outcomes" />
          <div className="mx-auto mt-10 max-w-2xl space-y-3">
            {program.outcomes.map((outcome) => (
              <Reveal key={outcome}>
                <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium">{outcome}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="A Glimpse Inside" title="Program Gallery" />
          <div className="mt-14">
            <GalleryGrid captions={galleryCaptions} />
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="Testimony" title="Success Stories" />
          <div className="mx-auto mt-14 max-w-2xl space-y-6">
            {program.successStories.map((story) => (
              <Reveal key={story.name}>
                <Card className="p-8 text-center">
                  <Quote className="mx-auto h-8 w-8 text-secondary/70" />
                  <blockquote className="mt-4 text-balance font-display text-xl font-medium">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 font-semibold">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Have Questions?" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQAccordion faqs={program.faqs} />
          </div>
        </div>
      </section>

      <section className="section-y bg-primary text-white">
        <div className="container-page">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <Badge className="bg-white/15 text-white">{program.acronym ?? "Program"}</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-white/85">
              Spaces are limited each cohort. Register your interest today and our team will
              be in touch with next steps.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Register Now</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
