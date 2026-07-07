"use client";

import { events } from "@/data/events";
import { EventCard } from "@/components/shared/event-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Conference", "Retreat", "Workshop", "Training", "Community"] as const;

export function EventsList() {
  return (
    <Tabs defaultValue="All" className="flex flex-col items-center">
      <TabsList className="flex-wrap">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => {
        const filtered =
          category === "All" ? events : events.filter((e) => e.category === category);
        return (
          <TabsContent key={category} value={category} className="w-full">
            {filtered.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">
                No {category.toLowerCase()} events scheduled right now — check back soon.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((event, i) => (
                  <EventCard key={event.slug} event={event} delay={i * 0.06} />
                ))}
              </div>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
