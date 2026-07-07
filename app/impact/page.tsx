import type { Metadata } from "next";

import { impactStats } from "@/data/stats";
import { partners } from "@/data/partners";
import { testimonials } from "@/data/testimonials";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatsSection } from "@/components/shared/stats-section";
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { PartnerLogos } from "@/components/shared/partner-logos";
import { CommunitiesMap } from "@/components/impact/communities-map";
import { VideoGallery } from "@/components/impact/video-gallery";
import { AnnualReports } from "@/components/impact/annual-reports";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See the measurable impact of New Covenant Life Ministries — statistics, stories, communities served, and annual reports.",
};

const galleryCaptions = [
  "Leadership Cohort Graduation",
  "Marriage Retreat Weekend",
  "Youth Entrepreneurship Fair",
  "Community Service Day",
  "Facilitator Training",
  "Family Restoration Seminar",
  "Annual Leadership Conference",
  "Mentorship Meetup",
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Transformation You Can Measure"
        description="Thousands of leaders trained, hundreds of marriages restored, and communities changed for the glory of God."
      />
      <Breadcrumbs items={[{ label: "Impact" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="By the Numbers" title="Our Reach Since Founding" />
          <div className="mt-14">
            <StatsSection stats={impactStats} />
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="Real Stories" title="Lives Truly Transformed" />
          <div className="mt-14">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <CommunitiesMap />

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="Trusted By" title="Our Partners" />
          <div className="mt-12">
            <PartnerLogos partners={partners} />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Moments of Impact" title="Gallery" />
          <div className="mt-14">
            <GalleryGrid captions={galleryCaptions} />
          </div>
        </div>
      </section>

      <VideoGallery />
      <AnnualReports />
    </>
  );
}
