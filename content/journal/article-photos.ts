/**
 * 本模块职责：为博客文章按主题挑选一张贴题的精选首图。
 * 输入：文章 slug、分类与标签。
 * 输出：站内已有的高清照片（路径、说明、尺寸、焦点）。
 * 不负责：文章正文配图（审计要求正文内不放图片块）。
 * 关键规则：只用已核对过的照片；实用类文章（签证、带药）用克制的氛围图，不硬配不贴题的景点。
 */

export type ArticlePhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

const photos = {
  greatWall: {
    src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp",
    alt: "The Great Wall winding over the mountains near Beijing at sunrise",
    width: 1920,
    height: 1080,
    objectPosition: "center 48%",
  },
  temple: {
    src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-reflection.webp",
    alt: "The Temple of Heaven in Beijing reflected in still water at dawn",
    width: 1446,
    height: 1920,
    objectPosition: "center 38%",
  },
  forbiddenCity: {
    src: "/tours/beijing-unhurried/forbidden-city.webp",
    alt: "The Forbidden City in Beijing seen from above in autumn light",
    width: 1800,
    height: 2400,
    objectPosition: "center 40%",
  },
  summerPalace: {
    src: "/tours/beijing-unhurried/summer-palace.webp",
    alt: "The Summer Palace above Kunming Lake in Beijing",
    width: 1441,
    height: 1920,
    objectPosition: "center 55%",
  },
  xian: {
    src: "/tours/xian-beijing-private-journey/day-01.webp",
    alt: "Xi'an's Bell Tower against a pink evening sky",
    width: 1600,
    height: 1067,
  },
  shanghai: {
    src: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
    alt: "Shanghai's skyline glowing at sunset above the Huangpu River",
    width: 1439,
    height: 1920,
    objectPosition: "center 45%",
  },
  panda: {
    src: "/tours/chengdu-pandas/chengdu-hero-panda.webp",
    alt: "Giant pandas eating bamboo at a Chengdu sanctuary",
    width: 2000,
    height: 1335,
  },
  tea: {
    src: "/tours/chengdu-pandas/detail-tea.webp",
    alt: "A gaiwan of green tea on a Chengdu teahouse table",
    width: 2000,
    height: 2667,
    objectPosition: "center 55%",
  },
  chongqing: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chongqing-07.webp",
    alt: "Chongqing's riverfront towers lit at dusk",
    width: 1600,
    height: 1067,
  },
  zhangjiajie: {
    src: "/tours/shanghai-zhangjiajie-floating-peaks/hero-floating-peaks.webp",
    alt: "Sandstone pillars rising through mist in Zhangjiajie",
    width: 1280,
    height: 1920,
    objectPosition: "center 40%",
  },
  jiuzhaigou: {
    src: "/tours/chengdu-pandas-jiuzhaigou/hero.webp",
    alt: "A turquoise lake framed by autumn forest in Jiuzhaigou",
    width: 1600,
    height: 1067,
  },
  yunnan: {
    src: "/tours/luxury-yunnan-private-tour/jade-dragon.jpg",
    alt: "Jade Dragon Snow Mountain rising above Lijiang in Yunnan",
    width: 1920,
    height: 864,
    objectPosition: "58% center",
  },
  liRiver: {
    src: "/tours/guilin-yangshuo-li-river-day-tour/02-li-river-cruise-rainy-karst.webp",
    alt: "Limestone peaks rising from the Li River in rain and mist",
    width: 1600,
    height: 1067,
  },
} satisfies Record<string, ArticlePhoto>;

const rules: Array<[RegExp, ArticlePhoto]> = [
  [/great-wall|mutianyu|badaling|jinshanling/, photos.greatWall],
  [/terracotta|xian/, photos.xian],
  [/forbidden-city|beijing/, photos.forbiddenCity],
  [/shanghai|pudong|yu-garden|bund/, photos.shanghai],
  [/panda|chengdu|leshan|sichuan/, photos.panda],
  [/chongqing/, photos.chongqing],
  [/zhangjiajie|tianmen/, photos.zhangjiajie],
  [/jiuzhaigou/, photos.jiuzhaigou],
  [/yunnan|dali|lijiang|shangri/, photos.yunnan],
  [/guilin|yangshuo|li-river/, photos.liRiver],
  [/senior|older|slow-paced|parents|walking|easier/, photos.summerPalace],
  [/tea|food|halal|muslim|allerg|dietary/, photos.tea],
];

const ambient = [photos.temple, photos.greatWall, photos.summerPalace, photos.shanghai];

function hash(value: string) {
  let total = 0;
  for (const char of value) total = (total * 31 + char.charCodeAt(0)) % 9973;
  return total;
}

export function getArticlePhoto(slug: string): ArticlePhoto {
  const match = rules.find(([pattern]) => pattern.test(slug));
  return match ? match[1] : ambient[hash(slug) % ambient.length];
}
