/**
 * 本模块职责：9 天北京·西安·上海行程的“慢节奏 / 银发友好”服务标准与每日交通、步数数据。
 * 输入：无运行时输入；由 content/tours/index.ts 合并进该行程。
 * 输出：seniorStandard 区块文案、每天的 transit / steps / 活动改写、新增 FAQ。
 * 不负责：价格（未核实前不公开）、图片与坐标（沿用原行程每天的数据）。
 * 关键规则：所有服务承诺均由运营方书面确认（2026-11-05，见 docs/audit/implementation-log.md）；
 * 步数为每日预算上限，不是保证游客不会走更多路；价格不出现在任何文案里。
 */

import type { Tour, TourFaq, TourItineraryDay } from "@/types/tour";

export const slowPacedSlug = "beijing-xian-shanghai-private-9-day-tour";

type DayOverride = Pick<
  TourItineraryDay,
  "title" | "destination" | "summary" | "transport" | "meals" | "hotel" | "activities" | "guideNote"
> & { transit: string; steps: string };

export const slowPacedDays: DayOverride[] = [
  {
    title: "Beijing arrival and VIP escort",
    destination: "Beijing",
    summary:
      "Arrive, be met at the baggage-claim exit and rest. Nothing is scheduled today, so jet lag does not cost you a sightseeing day.",
    hotel: "Central 5-star hotel, Beijing (night 1)",
    meals: ["No scheduled meal on arrival day"],
    transport: "Private airport transfer in a Mercedes van",
    transit:
      "PEK airport to hotel: 45–50 minutes by road. PKX airport to hotel: 55–65 minutes. VIP lane pickup, with a flat 3-minute walk.",
    steps: "Under 1,500 steps (rest and recovery day)",
    activities: [
      {
        title: "VIP airport welcome",
        description:
          "Your guide meets you at the baggage-claim exit. Your driver handles every bag, and a private transfer takes you to a central 5-star hotel.",
      },
      {
        title: "A soft first evening",
        description:
          "The evening stays open for rest. Your guide hands you the large-print itinerary card for tomorrow and explains how mobile payments work, so you never have to handle them.",
      },
    ],
    guideNote:
      "Arrival day is kept deliberately light. A good first night is part of a well-designed itinerary.",
  },
  {
    title: "Mutianyu Great Wall by gondola",
    destination: "Beijing",
    summary:
      "The Great Wall without the climb: an enclosed gondola glides straight to a flat section of the wall, and you are back at the hotel for the afternoon.",
    hotel: "Central 5-star hotel, Beijing (night 2)",
    meals: ["Hotel breakfast", "Other meals as set out in your written proposal"],
    transport: "Private Mercedes van with a comfort stop",
    transit:
      "Hotel to Mutianyu: 73 km, about 75 minutes by private Mercedes van, with a 40-minute mid-way comfort stop.",
    steps: "Under 3,500 steps. Hotel return by 3:30 PM",
    activities: [
      {
        time: "Morning",
        title: "Enclosed gondola to Watchtower 14",
        description:
          "An enclosed 8-person gondola cable car glides directly to Watchtower 14, a flat brick platform. No climbing is required, and your guide provides a portable seat for rests.",
      },
      {
        time: "Afternoon",
        title: "Back at the hotel by 3:30 PM",
        description: "A slow descent and the drive back, so you have the afternoon at leisure.",
      },
    ],
    guideNote:
      "Your guide uses the Whisper wireless audio system so you can hear the history at your preferred volume.",
  },
  {
    title: "The Forbidden City and the Summer Palace, with VIP access",
    destination: "Beijing",
    summary:
      "Imperial Beijing at a pace that lets you enjoy it: a step-free VIP entry, an electric cart inside the grounds and a private boat on the lake.",
    hotel: "Central 5-star hotel, Beijing (night 3)",
    meals: ["Hotel breakfast", "Other meals as set out in your written proposal"],
    transport: "Climate-controlled Mercedes van, short downtown transfers",
    transit: "20–25 minute downtown transfers in a climate-controlled van.",
    steps: "Under 4,000 steps. Hotel return by 3:30 PM",
    activities: [
      {
        time: "Morning",
        title: "Forbidden City by electric cart",
        description:
          "Drop-off is at the closest step-free VIP entry, with Meridian Gate and East Glorious Gate routing vetted in advance. An electric cart carries you across the Imperial grounds. Tickets are reserved against your passports, and the Forbidden City is closed on Mondays, so this day is fixed first.",
      },
      {
        time: "Afternoon",
        title: "Private boat cruise at the Summer Palace",
        description: "See the palace from the lake on a private boat cruise.",
      },
    ],
    guideNote: "The route and its rest points are checked before you arrive.",
  },
  {
    title: "High-speed bullet train to Xi'an",
    destination: "Xi'an",
    summary:
      "A luggage-free First Class bullet train to Xi'an, with porters handling every suitcase from your hotel room to the train rack, and a silent hotel check-in on arrival.",
    hotel: "Central hotel, Xi'an (night 1)",
    meals: ["Hotel breakfast", "Other meals as set out in your written proposal"],
    transport: "High-speed rail, First Class",
    transit:
      "Beijing to Xi'an: 4.5 hours in a First Class bullet train, with 30-minute station transfers at both ends.",
    steps: "Under 2,500 steps",
    activities: [
      {
        title: "Luggage-free station transfer",
        description:
          "Hotel-to-station porters board every bag directly onto the train racks. You carry nothing.",
      },
      {
        time: "Evening",
        title: "Silent hotel check-in",
        description:
          "Arrive in the evening, check in quietly and rest. Tomorrow is a longer day, so tonight is for recovery.",
      },
    ],
    guideNote:
      "Tickets are bought against your passports and your local team handles every handover at both stations.",
  },
  {
    title: "The Terracotta Warriors, on the VIP route",
    destination: "Xi'an",
    summary:
      "The Terracotta Army without the long walks: an electric shuttle from the main gate to the pit entrances, and quiet galleries with rest zones.",
    hotel: "Central hotel, Xi'an (night 2)",
    meals: ["Hotel breakfast", "Other meals as set out in your written proposal"],
    transport: "Private van",
    transit: "Xi'an downtown to the museum: 42 km, about 50 minutes by private van.",
    steps: "Under 4,000 steps. Hotel return by 3:30 PM",
    activities: [
      {
        time: "Morning",
        title: "Priority electric shuttle to the pits",
        description:
          "A priority electric shuttle cart carries you from the main gate directly to the museum pit entrances. Entry is reserved against your passport details in advance.",
      },
      {
        time: "Afternoon",
        title: "Quiet galleries and rest zones",
        description: "Time in the quiet artifact viewing galleries, with rest zones along the way.",
      },
    ],
    guideNote: "The day is a planned half day plus rest, not a quick stop.",
  },
  {
    title: "Xi'an cultural quarter and shadow puppetry",
    destination: "Xi'an",
    summary:
      "A gentle stroll along the widest, flat section of the ancient City Wall, then a private shadow puppet performance in a restored courtyard.",
    hotel: "Central hotel, Xi'an (night 3)",
    meals: ["Hotel breakfast", "Other meals as set out in your written proposal"],
    transport: "Private van, short transfers",
    transit: "15-minute urban transfers.",
    steps: "Under 3,000 steps",
    activities: [
      {
        title: "The ancient City Wall",
        description:
          "A gentle stroll on the widest, flat section of the wall, with portable seats provided wherever you want to stop.",
      },
      {
        title: "Private shadow puppet performance",
        description: "A private shadow puppet performance in a restored courtyard.",
      },
    ],
    guideNote: "The day is kept short so you can rest.",
  },
  {
    title: "Bullet train to Shanghai and the Bund skyline",
    destination: "Shanghai",
    summary:
      "A second luggage-free train day, then a private Mercedes transfer to a luxury Bund hotel and an evening cruise on the Huangpu River.",
    hotel: "Luxury Bund hotel, Shanghai (night 1)",
    meals: ["Hotel breakfast", "Other meals as set out in your written proposal"],
    transport: "High-speed rail, First Class",
    transit: "Xi'an to Shanghai: 5.5 to 6 hours in a First Class bullet train.",
    steps: "Under 2,500 steps",
    activities: [
      {
        title: "Luggage handled by porters",
        description:
          "Porters handle every bag at both stations, and a scenic high-speed train carries you to Shanghai.",
      },
      {
        time: "Evening",
        title: "Private VIP Huangpu River cruise",
        description: "The Bund and Pudong skyline from the water, in the evening light.",
      },
    ],
    guideNote:
      "Train timing is chosen for your date, with a rest built in on both sides of the journey.",
  },
  {
    title: "Modern Shanghai architecture and tea at the Peace Hotel",
    destination: "Shanghai",
    summary:
      "An unhurried morning on the flat Bund promenade, afternoon tea at the historic Peace Hotel and leisure time in the Former French Concession.",
    hotel: "Luxury Bund hotel, Shanghai (night 2)",
    meals: ["Hotel breakfast", "Afternoon tea at the Peace Hotel"],
    transport: "Private van, short urban transfers",
    transit: "15–20 minute urban transfers.",
    steps: "Under 3,500 steps",
    activities: [
      {
        time: "Morning",
        title: "A walk along the Bund promenade",
        description:
          "An unhurried morning walk on the flat promenade, with old and new Shanghai side by side.",
      },
      {
        time: "Afternoon",
        title: "Afternoon tea at the Peace Hotel",
        description:
          "Traditional afternoon tea at the historic Peace Hotel, then leisure time in the Former French Concession.",
      },
    ],
    guideNote: "Rest points are planned in advance.",
  },
  {
    title: "Zhujiajiao water town by private canal boat",
    destination: "Shanghai",
    summary:
      "An excursion to the ancient water town of Zhujiajiao and a chartered private wooden boat through its quiet waterways, avoiding public queues.",
    hotel: "Luxury Bund hotel, Shanghai (night 3)",
    meals: ["Hotel breakfast", "Other meals as set out in your written proposal"],
    transport: "Private van",
    transit: "Hotel to Zhujiajiao: 45 minutes by private van each way.",
    steps: "Under 3,000 steps. Hotel return by 3:30 PM",
    activities: [
      {
        time: "Morning",
        title: "Chartered private wooden boat",
        description:
          "A chartered private wooden boat tour through the quiet waterways, avoiding public queues.",
      },
    ],
    guideNote: "The afternoon is yours to rest.",
  },
  {
    title: "Shanghai leisure and VIP departure escort",
    destination: "Shanghai",
    summary:
      "An unhurried morning for packing or last-minute shopping, then a private transfer to the airport with a full guide escort.",
    hotel: "Departure day",
    meals: ["Hotel breakfast"],
    transport: "Private van",
    transit: "Hotel to PVG or SHA airport: 45–50 minutes by road.",
    steps: "Under 1,500 steps (departure day)",
    activities: [
      {
        title: "Full escort to your flight",
        description:
          "A private van takes you to the airport, and your guide escorts you through the check-in desk and the VAT refund counter.",
      },
    ],
    guideNote:
      "Your flight time sets the schedule, and we confirm which airport it uses before you book.",
  },
];

