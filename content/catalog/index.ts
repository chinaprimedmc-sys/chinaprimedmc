import { getDestinationBySlug } from "@/content/destinations";
import { destinationAsset } from "@/content/destinations/assets";
import { getTourBySlug } from "@/content/tours";
import type {
  CatalogDestination,
  CatalogExperience,
  CatalogJourney,
  CmsVisibility,
  ExperienceCategory,
} from "@/types/catalog";
import type { Destination, DestinationHighlight } from "@/types/destination";

const featured = (rankingScore: number, manualPin?: number): CmsVisibility => ({
  state: "published",
  featured: true,
  rankingScore,
  manualPin,
});

const published = (rankingScore: number): CmsVisibility => ({
  state: "published",
  featured: false,
  rankingScore,
});

export const catalogDestinations: CatalogDestination[] = [
  {
    slug: "beijing",
    name: "Beijing",
    region: "North China",
    type: "Classic Gateway",
    summary:
      "Imperial courtyards, hutong life, temple mornings, and Great Wall timing designed around private travelers.",
    image: destinationAsset.beijingForbiddenCity,
    visibility: featured(98, 1),
    experienceSlugs: ["forbidden-city-storytelling", "great-wall-private-hiking"],
    journeySlugs: ["first-china-beautifully-paced"],
  },
  {
    slug: "chengdu",
    name: "Chengdu",
    region: "Southwest China",
    type: "City",
    summary:
      "Panda mornings, tea-house rhythm, Sichuan flavors, and softer days that work beautifully for families.",
    image: destinationAsset.kuanzhaiAlley,
    visibility: featured(91, 2),
    experienceSlugs: ["panda-morning-chengdu", "sichuan-tea-and-food"],
    journeySlugs: ["first-china-beautifully-paced"],
  },
  {
    slug: "shanghai",
    name: "Shanghai",
    region: "East China",
    type: "City",
    summary:
      "A polished modern landing with skyline evenings, architecture walks, design hotels, and easy international comfort.",
    image: destinationAsset.shanghaiSkyline,
    visibility: featured(86, 3),
    experienceSlugs: ["shanghai-architecture-evening"],
    journeySlugs: ["first-china-beautifully-paced"],
  },
  {
    slug: "guilin",
    name: "Guilin",
    region: "South China",
    type: "Nature",
    summary:
      "Karst rivers, Yangshuo countryside, gentle cycling, and soft adventure that gives China a cinematic natural chapter.",
    image: destinationAsset.liRiverBright,
    visibility: featured(84, 4),
    experienceSlugs: ["great-wall-private-hiking"],
    journeySlugs: ["guilin-yangshuo-soft-adventure", "china-honeymoon-river-and-city"],
  },
];

export const catalogExperiences: CatalogExperience[] = [
  {
    slug: "forbidden-city-storytelling",
    title: "Private Forbidden City Storytelling",
    category: "Culture",
    summary:
      "Move through Beijing's palace axis with context, pauses, and human-scale stories rather than a checklist route.",
    whatYouWillDo: [
      "Enter through a calmer private route when timing allows.",
      "Understand imperial life through architecture, family stories, and daily details.",
      "Pair the palace visit with a temple or hutong moment if the pace feels right.",
    ],
    duration: "Half day",
    suitableFor: ["First-time visitors", "Families", "Culture lovers"],
    image: destinationAsset.greatWallBright,
    destinationSlugs: ["beijing"],
    journeySlugs: ["first-china-beautifully-paced"],
    visibility: featured(96, 1),
    seo: {
      title: "Private Forbidden City Experience in Beijing",
      description:
        "Plan a private Forbidden City storytelling experience in Beijing with China Prime DMC, designed for families, couples, and first-time visitors.",
    },
  },
  {
    slug: "great-wall-private-hiking",
    title: "Great Wall Private Hiking",
    category: "Nature",
    summary:
      "A more cinematic Great Wall experience, planned around better timing, quieter sections, and the traveler's fitness.",
    whatYouWillDo: [
      "Choose a Wall section based on season, crowds, and walking comfort.",
      "Travel by private vehicle with flexible start and return timing.",
      "Build in photo pauses, rest stops, and optional village or lunch moments.",
    ],
    duration: "Full day",
    suitableFor: ["Couples", "Families with teens", "Photography travelers"],
    image: destinationAsset.greatWallJinshanling,
    destinationSlugs: ["beijing"],
    journeySlugs: ["first-china-beautifully-paced"],
    visibility: featured(94, 2),
    seo: {
      title: "Private Great Wall Hiking Experience",
      description:
        "Design a private Great Wall hiking day with smarter timing, quieter sections, and flexible pacing for premium China travelers.",
    },
  },
  {
    slug: "panda-morning-chengdu",
    title: "Panda Morning in Chengdu",
    category: "Family",
    summary:
      "A family-friendly panda morning planned at a smarter hour, with relaxed guide pacing and a softer Chengdu afternoon.",
    whatYouWillDo: [
      "Visit when pandas are usually more active.",
      "Keep the pacing light for children and older parents.",
      "Add tea-house, park, or food moments after the main visit.",
    ],
    duration: "Half day",
    suitableFor: ["Families", "Animal lovers", "First-time China travelers"],
    image: destinationAsset.chengduPanda,
    destinationSlugs: ["chengdu"],
    journeySlugs: ["first-china-beautifully-paced"],
    visibility: featured(93, 3),
    seo: {
      title: "Private Panda Experience in Chengdu",
      description:
        "Plan a private Chengdu panda experience with family-friendly pacing and local expert support from China Prime DMC.",
    },
  },
  {
    slug: "sichuan-tea-and-food",
    title: "Sichuan Tea and Food Culture",
    category: "Food",
    summary:
      "A relaxed Chengdu layer built around tea houses, spice, local neighborhoods, and food choices that respect comfort.",
    whatYouWillDo: [
      "Spend time in a local tea-house setting.",
      "Taste Sichuan flavors with spice level and dietary needs handled carefully.",
      "Balance food exploration with slow neighborhood texture.",
    ],
    duration: "Half day or evening",
    suitableFor: ["Food lovers", "Couples", "Families"],
    image: destinationAsset.kuanzhaiAlley,
    destinationSlugs: ["chengdu"],
    journeySlugs: ["first-china-beautifully-paced"],
    visibility: published(84),
    seo: {
      title: "Private Sichuan Food and Tea Experience",
      description:
        "Explore Chengdu tea houses and Sichuan food culture with private pacing, dietary awareness, and local expert planning.",
    },
  },
  {
    slug: "shanghai-architecture-evening",
    title: "Shanghai Architecture Evening",
    category: "Luxury",
    summary:
      "A polished evening of skyline views, Art Deco streets, and elegant city contrasts after the historic China chapters.",
    whatYouWillDo: [
      "See Shanghai's skyline and riverfront at a better hour.",
      "Read the city through architecture, design, and neighborhood contrast.",
      "Keep the evening flexible for dining, photography, or a quiet return.",
    ],
    duration: "Evening",
    suitableFor: ["Couples", "Luxury travelers", "Photography travelers"],
    image: destinationAsset.shanghaiSkyline,
    destinationSlugs: ["shanghai"],
    journeySlugs: ["first-china-beautifully-paced"],
    visibility: published(82),
    seo: {
      title: "Private Shanghai Architecture and Skyline Experience",
      description:
        "Discover Shanghai's skyline, Art Deco streets, and city contrasts through a private luxury evening experience.",
    },
  },
];

