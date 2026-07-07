import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Tag } from "lucide-react";

import { events, getEventBySlug } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EventRegisterForm } from "@/components/events/event-register-form";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      <PageHero eyebrow={event.category} title={event.title} description={event.description} />
      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: event.title }]} />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">Event Details</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{event.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5">
                <CalendarDays className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-medium">
                  {formatDate(event.date)}
                  {event.endDate ? ` – ${formatDate(event.endDate)}` : ""}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-medium">{event.location}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <Tag className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-medium">{event.category}</p>
              </div>
            </div>
          </div>

          <Card className="sticky top-24 h-fit p-7">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Registration</h3>
              <Badge variant={event.registrationOpen ? "accent" : "outline"}>
                {event.registrationOpen ? "Open" : "Coming Soon"}
              </Badge>
            </div>
            {event.registrationOpen ? (
              <EventRegisterForm eventTitle={event.title} />
            ) : (
              <p className="text-sm text-muted-foreground">
                Registration for this event will open soon. Check back or subscribe to our
                newsletter for updates.
              </p>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}
