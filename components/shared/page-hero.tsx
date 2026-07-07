import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary py-20 text-white sm:py-28",
        className
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-10" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-balance text-lg text-white/85">{description}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
