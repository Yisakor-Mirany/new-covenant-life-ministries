import type { Metadata } from "next";

import { OrderConfirmationContent } from "@/components/books/order-confirmation-content";

export const metadata: Metadata = {
  title: "Order Confirmation",
  description: "Your NCLM Bookstore order has been received.",
};

export default function OrderConfirmationPage() {
  return (
    <section className="section-y">
      <div className="container-page">
        <OrderConfirmationContent />
      </div>
    </section>
  );
}
