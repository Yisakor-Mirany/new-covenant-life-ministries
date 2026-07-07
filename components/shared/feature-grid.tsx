import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureGrid({ items, columns = 4 }: { items: FeatureItem[]; columns?: 3 | 4 }) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06}>
          <Card className="h-full p-6 transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
