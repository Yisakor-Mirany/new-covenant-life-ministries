import { Cross, HeartHandshake, Home as HomeIcon, Sparkles, Trophy, Users } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Cross,
    title: "Christ-Centered",
    description: "Every program, relationship, and decision flows from a biblical worldview.",
  },
  {
    icon: HeartHandshake,
    title: "Servant Leadership",
    description: "We lead as Christ led — through humility and sacrificial service.",
  },
  {
    icon: HomeIcon,
    title: "Family Restoration",
    description: "We believe the family is the foundation of a healthy society.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We steward every resource and relationship with integrity and excellence.",
  },
  {
    icon: Users,
    title: "Multiplication",
    description: "We train leaders to train others, multiplying impact for generations.",
  },
  {
    icon: Sparkles,
    title: "Hope",
    description: "We believe every person and family can be transformed by God's grace.",
  },
];

export function CoreValues() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="What We Believe" title="Our Core Values" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <Card className="h-full p-7 transition-shadow hover:shadow-md">
                <value.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
