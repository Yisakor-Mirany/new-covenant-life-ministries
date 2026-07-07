"use client";

import * as React from "react";
import { Banknote, Landmark, Repeat, Gift as GiftIcon } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const impactAmounts = [
  { amount: "$25", impact: "Provides a family devotional guide and workbook for one leader." },
  { amount: "$75", impact: "Sponsors one youth's entrepreneurship training for a month." },
  { amount: "$150", impact: "Funds a full marriage seminar registration for one couple." },
  { amount: "$500", impact: "Trains one leader through the full TLFDP program." },
];

export function DonateOptions() {
  const [frequency, setFrequency] = React.useState<"once" | "monthly">("once");
  const [open, setOpen] = React.useState(false);

  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
            <GiftIcon className="h-7 w-7" />
          </div>
          <h2 className="font-display text-3xl font-bold">Choose Your Gift</h2>
          <p className="text-muted-foreground">
            Every gift — one-time or recurring — directly funds leadership training, marriage
            restoration, and youth empowerment.
          </p>
          <Tabs value={frequency} onValueChange={(v) => setFrequency(v as "once" | "monthly")}>
            <TabsList>
              <TabsTrigger value="once">Give Once</TabsTrigger>
              <TabsTrigger value="monthly">
                <Repeat className="h-3.5 w-3.5" /> Give Monthly
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactAmounts.map((tier, i) => (
            <Reveal key={tier.amount} delay={i * 0.06}>
              <Card className="flex h-full flex-col p-6 text-center">
                <p className="font-display text-3xl font-bold text-primary">
                  {tier.amount}
                  {frequency === "monthly" && (
                    <span className="text-base font-medium text-muted-foreground">/mo</span>
                  )}
                </p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{tier.impact}</p>
                <Button className="mt-5 w-full" onClick={() => setOpen(true)}>
                  Give {tier.amount}
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <Button size="lg" variant="secondary" onClick={() => setOpen(true)}>
            <Banknote className="h-4 w-4" /> Give a Custom Amount
          </Button>
        </Reveal>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" /> Ways to Give
            </DialogTitle>
            <DialogDescription>
              We&rsquo;re setting up secure online giving. In the meantime, here&rsquo;s how to
              complete your gift:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <div className="rounded-xl border border-border p-4">
              <p className="font-semibold">Bank Transfer</p>
              <p className="mt-1 text-muted-foreground">
                Account Name: New Covenant Life Ministries
                <br />
                Bank: Commercial Bank of Ethiopia
                <br />
                Please reference your name and &ldquo;Donation&rdquo; in the transfer note.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="font-semibold">Contact Our Team</p>
              <p className="mt-1 text-muted-foreground">
                Email {siteConfig.email} or call {siteConfig.phone} and our team will help you
                complete your gift and send a receipt.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
