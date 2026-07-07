import { leadership } from "@/data/staff";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function LeadershipGrid() {
  return (
    <section id="leadership" className="section-y scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Team"
          title="Leadership"
          description="A team of experienced, Christ-centered leaders committed to serving with excellence."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <Card className="h-full p-7 text-center transition-shadow hover:shadow-md">
                <Avatar className="mx-auto h-20 w-20">
                  <AvatarFallback className="text-lg">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
