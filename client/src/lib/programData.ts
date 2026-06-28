export type ProgramPace = "Relaxed" | "Balanced" | "Active";
export type ProgramPhysicalLevel = "Easy" | "Moderate" | "Active";

export interface ProgramImage {
  src: string;
  topic: string;
  alt: string;
  caption: string;
}

export interface ProgramDay {
  day: string;
  title: string;
  description: string;
}

export interface Journey {
  id: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  subtitle: string;
  duration: string;
  durationDays: number;
  durationNights: number;
  route: string;
  routeSummary: string;
  destinations: string[];
  themes: string[];
  travelerTypes: string[];
  pace: ProgramPace;
  physicalLevel: ProgramPhysicalLevel;
  bestFor: string[];
  bestTime: string;
  pricingNote: string;
  sourceUrl?: string;
  image: string;
  gallery: ProgramImage[];
  highlights: string[];
  overview: string;
  whyItSells: string[];
  days: ProgramDay[];
  included: string[];
  notIncluded: string[];
  hotelLevel: string[];
  mealSupport: string;
  transport: string;
  guideLanguage: string;
  customization: string[];
  operationalNotes: string[];
  faqs: { q: string; a: string }[];
}

export const journeyFilterOptions = {
  "destinations": [
    "Aksu",
    "Arxan",
    "Beijing",
    "Chengdu",
    "Chongqing",
    "Dali",
    "Dujiangyan",
    "Dunhuang",
    "Ergun",
    "Fenghuang",
    "Gansu",
    "Guangzhou",
    "Gubei Water Town",
    "Guilin",
    "Guiyang",
    "Guizhou",
    "Hailar",
    "Hangzhou",
    "Hohhot",
    "Hongcun",
    "Huangguoshu",
    "Huanglong",
    "Huangshan",
    "Hulunbuir",
    "Inner Mongolia",
    "Jiayuguan",
    "Jiuzhaigou",
    "Kashgar",
    "Korla",
    "Kunming",
    "Kuqa",
    "Lanzhou",
    "Lhasa",
    "Libo",
    "Lijiang",
    "Longji",
    "Luoyang",
    "Manzhouli",
    "Meili Snow Mountain",
    "Mount Siguniang",
    "Namtso",
    "Ningxia",
    "Nyingchi",
    "Shanghai",
    "Shangri-La",
    "Shapotou",
    "Sichuan",
    "Suzhou",
    "Tashkurgan",
    "Tianmen Mountain",
    "Tibet",
    "Tiger Leaping Gorge",
    "Turpan",
    "Urumqi",
    "Wulingyuan",
    "Xi'an",
    "Xidi",
    "Xijiang",
    "Xilamuren Grassland",
    "Xinjiang",
    "Yangshuo",
    "Yangtze River",
    "Yarlung Tsangpo Grand Canyon",
    "Yichang",
    "Yunnan",
    "Zhangjiajie",
    "Zhangye",
    "Zhaoxing"
  ],
  "durationBands": [
    "5-6 Days",
    "7-9 Days",
    "10-12 Days",
    "13+ Days"
  ],
  "themes": [
    "Classic China",
    "First-Time China",
    "Culture & Heritage",
    "Nature & Scenery",
    "Family Travel",
    "Muslim-Friendly",
    "Women-Friendly",
    "Senior-Friendly",
    "Silk Road",
    "Culinary",
    "Yangtze Cruise",
    "Soft Adventure",
    "Luxury",
    "Theme Parks",
    "Slow Travel",
    "City Break"
  ],
  "travelerTypes": [
    "First-Time Visitors",
    "Families",
    "Children-Friendly",
    "Muslim Travelers",
    "Women Travelers",
    "Senior Travelers",
    "Couples",
    "Food Travelers",
    "Culture Lovers",
    "Nature Lovers"
  ],
  "pace": [
    "Relaxed",
    "Balanced",
    "Active"
  ]
};

