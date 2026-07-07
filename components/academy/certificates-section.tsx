import { Award, ScrollText, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

const certificates = [
  {
    icon: Award,
    title: "Certificate of Completion",
    description: "Awarded to graduates who complete a full foundational or intermediate course.",
  },
  {
    icon: ShieldCheck,
    title: "Facilitator Certification",
    description: "Advanced credential for graduates trained to lead their own program cohorts.",
  },
  {
    icon: ScrollText,
    title: "Marriage Mentor Certification",
    description: "Specialized credential for couples trained to mentor and counsel others.",
  },
];

export function CertificatesSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Recognized Achievement"
          title="Certificates That Mean Something"
          description="Our certifications reflect real competency — biblical knowledge, practical skill, and character formation."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <Card className="h-full p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary-foreground">
                  <cert.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{cert.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cert.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
