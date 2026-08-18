"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

import { ContentContainer } from "@/components/layout/content-container";
import { OptimizedImage } from "@/components/media/optimized-image";

import styles from "./home-trust-introduction.module.css";

const assurances = [
  {
    title: "Licensed locally",
    description:
      "Your journey is operated in China by a registered company licensed to conduct inbound tourism business.",
    evidence: "Guangzhou, China · Registered 2018",
  },
  {
    title: "Private by design",
    description:
      "Routes, hotels, guides and private transport are arranged around your dates, interests and preferred pace.",
    evidence: "One conversation · One considered direction",
  },
  {
    title: "No forced shopping",
    description:
      "Your time is reserved for the places, people and experiences you came to China to discover.",
    evidence: "Experience-led itineraries · No retail stops",
  },
  {
    title: "Support in China",
    description: "A China-based team remains reachable before arrival and throughout your journey.",
    evidence: "Before arrival · While traveling · Until return",
  },
] as const;

const exhibitionImages = [
  {
    src: "/home/editorial/travel-trade-buyer-meeting-kuala-lumpur.webp",
    alt: "An AVIORA specialist discussing private China travel with an international buyer in Kuala Lumpur",
    width: 1080,
    height: 720,
    caption: "Route consultation · Kuala Lumpur · 2026",
  },
  {
    src: "/home/editorial/muslim-travel-buyers-kuala-lumpur.webp",
    alt: "The AVIORA team listening to Muslim travel buyers at an international tourism event in Kuala Lumpur",
    width: 1080,
    height: 720,
    caption: "Listening to traveler priorities · Kuala Lumpur · 2026",
  },
  {
    src: "/home/editorial/travel-trade-consultation-kuala-lumpur.webp",
    alt: "An AVIORA specialist in a detailed conversation with a travel buyer in Kuala Lumpur",
    width: 1080,
    height: 720,
    caption: "Clear questions before better decisions · Kuala Lumpur · 2026",
  },
] as const;

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={inView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function EditorialImage({
  image,
  priority = false,
}: {
  image:
    | (typeof exhibitionImages)[number]
    | {
        readonly src: string;
        readonly alt: string;
        readonly width: number;
        readonly height: number;
        readonly caption: string;
      };
  priority?: boolean;
}) {
  return (
    <figure className={styles.imageFigure}>
      <div className={styles.imageSurface}>
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className={styles.editorialImage}
          priority={priority}
        />
        <span className={styles.imageLine} aria-hidden="true" />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export function HomeTrustIntroduction() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.story}>
      <section className={styles.peopleSection} aria-labelledby="home-trust-title">
        <ContentContainer size="xl" className={styles.peopleGrid}>
          <Reveal className={styles.peopleCopy}>
            <p className={styles.eyebrow}>01 · The local team</p>
            <h2 id="home-trust-title" className={styles.peopleTitle}>
              <span>The people behind</span>
              <span>your journey.</span>
            </h2>
            <p className={styles.lead}>
              Real conversations, accountable local operation and support that remains close while
              you travel through China.
            </p>
            <Link href="/about" className={styles.textLink}>
              Meet AVIORA
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal className={styles.peoplePhoto} delay={0.1}>
            <EditorialImage
              image={{
                src: "/home/editorial/travel-trade-booth-singapore.webp",
                alt: "The AVIORA China operating team at its IC&GTE travel trade booth in Singapore",
                width: 1080,
                height: 810,
                caption: "AVIORA's China operating team · IC&GTE Singapore · 2026",
              }}
            />
          </Reveal>

          <Reveal className={styles.credentials} delay={0.18}>
            <span>Guangzhou · China</span>
            <span>Registered 2018</span>
            <span>Inbound tourism licensed</span>
          </Reveal>
        </ContentContainer>
      </section>

      <section className={styles.presenceSection} aria-labelledby="travel-presence-title">
        <ContentContainer size="xl">
          <div className={styles.presenceHeading}>
            <Reveal>
              <p className={styles.eyebrow}>02 · Present in the travel trade</p>
              <h2 id="travel-presence-title" className={styles.sectionTitle}>
                Present where journeys begin.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className={styles.sectionIntro}>
                We meet international travel partners face to face, listen closely and translate
                different traveler priorities into considered journeys through China.
              </p>
            </Reveal>
          </div>

          <div className={styles.exhibitionGallery}>
            {exhibitionImages.map((image, index) => (
              <Reveal
                key={image.src}
                className={index === 0 ? styles.galleryPrimary : styles.gallerySecondary}
                delay={reduceMotion ? 0 : index * 0.09}
              >
                <EditorialImage image={image} />
              </Reveal>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className={styles.operationSection} aria-labelledby="operation-title">
        <ContentContainer size="xl" className={styles.operationGrid}>
          <Reveal className={styles.operationIntro}>
            <p className={styles.eyebrow}>03 · How we operate</p>
            <h2 id="operation-title" className={styles.sectionTitle}>
              Accountable in China, throughout your journey.
            </h2>
            <p className={styles.sectionIntro}>
              Private travel depends on decisions made well before arrival and support that remains
              available long after the route is confirmed.
            </p>
          </Reveal>

          <ol className={styles.assuranceList} aria-label="Why travelers can rely on AVIORA">
            {assurances.map((item, index) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: reduceMotion ? 0 : 0.7, delay: index * 0.08, ease }}
              >
                <span className={styles.assuranceNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small>{item.evidence}</small>
                </div>
              </motion.li>
            ))}
          </ol>
        </ContentContainer>
      </section>

      <section className={styles.pressSection} aria-labelledby="press-title">
        <ContentContainer size="xl" className={styles.pressGrid}>
          <Reveal className={styles.pressPhoto}>
            <EditorialImage
              image={{
                src: "/home/editorial/travel-trade-team-singapore.webp",
                alt: "The AVIORA China operating team at the IC&GTE inbound travel exhibition in Singapore",
                width: 1080,
                height: 810,
                caption: "IC&GTE Singapore · April 2026",
              }}
            />
          </Reveal>

          <Reveal className={styles.pressCopy} delay={0.1}>
            <p className={styles.eyebrow}>04 · Documented in the travel trade</p>
            <h2 id="press-title">TTG Asia</h2>
            <p className={styles.pressMeta}>MATTA Connect · Ipoh, Malaysia · 2026</p>
            <p className={styles.pressStatement}>
              TTG Asia identified Guohui Shi of China Prime DMC, AVIORA&apos;s China operating team,
              in its MATTA Connect coverage.
            </p>
            <p className={styles.disclaimer}>
              The photograph shown is from IC&amp;GTE Singapore. Independent event coverage; no
              endorsement is implied.
            </p>
            <Link href="/journal/aviora-ttg-asia-matta-connect-2026" className={styles.textLink}>
              Read the full story
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </ContentContainer>

        <ContentContainer size="xl" className={styles.continueCue}>
          <span>Trust is the beginning. The journey comes next.</span>
          <ArrowDown size={15} aria-hidden="true" />
        </ContentContainer>
      </section>
    </div>
  );
}
