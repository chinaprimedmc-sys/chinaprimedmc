import type { MediaAsset } from "@/types/component-library";

const tourImage = (src: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/first-china-beautifully-paced/${src}`,
  alt,
  width,
  height,
});

const chengduImage = (src: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/chengdu-pandas/${src}`,
  alt,
  width,
  height,
});

const shanghaiZhangjiajieImage = (
  src: string,
  alt: string,
  width: number,
  height: number,
): MediaAsset => ({
  src: `/tours/shanghai-zhangjiajie-floating-peaks/${src}`,
  alt,
  width,
  height,
});

export const firstChinaAsset = {
  beijingGreatWallSunriseHero: tourImage(
    "beijing-great-wall-sunrise-hero.jpg",
    "The Great Wall winding across mountain ridges near Beijing in warm evening light",
    1920,
    1080,
  ),
  beijingForbiddenCityMoat: tourImage(
    "beijing-forbidden-city-moat.webp",
    "The Forbidden City outer wall and moat in Beijing beneath a bright sky",
    1440,
    1920,
  ),
  beijingTempleOfHeavenReflection: tourImage(
    "beijing-temple-of-heaven-reflection.webp",
    "The Hall of Prayer for Good Harvests reflected in the Temple of Heaven water in Beijing",
    1446,
    1920,
  ),
  beijingTempleOfHeavenMorning: tourImage(
    "beijing-temple-of-heaven-morning.webp",
    "The Hall of Prayer for Good Harvests at the Temple of Heaven in Beijing",
    1446,
    1920,
  ),
  beijingTempleOfHeavenCorridor: tourImage(
    "beijing-temple-of-heaven-corridor.webp",
    "The Temple of Heaven Hall of Prayer seen beside a red corridor in Beijing",
    1446,
    1920,
  ),
  beijingTempleOfHeavenClose: tourImage(
    "beijing-temple-of-heaven-close.webp",
    "A close view of the Hall of Prayer for Good Harvests at the Temple of Heaven",
    1461,
    1920,
  ),
  beijingForbiddenCityLion: tourImage(
    "beijing-forbidden-city-lion.webp",
    "A stone lion and colorful palace roofs inside the Forbidden City in Beijing",
    1280,
    1920,
  ),
  beijingGreatWallWide: tourImage(
    "beijing-great-wall-wide.webp",
    "The Great Wall winding through green hills near Beijing",
    1920,
    1280,
  ),
  beijingGreatWallGroup: tourImage(
    "beijing-great-wall-group-portrait.webp",
    "Travelers gathered on a Great Wall watchtower near Beijing",
    1280,
    1920,
  ),
  beijingGreatWallCouple: tourImage(
    "beijing-great-wall-couple.webp",
    "Two travelers beside the Great Wall and wooded hills near Beijing",
    1280,
    1920,
  ),
  beijingGreatWallSolo: tourImage(
    "beijing-great-wall-solo.webp",
    "A traveler standing beside the Great Wall near Beijing",
    1280,
    1920,
  ),
  beijingTempleOfHeavenCostumeEncounter: tourImage(
    "beijing-temple-of-heaven-costume-encounter.webp",
    "Travelers in traditional-style costumes beside a colorful historic wall in Beijing",
    1440,
    1920,
  ),
  beijingTempleOfHeavenCostumeWalk: tourImage(
    "beijing-temple-of-heaven-costume-walk.webp",
    "Two travelers in traditional-style costumes walking through a Beijing park",
    1440,
    1920,
  ),
  beijingTempleOfHeavenCeiling: tourImage(
    "beijing-temple-of-heaven-ceiling.webp",
    "Ornate painted ceiling details inside the Temple of Heaven in Beijing",
    1280,
    1920,
  ),
  xianTerracottaGroup: tourImage(
    "xian-terracotta-army-group.webp",
    "Travelers posing beside Terracotta Army figures in Xi'an",
    1920,
    1440,
  ),
  xianTerracottaPit: tourImage(
    "xian-terracotta-army-pit.webp",
    "Rows of Terracotta Army figures in an excavation pit near Xi'an",
    1440,
    1920,
  ),
  xianTerracottaPortrait: tourImage(
    "xian-terracotta-army-portrait.webp",
    "A traveler standing among Terracotta Army figures in Xi'an",
    1440,
    1920,
  ),
  shanghaiWaterfrontGroup: tourImage(
    "shanghai-waterfront-group.webp",
    "Travelers gathered beside a Shanghai waterfront with the Pudong skyline behind them",
    1920,
    1440,
  ),
  shanghaiBundNight: tourImage(
    "shanghai-bund-night.webp",
    "The Bund historic buildings illuminated beside the Huangpu River in Shanghai",
    1440,
    1920,
  ),
  shanghaiPudongSkyline: tourImage(
    "shanghai-pudong-skyline.webp",
    "Shanghai Pudong skyscrapers in clear daylight",
    1440,
    1920,
  ),
  shanghaiHuangpuSunset: tourImage(
    "shanghai-huangpu-sunset.webp",
    "Shanghai Pudong skyline and a boat on the Huangpu River at sunset",
    1439,
    1920,
  ),
  shanghaiSkyscrapersAtNight: tourImage(
    "shanghai-skyscrapers-at-night.webp",
    "Shanghai skyscrapers illuminated at night beneath flowering branches",
    1440,
    1920,
  ),
  shanghaiYuyuanGroup: tourImage(
    "shanghai-yuyuan-group.webp",
    "Travelers outside a traditional-style building near Yu Garden in Shanghai",
    1440,
    1920,
  ),
  shanghaiBicycleRide: tourImage(
    "shanghai-bicycle-ride.webp",
    "Travelers with bicycles on a neighborhood ride in Shanghai",
    1440,
    1920,
  ),
  shanghaiStreetFoodGroup: tourImage(
    "shanghai-street-food-group.webp",
    "Travelers sharing street food on a Shanghai neighborhood walk",
    1440,
    1920,
  ),
  shanghaiStreetFoodMen: tourImage(
    "shanghai-street-food-men.webp",
    "Two travelers trying street food in a Shanghai neighborhood",
    1440,
    1920,
  ),
  shanghaiMarketVisit: tourImage(
    "shanghai-market-visit.webp",
    "Travelers looking at fresh produce in a Shanghai neighborhood market",
    1440,
    1920,
  ),
  shanghaiTempleAndModernCity: tourImage(
    "shanghai-temple-and-modern-city.webp",
    "A traditional Shanghai temple framed by modern city buildings",
    1440,
    1920,
  ),
  shanghaiPudongCoupleNight: tourImage(
    "shanghai-pudong-couple-night.webp",
    "Two travelers beside the illuminated Shanghai Pudong skyline at night",
    1440,
    1920,
  ),
} satisfies Record<string, MediaAsset>;

