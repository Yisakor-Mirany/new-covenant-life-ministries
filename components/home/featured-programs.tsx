import Link from "next/link";

import { programs } from "@/data/programs";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramCard } from "@/components/shared/program-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedPrograms() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Programs"
          title="Leadership Development That Transforms"
          description="From family leadership to youth entrepreneurship, our programs meet leaders where they are and equip them for lasting impact."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <ProgramCard key={program.slug} program={program} delay={i * 0.1} />
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
