import { leadership } from "@/data/staff";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function FacultySection() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Faculty"
          title="Learn From Experienced, Trusted Leaders"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.slice(0, 4).map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <Card className="h-full p-6 text-center">
                <Avatar className="mx-auto h-16 w-16">
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-display font-semibold">{member.name}</h3>
                <p className="text-xs font-medium text-primary">{member.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
