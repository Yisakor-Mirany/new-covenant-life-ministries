import type { Metadata } from "next";

import { generalFaqs } from "@/data/faqs";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactForm } from "@/components/forms/contact-form";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with New Covenant Life Ministries — visit our office, call, email, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        description="Questions about a program, partnership, or how to get involved? Reach out — our team responds within 1–2 business days."
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="section-y">
        <div className="container-page">
          <ContactInfo />
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">Send Us a Message</h2>
            <Card className="mt-6 p-7">
              <ContactForm />
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold">Find Us</h2>
            <div className="mt-6">
              <ContactMap />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Before You Reach Out" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
