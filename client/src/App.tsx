const planningPrinciples = [
  "A clean visual system",
  "Readable typography",
  "Image-led storytelling",
  "Fast, maintainable pages",
];

export default function App() {
  return (
    <main className="reset-site">
      <section className="reset-hero" aria-labelledby="reset-title">
        <div className="reset-mark">CP</div>
        <p className="reset-eyebrow">China Prime DMC</p>
        <h1 id="reset-title">A clean rebuild starts here.</h1>
        <p className="reset-lede">
          The old interface has been removed. This is now a simple, stable starting point for rebuilding the China Prime DMC website with a clearer design system.
        </p>
        <div className="reset-grid">
          {planningPrinciples.map((item) => (
            <div key={item} className="reset-card">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
