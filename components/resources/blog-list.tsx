"use client";

import { blogPosts } from "@/data/blog-posts";
import { BlogCard } from "@/components/shared/blog-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export function BlogList() {
  return (
    <Tabs defaultValue="All" className="flex flex-col items-center">
      <TabsList className="flex-wrap">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => {
        const filtered =
          category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category);
        return (
          <TabsContent key={category} value={category} className="w-full">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} delay={i * 0.06} />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
