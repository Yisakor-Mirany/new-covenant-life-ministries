import Link from "next/link";
import { CalendarDays, MapPin, Users2 } from "lucide-react";

import { cohorts } from "@/data/courses";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CohortsSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Training Calendar"
          title="Upcoming Cohorts"
          description="Applications are reviewed on a rolling basis. Seats are limited to preserve mentorship quality."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cohorts.map((cohort, i) => (
            <Reveal key={cohort.name} delay={i * 0.08}>
              <Card className="flex h-full flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{cohort.name}</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    Starts {formatDate(cohort.startDate)}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {cohort.format}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users2 className="h-4 w-4 text-primary" />
                    {cohort.seatsLeft} seats remaining
                  </p>
                </div>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/events">View Full Training Calendar</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
