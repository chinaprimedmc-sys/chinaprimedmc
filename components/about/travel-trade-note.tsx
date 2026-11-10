import Link from "next/link";
import { ArrowUpRight } from "@/components/icons/symbols";
import { OptimizedImage } from "@/components/media/optimized-image";
import { travelTradeRecord } from "@/content/about";
import { homeEditorialImages } from "@/content/home/homepage";
import styles from "./travel-trade-note.module.css";

/** A documented press mention, not an endorsement or accreditation. */
export function TravelTradeNote({ id, showImage = false }: { id: string; showImage?: boolean }) {
  return (
    <section className={showImage ? styles.withImage : styles.note} aria-labelledby={`${id}-title`}>
      {showImage ? (
        <figure className={styles.photo}>
          <OptimizedImage
            src={homeEditorialImages.tradeBuyerMeeting.src}
            alt={homeEditorialImages.tradeBuyerMeeting.alt}
            width={1080}
            height={720}
            sizes="(max-width: 767px) 100vw, 45vw"
            className={styles.image}
          />
          <figcaption>
            AVIORA in conversation with international travel professionals in Malaysia.
          </figcaption>
        </figure>
      ) : null}
      <div className={styles.copy}>
        <p className={styles.eyebrow}>A documented industry appearance</p>
        <h2 id={`${id}-title`}>Guohui Shi in TTG Asia’s MATTA Connect coverage.</h2>
        <p>{travelTradeRecord.summary}</p>
        <p>
          The report identifies him through China Prime DMC, the travel services identity used by
          AVIORA’s China team.
        </p>
        <div className={styles.links}>
          <a href={travelTradeRecord.sourceUrl} target="_blank" rel="noreferrer">
            Read the TTG Asia report <ArrowUpRight aria-hidden="true" />
          </a>
          <Link href={travelTradeRecord.storyPath}>Our story from MATTA Connect</Link>
        </div>
        <p className={styles.source}>
          TTG Asia · July 30, 2026 · Event coverage; no endorsement or certification is implied.
        </p>
      </div>
    </section>
  );
}
