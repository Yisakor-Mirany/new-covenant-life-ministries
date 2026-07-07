import type { StatItem } from "@/types";
import { getIcon } from "@/lib/icon-map";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function StatsSection({
  stats,
  variant = "light",
}: {
  stats: StatItem[];
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 lg:grid-cols-4",
        variant === "dark" && "text-white"
      )}
    >
      {stats.map((stat, i) => {
        const Icon = getIcon(stat.icon);
        return (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className={cn(
              "flex flex-col items-center gap-2 rounded-2xl p-6 text-center",
              variant === "light" ? "bg-muted/60" : "bg-white/10 backdrop-blur"
            )}
          >
            <Icon className={cn("h-6 w-6", variant === "light" ? "text-secondary" : "text-secondary")} />
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="font-display text-3xl font-bold sm:text-4xl"
            />
            <p
              className={cn(
                "text-sm font-medium",
                variant === "light" ? "text-muted-foreground" : "text-white/80"
              )}
            >
              {stat.label}
            </p>
          </Reveal>
        );
      })}
    </div>
  );
}
