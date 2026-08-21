"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

import { serviceAchievements } from "@/content/home/service-achievements";
import styles from "./home-service-achievements.module.css";

export function HomeServiceAchievements() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      section.dataset.animation = "reduced";
      return;
    }

    let hasPlayed = false;
    let frame = 0;
    const timers: number[] = [];

    const formatValue = (value: number) => value.toLocaleString("en-US");
    const setFinalValues = () => {
      serviceAchievements.forEach((achievement, index) => {
        const element = numberRefs.current[index];
        if (element)
          element.textContent = `${formatValue(achievement.target)}${achievement.suffix}`;
      });
    };

    const play = () => {
      if (hasPlayed) return;
      hasPlayed = true;
      section.dataset.animation = "active";

      serviceAchievements.forEach((achievement, index) => {
        const element = numberRefs.current[index];
        if (!element) return;

        const timer = window.setTimeout(() => {
          const startedAt = performance.now();
          const duration = 1600;

          const step = (now: number) => {
            const progress = Math.min(1, (now - startedAt) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(achievement.target * eased);
            element.textContent = `${formatValue(value)}${achievement.suffix}`;

            if (progress < 1) {
              frame = window.requestAnimationFrame(step);
            } else {
              element.textContent = `${formatValue(achievement.target)}${achievement.suffix}`;
            }
          };

          element.textContent = `0${achievement.suffix}`;
          frame = window.requestAnimationFrame(step);
        }, achievement.delay);

        timers.push(timer);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      window.cancelAnimationFrame(frame);
      if (!hasPlayed) setFinalValues();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-achievements"
      className={styles.achievements}
      aria-labelledby="service-achievements-title"
      data-achievement-section="true"
    >
      <div className={styles.container}>
        <div className={styles.card}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>SERVICE ACHIEVEMENTS</p>
            <div>
              <h2 id="service-achievements-title">Trusted in China. Over time.</h2>
              <p>
                A clear record of the guests, countries and overseas businesses supported by our
                China-based team.
              </p>
            </div>
          </header>

          <ul className={styles.stats} aria-label="AVIORA service achievements">
            {serviceAchievements.map((achievement, index) => (
              <li
                className={styles.stat}
                key={achievement.id}
                style={{ "--achievement-delay": `${achievement.delay}ms` } as CSSProperties}
              >
                <span
                  ref={(element) => {
                    numberRefs.current[index] = element;
                  }}
                  className={styles.number}
                  data-target={achievement.target}
                  data-suffix={achievement.suffix}
                  aria-label={achievement.display}
                >
                  {achievement.display}
                </span>
                <span className={styles.labels}>
                  <strong>{achievement.englishLabel}</strong>
                  <span>{achievement.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
