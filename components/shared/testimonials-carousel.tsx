"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import type { Testimonial } from "@/types";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = React.useState(0);
  const active = testimonials[index];

  function go(dir: 1 | -1) {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }

  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <Quote className="mx-auto h-10 w-10 text-secondary/70" />
      <div className="relative mt-4 min-h-52 sm:min-h-40">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <blockquote className="text-balance font-display text-xl font-medium leading-relaxed sm:text-2xl">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5">
              <p className="font-semibold">{active.name}</p>
              <p className="text-sm text-muted-foreground">{active.role}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button variant="outline" size="icon" onClick={() => go(-1)} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-1.5">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={() => go(1)} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Reveal>
  );
}
