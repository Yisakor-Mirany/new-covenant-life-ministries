import { donorTestimonials } from "@/data/donor-testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel";

export function DonorTestimonialsSection() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="Our Donors" title="Why They Give" />
        <div className="mt-14">
          <TestimonialsCarousel testimonials={donorTestimonials} />
        </div>
      </div>
    </section>
  );
}
