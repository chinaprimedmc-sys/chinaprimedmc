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
    provinces: "Beijing, Tianjin, Hebei, Shanxi and Inner Mongolia",
    image: "/home/beijing-forbidden-city.webp",
    alt: "The Forbidden City in Beijing seen from above in autumn light",
    answer:
      "North China is the seat of imperial China. Beijing holds the Forbidden City, the Temple of Heaven and the best-known sections of the Great Wall, and the region around it adds Tianjin's port-city architecture, the imperial retreat at Chengde and the walled old towns of Shanxi. It suits first-time visitors and anyone interested in China's history.",
    intro:
      "Many first trips begin in Beijing. Shanxi adds distinct temple and merchant-city histories, while Hohhot introduces another religious and regional context. Inner Mongolia extends much farther than one city-and-grassland excursion; choose its actual destinations and travel days separately.",
    places: [
      {
        title: "Mount Wutai",
        body: "A living Buddhist landscape with selected Taihuai temples, higher terraces and outlying timber-architecture routes treated as different cultural and physical choices.",
        href: "/destinations/wutai-mountain",
        linkLabel: "Mount Wutai temples, routes and hotel guide",
      },
      {
        title: "Beijing",
        body: "The Forbidden City, the Temple of Heaven, the hutongs and the Great Wall, with enough time to understand what you are seeing.",
        href: "/destinations/beijing",
        linkLabel: "Beijing guide",
      },
      {
        title: "Tangshan",
        body: "Kailuan industrial heritage, ceramics and thoughtful earthquake remembrance, with the Eastern Qing Tombs planned as a separate road day.",
        href: "/destinations/tangshan",
        linkLabel: "Tangshan industry, ceramics and hotel guide",
      },
      {
        title: "Beidaihe",
        body: "A considered coastal break with actual shore access, family room and meal choices, migration-season birding and clear distinctions from Nandaihe and Aranya.",
        href: "/destinations/beidaihe",
        linkLabel: "Beidaihe beach, birding and hotel guide",
      },
      {
        title: "Qinhuangdao",
        body: "Shanhaiguan pass and Laolongtou coastal defenses, with actual Beidaihe hotel choices and a separately confirmed Aranya architecture or resort chapter.",
        href: "/destinations/qinhuangdao",
        linkLabel: "Qinhuangdao Great Wall, coast and hotel guide",
      },
      {
        title: "Baoding",
        body: "Provincial Qing administration and garden history, with Mancheng Han archaeology or a selected Western Qing Tombs day distinguished from city visits and lake outings.",
        href: "/destinations/baoding",
        linkLabel: "Baoding history, tombs and hotel guide",
      },
      {
        title: "Handan",
        body: "Zhao history and Xiangtangshan Buddhist sculpture, with Guangfu or Wahuang Palace chosen as distinct outlying days and actual rail and hotel logistics explained.",
        href: "/destinations/handan",
        linkLabel: "Handan grottoes, history and hotel guide",
      },
      {
        title: "Shijiazhuang and Zhengding",
        body: "Hebei collections and a selected Zhengding architecture day, with Longxing Temple, city or county-town stays and separate mountain excursions clearly distinguished.",
        href: "/destinations/shijiazhuang",
        linkLabel: "Shijiazhuang and Zhengding planning guide",
      },
      {
        title: "Chengde",
        body: "The Qing Mountain Resort and distinct outlying temples, with lake vs hill routes, stair-aware temple choices and two- or three-night stays compared.",
        href: "/destinations/chengde",
        linkLabel: "Chengde travel guide",
      },
      {
        title: "Tianjin",
        body: "Trading-city architecture, Haihe evenings and regional food, with a Beijing day trip compared against overnight stays and the separate logistics of Binhai or a cruise port.",
        href: "/destinations/tianjin",
        linkLabel: "Tianjin travel guide",
      },
      {
        title: "Taiyuan",
        body: "Jinci architecture, selected Shanxi Museum galleries and regional food, with city hotels and separate Pingyao or Datong stays planned realistically.",
        href: "/destinations/taiyuan",
        linkLabel: "Taiyuan Jinci, museum and hotel guide",
      },
      {
        title: "Pingyao",
        body: "A walled merchant city for courtyard stays and remittance history, with Shuanglin sculpture and Zhenguo timber architecture as separate temple interests.",
        href: "/destinations/pingyao",
        linkLabel: "Pingyao travel guide",
      },
      {
        title: "Datong",
        body: "Yungang's Buddhist sculpture and selected city temples, with a separate Hunyuan excursion assessed for cliffside access, stairs and full road travel.",
        href: "/destinations/datong",
        linkLabel: "Datong travel guide",
      },
      {
        title: "Arxan / Aershan",
        body: "Volcanic lakes and forest scenery, comparing town and park-area stays, real walking effort and a separately timed Hulunbuir connection.",
        href: "/destinations/arxan",
        linkLabel: "Arxan forest park and accommodation guide",
      },
      {
        title: "Hulunbuir",
        body: "A selective grassland journey from an actual gateway, with Ergun or forest extensions, meaningful rural nights and carefully reviewed camp comfort.",
        href: "/destinations/hulunbuir",
        linkLabel: "Hulunbuir grassland routes and stay guide",
      },
      {
        title: "Alxa",
        body: "Choose Tengger, a dedicated Badain Jaran journey or a separate Ejina chapter, with full gateway roads, sand-driving exposure and actual camp comfort compared.",
        href: "/destinations/alxa",
        linkLabel: "Alxa desert routes and stay guide",
      },
      {
        title: "Hohhot",
        body: "Temple-city history and regional food, with a distinct choice between city nights, a selected grassland day and an actual overnight property.",
        href: "/destinations/hohhot",
        linkLabel: "Hohhot city and grassland guide",
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
        body: "Seasonal ice artistry, railway-city architecture and regional food, with actual attraction dates, hotel heating and winter breaks planned explicitly.",
        href: "/destinations/harbin",
        linkLabel: "Harbin winter and city guide",
      },
      {
        title: "Shenyang",
        body: "The early Qing palace, a selected imperial tomb and Liaoning's collections, with hotel areas, distinct railway gateways and winter breaks planned around the actual route.",
        href: "/destinations/shenyang",
        linkLabel: "Shenyang palace and city guide",
      },
      {
        title: "Changbai Mountain",
        body: "Choose the north or west side before booking: crater-lake weather, Erdaobaihe and resort bases, forest alternatives and separate ski days explained.",
        href: "/destinations/changbai-mountain",
        linkLabel: "Changbai Mountain sides, hotels and winter guide",
      },
      {
        title: "Changchun",
        body: "Twentieth-century history and film heritage, with a separate Jingyuetan landscape choice, practical hotel areas and exact gateway transfers.",
        href: "/destinations/changchun",
        linkLabel: "Changchun history and film guide",
      },
      {
        title: "Dalian",
        body: "Central architecture, selected coastal walks and seafood meals, with Xinghai Bay, Donggang and outlying Jinshitan compared as different hotel bases.",
        href: "/destinations/dalian",
        linkLabel: "Dalian coast and hotel guide",
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
    provinces:
      "Shanghai, Jiangsu, Zhejiang, Anhui, Jiangxi, Shandong and Taiwan (separately confirmed)",
    image: "/home/shanghai-pudong-skyline.webp",
    alt: "Shanghai's skyline glowing at dusk above the Huangpu River",
    answer:
      "East China is the country's most prosperous region, built around Shanghai and the lower Yangtze. It combines modern skylines with the classical gardens of Suzhou, the West Lake at Hangzhou, canal towns such as Wuzhen, the Ming city of Nanjing and the granite peaks of the Yellow Mountains. It suits first-time visitors and travelers who want comfort, food and design.",
    intro:
      "Shanghai, Suzhou and Hangzhou can form a compact mainland rail-connected route. Huangshan and Jiangxi add mountain, village and ceramic interests. Shandong brings Jinan's spring-fed city and Qingdao's coast farther north. Taipei and Tainan are separate Taiwan planning chapters with their own entry, local-service and transport checks; they should not be presented as a continuation of the mainland rail route.",
    places: [
      {
        title: "Shengsi Islands",
        body: "Choose Sijiao or Shengshan–Gouqi for coastal scenery, with exact ferry gateways, room locations, useful island nights and a realistic weather plan.",
        href: "/destinations/shengsi",
        linkLabel: "Shengsi island choice, ferries and hotels guide",
      },
      {
        title: "Jiande",
        body: "Meicheng's Yanzhou history and a selected Xin'an River setting, with modern-city, old-town and rural rooms compared separately from Qiandao Lake.",
        href: "/destinations/jiande",
        linkLabel: "Jiande, Meicheng and river-stay guide",
      },
      {
        title: "Qiandao Lake",
        body: "A lake stay led by the actual room, meals and rest time, with optional island cruises, realistic station transfers and clear distinctions from Hangzhou West Lake.",
        href: "/destinations/qiandao-lake",
        linkLabel: "Qiandao Lake hotels, cruises and stay guide",
      },
      {
        title: "Yaoli",
        body: "Riverside lanes, a selected Raonan ceramics-history visit or Wanghu nature route, with honest walking and rural-room choices beyond Jingdezhen.",
        href: "/destinations/yaoli",
        linkLabel: "Yaoli old town, walks and overnight guide",
      },
      {
        title: "Fuliang",
        body: "County history and tea culture beyond Jingdezhen, with a purposeful countryside excursion or rural stay and clear distinctions from Yaoli and temporary art events.",
        href: "/destinations/fuliang",
        linkLabel: "Fuliang tea country, history and rural stay guide",
      },
      {
        title: "Ningbo",
        body: "Tianyi Ge book culture, museum architecture and maritime history, with a clear city-versus-Dongqian Lake hotel choice and a separate temple decision.",
        href: "/destinations/ningbo",
        linkLabel: "Ningbo architecture, culture and hotel guide",
      },
      {
        title: "Yangzhou",
        body: "Merchant gardens, Huaiyang food and a considered Slender West Lake visit, with old-city versus lake-area hotels and a useful Suzhou comparison.",
        href: "/destinations/yangzhou",
        linkLabel: "Yangzhou gardens, food and hotel guide",
      },
      {
        title: "Shanghai",
        body: "The Bund, the former French Concession and the Old City, and an easy first landing in modern China.",
        href: "/destinations/shanghai",
        linkLabel: "Shanghai guide",
      },
      {
        title: "Zhouzhuang",
        body: "Historic houses, the Twin Bridges and canal boats, with a thoughtful comparison of city-based day visits, exact rooms and overnight stays.",
        href: "/destinations/zhouzhuang",
        linkLabel: "Zhouzhuang houses, boats and overnight guide",
      },
      {
        title: "Tongli",
        body: "Retreat and Reflection Garden, canal walks and the choice between a Suzhou day trip and an overnight, with exact room and transfer advice.",
        href: "/destinations/tongli",
        linkLabel: "Tongli garden, day trip and overnight guide",
      },
      {
        title: "Wuhu",
        body: "Yangtze trading history, iron painting and shrimp-roe noodles, with clear old-town distinctions, city hotel choices and a separate onward Huangshan plan.",
        href: "/destinations/wuhu",
        linkLabel: "Wuhu iron painting, old-town and hotel guide",
      },
      {
        title: "Tongcheng",
        body: "Six-Foot Alley, Confucian learning and the prose tradition explained in English, with a focused day or overnight and a separately arranged Xiaohua tea interest.",
        href: "/destinations/tongcheng",
        linkLabel: "Tongcheng Six-Foot Alley, literary culture and stay guide",
      },
      {
        title: "Qianshan, Anhui",
        body: "Sanzu Temple, selected Shangu Liuquan inscriptions and city-base choices, with a cultural day kept distinct from Tianzhushan mountain walking.",
        href: "/destinations/qianshan-anhui",
        linkLabel: "Qianshan Anhui temples, inscriptions and city-stay guide",
      },
      {
        title: "Tianzhu Mountain",
        body: "Choose Tianzhushan’s granite viewpoints and realistic remaining stairs, with separate lake and boulder-valley route choices, gateway stays and full station transfers.",
        href: "/destinations/tianzhu-mountain",
        linkLabel: "Tianzhu Mountain routes, cableway and hotel guide",
      },
      {
        title: "Anqing",
        body: "Yingjiang Temple, the Yangtze setting and old commercial lanes, with a carefully assessed Huangmei opera interest and separate Tianzhushan base choices.",
        href: "/destinations/anqing",
        linkLabel: "Anqing Yangtze culture, Huangmei opera and hotel guide",
      },
      {
        title: "Shitai",
        body: "Choose the Shitai-side Guniujiang route, village or tea interests and a rural base, with exact entrance, walking, meal and complete gateway advice.",
        href: "/destinations/shitai",
        linkLabel: "Shitai Guniujiang, villages and rural-stay guide",
      },
      {
        title: "Chizhou",
        body: "Pingtian Lake, literary interests and a useful city night, with separate base choices for Jiuhua Mountain and Shitai countryside and complete gateway advice.",
        href: "/destinations/chizhou",
        linkLabel: "Chizhou city, lake and regional-base guide",
      },
      {
        title: "Changzhou",
        body: "Qingguo Lane, Tianning Temple and regional food, with separate choices for a Dinosaur Park day, hotel bases and a Liyang countryside stay.",
        href: "/destinations/changzhou",
        linkLabel: "Changzhou culture, Dinosaur Park and hotel guide",
      },
      {
        title: "Dongtou",
        body: "Choose coastal views, Dong’ao village and assessed shore walks, with exact hotel-base advice and separate decisions on beaches, swimming and boat activities.",
        href: "/destinations/dongtou",
        linkLabel: "Dongtou coastal walks, villages and hotel guide",
      },
      {
        title: "Nanxi River",
        body: "Choose Yantou, Cangpo and Furong village walks, a comfortable rural base and a separate Shiweyan landscape day, with realistic transfers and optional river activities.",
        href: "/destinations/nanxi-river",
        linkLabel: "Nanxi River villages, rural stays and itinerary guide",
      },
      {
        title: "Yandang Mountain",
        body: "Compare Lingfeng, Lingyan and Dalongqiu with actual walking, evening-route and waterfall choices, plus local hotel and complete station-transfer advice.",
        href: "/destinations/yandang-mountain",
        linkLabel: "Yandang Mountain routes, walking and hotel guide",
      },
      {
        title: "Wenzhou",
        body: "Old-city food and culture, with separate choices on Yandang Mountain, Nanxi River villages and Dongtou, actual regional bases and complete transfers.",
        href: "/destinations/wenzhou",
        linkLabel: "Wenzhou city, regional landscapes and hotel guide",
      },
      {
        title: "Jiuhua Mountain",
        body: "A respectful Buddhist-cultural visit around Jiuhua Street, with realistic Tiantai steps, lower-area choices and mountain versus gateway hotel advice.",
        href: "/destinations/jiuhua-mountain",
        linkLabel: "Jiuhua Mountain temples, walks and hotel guide",
      },
      {
        title: "Xuancheng",
        body: "Jingting Mountain poetry and a separate Jing County Xuan-paper interest, with materials, workshop questions, rural stays and actual regional-base choices.",
        href: "/destinations/xuancheng",
        linkLabel: "Xuancheng poetry, Xuan paper and regional stay guide",
      },
      {
        title: "Zhenjiang",
        body: "Compare Jinshan, Jiaoshan and Beigushan, then add Xijindu and local vinegar food, with day-trip choices and a useful city overnight.",
        href: "/destinations/zhenjiang",
        linkLabel: "Zhenjiang river hills, Xijindu and overnight guide",
      },
      {
        title: "Wuxi",
        body: "Jichang Garden, Huishan and Taihu scenery, with Yuantouzhu day planning and a clear choice between city, lake-side and Lingshan or Nianhuawan stays.",
        href: "/destinations/wuxi",
        linkLabel: "Wuxi Taihu, gardens and hotel planning guide",
      },
      {
        title: "Changshu",
        body: "Yushan walks, historic gardens and Shanghu scenery, with a Suzhou day-trip comparison, clear hotel-base advice and a separate Shajiabang decision.",
        href: "/destinations/changshu",
        linkLabel: "Changshu Yushan, Shanghu and hotel planning guide",
      },
      {
        title: "Pinghu",
        body: "Mo Family Manor, an East Lake walk and a local meal, with Shanghai day-trip advice and a separate choice of Zhapu or Jiulongshan stays.",
        href: "/destinations/pinghu",
        linkLabel: "Pinghu manor, lake and overnight planning guide",
      },
      {
        title: "Puyuan",
        body: "Canal-and-courtyard walks, Wuzhen comparisons and property-led overnights, with clear room, entry, cultural-space and textile-visit questions.",
        href: "/destinations/puyuan",
        linkLabel: "Puyuan canal walks, hotels and overnight guide",
      },
      {
        title: "Tongxiang",
        body: "Choose a city, Puyuan textile or Shimen literary interest beyond Wuzhen, with distinct bases, confirmed specialist visits and complete station transfers.",
        href: "/destinations/tongxiang",
        linkLabel: "Tongxiang city, Puyuan and Shimen planning guide",
      },
      {
        title: "Xitang",
        body: "Covered waterfront passages, bridge routes and canal-town evenings, with Shanghai day-trip choices, quiet-room questions and exact Jiashan gateway advice.",
        href: "/destinations/xitang",
        linkLabel: "Xitang day trips, canal walks and overnight guide",
      },
      {
        title: "Haining",
        body: "Qiantang tidal-bore planning, Yanguan heritage and Xiashi literary interests, with dated forecasts, managed viewing and day-trip versus overnight choices.",
        href: "/destinations/haining",
        linkLabel: "Haining tide viewing, Yanguan and stay guide",
      },
      {
        title: "Jiaxing",
        body: "South Lake history, Yuehe canal-side streets and local food, with city-night versus Wuzhen choices and exact railway gateway advice.",
        href: "/destinations/jiaxing",
        linkLabel: "Jiaxing South Lake, Yuehe and overnight guide",
      },
      {
        title: "Huzhou",
        body: "Old-city lanes, writing-brush culture and the southern Taihu shore, with city versus lake hotels and separate Nanxun, Moganshan and Anji choices.",
        href: "/destinations/huzhou",
        linkLabel: "Huzhou old city, Taihu and hotel guide",
      },
      {
        title: "Nanxun",
        body: "Silk-merchant houses, Jiaye Library and Baijianlou, with day-trip versus overnight choices, room access and a useful Wuzhen comparison.",
        href: "/destinations/nanxun",
        linkLabel: "Nanxun merchant houses, day trips and stays",
      },
      {
        title: "Wuzhen",
        body: "Dongzha and Xizha choices, day visits versus overnight stays, and exact room, admission and luggage arrangements for a comfortable canal-town break.",
        href: "/destinations/wuzhen",
        linkLabel: "Wuzhen areas, hotels and overnight guide",
      },
      {
        title: "Hangzhou",
        body: "West Lake, Longjing tea villages and temples, with lake-side and rural stays chosen around the time you want to spend there.",
        href: "/destinations/hangzhou",
        linkLabel: "Hangzhou travel guide",
      },
      {
        title: "Linhai",
        body: "Taizhou's historic city wall, Ziyang Street and regional food, with realistic wall sections, old-town hotel choices and complete station transfers.",
        href: "/destinations/linhai",
        linkLabel: "Linhai city wall and old-town guide",
      },
      {
        title: "Shaoxing",
        body: "Literary places, canal neighborhoods and yellow rice wine culture, with Yuecheng stays and separate Anchang or landscape days compared.",
        href: "/destinations/shaoxing",
        linkLabel: "Shaoxing canals and literary guide",
      },
      {
        title: "Longquan",
        body: "Celadon and sword-making traditions, with collections, confirmed workshop formats and separate kiln-village routes chosen for real learning.",
        href: "/destinations/longquan",
        linkLabel: "Longquan celadon and craft guide",
      },
      {
        title: "Lishui",
        body: "A gateway to southern Zhejiang, with city, river-village and separate county-level stays chosen around architecture, terraces, scenery or craft.",
        href: "/destinations/lishui",
        linkLabel: "Lishui city and regional planning guide",
      },
      {
        title: "Yunhe",
        body: "Rice terraces with crop stages, viewpoints, remaining walks and town or mountain hotel bases chosen for a worthwhile landscape stay.",
        href: "/destinations/yunhe",
        linkLabel: "Yunhe rice terraces and stay guide",
      },
      {
        title: "Jinyun",
        body: "Xiandu rock scenery with separately chosen quarry spaces or village heritage, realistic walking and the correct rail gateway.",
        href: "/destinations/jinyun",
        linkLabel: "Jinyun Xiandu and architecture guide",
      },
      {
        title: "Songyang",
        body: "Mountain villages, rammed-earth houses and contemporary rural architecture, with town and hillside stays compared for steps, comfort and road access.",
        href: "/destinations/songyang",
        linkLabel: "Songyang village and stay guide",
      },
      {
        title: "Anji",
        body: "Bamboo landscapes, Anji green tea and countryside stays, with the actual hotel, selected outing and road journeys planned as separate decisions.",
        href: "/destinations/anji",
        linkLabel: "Anji countryside and tea guide",
      },
      {
        title: "Moganshan",
        body: "Bamboo hills, historic summer villas and considered countryside stays, with mountain, Yucun and village hotel bases clearly distinguished.",
        href: "/destinations/moganshan",
        linkLabel: "Moganshan stay and walking guide",
      },
      {
        title: "Taipei",
        body: "A northern Taiwan city stay built around neighborhoods, museums, tea or hot springs, with airport, rail and New Taipei excursions kept distinct.",
        href: "/destinations/taipei",
        linkLabel: "Taipei stays, tea and day-trip guide",
      },
      {
        title: "Tainan",
        body: "Southern Taiwan temple streets, Anping and food, with the HSR station, central railway station and hotel areas clearly separated.",
        href: "/destinations/tainan",
        linkLabel: "Tainan history, food and stay guide",
      },
      {
        title: "Yixing",
        body: "Zisha pottery and tea culture, with Dingshu visits, city comfort and countryside stays compared for a focused craft-led trip.",
        href: "/destinations/yixing",
        linkLabel: "Yixing pottery and stay guide",
      },
      {
        title: "Liyang",
        body: "Tianmu Lake, Nanshan Bamboo Sea and property-led countryside breaks, with hotel bases and activity inclusions clearly distinguished.",
        href: "/destinations/liyang",
        linkLabel: "Liyang lake and countryside guide",
      },
      {
        title: "Suzhou",
        body: "Classical gardens and canal neighborhoods, with a separate choice between historic-city, Jinji Lake and water-town stays.",
        href: "/destinations/suzhou",
        linkLabel: "Suzhou travel guide",
      },
      {
        title: "Wuzhen and the water towns",
        body: "Old canal towns of stone bridges and wooden houses near Shanghai and Hangzhou.",
      },
      {
        title: "Nanjing",
        body: "Capital history, selected Ming wall and Purple Mountain visits, with museums and hotel areas chosen for the available days and walking comfort.",
        href: "/destinations/nanjing",
        linkLabel: "Nanjing travel guide",
      },
      {
        title: "Hefei",
        body: "Selected Anhui collections and city history, with Sanhe or a specific Chaohu outing separated from onward Huangshan and village stays.",
        href: "/destinations/hefei",
        linkLabel: "Hefei museums, history and hotel guide",
      },
      {
        title: "Huangshan",
        body: "Granite peaks and pines, with mountain walking, cableways and an overnight chosen around the group’s stair tolerance.",
        href: "/destinations/huangshan",
        linkLabel: "Huangshan travel guide",
      },
      {
        title: "Hongcun",
        body: "Huizhou village architecture and a distinctive water system, with historic inns and village-edge stays compared carefully.",
        href: "/destinations/hongcun",
        linkLabel: "Hongcun village guide",
      },
      {
        title: "Xidi",
        body: "Huizhou houses and carved details, with a focused architectural visit or a carefully checked village overnight.",
        href: "/destinations/xidi",
        linkLabel: "Xidi village guide",
      },
      {
        title: "Nanchang",
        body: "Tengwang Pavilion, a chosen collection or memorial and a separate Haihunhou archaeology excursion, with useful onward nights in Jiangxi.",
        href: "/destinations/nanchang",
        linkLabel: "Nanchang museums, pavilion and hotel guide",
      },
      {
        title: "Jingdezhen",
        body: "Porcelain history and contemporary ceramics, with studio visits and hands-on classes chosen for their actual teaching and outcomes.",
        href: "/destinations/jingdezhen",
        linkLabel: "Jingdezhen ceramics guide",
      },
      {
        title: "Wuyuan",
        body: "Village architecture and rural stays, with selected routes and honest seasonal expectations for flowers, foliage and Huangling.",
        href: "/destinations/wuyuan",
        linkLabel: "Wuyuan village guide",
      },
      {
        title: "Tai'an & Mount Tai",
        body: "Sacred-mountain history with full-walking and transport-assisted routes, remaining summit steps, Dai Temple and honest city-versus-summit hotel choices.",
        href: "/destinations/taian",
        linkLabel: "Tai'an, Mount Tai routes and hotel guide",
      },
      {
        title: "Qufu",
        body: "Confucius temple, Kong family mansion and cemetery with clear interpretation, plus museum, Nishan and exact hotel choices for a measured cultural stay.",
        href: "/destinations/qufu",
        linkLabel: "Qufu Confucius sites and stay guide",
      },
      {
        title: "Jinan",
        body: "Spring-fed lanes and a selected Daming Lake walk, with old-city hotel choices and separate time for Shandong's provincial collections.",
        href: "/destinations/jinan",
        linkLabel: "Jinan springs and city guide",
      },
      {
        title: "Qingdao",
        body: "Coastal neighborhoods and architectural history, with old-city vs modern-waterfront hotels and a named Laoshan route chosen for the actual walking needs.",
        href: "/destinations/qingdao",
        linkLabel: "Qingdao coast and city guide",
      },
    ],
    journeys: [
      "private-shanghai-day-tour-guide-driver",
      "beijing-xian-chengdu-shanghai-private-11-day-tour",
      "beijing-xian-shanghai-private-10-day-tour",
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
        title: "Nanyang",
        body: "Han stone reliefs, Wuhou commemoration and a defined Dushan jade interest, with city bases and separate county excursions clearly explained.",
        href: "/destinations/nanyang",
        linkLabel: "Nanyang Han reliefs, Wuhou and hotel guide",
      },
      {
        title: "Hebi",
        body: "A selected Xunxian and Dapi Mountain heritage day, with hill steps, historic-town layers and Hebi-versus-county-town hotel choices made clear.",
        href: "/destinations/hebi",
        linkLabel: "Hebi Xunxian, Dapi Mountain and hotel guide",
      },
      {
        title: "Linzhou",
        body: "Red Flag Canal engineering history and a distinct Taihang canyon day, with Chinese-name clarity, realistic walking and Shibanyan-versus-city hotel choices.",
        href: "/destinations/linzhou",
        linkLabel: "Linzhou Red Flag Canal, canyon and hotel guide",
      },
      {
        title: "Xinxiang",
        body: "Regional museum context, Prince Lu tomb heritage and a considered city base, with actual railway gateways and Huixian mountain stays clearly distinguished.",
        href: "/destinations/xinxiang",
        linkLabel: "Xinxiang museum, Prince Lu tomb and hotel guide",
      },
      {
        title: "Huixian",
        body: "Guoliang and Wanxianshan or a separate Baligou valley day, with current cliff-road permissions, realistic walking and mountain-room comparisons.",
        href: "/destinations/huixian",
        linkLabel: "Huixian Guoliang, Baligou and hotel guide",
      },
      {
        title: "Yuzhou & Shenhou",
        body: "Jun ware context, contemporary studio visits and clearly defined making sessions, with practical firing, optional purchase and shipping questions.",
        href: "/destinations/yuzhou",
        linkLabel: "Yuzhou Shenhou Jun ware and studio guide",
      },
      {
        title: "Xuchang",
        body: "Cao Cao and late Han history, with later Guan Yu memorials, modern themed streets and practical city-base choices clearly distinguished.",
        href: "/destinations/xuchang",
        linkLabel: "Xuchang Cao Cao history and hotel guide",
      },
      {
        title: "Gongyi",
        body: "Buddhist cave sculpture, the Kang Baiwan merchant compound and selected Song tomb stonework, with focused day visits and realistic Zhengzhou–Luoyang connections.",
        href: "/destinations/gongyi",
        linkLabel: "Gongyi grottoes, Kang Baiwan and hotel guide",
      },
      {
        title: "Jiaozuo & Yuntai Mountain",
        body: "Red-rock gorges, seasonal water and distinct peak routes, with realistic walking, visitor transport and city-versus-scenic hotel choices.",
        href: "/destinations/jiaozuo",
        linkLabel: "Jiaozuo Yuntai Mountain routes and hotel guide",
      },
      {
        title: "Anyang",
        body: "Yinxu and oracle-bone writing explained through museum and archaeological visits, with clear hotel, rail and wider Henan choices.",
        href: "/destinations/anyang",
        linkLabel: "Anyang Yinxu, oracle bones and hotel guide",
      },
      {
        title: "Dengfeng",
        body: "Shaolin heritage in context, with separate monument, training and Songshan hiking decisions, realistic walking and a considered Henan hotel base.",
        href: "/destinations/dengfeng",
        linkLabel: "Dengfeng Shaolin, Songshan and hotel guide",
      },
      {
        title: "Wudang Mountains",
        body: "Daoist palaces, Golden Summit and Nanyan as distinct route choices, with remaining cableway steps, hotel bases and tai chi teaching explained separately.",
        href: "/destinations/wudang-mountains",
        linkLabel: "Wudang Mountain routes and hotel guide",
      },
      {
        title: "Zhangjiajie",
        body: "Sandstone pillars, cable cars and forest walks in Wulingyuan, the landscape that inspired floating mountains on screen.",
        href: "/destinations/zhangjiajie",
        linkLabel: "Zhangjiajie guide",
      },
      {
        title: "Changsha",
        body: "Hunan Museum and Mawangdui discoveries, a selected Yuelu visit and thoughtful regional food, with hotel noise, reservations and onward station transfers made clear.",
        href: "/destinations/changsha",
        linkLabel: "Changsha museum, food and stay guide",
      },
      {
        title: "Fenghuang",
        body: "An old river town in western Hunan with stilted houses along the Tuo River.",
      },
      {
        title: "Zhengzhou",
        body: "Henan Museum and Shang-period city evidence, with hotel and gateway choices made explicit and any Dengfeng excursion given its own complete plan.",
        href: "/destinations/zhengzhou",
        linkLabel: "Zhengzhou museum and Henan route guide",
      },
      {
        title: "Kaifeng",
        body: "Northern Song capital history through distinct surviving monuments, later rebuilding and modern themed attractions, with useful evenings and actual station transfers.",
        href: "/destinations/kaifeng",
        linkLabel: "Kaifeng history and overnight guide",
      },
      {
        title: "Luoyang",
        body: "Longmen Buddhist sculpture and successive capital histories, with selected museum or temple interests and peony gardens assessed for the actual season.",
        href: "/destinations/luoyang",
        linkLabel: "Luoyang travel guide",
      },
      {
        title: "Dengfeng and Shaolin",
        body: "The Shaolin Temple and its pagoda forest in Henan, known for the history of Chinese martial arts.",
      },
      {
        title: "Jingzhou",
        body: "Chu and Han collections, selected city defenses and a separate Xiongjiazhong archaeological visit, with old-city or Shashi stays and Yichang connections compared.",
        href: "/destinations/jingzhou",
        linkLabel: "Jingzhou archaeology, old city and stay planning guide",
      },
      {
        title: "Xiangyang",
        body: "Han River defenses, Gulongzhong and beef-noodle breakfasts, with modern Tangcheng distinguished and Xiangcheng versus Fancheng hotel choices explained.",
        href: "/destinations/xiangyang",
        linkLabel: "Xiangyang history, food and stay planning guide",
      },
      {
        title: "Danjiangkou",
        body: "Reservoir landscapes and water-management context, with dam and boat visits distinguished, precise hotel locations and a separate Wudang mountain plan.",
        href: "/destinations/danjiangkou",
        linkLabel: "Danjiangkou reservoir, dam and stay planning guide",
      },
      {
        title: "Shiyan",
        body: "City museums and automotive history, with city-versus-Wudang accommodation choices, exact station transfers and separate Danjiangkou planning.",
        href: "/destinations/shiyan",
        linkLabel: "Shiyan city and Wudang gateway planning guide",
      },
      {
        title: "Shennongjia",
        body: "Forest and high mountain routes, Dajiuhu wetlands and Muyu or Pingqian stay choices, with realistic walking and complete gateway transfers.",
        href: "/destinations/shennongjia",
        linkLabel: "Shennongjia forest, route and hotel planning guide",
      },
      {
        title: "Enshi",
        body: "Grand Canyon walking, a separate Hefeng Pingshan boat plan and Tujia historical context, with city or mountain rooms and Yichang connections compared.",
        href: "/destinations/enshi",
        linkLabel: "Enshi canyons, culture and stay planning guide",
      },
      {
        title: "Yichang",
        body: "Three Gorges Dam visits, defined short river outings and separate Yangtze cruise planning, with actual city, collection-point and pier transfers made clear.",
        href: "/destinations/yichang",
        linkLabel: "Yichang, Three Gorges and cruise planning guide",
      },
      {
        title: "Wuhan",
        body: "Hubei's archaeological collections, Yellow Crane Tower's literary story and Hankou breakfasts, with hotel-bank choices and distinct station transfers planned together.",
        href: "/destinations/wuhan",
        linkLabel: "Wuhan travel guide",
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
    provinces: "Guangxi, Guangdong, Fujian, Hainan, Hong Kong and Macao",
    image: "/home/guilin-li-river.webp",
    alt: "Li River karst mountains and calm water near Guilin",
    answer:
      "South China combines the karst landscapes of Guilin and Yangshuo with the food and trading history of Guangzhou, the technology of Shenzhen, the island city of Xiamen and Fujian's earthen Tulou villages, and the tropical coast of Hainan. It suits travelers who want scenery, food and a slower, warmer pace.",
    intro:
      "The region is spread out, so we usually pair two or three places around actual transport and usable nights. Hong Kong and Macao connections have separate entry arrangements and locally confirmed services.",
    places: [
      {
        title: "Rongshui",
        body: "Selected village interpretation and Beijiang landscape, with county-town versus rural rooms and a separately assessed Yuanbao Mountain direction.",
        href: "/destinations/rongshui",
        linkLabel: "Rongshui village, mountain and stay guide",
      },
      {
        title: "Liuzhou",
        body: "Industrial-history interpretation, luosifen food and the Liu River city setting, with actual hotel bases, optional hill walking and separate Sanjiang journeys.",
        href: "/destinations/liuzhou",
        linkLabel: "Liuzhou food, river and city stay guide",
      },
      {
        title: "Sanjiang",
        body: "Chengyang's Dong villages and covered bridge, with village or county-town rooms, actual station transfers and a thoughtful comparison with Zhaoxing.",
        href: "/destinations/sanjiang",
        linkLabel: "Sanjiang and Chengyang village guide",
      },
      {
        title: "Longji Rice Terraces",
        body: "Ping’an or Dazhai/Jinkeng terrace villages, seasonal field conditions and one or two local nights, with hotel steps, luggage and complete road journeys planned.",
        href: "/destinations/longji-rice-terraces",
        linkLabel: "Longji terraces, village stays and walking guide",
      },
      {
        title: "Guilin and Yangshuo",
        body: "The Li River, limestone peaks and countryside, best seen by cruise and bamboo raft.",
        href: "/destinations/guilin",
        linkLabel: "Guilin & Yangshuo guide",
      },
      {
        title: "Weizhou Island",
        body: "Volcanic coastal routes, village and church context and two or three island nights, with exact room choices, passenger crossings and mainland connections planned separately.",
        href: "/destinations/weizhou-island",
        linkLabel: "Weizhou Island ferries, coasts and hotel guide",
      },
      {
        title: "Beihai",
        body: "Port-city Old Street, Silver Beach hotel choices and Qiaogang food, with two or three mainland nights and a separately planned Weizhou Island crossing.",
        href: "/destinations/beihai",
        linkLabel: "Beihai old town, coast and hotel guide",
      },
      {
        title: "Nanning",
        body: "Guangxi collections, city food and a selected Qingxiu route, with actual hotel and gateway choices before a separately planned western countryside stay.",
        href: "/destinations/nanning",
        linkLabel: "Nanning city and Guangxi route guide",
      },
      {
        title: "Jingxi",
        body: "Goose Spring, Jiuzhou craft interests and separately assessed gorge routes in western Guangxi, with actual hotel bases and walking clearly compared.",
        href: "/destinations/jingxi",
        linkLabel: "Jingxi springs, villages and gorges guide",
      },
      {
        title: "Chongzuo",
        body: "City versus Ningming heritage bases, selected Huashan rock-art viewing and complete river/road arrangements, with Daxin countryside accommodation kept distinct.",
        href: "/destinations/chongzuo",
        linkLabel: "Chongzuo Huashan, routes and hotel guide",
      },
      {
        title: "Daxin",
        body: "Detian Waterfall and a considered Mingshi countryside stay, with property locations, walking, rafts and border-related arrangements distinguished.",
        href: "/destinations/daxin",
        linkLabel: "Daxin Detian and Mingshi stay guide",
      },
      {
        title: "Lianzhou",
        body: "Underground River cave planning, a separate Huangchuan river outing, practical stays and the full northern Guangdong journey.",
        href: "/destinations/lianzhou",
        linkLabel: "Lianzhou cave, river and stay guide",
      },
      {
        title: "Yingde",
        body: "Identified black-tea learning and a distinct Yingxi karst-countryside stay, with host formats, actual rooms and full gateway roads compared.",
        href: "/destinations/yingde",
        linkLabel: "Yingde tea, karst and stay guide",
      },
      {
        title: "Qingyuan",
        body: "Choose a countryside or resort purpose, with Yingde tea and karst interests, a separate Lianzhou cave chapter and full roads kept distinct.",
        href: "/destinations/qingyuan",
        linkLabel: "Qingyuan countryside, tea and stay guide",
      },
      {
        title: "Huizhou",
        body: "Choose West Lake city culture, a defined Luofu Mountain visit or a Huidong coastal property, with full roads, room service and swimming conditions kept clear.",
        href: "/destinations/huizhou",
        linkLabel: "Huizhou city, coast and hotel guide",
      },
      {
        title: "Guangzhou",
        body: "The home of Cantonese food, with markets, historic districts and a long trading heritage.",
        href: "/destinations/guangzhou",
        linkLabel: "Guangzhou travel guide",
      },
      {
        title: "Hong Kong",
        body: "Island and Kowloon neighborhood stays, food and selected museums, with local delivery, separate entry eligibility and cross-boundary services confirmed individually.",
        href: "/destinations/hong-kong",
        linkLabel: "Hong Kong neighborhoods and stay guide",
      },
      {
        title: "Macao",
        body: "Peninsula heritage, Macanese food and a particular Cotai or other property, with the full crossing, local providers and entry arrangements planned separately.",
        href: "/destinations/macao",
        linkLabel: "Macao heritage and stay guide",
      },
      {
        title: "Shenzhen",
        body: "Contemporary design, business districts and waterfront stays, with Hong Kong connections planned around the actual gateway.",
        href: "/destinations/shenzhen",
        linkLabel: "Shenzhen travel guide",
      },
      {
        title: "Zhanjiang",
        body: "Chikan commercial streets, Xiashan Guangzhouwan history and regional food, with bay hotel choices and a separately planned Naozhou Island chapter.",
        href: "/destinations/zhanjiang",
        linkLabel: "Zhanjiang city history, food and stay guide",
      },
      {
        title: "Dongguan",
        body: "Keyuan garden, Humen history, selected Nanshe village or Songshan Lake interests, with area-led bases and separately confirmed business appointments.",
        href: "/destinations/dongguan",
        linkLabel: "Dongguan Keyuan, Humen and stay guide",
      },
      {
        title: "Zhuhai",
        body: "City seafront and selected Tangjiawan or Beishan heritage, with Gongbei, Hengqin, Macao connections and offshore stays planned as distinct choices.",
        href: "/destinations/zhuhai",
        linkLabel: "Zhuhai seafront, culture and stay guide",
      },
      {
        title: "Zhongshan",
        body: "Cuiheng and Sun Yat-sen history, selected Shiqi streets and Qijiang Park landscape reuse, with focused day-trip and overnight choices.",
        href: "/destinations/zhongshan",
        linkLabel: "Zhongshan Cuiheng, city and stay guide",
      },
      {
        title: "Heyuan",
        body: "Wanlü Lake reservoir scenery, dinosaur-museum learning and selected Hakka village interests, with actual city and lakeside bases compared.",
        href: "/destinations/heyuan",
        linkLabel: "Heyuan lake, culture and stay guide",
      },
      {
        title: "Dabu",
        body: "Selected Hakka residences and Baihou village interests, with Tai’an Lou versus Hua’e Lou, Huliao stays and a selective Meizhou excursion compared.",
        href: "/destinations/dabu",
        linkLabel: "Dabu Hakka houses, villages and stay guide",
      },
      {
        title: "Meizhou",
        body: "Hakka house layouts, regional history and food, with city or countryside bases and clear distinctions between weilongwu and Fujian tulou.",
        href: "/destinations/meizhou",
        linkLabel: "Meizhou Hakka houses, food and stay guide",
      },
      {
        title: "Jieyang",
        body: "Rongcheng academy and city heritage beyond the airport, with actual Yingge arrangements, useful nights and separate Puning decisions.",
        href: "/destinations/jieyang",
        linkLabel: "Jieyang Rongcheng, culture and stay guide",
      },
      {
        title: "Shantou",
        body: "Little Park port-city heritage and thoughtful Teochew meals, with actual city hotel choices and a separate Nan’ao Island decision.",
        href: "/destinations/shantou",
        linkLabel: "Shantou food, old town and stay guide",
      },
      {
        title: "Chaozhou",
        body: "Teochew food, gongfu tea and a considered old-city stay, with the bridge, cultural hosts and the wider Chaoshan region distinguished clearly.",
        href: "/destinations/chaozhou",
        linkLabel: "Chaozhou food, tea and old-city guide",
      },
      {
        title: "Shaoguan",
        body: "Danxia red-cliff routes and Nanhua Temple history, with city versus mountain bases, remaining steps and useful local days compared.",
        href: "/destinations/shaoguan",
        linkLabel: "Shaoguan Danxia, Nanhua and stay guide",
      },
      {
        title: "Zhaoqing",
        body: "Seven Star Crags, a separate Dinghu forest route and Duan inkstone learning, with actual walking and city versus scenic-area bases compared.",
        href: "/destinations/zhaoqing",
        linkLabel: "Zhaoqing lake, forest and inkstone guide",
      },
      {
        title: "Foshan",
        body: "Lingnan temple craftsmanship, Shiwan ceramics and martial-arts context, with Chancheng heritage and separate district-level visits clearly distinguished.",
        href: "/destinations/foshan",
        linkLabel: "Foshan heritage and ceramics guide",
      },
      {
        title: "Heshan, Guangdong",
        body: "Gulao water landscapes and a separately confirmed Wing Chun interest, with boat versus walking routes and day-visit versus overnight choices explained.",
        href: "/destinations/heshan-guangdong",
        linkLabel: "Heshan Gulao water-town and stay guide",
      },
      {
        title: "Enping",
        body: "A considered hot-spring stay with actual room and bathing inclusions, plus selected Xiema village or Feng Ru aviation-history interests.",
        href: "/destinations/enping",
        linkLabel: "Enping hot-spring, culture and stay guide",
      },
      {
        title: "Taishan, Guangdong",
        body: "Toisan/Hoisan heritage, Taicheng and selected Duanfen or ancestral-village interests, with separate Shangchuan and Xiachuan stay decisions.",
        href: "/destinations/taishan-guangdong",
        linkLabel: "Guangdong Taishan heritage and stay guide",
      },
      {
        title: "Jiangmen",
        body: "Overseas Chinese history, Changdi arcade streets and Xinhui chenpi, with city bases and a separate Kaiping village chapter clearly distinguished.",
        href: "/destinations/jiangmen",
        linkLabel: "Jiangmen heritage, Xinhui and stay guide",
      },
      {
        title: "Kaiping",
        body: "Diaolou and emigrant-village architecture, with selected clusters, tower stairs, Liyuan, Chikan and worthwhile overnight bases compared carefully.",
        href: "/destinations/kaiping",
        linkLabel: "Kaiping diaolou and village guide",
      },
      {
        title: "Shunde",
        body: "A food-led district within Foshan, with Daliang gardens, other distinct local areas and a coherent day trip or overnight planned around worthwhile meals.",
        href: "/destinations/shunde",
        linkLabel: "Shunde food and stay guide",
      },
      {
        title: "Pingtan",
        body: "Stone-house villages and distinct beach bases, with exact room choices, weather-aware coastal routes and realistic blue-tears expectations.",
        href: "/destinations/pingtan",
        linkLabel: "Pingtan island, villages and hotel guide",
      },
      {
        title: "Fuzhou",
        body: "Courtyard lanes, Fujian collections and jasmine tea, with central hotel choices and a separate Mawei shipbuilding-history excursion.",
        href: "/destinations/fuzhou",
        linkLabel: "Fuzhou historic lanes, food and hotel guide",
      },
      {
        title: "Quanzhou",
        body: "Maritime history, living religious heritage and southern Fujian food, with a selective city and outlying-site route.",
        href: "/destinations/quanzhou",
        linkLabel: "Quanzhou travel guide",
      },
      {
        title: "Xiapu",
        body: "A working coast and tidal-flat landscapes, with town or coastal stays, photography expertise, tides and non-photographer interests planned separately.",
        href: "/destinations/xiapu",
        linkLabel: "Xiapu tides, photography and stay guide",
      },
      {
        title: "Fuding",
        body: "White-tea learning with a confirmed host, plus a selected Taimu Mountain or coastal chapter, with city and rural hotel bases compared.",
        href: "/destinations/fuding",
        linkLabel: "Fuding white tea and scenic stay guide",
      },
      {
        title: "Wuyishan",
        body: "Rock-tea culture and mountain scenery, with river, walking and hotel choices matched to the group and current conditions.",
        href: "/destinations/wuyishan",
        linkLabel: "Wuyishan tea and scenery guide",
      },
      {
        title: "Xiamen and Gulangyu",
        body: "Coastal city time and Gulangyu’s layered architecture, with hotel, ferry and luggage choices planned explicitly.",
        href: "/destinations/xiamen",
        linkLabel: "Xiamen and Gulangyu guide",
      },
      {
        title: "Fujian Tulou",
        body: "Earthen communal buildings in different forms, with named clusters, village access and overnight comfort planned individually.",
        href: "/destinations/fujian-tulou",
        linkLabel: "Fujian Tulou travel guide",
      },
      {
        title: "Haikou",
        body: "Arcaded trading streets, Hainan collections and a selected volcanic-landscape outing, with city and west-coast hotels compared before an onward resort stay.",
        href: "/destinations/haikou",
        linkLabel: "Haikou city culture and hotel guide",
      },
      {
        title: "Hainan",
        body: "A tropical island province with beaches, resorts and a warm climate through the winter.",
      },
      {
        title: "Wanning",
        body: "Riyue Bay surfing, Shimei Bay and Shenzhou Peninsula stays, with Xinglong coffee and the full hotel-and-activity plan compared.",
        href: "/destinations/wanning",
        linkLabel: "Wanning bays and surf planning guide",
      },
      {
        title: "Lingshui",
        body: "Clear Water Bay and Xiangshui Bay resort stays, with family facilities, island logistics and county-town food chosen for the actual holiday.",
        href: "/destinations/lingshui",
        linkLabel: "Lingshui bays and resort planning guide",
      },
      {
        title: "Sanya",
        body: "A slower tropical hotel stay, with Yalong, Haitang and city-oriented bays compared by actual room, facilities, beach conditions and family needs.",
        href: "/destinations/sanya",
        linkLabel: "Sanya bays and resort guide",
      },
    ],
    journeys: ["guilin-yangshuo-li-river-cruise-private-day-tour"],
    faqs: [
      {
        question: "How long should I spend in Guilin and Yangshuo?",
        answer:
          "Three nights can give a Guilin arrival, a Li River cruise day and a full Yangshuo countryside day when transport fits. Longji is a separate mountain extension with its own road journeys and selected village visit or overnight stay. Rafting is another optional activity with separate operating conditions.",
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
        title: "Bamei",
        body: "A river-and-cave approach to a Zhuang village, with practical day-visit versus overnight choices, luggage advice and a full Puzhehei connection.",
        href: "/destinations/bamei",
        linkLabel: "Bamei cave boats, village stays and access guide",
      },
      {
        title: "Puzhehei",
        body: "Karst hills and water with realistic lotus-season advice, specific boat and viewpoint choices, village-room comparisons and the full Kunming connection.",
        href: "/destinations/puzhehei",
        linkLabel: "Puzhehei lotus season, boats and hotel guide",
      },
      {
        title: "Baisha",
        body: "Selected mural art and Naxi cultural context near Lijiang, with village visits, room choices and separate Yuhu or mountain plans clearly explained.",
        href: "/destinations/baisha",
        linkLabel: "Baisha murals, village stays and Lijiang guide",
      },
      {
        title: "Heqing",
        body: "Xinhua silvercraft with clear host and purchase questions, plus a separately assessed Caohai wetland interest, useful local nights and full Lijiang transfers.",
        href: "/destinations/heqing",
        linkLabel: "Heqing silvercraft, Caohai and stay guide",
      },
      {
        title: "Jianchuan",
        body: "Old-town architecture and a defined woodcarving interest, with county-town rooms, Shaxi valley stays and separate mountain routes clearly distinguished.",
        href: "/destinations/jianchuan",
        linkLabel: "Jianchuan old-town, woodcarving and stay guide",
      },
      {
        title: "Weishan",
        body: "Old-town food, Nanzhao context and a separate Weibaoshan temple route south of Dali, with courtyard comfort, day trips and useful overnights compared.",
        href: "/destinations/weishan",
        linkLabel: "Weishan old-town, food and overnight guide",
      },
      {
        title: "Xingyi",
        body: "Wanfenglin peak-and-field countryside, a distinct Maling River Gorge route and separate lake choices, with rural rooms and a comfortable two- or three-night pace.",
        href: "/destinations/xingyi",
        linkLabel: "Xingyi, Wanfenglin and hotel guide",
      },
      {
        title: "Dujiangyan",
        body: "Understand working water heritage through a manageable public route, with Chengdu outings, town evenings and separate Qingcheng Mountain days compared.",
        href: "/destinations/dujiangyan",
        linkLabel: "Dujiangyan water heritage and stay guide",
      },
      {
        title: "Guanghan",
        body: "Sanxingdui and ancient Shu through selected objects and archaeological questions, with museum time, family pacing and Chengdu or local bases compared.",
        href: "/destinations/guanghan",
        linkLabel: "Guanghan and Sanxingdui Museum guide",
      },
      {
        title: "Mianzhu",
        body: "New Year picture traditions through defined museum, studio and practical art visits, with hosts, materials, local rooms and Chengdu connections compared.",
        href: "/destinations/mianzhu",
        linkLabel: "Mianzhu New Year picture and craft guide",
      },
      {
        title: "Qionglai",
        body: "Pingle river-town time, defined tea visits, Tiantai forest routes and Qiong kiln heritage, with rural bases and a focused Chengdu day or longer stay compared.",
        href: "/destinations/qionglai",
        linkLabel: "Qionglai, Pingle and tea-country guide",
      },
      {
        title: "Chongzhou",
        body: "Daoming bamboo craft, Jiezi old-town walks and rural rooms compared, with workshop formats, day-trip choices and a slower Chengdu extension made clear.",
        href: "/destinations/chongzhou",
        linkLabel: "Chongzhou craft and countryside guide",
      },
      {
        title: "Langzhong",
        body: "A historic river-town overnight with courtyard-room checks, Zhang Fei and examination history, quieter lane walks and a deliberate Chengdu connection.",
        href: "/destinations/langzhong",
        linkLabel: "Langzhong old town, hotels and itinerary guide",
      },
      {
        title: "Chengdu",
        body: "Giant pandas, teahouses and the Sichuan table, with a gentler rhythm that suits families.",
        href: "/destinations/chengdu",
        linkLabel: "Chengdu guide",
      },
      {
        title: "Daocheng Yading",
        body: "Sacred mountain scenery with shorter paths, Luorong and upper-lake hiking distinguished, plus Riwa, Daocheng town and Yading village sleeping choices.",
        href: "/destinations/daocheng-yading",
        linkLabel: "Yading routes, altitude and hotel guide",
      },
      {
        title: "Litang",
        body: "Monastery and Renkang history with a separate Maoya grassland choice, roughly 4,000-meter town sleeping exposure and real room comfort assessed before routing.",
        href: "/destinations/litang",
        linkLabel: "Litang culture, altitude and hotel guide",
      },
      {
        title: "Kangding",
        body: "Valley-city culture and separately chosen Mugecuo or higher rural stays, with exact sleeping elevations, room comfort and full mountain-road journeys reviewed.",
        href: "/destinations/kangding",
        linkLabel: "Kangding altitude, scenery and hotel guide",
      },
      {
        title: "Danba",
        body: "Gyalrong Tibetan villages and tower traditions, with town or hillside rooms, actual walking, local consent and the complete mountain-road profile assessed.",
        href: "/destinations/danba",
        linkLabel: "Danba villages, towers and stay guide",
      },
      {
        title: "Mount Siguniang",
        body: "Distinct high-mountain valleys, with scenic transport, actual walking, sleeping elevation and specialist activities treated as separate decisions.",
        href: "/destinations/mount-siguniang",
        linkLabel: "Mount Siguniang valleys and altitude guide",
      },
      {
        title: "Qingcheng Mountain",
        body: "Daoist heritage and forest walks, with nearby resort stays chosen around walking comfort and quiet time.",
        href: "/destinations/qingcheng-mountain",
        linkLabel: "Qingcheng Mountain guide",
      },
      {
        title: "Chongqing",
        body: "A layered hill city on the Yangtze, known for its skyline at night and hotpot.",
        href: "/destinations/chongqing",
        linkLabel: "Chongqing guide",
      },
      {
        title: "Mount Emei",
        body: "Golden Summit or lower temple routes, with the full scenic transport chain, remaining steps, altitude and mountain-foot versus upper hotel choices explained.",
        href: "/destinations/mount-emei",
        linkLabel: "Mount Emei summit, temples and stay guide",
      },
      {
        title: "Leshan",
        body: "The Giant Buddha carved into a cliff above the river, an easy extension from Chengdu.",
        href: "/destinations/leshan",
        linkLabel: "Leshan guide",
      },
      {
        title: "Hongyuan",
        body: "Moon Bay and a season-appropriate Emutang flower outing, with town or grassland rooms judged by real facilities, sleeping elevation and complete road journeys.",
        href: "/destinations/hongyuan",
        linkLabel: "Hongyuan grassland, seasons and stay guide",
      },
      {
        title: "Zoige / Ruoergai",
        body: "Huahu wetland and Tangke’s Yellow River landscape, with distinct overnight bases, seasonal trade-offs and actual room facilities assessed for a highland journey.",
        href: "/destinations/zoige",
        linkLabel: "Zoige grassland, altitude and stay guide",
      },
      {
        title: "Songpan",
        body: "A historic walled-town stay, with exact rail gateways, sleeping elevations and hotel comfort compared before adding separate Huanglong or Jiuzhaigou days.",
        href: "/destinations/songpan",
        linkLabel: "Songpan old town and regional planning guide",
      },
      {
        title: "Huanglong",
        body: "High-mountain travertine terraces, with cableway connections, remaining walking, sleeping elevations and a separate scenic day reviewed before adding it to a route.",
        href: "/destinations/huanglong",
        linkLabel: "Huanglong altitude and route guide",
      },
      {
        title: "Jiuzhaigou",
        body: "Lakes, forest and waterfalls on a separate full park day, with shared park buses, selected boardwalks and a suitable regional hotel base.",
        href: "/destinations/jiuzhaigou",
        linkLabel: "Jiuzhaigou guide",
      },
      {
        title: "Yuanyang",
        body: "A living Hani terrace landscape, with the agricultural season, mountain hotel, selected viewpoints and village walking planned as separate choices.",
        href: "/destinations/yuanyang",
        linkLabel: "Yuanyang rice terraces guide",
      },
      {
        title: "Jianshui",
        body: "Confucian heritage, domestic courtyards, Tuanshan village and purple pottery, with a comfortable old-town base and a considered southern Yunnan route.",
        href: "/destinations/jianshui",
        linkLabel: "Jianshui culture guide",
      },
      {
        title: "Tengchong",
        body: "Volcanic geology, Heshun's borderland history and hot-spring stays, planned around the real airport, property and road distances.",
        href: "/destinations/tengchong",
        linkLabel: "Tengchong travel guide",
      },
      {
        title: "Bomi / Pome",
        body: "Selected peach-valley scenery and forest walks, with Zhamu versus Guxiang-area stays, complete road days and traveler-specific Tibet arrangements.",
        href: "/destinations/bomi",
        linkLabel: "Bomi forest, blossom and hotel guide",
      },
      {
        title: "Nujiang",
        body: "A staged valley road journey with Liuku, middle-valley and Bingzhongluo base choices, useful local nights and separately assessed side valleys.",
        href: "/destinations/nujiang",
        linkLabel: "Nujiang valley route and stay guide",
      },
      {
        title: "Bingzhongluo",
        body: "Nu River scenery and selected village walks, with two or three local nights, actual room comfort and separate Dulong Valley or Tibet route decisions.",
        href: "/destinations/bingzhongluo",
        linkLabel: "Bingzhongluo walks and stay guide",
      },
      {
        title: "Dali",
        body: "Erhai scenery and Bai village culture, with a choice between Old Town and lakeside stays.",
        href: "/destinations/dali",
        linkLabel: "Dali guide",
      },
      {
        title: "Shaxi",
        body: "A Tea Horse Road valley for courtyard stays, village walks and a separately chosen Shibaoshan visit.",
        href: "/destinations/shaxi",
        linkLabel: "Shaxi guide",
      },
      {
        title: "Lijiang",
        body: "Naxi heritage and historic lanes, with mountain and gorge outings chosen around walking and elevation.",
        href: "/destinations/lijiang",
        linkLabel: "Lijiang guide",
      },
      {
        title: "Yubeng",
        body: "Upper and Lower Yubeng bases, Sacred Waterfall or Ice Lake walking days, three or four village nights and separately confirmed access, luggage and exit arrangements.",
        href: "/destinations/yubeng",
        linkLabel: "Yubeng trails, village stays and access guide",
      },
      {
        title: "Cizhong",
        body: "A Lancang valley village stay for Catholic church history and grape-growing traditions, with actual rooms, wine visits and full road connections assessed separately.",
        href: "/destinations/cizhong",
        linkLabel: "Cizhong church, wine and village stay guide",
      },
      {
        title: "Deqin & Meili Snow Mountain",
        body: "Feilaisi viewing stays, exact room panoramas and a highland road extension, distinguished from separately assessed Mingyong outings or Yubeng trekking.",
        href: "/destinations/deqin",
        linkLabel: "Deqin, Meili and Feilaisi planning guide",
      },
      {
        title: "Shangri-La",
        body: "Tibetan cultural context, Songzanlin Monastery and highland stays that need careful altitude and route planning.",
        href: "/destinations/shangri-la",
        linkLabel: "Shangri-La guide",
      },
      {
        title: "Tongren, Guizhou",
        body: "Bijiang city evenings, Jinjiang walks and Zhongnanmen context, with city-versus-Jiangkou rooms and separate Tongren or Tongren South station transfers.",
        href: "/destinations/tongren",
        linkLabel: "Tongren city and Fanjingshan gateway planning guide",
      },
      {
        title: "Fanjingshan / Fanjing Mountain",
        body: "Forest and Buddhist mountain context, with eastern approach, remaining summit steps, Jiangkou rooms and complete gateway journeys clearly compared.",
        href: "/destinations/fanjing-mountain",
        linkLabel: "Fanjingshan routes, steps and hotel planning guide",
      },
      {
        title: "Guiyang",
        body: "Guizhou collections, regional food and a separately chosen Qingyan outing, with hotel districts, rain alternatives and complete onward journeys compared clearly.",
        href: "/destinations/guiyang",
        linkLabel: "Guiyang city and Guizhou route guide",
      },
      {
        title: "Chishui",
        body: "Northern Guizhou red cliffs, waterfalls and forest, with actual scenic entrances, steps, city or rural stays and a contrasting town interest selected deliberately.",
        href: "/destinations/chishui",
        linkLabel: "Chishui Danxia and waterfall guide",
      },
      {
        title: "Zhenyuan",
        body: "Historic river-town evenings, Qinglongdong and selected lanes, with quiet rooms, luggage access and a distinct Wuyang River excursion assessed separately.",
        href: "/destinations/zhenyuan",
        linkLabel: "Zhenyuan old town and stay guide",
      },
      {
        title: "Libo",
        body: "Forested karst and Xiaoqikong river scenery, with wet-path walking, internal transport and the separate Daqikong visit chosen for the available days.",
        href: "/destinations/libo",
        linkLabel: "Libo karst and walking guide",
      },
      {
        title: "Zhaoxing",
        body: "Dong village towers, bridges and shared spaces, with room comfort, willing cultural hosts and the separate Tang'an route reviewed carefully.",
        href: "/destinations/zhaoxing",
        linkLabel: "Zhaoxing Dong village guide",
      },
      {
        title: "Kunming",
        body: "A considered Yunnan city stay for Green Lake, regional food and a separately planned Stone Forest outing, with central, lakeside and connection hotels compared.",
        href: "/destinations/kunming",
        linkLabel: "Kunming city and Stone Forest guide",
      },
      {
        title: "Xishuangbanna",
        body: "Tropical plant interests, Dai cultural context and a considered resort stay, with Jinghong city and Menglun's botanical-garden chapter clearly distinguished.",
        href: "/destinations/xishuangbanna",
        linkLabel: "Xishuangbanna gardens and stay guide",
      },
      {
        title: "Mangshi",
        body: "A slower Dehong city stay for selected Buddhist architecture and regional food, with room comfort and a separate Tengchong connection planned deliberately.",
        href: "/destinations/mangshi",
        linkLabel: "Mangshi pagodas and food guide",
      },
      {
        title: "Lancang",
        body: "A county route beyond the Jingmai headline: Lahu cultural learning, a confirmed Laodabao visit, town services and a separate mountain stay.",
        href: "/destinations/lancang",
        linkLabel: "Lancang culture and county stay guide",
      },
      {
        title: "Jingmai Mountain",
        body: "Old tea-forest cultural landscape, distinct village bases and confirmed tea learning, with the full mountain journey and actual room standards considered.",
        href: "/destinations/jingmai-mountain",
        linkLabel: "Jingmai Mountain tea forests and stay guide",
      },
      {
        title: "Nuodeng",
        body: "A hillside salt village in Yunlong, with selected historic lanes, optional ham interests and a guesthouse chosen around steps, luggage and real comfort.",
        href: "/destinations/nuodeng",
        linkLabel: "Nuodeng village and overnight guide",
      },
      {
        title: "Pu'er",
        body: "A tea-country chapter with Simao city, confirmed learning visits and a separate Jingmai Mountain stay clearly distinguished by place, host and full road journey.",
        href: "/destinations/puer",
        linkLabel: "Pu'er tea and Jingmai planning guide",
      },
      {
        title: "Lhasa",
        body: "Palace, temple and city history with altitude-aware pacing, actual stair demands and the Tibet arrangements applicable to the guest reviewed before booking.",
        href: "/destinations/lhasa",
        linkLabel: "Lhasa culture and altitude planning guide",
      },
      {
        title: "Nyingchi",
        body: "Selected forest and valley chapters, with Bayi, Lulang, lake and canyon bases compared through complete road days, sleeping elevations and actual room comfort.",
        href: "/destinations/nyingchi",
        linkLabel: "Nyingchi valleys and stay guide",
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
      "Xi'an offers an imperial-history gateway, while Xining introduces Qinghai's city culture before a separately planned higher lake or mountain route. Gansu's corridor cities and Ningxia add different chapters. Compare complete rail, flight and road journeys, with useful nights and the altitude profile made clear rather than treating the northwest as one compact loop.",
    places: [
      {
        title: "Sayram Lake",
        body: "Choose useful lake stops and a real room before committing to a full circuit, with Bole and Yining bases, wind, flowers and winter conditions explained.",
        href: "/destinations/sayram-lake",
        linkLabel: "Sayram Lake routes, rooms and seasons guide",
      },
      {
        title: "Kuqa",
        body: "Ancient Kucha and Kizil cave-art context, Subash Buddhist ruins and a separate canyon decision, with protected-site rules and useful Silk Road nights made clear.",
        href: "/destinations/kuqa",
        linkLabel: "Kuqa, Kizil and Kucha history guide",
      },
      {
        title: "Xi'an",
        body: "The Terracotta Army, the city wall and the Muslim Quarter in China's ancient capital.",
        href: "/destinations/xian",
        linkLabel: "Xi'an guide",
      },
      {
        title: "Dunhuang",
        body: "Buddhist art at Mogao, an oasis base and selected dune time, with cave arrangements and hotel comfort planned before a longer corridor journey.",
        href: "/destinations/dunhuang",
        linkLabel: "Dunhuang travel guide",
      },
      {
        title: "Jiayuguan",
        body: "The Ming fortified pass and separately selected wall sites, with a through-stop or city overnight matched to the complete corridor journey.",
        href: "/destinations/jiayuguan",
        linkLabel: "Jiayuguan fortress guide",
      },
      {
        title: "Lanzhou",
        body: "Gansu collections, Yellow River city life and beef noodles, with hotel areas, actual gateways and a separate Bingling excursion compared clearly.",
        href: "/destinations/lanzhou",
        linkLabel: "Lanzhou city and gateway guide",
      },
      {
        title: "Xiahe and Labrang Monastery",
        body: "A considered Tibetan Buddhist culture stay, with town comfort, roughly 2,900-meter altitude and a separate Sangke grassland outing planned explicitly.",
        href: "/destinations/xiahe",
        linkLabel: "Xiahe and Labrang planning guide",
      },
      {
        title: "Tianshui and Maijishan",
        body: "Cliffside Buddhist sculpture and a distinct Qinzhou city chapter, with elevated walkways, cave arrangements and hotel districts compared before booking.",
        href: "/destinations/tianshui",
        linkLabel: "Tianshui and Maijishan guide",
      },
      {
        title: "Zhangye",
        body: "Colorful Danxia, contrasting Binggou rock forms and city Buddhist heritage, with park access and hotel location selected around usable days.",
        href: "/destinations/zhangye",
        linkLabel: "Zhangye travel guide",
      },
      {
        title: "Yinchuan",
        body: "Western Xia history, Helan rock art and Hui food culture, with city and foothill stays compared by actual location.",
        href: "/destinations/yinchuan",
        linkLabel: "Yinchuan travel guide",
      },
      {
        title: "Zhongwei",
        body: "Yellow River and desert landscapes, with a clear choice between city hotels, Shapotou visits and a confirmed desert lodge.",
        href: "/destinations/zhongwei",
        linkLabel: "Zhongwei desert guide",
      },
      {
        title: "Yushu",
        body: "A selective Jiegu city stay for monastery context, devotional Mani stones and religious memory, with a modest plateau arrival and actual hotel checks.",
        href: "/destinations/yushu",
        linkLabel: "Yushu culture, altitude and stay guide",
      },
      {
        title: "Mangya",
        body: "Western Qaidam lake and spring decisions, distinguishing Mangya Emerald Lake from Dachaidan, Huatugou rooms and separate Lenghu road stages.",
        href: "/destinations/mangya",
        linkLabel: "Mangya lake, spring and stay guide",
      },
      {
        title: "Xining",
        body: "Qinghai's capital for regional collections, Kumbum Monastery and living city culture, with a modest arrival schedule and a separately reviewed higher-altitude chapter.",
        href: "/destinations/xining",
        linkLabel: "Xining culture and stay guide",
      },
      {
        title: "Tongren Qinghai",
        body: "Regong art and thangka interpretation, with Wutun and Rongwo contexts, two-night planning and a considered connection to Xining or Xiahe.",
        href: "/destinations/tongren-qinghai",
        linkLabel: "Tongren Regong art and stay guide",
      },
      {
        title: "Qinghai Lake",
        body: "A high plateau lake best approached through a selected shore route, with day visits, overnight comfort, access and higher sleeping elevations compared honestly.",
        href: "/destinations/qinghai-lake",
        linkLabel: "Qinghai Lake day trip and overnight guide",
      },
      {
        title: "Hemu",
        body: "A village-and-river stay with specific cabin facilities, a suitable hillside viewpoint and winter sightseeing distinguished from separately arranged skiing.",
        href: "/destinations/hemu",
        linkLabel: "Hemu village, cabins and winter guide",
      },
      {
        title: "Kanas",
        body: "Altai lake, river bays and a separate Guanyu Pavilion choice, with Jiadengyu versus in-area rooms, autumn timing and winter operation planned explicitly.",
        href: "/destinations/kanas",
        linkLabel: "Kanas lake, seasons and hotel guide",
      },
      {
        title: "Urumqi",
        body: "Regional museum context, food and a considered city base, with actual gateways and a separate Tianchi mountain-lake day assessed clearly.",
        href: "/destinations/urumqi",
        linkLabel: "Urumqi city and onward-route guide",
      },
      {
        title: "Turpan",
        body: "Oasis settlement, irrigation and Buddhist-art choices, with exposed ruin walks, summer heat and an overnight versus day visit compared honestly.",
        href: "/destinations/turpan",
        linkLabel: "Turpan ruins and stay guide",
      },
      {
        title: "Langmusi",
        body: "Distinct Gansu-side Sertri and Sichuan-side Kirti / Ge’erdi monastery choices, with actual town rooms, valley-walking assessment and separate Xiahe or Zoige road stages.",
        href: "/destinations/langmusi",
        linkLabel: "Langmusi monastery, walking and hotel guide",
      },
      {
        title: "Gannan",
        body: "Choose distinct Xiahe, Langmusi or Zhagana chapters, with actual hotel bases, full road days, walking choices and a separate Sichuan continuation.",
        href: "/destinations/gannan",
        linkLabel: "Gannan route and hotel-base guide",
      },
      {
        title: "Qilian County",
        body: "Zhuo’er Mountain, Arou Monastery and selected grassland scenery, with Babao hotel choices and complete higher-road stages between Xining and Zhangye.",
        href: "/destinations/qilian",
        linkLabel: "Qilian mountain, monastery and hotel guide",
      },
      {
        title: "Tashkurgan / Taxkorgan",
        body: "Stone City and the Alar grassland setting, with complete Kashgar road days, sleeping elevations, hotel comfort and traveler-specific access reviewed before confirmation.",
        href: "/destinations/tashkurgan",
        linkLabel: "Tashkurgan Pamir route and hotel guide",
      },
      {
        title: "Kashgar",
        body: "An oasis-city stay for old-city interpretation, Uyghur food and a real craft interest, with any Pamir or Tashkurgan extension planned separately.",
        href: "/destinations/kashgar",
        linkLabel: "Kashgar city and route guide",
      },
      {
        title: "Yining and selected Ili routes",
        body: "City neighborhoods and regional food, followed by carefully chosen lake or grassland chapters with their own bases, road days and current access review.",
        href: "/destinations/yining",
        linkLabel: "Yining city and Ili planning guide",
      },
      {
        title: "Other Xinjiang destinations",
        body: "Other Xinjiang regional interests need their own time and transport. Exact accommodation, traveler-specific arrangements and any route requirements must be confirmed before booking.",
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
    metaDescription: `Plan private ${region.name} tours with AVIORA. Compare destinations, local guides, transport and route options. Request a written proposal for your dates.`,
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
        "Our core published journeys cover mainland China. Hong Kong and Macao planning guides help with local stays and onward connections, while Taipei and Tainan provide Taiwan planning guidance. Local providers, services, entry eligibility and cross-boundary arrangements are confirmed separately before any service commitment.",
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
