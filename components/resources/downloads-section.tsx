import Link from "next/link";
import { Download, FileText } from "lucide-react";

import { downloads } from "@/data/downloads";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DownloadsSection() {
  return (
    <section id="downloads" className="section-y scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Free Resources"
          title="Downloads"
          description="Guides, workbooks, and manuals to support your leadership and family growth."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {downloads.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="flex h-full flex-col p-6">
                <FileText className="h-9 w-9 text-primary" />
                <Badge variant="outline" className="mt-4 w-fit">
                  {item.type}
                </Badge>
                <h3 className="mt-3 font-display font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.description}</p>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link href="/contact">
                    <Download className="h-4 w-4" /> Request Download
                  </Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
