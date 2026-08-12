import type { MediaAsset } from "@/types/component-library";

function image(src: string, alt: string, width = 1600, height = 1067): MediaAsset {
  return { src, alt, width, height };
}

const firstChina = "/tours/first-china-beautifully-paced";
const xianBeijing = "/tours/xian-beijing-private-journey";
const southwest = "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour";
const chengdu = "/tours/chengdu-pandas";
const jiuzhaigou = "/tours/chengdu-pandas-jiuzhaigou";

export const destinationGuideAssets: Record<string, { hero: MediaAsset; gallery: MediaAsset[] }> = {
  beijing: {
    hero: image(
      `${firstChina}/beijing-great-wall-sunrise-hero.webp`,
      "The Great Wall crossing the mountains near Beijing in warm evening light",
      1920,
      1080,
    ),
    gallery: [
      image(
        `${firstChina}/beijing-forbidden-city-moat.webp`,
        "The Forbidden City wall and moat beneath a clear Beijing sky",
        1440,
        1920,
      ),
      image(
        `${firstChina}/beijing-temple-of-heaven-reflection.webp`,
        "The Temple of Heaven reflected in water during a Beijing visit",
        1446,
        1920,
      ),
      image(
        "/tours/beijing-unhurried/hutong-life.webp",
        "Everyday courtyard and hutong life in central Beijing",
        1499,
        2248,
      ),
      image(
        `${firstChina}/beijing-great-wall-wide.webp`,
        "International visitors walking together on the Great Wall near Beijing",
        1920,
        1280,
      ),
    ],
  },
  xian: {
    hero: image(
      `${xianBeijing}/day-01.webp`,
      "Xi'an City Wall and Yongning Gate glowing after rain",
    ),
    gallery: [
      image(`${xianBeijing}/day-02.webp`, "Terracotta Warriors standing in formation near Xi'an"),
      image(`${xianBeijing}/day-03.webp`, "Xi'an's Tang-inspired city lights after dark"),
      image(
        `${firstChina}/xian-terracotta-army-group.webp`,
        "International visitors learning about the Terracotta Army near Xi'an",
        1920,
        1440,
      ),
      image(
        "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour/photo-58.webp",
        "Xi'an's ancient city wall beneath a red evening sky",
      ),
    ],
  },
  shanghai: {
    hero: image(
      `${firstChina}/shanghai-huangpu-sunset.webp`,
      "Shanghai's Pudong skyline across the Huangpu River at sunset",
      1439,
      1920,
    ),
    gallery: [
      image(
        `${firstChina}/shanghai-street-food-group.webp`,
        "International visitors tasting local food in a Shanghai neighborhood",
        1440,
        1920,
      ),
      image(
        `${firstChina}/shanghai-bicycle-ride.webp`,
        "Travelers exploring Shanghai's neighborhood streets by bicycle",
        1440,
        1920,
      ),
      image(
        `${firstChina}/shanghai-yuyuan-group.webp`,
        "Travelers outside traditional architecture near Yu Garden in Shanghai",
        1440,
        1920,
      ),
      image(
        `${firstChina}/shanghai-bund-night.webp`,
        "The historic Bund illuminated beside the Huangpu River in Shanghai",
        1440,
        1920,
      ),
    ],
  },
  chengdu: {
    hero: image(`${southwest}/chengdu-03.webp`, "Chengdu's skyline beneath a warm evening sky"),
    gallery: [
      image(
        `${southwest}/chengdu-04.webp`,
        "International visitors sharing covered-bowl tea with a Chengdu guide",
      ),
      image(`${southwest}/chengdu-10.webp`, "A giant panda eating bamboo in Chengdu"),
      image(`${southwest}/chengdu-09.webp`, "A lively Chengdu food street"),
      image(`${southwest}/chengdu-16.webp`, "A Sichuan dining table prepared in Chengdu"),
    ],
  },
  chongqing: {
    hero: image(`${southwest}/chongqing-01.webp`, "Chongqing's layered skyline at blue hour"),
    gallery: [
      image(`${southwest}/chongqing-03.webp`, "The Yangtze River cableway crossing Chongqing"),
      image(`${southwest}/chongqing-12.webp`, "A Chongqing hotpot table above the city lights"),
      image(
        `${southwest}/chongqing-15.webp`,
        "Kuixinglou revealing the surprising vertical levels of Chongqing",
      ),
      image(
        `${southwest}/chongqing-16.webp`,
        "Chongqing's monorail passing through a building at Liziba",
      ),
    ],
  },
  leshan: {
    hero: image(
      `${chengdu}/day-leshan.webp`,
      "The Leshan Giant Buddha beside the river",
      2000,
      2667,
    ),
    gallery: [
      image(
        `${chengdu}/route-leshan.webp`,
        "The Leshan Giant Buddha viewed from below",
        1080,
        1440,
      ),
      image(`${chengdu}/day-food.webp`, "A Sichuan food experience with a local guide", 2000, 2667),
    ],
  },
  jiuzhaigou: {
    hero: image(`${jiuzhaigou}/hero.webp`, "Autumn forest around a turquoise Jiuzhaigou lake"),
    gallery: [
      image(`${jiuzhaigou}/day-04.webp`, "Summer mountain lake and forest near Jiuzhaigou"),
      image(`${jiuzhaigou}/day-05.webp`, "Clear turquoise water in Jiuzhaigou National Park"),
      image(`${jiuzhaigou}/day-06.webp`, "Autumn colors reflected in a Jiuzhaigou lake"),
      image(`${jiuzhaigou}/day-07.webp`, "Alpine valley scenery in the Jiuzhaigou region"),
    ],
  },
  zhangjiajie: {
    hero: image(
      `${southwest}/zhangjiajie-15.webp`,
      "Zhangjiajie's sandstone pillars in mountain mist",
    ),
    gallery: [
      image(`${southwest}/zhangjiajie-01.webp`, "Golden Whip Stream beneath Zhangjiajie's cliffs"),
      image(
        `${southwest}/zhangjiajie-18.webp`,
        "A cable car crossing Zhangjiajie's sandstone landscape",
      ),
      image(
        `${southwest}/zhangjiajie-20.webp`,
        "Yuanjiajie's cliff-edge viewpoints on a clear day",
      ),
      image(
        "/tours/shanghai-zhangjiajie-floating-peaks/tianmen-mountain-cave.webp",
        "The monumental Tianmen Cave above Zhangjiajie City",
      ),
    ],
  },
};
