"use client";

import { Clock } from "lucide-react";

import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const levels = ["Foundational", "Intermediate", "Advanced"] as const;

export function LearningPath() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="Courses" title="Your Learning Path" />
        <Tabs defaultValue="Foundational" className="mt-12 flex flex-col items-center">
          <TabsList>
            {levels.map((level) => (
              <TabsTrigger key={level} value={level}>
                {level}
              </TabsTrigger>
            ))}
          </TabsList>
          {levels.map((level) => (
            <TabsContent key={level} value={level} className="w-full">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.level === level)
                  .map((course, i) => (
                    <Reveal key={course.title} delay={i * 0.06}>
                      <Card className="h-full p-6">
                        <Badge variant="outline">{course.level}</Badge>
                        <h3 className="mt-4 font-display text-lg font-semibold">
                          {course.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {course.description}
                        </p>
                        <p className="mt-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {course.duration}
                        </p>
                      </Card>
                    </Reveal>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
