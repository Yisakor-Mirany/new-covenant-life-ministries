import type { Metadata } from "next";

import { generalFaqs } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogList } from "@/components/resources/blog-list";
import { DownloadsSection } from "@/components/resources/downloads-section";
import { SermonsSection } from "@/components/resources/sermons-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Blog articles, leadership teaching, sermons, and downloadable resources from New Covenant Life Ministries.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Teaching and Tools for the Journey"
        description="Articles, sermons, and downloadable resources to support your leadership, marriage, and family life."
      />
      <Breadcrumbs items={[{ label: "Resources" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Our Blog" title="Articles & Reflections" />
          <div className="mt-14">
            <BlogList />
          </div>
        </div>
      </section>

      <SermonsSection />
      <DownloadsSection />

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="Have Questions?" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
