import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CheckoutPageContent } from "@/components/books/checkout-empty-state";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your NCLM Bookstore order.",
};

export default function CheckoutPage() {
  return (
    <>
      <PageHero eyebrow="Bookstore" title="Secure Checkout" />
      <Breadcrumbs items={[{ label: "Bookstore", href: "/books" }, { label: "Checkout" }]} />
      <section className="section-y">
        <div className="container-page">
          <CheckoutPageContent />
        </div>
      </section>
    </>
  );
}
