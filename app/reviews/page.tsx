import type { Metadata } from "next";

import { SiteFooter } from "@/components/footer/site-footer";
import { EnquirySection } from "@/components/forms/enquiry-section";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { ReviewsBoard } from "@/components/reviews/reviews-board";
import { getInterleavedTravelerReviews } from "@/content/home/traveler-reviews";
import { createMetadata } from "@/lib/seo/metadata";
import styles from "@/components/reviews/reviews-archive.module.css";

export const metadata: Metadata = createMetadata({
  title: "Traveler Reviews | AVIORA China Travel",
  description:
    "Read traveler feedback about private China journeys planned and supported by AVIORA. Filter by rating, language or topic.",
  path: "/reviews",
});

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "string") query.set(key, value);
  }
  const reviews = getInterleavedTravelerReviews();
  return (
    <PageContainer>
      <SiteNavigation />
      <main className={styles.archive}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Guest feedback</p>
          <h1>A more considered way to travel China.</h1>
        </header>
        <ReviewsBoard reviews={reviews} initialQueryString={query.toString()} />
      </main>
      <EnquirySection placement="reviews" tone="stone" />
      <SiteFooter />
    </PageContainer>
  );
}
