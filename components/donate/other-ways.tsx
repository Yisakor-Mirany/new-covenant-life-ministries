import { Package, ScrollText, Building2 } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

const otherWays = [
  {
    icon: Package,
    title: "In-Kind Giving",
    description:
      "Donate books, equipment, or materials that directly support our training centers and programs.",
  },
  {
    icon: Building2,
    title: "Corporate Sponsorship",
    description:
      "Sponsor a cohort, event, or scholarship fund as part of your company's giving program.",
  },
  {
    icon: ScrollText,
    title: "Legacy & Planned Giving",
    description:
      "Include New Covenant Life Ministries in your estate planning to leave a lasting legacy.",
  },
];

export function OtherWays() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="More Ways to Give" title="Beyond a One-Time Gift" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {otherWays.map((way, i) => (
            <Reveal key={way.title} delay={i * 0.08}>
              <Card className="h-full p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <way.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{way.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{way.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
