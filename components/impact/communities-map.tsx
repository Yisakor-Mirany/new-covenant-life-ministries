"use client";

import * as React from "react";
import { MapPin } from "lucide-react";

import { regions } from "@/data/regions";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

export function CommunitiesMap() {
  const [active, setActive] = React.useState(regions[0]);

  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where We Serve"
          title="Communities Across Ethiopia"
          description="Select a region to see how NCLM programs are making an impact there."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-accent/80 p-8">
            <div className="bg-grid absolute inset-0 opacity-10" />
            <div className="relative grid grid-cols-3 gap-4">
              {regions.map((region) => (
                <button
                  key={region.name}
                  onClick={() => setActive(region)}
                  className={`flex flex-col items-center gap-1.5 rounded-xl p-3 text-white transition-colors ${
                    active.name === region.name ? "bg-white/25" : "hover:bg-white/10"
                  }`}
                >
                  <MapPin
                    className={`h-6 w-6 ${active.name === region.name ? "text-secondary" : "text-white/80"}`}
                  />
                  <span className="text-center text-xs font-medium leading-tight">
                    {region.name}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-8">
              <h3 className="font-display text-2xl font-bold">{active.name}</h3>
              <p className="mt-2 text-3xl font-bold text-primary">
                {active.leadersTrained.toLocaleString()}+
              </p>
              <p className="text-sm text-muted-foreground">leaders trained in this region</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.programs.map((program) => (
                  <span
                    key={program}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
