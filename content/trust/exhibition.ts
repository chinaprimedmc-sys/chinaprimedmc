import type { MediaAsset } from "@/types/component-library";

export const exhibitionProof = {
  eyebrow: "Industry presence",
  title: "China Prime DMC meets travelers and partners where China travel is being shaped.",
  description:
    "Our ICGTE 2026 presence gives international travelers another reason to trust the team behind the route: we are active in inbound China travel conversations, partner meetings, and buyer feedback across the region.",
  image: {
    src: "/trade-shows/icgte-2026-singapore/china-prime-dmc-icgte-2026-singapore-official-exhibition-backdrop-team-photo.jpeg",
    alt: "China Prime DMC team at ICGTE 2026 Singapore inbound China travel exhibition",
    width: 1080,
    height: 810,
    objectPosition: "50% 50%",
  } satisfies MediaAsset,
  gallery: [
    {
      src: "/trade-shows/icgte-2026-singapore/china-prime-dmc-icgte-2026-singapore-one-on-one-buyer-consultation.jpeg",
      alt: "China Prime DMC in one-on-one buyer consultation at ICGTE 2026 Singapore",
      width: 1080,
      height: 810,
      objectPosition: "50% 50%",
    },
    {
      src: "/trade-shows/icgte-2026-singapore/china-prime-dmc-icgte-2026-singapore-regional-travel-buyers.jpeg",
      alt: "Regional travel buyers meeting China Prime DMC at ICGTE 2026 Singapore",
      width: 1080,
      height: 810,
      objectPosition: "50% 50%",
    },
  ] satisfies MediaAsset[],
  facts: [
    {
      label: "ICGTE 2026",
      value: "Inbound China & Global Travel Exchange",
    },
    {
      label: "Singapore",
      value: "Regional buyer conversations",
    },
    {
      label: "Travel trade",
      value: "Feedback that improves traveler-facing routes",
    },
  ],
};
