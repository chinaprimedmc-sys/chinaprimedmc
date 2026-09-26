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
      activePrefixes: ["/tours"],
      columns: [
        {
          links: [
            { label: "All Journeys", href: "/tours" },
            { label: "Beijing Journeys", href: "/tours?q=Beijing#journey-catalog" },
            { label: "Classic China", href: "/tours?style=first-trip#journey-catalog" },
          ],
        },
        {
          links: [
            { label: "Multi-City Journeys", href: "/tours?scope=multi-city#journey-catalog" },
            { label: "Family Journeys", href: "/tours?style=family#journey-catalog" },
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
      href: "/destinations",
      activePrefixes: ["/destinations"],
      columns: [
        {
          links: [
            { label: "Beijing", href: "/destinations/beijing" },
            { label: "Xi'an", href: "/destinations/xian" },
          ],
        },
        {
          links: [
            { label: "Shanghai", href: "/destinations/shanghai" },
            { label: "Chengdu", href: "/destinations/chengdu" },
          ],
        },
        {
          links: [{ label: "All Destinations", href: "/destinations" }],
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
    {
      id: "travel-trade",
      label: "TRAVEL TRADE",
      href: "/china-dmc",
      activePrefixes: ["/china-dmc"],
      secondary: true,
      columns: [
        {
          links: [
            { label: "For Travel Advisors", href: "/china-dmc" },
            { label: "China DMC Services", href: "/china-dmc#capabilities" },
            { label: "Partner With Us", href: "/china-dmc#trade-brief" },
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
        label: "UK / International",
        number: "+44 7985 052302",
        href: "https://wa.me/447985052302",
      },
      {
        label: "China",
        number: "+86 177 8872 1361",
        href: "https://wa.me/8617788721361",
      },
    ],
  },
} as const;
