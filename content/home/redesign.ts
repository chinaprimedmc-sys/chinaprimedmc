/**
 * 新版首页的单一内容源。
 * 只放置品牌表达和导航逻辑，价格与行程数据仍从 tours catalog 读取。
 */

export const homeLocalSupport = {
  eyebrow: "Tailor-Made Journeys",
  title: "Looking for something more personal?",
  description: "Tell us where you want to go. We'll shape the journey around you.",
  href: "/start-planning?source=homepage-local-support",
  cta: "Plan My Journey",
} as const;

export const homeJourneyModes = [
  {
    title: "Single-city journeys",
    description: "Explore one city with time, context and your own local guide.",
    href: "/tours?scope=single-city#journey-catalog",
    image: "/home/journeys/single-city-spring-palace.jpg",
    imageAlt: "The Summer Palace glowing beside the lake in Beijing",
  },
  {
    title: "Multi-city journeys",
    description: "Connect several destinations through one carefully planned route.",
    href: "/tours?scope=multi-city#journey-catalog",
    image: "/home/journeys/luxury-shanghai-skyline.jpg",
    imageAlt: "Shanghai's Lujiazui skyline at blue hour",
  },
  {
    title: "Luxury China journeys",
    description: "Exceptional stays, private experiences and more time at your own pace.",
    href: "/tours?collection=luxury#journey-catalog",
    image: "/home/journeys/multi-city-mountain-retreat.jpg",
    imageAlt: "A mountain retreat overlooking China's dramatic peaks",
  },
] as const;

export const homeJourneyInterests = [
  {
    title: "Giant Pandas",
    places: "Chengdu",
    href: "/tours?experience=pandas#journey-catalog",
    image: "/home/journeys-interest-pandas.jpg",
    imageAlt: "A giant panda resting in a tree",
    imagePosition: "center 40%",
  },
  {
    title: "Regional food",
    places: "Chengdu · Xi'an · Shanghai",
    href: "/tours?need=muslim-friendly#journey-catalog",
    image: "/home/journeys-interest-food.jpg",
    imageAlt: "Beijing-style pastries presented in traditional boxes",
    imagePosition: "center 60%",
  },
  {
    title: "Living culture",
    places: "Beijing · Yunnan · Shanghai",
    href: "/tours?experience=local-life#journey-catalog",
    image: "/home/journeys-interest-culture.jpg",
    imageAlt: "A Chinese opera performer in traditional costume",
    imagePosition: "center 38%",
  },
  {
    title: "The Silk Road",
    places: "Xi'an · Ningxia",
    href: "/tours?experience=silk-road#journey-catalog",
    image: "/home/journeys-interest-silk-road.jpg",
    imageAlt: "A camel caravan crossing the dunes of the Silk Road",
    imagePosition: "center 52%",
  },
  {
    title: "Heritage and history",
    places: "Beijing · Xi'an",
    href: "/tours?experience=ancient-china#journey-catalog",
    image: "/home/journeys-interest-heritage.jpg",
    imageAlt: "Terracotta warriors illuminated in Xi'an",
    imagePosition: "center 48%",
  },
  {
    title: "Dramatic landscapes",
    places: "Zhangjiajie · Guilin · Yunnan",
    href: "/tours?experience=scenery#journey-catalog",
    image: "/home/journeys-interest-landscapes.jpg",
    imageAlt: "Karst mountains and illuminated boats at sunset in Guilin",
    imagePosition: "center 52%",
  },
] as const;

export const homePrivateTourPromises = [
  {
    title: "100% Shopping-Free",
    description: "No compulsory shops, sales detours or commission-led stops.",
  },
  {
    title: "Your Own Private Guide",
    description: "A dedicated local guide for your privately guided days.",
  },
  {
    title: "Private Vehicle & Driver",
    description: "Private road transport for scheduled touring and transfers.",
  },
] as const;

