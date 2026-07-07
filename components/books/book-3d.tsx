import { BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

export function Book3D({ gradient, className }: { gradient: string; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-xs", className)} style={{ perspective: "1400px" }}>
      <div
        className="relative aspect-[3/4] w-full"
        style={{ transformStyle: "preserve-3d", transform: "rotateY(-22deg) rotateX(4deg)" }}
      >
        <div
          className="absolute inset-y-0 left-0 w-6 rounded-l-md bg-black/25"
          style={{ transform: "translateX(-100%) rotateY(90deg)", transformOrigin: "right" }}
        />
        <div
          className={cn(
            "relative flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-2xl",
            gradient
          )}
        >
          <BookOpen className="h-16 w-16 opacity-80" strokeWidth={1.25} />
        </div>
      </div>
      <div
        className="mx-auto -mt-2 h-8 w-4/5 rounded-full bg-black/25 blur-xl"
        aria-hidden
      />
    </div>
  );
}
