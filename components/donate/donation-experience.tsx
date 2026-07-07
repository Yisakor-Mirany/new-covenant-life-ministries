"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";

import { donationSchema, type DonationInput } from "@/lib/validations";
import { internationalMethods, localMethods, currencies } from "@/data/payment-methods";
import {
  donationCountries,
  donationFrequencies,
  donationPurposes,
  localPresetAmounts,
  internationalPresetAmounts,
} from "@/data/donation-options";
import { formatCurrency, cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PaymentMethodGrid } from "@/components/donate/payment-method-grid";
import { PaymentInstructions } from "@/components/donate/payment-instructions";

const LAST_DONATION_KEY = "nclm-last-donation";

export function DonationExperience({
  amount,
  onAmountChange,
}: {
  amount: number | null;
  onAmountChange: (amount: number | null) => void;
}) {
  const router = useRouter();
  const [customAmount, setCustomAmount] = React.useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DonationInput>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      region: "local",
      currency: "ETB",
      frequency: "One Time",
      paymentMethod: "",
      purpose: "General Ministry",
      country: "Ethiopia",
      anonymous: false,
      coverFees: false,
      receiveUpdates: true,
    },
  });

  const region = watch("region");
  const paymentMethod = watch("paymentMethod");

  const methods = region === "international" ? internationalMethods : localMethods;
  const presetAmounts = region === "international" ? internationalPresetAmounts : localPresetAmounts;
  const selectedMethod = methods.find((m) => m.id === paymentMethod);

  React.useEffect(() => {
    setValue("paymentMethod", "");
  }, [region, setValue]);

  React.useEffect(() => {
    setValue("amount", amount ?? 0);
  }, [amount, setValue]);

  function handlePresetClick(value: number) {
    setCustomAmount("");
    onAmountChange(value);
  }

  function handleCustomAmountChange(value: string) {
    setCustomAmount(value);
    const parsed = Number(value);
    onAmountChange(Number.isFinite(parsed) && parsed > 0 ? parsed : null);
  }

  async function onSubmit(data: DonationInput) {
    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();

      window.sessionStorage.setItem(LAST_DONATION_KEY, JSON.stringify(data));
      router.push("/donate/confirmation");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="give" className="section-y bg-muted/30 scroll-mt-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Give Now
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Choose How You&rsquo;d Like to Give
          </h2>
        </div>

        <Card className="mx-auto mt-12 max-w-3xl p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex justify-center">
              <Controller
                control={control}
                name="region"
                render={({ field }) => (
                  <Tabs
                    value={field.value}
                    onValueChange={(v) => {
                      field.onChange(v);
                      setValue("currency", v === "international" ? "USD" : "ETB");
                    }}
                  >
                    <TabsList>
                      <TabsTrigger value="local">Local (Ethiopia)</TabsTrigger>
                      <TabsTrigger value="international">International</TabsTrigger>
                    </TabsList>
                  </Tabs>
                )}
              />
            </div>

            {region === "international" && (
              <div className="mx-auto max-w-xs space-y-1.5">
                <Label htmlFor="currency">Currency</Label>
                <Controller
                  control={control}
                  name="currency"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="currency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            )}

            <div>
              <Label className="mb-3 block text-center">Payment Method</Label>
              <PaymentMethodGrid
                methods={methods}
                selected={paymentMethod || null}
                onSelect={(id) => setValue("paymentMethod", id, { shouldValidate: true })}
              />
              {errors.paymentMethod && (
                <p className="mt-2 text-center text-xs text-destructive">{errors.paymentMethod.message}</p>
              )}
            </div>

            {selectedMethod && <PaymentInstructions method={selectedMethod} />}

            <div>
              <Label className="mb-3 block text-center">Donation Frequency</Label>
              <div className="flex justify-center">
                <Controller
                  control={control}
                  name="frequency"
                  render={({ field }) => (
                    <Tabs value={field.value} onValueChange={field.onChange}>
                      <TabsList className="flex-wrap">
                        {donationFrequencies.map((f) => (
                          <TabsTrigger key={f} value={f}>
                            {f}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  )}
                />
              </div>
            </div>

            <div>
              <Label className="mb-3 block text-center">Donation Amount</Label>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-sm font-semibold transition-colors",
                      amount === preset && !customAmount
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:border-primary/40"
                    )}
                  >
                    {region === "international" ? formatCurrency(preset) : `ETB ${preset.toLocaleString()}`}
                  </button>
                ))}
              </div>
              <div className="mx-auto mt-4 max-w-xs">
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  min={1}
                  placeholder="Enter an amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="mt-1.5"
                />
              </div>
              {errors.amount && (
                <p className="mt-2 text-center text-xs text-destructive">{errors.amount.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="purpose">Donation Purpose</Label>
              <Controller
                control={control}
                name="purpose"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="purpose">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {donationPurposes.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="d-name">Full Name</Label>
                <Input id="d-name" placeholder="Jane Doe" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="d-email">Email Address</Label>
                <Input id="d-email" type="email" placeholder="jane@example.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="d-phone">Phone Number</Label>
                <Input id="d-phone" placeholder="+251 9xx xxx xxx" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Controller
                  control={control}
                  name="country"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="country">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {donationCountries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-input" {...register("anonymous")} />
                Make this donation anonymous
              </label>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-input" {...register("coverFees")} />
                Cover transaction fees so 100% of my gift goes to the ministry
              </label>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-input" {...register("receiveUpdates")} />
                Send me ministry updates and impact stories
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Processing…
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  Donate {amount ? (region === "international" ? formatCurrency(amount) : `ETB ${amount.toLocaleString()}`) : ""}
                  {watch("frequency") !== "One Time" ? ` (${watch("frequency")})` : ""}
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Online payment processing is coming soon. Submitting this form sends your gift
              request to our team, who will follow up with secure payment confirmation.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
