"use client";

import { donationImpact } from "@/data/donation-impact";
import { formatCurrency, cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

export function ImpactCards({
  amount,
  onSelect,
}: {
  amount: number | null;
  onSelect: (amount: number) => void;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where It Goes"
          title="Every Gift Has an Impact"
          description="Select an amount below to see it reflected in the donation form, or choose your own."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {donationImpact.map((impact, i) => (
            <Reveal key={impact.amount} delay={i * 0.06}>
              <button type="button" onClick={() => onSelect(impact.amount)} className="block w-full text-left">
                <Card
                  className={cn(
                    "h-full p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                    amount === impact.amount && "border-primary ring-2 ring-primary/30"
                  )}
                >
                  <p className="font-display text-2xl font-bold text-primary">
                    {formatCurrency(impact.amount)}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{impact.description}</p>
                </Card>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