const journeyAssetCycle = [
  destinationAsset.greatWallJinshanling,
  destinationAsset.yangshuoYulongRiver,
  destinationAsset.jiuzhaigouBrightLake,
  destinationAsset.zhangjiajieAvatarPeaks,
  destinationAsset.westLakeSunset,
  destinationAsset.huangshanClouds,
  destinationAsset.greatWallBright,
  destinationAsset.liRiverBright,
  destinationAsset.templeOfHeaven,
  destinationAsset.gubeiWaterTown,
  destinationAsset.yuGarden,
  destinationAsset.xianCityWall,
  destinationAsset.kuanzhaiAlley,
  destinationAsset.shanghaiTower,
  destinationAsset.yunnanLijiang,
  destinationAsset.chengduPanda,
  destinationAsset.shanghaiSkyline,
  destinationAsset.zhangjiajieForest,
  destinationAsset.jiuzhaigouLake,
  destinationAsset.guilinRiver,
  destinationAsset.xianTerracotta,
  destinationAsset.beijingForbiddenCityWide,
];

const curatedJourneyData: Array<
  Omit<CatalogJourney, "image" | "visibility"> & {
    assetIndex: number;
    rankingScore: number;
    manualPin?: number;
  }
> = [
  {
    slug: "classic-china-icons-12-days",
    title: "Classic China Icons, Calmly Paced",
    category: "Classic",
    summary:
      "A polished first-China route through Beijing, Xi'an, Guilin, and Shanghai with fewer rushed transfers and stronger private guiding.",
    duration: "12 Days / 11 Nights",
    route: "Beijing, Xi'an, Guilin, Shanghai",
    styles: ["First-time China", "Culture", "Family"],
    destinationSlugs: ["beijing", "guilin", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "great-wall-private-hiking"],
    assetIndex: 0,
    rankingScore: 97,
    manualPin: 2,
  },
  {
    slug: "china-with-kids-pandas-and-rivers",
    title: "China with Kids: Pandas, Parks and Rivers",
    category: "Family",
    summary:
      "A family-first journey with Beijing icons, Chengdu pandas, Yangshuo countryside, and Shanghai comfort built around lighter days.",
    duration: "11 Days / 10 Nights",
    route: "Beijing, Chengdu, Yangshuo, Shanghai",
    styles: ["Family", "First-time China", "Nature"],
    destinationSlugs: ["beijing", "chengdu", "guilin", "shanghai"],
    experienceSlugs: ["panda-morning-chengdu", "great-wall-private-hiking"],
    assetIndex: 15,
    rankingScore: 96,
    manualPin: 3,
  },
  {
    slug: "luxury-china-slow-rhythm",
    title: "Luxury China, Slower by Design",
    category: "Luxury",
    summary:
      "A quieter luxury route shaped around better hotels, private pacing, elegant city evenings, and fewer one-night stays.",
    duration: "10 Days / 9 Nights",
    route: "Beijing, Hangzhou, Shanghai",
    styles: ["Luxury", "Culture", "Senior-friendly"],
    destinationSlugs: ["beijing", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "shanghai-architecture-evening"],
    assetIndex: 4,
    rankingScore: 95,
    manualPin: 4,
  },
  {
    slug: "guilin-yangshuo-soft-adventure",
    title: "Guilin and Yangshuo Soft Adventure",
    category: "Classic",
    summary:
      "Karst landscapes, river moments, village paths, and easy countryside adventure for travelers who want nature without hard trekking.",
    duration: "6 Days / 5 Nights",
    route: "Guilin, Longji, Yangshuo",
    styles: ["Nature", "Photography", "Family"],
    destinationSlugs: ["guilin"],
    experienceSlugs: ["great-wall-private-hiking"],
    assetIndex: 7,
    rankingScore: 94,
    manualPin: 5,
  },
  {
    slug: "zhangjiajie-avatar-peaks-private",
    title: "Zhangjiajie Avatar Peaks Private Journey",
    category: "Custom",
    summary:
      "A dramatic nature route through Zhangjiajie and Fenghuang with private timing, scenic viewpoints, and photography-aware pacing.",
    duration: "5 Days / 4 Nights",
    route: "Zhangjiajie, Fenghuang",
    styles: ["Nature", "Photography", "Adventure"],
    destinationSlugs: [],
    experienceSlugs: ["great-wall-private-hiking"],
    assetIndex: 3,
    rankingScore: 93,
    manualPin: 6,
  },
  {
    slug: "jiuzhaigou-chengdu-nature-and-pandas",
    title: "Jiuzhaigou, Chengdu Nature and Pandas",
    category: "Family",
    summary:
      "A bright Sichuan route pairing panda mornings, Chengdu food, Jiuzhaigou lakes, and mountain scenery with careful altitude pacing.",
    duration: "7 Days / 6 Nights",
    route: "Chengdu, Jiuzhaigou, Huanglong",
    styles: ["Family", "Nature", "Photography"],
    destinationSlugs: ["chengdu"],
    experienceSlugs: ["panda-morning-chengdu", "sichuan-tea-and-food"],
    assetIndex: 2,
    rankingScore: 92,
    manualPin: 7,
  },
  {
    slug: "beijing-great-wall-heritage-5-days",
    title: "Beijing and the Great Wall Heritage Escape",
    category: "Classic",
    summary:
      "A focused Beijing route for travelers who want imperial history, hutongs, temple mornings, and a cinematic Great Wall day.",
    duration: "5 Days / 4 Nights",
    route: "Beijing, Great Wall",
    styles: ["First-time China", "Culture", "Senior-friendly"],
    destinationSlugs: ["beijing"],
    experienceSlugs: ["forbidden-city-storytelling", "great-wall-private-hiking"],
    assetIndex: 8,
    rankingScore: 91,
  },
  {
    slug: "shanghai-suzhou-hangzhou-elegant-east",
    title: "Elegant East China: Shanghai, Suzhou and Hangzhou",
    category: "Luxury",
    summary:
      "A refined eastern China route with skyline evenings, gardens, lake scenery, tea culture, and polished hotel choices.",
    duration: "7 Days / 6 Nights",
    route: "Shanghai, Suzhou, Hangzhou",
    styles: ["Luxury", "Culture", "Food"],
    destinationSlugs: ["shanghai"],
    experienceSlugs: ["shanghai-architecture-evening", "sichuan-tea-and-food"],
    assetIndex: 10,
    rankingScore: 90,
  },
  {
    slug: "huangshan-hangzhou-photography",
    title: "Huangshan and Hangzhou Photography Journey",
    category: "Custom",
    summary:
      "Misty mountain ridges, West Lake light, ancient villages, and slower photography timing for travelers who plan around atmosphere.",
    duration: "8 Days / 7 Nights",
    route: "Shanghai, Hangzhou, Huangshan",
    styles: ["Photography", "Nature", "Luxury"],
    destinationSlugs: ["shanghai"],
    experienceSlugs: ["shanghai-architecture-evening"],
    assetIndex: 5,
    rankingScore: 89,
  },
  {
    slug: "chengdu-chongqing-food-journey",
    title: "Chengdu and Chongqing Food Journey",
    category: "Custom",
    summary:
      "A flavor-led Sichuan and Chongqing journey with tea houses, hotpot context, market texture, and comfort-aware spice planning.",
    duration: "6 Days / 5 Nights",
    route: "Chengdu, Chongqing",
    styles: ["Food", "Culture", "Family"],
    destinationSlugs: ["chengdu"],
    experienceSlugs: ["sichuan-tea-and-food", "panda-morning-chengdu"],
    assetIndex: 12,
    rankingScore: 88,
  },
  {
    slug: "yunnan-slow-luxury",
    title: "Yunnan Slow Luxury: Dali, Lijiang and Shangri-La",
    category: "Luxury",
    summary:
      "A slower southwest route through old towns, mountain views, minority culture, boutique stays, and a gentler highland rhythm.",
    duration: "9 Days / 8 Nights",
    route: "Dali, Lijiang, Shangri-La",
    styles: ["Luxury", "Nature", "Culture"],
    destinationSlugs: ["chengdu"],
    experienceSlugs: ["sichuan-tea-and-food"],
    assetIndex: 14,
    rankingScore: 87,
  },
  {
    slug: "silk-road-dunhuang-zhangye",
    title: "Silk Road: Dunhuang, Zhangye and Desert Color",
    category: "Custom",
    summary:
      "A cinematic Silk Road route with desert landscapes, Buddhist cave art, rainbow mountains, and private logistics across big distances.",
    duration: "8 Days / 7 Nights",
    route: "Lanzhou, Zhangye, Jiayuguan, Dunhuang",
    styles: ["Culture", "Photography", "Adventure"],
    destinationSlugs: [],
    experienceSlugs: ["forbidden-city-storytelling"],
    assetIndex: 20,
    rankingScore: 86,
  },
  {
    slug: "xian-silk-road-muslim-heritage",
    title: "Xi'an and Silk Road Muslim Heritage",
    category: "Custom",
    summary:
      "A halal-aware heritage route through Xi'an and the Silk Road, with prayer timing awareness, food planning, and cultural context.",
    duration: "9 Days / 8 Nights",
    route: "Xi'an, Lanzhou, Dunhuang",
    styles: ["Muslim-friendly", "Culture", "Family"],
    destinationSlugs: [],
    experienceSlugs: ["forbidden-city-storytelling"],
    assetIndex: 11,
    rankingScore: 85,
  },
  {
    slug: "muslim-friendly-classic-china",
    title: "Muslim-friendly Classic China",
    category: "Family",
    summary:
      "A first-China route with halal-aware meals, prayer timing awareness, private guides, and classic icons paced with care.",
    duration: "10 Days / 9 Nights",
    route: "Beijing, Xi'an, Guilin, Shanghai",
    styles: ["Muslim-friendly", "Family", "First-time China"],
    destinationSlugs: ["beijing", "guilin", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "great-wall-private-hiking"],
    assetIndex: 21,
    rankingScore: 84,
  },
  {
    slug: "senior-friendly-china-icons",
    title: "Senior-friendly China Icons",
    category: "Classic",
    summary:
      "A carefully paced China route with shorter walking blocks, private transfers, better rest windows, and classic places without exhaustion.",
    duration: "12 Days / 11 Nights",
    route: "Beijing, Xi'an, Chengdu, Shanghai",
    styles: ["Senior-friendly", "First-time China", "Culture"],
    destinationSlugs: ["beijing", "chengdu", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "panda-morning-chengdu"],
    assetIndex: 6,
    rankingScore: 83,
  },
  {
    slug: "women-friends-china-culture-and-style",
    title: "Women Friends China: Culture, Food and Style",
    category: "Custom",
    summary:
      "A friendly private route for women friends or solo travelers with culture, food, shopping, photography, and polished city pacing.",
    duration: "11 Days / 10 Nights",
    route: "Beijing, Xi'an, Shanghai, Hangzhou",
    styles: ["Culture", "Food", "Luxury"],
    destinationSlugs: ["beijing", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "shanghai-architecture-evening"],
    assetIndex: 16,
    rankingScore: 82,
  },
  {
    slug: "china-honeymoon-river-and-city",
    title: "China Honeymoon: Rivers, Gardens and Skyline",
    category: "Luxury",
    summary:
      "A romantic private China route with Yangshuo scenery, Hangzhou softness, Shanghai style, and elegant pacing for couples.",
    duration: "10 Days / 9 Nights",
    route: "Guilin, Yangshuo, Hangzhou, Shanghai",
    styles: ["Luxury", "Nature", "Food"],
    destinationSlugs: ["guilin", "shanghai"],
    experienceSlugs: ["shanghai-architecture-evening"],
    assetIndex: 1,
    rankingScore: 81,
  },
  {
    slug: "grand-china-21-days",
    title: "Grand China Private Journey",
    category: "Luxury",
    summary:
      "A sweeping private China journey for travelers who want the big arc: imperial north, pandas, rivers, mountains, and modern Shanghai.",
    duration: "21 Days / 20 Nights",
    route: "Beijing, Xi'an, Chengdu, Guilin, Yangshuo, Hangzhou, Shanghai",
    styles: ["Luxury", "First-time China", "Nature"],
    destinationSlugs: ["beijing", "chengdu", "guilin", "shanghai"],
    experienceSlugs: [
      "forbidden-city-storytelling",
      "panda-morning-chengdu",
      "great-wall-private-hiking",
    ],
    assetIndex: 19,
    rankingScore: 80,
  },
  {
    slug: "china-by-high-speed-rail",
    title: "China by High-speed Rail",
    category: "Classic",
    summary:
      "A smooth private route using China's high-speed rail network for travelers who want efficient movement without losing comfort.",
    duration: "9 Days / 8 Nights",
    route: "Beijing, Xi'an, Shanghai, Hangzhou",
    styles: ["First-time China", "Culture", "Senior-friendly"],
    destinationSlugs: ["beijing", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "shanghai-architecture-evening"],
    assetIndex: 13,
    rankingScore: 79,
  },
  {
    slug: "tibet-lhasa-nyingchi-private",
    title: "Tibet Private Journey: Lhasa and Nyingchi",
    category: "Custom",
    summary:
      "A carefully paced highland journey with cultural depth, scenic valleys, permit planning, and comfort-aware acclimatization.",
    duration: "8 Days / 7 Nights",
    route: "Lhasa, Nyingchi",
    styles: ["Culture", "Nature", "Photography"],
    destinationSlugs: ["chengdu"],
    experienceSlugs: ["sichuan-tea-and-food"],
    assetIndex: 2,
    rankingScore: 78,
  },
  {
    slug: "xinjiang-northern-landscapes",
    title: "Northern Xinjiang Landscapes",
    category: "Custom",
    summary:
      "A remote nature route with lakes, grasslands, big skies, and long-distance private logistics designed for serious scenery lovers.",
    duration: "10 Days / 9 Nights",
    route: "Urumqi, Kanas, Hemu, Yining",
    styles: ["Nature", "Photography", "Adventure"],
    destinationSlugs: ["beijing"],
    experienceSlugs: ["great-wall-private-hiking"],
    assetIndex: 17,
    rankingScore: 77,
  },
  {
    slug: "southern-xinjiang-silk-road",
    title: "Southern Xinjiang Silk Road",
    category: "Custom",
    summary:
      "A deeper Silk Road journey through oasis cities, markets, desert edges, and Central Asian cultural texture.",
    duration: "9 Days / 8 Nights",
    route: "Kashgar, Karakul Lake, Kuqa, Turpan",
    styles: ["Culture", "Photography", "Muslim-friendly"],
    destinationSlugs: [],
    experienceSlugs: ["forbidden-city-storytelling"],
    assetIndex: 18,
    rankingScore: 76,
  },
  {
    slug: "family-soft-adventure-longji-yangshuo",
    title: "Family Soft Adventure: Longji and Yangshuo",
    category: "Family",
    summary:
      "A gentle family nature route with rice terraces, river scenery, village walks, cycling options, and room for rest.",
    duration: "7 Days / 6 Nights",
    route: "Guilin, Longji, Yangshuo",
    styles: ["Family", "Nature", "Photography"],
    destinationSlugs: ["guilin"],
    experienceSlugs: ["great-wall-private-hiking"],
    assetIndex: 7,
    rankingScore: 75,
  },
  {
    slug: "teen-friendly-china-adventure",
    title: "Teen-friendly China Adventure",
    category: "Family",
    summary:
      "A higher-energy private route for families with teens, mixing Beijing, Zhangjiajie, pandas, and modern Shanghai.",
    duration: "12 Days / 11 Nights",
    route: "Beijing, Zhangjiajie, Chengdu, Shanghai",
    styles: ["Family", "Adventure", "Nature"],
    destinationSlugs: ["beijing", "chengdu", "shanghai"],
    experienceSlugs: ["great-wall-private-hiking", "panda-morning-chengdu"],
    assetIndex: 3,
    rankingScore: 74,
  },
  {
    slug: "food-culture-beijing-xian-chengdu",
    title: "Food and Culture: Beijing, Xi'an and Chengdu",
    category: "Custom",
    summary:
      "A flavor-rich route built around imperial food, Xi'an street flavor, Sichuan spice, tea houses, and context-led private guiding.",
    duration: "9 Days / 8 Nights",
    route: "Beijing, Xi'an, Chengdu",
    styles: ["Food", "Culture", "Family"],
    destinationSlugs: ["beijing", "chengdu"],
    experienceSlugs: ["forbidden-city-storytelling", "sichuan-tea-and-food"],
    assetIndex: 12,
    rankingScore: 73,
  },
  {
    slug: "private-china-for-couples",
    title: "Private China for Couples",
    category: "Luxury",
    summary:
      "A stylish couples route with Beijing history, Hangzhou softness, Yangshuo scenery, and Shanghai evenings.",
    duration: "12 Days / 11 Nights",
    route: "Beijing, Guilin, Hangzhou, Shanghai",
    styles: ["Luxury", "Culture", "Nature"],
    destinationSlugs: ["beijing", "guilin", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "shanghai-architecture-evening"],
    assetIndex: 4,
    rankingScore: 72,
  },
  {
    slug: "yangtze-chengdu-classic",
    title: "Chengdu and Yangtze Classic",
    category: "Classic",
    summary:
      "A comfortable classic route pairing Chengdu pandas and Sichuan culture with a Yangtze river chapter and easy city connections.",
    duration: "10 Days / 9 Nights",
    route: "Chengdu, Chongqing, Yangtze, Shanghai",
    styles: ["Senior-friendly", "Culture", "Nature"],
    destinationSlugs: ["chengdu", "shanghai"],
    experienceSlugs: ["panda-morning-chengdu", "sichuan-tea-and-food"],
    assetIndex: 16,
    rankingScore: 71,
  },
  {
    slug: "beijing-xian-shanghai-essential-8-days",
    title: "Essential Beijing, Xi'an and Shanghai",
    category: "Classic",
    summary:
      "A concise first-China route for travelers with limited time who still want the imperial, ancient, and modern chapters.",
    duration: "8 Days / 7 Nights",
    route: "Beijing, Xi'an, Shanghai",
    styles: ["First-time China", "Culture", "Senior-friendly"],
    destinationSlugs: ["beijing", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "shanghai-architecture-evening"],
    assetIndex: 10,
    rankingScore: 70,
  },
  {
    slug: "premium-mice-incentive-china",
    title: "Premium China Incentive Journey",
    category: "Custom",
    summary:
      "A polished private incentive route for small groups, combining iconic China, strong logistics, memorable dining, and flexible add-ons.",
    duration: "6 Days / 5 Nights",
    route: "Beijing, Shanghai",
    styles: ["Luxury", "Culture", "Food"],
    destinationSlugs: ["beijing", "shanghai"],
    experienceSlugs: ["forbidden-city-storytelling", "shanghai-architecture-evening"],
    assetIndex: 13,
    rankingScore: 69,
  },
  {
    slug: "custom-china-designed-from-scratch",
    title: "Custom China, Designed From Scratch",
    category: "Custom",
    summary:
      "A blank-canvas private journey for travelers who know the feeling they want, but need expert help shaping the route.",
    duration: "Flexible / 7-21 Days",
    route: "China-wide",
    styles: ["Luxury", "Family", "Culture"],
    destinationSlugs: ["beijing", "chengdu", "guilin", "shanghai"],
    experienceSlugs: [
      "forbidden-city-storytelling",
      "panda-morning-chengdu",
      "shanghai-architecture-evening",
    ],
    assetIndex: 0,
    rankingScore: 68,
  },
];

