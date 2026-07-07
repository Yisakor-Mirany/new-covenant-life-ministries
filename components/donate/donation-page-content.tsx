"use client";

import * as React from "react";

import { ImpactCards } from "@/components/donate/impact-cards";
import { DonationExperience } from "@/components/donate/donation-experience";

export function DonationPageContent() {
  const [amount, setAmount] = React.useState<number | null>(null);

  return (
    <>
      <ImpactCards amount={amount} onSelect={setAmount} />
      <DonationExperience amount={amount} onAmountChange={setAmount} />
    </>
  );
}
