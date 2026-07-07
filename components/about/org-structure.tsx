import { orgStructure } from "@/data/staff";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function OrgStructure() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="How We're Organized" title="Organization Structure" />
        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-3">
          {orgStructure.map((level, i) => (
            <Reveal key={level.title} delay={i * 0.08} className="w-full">
              <div
                className="mx-auto w-full rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
                style={{ maxWidth: `${100 - i * 8}%` }}
              >
                <p className="font-display font-semibold">{level.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{level.description}</p>
              </div>
              {i < orgStructure.length - 1 && (
                <div className="mx-auto h-6 w-px bg-border" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
