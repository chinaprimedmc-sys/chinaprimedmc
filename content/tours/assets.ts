import type { MediaAsset } from "@/types/component-library";

const tourImage = (src: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/first-china-beautifully-paced/${src}`,
  alt,
  width,
  height,
});

export const firstChinaAsset = {
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
