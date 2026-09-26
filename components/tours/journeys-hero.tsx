import styles from "./journeys-hero.module.css";
export function JourneysHero() {
  return (
    <section className={styles.hero} aria-labelledby="journeys-title">
      <p className={styles.eyebrow}>Privately planned. Locally supported.</p>
      <h1 id="journeys-title">Private China journeys</h1>
      <p className={styles.description}>
        Compare routes, days and starting prices. Your final itinerary and services are confirmed in
        a written proposal.
      </p>
      <p className={styles.mobileDescription}>A few choices, then the journeys that fit.</p>
    </section>
  );
}
