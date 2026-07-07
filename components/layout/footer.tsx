import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig, FOOTER_LINKS } from "@/lib/constants";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/social-icons";

const socialLinks = [
  { href: siteConfig.social.facebook, icon: FacebookIcon, label: "Facebook" },
  { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: siteConfig.social.youtube, icon: YoutubeIcon, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 print:hidden">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Organization" links={FOOTER_LINKS.organization} />
          <FooterColumn title="Programs" links={FOOTER_LINKS.programs} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h3 className="font-display text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-sm font-semibold">Stay Connected</h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Get stories of transformation and ministry updates delivered to your inbox.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col-reverse items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
