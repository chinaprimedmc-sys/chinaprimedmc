import type { DestinationInterest, ExplorerDestination } from "@/content/destinations/explorer";

type DestinationEditorial = {
  bestTime: string;
  orientation: string;
  experiences: [string, string, string];
  planningNotes: [string, string, string];
};

const editorial: Record<string, DestinationEditorial> = {
  xian: {
    bestTime: "Spring and autumn usually offer the most comfortable walking weather.",
    orientation:
      "Xi'an works best as a focused historical chapter between Beijing and another major city, rather than a hurried day trip.",
    experiences: [
      "See the Terracotta Army with historical context and measured timing",
      "Walk or cycle a suitable section of the city wall",
      "Explore the Muslim Quarter through its food and layered Silk Road history",
    ],
    planningNotes: [
      "Allow two full sightseeing days",
      "Use private transfers for the archaeological sites",
      "Discuss dietary needs before food-focused visits",
    ],
  },
  harbin: {
    bestTime:
      "Winter is the defining season; summer offers a completely different northern-city experience.",
    orientation:
      "Harbin is a seasonal destination with a strong architectural identity and a climate that should shape every part of the plan.",
    experiences: [
      "Experience the winter ice and snow displays after dark",
      "Read the city's architectural history through its streets",
      "Try the distinctive food traditions of China's northeast",
    ],
    planningNotes: [
      "Build winter plans around warming breaks",
      "Prepare proper cold-weather clothing",
      "Confirm seasonal opening dates before fixing the route",
    ],
  },
  "inner-mongolia": {
    bestTime:
      "Late spring through early autumn is generally the practical window for grassland travel.",
    orientation:
      "Inner Mongolia is a broad region, not a single stop. A good route chooses one landscape zone and gives it enough time.",
    experiences: [
      "Spend unhurried time in open grassland landscapes",
      "Learn about local pastoral traditions with respectful hosts",
      "Photograph changing light across the steppe",
    ],
    planningNotes: [
      "Expect longer road transfers",
      "Choose accommodation for comfort as well as location",
      "Avoid treating cultural encounters as staged entertainment",
    ],
  },
  hangzhou: {
    bestTime:
      "Spring and autumn are especially pleasant, while each season changes the mood of West Lake.",
    orientation:
      "Hangzhou adds a calm, refined counterpoint to Shanghai and is easy to place within a Lower Yangtze route.",
    experiences: [
      "Explore West Lake at a quieter hour",
      "Visit tea country and understand Longjing culture",
      "Taste the city's restrained regional cooking",
    ],
    planningNotes: [
      "Stay overnight rather than rushing from Shanghai",
      "Use early morning for the lake",
      "Balance famous sights with slower garden and tea time",
    ],
  },
  suzhou: {
    bestTime:
      "Spring and autumn are comfortable for gardens and walking; summer requires lighter pacing.",
    orientation:
      "Suzhou rewards close looking. Its gardens and canals are more meaningful with time for design, history and daily life.",
    experiences: [
      "Read the spatial logic of a classical garden",
      "Walk a quieter canal-side neighborhood",
      "Discover silk, craft and Jiangnan aesthetics",
    ],
    planningNotes: [
      "Choose fewer gardens and explore them properly",
      "Avoid compressing Suzhou into a rushed checklist",
      "Pair naturally with Shanghai or Hangzhou",
    ],
  },
  huangshan: {
    bestTime:
      "Spring and autumn are popular for clearer hiking conditions; weather remains changeable year-round.",
    orientation:
      "Huangshan combines mountain scenery with historic villages, and the route must be designed around walking ability and weather.",
    experiences: [
      "Watch light move across Huangshan's granite peaks",
      "Explore an Anhui village with architectural context",
      "Choose a mountain route suited to the group's fitness",
    ],
    planningNotes: [
      "Build flexibility around mountain weather",
      "Clarify steps and walking expectations",
      "Allow at least one night close to the landscape",
    ],
  },
  chongqing: {
    bestTime:
      "Spring and autumn are generally the easiest seasons; summer is hot and visually dramatic at night.",
    orientation:
      "Chongqing is best understood as a vertical river city, where transport, viewpoints and neighborhoods form part of the experience.",
    experiences: [
      "See the layered city reveal itself after dark",
      "Taste hotpot with the spice level planned around the group",
      "Navigate hillside streets and river crossings with a local guide",
    ],
    planningNotes: [
      "Expect slopes, stairs and complex street levels",
      "Use private transport strategically",
      "Plan night views without overfilling the day",
    ],
  },
  jiuzhaigou: {
    bestTime:
      "Late spring to autumn provides the broadest access, with autumn known for strong colour.",
    orientation:
      "Jiuzhaigou is a landscape-led journey where altitude, transfers and crowd timing matter as much as the scenery.",
    experiences: [
      "Follow the valley's sequence of clear lakes and forests",
      "Pause at viewpoints instead of racing between them",
      "Understand the Tibetan and Qiang cultural setting of the region",
    ],
    planningNotes: [
      "Allow for altitude adjustment",
      "Confirm current access arrangements",
      "Use a measured walking plan for seniors and children",
    ],
  },
  dali: {
    bestTime:
      "Spring and autumn are comfortable; the highland light and weather can shift quickly.",
    orientation:
      "Dali offers a slower Yunnan rhythm shaped by Erhai Lake, villages and the Cangshan mountain backdrop.",
    experiences: [
      "Travel along Erhai Lake without turning it into a photo checklist",
      "Meet Bai cultural traditions through villages and food",
      "Leave room for an unstructured old-town evening",
    ],
    planningNotes: [
      "Use Dali as a base for two or three full days",
      "Respect local communities and residential spaces",
      "Plan for strong highland sun",
    ],
  },
  lijiang: {
    bestTime:
      "Spring and autumn are comfortable, with year-round changes in mountain visibility and visitor levels.",
    orientation:
      "Lijiang becomes more rewarding when the route moves beyond the busiest old-town lanes and includes Naxi culture and the wider landscape.",
    experiences: [
      "Explore Lijiang Old Town before the busiest hours",
      "Learn about Naxi history, music and written culture",
      "See the mountain setting at a pace suited to altitude",
    ],
    planningNotes: [
      "Choose accommodation for access and quiet",
      "Avoid an overpacked high-altitude schedule",
      "Connect naturally with Dali or Shangri-La",
    ],
  },
  "shangri-la": {
    bestTime:
      "Late spring to early autumn is the main travel season; winter is quieter and much colder.",
    orientation:
      "Shangri-La is a high-altitude cultural landscape that needs slower pacing, realistic expectations and respect for local Tibetan life.",
    experiences: [
      "Visit a monastery with cultural context and respectful timing",
      "Experience highland valleys and seasonal landscapes",
      "Understand local food, architecture and daily life",
    ],
    planningNotes: [
      "Discuss altitude suitability in advance",
      "Keep the first day light",
      "Weather can change transport and activity plans",
    ],
  },
  guilin: {
    bestTime:
      "Spring and autumn are popular; river conditions and seasonal rain influence the visual character.",
    orientation:
      "Guilin and Yangshuo should be treated as one landscape chapter, combining the Li River with country roads and village life.",
    experiences: [
      "Travel through the Li River karst landscape",
      "Explore Yangshuo's countryside at a comfortable pace",
      "See sunrise or evening light away from the busiest viewpoints",
    ],
    planningNotes: [
      "Stay in the landscape rather than only in Guilin city",
      "Check river and weather conditions",
      "Choose cycling, walking or vehicle support to fit the group",
    ],
  },
  zhangjiajie: {
    bestTime:
      "Spring and autumn are generally comfortable; mist and rain can dramatically change visibility.",
    orientation:
      "Zhangjiajie's scale is thrilling, but good planning is essential to manage queues, lifts, steps and changing mountain weather.",
    experiences: [
      "See sandstone pillars from contrasting viewpoints",
      "Use cableways and lifts to manage the walking load",
      "Spend time in the forest beyond a single famous platform",
    ],
    planningNotes: [
      "Sequence major areas to reduce backtracking",
      "Clarify height and mobility concerns",
      "Keep weather flexibility in the schedule",
    ],
  },
  guangzhou: {
    bestTime: "Autumn through spring is usually the most comfortable period for urban exploration.",
    orientation:
      "Guangzhou is a food-led southern city with deep trading history, riverfront modernity and strong connections across the Greater Bay Area.",
    experiences: [
      "Begin a morning with traditional dim sum",
      "Read the city's trading history through historic districts",
      "See contemporary Guangzhou along the Pearl River",
    ],
    planningNotes: [
      "Plan meals as core experiences",
      "Brief halal or dietary requirements early",
      "Combine with business travel or a wider southern route",
    ],
  },
  dunhuang: {
    bestTime: "Late spring and early autumn are generally most comfortable for desert travel.",
    orientation:
      "Dunhuang is a concentrated Silk Road chapter where cave art, desert geography and conservation rules require thoughtful advance planning.",
    experiences: [
      "Understand the Mogao Caves with specialist context",
      "Experience the dunes and oasis landscape at a better hour",
      "Connect Buddhist art to the wider Silk Road story",
    ],
    planningNotes: [
      "Reserve key visits in advance",
      "Protect the schedule from midday desert heat",
      "Respect photography and conservation restrictions",
    ],
  },
  kashgar: {
    bestTime:
      "Late spring through autumn is the main practical season, with considerable temperature variation.",
    orientation:
      "Kashgar is culturally and geographically distinct, and deserves enough time for its old city, markets, food and wider landscape.",
    experiences: [
      "Explore the old city through craft and everyday life",
      "Understand the region's Central Asian connections",
      "Taste local breads, fruit and dishes with dietary guidance",
    ],
    planningNotes: [
      "Expect long travel distances in the wider region",
      "Check current entry and permit requirements",
      "Approach photography and local encounters respectfully",
    ],
  },
  urumqi: {
    bestTime: "Summer and early autumn give the broadest access to mountain and lake landscapes.",
    orientation:
      "Urumqi is primarily a gateway to Xinjiang's immense landscapes and food cultures, so the route should look beyond the city itself.",
    experiences: [
      "Travel into the Tianshan mountain landscape",
      "Discover Uyghur and wider regional food traditions",
      "Use the city to understand the scale of China's far west",
    ],
    planningNotes: [
      "Allow realistic time for overland distances",
      "Confirm current access requirements",
      "Plan temperature changes between city and mountains",
    ],
  },
};

const interestExperiences: Record<DestinationInterest, string> = {
  icons: "See nationally significant landmarks with historical context",
  pandas: "Understand wildlife conservation through a responsibly planned visit",
  food: "Explore regional food through markets, meals and local storytelling",
  landscape: "Experience the landscape at hours when light and pace feel more considered",
  heritage: "Meet living traditions through architecture, craft and community history",
  city: "Read contemporary China through neighborhoods, design and city life",
};

export function getDestinationEditorial(destination: ExplorerDestination): DestinationEditorial {
  return (
    editorial[destination.id] ?? {
      bestTime:
        "Spring and autumn are often comfortable, but the right season depends on the wider route.",
      orientation: `${destination.name} works best when its stay, transfers and daily pace are planned as part of the full route.`,
      experiences: destination.interests
        .slice(0, 3)
        .map((interest) => interestExperiences[interest]) as [string, string, string],
      planningNotes: [
        "Allow enough time to experience the destination without rushing",
        "Match walking and transfer expectations to your group",
        "Confirm seasonal conditions before fixing the final route",
      ],
    }
  );
}
