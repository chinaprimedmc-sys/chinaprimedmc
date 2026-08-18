import Image from "next/image";

import styles from "@/components/home/home-service-standard.module.css";

type Standard = {
  number: string;
  title: string;
  description: string;
};

type StandardGroup = {
  image: {
    src: string;
    alt: string;
    position?: string;
  };
  standards: [Standard, Standard];
};

const standardGroups: StandardGroup[] = [
  {
    image: {
      src: "/home/standard/local-guide-private-walk.png",
      alt: "An AVIORA local guide speaking with international guests in Beijing",
      position: "50% 42%",
    },
    standards: [
      {
        number: "01",
        title: "End-to-End Ownership",
        description: "One local team remains responsible for your entire journey.",
      },
      {
        number: "02",
        title: "Quality Before Cost",
        description: "Guides, hotels and vehicles are never chosen on price alone.",
      },
    ],
  },
  {
    image: {
      src: "/journal/2026-08-06/china-high-speed-train-boarding.webp",
      alt: "An international traveler boarding a high-speed train in China",
      position: "50% 38%",
    },
    standards: [
      {
        number: "03",
        title: "Verified Before Arrival",
        description: "Every booking, timing and special requirement is checked in advance.",
      },
      {
        number: "04",
        title: "Every Handover Managed",
        description: "Airports, stations, hotels and cities are connected without guesswork.",
      },
    ],
  },
  {
    image: {
      src: "/tours/chengdu-pandas/guide.webp",
      alt: "An AVIORA local guide with a family traveling together in China",
      position: "50% 30%",
    },
    standards: [
      {
        number: "05",
        title: "Local Response When It Matters",
        description: "When plans change, our China team acts and resolves the issue.",
      },
      {
        number: "06",
        title: "No Unapproved Substitutions",
        description: "Important changes are always explained and agreed with you.",
      },
    ],
  },
];

export function HomeServiceStandard() {
  return (
    <section
      id="aviora-standard"
      className={styles.standard}
      aria-labelledby="aviora-standard-title"
    >
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>THE AVIORA STANDARD</p>
          <h2 id="aviora-standard-title">
            <span>We Do Not Simply Arrange Your Journey.</span>
            <span>We Take Responsibility for It.</span>
          </h2>
        </header>

        <div className={styles.groups} aria-label="The six AVIORA standards">
          {standardGroups.map((group) => (
            <article className={styles.group} key={group.standards[0].number}>
              <div className={styles.photo}>
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 900px) calc(100vw - 64px), (max-width: 1280px) 44vw, 576px"
                  style={{ objectPosition: group.image.position }}
                />
              </div>

              <div className={styles.standardsCopy}>
                {group.standards.map((standard) => (
                  <section className={styles.standardItem} key={standard.number}>
                    <span className={styles.standardNumber} aria-hidden="true">
                      {standard.number}
                    </span>
                    <div className={styles.standardContent}>
                      <h3>{standard.title}</h3>
                      <p>{standard.description}</p>
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.closing}>
          <p>One Journey. One Local Team. Accountable Throughout.</p>
        </footer>
      </div>
    </section>
  );
}