const journeyCoverBySlug: Record<string, CatalogJourney["image"]> = {
  "classic-china-icons-12-days": destinationAsset.goldenTriangleBeijing,
  "china-with-kids-pandas-and-rivers": destinationAsset.familyYangshuoCountryside,
  "luxury-china-slow-rhythm": destinationAsset.westLakeMultiGeneration,
  "guilin-yangshuo-soft-adventure": destinationAsset.liRiverBright,
  "zhangjiajie-avatar-peaks-private": destinationAsset.zhangjiajieAvatarPeaks,
  "jiuzhaigou-chengdu-nature-and-pandas": destinationAsset.jiuzhaigouBrightLake,
  "beijing-great-wall-heritage-5-days": destinationAsset.simataiGubeiWaterTown,
  "shanghai-suzhou-hangzhou-elegant-east": destinationAsset.shanghaiSuzhouGarden,
  "huangshan-hangzhou-photography": destinationAsset.huangshanClouds,
  "chengdu-chongqing-food-journey": destinationAsset.chongqingHongyaCave,
  "yunnan-slow-luxury": destinationAsset.yunnanOldTown,
  "silk-road-dunhuang-zhangye": destinationAsset.silkRoadZhangye,
  "xian-silk-road-muslim-heritage": destinationAsset.xianGreatMosque,
  "muslim-friendly-classic-china": destinationAsset.guilinElephantTrunkHill,
  "senior-friendly-china-icons": destinationAsset.seniorTempleOfHeaven,
  "women-friends-china-culture-and-style": destinationAsset.shanghaiBund,
  "china-honeymoon-river-and-city": destinationAsset.yangshuoYulongRiver,
  "grand-china-21-days": destinationAsset.greatWallJinshanling,
  "china-by-high-speed-rail": destinationAsset.shanghaiTower,
  "tibet-lhasa-nyingchi-private": destinationAsset.lhasaPotalaPalace,
  "xinjiang-northern-landscapes": destinationAsset.xinjiangKanasLake,
  "southern-xinjiang-silk-road": destinationAsset.kashgarOldCity,
  "family-soft-adventure-longji-yangshuo": destinationAsset.longshengRiceTerraces,
  "teen-friendly-china-adventure": destinationAsset.zhangjiajieGlassBridge,
  "food-culture-beijing-xian-chengdu": destinationAsset.kuanzhaiAlley,
  "private-china-for-couples": destinationAsset.westLakeSunset,
  "yangtze-chengdu-classic": destinationAsset.yangtzeQutangGorge,
  "beijing-xian-shanghai-essential-8-days": destinationAsset.xianTerracotta,
  "premium-mice-incentive-china": destinationAsset.beijingForbiddenCityWide,
  "custom-china-designed-from-scratch": destinationAsset.forbiddenCityHero,
};