export const homeOperatingStandards = [
  {
    number: "01",
    title: "Your Own Local Guide",
    description: "A dedicated English-speaking guide for every privately guided day.",
    imageBrief: "A private guide in conversation with AVIORA guests",
    image: "/home/standard/private-local-guide.png",
    imageAlt: "An AVIORA private local guide speaking with international guests",
    imagePosition: "center center",
  },
  {
    number: "02",
    title: "Your Own Driver And Vehicle",
    description: "Comfortable private transport for touring and transfers.",
    imageBrief: "A private driver welcoming guests beside their vehicle",
    image: "/home/standard/private-vehicle-driver.png",
    imageAlt: "Guests seated comfortably inside their private vehicle in China",
    imagePosition: "center center",
  },
  {
    number: "03",
    title: "No Compulsory Shopping",
    description: "No forced shops, sales stops or commission-led detours.",
    imageBrief: "Guests enjoying an experience-led day without shopping stops",
    image: "/home/standard/no-shopping-stops.png",
    imageAlt: "International guests enjoying a private tea experience with a local host",
    imagePosition: "center center",
  },
  {
    number: "04",
    title: "One Local Team",
    description: "The same China-based team supports you from planning to return.",
    imageBrief: "The China-based operations team coordinating a guest journey",
    image: "/home/standard/china-based-team.png",
    imageAlt: "The AVIORA China-based travel team planning private journeys",
    imagePosition: "center center",
  },
] as const;

export const homeTravelerNeeds = [
  {
    title: "Muslim-Friendly Travel",
    description: "Halal dining, prayer-aware timing and thoughtful local support.",
    href: "/tours?experience=food#journey-catalog",
    image: "/home/traveler-needs/muslim-friendly-travel.jpg",
    imageWidth: 1350,
    imageHeight: 1800,
    alt: "Muslim travelers visiting the Great Wall of China",
  },
  {
    title: "Women’s China Travel",
    description: "Private guiding, well-located stays and support throughout.",
    href: "/tours?need=women-traveler-support#journey-catalog",
    image: "/home/traveler-needs/women-friendly-travel.jpg",
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Women travelers experiencing Chinese culture in traditional dress",
  },
  {
    title: "Slower-paced China Travel",
    description: "A gentler pace, fewer hotel changes and private transfers.",
    href: "/tours?need=slower-pacing#journey-catalog",
    image: "/home/traveler-needs/senior-friendly-travel.jpg",
    imageWidth: 1350,
    imageHeight: 1800,
    alt: "International travelers enjoying a cultural experience in Beijing",
  },
  {
    title: "Family China Travel",
    description: "Family-ready stays, easy pacing and experiences for all ages.",
    href: "/tours?need=child-friendly#journey-catalog",
    image: "/home/traveler-needs/family-friendly-travel.jpg",
    imageWidth: 1350,
    imageHeight: 1800,
    alt: "A family enjoying a private visit to the Great Wall of China",
  },
] as const;

export const homeEditorialStories = [
  {
    title: "Look Closer.",
    description: "Early mornings, old neighbourhoods and the details most itineraries pass by.",
    image: {
      src: "/home/editorial/beijing-roof-detail.jpg",
      alt: "A richly painted traditional Chinese ceiling in Beijing",
      objectPosition: "center center",
    },
  },
  {
    title: "Stay For The Story.",
    description:
      "Regional flavours, local makers and tables where food becomes part of the journey.",
    image: {
      src: "/home/editorial/chinese-cooking-experience.jpg",
      alt: "International guests learning to prepare Chinese food with a local host",
      objectPosition: "center center",
    },
  },
  {
    title: "Take Part.",
    description: "Meet the people who keep China's living traditions moving forward.",
    image: {
      src: "/home/editorial/jingdezhen-pottery.jpg",
      alt: "A traveler shaping clay during a pottery experience in Jingdezhen",
      objectPosition: "center center",
    },
  },
  {
    title: "Go Beyond The Expected.",
    description: "Mountain landscapes and slower days that change the scale of the journey.",
    image: {
      src: "/home/editorial/zhangjiajie-travelers.jpg",
      alt: "International travelers taking in the sandstone peaks of Zhangjiajie",
      objectPosition: "center 62%",
    },
  },
  {
    title: "Make It Yours.",
    description:
      "A private route shaped around your pace, your interests and the people travelling with you.",
    image: {
      src: "/home/editorial/tibet-mountains-potala.jpg",
      alt: "The Potala Palace beneath the mountains in Tibet",
      objectPosition: "center center",
    },
  },
] as const;

