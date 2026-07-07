import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How New Covenant Life Ministries collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2026" />
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <section className="section-y">
        <div className="container-page prose-content mx-auto max-w-3xl space-y-8 text-muted-foreground">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">1. Introduction</h2>
            <p className="mt-3">
              {siteConfig.name} (&ldquo;NCLM,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to protecting the
              personal information you share with us through this website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            <p className="mt-3">We may collect the following types of information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Contact information you provide via our forms (name, email, phone number).</li>
              <li>Program registration and volunteer application details.</li>
              <li>Prayer requests and messages you submit to our team.</li>
              <li>Newsletter subscription information.</li>
              <li>Basic usage data collected through cookies (see Section 5).</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to inquiries and process program registrations.</li>
              <li>Send newsletters and ministry updates (only if you have subscribed).</li>
              <li>Improve our website and program offerings.</li>
              <li>Maintain records required for donor stewardship and reporting.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              4. Information Sharing
            </h2>
            <p className="mt-3">
              We do not sell or rent your personal information. We may share information with
              trusted service providers who assist us in operating our website and programs,
              subject to confidentiality obligations, or when required by law.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">5. Cookies</h2>
            <p className="mt-3">
              Our website uses cookies to remember your theme and language preferences and to
              understand how visitors use our site. You can disable cookies in your browser
              settings, though some features may not function properly.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">6. Data Security</h2>
            <p className="mt-3">
              We take reasonable technical and organizational measures to protect your
              information from unauthorized access, alteration, or disclosure.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">7. Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal
              information at any time by contacting us at {siteConfig.email}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              8. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated revision date.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">9. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us at{" "}
              {siteConfig.email} or {siteConfig.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
