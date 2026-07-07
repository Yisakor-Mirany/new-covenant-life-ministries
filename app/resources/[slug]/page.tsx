import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShareButtons } from "@/components/resources/share-buttons";
import { BlogCard } from "@/components/shared/blog-card";
import { Reveal } from "@/components/shared/reveal";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: post.title }]} />

      <article className="section-y">
        <div className="container-page mx-auto max-w-3xl">
          <Reveal>
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span aria-hidden>&middot;</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>

          <Separator className="my-8" />

          <Reveal className="prose-content space-y-5 text-lg leading-relaxed text-muted-foreground">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <Separator className="my-8" />

          <ShareButtons title={post.title} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-y bg-muted/30">
          <div className="container-page">
            <h2 className="text-center font-display text-2xl font-bold">More Articles</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
