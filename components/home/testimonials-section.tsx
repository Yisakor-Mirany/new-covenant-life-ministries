import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel";

export function TestimonialsSection() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="Changed Lives" title="Stories of Transformation" />
        <div className="mt-14">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
