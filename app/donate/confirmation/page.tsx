import type { Metadata } from "next";

import { DonationConfirmationContent } from "@/components/donate/donation-confirmation-content";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your donation to New Covenant Life Ministries has been received.",
};

export default function DonationConfirmationPage() {
  return (
    <section className="section-y">
      <div className="container-page">
        <DonationConfirmationContent />
      </div>
    </section>
  );
}