export const catalogJourneys: CatalogJourney[] = [
  ...curatedJourneyData.map(({ assetIndex, rankingScore, manualPin, ...journey }) => ({
    ...journey,
    image:
      journeyCoverBySlug[journey.slug] ?? journeyAssetCycle[assetIndex % journeyAssetCycle.length],
    visibility: featured(rankingScore, manualPin),
  })),
];

export function getFeaturedDestinations(limit = 3) {
  return rankCatalog(catalogDestinations).slice(0, limit);
}

export function getFeaturedExperiences(limit = 3) {
  return rankCatalog(catalogExperiences).slice(0, limit);
}

export function getFeaturedJourneys(limit = 3) {
  return rankCatalog(catalogJourneys).slice(0, limit);
}

export function getCatalogDestination(slug: string) {
  return catalogDestinations.find((destination) => destination.slug === slug);
}

export function getCatalogExperience(slug: string) {
  return catalogExperiences.find((experience) => experience.slug === slug);
}

export function getCatalogJourney(slug: string) {
  return catalogJourneys.find((journey) => journey.slug === slug);
}

export function getDestinationDetail(slug: string) {
  const destination = getDestinationBySlug(slug);

  if (destination) {
    return destination;
  }

  return buildDestinationFromCatalog(slug);
}

