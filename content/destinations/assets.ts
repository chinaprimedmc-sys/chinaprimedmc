import type { MediaAsset } from "@/types/component-library";

export const destinationAsset = {
  beijingForbiddenCity: {
    src: "/home/beijing-forbidden-city.jpg",
    alt: "The Forbidden City in Beijing at soft morning light",
    width: 1920,
    height: 1200,
    objectPosition: "50% 48%",
  },
  beijingForbiddenCityWide: {
    src: "/home/beijing-forbidden-city-1400.webp",
    alt: "Imperial palace roofs inside the Forbidden City in Beijing",
    width: 1400,
    height: 875,
    objectPosition: "50% 48%",
  },
  shanghaiSkyline: {
    src: "/home/shanghai-pudong-skyline.jpg",
    alt: "Shanghai Pudong skyline at dusk",
    width: 1920,
    height: 1080,
    objectPosition: "50% 45%",
  },
  chengduPanda: {
    src: "/home/chengdu-panda.jpg",
    alt: "A giant panda in Chengdu",
    width: 1920,
    height: 1200,
    objectPosition: "54% 42%",
  },
  chengduTeaHouse: {
    src: "/home/chengdu-tea-house.jpg",
    alt: "A traditional tea house experience in Chengdu",
    width: 1920,
    height: 1200,
    objectPosition: "50% 48%",
  },
  guilinRiver: {
    src: "/home/guilin-li-river.jpg",
    alt: "Li River karst scenery near Guilin",
    width: 1920,
    height: 1200,
    objectPosition: "50% 50%",
  },
  jiuzhaigouLake: {
    src: "/home/jiuzhaigou-five-flower-lake.jpg",
    alt: "Turquoise Five Flower Lake in Jiuzhaigou",
    width: 1920,
    height: 1200,
    objectPosition: "50% 44%",
  },
  xianTerracotta: {
    src: "/home/xian-terracotta-army.jpg",
    alt: "Terracotta Army figures in Xi'an",
    width: 1400,
    height: 927,
    objectPosition: "50% 48%",
  },
  yunnanLijiang: {
    src: "/home/yunnan-lijiang-old-town.webp",
    alt: "Traditional rooftops in Lijiang Old Town, Yunnan",
    width: 1400,
    height: 875,
    objectPosition: "50% 52%",
  },
  zhangjiajieForest: {
    src: "/home/zhangjiajie-national-forest.jpg",
    alt: "Sandstone pillar forest in Zhangjiajie",
    width: 1920,
    height: 1200,
    objectPosition: "52% 38%",
  },
} satisfies Record<string, MediaAsset>;
