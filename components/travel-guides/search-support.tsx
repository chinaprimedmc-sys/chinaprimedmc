import Link from "next/link";
import { aboutSearch } from "@/content/about/search";

import {
  travelGuideSearch,
  travelGuideIds,
  type TravelGuideId,
} from "@/content/travel-guides/search";
import styles from "./search-support.module.css";

export function TravelGuideArticleLinks({ slug, className }: { slug: string; className?: string }) {
  const guides = travelGuideIds.filter((id) =>
    travelGuideSearch[id].reading.some((link) => link.href === `/journal/${slug}`),
  );
  const verificationGuide = aboutSearch.reading.some((link) => link.href === `/journal/${slug}`);
  if (!guides.length && !verificationGuide) return null;
  return (
    <aside
      className={`${className ?? ""} ${styles.articleBridge}`}
      aria-label="Traveler planning guides"
    >
      <p>
        {verificationGuide
          ? "Meet the people responsible for your journey."
          : "Planning the wider journey?"}
      </p>
      <ul>
        {verificationGuide ? (
          <li>
            <Link href="/about#brand-questions">AVIORA’s brand, founder and operating company</Link>
          </li>
        ) : null}
        {guides.map((id) => (
          <li key={id}>
            <Link href={travelGuideSearch[id].path}>{travelGuideSearch[id].label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function TravelGuideByline() {
  return (
    <p className={styles.byline}>
      By <Link href="/editorial-policy">AVIORA China Travel Team</Link>
      <span aria-hidden="true"> · </span>
      <Link href="/editorial-policy">How we check travel information</Link>
    </p>
  );
}

export function TravelGuideOverview({ id }: { id: TravelGuideId }) {
  return (
    <div className={styles.overview} id="guide-overview">
      <p>{travelGuideSearch[id].summary}</p>
    </div>
  );
}

export function TravelGuideAnswers({ id }: { id: TravelGuideId }) {
  const guide = travelGuideSearch[id];
  return (
    <section id="planning-answers" aria-labelledby="planning-answers-title">
      <h2 id="planning-answers-title">More planning questions, answered.</h2>
      {guide.answers.map((answer) => (
        <div key={answer.id} id={answer.id}>
          <h3>{answer.question}</h3>
          <p>{answer.answer}</p>
          {answer.reading ? (
            <p>
              <Link href={answer.reading.href}>{answer.reading.label}</Link>
            </p>
          ) : null}
        </div>
      ))}
    </section>
  );
}

export function TravelGuideReading({ id }: { id: TravelGuideId }) {
  const guide = travelGuideSearch[id];
  return (
    <section id="reading-next" aria-labelledby="reading-next-title" className={styles.reading}>
      <h2 id="reading-next-title">Plan the next detail.</h2>
      <h3>Detailed planning guides</h3>
      <ul>
        {guide.reading.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
            <p>{link.detail}</p>
          </li>
        ))}
      </ul>
      <h3>A journey to compare</h3>
      <ul>
        {guide.journeys.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
            <p>{link.detail}</p>
          </li>
        ))}
      </ul>
      <h3>Related travel needs</h3>
      <ul>
        {guide.related.map((relatedId) => {
          const related = travelGuideSearch[relatedId];
          return (
            <li key={relatedId}>
              <Link href={related.path}>{related.label}</Link>
            </li>
          );
        })}
      </ul>
      <h3>Sources and confirmation</h3>
      <p>
        Use the responsible authority or provider for current rules and supplier details. Links
        below are starting points for verification; date-specific services are confirmed in your
        written proposal and booking documents.
      </p>
      <ul>
        {guide.sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              {...(source.href.startsWith("https:") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {source.label}
            </a>
            <p>{source.detail}</p>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/company">Who operates your journey</Link>
        <span aria-hidden="true"> · </span>
        <Link href="/editorial-policy">Editorial and correction policy</Link>
      </p>
    </section>
  );
}
