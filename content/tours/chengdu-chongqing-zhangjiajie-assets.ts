import type { MediaAsset } from "@/types/component-library";

const basePath = "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour";

function image(prefix: string, index: number, alt: string): MediaAsset {
  return {
    src: `${basePath}/${prefix}-${String(index).padStart(2, "0")}.webp`,
    alt,
    width: 1600,
    height: 1067,
  };
}

function collection(prefix: string, alts: readonly string[]) {
  return alts.map((alt, index) => image(prefix, index + 1, alt));
}

export const heroImages = collection("hero", [
  "International travelers looking across Zhangjiajie's sandstone peaks in soft mountain light",
]);

export const chengduImages = collection("chengdu", [
  "Traditional Chengdu streets decorated for a seasonal celebration",
  "A historic courtyard tea house in central Chengdu",
  "Chengdu's modern skyline beneath a warm evening sky",
  "International visitors sharing covered-bowl tea with a local English-speaking guide",
  "A relaxed tea-house moment during a privately guided Chengdu journey",
  "Lakeside paths and everyday life inside Chengdu People's Park",
  "Traditional park architecture surrounded by greenery in Chengdu",
  "Local residents enjoying the unhurried atmosphere of Chengdu People's Park",
  "A lively Chengdu food street filled with regional flavors",
  "A giant panda eating bamboo at Chengdu Research Base",
  "A close view of a giant panda during an early Chengdu visit",
  "A young giant panda enjoying bamboo in Chengdu",
  "A giant panda resting among green foliage in Chengdu",
  "The timeworn atmosphere of a traditional Chengdu tea house on a rainy day",
  "Local tea-house life in an old Chengdu neighborhood",
  "A refined Sichuan dining table prepared with regional dishes",
  "Covered-bowl tea and a traditional performance in Chengdu People's Park",
  "Travelers enjoying sunshine and tea in Chengdu People's Park",
]);

export const chongqingImages = collection("chongqing", [
  "Chongqing's layered skyline during the blue hour",
  "Kuixinglou's illuminated traditional architecture in Chongqing",
  "The Yangtze River cableway crossing Chongqing's dramatic cityscape",
  "Contemporary Chongqing landmarks above the meeting of two rivers",
  "Chaotianmen and the Chongqing riverfront illuminated at night",
  "The Chongqing skyline reflected across the river after dark",
  "Raffles City rising above Chaotianmen in Chongqing",
  "Hongya Cave's stacked riverside architecture illuminated at night",
  "A closer evening view of Hongya Cave in Chongqing",
  "Street-level life across Chongqing's steep urban landscape",
  "A local perspective on Chongqing beyond its headline landmarks",
  "A Chongqing hotpot table overlooking the mountain city's lights",
  "Regional hotpot and a night view during a private Chongqing evening",
  "Hongya Cave seen from Qiansimen Bridge above the river",
  "Kuixinglou revealing Chongqing's surprising vertical levels",
  "A monorail passing through a building at Liziba in Chongqing",
  "Chongqing's high-rise neighborhoods built across steep hills",
  "A panoramic view of the mountain city's layered architecture",
  "Buddhist stone carvings at the UNESCO-listed Dazu Rock Carvings",
  "Sculptural detail at Dazu, an optional cultural day from Chongqing",
  "Chongqing's riverfront and Hongya Cave seen from an evening cruise",
]);

export const zhangjiajieImages = collection("zhangjiajie", [
  "A forest trail following the water through Golden Whip Stream in Zhangjiajie",
  "A quiet stretch of Golden Whip Stream beneath sandstone cliffs",
  "Travelers walking through the shaded valley at Golden Whip Stream",
  "The Bailong Elevator rising beside Zhangjiajie's sandstone pillars",
  "A view from the Bailong Elevator route toward Yuanjiajie's peaks",
  "Clear water and dense forest along Golden Whip Stream",
  "A wooden footbridge crossing the green valley at Golden Whip Stream",
  "A tranquil riverside path inside Zhangjiajie National Forest Park",
  "Tianmen Cave opening through the mountain above Zhangjiajie",
  "Clouds moving around the dramatic cliffs of Tianmen Mountain",
  "Wulingyuan's sandstone pillars appearing through mountain mist",
  "Layered peaks in the landscape that inspired Zhangjiajie's floating-mountain imagery",
  "Huangshizhai and the forested valleys of Wulingyuan",
  "Tianzi Mountain peaks rising above a sea of cloud",
  "Zhangjiajie's quartz-sandstone pillars emerging from morning mist",
  "A wide outlook across the sculpted peaks of Tianzi Mountain",
  "The Imperial Brush Peaks formation at Tianzi Mountain",
  "A cable car moving across Zhangjiajie's vertical sandstone landscape",
  "Zhangjiajie's floating-peak scenery framed for mountain photography",
  "Yuanjiajie's cliff-edge viewpoints on a clear day",
  "Families exploring Yuanjiajie and Tianzi Mountain at a considered pace",
  "A mountain trail from Zhangjiajie National Forest Park's south gate",
  "Sandstone pillars viewed from the Huangshizhai area",
  "Forest paths and mountain scenery near Huangshizhai",
  "A broad view across the southern section of Zhangjiajie National Forest Park",
  "The glass bridge spanning Zhangjiajie Grand Canyon after rain",
  "The mountain road and monumental cave at Tianmen Mountain",
]);

