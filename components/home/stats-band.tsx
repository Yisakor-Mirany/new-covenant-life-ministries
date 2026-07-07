import { heroStats } from "@/data/stats";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatsSection } from "@/components/shared/stats-section";

export function StatsBand() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Impact"
          title="Measurable Transformation Across Communities"
        />
        <div className="mt-12">
          <StatsSection stats={heroStats} />
        </div>
      </div>
    </section>
  );
}
