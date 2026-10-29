/**
 * 本模块职责：Journeys 页的编辑式内容——精选照片、找行程句子的选项映射、页面文案。
 * 输入：无运行时输入。
 * 输出：页面组件共同使用的只读配置。
 * 不负责：行程价格、线路详情（来自 catalog）、筛选状态或视觉样式。
 * 关键规则：每张照片都经过人工挑选；价格与天数永远读取 catalog，不在此处另写。
 */

import type { JourneyExperienceId, JourneyTravelerId } from "@/content/tours/catalog";

export type CuratedPhoto = { src: string; alt: string; position?: string };

/** 精选照片：避开合影与 AI 感画面，只用构图完整、光线好的风景与场景。 */
export const journeyPhotos: Record<string, CuratedPhoto> = {
  "first-china-beautifully-paced": {
    src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-reflection.webp",
    alt: "The Temple of Heaven mirrored in still water at dawn",
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    src: "/tours/chengdu-pandas/chengdu-hero-panda.webp",
    alt: "Giant pandas eating bamboo at a Chengdu sanctuary",
  },
  "luxury-yunnan-private-tour": {
    src: "/tours/luxury-yunnan-private-tour/jade-dragon.jpg",
    alt: "Jade Dragon Snow Mountain rising above Lijiang",
    position: "58% center",
  },
  "china-at-an-easier-pace-12-day-private-tour": {
    src: "/tours/beijing-unhurried/summer-palace.webp",
    alt: "The Summer Palace above Kunming Lake in Beijing",
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    src: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
    alt: "Shanghai's skyline glowing at sunset above the Huangpu River",
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chongqing-07.webp",
    alt: "Chongqing's riverfront towers lit at dusk",
  },
  "shanghai-zhangjiajie-floating-peaks": {
    src: "/tours/shanghai-zhangjiajie-floating-peaks/hero-floating-peaks.webp",
    alt: "Sandstone pillars rising through mist in Zhangjiajie",
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    src: "/tours/chengdu-pandas-jiuzhaigou/hero.webp",
    alt: "Turquoise lake framed by autumn forest in Jiuzhaigou",
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    src: "/tours/xian-beijing-private-journey/day-01.webp",
    alt: "Xi'an's Bell Tower against a pink evening sky",
  },
  "beijing-great-wall-private-5-day-tour": {
    src: "/tours/beijing-unhurried/forbidden-city.webp",
    alt: "The Forbidden City seen from above in autumn light",
  },
  "chengdu-pandas-sichuan-table": {
    src: "/tours/chengdu-pandas/detail-tea.webp",
    alt: "A gaiwan of green tea on a Chengdu teahouse table",
  },
};

export const heroPhoto: CuratedPhoto = {
  src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp",
  alt: "The Great Wall winding over the mountains near Beijing at sunrise",
};

export const closingPhoto: CuratedPhoto = {
  src: "/tours/chengdu-pandas-jiuzhaigou/gallery-10.webp",
  alt: "An aerial view of a turquoise lake in the Jiuzhaigou valley",
};

export type FinderChoice<T extends string> = {
  value: T;
  label: string;
  /** 数据里命中任意一个即视为匹配。 */
  match?: readonly string[];
};

export const lengthChoices = [
  { value: "any", label: "for as long as it takes" },
  { value: "one-day", label: "for a single day" },
  { value: "four-seven", label: "for 4 to 7 days" },
  { value: "eight-eleven", label: "for 8 to 11 days" },
  { value: "twelve-plus", label: "for 12 days or more" },
] as const;

export const companionChoices: FinderChoice<string>[] = [
  { value: "any", label: "the people I love" },
  { value: "couple", label: "my partner", match: ["couples"] satisfies JourneyTravelerId[] },
  {
    value: "family",
    label: "my family",
    match: ["families", "multigenerational"] satisfies JourneyTravelerId[],
  },
  {
    value: "parents",
    label: "my parents",
    match: ["older-travelers", "multigenerational"] satisfies JourneyTravelerId[],
  },
  { value: "friends", label: "friends", match: ["private-groups"] satisfies JourneyTravelerId[] },
  { value: "solo", label: "no one else", match: ["solo-travelers"] satisfies JourneyTravelerId[] },
];

