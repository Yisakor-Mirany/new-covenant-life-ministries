"use client";

import * as React from "react";
import { Camera, Expand } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/shared/reveal";

const gradients = [
  "from-primary/80 to-primary",
  "from-secondary/80 to-secondary",
  "from-accent/80 to-accent",
  "from-primary/70 via-secondary/60 to-accent/70",
];

export function GalleryGrid({ captions }: { captions: string[] }) {
  const [active, setActive] = React.useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {captions.map((caption, i) => (
          <Reveal key={caption} delay={i * 0.04}>
            <button
              onClick={() => setActive(i)}
              className={cn(
                "group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br text-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg",
                gradients[i % gradients.length]
              )}
            >
              <Camera className="h-8 w-8 opacity-70" strokeWidth={1.5} />
              <span className="absolute inset-x-0 bottom-0 bg-black/40 p-2.5 text-left text-xs font-medium leading-snug backdrop-blur-sm">
                {caption}
              </span>
              <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {active !== null && (
            <>
              <div
                className={cn(
                  "flex aspect-video w-full items-center justify-center bg-gradient-to-br text-white",
                  gradients[active % gradients.length]
                )}
              >
                <Camera className="h-16 w-16 opacity-70" strokeWidth={1} />
              </div>
              <DialogHeader className="p-6">
                <DialogTitle>{captions[active]}</DialogTitle>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
