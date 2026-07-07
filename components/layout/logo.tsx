import Link from "next/link";
import { Flame } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="New Covenant Life Ministries — Home"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <Flame className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[0.95rem] font-bold tracking-tight">
          New Covenant Life
        </span>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-secondary">
          Ministries
        </span>
      </span>
    </Link>
  );
}