export function getJourneyDetail(slug: string) {
  return getTourBySlug(slug);
}

export function getDestinationRelationships(slug: string) {
  const destination = getCatalogDestination(slug);

  return {
    experiences: destination
      ? catalogExperiences.filter((experience) =>
          destination.experienceSlugs.includes(experience.slug),
        )
      : [],
    journeys: destination
      ? catalogJourneys.filter((journey) => destination.journeySlugs.includes(journey.slug))
      : [],
  };
}

export function getExperienceRelationships(slug: string) {
  const experience = getCatalogExperience(slug);

  return {
    destinations: experience
      ? catalogDestinations.filter((destination) =>
          experience.destinationSlugs.includes(destination.slug),
        )
      : [],
    journeys: experience
      ? catalogJourneys.filter((journey) => experience.journeySlugs.includes(journey.slug))
      : [],
  };
}

export function getJourneyRelationships(slug: string) {
  const journey = getCatalogJourney(slug);

  return {
    destinations: journey
      ? catalogDestinations.filter((destination) =>
          journey.destinationSlugs.includes(destination.slug),
        )
      : [],
    experiences: journey
      ? catalogExperiences.filter((experience) => journey.experienceSlugs.includes(experience.slug))
      : [],
  };
}

export function getDestinationSlugsFromCatalog() {
  return catalogDestinations.map((destination) => destination.slug);
}

