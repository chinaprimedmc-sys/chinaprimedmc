/** Small public identifiers shared with analytics; never send free-text preferences. */
export const travelerGuideRoutes = [
  { id: "family", path: "/china-family-tours", source: "family-guide" },
  { id: "women", path: "/china-tours-for-women", source: "women-travel-guide" },
  { id: "seniors", path: "/china-tours-for-seniors", source: "senior-travel-guide" },
  { id: "muslim", path: "/china-tours-for-muslim-travelers", source: "muslim-travel-guide" },
  { id: "first-time", path: "/first-time-china-tours", source: "first-time-guide" },
  {
    id: "special-interests",
    path: "/special-interest-china-tours",
    source: "special-interest-guide",
  },
] as const;

const brandPages = [
  { id: "about", path: "/about" },
  { id: "company", path: "/company" },
  { id: "founder", path: "/about/founder" },
] as const;

export function travelerContentContext(pathname: string, search = "") {
  const guide = travelerGuideRoutes.find((item) => item.path === pathname);
  const brand = brandPages.find((item) => item.path === pathname);
  if (guide) return { traveler_guide: guide.id };
  if (brand) return { brand_page: brand.id };
  if (pathname !== "/start-planning") return {};
  const source = new URLSearchParams(search).get("source");
  const originatingGuide = travelerGuideRoutes.find((item) => item.source === source);
  if (originatingGuide) return { traveler_guide: originatingGuide.id };
  if (source === "founder-story") return { brand_page: "founder" };
  if (source === "about-capability" || source === "about-service-cases")
    return { brand_page: "about" };
  return {};
}
