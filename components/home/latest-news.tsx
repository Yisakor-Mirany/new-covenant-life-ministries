import Link from "next/link";

import { blogPosts } from "@/data/blog-posts";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogCard } from "@/components/shared/blog-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function LatestNews() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="From Our Blog"
          title="Latest News & Reflections"
          description="Stories and insights from across our leadership, youth, and marriage ministries."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 0.1} />
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/resources">View All Articles</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
