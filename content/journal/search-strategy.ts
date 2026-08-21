export type JournalSearchRole = {
  pillar: string;
  intent: "answer" | "compare" | "plan" | "evaluate" | "trust";
  primaryKeyword: string;
  hub?: string;
  commercialPriority: 1 | 2 | 3;
};

const strategyGroups: Array<{
  pillar: string;
  hub: string;
  articles: Array<[string, JournalSearchRole["intent"], string, 1 | 2 | 3]>;
}> = [
  {
    pillar: "First China trip planning",
    hub: "first-trip-to-china-planning-guide",
    articles: [
      ["first-trip-to-china-planning-guide", "plan", "how to plan a trip to China", 1],
      ["how-many-days-in-china-7-10-14-day-itineraries", "plan", "how many days in China", 1],
      ["10-day-china-itinerary-first-time-visitors", "plan", "10 day China itinerary", 1],
      ["9-days-or-11-days-in-china", "compare", "9 days or 11 days in China", 1],
      ["9-day-beijing-xian-shanghai-itinerary", "plan", "9 day China itinerary", 1],
      ["11-day-beijing-xian-chengdu-shanghai-itinerary", "plan", "11 day China itinerary", 1],
      ["best-time-to-visit-china", "plan", "best time to visit China", 2],
      ["china-golden-week-travel-2026", "answer", "China Golden Week 2026", 2],
      ["china-travel-safety-for-foreign-visitors", "answer", "is China safe for tourists", 2],
    ],
  },
  {
    pillar: "Private tour decision",
    hub: "how-to-choose-private-china-tour-company",
    articles: [
      ["how-to-choose-private-china-tour-company", "evaluate", "private China tour company", 1],
      ["private-china-tour-cost-2026", "evaluate", "private China tour cost", 1],
      ["private-china-tour-vs-group-tour", "compare", "private China tour vs group tour", 1],
      ["is-private-china-tour-worth-it", "evaluate", "is a private China tour worth it", 1],
      [
        "what-is-included-private-china-tour",
        "answer",
        "what is included in a private China tour",
        1,
      ],
      ["aviora-ttg-asia-matta-connect-2026", "trust", "AVIORA China travel company", 2],
      ["private-china-tour-from-singapore", "plan", "private China tour from Singapore", 1],
    ],
  },
  {
    pillar: "China arrival essentials",
    hub: "china-240-hour-visa-free-transit-guide",
    articles: [
      ["china-240-hour-visa-free-transit-guide", "answer", "China 240 hour visa free transit", 2],
      [
        "china-accommodation-registration-foreigners",
        "answer",
        "China hotel registration foreigners",
        2,
      ],
      ["china-mobile-payments-foreign-tourists", "answer", "Alipay for tourists in China", 2],
      ["china-sim-card-esim-internet-foreign-tourists", "compare", "China SIM card vs eSIM", 2],
      [
        "bringing-prescription-medicine-to-china",
        "answer",
        "bring prescription medicine to China",
        2,
      ],
      ["china-domestic-flight-power-bank-rules", "answer", "China power bank rules 2026", 2],
      ["china-high-speed-train-foreigners", "answer", "China high speed train for foreigners", 2],
      ["best-apps-for-china-travel-2026", "answer", "best apps for China travel 2026", 1],
      ["china-packing-list-2026", "answer", "China packing list 2026", 1],
      [
        "china-visa-requirements-us-citizens-2026",
        "answer",
        "China visa requirements for US citizens 2026",
        1,
      ],
      ["shanghai-pudong-hongqiao-airport-guide", "compare", "Pudong vs Hongqiao airport", 2],
      [
        "how-to-travel-between-beijing-xian-chengdu-shanghai",
        "plan",
        "travel between Beijing Xian Chengdu Shanghai",
        1,
      ],
    ],
  },
  {
    pillar: "Beijing and Xi'an planning",
    hub: "beijing-xian-itinerary-how-many-days",
    articles: [
      ["beijing-xian-itinerary-how-many-days", "plan", "Beijing Xian itinerary", 1],
      ["5-day-beijing-great-wall-itinerary", "plan", "5 day Beijing itinerary", 1],
      ["beijing-itinerary-4-days", "plan", "Beijing itinerary 4 days", 1],
      ["where-to-stay-in-beijing-first-time", "compare", "where to stay in Beijing first time", 1],
      ["6-day-xian-beijing-itinerary", "plan", "6 day Xian Beijing itinerary", 1],
      ["xian-itinerary-3-days", "plan", "Xi'an itinerary 3 days", 1],
      [
        "terracotta-warriors-day-trip-from-beijing",
        "compare",
        "Terracotta Warriors day trip from Beijing",
        1,
      ],
      ["forbidden-city-tickets-foreigners", "answer", "Forbidden City tickets foreigners", 2],
      [
        "mutianyu-badaling-jinshanling-great-wall",
        "compare",
        "Mutianyu vs Badaling vs Jinshanling",
        1,
      ],
      [
        "mutianyu-great-wall-walking-cable-car",
        "answer",
        "how much walking at Mutianyu Great Wall",
        1,
      ],
      [
        "terracotta-army-tickets-foreign-visitors",
        "answer",
        "Terracotta Army tickets foreigners",
        2,
      ],
    ],
  },
  {
    pillar: "Shanghai first-visit planning",
    hub: "shanghai-itinerary-4-days",
    articles: [
      ["shanghai-itinerary-4-days", "plan", "Shanghai itinerary 4 days", 1],
      [
        "where-to-stay-in-shanghai-first-time",
        "compare",
        "where to stay in Shanghai first time",
        1,
      ],
    ],
  },
  {
    pillar: "Guilin and Yangshuo planning",
    hub: "guilin-yangshuo-itinerary-5-days",
    articles: [["guilin-yangshuo-itinerary-5-days", "plan", "Guilin Yangshuo itinerary 5 days", 1]],
  },
  {
    pillar: "Yunnan private journey planning",
    hub: "yunnan-itinerary-10-days",
    articles: [["yunnan-itinerary-10-days", "plan", "Yunnan itinerary 10 days", 1]],
  },
  {
    pillar: "Chengdu and panda planning",
    hub: "how-many-days-in-chengdu-itinerary",
    articles: [
      ["how-many-days-in-chengdu-itinerary", "plan", "how many days in Chengdu", 1],
      ["china-tours-with-pandas", "compare", "China tours with pandas", 1],
      [
        "chengdu-panda-base-tickets-foreigners",
        "answer",
        "Chengdu Panda Base tickets foreigners",
        2,
      ],
      ["5-day-chengdu-leshan-itinerary", "plan", "5 day Chengdu itinerary", 1],
      ["leshan-giant-buddha-day-trip-guide", "plan", "Leshan Giant Buddha day trip", 2],
    ],
  },
  {
    pillar: "Jiuzhaigou and Zhangjiajie",
    hub: "jiuzhaigou-or-zhangjiajie",
    articles: [
      ["jiuzhaigou-or-zhangjiajie", "compare", "Jiuzhaigou or Zhangjiajie", 1],
      ["chengdu-to-jiuzhaigou-transport", "compare", "Chengdu to Jiuzhaigou", 1],
      ["jiuzhaigou-altitude-walking-accessibility", "answer", "Jiuzhaigou walking difficulty", 2],
      ["chengdu-jiuzhaigou-7-day-itinerary", "plan", "Chengdu Jiuzhaigou 7 day itinerary", 1],
      ["how-difficult-is-zhangjiajie", "answer", "how difficult is Zhangjiajie", 2],
      [
        "tianmen-mountain-vs-zhangjiajie-national-forest-park",
        "compare",
        "Tianmen Mountain vs Zhangjiajie National Forest Park",
        1,
      ],
      ["where-to-stay-in-zhangjiajie", "compare", "where to stay in Zhangjiajie", 1],
      ["shanghai-zhangjiajie-8-day-itinerary", "plan", "Shanghai Zhangjiajie itinerary", 1],
      [
        "chengdu-chongqing-zhangjiajie-itinerary",
        "plan",
        "Chengdu Chongqing Zhangjiajie itinerary",
        1,
      ],
      ["3-day-chongqing-itinerary", "plan", "3 day Chongqing itinerary", 1],
    ],
  },
  {
    pillar: "Travel by life stage",
    hub: "china-family-itinerary-10-to-14-days",
    articles: [
      ["china-family-itinerary-10-to-14-days", "plan", "China family itinerary", 1],
      ["china-honeymoon-itinerary-10-to-14-days", "plan", "China honeymoon itinerary", 1],
    ],
  },
  {
    pillar: "Easier-paced China travel",
    hub: "china-itinerary-older-travelers-10-days",
    articles: [
      ["china-itinerary-older-travelers-10-days", "plan", "China itinerary for seniors", 1],
      ["how-many-days-beijing-xian-shanghai", "compare", "how many days Beijing Xian Shanghai", 1],
      ["how-much-walking-china-tour", "answer", "how much walking on a China tour", 1],
      ["china-tours-for-seniors", "evaluate", "China tours for seniors", 1],
      ["china-trip-with-older-parents", "plan", "China trip with older parents", 1],
      [
        "china-tours-seniors-limited-mobility",
        "evaluate",
        "China tours for seniors with limited mobility",
        1,
      ],
    ],
  },
  {
    pillar: "High-intent first China trip decisions",
    hub: "first-trip-to-china-planning-guide",
    articles: [
      [
        "best-places-to-visit-china-first-time",
        "compare",
        "best places to visit in China for first time",
        1,
      ],
      ["how-much-does-a-trip-to-china-cost", "evaluate", "how much does a trip to China cost", 1],
      ["private-china-tour-vs-self-guided", "compare", "private China tour vs self guided", 1],
      ["china-tours-from-usa", "plan", "China tours from USA", 1],
      ["luxury-china-tour-planning-guide", "evaluate", "luxury China tours", 1],
      ["beijing-or-shanghai-first-time", "compare", "Beijing or Shanghai first time", 1],
      ["two-week-china-itinerary-first-time", "plan", "two weeks in China itinerary", 1],
    ],
  },
];

export const journalSearchStrategy: Record<string, JournalSearchRole> = Object.fromEntries(
  strategyGroups.flatMap((group) =>
    group.articles.map(([slug, intent, primaryKeyword, commercialPriority]) => [
      slug,
      {
        pillar: group.pillar,
        intent,
        primaryKeyword,
        hub: slug === group.hub ? undefined : group.hub,
        commercialPriority,
      },
    ]),
  ),
);

export function getJournalSearchRole(slug: string) {
  return journalSearchStrategy[slug];
}
