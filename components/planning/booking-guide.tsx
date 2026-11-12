import Link from "next/link";

import { ContentContainer } from "@/components/layout/content-container";
import {
  bookingProcess,
  bookingQuestions,
  proposalChecklist,
} from "@/content/planning/booking-process";

import styles from "./booking-guide.module.css";

export function BookingGuide() {
  return (
    <ContentContainer size="xl" className={styles.guide}>
      <section id="planning-process" className={styles.section} aria-labelledby="process-heading">
        <header className={styles.heading}>
          <p className={styles.eyebrow}>From first conversation to departure</p>
          <h2 id="process-heading">A clear path to your China journey.</h2>
          <p>
            You have time to ask questions, shape the route and understand the arrangements before
            deciding to book.
          </p>
        </header>
        <ol className={styles.steps}>
          {bookingProcess.map((step) => (
            <li key={step.title}>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <div>
                  <p>{step.body}</p>
                  <p className={styles.detail}>{step.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="your-proposal" className={styles.section} aria-labelledby="proposal-heading">
        <header className={styles.heading}>
          <h2 id="proposal-heading">Know what you are agreeing to.</h2>
          <p>
            Your written proposal and booking documents bring these details together. Review them
            with your specialist before making a payment.
          </p>
        </header>
        <details className={styles.proposalDetails}>
          <summary>Review the six things your proposal should confirm</summary>
          <dl className={styles.checklist}>
            {proposalChecklist.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </details>
        <div className={styles.references}>
          <p>For the full policy and operating company details:</p>
          <Link href="/terms">
            Booking, changes &amp; cancellation terms <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/company">
            Company &amp; licensing <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.questions} aria-labelledby="planning-questions-heading">
        <h2 id="planning-questions-heading">Before you send your enquiry.</h2>
        <div>
          {bookingQuestions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </ContentContainer>
  );
}
