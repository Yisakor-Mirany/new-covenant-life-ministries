"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const [email, setEmail] = React.useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setStatus("success");
      setEmail("");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("flex items-center gap-2 text-sm font-medium text-accent", className)}>
        <CheckCircle2 className="h-5 w-5" />
        Thanks for subscribing — check your inbox soon!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="sm:max-w-xs"
      />
      <Button type="submit" disabled={status === "loading"} variant="secondary">
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}
