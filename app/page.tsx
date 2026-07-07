import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { VisionMissionValues } from "@/components/home/vision-mission-values";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { LatestNews } from "@/components/home/latest-news";
import { PartnersSection } from "@/components/home/partners-section";
import { DonationCta } from "@/components/home/donation-cta";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <FeaturedPrograms />
      <VisionMissionValues />
      <TestimonialsSection />
      <LatestNews />
      <PartnersSection />
      <DonationCta />
      <NewsletterSection />
    </>
  );
}
