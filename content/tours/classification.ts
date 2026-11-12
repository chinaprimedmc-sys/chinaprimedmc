/**
 * 产品归属与存在理由的唯一来源。
 * 每个公开产品只有一个主子类；子类决定大类，客群与兴趣仍是辅助标签。
 * 归类依据现有路线，不代表已实施优化提案中的日程、供应或价格调整。
 */
import type { publicJourneySlugs } from "@/content/tours/catalog";

export type PublicJourneySlug = (typeof publicJourneySlugs)[number];
export type JourneyTier = "day" | "signature" | "tailor-made-example";

export const journeyTierDefinitions = {
  day: {
    label: "Day Experiences",
    labelZh: "一日体验",
    descriptionZh: "已经确定城市，需要一天的私人接送、票务与讲解。",
  },
  signature: {
    label: "Signature Journeys",
    labelZh: "多日主题线路",
    descriptionZh: "已有明确路线，按兴趣、同行人和节奏选择，再调整日期与配置。",
  },
  "tailor-made-example": {
    label: "Tailor-Made Examples",
    labelZh: "专门需求定制",
    descriptionZh: "饮食礼拜、静修或商务议程先于观光路线，现有行程作为设计范例。",
  },
} as const satisfies Record<JourneyTier, { label: string; labelZh: string; descriptionZh: string }>;

export const journeyCategories = {
  "private-day": { tier: "day", label: "Private day experience", labelZh: "城市与景区一日体验" },
  "first-china": { tier: "signature", label: "First China journey", labelZh: "中国初访经典" },
  family: { tier: "signature", label: "Family journey", labelZh: "亲子家庭旅行" },
  "unhurried-china": { tier: "signature", label: "Unhurried China", labelZh: "成熟旅客慢游" },
  "regional-culture": {
    tier: "signature",
    label: "Regional culture journey",
    labelZh: "区域文化深游",
  },
  "nature-landscapes": { tier: "signature", label: "Nature & landscapes", labelZh: "自然山水旅行" },
  "muslim-friendly": {
    tier: "tailor-made-example",
    label: "Muslim-friendly tailor-made journey",
    labelZh: "穆斯林友好定制",
  },
  wellness: {
    tier: "tailor-made-example",
    label: "Private wellness retreat",
    labelZh: "静修与身心休憩",
  },
  business: {
    tier: "tailor-made-example",
    label: "Tailor-made business travel",
    labelZh: "商务差旅定制",
  },
} as const satisfies Record<string, { tier: JourneyTier; label: string; labelZh: string }>;

export type JourneyCategoryId = keyof typeof journeyCategories;

export type JourneyClassification = {
  category: JourneyCategoryId;
  /** 内部用于判断该产品为什么值得单独保留。 */
  purposeZh: string;
  audienceZh: string;
  /** 与邻近产品的边界，或归类时仍须注意的现有产品问题。 */
  boundaryZh: string;
};

