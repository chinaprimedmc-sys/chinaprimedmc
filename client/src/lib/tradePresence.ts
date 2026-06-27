export type TradeShowImage = {
  src: string;
  alt: string;
  caption: string;
  role: "primary" | "supporting" | "gallery";
};

export type TradeShowPresence = {
  id: string;
  name: string;
  shortName: string;
  date: string;
  city: string;
  country: string;
  headline: string;
  summary: string;
  proofPoints: Array<{
    title: string;
    body: string;
  }>;
  seoKeywords: string[];
  images: TradeShowImage[];
};

const icgteBase = "/trade-shows/icgte-2026-kuala-lumpur";

export const tradeShows: TradeShowPresence[] = [
  {
    id: "icgte-2026-kuala-lumpur",
    name: "Inbound China & Global Travel Exchange",
    shortName: "ICGTE 2026",
    date: "April 21, 2026",
    city: "Kuala Lumpur",
    country: "Malaysia",
    headline: "Face-to-face with the travel trade in Kuala Lumpur.",
    summary:
      "At ICGTE 2026, China Prime DMC met with Malaysian travel buyers, Muslim-friendly travel planners, and regional trade partners to discuss China ground services, private programs, group travel, and white-label itinerary support.",
    proofPoints: [
      {
        title: "Real buyer conversations",
        body: "with agencies actively looking for China programs, not anonymous online inquiries.",
      },
      {
        title: "Muslim-friendly China travel demand",
        body: "from Southeast Asian partners who need reliable routing, meals, prayer-aware pacing, and clear operating notes.",
      },
      {
        title: "Trade-ready China program materials",
        body: "presented in person so partners could understand how our itineraries are built, priced, and delivered.",
      },
      {
        title: "Direct feedback from selling partners",
        body: "which helps us refine China products around what overseas clients actually ask before they book.",
      },
    ],
    seoKeywords: [
      "China DMC at ICGTE 2026",
      "Kuala Lumpur travel trade show China operator",
      "China ground handler for Malaysian travel agents",
      "Muslim-friendly China travel DMC",
      "B2B China travel partner",
    ],
    images: [
      {
        role: "primary",
        src: `${icgteBase}/china-prime-dmc-icgte-2026-kuala-lumpur-travel-trade-buyer-meeting.jpeg`,
        alt: "China Prime DMC meeting travel trade buyers at ICGTE 2026 in Kuala Lumpur, Malaysia.",
        caption: "Discussing China ground services with travel trade buyers at ICGTE 2026.",
      },
      {
        role: "supporting",
        src: `${icgteBase}/china-prime-dmc-icgte-2026-kuala-lumpur-one-on-one-buyer-consultation.jpeg`,
        alt: "China Prime DMC in a one-on-one buyer consultation at ICGTE 2026 in Kuala Lumpur.",
        caption: "One-on-one buyer consultation for China travel programs.",
      },
      {
        role: "supporting",
        src: `${icgteBase}/china-prime-dmc-icgte-2026-kuala-lumpur-muslim-travel-buyers.jpeg`,
        alt: "China Prime DMC presenting China travel programs to Muslim travel buyers at ICGTE 2026 Kuala Lumpur.",
        caption: "Presenting China program options to Muslim travel buyers.",
      },
      {
        role: "gallery",
        src: `${icgteBase}/china-prime-dmc-icgte-2026-kuala-lumpur-exhibition-backdrop.jpeg`,
        alt: "China Prime DMC representative at the ICGTE 2026 exhibition backdrop in Kuala Lumpur, Malaysia.",
        caption: "China Prime DMC at Inbound China & Global Travel Exchange 2026.",
      },
      {
        role: "gallery",
        src: `${icgteBase}/china-prime-dmc-icgte-2026-kuala-lumpur-malaysia-travel-agents-selfie.jpeg`,
        alt: "China Prime DMC team with Malaysian travel agents at ICGTE 2026 in Kuala Lumpur.",
        caption: "Building trade relationships with Malaysian travel agents.",
      },
      {
        role: "gallery",
        src: `${icgteBase}/china-prime-dmc-icgte-2026-kuala-lumpur-booth-team-brochures.jpeg`,
        alt: "China Prime DMC team at the ICGTE 2026 booth with China travel brochures in Kuala Lumpur.",
        caption: "China travel program materials at the ICGTE 2026 booth.",
      },
      {
        role: "gallery",
        src: `${icgteBase}/china-prime-dmc-icgte-2026-kuala-lumpur-muslim-friendly-partner-selfie.jpeg`,
        alt: "China Prime DMC team with a Muslim-friendly travel partner at ICGTE 2026 Kuala Lumpur.",
        caption: "Connecting with Muslim-friendly travel partners.",
      },
    ],
  },
];
