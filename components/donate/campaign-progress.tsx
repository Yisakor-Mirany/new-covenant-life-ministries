"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

import { campaigns } from "@/data/campaigns";
import { formatCurrency } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

function ProgressBar({ percent }: { percent: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="h-3 w-full overflow-hidden rounded-full bg-muted">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${percent}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function CampaignProgress() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="Active Campaigns" title="Fundraising Progress" />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {campaigns.map((campaign, i) => {
            const percent = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
            return (
              <Reveal key={campaign.slug} delay={i * 0.1}>
                <Card className="h-full p-7">
                  <h3 className="font-display text-lg font-semibold">{campaign.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{campaign.description}</p>
                  <div className="mt-5">
                    <ProgressBar percent={percent} />
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-primary">
                        {formatCurrency(campaign.raised)} raised
                      </span>
                      <span className="text-muted-foreground">
                        of {formatCurrency(campaign.goal)} goal
                      </span>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
