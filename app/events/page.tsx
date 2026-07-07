import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { EventsList } from "@/components/events/events-list";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming conferences, retreats, workshops, and training events hosted by New Covenant Life Ministries.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gather, Grow, and Get Equipped"
        description="From our flagship annual conference to local workshops and retreats, there's a place for you to grow with us."
      />
      <Breadcrumbs items={[{ label: "Events" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Upcoming Events" title="Our Full Calendar" />
          <div className="mt-14">
            <EventsList />
          </div>
        </div>
      </section>
    </>
  );
}
