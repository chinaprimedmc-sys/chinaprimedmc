import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { HomeReveal } from "@/components/home/home-immersive-sections";
import { ContentContainer } from "@/components/layout/content-container";

import styles from "./home-trust-introduction.module.css";

const assurances = [
  {
    title: "Licensed to operate locally",
    description:
      "Your journey is operated in China by a registered company licensed to conduct inbound tourism business.",
  },
  {
    title: "Private by design",
    description:
      "Routes, hotels, guides and private transport are arranged around your dates, interests and preferred pace.",
  },
  {
    title: "No forced shopping",
    description:
      "Your time is reserved for the places, people and experiences you came to China to discover.",
  },
  {
    title: "Support that stays close",
    description: "A China-based team remains reachable before arrival and throughout your journey.",
  },
];

export function HomeTrustIntroduction() {
  return (
    <section className={styles.section} aria-labelledby="home-trust-title">
      <ContentContainer size="xl" className={styles.inner}>
        <HomeReveal className={styles.intro}>
          <p className={styles.eyebrow}>01 · Why AVIORA</p>
          <h2 id="home-trust-title" className={styles.title}>
            Your journey is planned by people who are here.
          </h2>
          <p className={styles.description}>
            AVIORA is supported by a China-registered inbound travel company. Every journey is
            privately arranged, without forced shopping, and coordinated by a local team while you
            travel.
          </p>
          <Link href="/about" className={styles.aboutLink}>
            Meet the team behind AVIORA
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </HomeReveal>

        <div>
          <div className={styles.proofList}>
            {assurances.map((item, index) => (
              <HomeReveal key={item.title} delay={index * 80}>
                <article className={styles.proofItem}>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </HomeReveal>
            ))}
          </div>

          <HomeReveal delay={330} className={styles.press}>
            <div>
              <p className={styles.pressLabel}>Documented by TTG Asia</p>
              <p className={styles.pressTitle}>
                Our China operating team appeared in TTG Asia&apos;s coverage of MATTA Connect 2026.
              </p>
              <p className={styles.pressNote}>
                Independent editorial coverage of the event; no endorsement is implied.
              </p>
            </div>
            <Link href="/journal/aviora-ttg-asia-matta-connect-2026" className={styles.storyLink}>
              Read our story
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </HomeReveal>
        </div>
      </ContentContainer>
    </section>
  );
}