export const journeys: Journey[] = [
  {
    "id": "classic-china-first-trip-8-day",
    "title": "8-Day Classic China First Trip",
    "seoTitle": "8-Day Classic China First Private China Trip | China Prime DMC",
    "metaDescription": "A private first-China route combining imperial Beijing, ancient Xi'an, and modern Shanghai with clear pacing, private guides, and flexible family-friendly planning.",
    "subtitle": "The cleanest private route for travelers visiting China for the first time.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Beijing - Xi'an - Shanghai",
    "routeSummary": "The cleanest private route for travelers visiting China for the first time.",
    "destinations": [
      "Beijing",
      "Xi'an",
      "Shanghai"
    ],
    "themes": [
      "Classic China",
      "Culture & Heritage",
      "First-Time China"
    ],
    "travelerTypes": [
      "First-Time Visitors",
      "Families",
      "Senior Travelers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "first-time China travelers",
      "couples and families",
      "travelers who want the essential icons"
    ],
    "bestTime": "March to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-mutianyu.jpg",
    "gallery": [
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-mutianyu.jpg",
        "topic": "Mutianyu Great Wall",
        "alt": "Mutianyu Great Wall private China trip image for China Prime DMC travelers",
        "caption": "Mutianyu Great Wall - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-terracotta-army.jpg",
        "topic": "Terracotta Army",
        "alt": "Terracotta Army private China trip image for China Prime DMC travelers",
        "caption": "Terracotta Army - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-shanghai-tower.jpg",
        "topic": "Shanghai Tower",
        "alt": "Shanghai Tower private China trip image for China Prime DMC travelers",
        "caption": "Shanghai Tower - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-yu-garden.jpg",
        "topic": "Yu Garden",
        "alt": "Yu Garden private China trip image for China Prime DMC travelers",
        "caption": "Yu Garden - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
        "topic": "Xi'an Muslim Quarter",
        "alt": "Xi'an Muslim Quarter private China trip image for China Prime DMC travelers",
        "caption": "Xi'an Muslim Quarter - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Great Wall with private guide",
      "Terracotta Army in Xi'an",
      "Shanghai skyline and Yu Garden",
      "High-speed rail or flight options",
      "Easy first-time China pacing"
    ],
    "overview": "A private first-China route that combines the country's three most recognizable city stories: imperial Beijing, ancient Xi'an, and modern Shanghai. It is ideal when travelers want the classics without guessing how to connect them.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Xi'an",
        "description": "Private touring in Xi'an with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-8",
        "title": "Shanghai",
        "description": "Private touring in Shanghai with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "beijing-great-wall-gubei-private-5-day",
    "title": "5-Day Beijing, Great Wall & Gubei Private Escape",
    "seoTitle": "5-Day Beijing, Great Wall & Gubei Private Escape | China Prime DMC",
    "metaDescription": "A softer Beijing trip that pairs the capital's biggest landmarks with a calmer stay below the Great Wall. Good for travelers who want atmosphere, photograp",
    "subtitle": "A compact Beijing trip with a scenic Great Wall-side overnight.",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "durationNights": 4,
    "route": "Beijing - Gubei Water Town - Great Wall - Beijing",
    "routeSummary": "A compact Beijing trip with a scenic Great Wall-side overnight.",
    "destinations": [
      "Beijing",
      "Gubei Water Town"
    ],
    "themes": [
      "Classic China",
      "Culture & Heritage",
      "Soft Adventure"
    ],
    "travelerTypes": [
      "First-Time Visitors",
      "Families",
      "Senior Travelers"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "short private stays",
      "families",
      "senior-friendly Beijing trips"
    ],
    "bestTime": "April to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-gubei-water-town.jpg",
    "gallery": [
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-gubei-water-town.jpg",
        "topic": "Gubei Water Town",
        "alt": "Gubei Water Town private China trip image for China Prime DMC travelers",
        "caption": "Gubei Water Town - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city.jpg",
        "topic": "Forbidden City",
        "alt": "Forbidden City private China trip image for China Prime DMC travelers",
        "caption": "Forbidden City - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-temple-of-heaven.jpg",
        "topic": "Temple of Heaven",
        "alt": "Temple of Heaven private China trip image for China Prime DMC travelers",
        "caption": "Temple of Heaven - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-summer-palace.jpg",
        "topic": "Summer Palace",
        "alt": "Summer Palace private China trip image for China Prime DMC travelers",
        "caption": "Summer Palace - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg",
        "topic": "Great Wall of China",
        "alt": "Great Wall of China private China trip image for China Prime DMC travelers",
        "caption": "Great Wall of China - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Great Wall scenery",
      "Gubei overnight atmosphere",
      "Forbidden City and Temple of Heaven",
      "Summer Palace gardens",
      "Private transfers throughout"
    ],
    "overview": "A softer Beijing trip that pairs the capital's biggest landmarks with a calmer stay below the Great Wall. Good for travelers who want atmosphere, photography, and less rushing.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 2",
        "title": "Gubei Water Town",
        "description": "Private touring in Gubei Water Town with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 3",
        "title": "Great Wall",
        "description": "Private touring in Great Wall with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 4-5",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "family-theme-park-china-10-day",
    "title": "10-Day Family China with Theme Parks, Pandas & Big Cities",
    "seoTitle": "10-Day Family China with Theme Parks, Pandas & Big Cities | China Prime DMC",
    "metaDescription": "A family-first China route that mixes famous cities with theme parks and animal experiences. It gives children reasons to stay excited while parents still ",
    "subtitle": "A private China trip designed around children, comfort, and easy logistics.",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "durationNights": 9,
    "route": "Beijing - Shanghai - Guangzhou",
    "routeSummary": "A private China trip designed around children, comfort, and easy logistics.",
    "destinations": [
      "Beijing",
      "Shanghai",
      "Guangzhou"
    ],
    "themes": [
      "Family Travel",
      "Classic China",
      "Theme Parks"
    ],
    "travelerTypes": [
      "Families",
      "Children-Friendly",
      "First-Time Visitors"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "families with children",
      "school holiday trips",
      "parents wanting culture plus fun"
    ],
    "bestTime": "March to May, October, and school holidays",
    "pricingNote": "Custom quote",
    "image": "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-universal-beijing-resort.jpg",
    "gallery": [
      {
        "src": "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-universal-beijing-resort.jpg",
        "topic": "Universal Beijing Resort",
        "alt": "Universal Beijing Resort private China trip image for China Prime DMC travelers",
        "caption": "Universal Beijing Resort - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-shanghai-disneyland.jpg",
        "topic": "Shanghai Disneyland",
        "alt": "Shanghai Disneyland private China trip image for China Prime DMC travelers",
        "caption": "Shanghai Disneyland - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-chimelong-safari-park.jpg",
        "topic": "Chimelong Safari Park",
        "alt": "Chimelong Safari Park private China trip image for China Prime DMC travelers",
        "caption": "Chimelong Safari Park - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-guangzhou.jpg",
        "topic": "Guangzhou",
        "alt": "Guangzhou private China trip image for China Prime DMC travelers",
        "caption": "Guangzhou - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-beijing-national-stadium.jpg",
        "topic": "Beijing National Stadium",
        "alt": "Beijing National Stadium private China trip image for China Prime DMC travelers",
        "caption": "Beijing National Stadium - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Universal Beijing Resort",
      "Shanghai Disneyland",
      "Chimelong Safari Park",
      "Private family transfers",
      "Flexible starts for children"
    ],
    "overview": "A family-first China route that mixes famous cities with theme parks and animal experiences. It gives children reasons to stay excited while parents still get cultural highlights.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-3",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 4-6",
        "title": "Shanghai",
        "description": "Private touring in Shanghai with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-10",
        "title": "Guangzhou",
        "description": "Private touring in Guangzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "senior-friendly-classic-china-12-day",
    "title": "12-Day Senior-Friendly Classic China",
    "seoTitle": "12-Day Senior-Friendly Classic China | China Prime DMC",
    "metaDescription": "A slower version of the classic China route, with fewer rushed days and more room for rest. It is built for travelers who want the icons with comfort, good",
    "subtitle": "The classic route rebuilt for comfort, rest time, and senior-friendly pacing.",
    "duration": "12 Days / 11 Nights",
    "durationDays": 12,
    "durationNights": 11,
    "route": "Beijing - Xi'an - Shanghai - Suzhou",
    "routeSummary": "The classic route rebuilt for comfort, rest time, and senior-friendly pacing.",
    "destinations": [
      "Beijing",
      "Xi'an",
      "Shanghai",
      "Suzhou"
    ],
    "themes": [
      "Classic China",
      "Culture & Heritage",
      "Senior-Friendly"
    ],
    "travelerTypes": [
      "Senior Travelers",
      "First-Time Visitors",
      "Couples"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "senior travelers",
      "slow-paced first China trips",
      "couples wanting comfort"
    ],
    "bestTime": "April to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-tiananmen-square.jpg",
    "gallery": [
      {
        "src": "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-tiananmen-square.jpg",
        "topic": "Tiananmen Square",
        "alt": "Tiananmen Square private China trip image for China Prime DMC travelers",
        "caption": "Tiananmen Square - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-badaling.jpg",
        "topic": "Badaling Great Wall",
        "alt": "Badaling Great Wall private China trip image for China Prime DMC travelers",
        "caption": "Badaling Great Wall - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-xi-an-city-wall.jpg",
        "topic": "Xi'an City Wall",
        "alt": "Xi'an City Wall private China trip image for China Prime DMC travelers",
        "caption": "Xi'an City Wall - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-big-wild-goose-pagoda.jpg",
        "topic": "Big Wild Goose Pagoda",
        "alt": "Big Wild Goose Pagoda private China trip image for China Prime DMC travelers",
        "caption": "Big Wild Goose Pagoda - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-nanjing-road.jpg",
        "topic": "Nanjing Road Shanghai",
        "alt": "Nanjing Road Shanghai private China trip image for China Prime DMC travelers",
        "caption": "Nanjing Road Shanghai - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "More time in each major city",
      "Great Wall with easier access",
      "Xi'an ancient capital",
      "Shanghai comfort finale",
      "Optional Suzhou garden day"
    ],
    "overview": "A slower version of the classic China route, with fewer rushed days and more room for rest. It is built for travelers who want the icons with comfort, good hotels, and private guide support.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-3",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 4-6",
        "title": "Xi'an",
        "description": "Private touring in Xi'an with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-9",
        "title": "Shanghai",
        "description": "Private touring in Shanghai with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 10-12",
        "title": "Suzhou",
        "description": "Private touring in Suzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "yangtze-river-classic-china-13-day",
    "title": "13-Day Classic China & Yangtze River Private Journey",
    "seoTitle": "13-Day Classic China & Yangtze River Private Journey | China Prime DMC",
    "metaDescription": "A broad private China journey that combines classic landmarks, pandas, river scenery, and an easier cruise rhythm. Good for travelers who want variety with",
    "subtitle": "Classic China plus a scenic Yangtze River section.",
    "duration": "13 Days / 12 Nights",
    "durationDays": 13,
    "durationNights": 12,
    "route": "Beijing - Xi'an - Chengdu - Chongqing - Yangtze River - Yichang - Shanghai",
    "routeSummary": "Classic China plus a scenic Yangtze River section.",
    "destinations": [
      "Beijing",
      "Xi'an",
      "Chengdu",
      "Chongqing",
      "Yangtze River",
      "Yichang",
      "Shanghai"
    ],
    "themes": [
      "Classic China",
      "Yangtze Cruise",
      "Family Travel",
      "Senior-Friendly"
    ],
    "travelerTypes": [
      "Senior Travelers",
      "Families",
      "First-Time Visitors"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "travelers who want a cruise element",
      "senior travelers",
      "classic China with pandas"
    ],
    "bestTime": "April to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-wu-gorge.jpg",
    "gallery": [
      {
        "src": "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-wu-gorge.jpg",
        "topic": "Wu Gorge",
        "alt": "Wu Gorge private China trip image for China Prime DMC travelers",
        "caption": "Wu Gorge - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-yangtze.jpg",
        "topic": "Yangtze River",
        "alt": "Yangtze River private China trip image for China Prime DMC travelers",
        "caption": "Yangtze River - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-three-gorges-dam.jpg",
        "topic": "Three Gorges Dam",
        "alt": "Three Gorges Dam private China trip image for China Prime DMC travelers",
        "caption": "Three Gorges Dam - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-shennong-stream.jpg",
        "topic": "Shennong Stream",
        "alt": "Shennong Stream private China trip image for China Prime DMC travelers",
        "caption": "Shennong Stream - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-shanghai-world-financial-center.jpg",
        "topic": "Shanghai World Financial Center",
        "alt": "Shanghai World Financial Center private China trip image for China Prime DMC travelers",
        "caption": "Shanghai World Financial Center - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Great Wall and Terracotta Army",
      "Chengdu pandas",
      "Yangtze River cruise scenery",
      "Three Gorges region",
      "Shanghai finale"
    ],
    "overview": "A broad private China journey that combines classic landmarks, pandas, river scenery, and an easier cruise rhythm. Good for travelers who want variety without changing hotels every night.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Beijing",
        "description": "Travel through Beijing with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 3-4",
        "title": "Xi'an",
        "description": "Travel through Xi'an with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-6",
        "title": "Chengdu",
        "description": "Travel through Chengdu with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 7-8",
        "title": "Chongqing",
        "description": "Travel through Chongqing with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 9-10",
        "title": "Yangtze River",
        "description": "Travel through Yangtze River with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 11-12",
        "title": "Yichang",
        "description": "Travel through Yichang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "east-china-gardens-huangshan-9-day",
    "title": "9-Day Shanghai, Hangzhou, Suzhou & Huangshan Scenic Trip",
    "seoTitle": "9-Day Shanghai, Hangzhou, Suzhou & Huangshan Scenic Private China Trip | China Prime DMC",
    "metaDescription": "A refined east China trip for travelers who want a beautiful mix of city style, lake scenery, classical gardens, villages, and mountains.",
    "subtitle": "A polished east China route with skyline, gardens, tea, villages, and mountain scenery.",
    "duration": "9 Days / 8 Nights",
    "durationDays": 9,
    "durationNights": 8,
    "route": "Shanghai - Suzhou - Hangzhou - Huangshan - Hongcun - Xidi",
    "routeSummary": "A polished east China route with skyline, gardens, tea, villages, and mountain scenery.",
    "destinations": [
      "Shanghai",
      "Suzhou",
      "Hangzhou",
      "Huangshan",
      "Hongcun",
      "Xidi"
    ],
    "themes": [
      "Culture & Heritage",
      "Nature & Scenery",
      "Women-Friendly"
    ],
    "travelerTypes": [
      "Couples",
      "Women Travelers",
      "Senior Travelers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "garden lovers",
      "couples",
      "photography travelers"
    ],
    "bestTime": "March to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-hongcun.jpg",
    "gallery": [
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-hongcun.jpg",
        "topic": "Hongcun Village",
        "alt": "Hongcun Village private China trip image for China Prime DMC travelers",
        "caption": "Hongcun Village - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg",
        "topic": "The Bund",
        "alt": "The Bund private China trip image for China Prime DMC travelers",
        "caption": "The Bund - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
        "topic": "West Lake",
        "alt": "West Lake private China trip image for China Prime DMC travelers",
        "caption": "West Lake - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg",
        "topic": "Huangshan",
        "alt": "Huangshan private China trip image for China Prime DMC travelers",
        "caption": "Huangshan - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-xidi.jpg",
        "topic": "Xidi Village",
        "alt": "Xidi Village private China trip image for China Prime DMC travelers",
        "caption": "Xidi Village - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Shanghai skyline",
      "Suzhou and Hangzhou elegance",
      "Huangshan mountain views",
      "Hongcun and Xidi villages",
      "Tea and garden culture"
    ],
    "overview": "A refined east China trip for travelers who want a beautiful mix of city style, lake scenery, classical gardens, villages, and mountains.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Shanghai",
        "description": "Travel through Shanghai with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 2",
        "title": "Suzhou",
        "description": "Travel through Suzhou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 3",
        "title": "Hangzhou",
        "description": "Travel through Hangzhou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 4",
        "title": "Huangshan",
        "description": "Travel through Huangshan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 5",
        "title": "Hongcun",
        "description": "Travel through Hongcun with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 6-9",
        "title": "Xidi",
        "description": "Travel through Xidi with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "south-china-guilin-yangshuo-6-day",
    "title": "6-Day Guangzhou, Guilin & Yangshuo Scenic Trip",
    "seoTitle": "6-Day Guangzhou, Guilin & Yangshuo Scenic Private China Trip | China Prime DMC",
    "metaDescription": "A bright south China route that balances Cantonese city life with the karst landscapes foreign travelers imagine when they picture Guilin.",
    "subtitle": "Cantonese culture and Guilin's most recognizable river scenery.",
    "duration": "6 Days / 5 Nights",
    "durationDays": 6,
    "durationNights": 5,
    "route": "Guangzhou - Guilin - Yangshuo - Longji",
    "routeSummary": "Cantonese culture and Guilin's most recognizable river scenery.",
    "destinations": [
      "Guangzhou",
      "Guilin",
      "Yangshuo",
      "Longji"
    ],
    "themes": [
      "Nature & Scenery",
      "Culinary",
      "Family Travel"
    ],
    "travelerTypes": [
      "Families",
      "First-Time Visitors",
      "Senior Travelers"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "families",
      "scenery lovers",
      "short south China trips"
    ],
    "bestTime": "April to October",
    "pricingNote": "Custom quote",
    "image": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-yangshuo-county.jpg",
    "gallery": [
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-yangshuo-county.jpg",
        "topic": "Yangshuo County",
        "alt": "Yangshuo County private China trip image for China Prime DMC travelers",
        "caption": "Yangshuo County - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg",
        "topic": "Li River",
        "alt": "Li River private China trip image for China Prime DMC travelers",
        "caption": "Li River - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-longji-rice-terraces.jpg",
        "topic": "Longji Rice Terraces",
        "alt": "Longji Rice Terraces private China trip image for China Prime DMC travelers",
        "caption": "Longji Rice Terraces - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-canton-tower.jpg",
        "topic": "Canton Tower",
        "alt": "Canton Tower private China trip image for China Prime DMC travelers",
        "caption": "Canton Tower - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-chen-clan-ancestral-hall.jpg",
        "topic": "Chen Clan Ancestral Hall",
        "alt": "Chen Clan Ancestral Hall private China trip image for China Prime DMC travelers",
        "caption": "Chen Clan Ancestral Hall - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Li River scenery",
      "Yangshuo countryside",
      "Longji Rice Terraces option",
      "Cantonese food culture",
      "Easy private transfers"
    ],
    "overview": "A bright south China route that balances Cantonese city life with the karst landscapes foreign travelers imagine when they picture Guilin.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Guangzhou",
        "description": "Private touring in Guangzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 2",
        "title": "Guilin",
        "description": "Private touring in Guilin with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 3",
        "title": "Yangshuo",
        "description": "Private touring in Yangshuo with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 4-6",
        "title": "Longji",
        "description": "Private touring in Longji with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "chengdu-chongqing-pandas-food-5-day",
    "title": "5-Day Chengdu & Chongqing Food, Pandas and City Lights",
    "seoTitle": "5-Day Chengdu & Chongqing Food, Pandas and City Lights | China Prime DMC",
    "metaDescription": "A compact private trip for travelers who want pandas, hotpot culture, teahouses, and the cinematic city energy of Chongqing.",
    "subtitle": "A short, flavorful southwest China city trip.",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "durationNights": 4,
    "route": "Chongqing - Chengdu",
    "routeSummary": "A short, flavorful southwest China city trip.",
    "destinations": [
      "Chongqing",
      "Chengdu"
    ],
    "themes": [
      "Culinary",
      "Family Travel",
      "City Break"
    ],
    "travelerTypes": [
      "Families",
      "Food Travelers",
      "First-Time Visitors"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "food lovers",
      "families",
      "short southwest China trips"
    ],
    "bestTime": "March to June and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-ciqikou.jpg",
    "gallery": [
      {
        "src": "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-ciqikou.jpg",
        "topic": "Ciqikou Chongqing",
        "alt": "Ciqikou Chongqing private China trip image for China Prime DMC travelers",
        "caption": "Ciqikou Chongqing - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
        "topic": "Hongya Cave",
        "alt": "Hongya Cave private China trip image for China Prime DMC travelers",
        "caption": "Hongya Cave - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-chongqing.jpg",
        "topic": "Chongqing Skyline",
        "alt": "Chongqing Skyline private China trip image for China Prime DMC travelers",
        "caption": "Chongqing Skyline - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-sichuan-cuisine.jpg",
        "topic": "Sichuan Cuisine",
        "alt": "Sichuan Cuisine private China trip image for China Prime DMC travelers",
        "caption": "Sichuan Cuisine - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-chengdu.jpg",
        "topic": "Chengdu",
        "alt": "Chengdu private China trip image for China Prime DMC travelers",
        "caption": "Chengdu - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Chongqing night views",
      "Chengdu lifestyle",
      "Sichuan food with spice control",
      "Panda base option",
      "Short high-impact route"
    ],
    "overview": "A compact private trip for travelers who want pandas, hotpot culture, teahouses, and the cinematic city energy of Chongqing.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Chongqing",
        "description": "Private touring in Chongqing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-5",
        "title": "Chengdu",
        "description": "Private touring in Chengdu with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "jiuzhaigou-chengdu-chongqing-family-6-day",
    "title": "6-Day Chongqing, Jiuzhaigou & Chengdu Family Nature Trip",
    "seoTitle": "6-Day Chongqing, Jiuzhaigou & Chengdu Family Nature Private China Trip | China Prime DMC",
    "metaDescription": "A southwest China trip that adds major mountain scenery to Chengdu and Chongqing, with timing designed for private travelers rather than fast group touring",
    "subtitle": "Pandas, mountain scenery, and southwest city culture.",
    "duration": "6 Days / 5 Nights",
    "durationDays": 6,
    "durationNights": 5,
    "route": "Chongqing - Jiuzhaigou - Chengdu",
    "routeSummary": "Pandas, mountain scenery, and southwest city culture.",
    "destinations": [
      "Chongqing",
      "Jiuzhaigou",
      "Chengdu"
    ],
    "themes": [
      "Nature & Scenery",
      "Family Travel",
      "Soft Adventure"
    ],
    "travelerTypes": [
      "Families",
      "Nature Lovers",
      "Senior Travelers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "families",
      "nature-focused travelers",
      "panda and mountain scenery trips"
    ],
    "bestTime": "April to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-three-gorges.jpg",
    "gallery": [
      {
        "src": "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-three-gorges.jpg",
        "topic": "Three Gorges Scenery",
        "alt": "Three Gorges Scenery private China trip image for China Prime DMC travelers",
        "caption": "Three Gorges Scenery - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-chengdu-research-base-of-giant-panda-breeding.jpg",
        "topic": "Chengdu Panda Base",
        "alt": "Chengdu Panda Base private China trip image for China Prime DMC travelers",
        "caption": "Chengdu Panda Base - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-dazu-rock-carvings.jpg",
        "topic": "Dazu Rock Carvings",
        "alt": "Dazu Rock Carvings private China trip image for China Prime DMC travelers",
        "caption": "Dazu Rock Carvings - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-kuanzhai-alley.jpg",
        "topic": "Kuanzhai Alley",
        "alt": "Kuanzhai Alley private China trip image for China Prime DMC travelers",
        "caption": "Kuanzhai Alley - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-fengdu-ghost-city.jpg",
        "topic": "Fengdu Scenic Area",
        "alt": "Fengdu Scenic Area private China trip image for China Prime DMC travelers",
        "caption": "Fengdu Scenic Area - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Jiuzhaigou nature routing",
      "Chengdu pandas",
      "Chongqing city energy",
      "Private guide support",
      "Family-friendly pacing"
    ],
    "overview": "A southwest China trip that adds major mountain scenery to Chengdu and Chongqing, with timing designed for private travelers rather than fast group touring.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Chongqing",
        "description": "Private touring in Chongqing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Jiuzhaigou",
        "description": "Private touring in Jiuzhaigou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Chengdu",
        "description": "Private touring in Chengdu with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "zhangjiajie-fenghuang-private-5-day",
    "title": "5-Day Zhangjiajie & Fenghuang Avatar Mountains Trip",
    "seoTitle": "5-Day Zhangjiajie & Fenghuang Avatar Mountains Private China Trip | China Prime DMC",
    "metaDescription": "A dramatic nature trip for travelers who want China to look cinematic, with private support through Zhangjiajie's complex scenic areas.",
    "subtitle": "Zhangjiajie peaks, Tianmen Mountain, and Fenghuang old-town atmosphere.",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "durationNights": 4,
    "route": "Zhangjiajie - Wulingyuan - Tianmen Mountain - Fenghuang",
    "routeSummary": "Zhangjiajie peaks, Tianmen Mountain, and Fenghuang old-town atmosphere.",
    "destinations": [
      "Zhangjiajie",
      "Wulingyuan",
      "Tianmen Mountain",
      "Fenghuang"
    ],
    "themes": [
      "Nature & Scenery",
      "Soft Adventure",
      "Family Travel"
    ],
    "travelerTypes": [
      "Nature Lovers",
      "Families",
      "Couples"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "scenery lovers",
      "photography travelers",
      "families with active teens"
    ],
    "bestTime": "April to June and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park.jpg",
    "gallery": [
      {
        "src": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park.jpg",
        "topic": "Zhangjiajie National Forest Park",
        "alt": "Zhangjiajie National Forest Park private China trip image for China Prime DMC travelers",
        "caption": "Zhangjiajie National Forest Park - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-wulingyuan.jpg",
        "topic": "Wulingyuan",
        "alt": "Wulingyuan private China trip image for China Prime DMC travelers",
        "caption": "Wulingyuan - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg",
        "topic": "Tianmen Mountain",
        "alt": "Tianmen Mountain private China trip image for China Prime DMC travelers",
        "caption": "Tianmen Mountain - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-glass-bridge.jpg",
        "topic": "Zhangjiajie Glass Bridge",
        "alt": "Zhangjiajie Glass Bridge private China trip image for China Prime DMC travelers",
        "caption": "Zhangjiajie Glass Bridge - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-fenghuang-county.jpg",
        "topic": "Fenghuang Ancient Town",
        "alt": "Fenghuang Ancient Town private China trip image for China Prime DMC travelers",
        "caption": "Fenghuang Ancient Town - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Wulingyuan sandstone peaks",
      "Tianmen Mountain",
      "Glass bridge option",
      "Fenghuang riverside old town",
      "Private scenic-area logistics"
    ],
    "overview": "A dramatic nature trip for travelers who want China to look cinematic, with private support through Zhangjiajie's complex scenic areas.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Zhangjiajie",
        "description": "Private touring in Zhangjiajie with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 2",
        "title": "Wulingyuan",
        "description": "Private touring in Wulingyuan with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 3",
        "title": "Tianmen Mountain",
        "description": "Private touring in Tianmen Mountain with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 4-5",
        "title": "Fenghuang",
        "description": "Private touring in Fenghuang with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "women-scenic-china-11-day",
    "title": "11-Day Women-Friendly Beijing, Zhangjiajie, Hangzhou & Shanghai",
    "seoTitle": "11-Day Women-Friendly Beijing, Zhangjiajie, Hangzhou & Shanghai | China Prime DMC",
    "metaDescription": "A women-friendly route that blends icons, scenic wow moments, tea culture, and stylish city time with private guides and comfortable pacing.",
    "subtitle": "A scenic and lifestyle-led China trip for women travelers and friends.",
    "duration": "11 Days / 10 Nights",
    "durationDays": 11,
    "durationNights": 10,
    "route": "Beijing - Zhangjiajie - Hangzhou - Shanghai",
    "routeSummary": "A scenic and lifestyle-led China trip for women travelers and friends.",
    "destinations": [
      "Beijing",
      "Zhangjiajie",
      "Hangzhou",
      "Shanghai"
    ],
    "themes": [
      "Women-Friendly",
      "Nature & Scenery",
      "Classic China"
    ],
    "travelerTypes": [
      "Women Travelers",
      "Couples",
      "First-Time Visitors"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "women travelers",
      "photo-friendly private trips",
      "friends traveling together"
    ],
    "bestTime": "April to June and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/women-beijing-zhangjiajie-shanghai-11-day/china-prime-dmc-women-beijing-zhangjiajie-shanghai-11-day-tianzi-mountain.jpg",
    "gallery": [
      {
        "src": "/programs/women-beijing-zhangjiajie-shanghai-11-day/china-prime-dmc-women-beijing-zhangjiajie-shanghai-11-day-tianzi-mountain.jpg",
        "topic": "Tianzi Mountain",
        "alt": "Tianzi Mountain private China trip image for China Prime DMC travelers",
        "caption": "Tianzi Mountain - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-zhangjiajie-shanghai-11-day/china-prime-dmc-women-beijing-zhangjiajie-shanghai-11-day-yuanjiajie.jpg",
        "topic": "Yuanjiajie",
        "alt": "Yuanjiajie private China trip image for China Prime DMC travelers",
        "caption": "Yuanjiajie - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-zhangjiajie-shanghai-11-day/china-prime-dmc-women-beijing-zhangjiajie-shanghai-11-day-west-lake.jpg",
        "topic": "West Lake Hangzhou",
        "alt": "West Lake Hangzhou private China trip image for China Prime DMC travelers",
        "caption": "West Lake Hangzhou - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-zhangjiajie-shanghai-11-day/china-prime-dmc-women-beijing-zhangjiajie-shanghai-11-day-longjing-tea.jpg",
        "topic": "Longjing Tea",
        "alt": "Longjing Tea private China trip image for China Prime DMC travelers",
        "caption": "Longjing Tea - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-zhangjiajie-shanghai-11-day/china-prime-dmc-women-beijing-zhangjiajie-shanghai-11-day-liangma-river.jpg",
        "topic": "Liangma River Beijing",
        "alt": "Liangma River Beijing private China trip image for China Prime DMC travelers",
        "caption": "Liangma River Beijing - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Women-friendly pacing",
      "Zhangjiajie mountain scenery",
      "Hangzhou tea and West Lake",
      "Beijing icons",
      "Shanghai finale"
    ],
    "overview": "A women-friendly route that blends icons, scenic wow moments, tea culture, and stylish city time with private guides and comfortable pacing.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Zhangjiajie",
        "description": "Private touring in Zhangjiajie with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Hangzhou",
        "description": "Private touring in Hangzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-11",
        "title": "Shanghai",
        "description": "Private touring in Shanghai with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "female-culture-lifestyle-10-day",
    "title": "10-Day Women-Friendly Culture, Food & Lifestyle China",
    "seoTitle": "10-Day Women-Friendly Culture, Food & Lifestyle China | China Prime DMC",
    "metaDescription": "A lifestyle-rich women-friendly trip with heritage, food, tea, old towns, and southwest city energy.",
    "subtitle": "Culture, food, tea, and modern southwest China in a women-friendly rhythm.",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "durationNights": 9,
    "route": "Beijing - Luoyang - Chongqing - Chengdu",
    "routeSummary": "Culture, food, tea, and modern southwest China in a women-friendly rhythm.",
    "destinations": [
      "Beijing",
      "Luoyang",
      "Chongqing",
      "Chengdu"
    ],
    "themes": [
      "Women-Friendly",
      "Culinary",
      "Culture & Heritage"
    ],
    "travelerTypes": [
      "Women Travelers",
      "Food Travelers",
      "Culture Lovers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "women travelers",
      "culture and food lovers",
      "friends traveling together"
    ],
    "bestTime": "March to June and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-prince-gong-mansion.jpg",
    "gallery": [
      {
        "src": "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-prince-gong-mansion.jpg",
        "topic": "Prince Gong Mansion",
        "alt": "Prince Gong Mansion private China trip image for China Prime DMC travelers",
        "caption": "Prince Gong Mansion - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-luoyi-ancient-city.jpg",
        "topic": "Luoyi Ancient City",
        "alt": "Luoyi Ancient City private China trip image for China Prime DMC travelers",
        "caption": "Luoyi Ancient City - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-luoyang.jpg",
        "topic": "Luoyang",
        "alt": "Luoyang private China trip image for China Prime DMC travelers",
        "caption": "Luoyang - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-jiefangbei.jpg",
        "topic": "Jiefangbei Chongqing",
        "alt": "Jiefangbei Chongqing private China trip image for China Prime DMC travelers",
        "caption": "Jiefangbei Chongqing - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-chengdu-tea-house.jpg",
        "topic": "Chengdu Tea House",
        "alt": "Chengdu Tea House private China trip image for China Prime DMC travelers",
        "caption": "Chengdu Tea House - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Beijing mansion culture",
      "Luoyang ancient city",
      "Chongqing food streets",
      "Chengdu teahouses",
      "Comfortable private flow"
    ],
    "overview": "A lifestyle-rich women-friendly trip with heritage, food, tea, old towns, and southwest city energy.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Luoyang",
        "description": "Private touring in Luoyang with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Chongqing",
        "description": "Private touring in Chongqing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-10",
        "title": "Chengdu",
        "description": "Private touring in Chengdu with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "muslim-friendly-classic-china-8-day",
    "title": "8-Day Muslim-Friendly Beijing, Xi'an & Shanghai",
    "seoTitle": "8-Day Muslim-Friendly Beijing, Xi'an & Shanghai | China Prime DMC",
    "metaDescription": "A classic China private trip adapted for Muslim travelers, with practical meal planning and honest routing support.",
    "subtitle": "The first-time China route rebuilt with Muslim-friendly planning.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Beijing - Xi'an - Shanghai",
    "routeSummary": "The first-time China route rebuilt with Muslim-friendly planning.",
    "destinations": [
      "Beijing",
      "Xi'an",
      "Shanghai"
    ],
    "themes": [
      "Muslim-Friendly",
      "Classic China",
      "Culture & Heritage"
    ],
    "travelerTypes": [
      "Muslim Travelers",
      "Families",
      "First-Time Visitors"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "Muslim travelers",
      "families",
      "first-time China visitors"
    ],
    "bestTime": "March to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
    "gallery": [
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
        "topic": "Xi'an Muslim Quarter",
        "alt": "Xi'an Muslim Quarter private China trip image for China Prime DMC travelers",
        "caption": "Xi'an Muslim Quarter - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-temple-of-heaven.jpg",
        "topic": "Temple of Heaven",
        "alt": "Temple of Heaven private China trip image for China Prime DMC travelers",
        "caption": "Temple of Heaven - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-terracotta-army.jpg",
        "topic": "Terracotta Army",
        "alt": "Terracotta Army private China trip image for China Prime DMC travelers",
        "caption": "Terracotta Army - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-yu-garden.jpg",
        "topic": "Yu Garden Shanghai",
        "alt": "Yu Garden Shanghai private China trip image for China Prime DMC travelers",
        "caption": "Yu Garden Shanghai - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-shanghai-tower.jpg",
        "topic": "Shanghai Tower",
        "alt": "Shanghai Tower private China trip image for China Prime DMC travelers",
        "caption": "Shanghai Tower - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Halal-aware meal planning",
      "Xi'an Muslim Quarter",
      "Classic China icons",
      "Private transfers",
      "Prayer-stop advice by route"
    ],
    "overview": "A classic China private trip adapted for Muslim travelers, with practical meal planning and honest routing support.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Xi'an",
        "description": "Private touring in Xi'an with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-8",
        "title": "Shanghai",
        "description": "Private touring in Shanghai with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "silk-road-gansu-ningxia-8-day",
    "title": "8-Day Gansu & Ningxia Silk Road Desert Trip",
    "seoTitle": "8-Day Gansu & Ningxia Silk Road Desert Private China Trip | China Prime DMC",
    "metaDescription": "A western China route through real Silk Road cities, desert landscapes, Buddhist art, and Muslim-friendly planning points.",
    "subtitle": "A desert and culture-focused Silk Road journey.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Lanzhou - Zhangye - Jiayuguan - Dunhuang - Shapotou",
    "routeSummary": "A desert and culture-focused Silk Road journey.",
    "destinations": [
      "Lanzhou",
      "Zhangye",
      "Jiayuguan",
      "Dunhuang",
      "Shapotou",
      "Gansu",
      "Ningxia"
    ],
    "themes": [
      "Silk Road",
      "Muslim-Friendly",
      "Nature & Scenery"
    ],
    "travelerTypes": [
      "Muslim Travelers",
      "Culture Lovers",
      "Nature Lovers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "Silk Road travelers",
      "Muslim-friendly groups",
      "desert scenery lovers"
    ],
    "bestTime": "May to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
    "gallery": [
      {
        "src": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
        "topic": "Crescent Lake Dunhuang",
        "alt": "Crescent Lake Dunhuang private China trip image for China Prime DMC travelers",
        "caption": "Crescent Lake Dunhuang - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg",
        "topic": "Zhangye National Geopark",
        "alt": "Zhangye National Geopark private China trip image for China Prime DMC travelers",
        "caption": "Zhangye National Geopark - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-jiayuguan-pass.jpg",
        "topic": "Jiayuguan Pass",
        "alt": "Jiayuguan Pass private China trip image for China Prime DMC travelers",
        "caption": "Jiayuguan Pass - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-mogao-caves.jpg",
        "topic": "Mogao Caves",
        "alt": "Mogao Caves private China trip image for China Prime DMC travelers",
        "caption": "Mogao Caves - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-shapotou.jpg",
        "topic": "Shapotou",
        "alt": "Shapotou private China trip image for China Prime DMC travelers",
        "caption": "Shapotou - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Zhangye Danxia colors",
      "Jiayuguan frontier history",
      "Mogao Caves",
      "Dunhuang desert scenery",
      "Muslim-friendly route logic"
    ],
    "overview": "A western China route through real Silk Road cities, desert landscapes, Buddhist art, and Muslim-friendly planning points.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Lanzhou",
        "description": "Travel through Lanzhou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 2",
        "title": "Zhangye",
        "description": "Travel through Zhangye with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 3",
        "title": "Jiayuguan",
        "description": "Travel through Jiayuguan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 4",
        "title": "Dunhuang",
        "description": "Travel through Dunhuang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-8",
        "title": "Shapotou",
        "description": "Travel through Shapotou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "xinjiang-xian-silk-road-14-day",
    "title": "14-Day Xinjiang, Gansu & Xi'an Silk Road Journey",
    "seoTitle": "14-Day Xinjiang, Gansu & Xi'an Silk Road Journey | China Prime DMC",
    "metaDescription": "A long-form Silk Road route built from real oasis cities, desert corridors, Buddhist art sites, and Xi'an's ancient capital story.",
    "subtitle": "A deeper Silk Road journey across Xinjiang, Gansu, and Xi'an.",
    "duration": "14 Days / 13 Nights",
    "durationDays": 14,
    "durationNights": 13,
    "route": "Urumqi - Turpan - Dunhuang - Jiayuguan - Zhangye - Lanzhou - Xi'an",
    "routeSummary": "A deeper Silk Road journey across Xinjiang, Gansu, and Xi'an.",
    "destinations": [
      "Urumqi",
      "Turpan",
      "Dunhuang",
      "Jiayuguan",
      "Zhangye",
      "Lanzhou",
      "Xi'an",
      "Xinjiang",
      "Gansu"
    ],
    "themes": [
      "Silk Road",
      "Muslim-Friendly",
      "Culture & Heritage"
    ],
    "travelerTypes": [
      "Muslim Travelers",
      "Culture Lovers",
      "Nature Lovers"
    ],
    "pace": "Active",
    "physicalLevel": "Moderate",
    "bestFor": [
      "Silk Road travelers",
      "repeat China visitors",
      "culture and landscape lovers"
    ],
    "bestTime": "May to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-flaming-mountains.jpg",
    "gallery": [
      {
        "src": "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-flaming-mountains.jpg",
        "topic": "Flaming Mountains",
        "alt": "Flaming Mountains private China trip image for China Prime DMC travelers",
        "caption": "Flaming Mountains - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-turpan.jpg",
        "topic": "Turpan",
        "alt": "Turpan private China trip image for China Prime DMC travelers",
        "caption": "Turpan - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-gaochang.jpg",
        "topic": "Gaochang Ruins",
        "alt": "Gaochang Ruins private China trip image for China Prime DMC travelers",
        "caption": "Gaochang Ruins - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-karez.jpg",
        "topic": "Karez System",
        "alt": "Karez System private China trip image for China Prime DMC travelers",
        "caption": "Karez System - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-lanzhou.jpg",
        "topic": "Lanzhou",
        "alt": "Lanzhou private China trip image for China Prime DMC travelers",
        "caption": "Lanzhou - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Turpan oasis culture",
      "Dunhuang and Mogao Caves",
      "Zhangye Danxia",
      "Xi'an Silk Road finale",
      "Halal-aware meal planning"
    ],
    "overview": "A long-form Silk Road route built from real oasis cities, desert corridors, Buddhist art sites, and Xi'an's ancient capital story.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Urumqi",
        "description": "Travel through Urumqi with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 3-4",
        "title": "Turpan",
        "description": "Travel through Turpan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-6",
        "title": "Dunhuang",
        "description": "Travel through Dunhuang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 7-8",
        "title": "Jiayuguan",
        "description": "Travel through Jiayuguan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 9-10",
        "title": "Zhangye",
        "description": "Travel through Zhangye with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 11-12",
        "title": "Lanzhou",
        "description": "Travel through Lanzhou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "southern-xinjiang-private-9-day",
    "title": "9-Day Southern Xinjiang Pamir & Kashgar Trip",
    "seoTitle": "9-Day Southern Xinjiang Pamir & Kashgar Private China Trip | China Prime DMC",
    "metaDescription": "A high-scenery Xinjiang route for travelers who want markets, mountains, desert roads, and a real Silk Road atmosphere.",
    "subtitle": "Kashgar, Pamir landscapes, desert scenery, and Muslim-friendly planning.",
    "duration": "9 Days / 8 Nights",
    "durationDays": 9,
    "durationNights": 8,
    "route": "Urumqi - Korla - Kuqa - Aksu - Kashgar - Tashkurgan",
    "routeSummary": "Kashgar, Pamir landscapes, desert scenery, and Muslim-friendly planning.",
    "destinations": [
      "Urumqi",
      "Korla",
      "Kuqa",
      "Aksu",
      "Kashgar",
      "Tashkurgan",
      "Xinjiang"
    ],
    "themes": [
      "Silk Road",
      "Muslim-Friendly",
      "Nature & Scenery"
    ],
    "travelerTypes": [
      "Muslim Travelers",
      "Nature Lovers",
      "Culture Lovers"
    ],
    "pace": "Active",
    "physicalLevel": "Moderate",
    "bestFor": [
      "adventurous private travelers",
      "Muslim-friendly culture trips",
      "landscape photographers"
    ],
    "bestTime": "May to October",
    "pricingNote": "Custom quote",
    "image": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-karakul-lake.jpg",
    "gallery": [
      {
        "src": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-karakul-lake.jpg",
        "topic": "Karakul Lake",
        "alt": "Karakul Lake private China trip image for China Prime DMC travelers",
        "caption": "Karakul Lake - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg",
        "topic": "Kashgar",
        "alt": "Kashgar private China trip image for China Prime DMC travelers",
        "caption": "Kashgar - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-taklamakan-desert.jpg",
        "topic": "Taklamakan Desert",
        "alt": "Taklamakan Desert private China trip image for China Prime DMC travelers",
        "caption": "Taklamakan Desert - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kizil-caves.jpg",
        "topic": "Kizil Caves",
        "alt": "Kizil Caves private China trip image for China Prime DMC travelers",
        "caption": "Kizil Caves - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-heavenly-lake-of-tian-shan.jpg",
        "topic": "Heavenly Lake of Tian Shan",
        "alt": "Heavenly Lake of Tian Shan private China trip image for China Prime DMC travelers",
        "caption": "Heavenly Lake of Tian Shan - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Kashgar Old City",
      "Karakul Lake and Pamir views",
      "Taklamakan desert edge",
      "Kizil Caves",
      "Muslim-friendly food planning"
    ],
    "overview": "A high-scenery Xinjiang route for travelers who want markets, mountains, desert roads, and a real Silk Road atmosphere.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Urumqi",
        "description": "Travel through Urumqi with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 2",
        "title": "Korla",
        "description": "Travel through Korla with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 3",
        "title": "Kuqa",
        "description": "Travel through Kuqa with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 4",
        "title": "Aksu",
        "description": "Travel through Aksu with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 5",
        "title": "Kashgar",
        "description": "Travel through Kashgar with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 6-9",
        "title": "Tashkurgan",
        "description": "Travel through Tashkurgan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "yunnan-shangri-la-meili-8-day",
    "title": "8-Day Yunnan, Shangri-La & Meili Snow Mountain",
    "seoTitle": "8-Day Yunnan, Shangri-La & Meili Snow Mountain | China Prime DMC",
    "metaDescription": "A Yunnan highland journey with old towns, Tibetan-influenced culture, and some of China's most romantic mountain scenery.",
    "subtitle": "Ancient towns, highland culture, and Meili Snow Mountain views.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Dali - Lijiang - Tiger Leaping Gorge - Shangri-La - Meili Snow Mountain",
    "routeSummary": "Ancient towns, highland culture, and Meili Snow Mountain views.",
    "destinations": [
      "Dali",
      "Lijiang",
      "Tiger Leaping Gorge",
      "Shangri-La",
      "Meili Snow Mountain",
      "Yunnan"
    ],
    "themes": [
      "Nature & Scenery",
      "Ethnic Culture",
      "Women-Friendly"
    ],
    "travelerTypes": [
      "Couples",
      "Women Travelers",
      "Nature Lovers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "couples",
      "Yunnan lovers",
      "mountain scenery travelers"
    ],
    "bestTime": "March to June and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-songzanlin-monastery.jpg",
    "gallery": [
      {
        "src": "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-songzanlin-monastery.jpg",
        "topic": "Songzanlin Monastery",
        "alt": "Songzanlin Monastery private China trip image for China Prime DMC travelers",
        "caption": "Songzanlin Monastery - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-dali-city.jpg",
        "topic": "Dali City",
        "alt": "Dali City private China trip image for China Prime DMC travelers",
        "caption": "Dali City - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-shangri-la-city.jpg",
        "topic": "Shangri-La City",
        "alt": "Shangri-La City private China trip image for China Prime DMC travelers",
        "caption": "Shangri-La City - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-tiger-leaping-gorge.jpg",
        "topic": "Tiger Leaping Gorge",
        "alt": "Tiger Leaping Gorge private China trip image for China Prime DMC travelers",
        "caption": "Tiger Leaping Gorge - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg",
        "topic": "Meili Snow Mountains",
        "alt": "Meili Snow Mountains private China trip image for China Prime DMC travelers",
        "caption": "Meili Snow Mountains - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Dali and Lijiang old towns",
      "Tiger Leaping Gorge",
      "Songzanlin Monastery",
      "Meili Snow Mountain views",
      "Private highland routing"
    ],
    "overview": "A Yunnan highland journey with old towns, Tibetan-influenced culture, and some of China's most romantic mountain scenery.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Dali",
        "description": "Travel through Dali with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 2",
        "title": "Lijiang",
        "description": "Travel through Lijiang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 3",
        "title": "Tiger Leaping Gorge",
        "description": "Travel through Tiger Leaping Gorge with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 4",
        "title": "Shangri-La",
        "description": "Travel through Shangri-La with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-8",
        "title": "Meili Snow Mountain",
        "description": "Travel through Meili Snow Mountain with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "southwest-grand-china-14-day",
    "title": "14-Day Southwest China, Yangtze & Zhangjiajie Grand Trip",
    "seoTitle": "14-Day Southwest China, Yangtze & Zhangjiajie Grand Private China Trip | China Prime DMC",
    "metaDescription": "A big, varied private China trip for travelers who want pandas, Yunnan, river scenery, Zhangjiajie, and Shanghai in one ambitious journey.",
    "subtitle": "A rich long-form route across southwest China and beyond.",
    "duration": "14 Days / 13 Nights",
    "durationDays": 14,
    "durationNights": 13,
    "route": "Chengdu - Kunming - Dali - Lijiang - Chongqing - Yangtze River - Zhangjiajie - Shanghai",
    "routeSummary": "A rich long-form route across southwest China and beyond.",
    "destinations": [
      "Chengdu",
      "Kunming",
      "Dali",
      "Lijiang",
      "Chongqing",
      "Yangtze River",
      "Zhangjiajie",
      "Shanghai"
    ],
    "themes": [
      "Nature & Scenery",
      "Culture & Heritage",
      "Yangtze Cruise"
    ],
    "travelerTypes": [
      "Nature Lovers",
      "Couples",
      "Families"
    ],
    "pace": "Active",
    "physicalLevel": "Moderate",
    "bestFor": [
      "long private trips",
      "repeat China travelers",
      "scenery-focused couples"
    ],
    "bestTime": "April to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-dali-city.jpg",
    "gallery": [
      {
        "src": "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-dali-city.jpg",
        "topic": "Dali City",
        "alt": "Dali City private China trip image for China Prime DMC travelers",
        "caption": "Dali City - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-kunming-stone-forest.jpg",
        "topic": "Kunming Stone Forest",
        "alt": "Kunming Stone Forest private China trip image for China Prime DMC travelers",
        "caption": "Kunming Stone Forest - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-lijiang.jpg",
        "topic": "Lijiang",
        "alt": "Lijiang private China trip image for China Prime DMC travelers",
        "caption": "Lijiang - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-chongqing-yangtze-river.jpg",
        "topic": "Chongqing Yangtze River",
        "alt": "Chongqing Yangtze River private China trip image for China Prime DMC travelers",
        "caption": "Chongqing Yangtze River - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-lujiazui.jpg",
        "topic": "Lujiazui Shanghai",
        "alt": "Lujiazui Shanghai private China trip image for China Prime DMC travelers",
        "caption": "Lujiazui Shanghai - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Pandas and Yunnan culture",
      "Stone Forest and Lijiang",
      "Chongqing and Yangtze scenery",
      "Zhangjiajie extension",
      "Shanghai finale"
    ],
    "overview": "A big, varied private China trip for travelers who want pandas, Yunnan, river scenery, Zhangjiajie, and Shanghai in one ambitious journey.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Chengdu",
        "description": "Travel through Chengdu with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 3-4",
        "title": "Kunming",
        "description": "Travel through Kunming with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-6",
        "title": "Dali",
        "description": "Travel through Dali with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 7-8",
        "title": "Lijiang",
        "description": "Travel through Lijiang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 9-10",
        "title": "Chongqing",
        "description": "Travel through Chongqing with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 11-12",
        "title": "Yangtze River",
        "description": "Travel through Yangtze River with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "guizhou-ethnic-karst-6-day",
    "title": "6-Day Guizhou Villages, Waterfalls & Karst Trip",
    "seoTitle": "6-Day Guizhou Villages, Waterfalls & Karst Private China Trip | China Prime DMC",
    "metaDescription": "A culture-and-scenery route through Guizhou for travelers who want living villages, waterfalls, and a different China story.",
    "subtitle": "Guizhou villages, waterfalls, and karst scenery.",
    "duration": "6 Days / 5 Nights",
    "durationDays": 6,
    "durationNights": 5,
    "route": "Guiyang - Huangguoshu - Xijiang - Zhaoxing - Libo",
    "routeSummary": "Guizhou villages, waterfalls, and karst scenery.",
    "destinations": [
      "Guiyang",
      "Huangguoshu",
      "Xijiang",
      "Zhaoxing",
      "Libo",
      "Guizhou"
    ],
    "themes": [
      "Ethnic Culture",
      "Nature & Scenery",
      "Women-Friendly"
    ],
    "travelerTypes": [
      "Culture Lovers",
      "Nature Lovers",
      "Women Travelers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "repeat China travelers",
      "village and culture lovers",
      "photography travelers"
    ],
    "bestTime": "April to October",
    "pricingNote": "Custom quote",
    "image": "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-fanjingshan.jpg",
    "gallery": [
      {
        "src": "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-fanjingshan.jpg",
        "topic": "Fanjingshan",
        "alt": "Fanjingshan private China trip image for China Prime DMC travelers",
        "caption": "Fanjingshan - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-huangguoshu-waterfall.jpg",
        "topic": "Huangguoshu Waterfall",
        "alt": "Huangguoshu Waterfall private China trip image for China Prime DMC travelers",
        "caption": "Huangguoshu Waterfall - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-xijiang-qianhu-miao-village.jpg",
        "topic": "Xijiang Qianhu Miao Village",
        "alt": "Xijiang Qianhu Miao Village private China trip image for China Prime DMC travelers",
        "caption": "Xijiang Qianhu Miao Village - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-zhaoxing-dong-village.jpg",
        "topic": "Zhaoxing Dong Village",
        "alt": "Zhaoxing Dong Village private China trip image for China Prime DMC travelers",
        "caption": "Zhaoxing Dong Village - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-libo-county.jpg",
        "topic": "Libo County",
        "alt": "Libo County private China trip image for China Prime DMC travelers",
        "caption": "Libo County - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Huangguoshu Waterfall",
      "Miao and Dong villages",
      "Libo karst scenery",
      "Less-commercial China feel",
      "Private village routing"
    ],
    "overview": "A culture-and-scenery route through Guizhou for travelers who want living villages, waterfalls, and a different China story.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Guiyang",
        "description": "Travel through Guiyang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 2",
        "title": "Huangguoshu",
        "description": "Travel through Huangguoshu with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 3",
        "title": "Xijiang",
        "description": "Travel through Xijiang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 4",
        "title": "Zhaoxing",
        "description": "Travel through Zhaoxing with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-6",
        "title": "Libo",
        "description": "Travel through Libo with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "inner-mongolia-culture-5-day",
    "title": "5-Day Inner Mongolia Grassland & Hohhot Culture",
    "seoTitle": "5-Day Inner Mongolia Grassland & Hohhot Culture | China Prime DMC",
    "metaDescription": "A short private trip that introduces Inner Mongolia through Hohhot culture, grassland scenery, and easy outdoor experiences.",
    "subtitle": "A soft northern China trip with grasslands and culture.",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "durationNights": 4,
    "route": "Hohhot - Xilamuren Grassland - Desert Area - Hohhot",
    "routeSummary": "A soft northern China trip with grasslands and culture.",
    "destinations": [
      "Hohhot",
      "Xilamuren Grassland",
      "Inner Mongolia"
    ],
    "themes": [
      "Nature & Scenery",
      "Ethnic Culture",
      "Family Travel"
    ],
    "travelerTypes": [
      "Families",
      "Senior Travelers",
      "Nature Lovers"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "families",
      "senior travelers",
      "short northern China trips"
    ],
    "bestTime": "June to September",
    "pricingNote": "Custom quote",
    "image": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-hohhot.jpg",
    "gallery": [
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-hohhot.jpg",
        "topic": "Hohhot",
        "alt": "Hohhot private China trip image for China Prime DMC travelers",
        "caption": "Hohhot - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-xilamuren-grassland.jpg",
        "topic": "Xilamuren Grassland",
        "alt": "Xilamuren Grassland private China trip image for China Prime DMC travelers",
        "caption": "Xilamuren Grassland - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-dazhao-temple.jpg",
        "topic": "Dazhao Temple",
        "alt": "Dazhao Temple private China trip image for China Prime DMC travelers",
        "caption": "Dazhao Temple - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-inner-mongolia-museum.jpg",
        "topic": "Inner Mongolia Museum",
        "alt": "Inner Mongolia Museum private China trip image for China Prime DMC travelers",
        "caption": "Inner Mongolia Museum - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-zhaojun-tomb.jpg",
        "topic": "Zhaojun Tomb",
        "alt": "Zhaojun Tomb private China trip image for China Prime DMC travelers",
        "caption": "Zhaojun Tomb - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Grassland scenery",
      "Dazhao Temple",
      "Inner Mongolia Museum",
      "Family-friendly outdoor time",
      "Short northern route"
    ],
    "overview": "A short private trip that introduces Inner Mongolia through Hohhot culture, grassland scenery, and easy outdoor experiences.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Hohhot",
        "description": "Private touring in Hohhot with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 2",
        "title": "Xilamuren Grassland",
        "description": "Private touring in Xilamuren Grassland with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Day 3",
        "title": "Desert Area",
        "description": "Private touring in Desert Area with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 4-5",
        "title": "Hohhot",
        "description": "Private touring in Hohhot with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "hulunbuir-arxan-8-day",
    "title": "8-Day Hulunbuir Grassland, Ergun & Arxan Nature Trip",
    "seoTitle": "8-Day Hulunbuir Grassland, Ergun & Arxan Nature Private China Trip | China Prime DMC",
    "metaDescription": "A wide-open summer route for travelers who want northern China grasslands, forests, wetlands, and border-town color.",
    "subtitle": "Grasslands, wetlands, forests, and open-sky scenery.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Hailar - Hulunbuir - Ergun - Manzhouli - Arxan",
    "routeSummary": "Grasslands, wetlands, forests, and open-sky scenery.",
    "destinations": [
      "Hailar",
      "Hulunbuir",
      "Ergun",
      "Manzhouli",
      "Arxan",
      "Inner Mongolia"
    ],
    "themes": [
      "Nature & Scenery",
      "Family Travel",
      "Soft Adventure"
    ],
    "travelerTypes": [
      "Families",
      "Nature Lovers",
      "Senior Travelers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "grassland scenery travelers",
      "families",
      "summer private trips"
    ],
    "bestTime": "June to September",
    "pricingNote": "Custom quote",
    "image": "/programs/hulunbuir-arxan-grassland-8-day/china-prime-dmc-hulunbuir-arxan-grassland-8-day-ergun.jpg",
    "gallery": [
      {
        "src": "/programs/hulunbuir-arxan-grassland-8-day/china-prime-dmc-hulunbuir-arxan-grassland-8-day-ergun.jpg",
        "topic": "Ergun",
        "alt": "Ergun private China trip image for China Prime DMC travelers",
        "caption": "Ergun - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/hulunbuir-arxan-grassland-8-day/china-prime-dmc-hulunbuir-arxan-grassland-8-day-hulunbuir.jpg",
        "topic": "Hulunbuir Grassland",
        "alt": "Hulunbuir Grassland private China trip image for China Prime DMC travelers",
        "caption": "Hulunbuir Grassland - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/hulunbuir-arxan-grassland-8-day/china-prime-dmc-hulunbuir-arxan-grassland-8-day-manzhouli.jpg",
        "topic": "Manzhouli",
        "alt": "Manzhouli private China trip image for China Prime DMC travelers",
        "caption": "Manzhouli - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/hulunbuir-arxan-grassland-8-day/china-prime-dmc-hulunbuir-arxan-grassland-8-day-greater-khingan-range.jpg",
        "topic": "Greater Khingan Range",
        "alt": "Greater Khingan Range private China trip image for China Prime DMC travelers",
        "caption": "Greater Khingan Range - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/hulunbuir-arxan-grassland-8-day/china-prime-dmc-hulunbuir-arxan-grassland-8-day-hailar-district.jpg",
        "topic": "Hailar District",
        "alt": "Hailar District private China trip image for China Prime DMC travelers",
        "caption": "Hailar District - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Hulunbuir grasslands",
      "Ergun wetlands",
      "Manzhouli border atmosphere",
      "Arxan forest scenery",
      "Easy summer pacing"
    ],
    "overview": "A wide-open summer route for travelers who want northern China grasslands, forests, wetlands, and border-town color.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Day 1",
        "title": "Hailar",
        "description": "Travel through Hailar with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 2",
        "title": "Hulunbuir",
        "description": "Travel through Hulunbuir with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 3",
        "title": "Ergun",
        "description": "Travel through Ergun with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Day 4",
        "title": "Manzhouli",
        "description": "Travel through Manzhouli with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-8",
        "title": "Arxan",
        "description": "Travel through Arxan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "tibet-lhasa-nyingchi-8-day",
    "title": "8-Day Tibet Lhasa, Namtso & Nyingchi Private Journey",
    "seoTitle": "8-Day Tibet Lhasa, Namtso & Nyingchi Private Journey | China Prime DMC",
    "metaDescription": "A Tibet route with culture, highland lakes, and softer Nyingchi scenery, planned with attention to altitude, permits, and private comfort.",
    "subtitle": "Lhasa culture, Namtso Lake, and Nyingchi landscapes.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Lhasa - Namtso - Nyingchi - Yarlung Tsangpo Grand Canyon",
    "routeSummary": "Lhasa culture, Namtso Lake, and Nyingchi landscapes.",
    "destinations": [
      "Lhasa",
      "Namtso",
      "Nyingchi",
      "Yarlung Tsangpo Grand Canyon",
      "Tibet"
    ],
    "themes": [
      "Culture & Heritage",
      "Nature & Scenery",
      "Senior-Friendly"
    ],
    "travelerTypes": [
      "Culture Lovers",
      "Nature Lovers",
      "Senior Travelers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "Tibet first-timers",
      "culture and scenery travelers",
      "private comfort-focused trips"
    ],
    "bestTime": "April to October",
    "pricingNote": "Custom quote",
    "image": "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-namtso.jpg",
    "gallery": [
      {
        "src": "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-namtso.jpg",
        "topic": "Namtso Lake",
        "alt": "Namtso Lake private China trip image for China Prime DMC travelers",
        "caption": "Namtso Lake - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-potala-palace.jpg",
        "topic": "Potala Palace",
        "alt": "Potala Palace private China trip image for China Prime DMC travelers",
        "caption": "Potala Palace - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-jokhang.jpg",
        "topic": "Jokhang Temple",
        "alt": "Jokhang Temple private China trip image for China Prime DMC travelers",
        "caption": "Jokhang Temple - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-nyingchi.jpg",
        "topic": "Nyingchi",
        "alt": "Nyingchi private China trip image for China Prime DMC travelers",
        "caption": "Nyingchi - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-yarlung-tsangpo-grand-canyon.jpg",
        "topic": "Yarlung Tsangpo Grand Canyon",
        "alt": "Yarlung Tsangpo Grand Canyon private China trip image for China Prime DMC travelers",
        "caption": "Yarlung Tsangpo Grand Canyon - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Potala Palace",
      "Jokhang Temple",
      "Namtso Lake",
      "Nyingchi scenery",
      "Permit-aware planning"
    ],
    "overview": "A Tibet route with culture, highland lakes, and softer Nyingchi scenery, planned with attention to altitude, permits, and private comfort.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Lhasa",
        "description": "Private touring in Lhasa with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Namtso",
        "description": "Private touring in Namtso with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Nyingchi",
        "description": "Private touring in Nyingchi with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-8",
        "title": "Yarlung Tsangpo Grand Canyon",
        "description": "Private touring in Yarlung Tsangpo Grand Canyon with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "sichuan-tibetan-nature-10-day",
    "title": "10-Day Sichuan Tibetan Nature, Pandas & Jiuzhaigou",
    "seoTitle": "10-Day Sichuan Tibetan Nature, Pandas & Jiuzhaigou | China Prime DMC",
    "metaDescription": "A nature-rich Sichuan trip with pandas, UNESCO landscapes, mountain valleys, and private support through changing road and weather conditions.",
    "subtitle": "Pandas, Jiuzhaigou, Huanglong, and Sichuan mountain scenery.",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "durationNights": 9,
    "route": "Chengdu - Dujiangyan - Jiuzhaigou - Huanglong - Mount Siguniang",
    "routeSummary": "Pandas, Jiuzhaigou, Huanglong, and Sichuan mountain scenery.",
    "destinations": [
      "Chengdu",
      "Dujiangyan",
      "Jiuzhaigou",
      "Huanglong",
      "Mount Siguniang",
      "Sichuan"
    ],
    "themes": [
      "Nature & Scenery",
      "Family Travel",
      "Soft Adventure"
    ],
    "travelerTypes": [
      "Families",
      "Nature Lovers",
      "Couples"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "families who love nature",
      "panda and mountain trips",
      "photography travelers"
    ],
    "bestTime": "April to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-mount-siguniang.jpg",
    "gallery": [
      {
        "src": "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-mount-siguniang.jpg",
        "topic": "Mount Siguniang",
        "alt": "Mount Siguniang private China trip image for China Prime DMC travelers",
        "caption": "Mount Siguniang - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
        "topic": "Chengdu Panda Base",
        "alt": "Chengdu Panda Base private China trip image for China Prime DMC travelers",
        "caption": "Chengdu Panda Base - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-dujiangyan-irrigation-system.jpg",
        "topic": "Dujiangyan Irrigation System",
        "alt": "Dujiangyan Irrigation System private China trip image for China Prime DMC travelers",
        "caption": "Dujiangyan Irrigation System - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou.jpg",
        "topic": "Jiuzhaigou",
        "alt": "Jiuzhaigou private China trip image for China Prime DMC travelers",
        "caption": "Jiuzhaigou - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-huanglong-scenic-and-historic-interest-area.jpg",
        "topic": "Huanglong Scenic Area",
        "alt": "Huanglong Scenic Area private China trip image for China Prime DMC travelers",
        "caption": "Huanglong Scenic Area - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Pandas in Chengdu",
      "Jiuzhaigou lakes",
      "Huanglong pools",
      "Mount Siguniang scenery",
      "Private mountain routing"
    ],
    "overview": "A nature-rich Sichuan trip with pandas, UNESCO landscapes, mountain valleys, and private support through changing road and weather conditions.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Chengdu",
        "description": "Travel through Chengdu with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 3-4",
        "title": "Dujiangyan",
        "description": "Travel through Dujiangyan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-6",
        "title": "Jiuzhaigou",
        "description": "Travel through Jiuzhaigou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 7-8",
        "title": "Huanglong",
        "description": "Travel through Huanglong with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 9-10",
        "title": "Mount Siguniang",
        "description": "Travel through Mount Siguniang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "women-beijing-xian-shanghai-11-day",
    "title": "11-Day Women-Friendly Beijing, Xi'an, Suzhou & Shanghai",
    "seoTitle": "11-Day Women-Friendly Beijing, Xi'an, Suzhou & Shanghai | China Prime DMC",
    "metaDescription": "A classic route softened with gardens, neighborhoods, comfortable timing, and women-friendly private guide planning.",
    "subtitle": "A women-friendly version of classic China with Suzhou and Shanghai lifestyle time.",
    "duration": "11 Days / 10 Nights",
    "durationDays": 11,
    "durationNights": 10,
    "route": "Beijing - Xi'an - Suzhou - Shanghai",
    "routeSummary": "A women-friendly version of classic China with Suzhou and Shanghai lifestyle time.",
    "destinations": [
      "Beijing",
      "Xi'an",
      "Suzhou",
      "Shanghai"
    ],
    "themes": [
      "Women-Friendly",
      "Classic China",
      "Culture & Heritage"
    ],
    "travelerTypes": [
      "Women Travelers",
      "First-Time Visitors",
      "Couples"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "women travelers",
      "first-time private trips",
      "culture and shopping travelers"
    ],
    "bestTime": "March to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-shanghai-french-concession.jpg",
    "gallery": [
      {
        "src": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-shanghai-french-concession.jpg",
        "topic": "Shanghai French Concession",
        "alt": "Shanghai French Concession private China trip image for China Prime DMC travelers",
        "caption": "Shanghai French Concession - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-beijing-hutong.jpg",
        "topic": "Beijing Hutong",
        "alt": "Beijing Hutong private China trip image for China Prime DMC travelers",
        "caption": "Beijing Hutong - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-shaanxi-history-museum.jpg",
        "topic": "Shaanxi History Museum",
        "alt": "Shaanxi History Museum private China trip image for China Prime DMC travelers",
        "caption": "Shaanxi History Museum - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-humble-administrator-s-garden.jpg",
        "topic": "Humble Administrator's Garden",
        "alt": "Humble Administrator's Garden private China trip image for China Prime DMC travelers",
        "caption": "Humble Administrator's Garden - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-zhujiajiao.jpg",
        "topic": "Zhujiajiao Water Town",
        "alt": "Zhujiajiao Water Town private China trip image for China Prime DMC travelers",
        "caption": "Zhujiajiao Water Town - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Women-friendly city pacing",
      "Beijing hutongs",
      "Xi'an history",
      "Suzhou gardens",
      "Shanghai lifestyle"
    ],
    "overview": "A classic route softened with gardens, neighborhoods, comfortable timing, and women-friendly private guide planning.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Xi'an",
        "description": "Private touring in Xi'an with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Suzhou",
        "description": "Private touring in Suzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-11",
        "title": "Shanghai",
        "description": "Private touring in Shanghai with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "luxury-east-yunnan-12-day",
    "title": "12-Day Luxury East China & Yunnan Private Journey",
    "seoTitle": "12-Day Luxury East China & Yunnan Private Journey | China Prime DMC",
    "metaDescription": "A more polished private trip linking east China's refined cities with Yunnan's old towns and mountain atmosphere.",
    "subtitle": "A premium route for travelers who want style, scenery, and slower days.",
    "duration": "12 Days / 11 Nights",
    "durationDays": 12,
    "durationNights": 11,
    "route": "Shanghai - Hangzhou - Huangshan - Dali - Lijiang",
    "routeSummary": "A premium route for travelers who want style, scenery, and slower days.",
    "destinations": [
      "Shanghai",
      "Hangzhou",
      "Huangshan",
      "Dali",
      "Lijiang",
      "Yunnan"
    ],
    "themes": [
      "Luxury",
      "Culture & Heritage",
      "Nature & Scenery"
    ],
    "travelerTypes": [
      "Couples",
      "Women Travelers",
      "Nature Lovers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "luxury couples",
      "design and scenery travelers",
      "private slow travel"
    ],
    "bestTime": "March to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
    "gallery": [
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
        "topic": "West Lake",
        "alt": "West Lake private China trip image for China Prime DMC travelers",
        "caption": "West Lake - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg",
        "topic": "The Bund Shanghai",
        "alt": "The Bund Shanghai private China trip image for China Prime DMC travelers",
        "caption": "The Bund Shanghai - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg",
        "topic": "Huangshan",
        "alt": "Huangshan private China trip image for China Prime DMC travelers",
        "caption": "Huangshan - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-dali-city.jpg",
        "topic": "Dali",
        "alt": "Dali private China trip image for China Prime DMC travelers",
        "caption": "Dali - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-lijiang.jpg",
        "topic": "Lijiang",
        "alt": "Lijiang private China trip image for China Prime DMC travelers",
        "caption": "Lijiang - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Shanghai and Hangzhou style",
      "Huangshan mountain views",
      "Dali and Lijiang old towns",
      "Premium hotel options",
      "Slow private pacing"
    ],
    "overview": "A more polished private trip linking east China's refined cities with Yunnan's old towns and mountain atmosphere.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Shanghai",
        "description": "Travel through Shanghai with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 3-4",
        "title": "Hangzhou",
        "description": "Travel through Hangzhou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-6",
        "title": "Huangshan",
        "description": "Travel through Huangshan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 7-8",
        "title": "Dali",
        "description": "Travel through Dali with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 9-12",
        "title": "Lijiang",
        "description": "Travel through Lijiang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "family-nature-china-10-day",
    "title": "10-Day Family Nature China with Pandas, Zhangjiajie & Guilin",
    "seoTitle": "10-Day Family Nature China with Pandas, Zhangjiajie & Guilin | China Prime DMC",
    "metaDescription": "A family trip built around China's strongest nature images: pandas, floating mountains, karst rivers, and countryside time.",
    "subtitle": "A high-impact family nature route through Chengdu, Zhangjiajie, and Guilin.",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "durationNights": 9,
    "route": "Chengdu - Zhangjiajie - Guilin - Yangshuo",
    "routeSummary": "A high-impact family nature route through Chengdu, Zhangjiajie, and Guilin.",
    "destinations": [
      "Chengdu",
      "Zhangjiajie",
      "Guilin",
      "Yangshuo"
    ],
    "themes": [
      "Family Travel",
      "Nature & Scenery",
      "Soft Adventure"
    ],
    "travelerTypes": [
      "Families",
      "Children-Friendly",
      "Nature Lovers"
    ],
    "pace": "Balanced",
    "physicalLevel": "Moderate",
    "bestFor": [
      "families with active children",
      "nature-first travelers",
      "school holiday trips"
    ],
    "bestTime": "April to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-glass-bridge.jpg",
    "gallery": [
      {
        "src": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-glass-bridge.jpg",
        "topic": "Zhangjiajie Glass Bridge",
        "alt": "Zhangjiajie Glass Bridge private China trip image for China Prime DMC travelers",
        "caption": "Zhangjiajie Glass Bridge - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
        "topic": "Chengdu Panda Base",
        "alt": "Chengdu Panda Base private China trip image for China Prime DMC travelers",
        "caption": "Chengdu Panda Base - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg",
        "topic": "Tianmen Mountain",
        "alt": "Tianmen Mountain private China trip image for China Prime DMC travelers",
        "caption": "Tianmen Mountain - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg",
        "topic": "Li River",
        "alt": "Li River private China trip image for China Prime DMC travelers",
        "caption": "Li River - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-yangshuo-county.jpg",
        "topic": "Yangshuo",
        "alt": "Yangshuo private China trip image for China Prime DMC travelers",
        "caption": "Yangshuo - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Chengdu pandas",
      "Zhangjiajie peaks",
      "Li River scenery",
      "Yangshuo countryside",
      "Family-friendly private logistics"
    ],
    "overview": "A family trip built around China's strongest nature images: pandas, floating mountains, karst rivers, and countryside time.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Chengdu",
        "description": "Private touring in Chengdu with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Zhangjiajie",
        "description": "Private touring in Zhangjiajie with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Guilin",
        "description": "Private touring in Guilin with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-10",
        "title": "Yangshuo",
        "description": "Private touring in Yangshuo with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "senior-east-china-relaxed-7-day",
    "title": "7-Day Senior-Friendly Shanghai, Suzhou & Hangzhou",
    "seoTitle": "7-Day Senior-Friendly Shanghai, Suzhou & Hangzhou | China Prime DMC",
    "metaDescription": "A relaxed east China route for travelers who want beauty and culture without long overland days.",
    "subtitle": "A gentle Shanghai, Suzhou, and Hangzhou private trip.",
    "duration": "7 Days / 6 Nights",
    "durationDays": 7,
    "durationNights": 6,
    "route": "Shanghai - Suzhou - Hangzhou",
    "routeSummary": "A gentle Shanghai, Suzhou, and Hangzhou private trip.",
    "destinations": [
      "Shanghai",
      "Suzhou",
      "Hangzhou"
    ],
    "themes": [
      "Senior-Friendly",
      "Culture & Heritage",
      "Slow Travel"
    ],
    "travelerTypes": [
      "Senior Travelers",
      "Couples",
      "First-Time Visitors"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "senior travelers",
      "slow city trips",
      "couples wanting comfort"
    ],
    "bestTime": "March to May and September to November",
    "pricingNote": "Custom quote",
    "image": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-humble-administrator-s-garden.jpg",
    "gallery": [
      {
        "src": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-humble-administrator-s-garden.jpg",
        "topic": "Humble Administrator's Garden",
        "alt": "Humble Administrator's Garden private China trip image for China Prime DMC travelers",
        "caption": "Humble Administrator's Garden - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg",
        "topic": "The Bund",
        "alt": "The Bund private China trip image for China Prime DMC travelers",
        "caption": "The Bund - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-zhujiajiao.jpg",
        "topic": "Zhujiajiao",
        "alt": "Zhujiajiao private China trip image for China Prime DMC travelers",
        "caption": "Zhujiajiao - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
        "topic": "West Lake",
        "alt": "West Lake private China trip image for China Prime DMC travelers",
        "caption": "West Lake - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/women-beijing-zhangjiajie-shanghai-11-day/china-prime-dmc-women-beijing-zhangjiajie-shanghai-11-day-longjing-tea.jpg",
        "topic": "Longjing Tea",
        "alt": "Longjing Tea private China trip image for China Prime DMC travelers",
        "caption": "Longjing Tea - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Short drives and rail times",
      "Gardens and lake scenery",
      "Shanghai comfort base",
      "Tea and water-town options",
      "Senior-friendly pace"
    ],
    "overview": "A relaxed east China route for travelers who want beauty and culture without long overland days.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Shanghai",
        "description": "Private touring in Shanghai with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Suzhou",
        "description": "Private touring in Suzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-7",
        "title": "Hangzhou",
        "description": "Private touring in Hangzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "muslim-silk-road-deep-12-day",
    "title": "12-Day Muslim-Friendly Silk Road: Xi'an, Gansu & Xinjiang",
    "seoTitle": "12-Day Muslim-Friendly Silk Road: Xi'an, Gansu & Xinjiang | China Prime DMC",
    "metaDescription": "A Muslim-friendly Silk Road route linking Islamic heritage, oasis culture, desert scenery, and China's ancient trade corridors.",
    "subtitle": "A deeper halal-aware Silk Road journey from Xi'an to Kashgar.",
    "duration": "12 Days / 11 Nights",
    "durationDays": 12,
    "durationNights": 11,
    "route": "Xi'an - Lanzhou - Zhangye - Dunhuang - Turpan - Urumqi - Kashgar",
    "routeSummary": "A deeper halal-aware Silk Road journey from Xi'an to Kashgar.",
    "destinations": [
      "Xi'an",
      "Lanzhou",
      "Zhangye",
      "Dunhuang",
      "Turpan",
      "Urumqi",
      "Kashgar"
    ],
    "themes": [
      "Muslim-Friendly",
      "Silk Road",
      "Culture & Heritage"
    ],
    "travelerTypes": [
      "Muslim Travelers",
      "Culture Lovers",
      "Nature Lovers"
    ],
    "pace": "Active",
    "physicalLevel": "Moderate",
    "bestFor": [
      "Muslim-friendly private travelers",
      "Silk Road lovers",
      "repeat China visitors"
    ],
    "bestTime": "May to June and September to October",
    "pricingNote": "Custom quote",
    "image": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg",
    "gallery": [
      {
        "src": "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg",
        "topic": "Kashgar",
        "alt": "Kashgar private China trip image for China Prime DMC travelers",
        "caption": "Kashgar - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
        "topic": "Xi'an Muslim Quarter",
        "alt": "Xi'an Muslim Quarter private China trip image for China Prime DMC travelers",
        "caption": "Xi'an Muslim Quarter - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg",
        "topic": "Zhangye National Geopark",
        "alt": "Zhangye National Geopark private China trip image for China Prime DMC travelers",
        "caption": "Zhangye National Geopark - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-mogao-caves.jpg",
        "topic": "Mogao Caves",
        "alt": "Mogao Caves private China trip image for China Prime DMC travelers",
        "caption": "Mogao Caves - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-turpan.jpg",
        "topic": "Turpan",
        "alt": "Turpan private China trip image for China Prime DMC travelers",
        "caption": "Turpan - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Xi'an Muslim Quarter",
      "Zhangye Danxia",
      "Dunhuang Mogao Caves",
      "Turpan oasis culture",
      "Kashgar markets"
    ],
    "overview": "A Muslim-friendly Silk Road route linking Islamic heritage, oasis culture, desert scenery, and China's ancient trade corridors.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Xi'an",
        "description": "Travel through Xi'an with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 3-4",
        "title": "Lanzhou",
        "description": "Travel through Lanzhou with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 5-6",
        "title": "Zhangye",
        "description": "Travel through Zhangye with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 7-8",
        "title": "Dunhuang",
        "description": "Travel through Dunhuang with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 9-10",
        "title": "Turpan",
        "description": "Travel through Turpan with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      },
      {
        "day": "Days 11-12",
        "title": "Urumqi",
        "description": "Travel through Urumqi with private transfers or rail/flight connections selected for the confirmed season. The route balances landmark sightseeing, local neighborhoods, meals, and rest time so the journey remains comfortable."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "guangzhou-hong-kong-guilin-family-8-day",
    "title": "8-Day Guangzhou, Guilin, Yangshuo & Pearl River Family Trip",
    "seoTitle": "8-Day Guangzhou, Guilin, Yangshuo & Pearl River Family Private China Trip | China Prime DMC",
    "metaDescription": "A south China family route with easy food, bright scenery, and gentle outdoor days.",
    "subtitle": "A family-friendly mix of Guangzhou culture and Guilin scenery.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Guangzhou - Guilin - Yangshuo - Longji",
    "routeSummary": "A family-friendly mix of Guangzhou culture and Guilin scenery.",
    "destinations": [
      "Guangzhou",
      "Guilin",
      "Yangshuo",
      "Longji"
    ],
    "themes": [
      "Family Travel",
      "Culinary",
      "Nature & Scenery"
    ],
    "travelerTypes": [
      "Families",
      "Children-Friendly",
      "Food Travelers"
    ],
    "pace": "Relaxed",
    "physicalLevel": "Easy",
    "bestFor": [
      "families",
      "food and scenery travelers",
      "short south China vacations"
    ],
    "bestTime": "April to October",
    "pricingNote": "Custom quote",
    "image": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-longji-rice-terraces.jpg",
    "gallery": [
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-longji-rice-terraces.jpg",
        "topic": "Longji Rice Terraces",
        "alt": "Longji Rice Terraces private China trip image for China Prime DMC travelers",
        "caption": "Longji Rice Terraces - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-canton-tower.jpg",
        "topic": "Canton Tower",
        "alt": "Canton Tower private China trip image for China Prime DMC travelers",
        "caption": "Canton Tower - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-chen-clan-ancestral-hall.jpg",
        "topic": "Chen Clan Ancestral Hall",
        "alt": "Chen Clan Ancestral Hall private China trip image for China Prime DMC travelers",
        "caption": "Chen Clan Ancestral Hall - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg",
        "topic": "Li River",
        "alt": "Li River private China trip image for China Prime DMC travelers",
        "caption": "Li River - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-yangshuo-county.jpg",
        "topic": "Yangshuo",
        "alt": "Yangshuo private China trip image for China Prime DMC travelers",
        "caption": "Yangshuo - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Cantonese food",
      "Li River landscapes",
      "Yangshuo countryside",
      "Longji terraces",
      "Family-friendly private pace"
    ],
    "overview": "A south China family route with easy food, bright scenery, and gentle outdoor days.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Guangzhou",
        "description": "Private touring in Guangzhou with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Guilin",
        "description": "Private touring in Guilin with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Yangshuo",
        "description": "Private touring in Yangshuo with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-8",
        "title": "Longji",
        "description": "Private touring in Longji with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  },
  {
    "id": "beijing-inner-mongolia-summer-8-day",
    "title": "8-Day Beijing & Inner Mongolia Summer Family Trip",
    "seoTitle": "8-Day Beijing & Inner Mongolia Summer Family Private China Trip | China Prime DMC",
    "metaDescription": "A summer route that pairs Beijing's essential icons with Inner Mongolia grassland scenery for a broader first-China experience.",
    "subtitle": "Beijing culture plus open grassland scenery.",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "durationNights": 7,
    "route": "Beijing - Hohhot - Xilamuren Grassland - Hohhot",
    "routeSummary": "Beijing culture plus open grassland scenery.",
    "destinations": [
      "Beijing",
      "Hohhot",
      "Xilamuren Grassland",
      "Inner Mongolia"
    ],
    "themes": [
      "Family Travel",
      "Nature & Scenery",
      "Classic China"
    ],
    "travelerTypes": [
      "Families",
      "Senior Travelers",
      "First-Time Visitors"
    ],
    "pace": "Balanced",
    "physicalLevel": "Easy",
    "bestFor": [
      "summer families",
      "first-time travelers wanting grasslands",
      "multi-generation trips"
    ],
    "bestTime": "June to September",
    "pricingNote": "Custom quote",
    "image": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-xilamuren-grassland.jpg",
    "gallery": [
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-xilamuren-grassland.jpg",
        "topic": "Xilamuren Grassland",
        "alt": "Xilamuren Grassland private China trip image for China Prime DMC travelers",
        "caption": "Xilamuren Grassland - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city.jpg",
        "topic": "Forbidden City",
        "alt": "Forbidden City private China trip image for China Prime DMC travelers",
        "caption": "Forbidden City - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg",
        "topic": "Great Wall",
        "alt": "Great Wall private China trip image for China Prime DMC travelers",
        "caption": "Great Wall - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-dazhao-temple.jpg",
        "topic": "Dazhao Temple",
        "alt": "Dazhao Temple private China trip image for China Prime DMC travelers",
        "caption": "Dazhao Temple - a real destination visual used to help travelers understand the route before planning."
      },
      {
        "src": "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-inner-mongolia-museum.jpg",
        "topic": "Inner Mongolia Museum",
        "alt": "Inner Mongolia Museum private China trip image for China Prime DMC travelers",
        "caption": "Inner Mongolia Museum - a real destination visual used to help travelers understand the route before planning."
      }
    ],
    "highlights": [
      "Beijing icons",
      "Great Wall",
      "Inner Mongolia grasslands",
      "Hohhot culture",
      "Family-friendly summer pacing"
    ],
    "overview": "A summer route that pairs Beijing's essential icons with Inner Mongolia grassland scenery for a broader first-China experience.",
    "whyItSells": [
      "The route uses real, recognizable China destinations that are easy for private travelers to understand before booking.",
      "The pace, hotels, meals, guide style, and transport can be adjusted around the traveler's comfort level.",
      "Each trip includes enough visual variety to feel special without forcing travelers into an exhausting checklist."
    ],
    "days": [
      {
        "day": "Days 1-2",
        "title": "Beijing",
        "description": "Private touring in Beijing with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 3-4",
        "title": "Hohhot",
        "description": "Private touring in Hohhot with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 5-6",
        "title": "Xilamuren Grassland",
        "description": "Private touring in Xilamuren Grassland with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      },
      {
        "day": "Days 7-8",
        "title": "Hohhot",
        "description": "Private touring in Hohhot with timing adjusted around arrival, hotel location, weather, and the traveler's pace. The guide focuses on the headline sights, local context, food planning, and enough breathing room for the trip to feel personal rather than rushed."
      }
    ],
    "included": [
      "Private airport, railway station, and hotel transfers shown in the confirmed itinerary.",
      "Professional English-speaking local guides for scheduled touring days.",
      "Private vehicle service with licensed drivers during included touring segments.",
      "First entrance tickets for listed attractions unless marked optional or subject to reservation.",
      "Daily hotel breakfast and selected meals listed in the final proposal.",
      "China-based trip coordination before arrival and during travel."
    ],
    "notIncluded": [
      "International flights, China visa fees, travel insurance, and personal expenses.",
      "Single room supplements, hotel upgrades, early check-in, late check-out, and room incidentals.",
      "Optional shows, theme park fast passes, specialty meals, or activities not confirmed in writing.",
      "Tips for guides, drivers, cruise staff, hotel porters, or restaurant teams unless prepaid.",
      "Extra costs caused by weather, traffic control, attraction closures, or traveler-requested changes."
    ],
    "hotelLevel": [
      "Comfort, premium, and luxury hotel options available by city",
      "Well-located hotels prioritized over inconvenient properties",
      "Upgrades quoted after travel dates and rooming are confirmed"
    ],
    "mealSupport": "Meal planning can support family-friendly, vegetarian, halal-aware, low-spice, and senior-friendly needs with advance notice.",
    "transport": "Private transfers plus high-speed rail or domestic flights where the route requires them.",
    "guideLanguage": "English-speaking private local guides as standard; other guide languages can be requested in advance.",
    "customization": [
      "Add or remove cities",
      "Slow the daily pace",
      "Upgrade hotels",
      "Add family, halal-aware, women-friendly, or senior-friendly planning",
      "Add photography, food, tea, nature, or shopping time"
    ],
    "operationalNotes": [
      "Attraction tickets and train seats can be date-sensitive.",
      "Weather, holidays, and crowd levels may affect the best order of sightseeing.",
      "Final routing should be confirmed after flight times and preferred hotel level are known."
    ],
    "faqs": [
      {
        "q": "Can this route be changed around my family or travel style?",
        "a": "Yes. Every trip is a starting point. We can adjust cities, pace, hotel level, meal needs, guide style, walking time, and the number of scenic days so the route fits the people traveling."
      },
      {
        "q": "Will you tell me what the trip is likely to cost before anything is confirmed?",
        "a": "Yes. We prepare a clear custom quote after we know your dates, hotel level, group size, rooming, transport availability, and the inclusions you want. No one is asked to commit before the route and assumptions make sense."
      },
      {
        "q": "Can you plan around children, halal-aware meals, older parents, or privacy needs?",
        "a": "Yes. We can rebuild the route around meals, pace, mobility, prayer-time awareness where practical, privacy, hotel comfort, and the energy level of your group."
      }
    ]
  }
];
