import { Lock, ShieldCheck, Users } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

const badges = [
  { icon: Lock, label: "SSL Encrypted Connection" },
  { icon: ShieldCheck, label: "Secure & Confidential" },
  { icon: Users, label: "Trusted by 480+ Donors" },
];

export function SecureBadges() {
  return (
    <Reveal className="container-page">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 py-8 text-sm text-muted-foreground">
        {badges.map((badge) => (
          <span key={badge.label} className="flex items-center gap-2">
            <badge.icon className="h-4 w-4 text-accent" />
            {badge.label}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
