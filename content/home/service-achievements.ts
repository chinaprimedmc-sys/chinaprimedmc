export const serviceAchievements = [
  {
    id: "countries-served",
    target: 30,
    display: "30+",
    suffix: "+",
    shortLabel: "countries represented",
    englishLabel: "Countries represented among guests",
    description: "AVIORA has welcomed travelers to China from more than 30 countries.",
    delay: 0,
  },
  {
    id: "guests-hosted",
    target: 12000,
    display: "12,000+",
    suffix: "+",
    shortLabel: "travelers welcomed",
    englishLabel: "Travelers welcomed to China",
    description: "More than 12,000 travelers have experienced China with AVIORA.",
    delay: 120,
  },
  {
    id: "overseas-companies-served",
    target: 48,
    display: "48",
    suffix: "",
    shortLabel: "companies supported",
    englishLabel: "International travel companies supported",
    description:
      "AVIORA has supported 48 international companies with travel arrangements in China.",
    delay: 240,
  },
] as const;

export function serviceAchievementsText() {
  // 面向游客的机器可读摘要只放游客相关数据；企业客户数据不在此列。
  return serviceAchievements
    .filter(({ id }) => id !== "overseas-companies-served")
    .map(({ display, englishLabel, description }) => `- ${display} ${englishLabel}: ${description}`)
    .join("\n");
}
