import Link from "next/link";
import { FileText } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  { year: "2025", title: "Annual Impact Report 2025" },
  { year: "2024", title: "Annual Impact Report 2024" },
  { year: "2023", title: "Annual Impact Report 2023" },
];

export function AnnualReports() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Transparency & Stewardship"
          title="Annual Reports"
          description="We're committed to transparent stewardship of every gift entrusted to us."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {reports.map((report, i) => (
            <Reveal key={report.year} delay={i * 0.08}>
              <Card className="flex h-full flex-col items-center p-8 text-center">
                <FileText className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-display font-semibold">{report.title}</h3>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link href="/contact">Request Copy</Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
