"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Lock, ShieldCheck } from "lucide-react";

import { orderSchema, type OrderInput } from "@/lib/validations";
import { useCart } from "@/providers/cart-provider";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const DONATION_AMOUNT = 10;

export function CheckoutDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
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
      setSubmitted(true);
      clearCart();
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) setSubmitted(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-accent" />
            <h3 className="font-display text-xl font-semibold">Order Request Received</h3>
            <p className="text-sm text-muted-foreground">
              Thank you! This is a secure checkout preview — our team will email you shortly
              with payment instructions to complete your purchase.
            </p>
            <Button onClick={() => handleOpenChange(false)}>Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" /> Secure Checkout
              </DialogTitle>
              <DialogDescription>
                Online payment is coming soon. Submit your order and our team will follow up
                with secure payment instructions to complete your purchase.
              </DialogDescription>
            </DialogHeader>

            <div className="mb-4 space-y-2 rounded-xl border border-border p-4 text-sm">
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <Button type="submit" disabled={isSubmitting || items.length === 0} size="lg" className="w-full">
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
