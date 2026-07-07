import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenCheck,
  Compass,
  Rocket,
  Laptop,
  Coins,
  UserCheck,
  HandHeart,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { StatsSection } from "@/components/shared/stats-section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Youth Development",
  description:
    "Bible study, leadership training, entrepreneurship, digital skills, microloans, mentorship, and service opportunities for young leaders.",
};

const focusAreas = [
  {
    icon: BookOpenCheck,
    title: "Bible Study",
    description: "Small-group discipleship rooted in Scripture and personal growth.",
  },
  {
    icon: Compass,
    title: "Leadership",
    description: "Practical training in communication, teamwork, and character.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Business planning and startup fundamentals for young innovators.",
  },
  {
    icon: Laptop,
    title: "Digital Skills",
    description: "Digital literacy training to prepare youth for today's economy.",
  },
  {
    icon: Coins,
    title: "Microloans",
    description: "Access to microloans for graduates launching small businesses.",
  },
  {
    icon: UserCheck,
    title: "Mentorship",
    description: "One-on-one mentorship pairing youth with trained adult leaders.",
  },
  {
    icon: HandHeart,
    title: "Volunteer Opportunities",
    description: "Hands-on opportunities to serve within NCLM programs and events.",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Organized service projects that put leadership into action.",
  },
];

const youthStats = [
  { label: "Youth Engaged", value: 2000, suffix: "+", icon: "Sparkles" },
  { label: "Microenterprises Launched", value: 150, suffix: "+", icon: "Rocket" },
  { label: "Active Mentor Pairs", value: 500, suffix: "+", icon: "HeartHandshake" },
  { label: "Community Projects", value: 80, suffix: "+", icon: "Users" },
] as const;

export default function YouthDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Youth Development"
        title="Equipping the Next Generation to Lead Now"
        description="Faith, skills, and opportunity — helping young people build lives of purpose and impact today."
      />
      <Breadcrumbs items={[{ label: "Youth Development" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Holistic Development"
            title="Eight Areas of Investment"
            description="We invest in the whole young person — spiritually, relationally, and economically."
          />
          <div className="mt-14">
            <FeatureGrid items={focusAreas} />
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page">
          <SectionHeading eyebrow="Our Reach" title="Youth Development Impact" />
          <div className="mt-12">
            <StatsSection stats={[...youthStats]} />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Mentorship Spotlight
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Every Young Leader Deserves a Guide
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every participant in our Youth Leadership Development track is paired with a
              trained mentor who walks with them through leadership training, entrepreneurship
              milestones, and life&rsquo;s everyday challenges — because transformation happens
              best in relationship.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/programs/youth-leadership-development">
                  Explore Youth Leadership Development
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/get-involved">Become a Mentor</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-gradient-to-br from-secondary/80 to-primary p-10 text-white">
            <blockquote className="text-balance font-display text-xl font-medium leading-relaxed">
              &ldquo;My mentor didn&rsquo;t just teach me business skills — he taught me how to
              lead with integrity.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-white/80">Yonas B., Youth Leadership Graduate</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
