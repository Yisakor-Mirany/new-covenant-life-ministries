import { BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

export function BookCover({
  gradient,
  className,
  iconClassName,
}: {
  gradient: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex aspect-[3/4] w-full items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
        gradient,
        className
      )}
    >
      <BookOpen className={cn("h-10 w-10 opacity-80", iconClassName)} strokeWidth={1.5} />
    </div>
  );
}
