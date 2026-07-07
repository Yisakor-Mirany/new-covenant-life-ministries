import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the New Covenant Life Ministries website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: January 2026" />
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      <section className="section-y">
        <div className="container-page prose-content mx-auto max-w-3xl space-y-8 text-muted-foreground">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing or using the {siteConfig.name} website, you agree to be bound by
              these Terms of Service. If you do not agree, please do not use this website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. Use of the Website
            </h2>
            <p className="mt-3">
              You agree to use this website only for lawful purposes and in a manner that does
              not infringe the rights of, or restrict the use and enjoyment of, this site by any
              third party.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              3. Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this website, including text, graphics, logos, and curriculum
              materials, is the property of {siteConfig.name} unless otherwise noted, and is
              protected by applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our written permission.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              4. Program Registration &amp; Donations
            </h2>
            <p className="mt-3">
              Program registrations are subject to availability and confirmation by our team.
              Donations are voluntary and non-refundable except where required by law. We are
              committed to using all gifts in accordance with our stated mission.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              5. User Submissions
            </h2>
            <p className="mt-3">
              Any information you submit through our forms (contact, volunteer, prayer request,
              or newsletter) is provided voluntarily and subject to our Privacy Policy.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              6. Limitation of Liability
            </h2>
            <p className="mt-3">
              This website is provided &ldquo;as is&rdquo; without warranties of any kind. To
              the fullest extent permitted by law, {siteConfig.name} shall not be liable for any
              damages arising from your use of this website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              7. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may revise these Terms of Service at any time. Continued use of the website
              after changes are posted constitutes acceptance of the revised terms.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              8. Governing Law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the Federal Democratic Republic of
              Ethiopia, without regard to conflict of law principles.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">9. Contact Us</h2>
            <p className="mt-3">
              Questions about these Terms of Service can be directed to {siteConfig.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
