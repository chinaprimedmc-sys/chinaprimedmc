import {
  BarChart3,
  BookOpenText,
  FileSearch,
  Gauge,
  Globe2,
  ImageIcon,
  Inbox,
  Luggage,
  MapPinned,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

import { destinationAsset } from "@/content/destinations/assets";
import { journalArticles } from "@/content/journal";
import { tours } from "@/content/tours";

export const adminNavigation = [
  { label: "数据概览", href: "/admin", icon: Gauge },
  { label: "目的地管理", href: "/admin/destinations", icon: MapPinned },
  { label: "线路管理", href: "/admin/tours", icon: Luggage },
  { label: "旅行体验", href: "/admin/experiences", icon: Sparkles },
  { label: "旅行杂志", href: "/admin/journal", icon: BookOpenText },
  { label: "媒体资源", href: "/admin/media", icon: ImageIcon },
  { label: "询盘管理", href: "/admin/inquiries", icon: Inbox },
  { label: "客户管理", href: "/admin/customers", icon: Users, disabled: true },
  { label: "SEO 管理", href: "/admin/seo", icon: FileSearch },
  { label: "网站设置", href: "/admin/settings", icon: Settings },
  { label: "数据统计", href: "/admin/analytics", icon: BarChart3, disabled: true },
  { label: "系统设置", href: "/admin/system", icon: Globe2, disabled: true },
];

export const dashboardStats = [
  { label: "今日询盘", value: "8", helper: "较昨日 +3", tone: "positive" },
  { label: "本周新增询盘", value: "42", helper: "家庭客群占 48%", tone: "positive" },
  { label: "待发布内容", value: "6", helper: "3 条线路，2 篇文章，1 个目的地", tone: "warning" },
  { label: "网站状态", value: "正常", helper: "构建、SEO、媒体资源状态良好", tone: "neutral" },
];

export const hotDestinations = [
  { name: "北京", views: "2,418", trend: "+18%", status: "已发布" },
  { name: "成都", views: "1,936", trend: "+22%", status: "草稿待完善" },
  { name: "上海", views: "1,684", trend: "+9%", status: "已发布" },
];

export const recentEdits = [
  { title: "First China, Beautifully Paced", type: "线路", owner: "运营组", time: "12 分钟前" },
  {
    title: "How to Plan a First Private Trip to China",
    type: "文章",
    owner: "内容组",
    time: "1 小时前",
  },
  { title: "北京目的地页 FAQ", type: "目的地", owner: "SEO", time: "今天 09:20" },
  { title: "Search Discovery Index", type: "系统内容", owner: "产品", time: "昨天" },
];

export const adminDestinations = [
  {
    name: "北京",
    slug: "beijing",
    status: "已发布",
    region: "华北",
    updatedAt: "今天 10:24",
    seoScore: 96,
    image: destinationAsset.beijingForbiddenCity,
  },
  {
    name: "成都",
    slug: "chengdu",
    status: "草稿",
    region: "西南",
    updatedAt: "昨天",
    seoScore: 82,
    image: destinationAsset.chengduPanda,
  },
  {
    name: "上海",
    slug: "shanghai",
    status: "待发布",
    region: "华东",
    updatedAt: "2 天前",
    seoScore: 88,
    image: destinationAsset.shanghaiSkyline,
  },
];

export const adminTours = tours.map((tour, index) => ({
  title: tour.title,
  slug: tour.slug,
  status: index === 0 ? "已发布" : "草稿",
  duration: tour.duration,
  route: tour.route,
  styles: tour.styles,
  updatedAt: index === 0 ? "今天 11:10" : "本周",
  seoScore: 94 - index * 4,
  image: tour.hero.image,
}));

export const adminExperiences = [
  {
    title: "成都熊猫清晨体验",
    city: "成都",
    category: "亲子 / 自然",
    status: "已发布",
    linkedTours: 3,
    image: destinationAsset.chengduPanda,
  },
  {
    title: "私人导游深度讲解",
    city: "全国",
    category: "文化 / 首次访华",
    status: "已发布",
    linkedTours: 8,
    image: destinationAsset.beijingForbiddenCityWide,
  },
  {
    title: "高铁无压力出行",
    city: "全国",
    category: "交通 / 家庭",
    status: "草稿",
    linkedTours: 5,
    image: destinationAsset.shanghaiSkyline,
  },
];

export const adminArticles = journalArticles.map((article, index) => ({
  title: article.title,
  slug: article.slug,
  category: article.category,
  status: index === 0 ? "已发布" : index === 1 ? "草稿" : "待发布",
  author: article.author.name,
  updatedAt: index === 0 ? "今天" : "本周",
  seoScore: 92 - index * 3,
  image: article.hero.image,
}));

export const mediaAssets = [
  {
    name: "北京故宫 Hero",
    type: "目的地",
    size: "420 KB",
    alt: destinationAsset.beijingForbiddenCity.alt,
    image: destinationAsset.beijingForbiddenCity,
  },
  {
    name: "成都熊猫体验",
    type: "体验",
    size: "386 KB",
    alt: destinationAsset.chengduPanda.alt,
    image: destinationAsset.chengduPanda,
  },
  {
    name: "上海天际线",
    type: "城市",
    size: "512 KB",
    alt: destinationAsset.shanghaiSkyline.alt,
    image: destinationAsset.shanghaiSkyline,
  },
];

export const inquiries = [
  {
    name: "Sarah Miller",
    country: "United States",
    email: "sarah@example.com",
    source: "/tours/first-china-beautifully-paced",
    interest: "11 天首次访华家庭行程",
    submittedAt: "今天 09:42",
    status: "新询盘",
  },
  {
    name: "Thomas Weber",
    country: "Germany",
    email: "thomas@example.de",
    source: "/search?q=panda",
    interest: "成都熊猫 + 北京文化",
    submittedAt: "今天 08:15",
    status: "跟进中",
  },
  {
    name: "Amira Khan",
    country: "United Kingdom",
    email: "amira@example.co.uk",
    source: "/destinations/beijing",
    interest: "穆斯林友好家庭定制",
    submittedAt: "昨天",
    status: "已报价",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    email: "marco@example.it",
    source: "/journal/best-time-for-a-first-china-journey",
    interest: "秋季高端摄影路线",
    submittedAt: "2 天前",
    status: "已成交",
  },
];

export const seoItems = [
  {
    page: "首页",
    path: "/",
    titleLength: 67,
    descriptionLength: 166,
    status: "优秀",
  },
  {
    page: "北京目的地",
    path: "/destinations/beijing",
    titleLength: 62,
    descriptionLength: 151,
    status: "优秀",
  },
  {
    page: "Search Discovery",
    path: "/search",
    titleLength: 44,
    descriptionLength: 154,
    status: "良好",
  },
  {
    page: "Travel Journal",
    path: "/journal",
    titleLength: 31,
    descriptionLength: 158,
    status: "良好",
  },
];

export const siteSettings = {
  brand: "China Prime DMC",
  email: "chinaprimedmc@gmail.com",
  whatsapp: "预留",
  facebook: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/chinaprimedmc",
  copyright: "China Prime DMC. All rights reserved.",
};
