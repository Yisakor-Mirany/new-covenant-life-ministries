import type { Metadata } from "next";
import Link from "next/link";

import { timeline } from "@/data/timeline";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/shared/timeline";
import { HistorySection } from "@/components/about/history-section";
import { CoreValues } from "@/components/about/core-values";
import { StatementOfFaith } from "@/components/about/statement-of-faith";
import { FounderSection } from "@/components/about/founder-section";
import { LeadershipGrid } from "@/components/about/leadership-grid";
import { OrgStructure } from "@/components/about/org-structure";
import { FundingModel } from "@/components/about/funding-model";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the history, vision, mission, leadership, and statement of faith of New Covenant Life Ministries.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Raising Leaders Who Restore Families and Nations"
        description="Discover the story, convictions, and people behind New Covenant Life Ministries."
      />
      <Breadcrumbs items={[{ label: "About" }]} />
      <HistorySection />

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="Our Journey" title="A History of Faithful Growth" />
          <div className="mt-14">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      <CoreValues />
      <StatementOfFaith />
      <FounderSection />
      <LeadershipGrid />
      <OrgStructure />
      <FundingModel />

      <section className="section-y">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold">Join Us in This Work</h2>
          <p className="max-w-xl text-muted-foreground">
            Whether through prayer, partnership, or giving, there are many ways to be part of
            what God is doing through New Covenant Life Ministries.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
