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
  isoDate: string;
  city: string;
  country: string;
  headline: string;
  cardIntro: string;
  summary: string;
  detailIntro: string;
  proofPoints: Array<{
    title: string;
    body: string;
  }>;
  discussionTopics: Array<{
    title: string;
    body: string;
  }>;
  partnerValue: Array<{
    title: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  externalLinks: Array<{
    title: string;
    url: string;
    description: string;
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
    isoDate: "2026-04-21",
    city: "Kuala Lumpur",
    country: "Malaysia",
    headline: "Face-to-face with the travel trade in Kuala Lumpur.",
    cardIntro:
      "China Prime DMC met Malaysian travel buyers and Muslim-friendly travel planners to discuss practical China programs for overseas partners.",
    summary:
      "At ICGTE 2026, China Prime DMC met with Malaysian travel buyers, Muslim-friendly travel planners, and regional trade partners to discuss China ground services, private programs, group travel, and white-label itinerary support.",
    detailIntro:
      "For B2B partners, trade shows are not just photo opportunities. They are where real demand becomes clear: what travel agents are selling, what clients hesitate about, what routes feel practical, and what support overseas partners need from a China-based DMC.",
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
    discussionTopics: [
      {
        title: "China routing that feels easy to sell",
        body: "Many overseas agencies want China programs that are impressive without becoming operationally heavy. We discussed practical routing through gateway cities, realistic travel times, supplier coordination, and how to present China to clients who may be visiting for the first time.",
      },
      {
        title: "Muslim-friendly travel planning",
        body: "Malaysia is an important source market for Muslim travelers, so conversations naturally covered halal-aware dining, prayer-friendly pacing, family comfort, guide communication, and the importance of clear notes before clients arrive in China.",
      },
      {
        title: "Private, group, and white-label support",
        body: "Travel partners asked about private FIT arrangements, small group departures, educational groups, incentive travel, and white-label support that lets them keep the client relationship while we operate the China side on the ground.",
      },
      {
        title: "Confidence before booking",
        body: "Several discussions focused on the details that help agencies close sales: transparent inclusions, net pricing logic, hotel standards, restaurant planning, guide quality, emergency support, and fast answers during the quoting stage.",
      },
    ],
    partnerValue: [
      {
        title: "Better product-market fit",
        body: "Buyer feedback helps us shape China itineraries around what overseas travelers actually ask for, rather than building programs only from an internal destination list.",
      },
      {
        title: "Sharper B2B documentation",
        body: "In-person conversations show us where partners need clearer language, stronger selling points, better routing explanations, and cleaner operational notes.",
      },
      {
        title: "More relevant Muslim-friendly programs",
        body: "The Kuala Lumpur meetings reinforced the need for practical Muslim-friendly China travel design that goes beyond a simple restaurant label.",
      },
      {
        title: "Stronger trade relationships",
        body: "Meeting agencies face to face makes follow-up faster, more specific, and more useful when a partner later sends a real China inquiry.",
      },
    ],
    faqs: [
      {
        question: "Why does ICGTE 2026 matter for China Prime DMC partners?",
        answer:
          "ICGTE 2026 gave China Prime DMC direct access to Malaysian travel buyers, Muslim-friendly travel planners, and regional agencies interested in selling China. For B2B partners, that matters because our China programs are shaped by real trade conversations, not only destination research.",
      },
      {
        question: "Does China Prime DMC support Muslim-friendly China itineraries?",
        answer:
          "Yes. We help partners plan Muslim-friendly China travel with attention to routing, meal planning, prayer-aware pacing, family comfort, guide communication, and clear pre-trip operating notes. The goal is to make the journey practical for travelers and easy for agencies to sell.",
      },
      {
        question: "Can travel agencies use China Prime DMC as a white-label ground handler?",
        answer:
          "Yes. We support travel advisors, tour operators, and DMC partners with white-label China itinerary design, net pricing, supplier coordination, guides, vehicles, hotels, restaurants, entrances, trains, flights, and in-trip support.",
      },
      {
        question: "What kinds of China programs were discussed at the event?",
        answer:
          "The conversations covered private China journeys, group travel, Muslim-friendly programs, family travel, incentive travel, educational trips, multi-city classic routes, and customized China ground services for overseas travel brands.",
      },
    ],
    externalLinks: [
      {
        title: "Pentagon Exhibitions & Events",
        url: "https://www.pentagonevents.my/",
        description:
          "Malaysia-based event organizer specializing in meetings, incentives, conferences, and exhibitions.",
      },
      {
        title: "Pavilion Hotel Kuala Lumpur meeting venue",
        url: "https://www.banyantree.com/malaysia/pavilion-hotel/meeting-venues/the-pavilion-ballroom",
        description:
          "Official venue information for the Pavilion Ballroom at Pavilion Hotel Kuala Lumpur.",
      },
      {
        title: "China-Malaysia mutual visa exemption FAQ",
        url: "https://my.china-embassy.gov.cn/eng/fwzc/lsyw/qz/202508/t20250801_11681401.htm",
        description:
          "Official consular context on short-term visa-free travel between China and Malaysia.",
      },
    ],
    seoKeywords: [
      "China DMC at ICGTE 2026",
      "Kuala Lumpur travel trade show China operator",
      "China ground handler for Malaysian travel agents",
      "Muslim-friendly China travel DMC",
      "B2B China travel partner",
      "China private tour ground handler",
      "white-label China itinerary design",
      "China inbound operator for travel agencies",
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
