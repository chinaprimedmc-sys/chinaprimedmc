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
            { label: "Signature Journeys", href: "/fixed-itinerary-china-tours" },
            { label: "Tailor-Made Journeys", href: "/tailor-made-china-tours" },
            { label: "Day Extensions", href: "/private-china-day-tours" },
          ],
        },
        {
          links: [
            { label: "All Journeys", href: "/tours" },
            { label: "Family Journeys", href: "/tours?style=family#journey-catalog" },
            { label: "First-Time Visitors", href: "/tours?style=first-trip#journey-catalog" },
          ],
        },
        {
          links: [
            { label: "Culture & Heritage", href: "/tours?style=culture#journey-catalog" },
            { label: "Multi-City Journeys", href: "/tours?scope=multi-city#journey-catalog" },
            { label: "Guide & Driver Only", href: "/private-guide-and-driver-china" },
          ],
        },
      ],
      featured: {
        title: "Beijing, Xi'an & Shanghai",
        meta: "10 Days | Signature Private Journey",
        label: "Explore Journey",
        href: "/tours/beijing-xian-shanghai-private-10-day-tour",
        image: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp",
        imageAlt: "The Great Wall at sunrise on AVIORA's Beijing, Xi'an and Shanghai journey",
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
            { label: "Destination guides", href: "/destinations" },
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
            { label: "Guilin & Yangshuo", href: "/destinations/guilin" },
          ],
        },
      ],
    },
    {
      id: "why-aviora",
      label: "ABOUT AVIORA",
      href: "/about",
      activePrefixes: ["/why-us", "/about", "/company", "/reviews"],
      columns: [
        {
          links: [
            { label: "Our Approach", href: "/about" },
            { label: "Travel Guides by Your Needs", href: "/about#traveler-guides" },
            { label: "Private Guides", href: "/about#people" },
          ],
        },
        {
          links: [
            { label: "Private Transportation", href: "/about#the-standard" },
            { label: "Hotels & Dining", href: "/about#the-standard" },
            { label: "Founder's Story", href: "/about/founder" },
            { label: "Company & Registration", href: "/company" },
          ],
        },
      ],
    },
    {
      id: "travel-guide",
      label: "TRAVEL JOURNAL",
      href: "/journal",
      activePrefixes: ["/journal"],
      columns: [
        {
          links: [
            { label: "All Travel Journal Articles", href: "/journal" },
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