export const homePlanningGuides = [
  {
    title: "Best Places To Visit China First Time",
    href: "/journal/best-places-to-visit-china-first-time",
    category: "First Journey",
  },
  {
    title: "How Many Days Do You Need In China?",
    href: "/journal/how-many-days-in-china-7-10-14-day-itineraries",
    category: "Trip Length",
  },
  {
    title: "Private China Tour Costs Explained",
    href: "/journal/private-china-tour-cost-2026",
    category: "Budget Planning",
  },
  {
    title: "The Best Time To Visit China",
    href: "/journal/best-time-to-visit-china",
    category: "When To Travel",
  },
  {
    title: "China Visa Requirements For US Citizens",
    href: "/journal/china-visa-requirements-us-citizens-2026",
    category: "Entry Planning",
  },
  {
    title: "A Two-Week China Itinerary For First-Time Visitors",
    href: "/journal/two-week-china-itinerary-first-time",
    category: "Route Planning",
  },
] as const;

export const homeFaqs = [
  {
    question: "Are AVIORA journeys private or group tours?",
    answer:
      "AVIORA designs private journeys for your own party. Your guides, road transport and daily planning are arranged around you; public flights, trains, cruises and ticketed venues remain shared services where applicable.",
  },
  {
    question: "Can the published itineraries be changed?",
    answer:
      "Yes. Published tours are starting points. Dates, pace, hotels, room needs, experiences and route details can be adjusted before the proposal is confirmed.",
  },
  {
    question: "What do the published starting prices mean?",
    answer:
      "Each tour states its pricing unit and basis. Most multi-city prices are per person based on four guests sharing two rooms. Your written proposal reflects your actual dates, party size, hotels and inclusions.",
  },
  {
    question: "Who operates the journey in China?",
    answer:
      "AVIORA is the international-facing brand of Youyouhui (Guangzhou) International Travel Service Co., Ltd., a China-registered operator licensed for inbound tourism business.",
  },
] as const;

export const featuredHomeJourneySlugs = [
  "beijing-xian-chengdu-shanghai-private-11-day-tour",
  "china-family-tour-with-pandas-12-day-private-tour",
  "luxury-yunnan-private-tour",
] as const;

export const featuredHomeJourneyCopy: Record<
  (typeof featuredHomeJourneySlugs)[number],
  {
    title: string;
    format: string;
    location: string;
    label: string;
    summary: string;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
      objectPosition: string;
    };
  }
> = {
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    title: "China's Essential Cities, Connected",
    format: "Multi-City Journey",
    location: "Beijing · Xi'an · Chengdu · Shanghai",
    label: "Best For A First Journey Across China",
    summary: "Beijing, Xi'an, Chengdu and Shanghai in one considered private route.",
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    title: "China With Pandas, Made Easy",
    format: "Family Journey",
    location: "Beijing · Xi'an · Chengdu · Shanghai",
    label: "Best For Families",
    summary: "China's essential sights, with child-aware pacing and the logistics handled.",
  },
  "luxury-yunnan-private-tour": {
    title: "Yunnan, Slowly And Beautifully",
    format: "Private Journey",
    location: "Dali · Shaxi · Lijiang · Shangri-La",
    label: "Best For A Slower China",
    summary: "Old trading roads, mountain light and thoughtful private hosting across Yunnan.",
  },
};
