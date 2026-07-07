"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Ticket } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const registerSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
});

type RegisterInput = z.infer<typeof registerSchema>;

export function EventRegisterForm({ eventTitle }: { eventTitle: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  async function onSubmit(data: RegisterInput) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: "Program Registration",
          message: `Event registration request for: ${eventTitle}`,
        }),
      });
      if (!res.ok) throw new Error();
      toast.success("You're registered! Check your email for confirmation.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="e-name">Full Name</Label>
        <Input id="e-name" placeholder="Jane Doe" {...register("name")} />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="e-email">Email</Label>
        <Input id="e-email" type="email" placeholder="jane@example.com" {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="e-phone">Phone (optional)</Label>
        <Input id="e-phone" placeholder="+251 9xx xxx xxx" {...register("phone")} />
      </div>
      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Registering…
          </>
        ) : (
          <>
            <Ticket className="h-4 w-4" /> Register for This Event
          </>
        )}
      </Button>
    </form>
  );
}
