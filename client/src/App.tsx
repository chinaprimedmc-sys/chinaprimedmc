type ImageAsset = {
  avif?: string;
  webp?: string;
  jpg: string;
  alt: string;
};

type Destination = {
  name: string;
  promise: string;
  mood: string;
  image: ImageAsset;
};

type Experience = {
  title: string;
  copy: string;
  image: ImageAsset;
};

type Tour = {
  title: string;
  days: string;
  fit: string;
  copy: string;
  image: ImageAsset;
};

const heroImage: ImageAsset = {
  avif: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park-1920.avif",
  webp: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park-1920.webp",
  jpg: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park.jpg",
  alt: "Misty sandstone peaks in Zhangjiajie National Forest Park, China",
};

const destinations: Destination[] = [
  {
    name: "Zhangjiajie",
    promise: "Walk through stone pillars that feel almost unreal.",
    mood: "Nature / Photography / First China Trip",
    image: {
      avif: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain-1920.avif",
      webp: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain-1920.webp",
      jpg: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg",
      alt: "Tianmen Mountain landscape in Zhangjiajie",
    },
  },
  {
    name: "Chengdu & Sichuan",
    promise: "Pandas, teahouses, soft mornings, and food with a pulse.",
    mood: "Family / Food / Slow Culture",
    image: {
      jpg: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
      alt: "Giant panda experience in Chengdu, Sichuan",
    },
  },
  {
    name: "Guilin & Yangshuo",
    promise: "Karst mountains, river light, bamboo rafts, and village roads.",
    mood: "Couples / Nature / Gentle Adventure",
    image: {
      avif: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river-1920.avif",
      webp: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river-1920.webp",
      jpg: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg",
      alt: "Li River karst mountains near Guilin and Yangshuo",
    },
  },
  {
    name: "Yunnan Highlands",
    promise: "Snow mountains, old towns, monastery bells, and clear air.",
    mood: "Luxury / Culture / Scenic Roads",
    image: {
      avif: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains-1920.avif",
      webp: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains-1920.webp",
      jpg: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg",
      alt: "Meili Snow Mountains in Yunnan",
    },
  },
];

const experiences: Experience[] = [
  {
    title: "Eat where the city actually eats",
    copy: "A private food walk can be elegant without becoming staged: night markets, tea houses, family-run kitchens, and the right table at the right hour.",
    image: {
      jpg: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-sichuan-cuisine.jpg",
      alt: "Sichuan cuisine served for a private China food journey",
    },
  },
  {
    title: "See the icons without the exhaustion",
    copy: "The Great Wall, Forbidden City, Terracotta Warriors, and Shanghai skyline can feel personal when the pacing is designed around your family.",
    image: {
      avif: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china-1920.avif",
      webp: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china-1920.webp",
      jpg: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg",
      alt: "Great Wall of China private travel experience",
    },
  },
  {
    title: "Make China feel easy",
    copy: "English-speaking support, private transfers, high-speed rail planning, food preferences, family rhythm, and local help when plans change.",
    image: {
      avif: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund-1920.avif",
      webp: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund-1920.webp",
      jpg: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg",
      alt: "Shanghai skyline on the Bund for a modern China itinerary",
    },
  },
];

const tours: Tour[] = [
  {
    title: "First China, beautifully paced",
    days: "10-12 days",
    fit: "Families / Couples / First-timers",
    copy: "Beijing, Xi'an, Guilin or Chengdu, and Shanghai arranged with private guides, calmer starts, and enough unscheduled time to breathe.",
    image: {
      jpg: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-terracotta-army.jpg",
      alt: "Terracotta Army in Xi'an for a classic private China tour",
    },
  },
  {
    title: "Mountains, rivers, and quiet villages",
    days: "9-14 days",
    fit: "Photography / Nature / Slow Travel",
    copy: "Zhangjiajie, Guilin, Huangshan, or Yunnan shaped into a cinematic route with sunrise windows and less crowded timing.",
    image: {
      avif: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan-1920.avif",
      webp: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan-1920.webp",
      jpg: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg",
      alt: "Huangshan mountains for a scenic China photography journey",
    },
  },
  {
    title: "Halal-aware China, privately planned",
    days: "8-14 days",
    fit: "Muslim Families / Multi-city",
    copy: "A route with prayer-aware pacing, halal dining research, private transport, and major cultural highlights that still feel comfortable.",
    image: {
      jpg: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
      alt: "Muslim Quarter in Xi'an for Muslim-friendly China travel",
    },
  },
];

