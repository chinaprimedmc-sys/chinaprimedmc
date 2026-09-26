import styles from "./loading.module.css";

export default function ToursLoading() {
  return (
    <main className={styles.loading} aria-label="Loading journeys">
      <section className={styles.hero}>
        <div className={styles.copy}>
          <span />
          <strong />
          <p />
          <i />
        </div>
        <div className={styles.heroImage} />
      </section>
      <section className={styles.catalog}>
        <header>
          <span />
          <strong />
        </header>
        <div className={styles.filter} />
        <div className={styles.featured}>
          <div />
          <article>
            <span />
            <strong />
            <p />
            <i />
          </article>
        </div>
        <div className={styles.grid}>
          {Array.from({ length: 4 }).map((_, index) => (
            <article key={index}>
              <div />
              <strong />
              <p />
              <i />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
