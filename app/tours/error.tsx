"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons";

import styles from "./error.module.css";

export default function ToursError({ reset }: { reset: () => void }) {
  return (
    <main className={styles.error}>
      <p>Journeys</p>
      <h1>We could not load the journey collection.</h1>
      <p>Please try again, or speak with a China specialist about the route you have in mind.</p>
      <div>
        <button type="button" onClick={reset}>
          Retry
        </button>
        <Link href="/start-planning?source=journeys-error">
          Tailor My Journey
          <ArrowRight aria-hidden="true" />
        </Link>
        <a href="https://wa.me/8618027438191">
          <WhatsAppIcon />
          WhatsApp A Specialist
        </a>
      </div>
    </main>
  );
}
