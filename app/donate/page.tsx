import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { DonateOptions } from "@/components/donate/donate-options";
import { OtherWays } from "@/components/donate/other-ways";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give to New Covenant Life Ministries and fuel leadership training, marriage restoration, and youth empowerment.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give Today"
        title="Your Gift Multiplies Transformation"
        description="Every gift trains a leader, restores a marriage, or empowers a young person to build a better future."
      />
      <Breadcrumbs items={[{ label: "Donate" }]} />
      <DonateOptions />
      <OtherWays />
    </>
  );
}
