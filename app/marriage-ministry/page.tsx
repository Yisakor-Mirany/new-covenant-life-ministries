import type { Metadata } from "next";
import Link from "next/link";
import {
  BookHeart,
  MessageCircleHeart,
  Presentation,
  Users,
  LibraryBig,
  Baby,
  Newspaper,
  CalendarHeart,
} from "lucide-react";

import { blogPosts } from "@/data/blog-posts";
import { events } from "@/data/events";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { BlogCard } from "@/components/shared/blog-card";
import { EventCard } from "@/components/shared/event-card";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Marriage Ministry",
  description:
    "Marriage courses, counseling, seminars, mentorship, and family resources to build Christ-centered marriages that last.",
};

const focusAreas = [
  { icon: BookHeart, title: "Marriage Courses", description: "Structured courses building covenant-minded marriages." },
  { icon: MessageCircleHeart, title: "Counseling", description: "Confidential biblical counseling for couples at any stage." },
  { icon: Presentation, title: "Seminars", description: "Regular seminars on communication, intimacy, and conflict." },
  { icon: Users, title: "Mentorship", description: "Experienced mentor couples walking alongside younger marriages." },
  { icon: LibraryBig, title: "Family Resources", description: "Practical tools and guides for a thriving home." },
  { icon: Baby, title: "Parenting", description: "Biblical parenting resources for every stage of childhood." },
  { icon: Newspaper, title: "Relationship Articles", description: "Ongoing teaching from our team on marriage and family." },
  { icon: CalendarHeart, title: "Events", description: "Retreats and seminars throughout the year for couples." },
];

export default function MarriageMinistryPage() {
  const marriagePosts = blogPosts.filter((p) => p.category === "Marriage & Family");
  const marriageEvents = events.filter((e) => e.category === "Retreat");

  return (
    <>
      <PageHero
        eyebrow="Marriage Ministry"
        title="Building Marriages That Reflect Christ"
        description="Courses, counseling, and community for couples at every stage — from engagement to decades of marriage."
      />
      <Breadcrumbs items={[{ label: "Marriage Ministry" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="How We Serve Couples"
            title="A Complete Marriage Ministry"
          />
          <div className="mt-14">
            <FeatureGrid items={focusAreas} />
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/30">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1 rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-white">
            <blockquote className="text-balance font-display text-xl font-medium leading-relaxed">
              &ldquo;This program restored our marriage and gave us a calling to help other
              couples do the same.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-white/80">Abel &amp; Helen M., CML Graduates</p>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Christian Marriage Leadership
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Strengthen Your Marriage?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our flagship Christian Marriage Leadership course equips couples with covenant
              foundations, communication tools, and a path toward becoming mentor couples
              themselves.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/programs/christian-marriage-leadership">Explore the Course</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {marriageEvents.length > 0 && (
        <section className="section-y">
          <div className="container-page">
            <SectionHeading eyebrow="Upcoming" title="Marriage Retreats & Seminars" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {marriageEvents.map((event, i) => (
                <EventCard key={event.slug} event={event} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}

      {marriagePosts.length > 0 && (
        <section className="section-y bg-muted/30">
          <div className="container-page">
            <SectionHeading eyebrow="Read & Reflect" title="Relationship Articles" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {marriagePosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
