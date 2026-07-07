import Link from "next/link";
import { Church, Briefcase } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PartnershipSection() {
  return (
    <section id="partner" className="section-y bg-muted/30 scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Partner With Us"
          title="Church & Corporate Partnerships"
          description="We partner with churches and businesses who share our vision for transformed leaders and families."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <Card className="h-full p-8">
              <Church className="h-9 w-9 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold">Church Partnerships</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Host a program cohort, send leaders for training, or co-labor with us in your
                community. We provide curriculum, facilitator training, and ongoing support.
              </p>
              <Button asChild className="mt-6 w-full" variant="outline">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full p-8">
              <Briefcase className="h-9 w-9 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold">Corporate Sponsorship</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Sponsor a cohort, an event, or a scholarship fund for leaders who could not
                otherwise afford training. Sponsorship packages include recognition and impact
                reporting.
              </p>
              <Button asChild className="mt-6 w-full" variant="outline">
                <Link href="/contact">Discuss Sponsorship</Link>
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
