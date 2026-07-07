import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const statements = [
  "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  "We believe the Bible is the inspired, infallible, authoritative Word of God.",
  "We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death, and bodily resurrection.",
  "We believe salvation is by grace alone, through faith alone, in Christ alone.",
  "We believe in the present ministry of the Holy Spirit, empowering believers to live godly lives.",
  "We believe marriage is a covenant between one man and one woman, designed by God as the foundation of the family.",
  "We believe every believer is called to servant leadership and the Great Commission.",
];

export function StatementOfFaith() {
  return (
    <section id="statement-of-faith" className="section-y scroll-mt-24">
      <div className="container-page">
        <SectionHeading eyebrow="Our Foundation" title="Statement of Faith" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <ul className="space-y-4">
            {statements.map((statement) => (
              <li key={statement} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">{statement}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