export const chengduAsset = {
  heroPanda: chengduImage(
    "chengdu-hero-panda.png",
    "A giant panda resting among bamboo near Chengdu",
    6016,
    4016,
  ),
  heroCity: chengduImage(
    "chengdu-hero-city.png",
    "A quiet cultural landscape near Chengdu",
    4256,
    2832,
  ),
  pandaMorning: chengduImage(
    "day-panda-01.png",
    "Giant pandas during a quiet morning visit near Chengdu",
    3024,
    4032,
  ),
  pandaDetail: chengduImage(
    "day-panda-02.png",
    "A close view of a giant panda in Chengdu",
    3024,
    4032,
  ),
  tea: chengduImage("day-tea.png", "Tea being served in Chengdu's People's Park", 1920, 2560),
  food: chengduImage("day-food.png", "A local food moment with a Chengdu guide", 3024, 4032),
  leshan: chengduImage("day-leshan.png", "The Leshan Giant Buddha beside the river", 3024, 4032),
  rail: chengduImage(
    "day-rail.png",
    "China's high-speed rail ready for an onward journey",
    1536,
    1024,
  ),
  guide: chengduImage(
    "guide.png",
    "An English-speaking guide during a Chengdu journey",
    2316,
    3088,
  ),
  spice: chengduImage(
    "detail-spice.png",
    "Sichuan pepper and spices for a Chengdu meal",
    1661,
    2560,
  ),
  car: chengduImage(
    "detail-car.png",
    "A comfortable private vehicle for Chengdu travel",
    3024,
    4032,
  ),
  carInterior: chengduImage(
    "detail-car-02.png",
    "The interior of a comfortable private vehicle for Chengdu travel",
    3024,
    4032,
  ),
  teaDetail: chengduImage(
    "detail-tea.png",
    "A traditional covered tea bowl in Chengdu",
    3024,
    4032,
  ),
  routeLeshan: chengduImage(
    "route-leshan.png",
    "The Leshan Giant Buddha viewed from below",
    1080,
    1440,
  ),
  cityGalleryOne: chengduImage(
    "gallery-city-01.png",
    "An atmospheric evening scene during a Chengdu journey",
    2815,
    3755,
  ),
  cityGalleryTwo: chengduImage(
    "gallery-city-02.png",
    "A local cultural scene in Chengdu",
    3024,
    4032,
  ),
  cityGalleryThree: chengduImage(
    "gallery-city-03.png",
    "A quiet Chengdu scene after dark",
    3024,
    4032,
  ),
  teaGalleryOne: chengduImage(
    "gallery-tea-01.png",
    "A covered tea bowl in Chengdu's People's Park",
    1920,
    2560,
  ),
  teaGalleryTwo: chengduImage(
    "gallery-tea-02.png",
    "Tea house life in Chengdu's People's Park",
    1920,
    2560,
  ),
  teaGalleryThree: chengduImage(
    "gallery-tea-03.png",
    "A relaxed tea house moment in Chengdu",
    1920,
    2560,
  ),
} satisfies Record<string, MediaAsset>;

