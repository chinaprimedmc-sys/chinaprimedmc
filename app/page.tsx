import Image from "next/image";

const phoneDisplay = "+86 10 0000 0000";
const phoneHref = "tel:+861000000000";

const strengths = [
  {
    title: "Calm planning for complex journeys",
    body: "Private China programs shaped around pace, comfort, mobility, dietary needs, and family priorities.",
  },
  {
    title: "On-ground operations, not just ideas",
    body: "Hotel, guide, transport, restaurant, and experience sourcing handled with measured detail.",
  },
  {
    title: "Clear communication for partners",
    body: "Designed for overseas agencies and families who need precise answers before guests arrive.",
  },
];

const journeys = [
  {
    title: "First China, Carefully Paced",
    meta: "Beijing · Xi'an · Shanghai",
    body: "A classic route softened with private transfers, generous museum timing, and quiet dining moments.",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Yunnan In Soft Focus",
    meta: "Dali · Lijiang · Shangri-La",
    body: "Boutique stays, slower mornings, local markets, and mountain landscapes without a rushed checklist.",
    image:
      "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Family Nature And Culture",
    meta: "Guilin · Chengdu · Zhangjiajie",
    body: "Balanced days for mixed ages, with soft adventure, flexible meals, and dependable local care.",
    image:
      "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?auto=format&fit=crop&w=1200&q=82",
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner container">
          <a className="brand" href="#" aria-label="China Prime DMC home">
            <span className="brand-name">China Prime DMC</span>
            <span className="brand-caption">Private China journeys</span>
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="#approach">Approach</a>
            <a href="#journeys">Journeys</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a className="phone-link" href={phoneHref}>
              {phoneDisplay}
            </a>
            <a className="button" href="mailto:hello@chinaprimedmc.com">
              Plan a journey
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">Tailor-made inbound travel across China</p>
            <h1>China, arranged with patience and precision.</h1>
            <p className="hero-lede">
              Private journeys for families, senior travelers, and discerning overseas partners who
              value calm planning, thoughtful pacing, and dependable local operations.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:hello@chinaprimedmc.com">
                Start a proposal
              </a>
              <a className="button secondary" href={phoneHref}>
                Call {phoneDisplay}
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Travel planning note">
            <strong>Built for comfort-led travel</strong>
            <p>
              Larger type, clear contact paths, private pacing, and simple decision points for
              guests who prefer confidence over noise.
            </p>
          </aside>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="intro-grid container">
          <div>
            <p className="section-kicker">Our approach</p>
            <h2 className="section-heading">
              Quietly detailed travel design for people who notice the small things.
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              China Prime DMC supports high-end inbound programs across China, with a particular eye
              toward families, mature travelers, and agency partners who need operational clarity
              before guests land.
            </p>
            <p>
              The work is intentionally restrained: no overpacked days, no generic promises, no
              decorative drama. Just precise routing, reliable people, and a warmer way to
              experience China.
            </p>
          </div>
        </div>

        <div className="proof-grid container">
          {strengths.map((item) => (
            <article className="proof-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted" id="journeys">
        <div className="container">
          <p className="section-kicker">Selected journey styles</p>
          <h2 className="section-heading">
            Routes with enough structure to feel effortless, and enough space to feel personal.
          </h2>

          <div className="journey-grid">
            {journeys.map((journey) => (
              <article className="journey-card" key={journey.title}>
                <div className="journey-media">
                  <Image
                    src={journey.image}
                    alt=""
                    width={1200}
                    height={1500}
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="journey-body">
                  <p className="journey-meta">{journey.meta}</p>
                  <h3>{journey.title}</h3>
                  <p>{journey.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div className="contact-panel container">
          <div>
            <h2 className="section-heading">Speak with a China specialist.</h2>
            <p>
              For senior guests and family decision-makers, a simple phone call is often the easiest
              first step. We keep the planning path direct.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button" href={phoneHref}>
              Call {phoneDisplay}
            </a>
            <a className="button secondary" href="mailto:hello@chinaprimedmc.com">
              Email proposal request
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner container">
          <span>China Prime DMC</span>
          <span>Tailor-made China travel for overseas partners.</span>
        </div>
      </footer>
    </main>
  );
}
