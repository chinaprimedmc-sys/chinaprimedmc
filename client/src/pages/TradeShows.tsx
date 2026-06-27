import TradePresence from "@/components/TradePresence";

export default function TradeShows() {
  return (
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap">
          <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Trade show archive</p>
          <h1 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 980 }}>
            Where China Prime DMC meets the travel trade.
          </h1>
          <p className="b2b-lede" style={{ color: "var(--brand-gray-300)", maxWidth: 760 }}>
            A curated record of industry events, buyer meetings, and partner conversations that shape how we build China programs for overseas travel brands.
          </p>
        </div>
      </section>

      <TradePresence variant="about" />
    </main>
  );
}
