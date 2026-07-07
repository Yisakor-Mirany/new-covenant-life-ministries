"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Printer } from "lucide-react";

import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShareButtons } from "@/components/resources/share-buttons";

const LAST_DONATION_KEY = "nclm-last-donation";

interface LastDonation {
  name: string;
  email: string;
  amount: number;
  currency: string;
  frequency: string;
  purpose: string;
  region: "international" | "local";
  paymentMethod: string;
  anonymous?: boolean;
}

export function DonationConfirmationContent() {
  const [donation, setDonation] = React.useState<LastDonation | null>(null);
  const [receiptNumber, setReceiptNumber] = React.useState("");

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- generates a display-only receipt number once on mount, not derivable during render
    setReceiptNumber(`NCLM-D-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
  }, []);

  React.useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(LAST_DONATION_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only read of sessionStorage, not derivable during render
      if (stored) setDonation(JSON.parse(stored));
    } catch {
      // ignore malformed donation data
    }
  }, []);

  const amountLabel = donation
    ? donation.region === "international"
      ? new Intl.NumberFormat("en-US", { style: "currency", currency: donation.currency }).format(
          donation.amount
        )
      : `ETB ${donation.amount.toLocaleString()}`
    : null;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col items-center gap-4 text-center">
        <CheckCircle2 className="h-16 w-16 text-accent" />
        <h1 className="font-display text-3xl font-bold">
          Thank You for Supporting New Covenant Life Ministries
        </h1>
        <p className="text-muted-foreground">
          Your generosity fuels servant leaders, restored marriages, and empowered youth. Our
          team will follow up with secure payment confirmation shortly.
        </p>
      </div>

      <Card className="mt-10 p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Donation Receipt</h2>
          <span className="text-sm text-muted-foreground">{receiptNumber}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{formatDate(new Date())}</p>
        <Separator className="my-4" />
        {donation ? (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Donor</span>
              <span className="font-medium">{donation.anonymous ? "Anonymous" : donation.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Purpose</span>
              <span className="font-medium">{donation.purpose}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frequency</span>
              <span className="font-medium">{donation.frequency}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-base font-semibold">
              <span>Amount</span>
              <span>{amountLabel}</span>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Donation details aren&rsquo;t available in this browser session, but your gift
            request has been received.
          </p>
        )}
      </Card>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" variant="outline" onClick={() => window.print()} className="print:hidden">
          <Printer className="h-4 w-4" /> Print / Save Receipt
        </Button>
        <div className="print:hidden">
          <ShareButtons title="I just supported New Covenant Life Ministries!" />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center print:hidden">
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/donate">Back to Donate</Link>
        </Button>
      </div>
    </div>
  );
}
