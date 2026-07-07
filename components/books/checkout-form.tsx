"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Lock, ShieldCheck } from "lucide-react";

import { orderSchema, type OrderInput } from "@/lib/validations";
import { useCart } from "@/providers/cart-provider";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DONATION_AMOUNT = 10;
const LAST_ORDER_KEY = "nclm-last-order";

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<OrderInput>({
    resolver: zodResolver(orderSchema),
    defaultValues: { items, addDonation: false },
  });

  React.useEffect(() => {
    setValue("items", items);
  }, [items, setValue]);

  const addDonation = watch("addDonation");
  const total = subtotal + (addDonation ? DONATION_AMOUNT : 0);

  async function onSubmit(data: OrderInput) {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();

      window.sessionStorage.setItem(
        LAST_ORDER_KEY,
        JSON.stringify({
          name: data.name,
          email: data.email,
          items: data.items,
          addDonation: Boolean(data.addDonation),
          total,
        })
      );
      clearCart();
      router.push("/books/order-confirmation");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h2 className="font-display text-xl font-semibold">Order Summary</h2>
        <div className="mt-4 space-y-2 rounded-xl border border-border p-4 text-sm">
          {items.map((item) => (
            <div key={`${item.slug}-${item.format}`} className="flex justify-between">
              <span className="text-muted-foreground">
                {item.title} ({item.format}) &times; {item.quantity}
              </span>
              <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
          <label className="flex items-center justify-between border-t border-border pt-2">
            <span className="flex items-center gap-2 text-muted-foreground">
              <input type="checkbox" className="h-4 w-4 rounded border-input" {...register("addDonation")} />
              Add a {formatCurrency(DONATION_AMOUNT)} gift to support NCLM
            </span>
          </label>
          <div className="flex justify-between border-t border-border pt-2 font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          Online payment is coming soon. Submit your order and our team will follow up with
          secure payment instructions to complete your purchase.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="font-display text-xl font-semibold">Contact & Delivery</h2>
        <div className="space-y-1.5">
          <Label htmlFor="o-name">Full Name</Label>
          <Input id="o-name" placeholder="Jane Doe" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="o-email">Email</Label>
          <Input id="o-email" type="email" placeholder="jane@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="o-phone">Phone (optional)</Label>
          <Input id="o-phone" placeholder="+251 9xx xxx xxx" {...register("phone")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="o-note">Order Note (optional)</Label>
          <Textarea id="o-note" placeholder="Shipping address, gift note, etc." rows={3} {...register("note")} />
        </div>
        {errors.items && <p className="text-xs text-destructive">{errors.items.message}</p>}
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
            </>
          ) : (
            <>
              <ShieldCheck className="h-4 w-4" /> Submit Order — {formatCurrency(total)}
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
