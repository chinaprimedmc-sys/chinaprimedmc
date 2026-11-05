/**
 * 全国覆盖的内容源：一个枢纽页加 7 个大区页。
 * 输入：无。输出：枢纽页与各大区页的 ServicePageContent，以及各页展示的行程 slug。
 * 不负责：版式（features/service-pages）。
 * 关键规则：只写地理与景点的通用事实，不写具体价格、承诺或团队驻地；行程与目的地页链接必须指向站内真实页面。
 */
import type { ServicePageContent } from "@/content/services";

const whatsapp = "https://wa.me/8618027438191";
const hubPath = "/china-destinations";

export type CoverageRegionId =
  | "north-china"
  | "northeast-china"
  | "east-china"
  | "central-china"
  | "south-china"
  | "southwest-china"
  | "northwest-china";

type Place = {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

type Region = {
  id: CoverageRegionId;
  name: string;
  short: string;
  provinces: string;
  image?: string;
  alt?: string;
  answer: string;
  intro: string;
  places: Place[];
  journeys: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const regions: Region[] = [
  {
    id: "north-china",
    name: "North China",
    short: "Imperial capitals, the Great Wall and ancient walled towns",
    provinces: "Beijing, Tianjin, Hebei and Shanxi",
    image: "/home/beijing-forbidden-city.webp",
    alt: "The Forbidden City in Beijing seen from above in autumn light",
    answer:
      "North China is the seat of imperial China. Beijing holds the Forbidden City, the Temple of Heaven and the best-known sections of the Great Wall, and the region around it adds Tianjin's port-city architecture, the imperial retreat at Chengde and the walled old towns of Shanxi. It suits first-time visitors and anyone interested in China's history.",
    intro:
      "Most first trips to China begin here. The region reaches well beyond Beijing, and we plan it as a single private route or as the first chapter of a longer journey.",
    places: [
      {
        title: "Beijing",
        body: "The Forbidden City, the Temple of Heaven, the hutongs and the Great Wall, with enough time to understand what you are seeing.",
        href: "/destinations/beijing",
        linkLabel: "Beijing guide",
      },
      {
        title: "Chengde",
        body: "The Qing emperors' summer mountain resort and its surrounding temples, a UNESCO World Heritage site north of Beijing.",
      },
      {
        title: "Tianjin",
        body: "A port city with a distinctive mix of European-style architecture, a short high-speed rail ride from Beijing.",
      },
      {
        title: "Pingyao",
        body: "A fortified Ming-dynasty town in Shanxi whose old city walls and courtyards are a UNESCO World Heritage site.",
      },
      {
        title: "Datong",
        body: "The Yungang Grottoes and the Hanging Temple, two of the most remarkable Buddhist sites in northern China.",
      },
    ],
    journeys: [
      "beijing-great-wall-private-5-day-tour",
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      "private-mutianyu-great-wall-day-tour",
    ],
    faqs: [
      {
        question: "How many days do I need in North China?",
        answer:
          "Four to five days covers Beijing and the Great Wall at an unhurried pace. Add two or three days for Chengde, Pingyao or Datong. Our guide to Beijing itineraries and our tailor-made service explain how we sequence them.",
      },
      {
        question: "Can you plan a trip beyond Beijing?",
        answer:
          "Yes. We plan private routes across North China, including Chengde, Tianjin, Pingyao and Datong, and connect them to other regions by high-speed rail or private vehicle. Tell us your interests and we propose a route.",
      },
    ],
  },
  {
    id: "northeast-china",
    name: "Northeast China",
    short: "Winter ice festivals, Russian-era cities and wild landscapes",
    provinces: "Heilongjiang, Jilin and Liaoning",
    answer:
      "Northeast China is known for its long, cold winters and the ice and snow festival in Harbin, as well as for cities shaped by Russian and Manchu history, and for forests, mountains and the coastline near Dalian. It suits travelers who want somewhere different from the classic first-time route, especially in winter.",
    intro:
      "It is less visited than the classic first-time cities, which is part of its appeal. We plan it as a tailor-made route, because the best season depends on what you want to see.",
    places: [
      {
        title: "Harbin",
        body: "A city of Russian-influenced architecture, best known for its winter ice and snow festival.",
      },
      {
        title: "Shenyang",
        body: "The former Qing imperial capital before Beijing, with a palace complex that is a UNESCO World Heritage site.",
      },
      {
        title: "Changbai Mountain",
        body: "A volcanic mountain on the border with North Korea, with a crater lake and forests that are best seen in summer and autumn.",
      },
      {
        title: "Dalian",
        body: "A relaxed coastal city with sea views, beaches and fresh seafood.",
      },
    ],
    journeys: [],
    faqs: [
      {
        question: "When is the best time to visit Northeast China?",
        answer:
          "Winter is the signature season for ice and snow, and temperatures are very low. Summer and early autumn are better for mountains, forests and the coast. Tell us what you want to see and we advise on timing.",
      },
      {
        question: "Do you offer Signature Journeys here?",
        answer:
          "Not currently. We plan Northeast China as a tailor-made private trip, designed around your dates and interests, with your own guide and driver.",
      },
    ],
  },
  {
    id: "east-china",
    name: "East China",
    short: "Shanghai, classical gardens, water towns and the Yellow Mountains",
    provinces: "Shanghai, Jiangsu, Zhejiang and Anhui",
    image: "/home/shanghai-pudong-skyline.webp",
    alt: "Shanghai's skyline glowing at dusk above the Huangpu River",
    answer:
      "East China is the country's most prosperous region, built around Shanghai and the lower Yangtze. It combines modern skylines with the classical gardens of Suzhou, the West Lake at Hangzhou, canal towns such as Wuzhen, the Ming city of Nanjing and the granite peaks of the Yellow Mountains. It suits first-time visitors and travelers who want comfort, food and design.",
    intro:
      "Cities here are close together and well connected by high-speed rail, so a private route can cover several places without long transfers.",
    places: [
      {
        title: "Shanghai",
        body: "The Bund, the former French Concession and the Old City, and an easy first landing in modern China.",
        href: "/destinations/shanghai",
        linkLabel: "Shanghai guide",
      },
      {
        title: "Hangzhou",
        body: "West Lake, tea villages and temples, an easy day or two from Shanghai by high-speed rail.",
      },
      {
        title: "Suzhou",
        body: "Classical gardens and canals, several of which are UNESCO World Heritage sites.",
      },
      {
        title: "Wuzhen and the water towns",
        body: "Old canal towns of stone bridges and wooden houses near Shanghai and Hangzhou.",
      },
      {
        title: "Nanjing",
        body: "A former capital with a Ming-dynasty city wall, imperial tombs and a strong museum culture.",
      },
      {
        title: "Huangshan",
        body: "The Yellow Mountains in Anhui, known for granite peaks, pines and sea-of-cloud views.",
      },
    ],
    journeys: [
      "private-shanghai-day-tour-guide-driver",
      "beijing-xian-chengdu-shanghai-private-11-day-tour",
      "beijing-xian-shanghai-private-9-day-tour",
    ],
    faqs: [
      {
        question: "How far are Hangzhou and Suzhou from Shanghai?",
        answer:
          "Both are within roughly an hour by high-speed rail, so they work as day trips or as short stays added to a Shanghai stay. We plan the rail tickets and transfers for you.",
      },
      {
        question: "Can you combine East China with other regions?",
        answer:
          "Yes. Many private routes pair Shanghai with Beijing and Xi'an, or with Zhangjiajie and Chengdu. We design the order around your dates and the pace you prefer.",
      },
    ],
  },
  {
    id: "central-china",
    name: "Central China",
    short: "Sandstone peaks, Buddhist caves and the Yangtze",
    provinces: "Henan, Hubei and Hunan",
    image: "/home/zhangjiajie-national-forest.webp",
    alt: "Sandstone spires rising through Zhangjiajie National Forest Park",
    answer:
      "Central China sits along the middle Yangtze and the Yellow River. It includes the sandstone pillars of Zhangjiajie in Hunan, the Longmen Grottoes at Luoyang, the Shaolin Temple in Henan and the river city of Wuhan. It suits travelers who want dramatic scenery and deeper cultural history away from the usual first-trip cities.",
    intro:
      "Zhangjiajie is the region's best-known destination and combines well with Shanghai, Chengdu and Chongqing. The history-focused cities of Henan add depth to a longer trip.",
    places: [
      {
        title: "Zhangjiajie",
        body: "Sandstone pillars, cable cars and forest walks in Wulingyuan, the landscape that inspired floating mountains on screen.",
        href: "/destinations/zhangjiajie",
        linkLabel: "Zhangjiajie guide",
      },
      {
        title: "Fenghuang",
        body: "An old river town in western Hunan with stilted houses along the Tuo River.",
      },
      {
        title: "Luoyang",
        body: "One of China's ancient capitals, home to the Longmen Grottoes, a UNESCO World Heritage site.",
      },
      {
        title: "Dengfeng and Shaolin",
        body: "The Shaolin Temple and its pagoda forest in Henan, known for the history of Chinese martial arts.",
      },
      {
        title: "Wuhan",
        body: "A major river city on the Yangtze with the Yellow Crane Tower and a well-known food culture.",
      },
    ],
    journeys: [
      "shanghai-zhangjiajie-floating-peaks",
      "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    ],
    faqs: [
      {
        question: "Is Zhangjiajie suitable for older travelers?",
        answer:
          "Cable cars and elevators reduce the climbing, but the park still involves queues, steps and long hours outdoors. We plan the pace and routes accordingly. Our guide on where to stay in Zhangjiajie explains the options.",
      },
      {
        question: "Can you plan Henan's historic sites as part of a longer trip?",
        answer:
          "Yes. Luoyang and Dengfeng connect well with Xi'an and Beijing by high-speed rail. We design this as a tailor-made route.",
      },
    ],
  },
  {
    id: "south-china",
    name: "South China",
    short: "Karst landscapes, Cantonese food and tropical coast",
    provinces: "Guangxi, Guangdong, Fujian and Hainan",
    image: "/home/guilin-li-river.webp",
    alt: "Li River karst mountains and calm water near Guilin",
    answer:
      "South China combines the karst landscapes of Guilin and Yangshuo with the food and trading history of Guangzhou, the technology of Shenzhen, the island city of Xiamen and Fujian's earthen Tulou villages, and the tropical coast of Hainan. It suits travelers who want scenery, food and a slower, warmer pace.",
    intro:
      "The region is spread out, so we usually pair two or three places in one private route. Guilin works well as a day or as a longer stay.",
    places: [
      {
        title: "Guilin and Yangshuo",
        body: "The Li River, limestone peaks and countryside, best seen by cruise and bamboo raft.",
        href: "/tours/guilin-yangshuo-li-river-cruise-private-day-tour",
        linkLabel: "See the Li River day",
      },
      {
        title: "Guangzhou",
        body: "The home of Cantonese food, with markets, historic districts and a long trading heritage.",
        href: "/tours/guangzhou-shenzhen-tailor-made-business-tour-4-day",
        linkLabel: "See the Greater Bay tour",
      },
      {
        title: "Shenzhen",
        body: "China's technology and innovation hub, a few minutes from Hong Kong's border by rail.",
      },
      {
        title: "Xiamen and Gulangyu",
        body: "A coastal city and a car-free island of colonial-era houses, a UNESCO World Heritage site.",
      },
      {
        title: "Fujian Tulou",
        body: "Round earthen community buildings in Fujian's hills, recognized as a UNESCO World Heritage site.",
      },
      {
        title: "Hainan",
        body: "A tropical island province with beaches, resorts and a warm climate through the winter.",
      },
    ],
    journeys: ["guilin-yangshuo-li-river-cruise-private-day-tour"],
    faqs: [
      {
        question: "How long should I spend in Guilin and Yangshuo?",
        answer:
          "A single private day covers the Li River cruise and a Yangshuo finish. Two or three nights lets you add the rice terraces, bamboo rafting and village walks at a slower pace.",
      },
      {
        question: "Can you plan business and leisure together in the Greater Bay Area?",
        answer:
          "Yes. We run tailor-made Guangzhou and Shenzhen trips for business travelers and can add leisure days, with the same private guide and driver approach.",
      },
    ],
  },
  {
    id: "southwest-china",
    name: "Southwest China",
    short: "Pandas, Sichuan food, Yunnan's old towns and the Tibetan plateau",
    provinces: "Sichuan, Chongqing, Yunnan, Guizhou and Tibet",
    image: "/home/yunnan-lijiang-old-town.webp",
    alt: "Lijiang Old Town in Yunnan glowing at blue hour",
    answer:
      "Southwest China is the country's most varied region for landscape and culture. It includes Chengdu's giant pandas and Sichuan food, the hill city of Chongqing, the turquoise lakes of Jiuzhaigou, Yunnan's old towns and mountains, and the Tibetan plateau. It suits families, food lovers, nature travelers and anyone who wants a slower, more local side of China.",
    intro:
      "Chengdu is the usual gateway and pairs well with Chongqing and Zhangjiajie. Yunnan is a separate journey of its own, and Tibet needs permits we arrange in advance.",
    places: [
      {
        title: "Chengdu",
        body: "Giant pandas, teahouses and the Sichuan table, with a gentler rhythm that suits families.",
        href: "/destinations/chengdu",
        linkLabel: "Chengdu guide",
      },
      {
        title: "Chongqing",
        body: "A layered hill city on the Yangtze, known for its skyline at night and hotpot.",
        href: "/destinations/chongqing",
        linkLabel: "Chongqing guide",
      },
      {
        title: "Leshan",
        body: "The Giant Buddha carved into a cliff above the river, an easy extension from Chengdu.",
        href: "/destinations/leshan",
        linkLabel: "Leshan guide",
      },
      {
        title: "Jiuzhaigou",
        body: "A valley of turquoise lakes and waterfalls in northern Sichuan, best seen in autumn.",
        href: "/destinations/jiuzhaigou",
        linkLabel: "Jiuzhaigou guide",
      },
      {
        title: "Dali, Lijiang and Shangri-La",
        body: "Old towns, mountain light and tea-trading history across northwest Yunnan.",
        href: "/tours/luxury-yunnan-private-tour",
        linkLabel: "See the Yunnan journey",
      },
      {
        title: "Kunming",
        body: "The Yunnan capital, known for its mild climate and as a gateway to the province.",
      },
      {
        title: "Lhasa and Tibet",
        body: "The Potala Palace and monasteries on the high plateau. Visiting Tibet requires a travel permit arranged through a licensed operator, and altitude needs careful planning.",
      },
    ],
    journeys: [
      "chengdu-pandas-sichuan-table",
      "chengdu-pandas-jiuzhaigou-private-7-day-tour",
      "luxury-yunnan-private-tour",
      "china-family-tour-with-pandas-12-day-private-tour",
      "private-chengdu-panda-day-tour-early-morning",
    ],
    faqs: [
      {
        question: "Do I need a permit to visit Tibet?",
        answer:
          "Yes. Foreign visitors need a Tibet Travel Permit, which must be arranged through a licensed operator before you travel. We confirm what applies for your dates and nationality in your written quote.",
      },
      {
        question: "Is altitude a concern in Yunnan and Sichuan?",
        answer:
          "Parts of both reach considerable altitude, for example Shangri-La and Jiuzhaigou. We plan acclimatization and the order of stops accordingly. Our guide to Yunnan altitude explains what to expect.",
      },
    ],
  },
  {
    id: "northwest-china",
    name: "Northwest China",
    short: "The Silk Road, desert caves and the Terracotta Army",
    provinces: "Shaanxi, Gansu, Ningxia, Qinghai and Xinjiang",
    image: "/home/xian-terracotta-army.webp",
    alt: "Terracotta Army figures in formation near Xi'an",
    answer:
      "Northwest China is the old Silk Road. It begins in Xi'an with the Terracotta Army and the city wall, and continues through Gansu's Dunhuang and its Mogao Caves, the colored Danxia landscapes near Zhangye, Ningxia's desert and Hui Muslim culture, Qinghai's high lakes and Xinjiang's oasis towns. It suits history lovers, photographers and Muslim-friendly travel.",
    intro:
      "Xi'an is the gateway and works as a short stay or as the first stop on a longer Silk Road route. Distances beyond it are large, so we plan flights or private drives carefully.",
    places: [
      {
        title: "Xi'an",
        body: "The Terracotta Army, the city wall and the Muslim Quarter in China's ancient capital.",
        href: "/destinations/xian",
        linkLabel: "Xi'an guide",
      },
      {
        title: "Dunhuang",
        body: "The Mogao Caves and the Singing Sand Dunes at the western end of the Gansu corridor.",
      },
      {
        title: "Zhangye",
        body: "The Danxia landforms, with colored rock stripes best seen in good light.",
      },
      {
        title: "Ningxia and Yinchuan",
        body: "Desert landscapes, Hui Muslim culture and the Western Xia tombs, a core part of our Muslim-friendly journey.",
        href: "/tours/muslim-friendly-china-tour-great-wall-desert-stars",
        linkLabel: "See the Muslim-friendly journey",
      },
      {
        title: "Qinghai Lake",
        body: "A large high-altitude lake on the Tibetan plateau's edge, with grasslands and monasteries nearby.",
      },
      {
        title: "Xinjiang",
        body: "Oasis towns such as Turpan and Kashgar and a distinct Central Asian culture. Some areas have additional entry rules, which we confirm in your written quote.",
      },
    ],
    journeys: [
      "private-xian-terracotta-warriors-day-tour",
      "muslim-friendly-china-tour-great-wall-desert-stars",
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
    ],
    faqs: [
      {
        question: "Can you plan Muslim-friendly travel along the Silk Road?",
        answer:
          "Yes. Halal dining, prayer-aware timing and thoughtful local support are planned in from the start. Our Muslim-friendly journey runs from the Great Wall to the Ningxia desert. See our guide to Muslim-friendly private China travel.",
      },
      {
        question: "How do you handle the distances between Silk Road stops?",
        answer:
          "We combine domestic flights, high-speed rail and private drives depending on the stop, and plan the order so that long days are followed by easier ones.",
      },
    ],
  },
];

function buildRegionPage(region: Region): ServicePageContent {
  const path = `${hubPath}/${region.id}`;
  return {
    slug: region.id,
    path,
    metaTitle: `Private ${region.name} Tours with Your Own Guide and Driver | AVIORA`,
    metaDescription: `Private tours across ${region.provinces} with your own guide and driver, planned and run by AVIORA. Tailor-made routes, quoted in writing.`,
    breadcrumbName: region.name,
    breadcrumbParents: [{ name: "Destinations across China", path: hubPath }],
    hero: {
      eyebrow: `${region.name} · ${region.provinces}`,
      title: "Private journeys through",
      emphasis: `${region.name}.`,
      lede: `${region.short}. ${region.intro}`,
      image: region.image,
      alt: region.alt,
      primaryLabel: "Plan this region",
      secondary: { label: "See all of China", href: hubPath },
    },
    facts: [
      { value: String(region.places.length), label: "Destinations we plan here" },
      { value: "Private", label: "Your own guide and driver" },
      { value: "Tailor-made", label: "Or a Signature Journey where one exists" },
      { value: "In writing", label: "Quote confirmed before you pay" },
    ],
    answer: {
      kicker: "The region in brief",
      title: `Private travel in ${region.name}.`,
      paragraphs: [
        region.answer,
        `AVIORA plans and operates private tours throughout China. Our offices are in Beijing, Shanghai and Xi'an, and our routes reach every region, including ${region.name}.`,
      ],
    },
    places: [
      {
        id: "places",
        kicker: "Where we go",
        title: `Places in ${region.name}.`,
        intro: `A starting list. We build the route around the places and the pace you choose.`,
        items: region.places,
      },
    ],
    listing: region.journeys.length
      ? {
          id: "journeys",
          kicker: "Published journeys",
          title: `Signature Journeys that include ${region.name}.`,
          intro:
            "Each of these is private to your party. Open one to see the day-by-day plan, or use it as a starting point for a tailor-made trip.",
          note: "Every journey is priced individually. Your written proposal reflects your actual dates, party size, hotels and inclusions.",
        }
      : undefined,
    faqs: [
      ...region.faqs,
      {
        question: `Do you operate in ${region.name}, or only in your office cities?`,
        answer: `We operate throughout China. Our offices are in Beijing, Shanghai and Xi'an, and we plan private routes in ${region.name} as well as every other region. Share your dates and interests and we confirm the route, hotels, guide and driver in a written proposal.`,
      },
      {
        question: "How do I start planning?",
        answer:
          "Tell us your dates, who is traveling and what you would like to see, using the form on this page or WhatsApp. A China-based specialist replies, normally within a day, with a first idea of the route. No payment, no obligation.",
      },
    ],
    related: [
      { label: "All destinations across China", href: hubPath },
      {
        label: "Tailor-made tours",
        href: "/tailor-made-china-tours",
        note: "Designed around you across any region",
      },
      {
        label: "Signature journeys",
        href: "/fixed-itinerary-china-tours",
        note: "Proven private routes, adjusted to your party",
      },
      {
        label: "Private guide and driver",
        href: "/private-guide-and-driver-china",
        note: "Local help anywhere in China",
      },
      {
        label: "How to plan a private China trip",
        href: "/journal/how-to-plan-private-china-trip",
      },
    ],
    enquiry: {
      kicker: "Start planning",
      title: `Tell us when you would like to see ${region.name}.`,
      body: "Share a few details about your trip. A China-based specialist replies, normally within a day, with a first idea of the route. No payment, no obligation.",
      whatsappHref: `${whatsapp}?text=${encodeURIComponent(`Hello AVIORA, I would like to plan a private trip to ${region.name}.`)}`,
    },
  };
}

const hub: ServicePageContent = {
  slug: "china-destinations",
  path: hubPath,
  metaTitle: "Private China Tours Across Every Region of China | AVIORA",
  metaDescription:
    "AVIORA plans private tours throughout China, from the Great Wall to the Silk Road, Yunnan and Tibet. Offices in Beijing, Shanghai and Xi'an.",
  breadcrumbName: "Destinations across China",
  hero: {
    eyebrow: "Destinations across China",
    title: "All of China,",
    emphasis: "planned by one team.",
    lede: "From the Great Wall to the Silk Road, the karst rivers of the south and the high plateau of the west. We plan private routes in every region, not only where our offices are.",
    image: "/home/private-china-guide-great-wall-hero.webp",
    alt: "A private guide with travelers on the Great Wall near Beijing",
    primaryLabel: "Choose a region",
    secondary: { label: "Design my trip", href: "/tailor-made-china-tours" },
  },
  facts: [
    { value: "7 regions", label: "North, northeast, east, central, south, southwest, northwest" },
    { value: "Throughout China", label: "Not only our office cities" },
    { value: "Offices", label: "Beijing, Shanghai and Xi'an" },
    { value: "Private", label: "Your own guide and driver" },
  ],
  answer: {
    kicker: "Where we operate",
    title: "Private tours in every region of China.",
    paragraphs: [
      "AVIORA plans and operates private tours throughout China. Our offices are in Beijing, Shanghai and Xi'an, but our routes are not limited to those cities: we arrange hotels, a private guide, a private vehicle and domestic transport in every region listed below.",
      "Some places have a published Signature Journey, and others we design from a blank page. Either way you receive a written proposal with the route, the hotels and the price basis before you pay.",
    ],
  },
  places: regions.map((region) => ({
    id: region.id,
    kicker: region.provinces,
    title: region.name,
    intro: region.short + ".",
    items: [
      ...region.places.slice(0, 4).map((place) => ({
        title: place.title,
        body: place.body,
        href: place.href,
        linkLabel: place.linkLabel,
      })),
      {
        title: `More in ${region.name}`,
        body: `Every place we plan in ${region.name}, with ready-made routes and questions answered.`,
        href: `${hubPath}/${region.id}`,
        linkLabel: `See ${region.name}`,
      },
    ],
  })),
  faqs: [
    {
      question: "Do you only operate in Beijing, Shanghai and Xi'an?",
      answer:
        "No. Those are the cities where our offices are. We plan and operate private tours throughout China, across all seven regions listed on this page.",
    },
    {
      question: "Which regions can you plan?",
      answer:
        "North China, Northeast China, East China, Central China, South China, Southwest China and Northwest China, including Tibet and Xinjiang. Some areas need permits or have additional entry rules, which we confirm in your written quote.",
    },
    {
      question: "Do you cover Hong Kong, Macau or Taiwan?",
      answer:
        "This page covers mainland China. Tell us your plans and we confirm what we can arrange for your itinerary.",
    },
    {
      question: "Can I combine several regions in one trip?",
      answer:
        "Yes. Many private routes link two or three regions by high-speed rail or domestic flight, for example Beijing, Xi'an and Shanghai, or Chengdu and Zhangjiajie. We design the order around your dates and pace.",
    },
    {
      question: "Where do I start if I do not know where to go?",
      answer:
        "Start with what you want to experience: history, scenery, food, pandas or the Silk Road. Tell us, and we propose regions and a route. Our guide to the best places to visit in China for the first time also helps.",
    },
  ],
  related: [
    {
      label: "Tailor-made tours",
      href: "/tailor-made-china-tours",
      note: "Designed around you across any region",
    },
    {
      label: "Signature journeys",
      href: "/fixed-itinerary-china-tours",
      note: "Proven private routes, adjusted to your party",
    },
    {
      label: "Private day tours",
      href: "/private-china-day-tours",
      note: "One day with your own guide and driver",
    },
    {
      label: "Private guide and driver",
      href: "/private-guide-and-driver-china",
      note: "Local help anywhere in China",
    },
    { label: "Our destination guides", href: "/destinations" },
    {
      label: "Best places to visit in China for the first time",
      href: "/journal/best-places-to-visit-china-first-time",
    },
  ],
  enquiry: {
    kicker: "Start planning",
    title: "Tell us where you would like to go.",
    body: "Share a few details about your trip. A China-based specialist replies, normally within a day, with a first idea of the route. No payment, no obligation.",
    whatsappHref: `${whatsapp}?text=${encodeURIComponent("Hello AVIORA, I would like help choosing where to go in China.")}`,
  },
};

export const coverageRegionIds = regions.map((region) => region.id);
export const coverageRegions = regions.map((region) => ({
  id: region.id,
  name: region.name,
  short: region.short,
  provinces: region.provinces,
}));
export const coverageHub = hub;
export const coveragePages: Record<CoverageRegionId, ServicePageContent> = Object.fromEntries(
  regions.map((region) => [region.id, buildRegionPage(region)]),
) as Record<CoverageRegionId, ServicePageContent>;
export const coverageJourneySlugs: Record<CoverageRegionId, string[]> = Object.fromEntries(
  regions.map((region) => [region.id, region.journeys]),
) as Record<CoverageRegionId, string[]>;