export function getExperienceSlugsFromCatalog() {
  return catalogExperiences.map((experience) => experience.slug);
}

export function getJourneySlugsFromCatalog() {
  return catalogJourneys.map((journey) => journey.slug);
}

export function filterDestinations(filters: { region?: string; type?: string }) {
  return catalogDestinations.filter((destination) => {
    if (filters.region && destination.region !== filters.region) return false;
    if (filters.type && destination.type !== filters.type) return false;
    return true;
  });
}

export function filterExperiences(filters: { category?: ExperienceCategory | string }) {
  return catalogExperiences.filter((experience) => {
    if (filters.category && experience.category !== filters.category) return false;
    return true;
  });
}

export function filterJourneys(filters: { category?: string }) {
  return catalogJourneys.filter((journey) => {
    if (filters.category && journey.category !== filters.category) return false;
    return true;
  });
}

function rankCatalog<T extends { visibility: CmsVisibility }>(items: T[]) {
  return [...items]
    .filter((item) => item.visibility.state === "published" && item.visibility.featured)
    .sort(
      (a, b) =>
        (a.visibility.manualPin ?? Number.POSITIVE_INFINITY) -
          (b.visibility.manualPin ?? Number.POSITIVE_INFINITY) ||
        b.visibility.rankingScore - a.visibility.rankingScore,
    );
}

