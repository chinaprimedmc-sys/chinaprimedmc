import Link from "next/link";
import { getServiceCases } from "@/content/about/service-cases";
import styles from "./service-cases.module.css";

export function ServiceCases() {
  const cases = getServiceCases();
  if (!cases.length) return null;

  return (
    <section id="service-cases" className={styles.section} aria-labelledby="service-cases-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>SERVICE STORIES</p>
          <h2 id="service-cases-title">What thoughtful service looks like in practice.</h2>
          <p>
            Accounts drawn from guest feedback published by AVIORA, with links to each original
            review. They show how pace, hotel choices and flexibility can shape a private journey.
          </p>
          <p className={styles.sourceNote}>
            Source: guest feedback hosted on AVIORA’s website. Each story links to the original
            account; the planning takeaways are advice from our team.
          </p>
        </header>
        <div className={styles.stories}>
          {cases.map((story) => (
            <article
              key={story.id}
              id={story.id}
              className={styles.story}
              aria-labelledby={`${story.id}-title`}
            >
              <header className={styles.storyHeading}>
                <p className={styles.eyebrow}>{story.theme}</p>
                <h3 id={`${story.id}-title`}>{story.title}</h3>
                <p>{story.introduction}</p>
                <figure className={styles.quote}>
                  <blockquote>“{story.quote}”</blockquote>
                  <figcaption>
                    {story.author} · {story.location}
                  </figcaption>
                </figure>
                <Link className={styles.sourceLink} href={story.sourceHref}>
                  Read {story.author.split(" ")[0]}’s original feedback
                </Link>
              </header>
              <div className={styles.account}>
                <dl>
                  <div>
                    <dt>What mattered to the guest</dt>
                    <dd>{story.need}</dd>
                  </div>
                  <div>
                    <dt>How the service responded</dt>
                    <dd>{story.response}</dd>
                  </div>
                  <div>
                    <dt>What the guest valued</dt>
                    <dd>{story.outcome}</dd>
                  </div>
                </dl>
                <aside className={styles.takeaway} aria-label="A planning takeaway">
                  <h4>For your own journey</h4>
                  <p>{story.takeaway}</p>
                </aside>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.nextStep}>
          <p>What would make the biggest difference to your trip?</p>
          <Link href="/start-planning?source=about-service-cases">Tell us what matters to you</Link>
          <Link href="/reviews">Explore more guest feedback</Link>
        </div>
      </div>
    </section>
  );
}
