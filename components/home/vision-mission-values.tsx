import { Eye, Target, Gem } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    body: "A generation of Christ-centered leaders whose transformed families and communities reflect the character of God across nations.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To raise servant leaders, restore families, and empower youth through biblically grounded, transformational leadership development.",
  },
  {
    icon: Gem,
    title: "Our Core Values",
    body: "Christ-centered integrity, servant leadership, family restoration, excellence, and multiplying impact through others.",
  },
];

export function VisionMissionValues() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Vision, Mission & Core Values"
          description="Everything we do flows from a single conviction: transformed leaders build transformed families, and transformed families build transformed nations."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <Card className="h-full p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
