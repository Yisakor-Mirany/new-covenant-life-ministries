import { Handshake } from "lucide-react";

import type { Partner } from "@/types";
import { Reveal } from "@/components/shared/reveal";

export function PartnerLogos({ partners }: { partners: Partner[] }) {
  return (
    <Reveal className="overflow-hidden">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 text-center transition-colors hover:border-primary/40"
          >
            <Handshake className="h-5 w-5 text-primary/70" />
            <span className="text-xs font-medium leading-tight text-muted-foreground">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