const reviews = [
  {
    quote: "China felt huge before we arrived. By day two it felt welcoming, easy, and completely unforgettable.",
    name: "Rachel M.",
    trip: "Family journey / Beijing, Xi'an, Chengdu, Shanghai",
  },
  {
    quote: "The best part was not being rushed. We saw the icons, but the trip still felt like ours.",
    name: "Thomas & Elena",
    trip: "Private couple trip / Yunnan and Guilin",
  },
  {
    quote: "Food, trains, WeChat, timing, guides: all the things we worried about were quietly handled.",
    name: "Nadia A.",
    trip: "Muslim-friendly China route",
  },
];

function Picture({ image, className, loading = "lazy" }: { image: ImageAsset; className?: string; loading?: "lazy" | "eager" }) {
  return (
    <picture className={className}>
      {image.avif ? <source srcSet={image.avif} type="image/avif" /> : null}
      {image.webp ? <source srcSet={image.webp} type="image/webp" /> : null}
      <img src={image.jpg} alt={image.alt} loading={loading} decoding="async" />
    </picture>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="China Prime DMC home">
          <span className="brand-mark">CP</span>
          <span>China Prime</span>
        </a>
        <nav className="nav-links" aria-label="Main menu">
          <a href="#destinations">Destinations</a>
          <a href="#experiences">Experiences</a>
          <a href="#tours">Private Tours</a>
          <a href="#trust">Why Us</a>
        </nav>
        <a className="nav-cta" href="mailto:chinaprimedmc@gmail.com?subject=Plan%20my%20private%20China%20journey">Start Planning</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Picture image={heroImage} className="hero-media" loading="eager" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Private China journeys for international travelers</p>
            <h1 id="hero-title">China should feel extraordinary, not complicated.</h1>
            <p className="hero-copy">
              We design private China trips around the way you actually travel: your pace, your food needs, your family rhythm, your first questions, and the moments you will remember years later.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:chinaprimedmc@gmail.com?subject=Start%20planning%20my%20China%20journey">Build my itinerary</a>
              <a className="button button-ghost" href="#destinations">See where China begins</a>
            </div>
          </div>
          <div className="hero-proof" aria-label="Travel planning highlights">
            <span>Founded 2012</span>
            <span>Private guides</span>
            <span>Family & halal-aware planning</span>
          </div>
        </section>

        <section className="intro scene-bright" aria-labelledby="intro-title">
          <div className="section-kicker">Dream first. Details second.</div>
          <div className="intro-grid">
            <h2 id="intro-title">The right China trip does not feel like a checklist.</h2>
            <p>
              It feels like watching your children meet a panda in Chengdu. Like stepping onto the Great Wall before the day gets loud. Like eating noodles in a city you did not expect to love. We handle the complexity so the journey can stay human.
            </p>
          </div>
        </section>

        <section className="destinations" id="destinations" aria-labelledby="destinations-title">
          <div className="section-heading">
            <p className="eyebrow dark">Popular ways to enter China</p>
            <h2 id="destinations-title">Choose the feeling first. We will shape the route.</h2>
          </div>
          <div className="destination-grid">
            {destinations.map((destination) => (
              <article className="destination-card" key={destination.name}>
                <Picture image={destination.image} className="card-media" />
                <div className="card-copy">
                  <p>{destination.mood}</p>
                  <h3>{destination.name}</h3>
                  <span>{destination.promise}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="split-story" id="experiences" aria-labelledby="experiences-title">
          <div className="split-copy">
            <p className="eyebrow dark">Experiences</p>
            <h2 id="experiences-title">You are not coming this far for a generic tour.</h2>
            <p>
              Your China can be food-led, culture-led, nature-led, family-led, luxury-led, or quietly adventurous. The route should adapt to you, not the other way around.
            </p>
            <a className="text-link" href="mailto:chinaprimedmc@gmail.com?subject=I%20want%20a%20custom%20China%20experience">Tell us what you love</a>
          </div>
          <div className="experience-stack">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.title}>
                <Picture image={experience.image} className="experience-media" />
                <div>
                  <h3>{experience.title}</h3>
                  <p>{experience.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tours" id="tours" aria-labelledby="tours-title">
          <div className="section-heading narrow">
            <p className="eyebrow dark">Private tours</p>
            <h2 id="tours-title">Start with a route idea. Leave room for your story.</h2>
            <p>These are not fixed packages. They are starting points for a private China itinerary designed around your dates, budget, comfort level, and travel style.</p>
          </div>
          <div className="tour-grid">
            {tours.map((tour) => (
              <article className="tour-card" key={tour.title}>
                <Picture image={tour.image} className="tour-media" />
                <div className="tour-body">
                  <div className="tour-meta">
                    <span>{tour.days}</span>
                    <span>{tour.fit}</span>
                  </div>
                  <h3>{tour.title}</h3>
                  <p>{tour.copy}</p>
                  <a href={`mailto:chinaprimedmc@gmail.com?subject=${encodeURIComponent(`Plan this route: ${tour.title}`)}`}>Ask for this route idea</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust" id="trust" aria-labelledby="trust-title">
          <div className="trust-panel">
            <p className="eyebrow">Why travelers trust us</p>
            <h2 id="trust-title">China is easier when someone local is thinking three steps ahead.</h2>
          </div>
          <div className="trust-grid">
            <article>
              <strong>Human planning</strong>
              <p>No generic form replies. We ask the small questions that change the whole trip: walking tolerance, food comfort, family pace, hotel style, and what you are secretly hoping for.</p>
            </article>
            <article>
              <strong>Private, flexible days</strong>
              <p>Guides and drivers are arranged around your rhythm, so you can slow down, change course, or linger when a place becomes the highlight.</p>
            </article>
            <article>
              <strong>Local support inside China</strong>
              <p>Trains, payments, weather, dining, guide timing, and last-minute changes are handled with calm local help instead of guesswork.</p>
            </article>
          </div>
        </section>

        <section className="reviews" aria-labelledby="reviews-title">
          <div className="section-heading narrow">
            <p className="eyebrow dark">Traveler stories</p>
            <h2 id="reviews-title">The best feedback is usually relief.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure className="review-card" key={review.name}>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <span>{review.trip}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="planner" aria-labelledby="planner-title">
          <Picture
            image={{
              avif: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang-1920.avif",
              webp: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang-1920.webp",
              jpg: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
              alt: "Crescent Lake in Dunhuang for a Silk Road China journey",
            }}
            className="planner-media"
          />
          <div className="planner-card">
            <p className="eyebrow dark">Plan with less friction</p>
            <h2 id="planner-title">Tell us what kind of China you want to feel.</h2>
            <p>
              Send your dates, traveler count, must-see places, food needs, and pace. We will return with a first route idea that makes the country feel possible.
            </p>
            <a className="button button-primary" href="mailto:chinaprimedmc@gmail.com?subject=Plan%20my%20private%20China%20trip&body=Travel%20dates:%0ATravelers:%0AInterests:%0AFood%20or%20accessibility%20needs:%0APreferred%20pace:%0AMust-see%20places:%0A">Get my first route idea</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>China Prime DMC</strong>
          <p>Private China journeys for travelers who want beauty, comfort, and local intelligence.</p>
        </div>
        <div className="footer-links">
          <a href="#destinations">Destinations</a>
          <a href="#experiences">Experiences</a>
          <a href="#tours">Private Tours</a>
          <a href="mailto:chinaprimedmc@gmail.com">Contact</a>
        </div>
      </footer>

      <a className="floating-inquiry" href="mailto:chinaprimedmc@gmail.com?subject=Private%20China%20trip%20inquiry">Plan my trip</a>
    </div>
  );
}
