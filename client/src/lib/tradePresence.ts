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
  metaDescription: string;
  conversationLead: {
    before: string;
    highlight: string;
    after: string;
  };
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
  contextLinks: Array<{
    label: string;
    url: string;
    sentence: string;
  }>;
  seoKeywords: string[];
  images: TradeShowImage[];
};

const icgteBase = "/trade-shows/icgte-2026-kuala-lumpur";
const icgteSingaporeBase = "/trade-shows/icgte-2026-singapore";

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
    metaDescription:
      "China Prime DMC at ICGTE 2026 Kuala Lumpur: B2B China ground services, Muslim-friendly China travel planning, white-label itinerary support, and buyer conversations with Malaysian travel partners.",
    conversationLead: {
      before: "At this event, the most useful conversations centered on",
      highlight: "Muslim-friendly China travel",
      after: "private and group routing, practical ground handling, and the kind of white-label support travel agencies need before they can confidently sell China.",
    },
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
    contextLinks: [
      {
        label: "Pentagon Exhibitions & Events",
        url: "https://www.pentagonevents.my/",
        sentence:
          "organized the regional trade setting, giving China Prime DMC direct conversations with Malaysian agencies and Southeast Asian travel planners.",
      },
      {
        label: "Pavilion Hotel Kuala Lumpur",
        url: "https://www.banyantree.com/malaysia/pavilion-hotel/meeting-venues/the-pavilion-ballroom",
        sentence:
          "provided a focused meeting venue where buyer consultations could move from destination interest into practical questions about China ground services.",
      },
      {
        label: "China-Malaysia mutual visa exemption",
        url: "https://my.china-embassy.gov.cn/eng/fwzc/lsyw/qz/202508/t20250801_11681401.htm",
        sentence:
          "adds a timely travel-policy context for Malaysian agencies rebuilding China programs for short-stay leisure and group clients.",
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
  {
    id: "icgte-2026-singapore",
    name: "Inbound China & Global Travel Exchange",
    shortName: "ICGTE 2026",
    date: "April 23, 2026",
    isoDate: "2026-04-23",
    city: "Singapore",
    country: "Singapore",
    headline: "A sharper China conversation with Singapore travel partners.",
    cardIntro:
      "At ICGTE 2026 Singapore, China Prime DMC connected with regional travel sellers, product planners, and China-focused partners looking for cleaner ways to package and operate China.",
    summary:
      "China Prime DMC joined ICGTE 2026 Singapore to meet travel trade partners, present China program materials, and discuss how Singapore-based agencies can sell China with stronger routing logic, clearer ground-service support, and partner-ready product language.",
    detailIntro:
      "Singapore is a compact but influential travel trade market. Agencies there often think regionally, move quickly, and expect supplier conversations to be practical. For China Prime DMC, ICGTE Singapore was less about broad destination promotion and more about sharpening how China is explained, packaged, and supported for global B2B travel partners.",
    metaDescription:
      "China Prime DMC at ICGTE 2026 Singapore: China DMC support for Singapore travel agents, regional distribution, fast quoting, white-label itinerary design, and China ground operations.",
    conversationLead: {
      before: "At this event, the most useful conversations centered on",
      highlight: "regional China product distribution",
      after: "fast quoting, sharper itinerary packaging, second-trip China ideas, and the kind of white-label execution Singapore agencies need when clients are already comparing destinations.",
    },
    proofPoints: [
      {
        title: "Singapore-based trade feedback",
        body: "from agencies and regional sellers who need China programs to be clear, efficient, and easy to explain to well-traveled clients.",
      },
      {
        title: "Visible China product materials",
        body: "including brochures and table-side program information that helped partners understand our routing, service scope, and B2B support model.",
      },
      {
        title: "Regional distribution conversations",
        body: "with partners who sell beyond one market and need a China DMC that can support private tours, groups, and repeat inquiry flow.",
      },
      {
        title: "On-the-floor product refinement",
        body: "based on real questions about pacing, hotel standards, guide quality, food planning, and what makes China easier to sell from Singapore.",
      },
    ],
    discussionTopics: [
      {
        title: "How to make China easier to package",
        body: "Singapore travel sellers often need China itineraries that are rich but not overcomplicated. We discussed how to frame classic routes, emerging destinations, seasonal hooks, and city combinations in a way that feels premium, practical, and ready for sales conversations.",
      },
      {
        title: "Shorter response cycles for agencies",
        body: "The Singapore market rewards speed. Partners wanted to know how quickly a China DMC can return routing advice, net pricing, hotel options, restaurant notes, and operational trade-offs when a client is already comparing destinations.",
      },
      {
        title: "China for sophisticated repeat travelers",
        body: "Unlike first-time-only markets, Singapore agencies often serve clients who have already traveled widely in Asia. We talked about deeper China experiences, second-trip ideas, food-led routing, cultural access, and ways to make China feel fresh rather than generic.",
      },
      {
        title: "Partner ownership and white-label delivery",
        body: "Several conversations focused on brand control. Agencies want to keep the client relationship while relying on a China-based operator for ground execution, supplier coordination, guide teams, transport, tickets, and in-trip problem solving.",
      },
    ],
    partnerValue: [
      {
        title: "Cleaner China sales language",
        body: "The Singapore meetings helped us refine how we describe China programs for agencies that need concise, commercially useful copy rather than long destination essays.",
      },
      {
        title: "More efficient inquiry handling",
        body: "Questions from partners reinforced the importance of fast feasibility checks, direct answers, and proposal structures that make it easier for sales teams to move from inquiry to quote.",
      },
      {
        title: "Stronger regional product thinking",
        body: "Singapore's travel trade often looks across Southeast Asia, so these conversations help us build China programs that work for regional distribution instead of a single local audience.",
      },
      {
        title: "Better proof for overseas agencies",
        body: "Photos from the booth, buyer meetings, and event backdrop give future partners visible evidence that China Prime DMC is active in the travel trade, not hidden behind a generic website.",
      },
    ],
    faqs: [
      {
        question: "Why is Singapore an important market for a China DMC?",
        answer:
          "Singapore is a regional travel hub with agencies serving sophisticated travelers, corporate clients, families, and multi-market audiences. For a China DMC, conversations in Singapore help refine how China is packaged for partners who expect speed, clarity, and professional ground support.",
      },
      {
        question: "What did China Prime DMC discuss at ICGTE 2026 Singapore?",
        answer:
          "The discussions focused on China itinerary packaging, private and group travel, white-label ground services, fast quoting, regional distribution, hotel standards, food planning, and how to present China to clients who may already know Asia well.",
      },
      {
        question: "Can Singapore travel agencies work with China Prime DMC on white-label programs?",
        answer:
          "Yes. We can support Singapore agencies with white-label China itinerary design, net pricing, guides, vehicles, hotels, restaurants, ticketing, rail and flight coordination, and in-trip operational support while the agency keeps the client relationship.",
      },
      {
        question: "Does China Prime DMC support customized China trips for experienced travelers?",
        answer:
          "Yes. We help partners design China journeys beyond standard sightseeing, including food-focused routes, cultural access, family-friendly programs, incentive travel, soft adventure, regional extensions, and second-trip ideas for clients who want more than a basic package.",
      },
    ],
    externalLinks: [
      {
        title: "Pentagon Exhibitions & Events",
        url: "https://www.pentagonevents.my/",
        description:
          "Event organizer behind travel trade exhibitions and MICE platforms in the region.",
      },
      {
        title: "Singapore Tourism Board",
        url: "https://www.stb.gov.sg/",
        description:
          "Official tourism board resource for Singapore's travel and business events ecosystem.",
      },
      {
        title: "Chinese Embassy in Singapore",
        url: "https://sg.china-embassy.gov.cn/eng/",
        description:
          "Official Chinese Embassy resource for Singapore-based travelers and China-related consular information.",
      },
    ],
    contextLinks: [
      {
        label: "Singapore Tourism Board",
        url: "https://www.stb.gov.sg/",
        sentence:
          "offers useful context on Singapore's role as a polished travel and business-events hub, which shapes how local agencies evaluate supplier professionalism.",
      },
      {
        label: "Chinese Embassy in Singapore",
        url: "https://sg.china-embassy.gov.cn/eng/",
        sentence:
          "is the relevant official source for Singapore-based China travel and consular information, making it the right policy reference for this market.",
      },
      {
        label: "Pentagon Exhibitions & Events",
        url: "https://www.pentagonevents.my/",
        sentence:
          "provided the trade-show platform where China Prime DMC could present China program materials and meet Singapore-facing travel sellers.",
      },
    ],
    seoKeywords: [
      "China Prime DMC at ICGTE 2026 Singapore",
      "China DMC for Singapore travel agents",
      "China ground handler for Singapore agencies",
      "B2B China travel partner Singapore",
      "white-label China itinerary support",
      "China inbound operator for Southeast Asia",
      "China private tour DMC Singapore",
      "China travel trade meeting Singapore",
    ],
    images: [
      {
        role: "primary",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-official-exhibition-backdrop-team-photo.jpeg`,
        alt: "China Prime DMC team at the official ICGTE 2026 Singapore exhibition backdrop for Inbound China and Global Travel Exchange.",
        caption: "China Prime DMC at ICGTE 2026 Singapore, meeting travel trade partners interested in China programs.",
      },
      {
        role: "supporting",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-booth-table-china-travel-brochures.jpeg`,
        alt: "China Prime DMC booth table with China travel brochures at ICGTE 2026 Singapore.",
        caption: "China travel materials and B2B program information presented at the ICGTE Singapore booth.",
      },
      {
        role: "supporting",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-one-on-one-buyer-consultation.jpeg`,
        alt: "China Prime DMC in a one-on-one buyer consultation at ICGTE 2026 Singapore.",
        caption: "One-on-one buyer consultation for China private tours, groups, and B2B ground services.",
      },
      {
        role: "gallery",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-official-backdrop-travel-easy-sign.jpeg`,
        alt: "China Prime DMC representative at the ICGTE 2026 Singapore official event backdrop holding a Travel Easy Travel Happy sign.",
        caption: "Representing China Prime DMC at the official ICGTE 2026 Singapore backdrop.",
      },
      {
        role: "gallery",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-travel-trade-partner-selfie.jpeg`,
        alt: "China Prime DMC team taking a selfie with a travel trade partner at ICGTE 2026 Singapore.",
        caption: "Building face-to-face relationships with travel trade partners at ICGTE 2026 Singapore.",
      },
      {
        role: "gallery",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-buyer-meeting-travel-agents-selfie.jpeg`,
        alt: "China Prime DMC team with Singapore travel agents during a buyer meeting at ICGTE 2026.",
        caption: "Meeting Singapore travel agents to discuss China itineraries and ground services.",
      },
      {
        role: "gallery",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-regional-travel-buyers.jpeg`,
        alt: "China Prime DMC team with regional travel buyers at ICGTE 2026 Singapore.",
        caption: "Discussing China product opportunities with regional travel buyers at ICGTE 2026 Singapore.",
      },
      {
        role: "gallery",
        src: `${icgteSingaporeBase}/china-prime-dmc-icgte-2026-singapore-southeast-asia-travel-partners.jpeg`,
        alt: "China Prime DMC meeting Southeast Asia travel partners at ICGTE 2026 Singapore.",
        caption: "Connecting with Southeast Asian travel partners interested in China programs.",
      },
    ],
  },
];
