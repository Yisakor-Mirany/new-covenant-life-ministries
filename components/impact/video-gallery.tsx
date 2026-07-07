import { PlayCircle } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const videos = [
  "Annual Leadership Conference Highlights",
  "A Marriage Restored — Abel & Helen's Story",
  "Youth Entrepreneurship in Action",
];

export function VideoGallery() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-page">
        <SectionHeading eyebrow="Watch Our Story" title="Impact on Video" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((title, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <PlayCircle className="h-14 w-14 opacity-90 transition-transform group-hover:scale-110" strokeWidth={1.25} />
                <span className="absolute inset-x-0 bottom-0 bg-black/40 p-3 text-left text-sm font-medium backdrop-blur-sm">
                  {title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
