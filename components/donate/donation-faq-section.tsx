import { donationFaqs } from "@/data/donation-faqs";
import { SectionHeading } from "@/components/shared/section-heading";
import { FAQAccordion } from "@/components/shared/faq-accordion";

export function DonationFaqSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="Common Questions" title="Giving FAQs" />
        <div className="mt-14">
          <FAQAccordion faqs={donationFaqs} />
        </div>
      </div>
    </section>
  );
}
