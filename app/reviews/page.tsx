import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo/metadata";
import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { TravelerReviewArchive } from "@/components/reviews/traveler-review-archive";
import { getInterleavedTravelerReviews, travelerReviews } from "@/content/home/traveler-reviews";
import styles from "@/components/reviews/reviews-archive.module.css";

export const metadata: Metadata = createMetadata({
  title: "Traveler Reviews | AVIORA China Travel",
  description:
    "Read traveler feedback about private China journeys planned and supported by AVIORA.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <PageContainer>
      <SiteNavigation />
      <main className={styles.archive}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Guest feedback</p>
          <h1>A more considered way to travel China.</h1>
          <p className={styles.reviewCount}>{travelerReviews.length} traveler reviews</p>
        </header>
        <TravelerReviewArchive reviews={getInterleavedTravelerReviews()} />
      </main>
      <SiteFooter />
    </PageContainer>
  );
}
