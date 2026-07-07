import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center py-24", className)}>
      <span className="relative flex h-12 w-12">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </span>
      </span>
    </div>
  );
}
