import { Quote } from "lucide-react";

import { founder } from "@/data/staff";
import { Reveal } from "@/components/shared/reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function FounderSection() {
  return (
    <section className="section-y bg-primary text-white">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="bg-white/15 text-2xl text-white">
              {founder.initials}
            </AvatarFallback>
          </Avatar>
          <Quote className="h-8 w-8 text-secondary" />
          <blockquote className="text-balance font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            &ldquo;We are not just building programs — we are building leaders who will
            outlive us, and families that will outlast any single generation.&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold">{founder.name}</p>
            <p className="text-sm text-white/70">{founder.role}</p>
          </div>
          <p className="max-w-xl text-white/80">{founder.bio}</p>
        </Reveal>
      </div>
    </section>
  );
}
