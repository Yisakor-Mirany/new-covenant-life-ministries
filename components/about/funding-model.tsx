import Link from "next/link";
import { BookOpen, Church, HandCoins, Handshake } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

const streams = [
  {
    icon: HandCoins,
    title: "Individual & Church Giving",
    description: "One-time and recurring gifts from individuals and partner congregations.",
    href: "/donate",
  },
  {
    icon: Handshake,
    title: "Corporate & Foundation Partnerships",
    description: "Sponsorships and grants that fund cohorts, scholarships, and events.",
    href: "/get-involved#partner",
  },
  {
    icon: Church,
    title: "Program Registration Fees",
    description: "Modest, heavily subsidized fees that help sustain program delivery.",
    href: "/programs",
  },
  {
    icon: BookOpen,
    title: "Book & Resource Sales",
    description: "Every book, manual, and Bible study sold directly funds our ministry work.",
    href: "/books",
  },
];

export function FundingModel() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Sustainability"
          title="How We Sustain This Work"
          description="New Covenant Life Ministries is sustained through four complementary funding streams — no single source carries the mission alone."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {streams.map((stream, i) => (
            <Reveal key={stream.title} delay={i * 0.08}>
              <Link href={stream.href} className="block h-full">
                <Card className="h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <stream.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{stream.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{stream.description}</p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
