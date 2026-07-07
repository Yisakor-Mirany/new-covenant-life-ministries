import type { TimelineItem } from "@/types";
import { Reveal } from "@/components/shared/reveal";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
      <ol className="space-y-10">
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.year}
            delay={i * 0.05}
            className={`relative flex flex-col gap-2 sm:flex-row sm:items-start ${
              i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
            }`}
          >
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2" />
            <div className={`w-full pl-8 sm:w-1/2 sm:pl-0 ${i % 2 === 1 ? "sm:pl-10" : "sm:pr-10"}`}>
              <p className="font-display text-lg font-bold text-primary">{item.year}</p>
              <p className="mt-1 font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
            <div className="hidden w-1/2 sm:block" />
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
