import Link from "next/link";
import { Compass, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-primary text-white">
      <div className="bg-grid absolute inset-0 opacity-10" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="container-page relative flex flex-col items-center gap-6 py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
          <Compass className="h-8 w-8 text-secondary" />
        </div>
        <p className="font-display text-7xl font-bold">404</p>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          This Page Has Wandered Off
        </h1>
        <p className="max-w-md text-white/80">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s
          get you back on the path.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href="/">
              <Home className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline-invert">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
