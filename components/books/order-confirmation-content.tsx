"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Printer } from "lucide-react";

import { formatCurrency, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShareButtons } from "@/components/resources/share-buttons";

const LAST_ORDER_KEY = "nclm-last-order";

interface LastOrder {
  name: string;
  email: string;
  items: { title: string; format: string; price: number; quantity: number }[];
  addDonation: boolean;
  total: number;
}

export function OrderConfirmationContent() {
  const [order, setOrder] = React.useState<LastOrder | null>(null);
  const [orderNumber, setOrderNumber] = React.useState("");

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- generates a display-only receipt number once on mount, not derivable during render
    setOrderNumber(`NCLM-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
  }, []);

  React.useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(LAST_ORDER_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only read of sessionStorage, not derivable during render
      if (stored) setOrder(JSON.parse(stored));
    } catch {
      // ignore malformed order data
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col items-center gap-4 text-center">
        <CheckCircle2 className="h-16 w-16 text-accent" />
        <h1 className="font-display text-3xl font-bold">
          Thank You for Supporting New Covenant Life Ministries
        </h1>
        <p className="text-muted-foreground">
          Your order request has been received. Our team will email you shortly with secure
          payment instructions to complete your purchase.
        </p>
      </div>

      <Card id="receipt" className="mt-10 p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Order Receipt</h2>
          <span className="text-sm text-muted-foreground">{orderNumber}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{formatDate(new Date())}</p>
        <Separator className="my-4" />
        {order ? (
          <>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">Name:</span> {order.name}
              </p>
              <p>
                <span className="text-muted-foreground">Email:</span> {order.email}
              </p>
            </div>
            <Separator className="my-4" />
            <div className="space-y-2 text-sm">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-muted-foreground">
                    {item.title} ({item.format}) &times; {item.quantity}
                  </span>
                  <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
              {order.addDonation && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gift to NCLM</span>
                  <span className="font-medium">Included</span>
                </div>
              )}
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatCurrency(order.total)}</span>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Order details aren&rsquo;t available in this browser session, but your request has
            been received.
          </p>
        )}
      </Card>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" variant="outline" onClick={() => window.print()} className="print:hidden">
          <Printer className="h-4 w-4" /> Print / Save Receipt
        </Button>
        <div className="print:hidden">
          <ShareButtons title="I just supported New Covenant Life Ministries!" />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center print:hidden">
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/books">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