export const seniorStandard = {
  h1: "The 10-Day Slow-Paced Golden Triangle Journey: Beijing, Xi'an & Shanghai",
  lead: "Most classic China tours mean thousands of steps a day, steep stairs and early alarm calls. We have designed this classic ten-day route for mature travellers and multi-generational families, at a pace that protects your energy.",
  highlights: [
    {
      title: "Zero-stair Great Wall access",
      body: "An enclosed gondola goes straight to the flat Watchtower 14.",
    },
    {
      title: "Luggage-free bullet trains",
      body: "Station porters carry every suitcase from hotel room to train rack.",
    },
    { title: "3:30 PM hotel return", body: "Unhurried days with a guaranteed afternoon of rest." },
    {
      title: "Door-to-door Mercedes vans",
      body: "Pre-conditioned for 15 minutes, with low-step entry.",
    },
  ],
  difference: {
    painTitle: "The usual China tour",
    pain: "Thousands of steps a day, steep stairs, early starts, luggage to carry, and no way to rest when you need to.",
    solutionTitle: "The AVIORA way",
    solution:
      "Every day has a step budget, a 3:30 PM return to the hotel, a vehicle waiting at the door, and a guide who carries your seat, your luggage and your worries.",
  },
  careTitle: "Ten care commitments, on every day of the journey",
  care: [
    {
      title: "15-minute climate pre-conditioning",
      body: "Vans are pre-cooled to 22°C in summer or pre-heated in winter before you board.",
    },
    {
      title: "Low-step entry and support",
      body: "Side grab handles and a low stepping stool make getting in and out easy.",
    },
    {
      title: "Rest readiness on the go",
      body: "Guides carry lightweight, portable ergonomic seats for an instant rest anywhere.",
    },
    {
      title: "Whisper wireless audio",
      body: "Personal noise-canceling earpieces for clear narration at your preferred volume.",
    },
    {
      title: "Pre-vetted Western restrooms",
      body: "Step-free, clean, seated toilets verified in advance along every route.",
    },
    {
      title: "Culinary concierge",
      body: "We coordinate directly with chefs for gluten-free, low-sodium, low-oil and other dietary needs.",
    },
    {
      title: "24/7 international medical channel",
      body: "Direct access to English-speaking international departments at leading hospitals.",
    },
    {
      title: "Luggage-free station transfers",
      body: "Porters load every bag onto the train racks through the VIP elevator channel.",
    },
    {
      title: "Large-print daily itinerary cards",
      body: "A printed card each morning lists the timings and the stops.",
    },
    {
      title: "Frictionless digital wallet service",
      body: "Your guide handles local mobile payments, so you never worry about paying.",
    },
  ],
  diningTitle: "Dining, restrooms and accessibility standards",
  diningIntro:
    "These are the same on every day of the journey. We check them in advance and confirm them in your written proposal.",
  dining: [
    {
      title: "Dining",
      body: "Meals are chosen with you in advance. We brief the chef on gluten-free, low-sodium, low-oil and other dietary preferences, so nothing is left to chance at the table.",
    },
    {
      title: "Restrooms",
      body: "Every restroom on the route is a step-free, clean, seated Western toilet, verified in advance.",
    },
    {
      title: "Getting around",
      body: "Door-to-door Mercedes vans with low-step entry and side grab handles, pre-conditioned for 15 minutes.",
    },
    {
      title: "Resting",
      body: "Portable seats travel with your guide, and every day ends at the hotel by 3:30 PM.",
    },
    {
      title: "Medical support",
      body: "A 24/7 international medical channel gives you direct access to English-speaking departments at leading hospitals.",
    },
    {
      title: "Your needs",
      body: "Tell us about anything specific in your enquiry and we will confirm in writing how it is handled on each day.",
    },
  ],
} satisfies NonNullable<Tour["seniorStandard"]>;

