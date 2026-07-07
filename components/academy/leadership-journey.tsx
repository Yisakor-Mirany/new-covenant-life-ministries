import { Compass, BookOpen, Users, HeartHandshake, Rocket } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  { icon: Compass, title: "Discover", description: "Assess your calling and leadership gifting." },
  { icon: BookOpen, title: "Learn", description: "Engage foundational, biblically grounded coursework." },
  { icon: Users, title: "Practice", description: "Apply leadership in real community and family settings." },
  { icon: HeartHandshake, title: "Mentor", description: "Walk alongside a trained mentor for accountability." },
  { icon: Rocket, title: "Multiply", description: "Graduate ready to train and disciple the next leader." },
];

export function LeadershipJourney() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Your Path Forward"
          title="The Leadership Journey"
          description="Every learner moves through five stages designed to build lasting, multiplying leadership."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
                <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                  {i + 1}
                </span>
                <step.icon className="mt-3 h-8 w-8 text-primary" />
                <h3 className="font-display font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
