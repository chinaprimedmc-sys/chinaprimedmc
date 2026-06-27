import TradePresence from "@/components/TradePresence";
import MediaHero from "@/components/MediaHero";
import { pageHeroImages } from "@/lib/heroImages";

export default function TradeShows() {
  return (
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <MediaHero
        image={pageHeroImages.tradeShows}
        alt="China Prime DMC exhibition backdrop at ICGTE Kuala Lumpur travel trade event."
        eyebrow="Trade show archive"
        title="Where China Prime DMC meets the travel trade."
        body="A curated record of industry events, buyer meetings, and partner conversations that shape how we build China programs for overseas travel brands."
        stats={[
          { value: "2026", label: "Latest events" },
          { value: "Kuala Lumpur / Singapore", label: "Buyer markets" },
          { value: "B2B", label: "Trade focus" },
        ]}
      />

      <TradePresence variant="about" />
    </main>
  );
}