export const journeyClassification: Record<PublicJourneySlug, JourneyClassification> = {
  "guilin-yangshuo-longji-private-5-day-tour": {
    category: "nature-landscapes",
    purposeZh: "补齐广西五天住宿、龙脊梯田、漓江转场与阳朔乡村的完整区域产品。",
    audienceZh: "情侣、家庭及将广西加入中国长线的私人小团。",
    boundaryZh:
      "与漓江单日游区分：四晚住宿、独立龙脊日、完整乡村日及抵离接送；公共船并非包船，竹筏与骑行不默认包含。",
  },
  "private-mutianyu-great-wall-day-tour": {
    category: "private-day",
    purposeZh: "替已在北京的客人解决长城往返、入园、上山方式和步行路线的一日协调。",
    audienceZh: "已有北京住宿，希望单独安排长城一天的旅客。",
    boundaryZh: "与北京五天线的区别是只服务长城一天，不含住宿与完整北京行程。",
  },
  "private-shanghai-day-tour-guide-driver": {
    category: "private-day",
    purposeZh: "用一天串联上海老城、外滩、江面与街区，省去首次游览的交通和票务协调。",
    audienceZh: "已有上海住宿、只有一天或需要城市入门讲解的旅客。",
    boundaryZh: "公共轮渡不等于私人游船；夜游与延长服务另行确认。",
  },
  "private-xian-terracotta-warriors-day-tour": {
    category: "private-day",
    purposeZh: "让已在西安的客人在私人接送与讲解下理解兵马俑，并有余力认识旧城。",
    audienceZh: "已有西安行程，需要兵马俑核心游览日的旅客。",
    boundaryZh: "不承担两城衔接；与西安北京六天线的旅行范围不同。",
  },
  "private-chengdu-panda-day-tour-early-morning": {
    category: "private-day",
    purposeZh: "协调熊猫基地早访、门票和现场路线，再接上较慢的成都市区体验。",
    audienceZh: "已有成都住宿，希望安排熊猫一天的家庭、情侣与初访客。",
    boundaryZh: "不是私人动物接触；与成都五天线的区别是无需购买完整住宿与区域行程。",
  },
  "guilin-yangshuo-li-river-cruise-private-day-tour": {
    category: "private-day",
    purposeZh: "把漓江公共游船、私人接送、行李与阳朔或桂林终点接成一个完整服务。",
    audienceZh: "已到桂林，想乘船去阳朔或完成桂林往返的旅客。",
    boundaryZh: "这是公共游船配私人地面服务，不是包船或多日桂林度假产品。",
  },
  "beijing-xian-shanghai-private-10-day-tour": {
    category: "first-china",
    purposeZh: "为第一次来华且时间较短的客人提供三座经典城市的私人全程安排。",
    audienceZh: "想在十天内认识北京、西安和上海的初访客。",
    boundaryZh:
      "分类按三城初访的主要购买理由；现有长者慢游及早归承诺仍需核验，与十二天线的文案区分尚待实施。",
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    category: "first-china",
    purposeZh: "为想一次看经典城市与熊猫的初访客增加成都，连接现代城市、饮食、考古和长城。",
    audienceZh: "接受更多转场与一定步行强度、想兼顾熊猫的初访旅客。",
    boundaryZh: "实际为上海起、北京结束的十二天线路；金山岭有强度，不因覆盖家庭就归为亲子专线。",
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    category: "family",
    purposeZh: "围绕儿童参与、家庭房间、活动与转场设计经典中国和熊猫体验，减轻家长协调负担。",
    audienceZh: "以六至十七岁儿童为中心规划旅行的家庭，也可评估祖孙同行。",
    boundaryZh: "家庭专属活动与协调是主产品，而非仅因为四城路线适合儿童；祖辈需求仍需单独核对。",
  },
  "china-at-an-easier-pace-12-day-private-tour": {
    category: "unhurried-china",
    purposeZh: "用更多住宿与恢复空间，让偏爱慢节奏的旅客在三座经典城市间从容旅行。",
    audienceZh: "成熟旅客、慢游情侣，以及协助父母安排行程的成年子女。",
    boundaryZh: "购买理由是节奏与恢复，不是多看城市；慢游不等于无台阶或轮椅无障碍。",
  },
  "beijing-great-wall-private-5-day-tour": {
    category: "regional-culture",
    purposeZh: "在一个北京住宿基地完成帝都文化与长城，提供完整抵离和城市游览安排。",
    audienceZh: "只有四五天、专注北京或需要北京独立行程段的旅客。",
    boundaryZh: "与长城日游相比包含多日及住宿；司机兼接待者与独立导游配置需在报价中区分。",
  },
  "chengdu-pandas-sichuan-table": {
    category: "regional-culture",
    purposeZh: "以一个成都住宿基地深入熊猫、茶馆和四川餐桌，乐山作为可选延伸。",
    audienceZh: "希望慢一点认识成都生活的家庭、饮食爱好者与区域旅行者。",
    boundaryZh: "熊猫是入口，四川生活方式是多住四晚的理由；不因可选乐山而视为搬酒店。",
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    category: "regional-culture",
    purposeZh: "为短假期或长行程中的一段连接两座古都，以兵马俑和长城为核心。",
    audienceZh: "时间有限、明确偏爱历史地标的旅客。",
    boundaryZh: "不是覆盖全国的初访全景线；北京关键日偏挤，未重排前不以轻松慢游主推。",
  },
  "luxury-yunnan-private-tour": {
    category: "regional-culture",
    purposeZh: "沿茶马古道用地方住宿和白族、纳西及藏地文化体验深入云南。",
    audienceZh: "重视地方文化、精品住宿与高原景观的情侣、朋友及再访旅客。",
    boundaryZh: "风景是重要组成，但文化走廊与住宿体验是主线；含香格里拉海拔与多次换酒店。",
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    category: "nature-landscapes",
    purposeZh: "把成都熊猫与九寨沟湖泊森林组合起来，并管理区域交通和景区衔接。",
    audienceZh: "想将野生动物观察与山地景观结合的自然爱好者。",
    boundaryZh: "与成都五天线的区别是进入山地；七天当地结束，回成都需核对延伸安排。",
  },
  "shanghai-zhangjiajie-floating-peaks": {
    category: "nature-landscapes",
    purposeZh: "让从上海进出的旅客以城市与山峰对比体验张家界，并保留回上海的缓冲夜。",
    audienceZh: "想在较短多日行程中看到张家界、接受景区步行的旅客。",
    boundaryZh: "上海是门户及对比章节，张家界是主购买理由；不是低强度城市慢游。",
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    category: "nature-landscapes",
    purposeZh: "把熊猫、川渝饮食夜景和张家界山峰连接成西南城市与自然体验。",
    audienceZh: "偏爱川渝地方生活和山景、愿意多次转场的旅客。",
    boundaryZh: "与上海张家界相比多了川渝生活章节和开放日；不承担北京西安式经典初访覆盖。",
  },
  "muslim-friendly-china-tour-great-wall-desert-stars": {
    category: "muslim-friendly",
    purposeZh: "让饮食、礼拜与隐私要求成为路线设计依据，结合经典中国、回族文化与沙漠。",
    audienceZh: "需要逐项核对清真饮食和礼拜安排的家庭、情侣及私人团。",
    boundaryZh: "不是通用线附加清真标签；需求、餐饮依据、航班和沙漠服务均按日期确认。",
  },
  "qingcheng-mountain-private-wellness-retreat-10-day": {
    category: "wellness",
    purposeZh: "以连续山地住宿、太极、茶和留白时间，服务以休憩为目的的私人旅行。",
    audienceZh: "希望长住休息、接受少景点节奏的情侣和私人旅客。",
    boundaryZh: "不是成都观光加一天温泉，也不是医疗疗养；酒店、导师与疗程需按日期确认。",
  },
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": {
    category: "business",
    purposeZh: "围绕不可移动的会议、展会与供应商日程协调住宿、车辆和双语协助。",
    audienceZh: "赴广州深圳的高管、创业者、采购商与小型商务团队。",
    boundaryZh: "不是休闲观光团；文化活动服从工作议程，口译任务与跨境服务单独确认。",
  },
};

export function getJourneyClassification(slug: PublicJourneySlug) {
  const assignment = journeyClassification[slug];
  const category = journeyCategories[assignment.category];
  return {
    ...assignment,
    categoryLabel: category.label,
    categoryLabelZh: category.labelZh,
    tier: category.tier,
  };
}
