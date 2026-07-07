import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LeadershipJourney } from "@/components/academy/leadership-journey";
import { LearningPath } from "@/components/academy/learning-path";
import { CertificatesSection } from "@/components/academy/certificates-section";
import { FacultySection } from "@/components/academy/faculty-section";
import { CohortsSection } from "@/components/academy/cohorts-section";

export const metadata: Metadata = {
  title: "Leadership Academy",
  description:
    "Explore NCLM's Leadership Academy — courses, certificates, learning paths, faculty, and upcoming training cohorts.",
};

export default function LeadershipAcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership Academy"
        title="A Structured Path to Leadership Mastery"
        description="Courses, mentorship, and certification designed to form leaders for the long haul."
      />
      <Breadcrumbs items={[{ label: "Leadership Academy" }]} />
      <LeadershipJourney />
      <LearningPath />
      <CertificatesSection />
      <FacultySection />
      <CohortsSection />
    </>
  );
}