function buildDestinationFromCatalog(slug: string): Destination | undefined {
  const destination = getCatalogDestination(slug);

  if (!destination) {
    return undefined;
  }

  const relationships = getDestinationRelationships(slug);
  const inquiryHref = `mailto:chinaprimedmc@gmail.com?subject=Private%20${encodeURIComponent(
    destination.name,
  )}%20Journey%20Inquiry`;
  const experiences = relationships.experiences.length
    ? relationships.experiences
    : catalogExperiences.slice(0, 3);
  const journeys = relationships.journeys.length
    ? relationships.journeys
    : catalogJourneys.slice(0, 3);

  return {
    slug: destination.slug,
    name: destination.name,
    region: destination.region,
    hero: {
      eyebrow: "Destination guide",
      tagline: `${destination.name}, shaped for private travel.`,
      summary: destination.summary,
      image: destination.image,
      primary: { label: "Explore Related Journeys", href: "#suggested-tours" },
      secondary: { label: `Plan ${destination.name}`, href: inquiryHref },
    },
    seo: {
      title: `Private ${destination.name} Travel and Tailor-made China Journeys`,
      description: destination.summary,
      keywords: [
        `private ${destination.name} travel`,
        `${destination.name} China itinerary`,
        "tailor-made China journey",
      ],
    },
    quickFacts: [
      {
        label: "Location",
        value: destination.region,
        helper: "Connected to private China routes.",
      },
      {
        label: "Best Season",
        value: "Spring and autumn",
        helper: "Final timing depends on route, weather, and traveler comfort.",
      },
      {
        label: "Recommended Stay",
        value: "2-4 nights",
        helper: "Enough time for a calmer private pace.",
      },
      {
        label: "Travel Style",
        value: destination.type,
        helper: "Useful as a route chapter, not a checklist stop.",
      },
      {
        label: "Suitable For",
        value: "Couples, families, first-timers",
        helper: "Private logistics make the destination easier to enjoy.",
      },
      {
        label: "Visa Notes",
        value: "Route dependent",
        helper: "Visa and transit rules depend on nationality and final itinerary.",
      },
    ],
    whyVisit: {
      title: `${destination.name} gives the journey a clear emotional chapter.`,
      body: `${destination.summary} The page is generated from the destination catalog, then enriched through linked experiences and journeys so travelers understand where it fits in a private China route.`,
      image: destination.image,
    },
    bestTime: {
      title: `The best time for ${destination.name} depends on comfort, light, and pace.`,
      summary:
        "Spring and autumn are usually the easiest starting points for international travelers. Summer and winter can still work when the route protects rest time and indoor alternatives.",
      seasons: [
        { label: "Spring", value: "Comfortable", helper: "Good for first-time private travel." },
        {
          label: "Summer",
          value: "Possible",
          helper: "Use smarter timing and lighter afternoons.",
        },
        {
          label: "Autumn",
          value: "Strong choice",
          helper: "Often the easiest season for pacing and photography.",
        },
        {
          label: "Winter",
          value: "Selective",
          helper: "Best when the route is built around comfort.",
        },
      ],
    },
    highlights: experiences.slice(0, 3).map((experience): DestinationHighlight => ({
      title: experience.title,
      description: experience.summary,
      category: mapExperienceCategoryToHighlight(experience.category),
      image: experience.image,
    })),
    experiences: experiences.slice(0, 3).map((experience) => ({
      title: experience.title,
      description: experience.summary,
      badges: [experience.category, experience.duration],
      image: experience.image,
    })),
    hotels: [],
    tours: journeys.slice(0, 3).map((journey) => ({
      title: journey.title,
      description: journey.summary,
      tags: [journey.category, ...journey.styles.slice(0, 2)],
      image: journey.image,
      route: journey.route,
      duration: journey.duration,
      style: journey.category,
      href: `/journey/${journey.slug}`,
    })),
    gallery: [destination.image, ...experiences.slice(0, 2).map((experience) => experience.image)],
    tips: [
      {
        title: "Keep the destination in proportion to the whole route.",
        description:
          "A strong private China itinerary gives each place a purpose instead of adding stops simply because they are famous.",
        category: "Transportation",
      },
      {
        title: "Let pacing decide the order of visits.",
        description:
          "Private planning should protect energy, meal timing, photography light, and recovery time between major moments.",
        category: "Safety",
      },
      {
        title: "Use related experiences to make the place memorable.",
        description:
          "The strongest memories often come from one well-chosen experience rather than a long list of attractions.",
        category: "Packing",
      },
    ],
    faqs: [
      {
        question: `How many days should I spend in ${destination.name}?`,
        answer:
          "Most private travelers should treat the suggested stay as flexible. The right number depends on arrival city, traveler age, season, and how much rest the route needs.",
      },
      {
        question: `Can ${destination.name} work for families or older parents?`,
        answer:
          "Yes, when the route uses private transfers, realistic walking blocks, flexible meals, and guide pacing designed around the travelers.",
      },
      {
        question: `Can this destination be added to a tailor-made China journey?`,
        answer:
          "Yes. China Prime DMC can connect it with related destinations, experiences, and journeys based on comfort level, dates, and travel style.",
      },
    ],
    related: {
      journeys: journeys.slice(0, 3).map((journey) => ({
        title: journey.title,
        description: journey.summary,
        tags: [journey.category, ...journey.styles.slice(0, 2)],
        image: journey.image,
        route: journey.route,
        duration: journey.duration,
        style: journey.category,
        href: `/journey/${journey.slug}`,
      })),
      experiences: experiences.slice(0, 3).map((experience) => ({
        title: experience.title,
        description: experience.summary,
        badges: [experience.category, experience.duration],
        image: experience.image,
      })),
      articles: [
        {
          title: `How to include ${destination.name} in a private China journey`,
          excerpt:
            "A planning note on route rhythm, season, comfort, and how one destination connects with the rest of the trip.",
          category: "Travel planning",
          image: destination.image,
          href: "/journal/how-to-plan-a-first-private-trip-to-china",
        },
      ],
    },
  };
}

function mapExperienceCategoryToHighlight(
  category: ExperienceCategory,
): DestinationHighlight["category"] {
  switch (category) {
    case "Food":
      return "Food";
    case "Nature":
      return "Nature";
    case "Luxury":
      return "Luxury";
    case "Family":
      return "Family";
    case "Culture":
    default:
      return "Culture";
  }
}

export function catalogStats() {
  return {
    destinations: catalogDestinations.length,
    experiences: catalogExperiences.length,
    journeys: catalogJourneys.length,
    relationships: catalogDestinations.reduce(
      (total, destination) =>
        total + destination.experienceSlugs.length + destination.journeySlugs.length,
      0,
    ),
  };
}
