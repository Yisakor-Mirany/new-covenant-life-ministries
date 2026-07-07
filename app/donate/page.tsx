import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { DonationHero } from "@/components/donate/donation-hero";
import { DonationPageContent } from "@/components/donate/donation-page-content";
import { SecureBadges } from "@/components/donate/secure-badges";
import { CampaignProgress } from "@/components/donate/campaign-progress";
import { DonorTestimonialsSection } from "@/components/donate/donor-testimonials-section";
import { OtherWays } from "@/components/donate/other-ways";
import { DonationFaqSection } from "@/components/donate/donation-faq-section";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give to New Covenant Life Ministries and fuel leadership training, marriage restoration, and youth empowerment. Local Ethiopian and international payment options available.",
};

export default function DonatePage() {
  return (
    <>
      <DonationHero />
      <Breadcrumbs items={[{ label: "Donate" }]} />
      <DonationPageContent />
      <SecureBadges />
      <CampaignProgress />
      <DonorTestimonialsSection />
      <OtherWays />
      <DonationFaqSection />
    </>
  );
}
