/**
 * 本模块职责：集中维护 Journeys 页的权威英文文案与固定业务选项。
 * 输入：无运行时输入，内容由品牌与运营规则共同确认。
 * 输出：页面板块、筛选器与 SEO 可以共同复用的只读配置。
 * 不负责：产品价格、线路详情、筛选状态或视觉样式。
 * 关键规则：公开页面只显示英文；同一事实不得在组件内另写变体。
 */

export const journeysDefinition =
  "AVIORA is a licensed China-based inbound tour operator that designs and operates carefully selected private China journeys for international travelers.";

export const journeyTrustProofs = [
  {
    value: "No Forced Shopping Stops",
    detail: "Retail visits are added only when you request them.",
  },
  {
    value: "Private From Start To Finish",
    detail: "No fixed departures or shared tour timetables.",
  },
  {
    value: "Transparent Price Basis",
    detail: "Each starting price states its unit and party size.",
  },
  {
    value: "Everything Confirmed In Writing",
    detail: "Inclusions, exclusions and gratuities are clear before booking.",
  },
] as const;

export const journeyOperatingStandards = [
  {
    title: "One accountable China team",
    description: "Planning, supplier checks, handovers and on-trip support stay connected.",
  },
  {
    title: "Guides matched, not assigned blindly",
    description:
      "Destination knowledge, communication style and your individual needs are considered.",
  },
  {
    title: "Vehicles suited to the journey",
    description:
      "Vehicle size, luggage space and service times are confirmed for your actual party.",
  },
  {
    title: "Bookings verified before arrival",
    description: "Hotels, tickets, transfers and important requirements are reviewed in advance.",
  },
  {
    title: "No material change without approval",
    description: "Important substitutions are explained and agreed before they enter your journey.",
  },
  {
    title: "Local help when plans change",
    description: "Our team in China responds when weather, timing or supplier conditions change.",
  },
] as const;

export const journeyPlanningSteps = [
  {
    number: "01",
    title: "Tell us what matters",
    description: "Share your dates, interests, pace, accommodation preferences and personal needs.",
  },
  {
    number: "02",
    title: "Receive your private proposal",
    description:
      "We shape a coherent route around you instead of placing you into a fixed group tour.",
  },
  {
    number: "03",
    title: "Confirm every detail",
    description: "Inclusions, exclusions, hotels, transport and pricing are documented clearly.",
  },
  {
    number: "04",
    title: "Travel with one local team",
    description: "The same China-based team stays responsible from arrival to final departure.",
  },
] as const;

export const journeyFaqs = [
  {
    question: "Are AVIORA journeys private or group tours?",
    answer:
      "Every journey published here is privately operated for your traveling party. AVIORA does not place you into a fixed-departure group tour.",
  },
  {
    question: "Can a published itinerary be changed?",
    answer:
      "Yes. Each itinerary is a considered starting point. Dates, pace, hotels, room categories, experiences and transport can be adjusted before the written proposal is confirmed.",
  },
  {
    question: "What do the published starting prices mean?",
    answer:
      "Each card states whether its price is per person or for a private group, together with the party-size basis. Your exact price is confirmed only after dates, availability, rooms and services are documented in a proposal.",
  },
  {
    question: "Who operates the journey in China?",
    answer:
      "AVIORA journeys are designed and operated through Youyouhui (Guangzhou) International Travel Service Co., Ltd., a registered China travel company licensed to conduct inbound tourism business.",
  },
] as const;

export const journeyTypeOptions = [
  { value: "all", label: "All Journeys" },
  { value: "day-tour", label: "Day Tours" },
  { value: "single-city", label: "Single-City" },
  { value: "multi-city", label: "Multi-City" },
] as const;

export const journeyDurationOptions = [
  { value: "all", label: "Any duration" },
  { value: "one-day", label: "1 day" },
  { value: "two-three", label: "2–3 days" },
  { value: "four-seven", label: "4–7 days" },
  { value: "eight-eleven", label: "8–11 days" },
  { value: "twelve-plus", label: "12+ days" },
] as const;

export const journeyRegionOptions = [
  { value: "all", label: "All regions" },
  { value: "north", label: "Northern China" },
  { value: "east", label: "Eastern China" },
  { value: "southwest", label: "Southwest China" },
  { value: "south", label: "Southern China" },
  { value: "northwest", label: "Northwest China" },
] as const;

export const journeyStyleOptions = [
  { value: "all", label: "Any travel style" },
  { value: "first-trip", label: "First China trip" },
  { value: "culture", label: "Culture & history" },
  { value: "nature", label: "Nature & scenery" },
  { value: "family", label: "Family travel" },
  { value: "food", label: "Food & local life" },
  { value: "wellness", label: "Wellness & slower pace" },
] as const;
