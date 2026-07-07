import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { WaysToServe } from "@/components/get-involved/ways-to-serve";
import { PartnershipSection } from "@/components/get-involved/partnership-section";
import { VolunteerForm } from "@/components/forms/volunteer-form";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, mentor, partner, or sponsor New Covenant Life Ministries as we raise servant leaders and restore families.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There's a Place for You Here"
        description="Whatever your gifting or capacity, there's a meaningful way for you to join this mission."
      />
      <Breadcrumbs items={[{ label: "Get Involved" }]} />

      <WaysToServe />

      <section id="volunteer" className="section-y bg-muted/30 scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Volunteer & Mentor"
            title="Apply to Serve"
            description="Tell us a bit about yourself and how you'd like to get involved — our team will follow up personally."
          />
          <div className="mx-auto mt-14 max-w-2xl">
            <Card className="p-8">
              <VolunteerForm />
            </Card>
          </div>
        </div>
      </section>

      <PartnershipSection />
    </>
  );
}
