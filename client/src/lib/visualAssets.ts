export type VisualAssetRole =
  | "hero"
  | "banner"
  | "editorial"
  | "storytelling"
  | "destination-cover"
  | "gallery"
  | "background"
  | "lifestyle"
  | "b2b"
  | "about"
  | "cta"
  | "footer";

export type VisualAsset = {
  id: string;
  src: string;
  alt: string;
  role: VisualAssetRole;
  page: string;
  story: string;
  focalPoint?: string;
};

export const visualAssets = {
  homeHero: {
    id: "home-hero-zhangjiajie-peaks",
    src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park.jpg",
    alt: "Zhangjiajie sandstone peaks at cinematic scale for a private China journey.",
    role: "hero",
    page: "Home",
    story: "The immediate emotional promise: China can feel otherworldly, cinematic, and worth the long-haul flight.",
    focalPoint: "center center",
  },
  homeRiverScene: {
    id: "home-editorial-li-river",
    src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg",
    alt: "Li River karst landscape for a slow private China journey.",
    role: "editorial",
    page: "Home",
    story: "A softer breath after the opening: China as landscape, silence, and rhythm.",
    focalPoint: "center center",
  },
  homeStoryJiuzhaigou: {
    id: "home-story-jiuzhaigou-water",
    src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou.jpg",
    alt: "Jiuzhaigou blue lakes for nature-focused private China travel.",
    role: "storytelling",
    page: "Home",
    story: "Nature that feels vivid enough for families and first-time travelers to remember.",
  },
  homeStoryHuangshan: {
    id: "home-story-huangshan-clouds",
    src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg",
    alt: "Huangshan granite peaks and clouds for private East China travel.",
    role: "storytelling",
    page: "Home",
    story: "Classical Chinese mountain drama, used as a magazine-style visual pause.",
  },
  homeStoryCrescentLake: {
    id: "home-story-dunhuang-crescent-lake",
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
    alt: "Dunhuang Crescent Lake desert light for Silk Road China travel.",
    role: "storytelling",
    page: "Home",
    story: "The desert chapter: China as Silk Road, light, sand, and distance.",
  },
  homeStoryWestLake: {
    id: "home-story-west-lake-hangzhou",
    src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
    alt: "West Lake Hangzhou for slow private China travel.",
    role: "storytelling",
    page: "Home",
    story: "A quiet cultural image between larger landscapes.",
  },
  homeStoryNamtso: {
    id: "home-story-namtso-tibet",
    src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-namtso.jpg",
    alt: "Namtso Lake Tibet for highland private China travel.",
    role: "storytelling",
    page: "Home",
    story: "High altitude, space, and spiritual scale without using the same Potala image elsewhere.",
  },
  homeNightScene: {
    id: "home-background-hongya-cave",
    src: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
    alt: "Chongqing Hongya Cave night view for private China city travel.",
    role: "background",
    page: "Home",
    story: "China after dark: energy, food, neon, and cyber-city atmosphere.",
  },
  homeControlScene: {
    id: "home-banner-great-wall",
    src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg",
    alt: "Great Wall ridgeline for private China trip planning confidence.",
    role: "banner",
    page: "Home",
    story: "Trust and operational control behind a famous landmark.",
  },
  homeFinalCta: {
    id: "home-cta-meili-snow-mountain",
    src: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg",
    alt: "Meili Snow Mountain Yunnan for a cinematic private China journey.",
    role: "cta",
    page: "Home",
    story: "A final mountain image that leaves the traveler wanting the next conversation.",
  },
  journeysHeroPanda: {
    id: "journeys-hero-real-giant-panda",
    src: "/editorial/china-prime-dmc-real-giant-panda-family-china-trip.webp",
    alt: "Real giant panda for family-friendly private China trips.",
    role: "hero",
    page: "Trips",
    story: "Trips begin with a real emotional hook: the animal families actually ask for.",
    focalPoint: "center center",
  },
  journeysClassicIcon: {
    id: "journeys-classic-forbidden-city",
    src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city.jpg",
    alt: "Forbidden City Beijing for classic private China trips.",
    role: "destination-cover",
    page: "Trips",
    story: "Classic China as imperial architecture rather than repeating the Great Wall.",
  },
  journeysFamilyDemand: {
    id: "journeys-family-chimelong-safari",
    src: "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-chimelong-safari-park.jpg",
    alt: "Chimelong Safari Park for family-friendly private China travel.",
    role: "destination-cover",
    page: "Trips",
    story: "Family travel beyond a panda cliche, with a different visual role.",
  },
  journeysSoftAdventure: {
    id: "journeys-soft-adventure-tianmen",
    src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg",
    alt: "Tianmen Mountain Zhangjiajie for soft-adventure China trips.",
    role: "destination-cover",
    page: "Trips",
    story: "Adventure without making the trip feel extreme.",
  },
  journeysSilkRoad: {
    id: "journeys-silk-road-kashgar",
    src: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg",
    alt: "Kashgar old city for Silk Road and Muslim-friendly China travel.",
    role: "destination-cover",
    page: "Trips",
    story: "Human-scale Silk Road atmosphere and Muslim heritage.",
  },
  journeysCta: {
    id: "journeys-cta-yarlung-tsangpo",
    src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-yarlung-tsangpo-grand-canyon.jpg",
    alt: "Yarlung Tsangpo Grand Canyon for custom private China trip planning.",
    role: "cta",
    page: "Trips",
    story: "A large-scale landscape for the final route-planning prompt.",
  },
  destinationsHero: {
    id: "destinations-hero-longji-rice-terraces",
    src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-longji-rice-terraces.jpg",
    alt: "Longji Rice Terraces for understanding where to go in China.",
    role: "hero",
    page: "Destinations",
    story: "A map page should open with a landscape that makes regional choice feel emotional, not technical.",
  },
  destinationsExecutionBanner: {
    id: "destinations-execution-wu-gorge",
    src: "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-wu-gorge.jpg",
    alt: "Wu Gorge Yangtze River for complex China route execution.",
    role: "banner",
    page: "Destinations",
    story: "Operational confidence expressed through a river corridor.",
  },
  privateHero: {
    id: "private-tours-hero-heavenly-lake",
    src: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-heavenly-lake-of-tian-shan.jpg",
    alt: "Heavenly Lake of Tian Shan for private custom China tours.",
    role: "hero",
    page: "Private Tours",
    story: "Private design opens with space, calm, and premium distance from standard itineraries.",
  },
  privateFirstTime: {
    id: "private-first-time-gubei-water-town",
    src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-gubei-water-town.jpg",
    alt: "Gubei Water Town for first-time private China tours.",
    role: "lifestyle",
    page: "Private Tours",
    story: "First-time China shown as atmosphere, not only monuments.",
  },
  privateFamily: {
    id: "private-family-shanghai-disney",
    src: "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-shanghai-disneyland.jpg",
    alt: "Shanghai Disneyland for family-friendly private China planning.",
    role: "lifestyle",
    page: "Private Tours",
    story: "Family travel with a different image from the panda hero.",
  },
  privateMuslim: {
    id: "private-muslim-shapotou",
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-shapotou.jpg",
    alt: "Shapotou desert landscape for Muslim-friendly China private tours.",
    role: "lifestyle",
    page: "Private Tours",
    story: "Muslim-friendly and Silk Road travel expressed through desert scale.",
  },
  privateWomen: {
    id: "private-women-french-concession",
    src: "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-shanghai-french-concession.jpg",
    alt: "Shanghai French Concession for women-friendly private China travel.",
    role: "lifestyle",
    page: "Private Tours",
    story: "A softer, walkable, design-led city image.",
  },
  privateRouteRhythm: {
    id: "private-banner-huanglong",
    src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-huanglong-scenic-and-historic-interest-area.jpg",
    alt: "Huanglong scenic pools for private China nature travel.",
    role: "banner",
    page: "Private Tours",
    story: "The route rhythm section needs texture, water, and natural color.",
  },
  privateExtension: {
    id: "private-editorial-kunming-stone-forest",
    src: "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-kunming-stone-forest.jpg",
    alt: "Kunming Stone Forest for private Southwest China travel.",
    role: "editorial",
    page: "Private Tours",
    story: "An extension image with a different geological language from Guilin.",
  },
  privateFinal: {
    id: "private-cta-songzanlin",
    src: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-songzanlin-monastery.jpg",
    alt: "Songzanlin Monastery Shangri-La for private Yunnan travel inspiration.",
    role: "cta",
    page: "Private Tours",
    story: "A quiet cultural close to the private-planning page.",
  },
  aboutHero: {
    id: "about-hero-temple-of-heaven",
    src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-temple-of-heaven.jpg",
    alt: "Temple of Heaven Beijing for China Prime DMC trust and company story.",
    role: "hero",
    page: "About",
    story: "Trust through order, heritage, and calm composition.",
  },
  aboutPlanning: {
    id: "about-planning-xidi",
    src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-xidi.jpg",
    alt: "Xidi village Anhui for thoughtful private China itinerary planning.",
    role: "about",
    page: "About",
    story: "Planning before promising, shown as architectural detail and restraint.",
  },
  aboutRoute: {
    id: "about-route-shanghai-tower",
    src: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-shanghai-tower.jpg",
    alt: "Shanghai Tower for China gateway and route planning.",
    role: "about",
    page: "About",
    story: "Modern gateway logic and route clarity.",
  },
  aboutGround: {
    id: "about-ground-shennong-stream",
    src: "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-shennong-stream.jpg",
    alt: "Shennong Stream for China local delivery and route operations.",
    role: "about",
    page: "About",
    story: "Ground details and local delivery, told through a human-scale river scene.",
  },
  aboutSupport: {
    id: "about-support-dali",
    src: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-dali-city.jpg",
    alt: "Dali old city for China travel support and route planning.",
    role: "about",
    page: "About",
    story: "A warm cultural image for the promise that travelers are not left alone.",
  },
  contactHero: {
    id: "contact-hero-the-bund",
    src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg",
    alt: "The Bund Shanghai for private China trip planning consultation.",
    role: "hero",
    page: "Contact",
    story: "The contact page should feel global, polished, and easy to trust.",
  },
  contactCta: {
    id: "contact-cta-yangshuo",
    src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-yangshuo-county.jpg",
    alt: "Yangshuo countryside for private China trip planning inspiration.",
    role: "cta",
    page: "Contact",
    story: "A softer final image that makes asking for help feel inviting.",
  },
  blogHero: {
    id: "blog-hero-zhangye-danxia",
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg",
    alt: "Zhangye Danxia landscape for China travel journal insights.",
    role: "hero",
    page: "Blog",
    story: "The journal opens with color, geology, and curiosity.",
  },
  footerCta: {
    id: "footer-cta-lujiazui",
    src: "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-lujiazui.jpg",
    alt: "Lujiazui Shanghai skyline for China Prime DMC final planning prompt.",
    role: "footer",
    page: "Footer",
    story: "A global final note for travelers ready to begin.",
  },
} satisfies Record<string, VisualAsset>;

export const visualAssetInventory = Object.values(visualAssets);
