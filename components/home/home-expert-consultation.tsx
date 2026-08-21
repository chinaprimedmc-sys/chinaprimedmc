"use client";

import { motion, useReducedMotion } from "framer-motion";

import { StartPlanningForm } from "@/components/forms/start-planning-form";
import { OptimizedImage } from "@/components/media/optimized-image";

import styles from "./home-expert-consultation.module.css";

export function HomeExpertConsultation() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="start-planning" className={styles.section} aria-labelledby="planning-title">
      <div className={styles.backgroundField} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.div
          className={styles.editorial}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: reduceMotion ? 0 : 0.86, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Plan with AVIORA</p>
            <h2 id="planning-title">Tell us what would make China feel right for you.</h2>
            <p className={styles.intro}>
              Begin with the essentials. One China specialist will review your plans and reply
              personally within 24 hours.
            </p>
          </div>

          <figure className={styles.consultationPhoto}>
            <OptimizedImage
              src="/home/editorial/travel-trade-consultation-kuala-lumpur.webp"
              alt="An AVIORA travel specialist discussing a private China journey"
              width={1080}
              height={720}
              sizes="(min-width: 1024px) 43vw, 100vw"
              className={styles.photo}
            />
          </figure>
        </motion.div>

        <motion.div
          className={styles.formPanel}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <StartPlanningForm placement="homepage" />
        </motion.div>
      </div>
    </section>
  );
}
