import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import type { EventItem } from "@/types";
import { formatDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function EventCard({ event, delay = 0 }: { event: EventItem; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{event.category}</Badge>
          {event.registrationOpen ? (
            <span className="text-xs font-semibold text-accent">Registration Open</span>
          ) : (
            <span className="text-xs font-semibold text-muted-foreground">Coming Soon</span>
          )}
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold">
          <Link href={`/events/${event.slug}`}>{event.title}</Link>
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            {formatDate(event.date)}
            {event.endDate ? ` – ${formatDate(event.endDate)}` : ""}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {event.location}
          </p>
        </div>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{event.description}</p>
        <Button asChild className="mt-5 w-full" variant={event.registrationOpen ? "default" : "outline"}>
          <Link href={`/events/${event.slug}`}>
            {event.registrationOpen ? "Register Now" : "View Details"}
          </Link>
        </Button>
      </Card>
    </Reveal>
  );
}