export const interestChoices: FinderChoice<string>[] = [
  { value: "any", label: "a little of everything" },
  {
    value: "icons",
    label: "the great icons",
    match: ["great-wall", "ancient-china"] satisfies JourneyExperienceId[],
  },
  {
    value: "food",
    label: "pandas and Sichuan food",
    match: ["pandas", "food"] satisfies JourneyExperienceId[],
  },
  {
    value: "land",
    label: "mountains and wild landscapes",
    match: ["scenery"] satisfies JourneyExperienceId[],
  },
  {
    value: "life",
    label: "everyday life and local flavor",
    match: ["local-life"] satisfies JourneyExperienceId[],
  },
  {
    value: "cities",
    label: "modern cities after dark",
    match: ["modern-cities", "photography"] satisfies JourneyExperienceId[],
  },
  {
    value: "calm",
    label: "somewhere to slow down",
    match: ["wellness"] satisfies JourneyExperienceId[],
  },
];

export const journeysCopy = {
  heroEyebrow: "Designed and operated in China",
  heroLead: "Private China tours,",
  heroEm: "arranged by people who live here.",
  heroSub:
    "Your own guide and driver, a pace that suits you, and every detail confirmed in writing before you commit.",
  definition:
    "AVIORA is a licensed, China-based tour operator that designs and runs private, tailor-made China tours for international travelers: from single days with a private guide to journeys of up to 13 days.",
  statement:
    "Every journey is private from the first transfer to the last goodbye. No fixed departures and no obligatory shopping stops, just one team in China that designs the route, checks every detail and picks up when you call.",
  finderEyebrow: "Begin here",
  journeysTitle: "Private China journeys, from a single day to two weeks.",
  journeysNote:
    "Each route is a starting point. Days, pace, hotels and highlights can all be reshaped around you.",
  featureEyebrow: "A place to begin",
  indexTitle: "Private days and specialist journeys",
  indexNote: "A single day with your own guide, or a trip built around one particular interest.",
  reviewsTitle: "In their words",
  stepsTitle: "From first message to written proposal",
  steps: [
    {
      title: "Tell us what matters",
      body: "Your dates, who is coming, the pace you like and anything we should know.",
    },
    {
      title: "Receive a private proposal",
      body: "A route designed around you, never a seat on a fixed departure.",
    },
    {
      title: "Confirm every detail",
      body: "Hotels, transport, inclusions and price, all set out in writing.",
    },
    {
      title: "Travel with one local team",
      body: "The same people in China look after you from arrival to departure.",
    },
  ],
  guidesTitle: "Before you decide",
  guides: [
    {
      kicker: "Planning",
      title: "What a private China tour costs in 2026",
      href: "/journal/private-china-tour-cost-2026",
    },
    {
      kicker: "Entry",
      title: "China visa requirements for US citizens in 2026",
      href: "/journal/china-visa-requirements-us-citizens-2026",
    },
    {
      kicker: "Timing",
      title: "The best time to visit China",
      href: "/journal/best-time-to-visit-china",
    },
  ],
  faqTitle: "Questions before you go",
  closingTitle: "Tell us when you would like to go.",
} as const;

/** 详情页首屏需要横构图大图；只在列表照片不适合全屏时覆盖。 */
export const detailHeroPhotos: Record<string, CuratedPhoto> = {
  "first-china-beautifully-paced": heroPhoto,
  "beijing-great-wall-private-5-day-tour": {
    src: "/tours/beijing-unhurried/great-wall-sunrise.webp",
    alt: "The Great Wall above a sea of cloud at sunrise",
    position: "center 40%",
  },
};

export const detailCopy = {
  summaryLead: "At a glance",
  routeTitle: "The route",
  daysTitle: "Day by day",
  daysNote:
    "A considered starting point. Every day can be reshaped around your dates, pace and interests.",
  includedTitle: "What is and isn't included",
  includedNote: "Know what the journey covers before you decide.",
  whyTitle: "How a private journey with AVIORA works",
  reviewsTitle: "From travelers who have been",
  relatedTitle: "You might also like",
  guidesTitle: "Before you decide",
  faqTitle: "Questions travelers ask",
  bookingTitle: "Plan this journey",
  bookingNote:
    "A specialist in China replies on WhatsApp, normally within a day. No payment, no obligation.",
  why: [
    {
      title: "Private from start to finish",
      body: "Your own guide and driver. No fixed departures and no shared coach.",
    },
    {
      title: "No obligatory shopping stops",
      body: "Shopping is added only when you ask for it.",
    },
    {
      title: "One accountable China team",
      body: "The people who design your route are the people who answer when plans change.",
    },
    {
      title: "Confirmed in writing",
      body: "Hotels, transport, inclusions and price are set out before you commit.",
    },
  ],
} as const;
