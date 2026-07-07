import { partners } from "@/data/partners";
import { SectionHeading } from "@/components/shared/section-heading";
import { PartnerLogos } from "@/components/shared/partner-logos";

export function PartnersSection() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="Trusted By" title="Our Partners in Ministry" />
        <div className="mt-12">
          <PartnerLogos partners={partners} />
        </div>
      </div>
    </section>
  );
}
