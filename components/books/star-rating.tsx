import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
  showValue = false,
}: {
  rating: number;
  className?: string;
  showValue?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(rating);
          return (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                filled ? "fill-secondary text-secondary" : "fill-none text-border"
              )}
            />
          );
        })}
      </div>
      {showValue && <span className="text-sm font-medium text-muted-foreground">{rating.toFixed(1)}</span>}
    </div>
  );
}