export const pricingBlock = {
  eyebrow: "Pricing transparency",
  from: "$3,800",
  unit: "per person",
  range: "$3,800–$6,500 per person",
  note: "Pricing varies with your hotel selection, the season you travel and your party size, for example a couple compared with a multi-generational family. Your written proposal sets the exact price for your dates before you pay.",
  factors: [
    {
      title: "Hotel selection",
      body: "The hotel category you choose in each city is the largest single factor.",
    },
    {
      title: "Seasonal timing",
      body: "Public holidays and peak months cost more than quieter periods.",
    },
    {
      title: "Party size",
      body: "The private van and guide are shared, so a couple and a multi-generational family are priced differently.",
    },
  ],
} satisfies NonNullable<Tour["pricingBlock"]>;

export const slowPacedFaqs: TourFaq[] = [
  {
    question: "How much does this 10-Day Private Golden Triangle Tour cost?",
    answer:
      "Pricing ranges from $3,800 to $6,500 per person, and the tour starts from $3,800 per person. Where you land in that range depends on your hotel selection, the season you travel and your party size, for example a couple compared with a multi-generational family. The price includes nine nights in central hotels (three in Beijing, three in Xi'an, three in Shanghai), private guiding in every city, door-to-door Mercedes vans, First Class bullet trains with luggage-free station transfers, the VIP airport welcome and departure escort, the gondola, electric carts, cruises and private boats listed in the itinerary, and the 24/7 international medical channel. International flights, visa fees, travel insurance, meals not listed in your proposal and personal expenses are not included. Your written proposal sets the exact price for your dates before you pay.",
  },
  {
    question: "Is this Beijing, Xi'an and Shanghai tour suitable for seniors?",
    answer:
      "Yes. It is designed for mature travellers and multi-generational families: every day has a step budget, you are back at the hotel by 3:30 PM, vehicles are door to door, and luggage is carried for you on the trains.",
  },
  {
    question: "Can I visit the Great Wall without climbing stairs?",
    answer:
      "On this journey the Mutianyu day uses an enclosed 8-person gondola that goes directly to Watchtower 14, a flat brick platform. Your guide carries a portable seat for rests.",
  },
  {
    question: "How many steps will we walk each day?",
    answer:
      "Each day has a stated budget: for example under 1,500 steps on arrival and departure days, under 3,500 on the Great Wall day and under 4,000 on the Forbidden City and Terracotta Army days. The budgets are shown on each day of the itinerary.",
  },
  {
    question: "What if I need medical help while travelling?",
    answer:
      "You have 24/7 access to our international medical channel, which connects you directly with English-speaking international departments at leading hospitals.",
  },
  {
    question: "What happens with our luggage on the bullet trains?",
    answer:
      "You carry nothing. Station porters take your suitcases from the hotel room to the train racks through the VIP elevator channel, and your guide handles both stations.",
  },
  {
    question: "Can you cater for gluten-free, low-sodium or other dietary needs?",
    answer:
      "Yes. We coordinate directly with the chef at each meal for gluten-free, low-sodium, low-oil and other dietary needs, and confirm this in writing before you travel.",
  },
  {
    question: "Are the restrooms suitable for older travellers?",
    answer:
      "We verify step-free, clean, seated Western toilets in advance at every stop on the route.",
  },
  {
    question: "How soon will I receive a proposal?",
    answer:
      "A China-based specialist replies, normally within a day, with a detailed itinerary and a written, individually priced proposal for your travel window, pace and dietary needs.",
  },
];

