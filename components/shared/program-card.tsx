import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Program } from "@/types";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/15 text-secondary-foreground",
  accent: "bg-accent/10 text-accent",
} as const;

export function ProgramCard({ program, delay = 0 }: { program: Program; delay?: number }) {
  const Icon = getIcon(program.icon);

  return (
    <Reveal delay={delay} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="p-7">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
              colorClasses[program.color]
            )}
          >
            {/* eslint-disable-next-line react-hooks/static-components -- icon name always resolves to the same stable lucide component reference */}
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold">{program.name}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            {program.shortDescription}
          </p>
        </div>
        <div className="mt-auto p-7 pt-0">
          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:gap-2.5"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </Reveal>
  );
}
