import { HandHeart, Handshake, Gift, UserCheck, Church, Briefcase } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Serve at events, in administration, or within our program teams.",
    anchor: "#volunteer",
  },
  {
    icon: UserCheck,
    title: "Become a Mentor",
    description: "Walk alongside a young leader or couple as a trained mentor.",
    anchor: "#volunteer",
  },
  {
    icon: Gift,
    title: "Donate",
    description: "Fuel leadership training, marriage restoration, and youth programs.",
    anchor: "/donate",
  },
  {
    icon: Church,
    title: "Church Partnership",
    description: "Bring NCLM programs to your congregation or host a cohort.",
    anchor: "#partner",
  },
  {
    icon: Briefcase,
    title: "Corporate Sponsorship",
    description: "Partner as a business to sponsor leaders, cohorts, or events.",
    anchor: "#partner",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description: "Explore long-term ministry collaboration and co-funding.",
    anchor: "#partner",
  },
];

export function WaysToServe() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="Get Involved" title="Ways to Join Our Mission" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((way, i) => (
            <Reveal key={way.title} delay={i * 0.06}>
              <a href={way.anchor} className="block h-full">
                <Card className="h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <way.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{way.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{way.description}</p>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
