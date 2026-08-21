import type { JournalArticle } from "@/types/journal";

type JournalEditorialUpgrade = {
  title: string;
  seoTitle: string;
  preserveTitleCase?: boolean;
};

const editorialUpgrades: Record<string, JournalEditorialUpgrade> = {
  "china-tours-for-seniors": {
    title: "China Tours for Seniors: What a Good Tour Should Actually Change",
    seoTitle: "China Tours for Seniors: What Good Tours Change",
  },
  "best-places-to-visit-china-first-time": {
    title: "Best Places to Visit in China for a First Trip: Choose by Experience, Not Fame",
    seoTitle: "Best Places to Visit in China for First-Time Visitors",
  },
  "china-trip-with-older-parents": {
    title: "Planning a China Trip With Older Parents: 12 Questions Before Booking",
    seoTitle: "China Trip With Older Parents: 12 Booking Questions",
  },
  "china-tours-seniors-limited-mobility": {
    title: "China Tours for Seniors With Limited Mobility: What Can and Cannot Be Adapted",
    seoTitle: "China Tours for Seniors With Limited Mobility",
  },
  "how-much-does-a-trip-to-china-cost": {
    title: "How Much Does a Trip to China Cost? Build a Budget That Matches the Journey",
    seoTitle: "How Much Does a Trip to China Cost? Budget Guide",
  },
  "private-china-tour-vs-self-guided": {
    title: "Private China Tour or Self-Guided Trip? Decide by the Work You Want to Own",
    seoTitle: "Private China Tour vs Self-Guided Trip: Compare",
  },
  "china-tours-from-usa": {
    title: "China Tours From the USA: Plan the Land Trip Around the Long-Haul Flights",
    seoTitle: "China Tours From USA: Flights, Routes & Local Support",
  },
  "luxury-china-tour-planning-guide": {
    title: "Luxury China Tours: What Should Be Better Beyond the Hotel Name?",
    seoTitle: "Luxury China Tours: A Private Journey Buyer's Guide",
  },
  "beijing-or-shanghai-first-time": {
    title: "Beijing or Shanghai for a First Trip? Start With the Experience You Want",
    seoTitle: "Beijing or Shanghai for First-Time Visitors? Compare",
  },
  "two-week-china-itinerary-first-time": {
    title: "Two Weeks in China: A First-Time Itinerary With Four Different Chapters",
    seoTitle: "Two Weeks in China: First-Time 14-Day Itinerary",
  },
  "first-trip-to-china-planning-guide": {
    title: "How AVIORA Plans a First Trip to China Before You Book",
    seoTitle: "How to Plan a Trip to China: 12 Decisions Before Booking",
    preserveTitleCase: true,
  },
  "how-much-walking-china-tour": {
    title: "How Much Walking Is There on a China Tour?",
    seoTitle: "How Much Walking Is There on a China Tour?",
  },
  "terracotta-warriors-day-trip-from-beijing": {
    title: "Can You Visit the Terracotta Warriors from Beijing in One Day?",
    seoTitle: "Terracotta Warriors Day Trip from Beijing: Is It Worth It?",
  },
  "mutianyu-great-wall-walking-cable-car": {
    title: "How Much Walking Is There at Mutianyu? Three Routes Compared",
    seoTitle: "How Much Walking at Mutianyu Great Wall? 3 Routes",
  },
  "tianmen-mountain-vs-zhangjiajie-national-forest-park": {
    title: "Tianmen Mountain or Zhangjiajie Forest Park? Choose the Right Day",
    seoTitle: "Tianmen Mountain vs Zhangjiajie Forest Park",
  },
  "chengdu-to-jiuzhaigou-transport": {
    title: "Chengdu to Jiuzhaigou: Choose by Time, Comfort and Cost",
    seoTitle: "Chengdu to Jiuzhaigou: Train, Flight or Transfer?",
  },
  "jiuzhaigou-altitude-walking-accessibility": {
    title: "Is Jiuzhaigou Difficult? Altitude, Walking and Accessibility Explained",
    seoTitle: "Jiuzhaigou Walking Difficulty, Altitude & Accessibility",
  },
  "how-difficult-is-zhangjiajie": {
    title: "How Difficult Is Zhangjiajie? A Realistic Walking Guide",
    seoTitle: "How Difficult Is Zhangjiajie? Walking & Stairs Guide",
  },
  "jiuzhaigou-or-zhangjiajie": {
    title: "Jiuzhaigou or Zhangjiajie? Choose by Scenery, Season and Mobility",
    seoTitle: "Jiuzhaigou or Zhangjiajie: Which Should You Visit?",
  },
  "china-tours-with-pandas": {
    title: "China Tours With Pandas: Four Private Routes Compared",
    seoTitle: "China Tours With Pandas: Compare 4 Private Routes",
  },
  "9-days-or-11-days-in-china": {
    title: "9 or 11 Days in China? Choose the Better First-Trip Route",
    seoTitle: "9 or 11 Days in China? Compare 2 First-Trip Routes",
  },
  "how-many-days-beijing-xian-shanghai": {
    title: "How Many Days Do You Need for Beijing, Xi'an and Shanghai? 8, 10 or 12 Days Compared",
    seoTitle: "Beijing, Xi'an & Shanghai: 8, 10 or 12 Days?",
  },
  "private-china-tour-vs-group-tour": {
    title: "Private China Tour vs Group Tour: Cost, Pace and Support Compared",
    seoTitle: "Private China Tour vs Group Tour: Full Comparison",
  },
  "11-day-beijing-xian-chengdu-shanghai-itinerary": {
    title: "11-Day Beijing, Xi'an, Chengdu and Shanghai Itinerary",
    seoTitle: "11-Day Beijing, Xi'an, Chengdu & Shanghai Itinerary",
  },
  "chengdu-jiuzhaigou-7-day-itinerary": {
    title: "7-Day Chengdu and Jiuzhaigou Itinerary: A Well-Paced Route",
    seoTitle: "7-Day Chengdu and Jiuzhaigou Itinerary",
  },
  "shanghai-zhangjiajie-8-day-itinerary": {
    title: "8-Day Shanghai and Zhangjiajie Itinerary: City to Mountain",
    seoTitle: "8-Day Shanghai and Zhangjiajie Itinerary",
  },
  "beijing-xian-itinerary-how-many-days": {
    title: "Beijing and Xi'an Itinerary: The Right Plan for 5, 6 or 7 Days",
    seoTitle: "Beijing and Xi'an Itinerary: 5, 6 or 7 Days",
  },
  "best-time-to-visit-china": {
    title: "Best Time to Visit China: Choose the Right Month for Your Route",
    seoTitle: "Best Time to Visit China: Month-by-Month Guide",
  },
  "how-to-choose-private-china-tour-company": {
    title: "How to Choose a Private China Tour Company: 12 Checks Before You Pay",
    seoTitle: "How to Choose a Private China Tour Company",
  },
  "is-private-china-tour-worth-it": {
    title: "Is a Private China Tour Worth It? Where the Extra Cost Creates Value",
    seoTitle: "Is a Private China Tour Worth It? Honest Value Guide",
  },
  "china-family-itinerary-10-to-14-days": {
    title: "China Family Itinerary: Comfortable 10, 12 and 14-Day Routes",
    seoTitle: "China Family Itinerary: 10, 12 and 14 Days",
  },
  "china-itinerary-older-travelers-10-days": {
    title: "A 12-Day China Itinerary at an Easier Pace",
    seoTitle: "China Itinerary for Seniors: 12 Days at an Easier Pace",
    preserveTitleCase: true,
  },
  "how-many-days-in-china-7-10-14-day-itineraries": {
    title: "How Many Days Do You Need in China? 7, 10 and 14-Day Plans",
    seoTitle: "How Many Days in China? 7, 10 and 14-Day Plans",
  },
  "what-is-included-private-china-tour": {
    title: "What Is Included in a Private China Tour? A Quotation Checklist",
    seoTitle: "What Is Included in a Private China Tour?",
  },
  "china-honeymoon-itinerary-10-to-14-days": {
    title: "China Honeymoon Itinerary: Private 10 to 14-Day Routes",
    seoTitle: "China Honeymoon Itinerary: 10 to 14 Days",
  },
  "how-to-travel-between-beijing-xian-chengdu-shanghai": {
    title: "How to Travel Between Beijing, Xi'an, Chengdu and Shanghai",
    seoTitle: "Beijing, Xi'an, Chengdu & Shanghai Transport Guide",
  },
  "china-travel-safety-for-foreign-visitors": {
    title: "Is China Safe for Tourists? A Practical Guide for Foreign Visitors",
    seoTitle: "Is China Safe for Tourists? Practical Travel Guide",
  },
  "9-day-beijing-xian-shanghai-itinerary": {
    title: "9-Day Beijing, Xi'an and Shanghai Itinerary: Better Paced",
    seoTitle: "9-Day Beijing, Xi'an and Shanghai Itinerary",
  },
  "5-day-chengdu-leshan-itinerary": {
    title: "5-Day Chengdu and Leshan Itinerary: Pandas, Food and the Giant Buddha",
    seoTitle: "5-Day Chengdu and Leshan Itinerary With Pandas",
  },
  "5-day-beijing-great-wall-itinerary": {
    title: "5-Day Beijing and Great Wall Itinerary: Imperial China Without the Rush",
    seoTitle: "5-Day Beijing and Great Wall Itinerary",
  },
  "6-day-xian-beijing-itinerary": {
    title: "6-Day Xi'an and Beijing Itinerary: Terracotta Warriors to the Great Wall",
    seoTitle: "6-Day Xi'an and Beijing Itinerary With Great Wall",
  },
  "leshan-giant-buddha-day-trip-guide": {
    title: "Leshan Giant Buddha from Chengdu: Is the Day Trip Worth It?",
    seoTitle: "Leshan Giant Buddha from Chengdu: Day-Trip Guide",
  },
  "how-many-days-in-chengdu-itinerary": {
    title: "How Many Days in Chengdu? Choose a 3, 4 or 5-Day Plan",
    seoTitle: "How Many Days in Chengdu? 3, 4 or 5-Day Itinerary",
  },
  "3-day-chongqing-itinerary": {
    title: "3-Day Chongqing Itinerary: See the City Without Rushing It",
    seoTitle: "3-Day Chongqing Itinerary: What to See & Where to Stay",
  },
  "where-to-stay-in-zhangjiajie": {
    title: "Where to Stay in Zhangjiajie: Wulingyuan or the City?",
    seoTitle: "Where to Stay in Zhangjiajie: Wulingyuan vs City",
  },
  "chengdu-chongqing-zhangjiajie-itinerary": {
    title: "11-Day Chengdu, Chongqing & Zhangjiajie Itinerary",
    seoTitle: "11-Day Chengdu, Chongqing & Zhangjiajie Itinerary",
  },
  "private-china-tour-cost-2026": {
    title: "Private China Tour Cost 2026: What a High-Quality Quote Should Include",
    seoTitle: "Private China Tour Cost 2026: Quotation Guide",
  },
  "10-day-china-itinerary-first-time-visitors": {
    title: "10-Day China Itinerary for First-Time Visitors: A Well-Paced Route",
    seoTitle: "10-Day China Itinerary for First-Time Visitors",
  },
  "private-china-tour-from-singapore": {
    title: "Private China Tour from Singapore: Flights, Payments and Route Planning",
    seoTitle: "Private China Tour from Singapore: Planning Guide",
  },
  "aviora-ttg-asia-matta-connect-2026": {
    title: "Why International Travel Partners Choose AVIORA in China",
    seoTitle: "AVIORA China Travel Team at MATTA Connect",
  },
  "china-240-hour-visa-free-transit-guide": {
    title: "China's 240-Hour Visa-Free Transit: Routes, Rules and Common Mistakes",
    seoTitle: "China 240-Hour Visa-Free Transit: Routes & Rules",
  },
  "china-accommodation-registration-foreigners": {
    title: "China Hotel Registration for Foreigners: What Happens After Check-In",
    seoTitle: "China Hotel Registration for Foreigners: 2026 Guide",
  },
  "china-high-speed-train-foreigners": {
    title: "China High-Speed Trains for Foreigners: Booking to Boarding",
    seoTitle: "China High-Speed Trains for Foreigners: 2026 Guide",
  },
  "china-mobile-payments-foreign-tourists": {
    title: "Alipay and WeChat Pay in China: A Setup Guide for Foreign Visitors",
    seoTitle: "Alipay & WeChat Pay for Tourists in China: 2026 Guide",
  },
  "forbidden-city-tickets-foreigners": {
    title: "Forbidden City Tickets for Foreigners: Booking, Passport and Entry Guide",
    seoTitle: "Forbidden City Tickets for Foreigners: 2026 Guide",
  },
  "chengdu-panda-base-tickets-foreigners": {
    title: "Chengdu Panda Base Tickets: Best Time, Booking and Visit Strategy",
    seoTitle: "Chengdu Panda Base Tickets & Best Time to Visit",
  },
  "china-sim-card-esim-internet-foreign-tourists": {
    title: "China SIM Card or eSIM? The Best Choice for Foreign Visitors",
    seoTitle: "China SIM Card vs eSIM for Tourists: 2026 Guide",
  },
  "shanghai-pudong-hongqiao-airport-guide": {
    title: "Pudong or Hongqiao Airport? Choose the Right Shanghai Arrival",
    seoTitle: "Pudong vs Hongqiao Airport: Which Is Better?",
  },
  "china-golden-week-travel-2026": {
    title: "China Golden Week 2026: Should You Travel or Change Your Dates?",
    seoTitle: "China Golden Week 2026: Dates, Crowds & Advice",
  },
  "mutianyu-badaling-jinshanling-great-wall": {
    title: "Mutianyu, Badaling or Jinshanling? Choose the Right Great Wall Section",
    seoTitle: "Mutianyu vs Badaling vs Jinshanling Great Wall",
  },
  "terracotta-army-tickets-foreign-visitors": {
    title: "Terracotta Army Tickets for Foreigners: Booking and Entry Guide",
    seoTitle: "Terracotta Army Tickets for Foreigners: 2026 Guide",
  },
  "china-domestic-flight-power-bank-rules": {
    title: "China Power Bank Rules 2026: What Foreign Visitors Must Check",
    seoTitle: "China Power Bank Rules 2026: CCC/3C Flight Guide",
  },
  "bringing-prescription-medicine-to-china": {
    title: "Bringing Prescription Medicine to China: Documents and Customs Checklist",
    seoTitle: "Bringing Prescription Medicine to China: 2026 Guide",
  },
  "where-to-stay-in-beijing-first-time": {
    title: "Where to Stay in Beijing for a First Visit: Five Areas Compared",
    seoTitle: "Where to Stay in Beijing First Time: 5 Best Areas",
  },
  "shanghai-itinerary-4-days": {
    title: "Four Days in Shanghai: A First-Time Itinerary That Leaves Room to Look",
    seoTitle: "Shanghai Itinerary: 4 Days for First-Time Visitors",
  },
  "beijing-itinerary-4-days": {
    title: "Four Days in Beijing: A First-Time Itinerary With a Proper Great Wall Day",
    seoTitle: "Beijing Itinerary: 4 Days With the Great Wall",
  },
  "where-to-stay-in-shanghai-first-time": {
    title: "Where to Stay in Shanghai for a First Visit: Five Areas Compared",
    seoTitle: "Where to Stay in Shanghai First Time: 5 Best Areas",
  },
  "xian-itinerary-3-days": {
    title: "Three Days in Xi'an: A First-Time Itinerary Beyond the Terracotta Army",
    seoTitle: "Xi'an Itinerary: 3 Days for First-Time Visitors",
  },
  "guilin-yangshuo-itinerary-5-days": {
    title: "Five Days in Guilin and Yangshuo: River, Karst and Countryside",
    seoTitle: "Guilin and Yangshuo Itinerary: 5 Days",
  },
  "best-apps-for-china-travel-2026": {
    title: "Best Apps for China Travel in 2026: What to Set Up Before You Fly",
    seoTitle: "Best Apps for China Travel in 2026: Setup Guide",
  },
  "yunnan-itinerary-10-days": {
    title: "10-Day Yunnan Itinerary: Two Routes Through Dali, Lijiang and Shangri-La",
    seoTitle: "10-Day Yunnan Itinerary: Two Routes Compared",
  },
  "china-packing-list-2026": {
    title: "China Packing List for 2026: What Foreign Visitors Actually Need",
    seoTitle: "China Packing List 2026: What You Actually Need",
  },
  "china-visa-requirements-us-citizens-2026": {
    title: "China Visa Requirements for US Citizens in 2026: Tourist Visa vs 240-Hour Transit",
    seoTitle: "China Visa for US Citizens 2026: Visa vs Transit",
  },
};

export function applyJournalEditorialUpgrade(article: JournalArticle): JournalArticle {
  const upgrade = editorialUpgrades[article.slug];
  if (!upgrade) return article;

  return {
    ...article,
    title: upgrade.preserveTitleCase ? upgrade.title : toJournalDisplayTitleCase(upgrade.title),
    seo: {
      ...article.seo,
      title: upgrade.seoTitle,
    },
  };
}

export function getJournalEditorialUpgrade(slug: string) {
  return editorialUpgrades[slug];
}

export function toJournalDisplayTitleCase(value: string) {
  return value
    .split(/(\s+|-)/)
    .map((part) => {
      if (!part.trim() || part === "-") return part;

      const prefix = part.match(/^[^A-Za-z0-9]*/)?.[0] ?? "";
      const suffix = part.match(/[^A-Za-z0-9]*$/)?.[0] ?? "";
      const core = part.slice(prefix.length, part.length - suffix.length || undefined);
      if (!core || /[A-Z]{2,}|\d/.test(core)) return part;

      const normalized = core.toLowerCase();
      return `${prefix}${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}${suffix}`;
    })
    .join("");
}
