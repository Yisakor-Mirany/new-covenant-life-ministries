"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h1 className="font-display text-3xl font-bold">Something Went Wrong</h1>
        <p className="max-w-md text-muted-foreground">
          We&rsquo;re sorry for the inconvenience. Please try again, or return to the homepage.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" onClick={reset}>
            <RotateCcw className="h-4 w-4" /> Try Again
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
