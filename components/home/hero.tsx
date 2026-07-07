"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, PlayCircle } from "lucide-react";

import { useLanguage } from "@/providers/language-provider";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="bg-grid absolute inset-0 opacity-[0.08]" />
      <motion.div
        className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-secondary/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 h-[26rem] w-[26rem] rounded-full bg-accent/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-page relative flex flex-col items-center gap-10 py-24 text-center sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
        >
          <HeartHandshake className="h-4 w-4 text-secondary" />
          {t.hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-balance text-lg text-white/85 sm:text-xl"
        >
          {t.hero.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" variant="secondary">
            <Link href="/programs">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline-invert">
            <Link href="/donate">
              <PlayCircle className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 1440 80"
          className="block h-12 w-full fill-background sm:h-20"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,80 480,0 720,24 C960,48 1200,80 1440,32 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
