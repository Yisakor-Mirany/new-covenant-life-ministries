"use client";

import { motion } from "framer-motion";
import { ArrowRight, HandHeart } from "lucide-react";

import type { StatItem } from "@/types";
import { StatsSection } from "@/components/shared/stats-section";
import { Button } from "@/components/ui/button";

const donationStats: StatItem[] = [
  { label: "Raised This Year", value: 23650, prefix: "$", icon: "HandCoins" },
  { label: "Active Donors", value: 480, suffix: "+", icon: "HeartHandshake" },
  { label: "Countries Giving", value: 12, icon: "Globe" },
  { label: "Programs Funded", value: 9, icon: "Gift" },
];

export function DonationHero() {
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

      <div className="container-page relative flex flex-col items-center gap-8 py-20 text-center sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
        >
          <HandHeart className="h-4 w-4 text-secondary" />
          Give Today
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
        >
          Support the Mission
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-balance text-lg text-white/85 sm:text-xl"
        >
          Your generosity helps develop servant leaders, empower youth, strengthen Christian
          families, publish biblical resources, and transform communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button asChild size="lg" variant="secondary">
            <a href="#give">
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 w-full"
        >
          <StatsSection stats={donationStats} variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
