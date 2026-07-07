import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/shared/reveal";
import { Card } from "@/components/ui/card";

const items = [
  { icon: MapPin, title: "Visit Us", value: siteConfig.address },
  { icon: Phone, title: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: Mail, title: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, title: "Office Hours", value: siteConfig.officeHours },
];

export function ContactInfo() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06}>
          <Card className="h-full p-6">
            <item.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display font-semibold">{item.title}</h3>
            {item.href ? (
              <a href={item.href} className="mt-1 block text-sm text-muted-foreground hover:text-primary">
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
            )}
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
