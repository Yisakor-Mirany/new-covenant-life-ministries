import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

export function BlogCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center justify-between p-6 pb-0">
          <Badge>{post.category}</Badge>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold leading-snug">
            <Link href={`/resources/${post.slug}`} className="story-link">
              {post.title}
            </Link>
          </h3>
          <p className="mt-2.5 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
          <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.author}</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <Link
            href={`/resources/${post.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:gap-2.5"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </Reveal>
  );
}