export const optionalImages = collection("optional", [
  "A cliffside cafe in Chongqing overlooking forest and distant mountains",
  "A quiet coffee terrace for an open afternoon in Chongqing",
  "A styled traditional costume portrait experience available by request in Chongqing",
]);

export const hotelImages = collection("hotel", [
  "A Zhangjiajie guest room with a view toward the surrounding mountains",
  "Mountain-facing accommodation atmosphere in the Zhangjiajie area",
  "A calm guest-room setting near Zhangjiajie's national park",
  "A warm contemporary guest room in central Chengdu",
  "Natural materials and a comfortable room style for a Chengdu stay",
  "A Chongqing suite overlooking the river and illuminated skyline",
  "A night view from an elevated Chongqing hotel room",
  "Conceptual mountain-hotel architecture shown as visual inspiration only",
  "Conceptual Zhangjiajie retreat imagery shown as visual inspiration only",
  "Conceptual cliffside accommodation imagery shown as visual inspiration only",
]);

export const serviceImages = collection("service", [
  "A modern China high-speed train used between Chengdu and Chongqing",
  "A CR400 high-speed train prepared for an intercity journey",
  "A spacious premium seat aboard a China high-speed train",
  "A private premium vehicle configured for a small traveling party",
  "Comfortable reclining seats inside a private touring vehicle",
  "A spacious vehicle interior selected around travelers and luggage",
]);

function requiredAsset(assets: MediaAsset[], index: number, label: string) {
  const asset = assets[index - 1];
  if (!asset) throw new Error(`Missing ${label} image ${index}.`);
  return asset;
}

export const chengduChongqingZhangjiajieAsset = {
  hero: { ...requiredAsset(heroImages, 1, "hero"), priority: true },
  chengduArrival: requiredAsset(chengduImages, 1, "Chengdu"),
  pandaMorning: requiredAsset(chengduImages, 12, "Chengdu"),
  chengduLife: requiredAsset(chengduImages, 4, "Chengdu"),
  chengduFood: requiredAsset(chengduImages, 16, "Chengdu"),
  rail: requiredAsset(serviceImages, 3, "service"),
  chongqingBlueHour: requiredAsset(chongqingImages, 1, "Chongqing"),
  chongqingCity: requiredAsset(chongqingImages, 17, "Chongqing"),
  chongqingOpenDay: requiredAsset(optionalImages, 1, "optional experience"),
  zhangjiajieArrival: requiredAsset(zhangjiajieImages, 15, "Zhangjiajie"),
  yuanjiajie: requiredAsset(zhangjiajieImages, 20, "Zhangjiajie"),
  goldenWhip: requiredAsset(zhangjiajieImages, 7, "Zhangjiajie"),
  zhangjiajieOpenDay: requiredAsset(zhangjiajieImages, 10, "Zhangjiajie"),
  departure: requiredAsset(serviceImages, 6, "service"),
  chengduHotel: requiredAsset(hotelImages, 4, "hotel"),
  chongqingHotel: requiredAsset(hotelImages, 6, "hotel"),
  zhangjiajieHotel: requiredAsset(hotelImages, 1, "hotel"),
  vehicle: requiredAsset(serviceImages, 5, "service"),
  dazu: requiredAsset(chongqingImages, 19, "Chongqing"),
  glassBridge: requiredAsset(zhangjiajieImages, 26, "Zhangjiajie"),
} satisfies Record<string, MediaAsset>;

export const chengduChongqingZhangjiajieGallery: MediaAsset[] = [
  ...heroImages,
  ...chengduImages,
  ...chongqingImages,
  ...zhangjiajieImages,
  ...optionalImages,
  ...hotelImages,
  ...serviceImages,
];

if (chengduChongqingZhangjiajieGallery.length !== 86) {
  throw new Error("The Chengdu, Chongqing and Zhangjiajie gallery must contain all 86 images.");
}
