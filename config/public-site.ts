import type { NavigationItem } from "@/types/component-library";

export const publicNavigation: NavigationItem[] = [
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      {
        label: "All destinations",
        href: "/destinations",
        description: "Find the China that fits your season, style, and pace.",
      },
      {
        label: "Beijing",
        href: "/destination/beijing",
        description: "Imperial history, hutongs, and private Great Wall timing.",
      },
      {
        label: "Chengdu",
        href: "/destination/chengdu",
        description: "Pandas, teahouses, Sichuan flavor, and family-friendly rhythm.",
      },
      {
        label: "Guilin",
        href: "/destination/guilin",
        description: "Karst rivers, soft adventure, photography, and Yangshuo villages.",
      },
    ],
  },
  {
    label: "Journeys",
    href: "/journeys",
    children: [
      {
        label: "All private journeys",
        href: "/journeys",
        description: "Browse sample routes that can be tailored around your travelers.",
      },
      {
        label: "First China",
        href: "/journeys?style=First-time%20China",
        description: "A calm introduction to the icons without checklist fatigue.",
      },
      {
        label: "Family China",
        href: "/journeys?style=Family",
        description: "Pandas, hands-on culture, lighter days, and smarter hotels.",
      },
      {
        label: "Luxury China",
        href: "/journeys?style=Luxury",
        description: "Better pacing, stronger hotels, and quieter access where possible.",
      },
    ],
  },
  {
    label: "Experiences",
    href: "/experiences",
    children: [
      {
        label: "All experiences",
        href: "/experiences",
        description: "Culture, food, nature, family, and luxury moments for private routes.",
      },
      {
        label: "Culture",
        href: "/experiences?category=Culture",
        description: "Tea, temples, craft neighborhoods, and living heritage.",
      },
      {
        label: "Food",
        href: "/experiences?category=Food",
        description: "Local flavors with comfort, dietary awareness, and context.",
      },
      {
        label: "Nature",
        href: "/experiences?category=Nature",
        description: "Rivers, mountains, forests, soft hikes, and seasonal light.",
      },
    ],
  },
  {
    label: "Travel Guide",
    href: "/travel-guide",
    children: [
      {
        label: "Travel guide home",
        href: "/travel-guide",
        description: "Practical inspiration for first-time and returning China travelers.",
      },
      {
        label: "First trip to China",
        href: "/journal/how-to-plan-a-first-private-trip-to-china",
        description: "Pace, trains, hotels, payments, meals, and guide style.",
      },
      {
        label: "China with kids",
        href: "/journal/china-with-kids-what-actually-works",
        description: "What actually works for families traveling across China.",
      },
      {
        label: "Best time to visit",
        href: "/journal/best-time-for-a-first-china-journey",
        description: "Seasonal comfort, school holidays, and photography light.",
      },
    ],
  },
  { label: "Why Us", href: "/about" },
  { label: "Plan", href: "/contact" },
];

export const planJourneyHref =
  "mailto:chinaprimedmc@gmail.com?subject=Private%20China%20Journey%20Inquiry&body=Hi%20China%20Prime%20DMC%2C%0A%0AI%27d%20like%20help%20planning%20a%20private%20China%20journey.%0A%0ATravelers%3A%0ADates%3A%0ADestinations%20or%20interests%3A%0AComfort%20level%3A%0AKey%20concerns%3A%0A";

export const publicFooterColumns: Array<{ title: string; items: NavigationItem[] }> = [
  {
    title: "Explore",
    items: [
      { label: "Destinations", href: "/destinations" },
      { label: "Private journeys", href: "/journeys" },
      { label: "Experiences", href: "/experiences" },
      { label: "Travel guide", href: "/travel-guide" },
    ],
  },
  {
    title: "Travel styles",
    items: [
      { label: "First-time China", href: "/journeys?style=First-time%20China" },
      { label: "Family China", href: "/journeys?style=Family" },
      { label: "Luxury China", href: "/journeys?style=Luxury" },
      { label: "Nature and photography", href: "/journeys?style=Photography" },
    ],
  },
  {
    title: "Plan",
    items: [
      { label: "Start a private inquiry", href: planJourneyHref },
      { label: "Why China Prime", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Search the site", href: "/search" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About China Prime DMC", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const publicSocialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr" },
  { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc" },
];