export const shanghaiZhangjiajieAsset = {
  hero: shanghaiZhangjiajieImage(
    "hero-floating-peaks.webp",
    "Quartz-sandstone pillars rising above the forest in Zhangjiajie",
    1280,
    1920,
  ),
  shanghaiDusk: shanghaiZhangjiajieImage(
    "shanghai-skyline-dusk.webp",
    "Shanghai's Pudong skyline glowing beside the Huangpu River at dusk",
    1236,
    1920,
  ),
  shanghaiNight: shanghaiZhangjiajieImage(
    "shanghai-pudong-night.webp",
    "Shanghai's illuminated Pudong skyline seen across the Huangpu River",
    1440,
    1920,
  ),
  shanghaiBund: shanghaiZhangjiajieImage(
    "shanghai-bund-clocktower.webp",
    "Historic architecture and the Customs House clock tower on Shanghai's Bund",
    1441,
    1920,
  ),
  wulingyuan: shanghaiZhangjiajieImage(
    "wulingyuan-peaks.webp",
    "Travelers looking across the sandstone peak landscape of Wulingyuan",
    1440,
    1920,
  ),
  glassBridge: shanghaiZhangjiajieImage(
    "zhangjiajie-glass-bridge.webp",
    "The glass bridge spanning Zhangjiajie Grand Canyon",
    1440,
    1920,
  ),
  goldenWhipStream: shanghaiZhangjiajieImage(
    "golden-whip-stream.webp",
    "The forest and clear water along Golden Whip Stream in Zhangjiajie",
    1920,
    1440,
  ),
  tianmenCave: shanghaiZhangjiajieImage(
    "tianmen-mountain-cave.webp",
    "A dramatic mountain opening and sky at Tianmen Mountain in Zhangjiajie",
    1179,
    1609,
  ),
  tianmenCableway: shanghaiZhangjiajieImage(
    "tianmen-cableway.webp",
    "Cable cars traveling above the forested slopes near Tianmen Mountain",
    1440,
    1920,
  ),
  privateMpv: shanghaiZhangjiajieImage(
    "private-mpv.webp",
    "A spacious private MPV prepared for airport transfers and touring",
    1440,
    1920,
  ),
} satisfies Record<string, MediaAsset>;