/** 把慢节奏标准合并进原行程：保留每天的图片与坐标，改写文字与新增指标。 */
export function applySlowPaced(tour: Tour): Tour {
  return {
    ...tour,
    seo: {
      title: "Slow-Paced Beijing Xi'an Shanghai 10-Day Private Tour",
      description:
        "10-day senior-friendly private tour of Beijing, Xi'an & Shanghai: zero-stair Great Wall access, Mercedes vans, a 3:30 PM hotel return and 24/7 care.",
      keywords: [
        "senior friendly Beijing Xi'an Shanghai tour",
        "slow paced China tour for seniors",
        "private Beijing Xi'an Shanghai tour",
        "Great Wall without stairs",
        "China tour for seniors",
        "10 day private China tour",
      ],
    },
    seniorStandard,
    styles: ["Senior-friendly", "First-time China", "Family", "Culture"],
    overview: {
      ...tour.overview,
      pitch:
        "Three essential cities over ten days, at a protected pace: zero-stair Great Wall access, luggage-free bullet trains, and a 3:30 PM return to the hotel every day.",
      facts: tour.overview.facts.map((fact) => {
        if (fact.label === "Duration") {
          return {
            ...fact,
            value: "10 days / 9 nights",
            helper: "Three nights in Beijing, three in Xi'an, and three in Shanghai.",
          };
        }
        if (fact.label === "Pacing") {
          return {
            ...fact,
            value: "Slow-paced",
            helper: "A daily step budget and a 3:30 PM hotel return.",
          };
        }
        if (fact.label === "Suitable For") {
          return {
            ...fact,
            value: "Seniors and multi-generational families",
            helper:
              "Also well suited to couples and first-time visitors who prefer an unhurried pace.",
          };
        }
        return fact;
      }),
    },
    duration: "10 Days / 9 Nights",
    itinerary: slowPacedDays.map((next, index) => {
      const base = tour.itinerary[Math.min(index, tour.itinerary.length - 1)];
      return { ...base, ...next, day: index + 1 };
    }),
    included: [
      ...tour.included.filter(
        (item) =>
          !item.startsWith("Signature experiences:") &&
          !item.startsWith("Eight nights") &&
          !item.startsWith("Nine nights"),
      ),
      "Nine nights in central hotels: three in Beijing, three in Xi'an, three in Shanghai",
      "Door-to-door Mercedes vans with low-step entry, pre-conditioned for 15 minutes",
      "Luggage-free station transfers with porters on both bullet-train days",
      "A daily large-print itinerary card, a portable seat and a Whisper wireless audio system for each guest",
      "24/7 access to our international medical channel",
    ],
    highlights: tour.highlights.slice(0, 3).map((highlight, index) => ({
      ...highlight,
      title:
        [
          "Zero-stair Great Wall access",
          "The Terracotta Army on the VIP route",
          "A luggage-free journey between cities",
        ][index] ?? highlight.title,
      description:
        [
          "An enclosed 8-person gondola glides directly to the flat Watchtower 14, with no climbing required.",
          "A priority electric shuttle carries you from the main gate to the pit entrances, with quiet galleries and rest zones.",
          "Porters load every suitcase onto the First Class bullet trains, from hotel room to train rack.",
        ][index] ?? highlight.description,
    })),
    accommodations: tour.accommodations.map((stay) => {
      const nights =
        stay.destination === "Beijing"
          ? "Beijing | Central 5-star hotel, 3 nights"
          : stay.destination === "Xi'an"
            ? "Xi'an | Central hotel, 3 nights"
            : "Shanghai | Luxury Bund hotel, 3 nights";
      const text: Record<string, string> = {
        Beijing:
          "Three nights in a central 5-star hotel, close to the Imperial sites and chosen for easy mornings and short transfers.",
        "Xi'an":
          "Three nights in a central hotel, so the city wall and the cultural quarter are close and every day ends with a rest.",
        Shanghai:
          "Three nights in a luxury Bund hotel with the river and the skyline on the doorstep, and an easy transfer to the airport on departure day.",
      };
      return { ...stay, name: nights, description: text[stay.destination] ?? stay.description };
    }),
    routeMap: {
      ...tour.routeMap,
      title: "A slow arc through three cities.",
      description:
        "Three nights in Beijing, three in Xi'an, and three in Shanghai, with only two hotel changes and luggage handled on both bullet-train days.",
    },
    transportation: {
      ...tour.transportation,
      description:
        "Door-to-door Mercedes vans, pre-conditioned for 15 minutes, and First Class bullet trains between cities with porters at every station.",
      items: [
        {
          label: "Airport",
          value: "VIP escort on arrival and departure",
          helper: "Meeting at the baggage-claim exit and a full escort to the check-in desk.",
        },
        {
          label: "Rail",
          value: "Beijing to Xi'an and Xi'an to Shanghai, First Class",
          helper: "Porters handle every suitcase at both stations.",
        },
        {
          label: "City transfer",
          value: "Private Mercedes van, low-step entry",
          helper: "Climate pre-conditioned for 15 minutes before you board.",
        },
      ],
    },
    pricingBlock,
    faqs: [
      ...slowPacedFaqs,
      ...tour.faqs.filter((faq) => !faq.question.startsWith("How much does a 10-day")),
    ],
  };
}
