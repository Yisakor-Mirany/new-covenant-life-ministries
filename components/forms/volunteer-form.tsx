"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, HandHeart } from "lucide-react";

import { volunteerSchema, type VolunteerInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const interests = [
  "Event Support",
  "Mentorship",
  "Administration",
  "Youth Programs",
  "Marriage Ministry",
  "Media & Communications",
  "Church Partnership",
];

export function VolunteerForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerInput>({ resolver: zodResolver(volunteerSchema) });

  async function onSubmit(data: VolunteerInput) {
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      toast.success("Thanks for volunteering! Our team will reach out soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="v-name">Full Name</Label>
          <Input id="v-name" placeholder="Jane Doe" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="v-email">Email</Label>
          <Input id="v-email" type="email" placeholder="jane@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="v-phone">Phone</Label>
          <Input id="v-phone" placeholder="+251 9xx xxx xxx" {...register("phone")} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="v-interest">Area of Interest</Label>
          <Select value={watch("interest")} onValueChange={(v) => setValue("interest", v, { shouldValidate: true })}>
            <SelectTrigger id="v-interest">
              <SelectValue placeholder="Select an area" />
            </SelectTrigger>
            <SelectContent>
              {interests.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.interest && <p className="text-xs text-destructive">{errors.interest.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="v-message">Tell us about yourself (optional)</Label>
        <Textarea id="v-message" placeholder="Your experience, availability, and heart for this ministry…" rows={4} {...register("message")} />
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto" variant="accent">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <HandHeart className="h-4 w-4" /> Submit Application
          </>
        )}
      </Button>
    </form>
  );
}
