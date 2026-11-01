export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationColumn = {
  label?: string;
  links: NavigationLink[];
};

export type NavigationFeaturedJourney = {
  title: string;
  meta: string;
  label: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type NavigationGroup = {
  id: "journeys" | "destinations" | "why-aviora" | "travel-guide" | "travel-trade";
  label: string;
  href: string;
  activePrefixes: string[];
  columns: NavigationColumn[];
  featured?: NavigationFeaturedJourney;
  secondary?: boolean;
};

export const navigationConfig = {
  brand: {
    href: "/",
    logo: "/brand/aviora-logo-transparent.png",
    label: "AVIORA China",
  },
  groups: [
    {
      id: "journeys",
      label: "JOURNEYS",
      href: "/tours",
      activePrefixes: [
        "/tours",
        "/tailor-made-china-tours",
        "/fixed-itinerary-china-tours",
        "/private-china-day-tours",
        "/private-guide-and-driver-china",
      ],
      columns: [
        {
          links: [
            { label: "All Journeys", href: "/tours" },
            { label: "Tailor-Made Tours", href: "/tailor-made-china-tours" },
            { label: "Fixed Itineraries", href: "/fixed-itinerary-china-tours" },
          ],
        },
        {
          links: [
            { label: "Private Day Tours", href: "/private-china-day-tours" },
            { label: "Guide & Driver", href: "/private-guide-and-driver-china" },
            { label: "Family Journeys", href: "/tours?style=family#journey-catalog" },
          ],
        },
        {
          links: [
            { label: "Multi-City Journeys", href: "/tours?scope=multi-city#journey-catalog" },
            { label: "Classic China", href: "/tours?style=first-trip#journey-catalog" },
            { label: "Cultural Journeys", href: "/tours?style=culture#journey-catalog" },
          ],
        },
      ],
      featured: {
        title: "Beijing in Five Days",
        meta: "5 Days | Fully Private",
        label: "Explore Journey",
        href: "/tours/beijing-great-wall-private-5-day-tour",
        image: "/tours/beijing-unhurried/hero.webp",
        imageAlt: "The Great Wall outside Beijing on a clear morning",
      },
    },
    {
      id: "destinations",
      label: "DESTINATIONS",
      href: "/china-destinations",
      activePrefixes: ["/destinations", "/china-destinations"],
      columns: [
        {
          links: [
            { label: "All of China", href: "/china-destinations" },
            { label: "North China", href: "/china-destinations/north-china" },
            { label: "East China", href: "/china-destinations/east-china" },
            { label: "Central China", href: "/china-destinations/central-china" },
          ],
        },
        {
          links: [
            { label: "South China", href: "/china-destinations/south-china" },
            { label: "Southwest China", href: "/china-destinations/southwest-china" },
            { label: "Northwest China", href: "/china-destinations/northwest-china" },
            { label: "Northeast China", href: "/china-destinations/northeast-china" },
          ],
        },
        {
          links: [
            { label: "Beijing", href: "/destinations/beijing" },
            { label: "Xi'an", href: "/destinations/xian" },
            { label: "Shanghai", href: "/destinations/shanghai" },
            { label: "Chengdu", href: "/destinations/chengdu" },
          ],
        },
      ],
    },
    {
      id: "why-aviora",
      label: "WHY AVIORA",
      href: "/why-us",
      activePrefixes: ["/why-us", "/about"],
      columns: [
        {
          links: [
            { label: "Our Approach", href: "/why-us" },
            { label: "Fully Private Travel", href: "/about#designed-around-you" },
            { label: "Private Guides", href: "/about#people" },
          ],
        },
        {
          links: [
            { label: "Private Transportation", href: "/about#the-standard" },
            { label: "Hotels & Dining", href: "/about#the-standard" },
            { label: "Founder's Story", href: "/about/founder" },
            { label: "About AVIORA China", href: "/about" },
          ],
        },
      ],
    },
    {
      id: "travel-guide",
      label: "TRAVEL GUIDE",
      href: "/journal",
      activePrefixes: ["/journal"],
      columns: [
        {
          links: [
            { label: "China Travel Guide", href: "/journal" },
            {
              label: "Visa & Entry",
              href: "/journal/china-240-hour-visa-free-transit-guide",
            },
            {
              label: "Best Time to Visit",
              href: "/journal/best-time-to-visit-china",
            },
          ],
        },
        {
          links: [
            {
              label: "Getting Around China",
              href: "/journal/china-high-speed-train-foreigners",
            },
            { label: "Journal", href: "/journal" },
          ],
        },
      ],
    },
  ] satisfies NavigationGroup[],
  action: {
    label: "Start planning",
    href: "/start-planning",
    whatsapp: [
      {
        label: "China WhatsApp",
        number: "+86 180 2743 8191",
        href: "https://wa.me/8618027438191",
      },
    ],
  },
} as const;
