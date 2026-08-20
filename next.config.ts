import type { NextConfig } from "next";

const r2PublicUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL;
const r2PublicHost = r2PublicUrl ? new URL(r2PublicUrl).hostname : null;

const securityHeaders = [
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingIncludes: {
    "/journal/[slug]": ["./content/journal/articles/**/*.md"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/i,
      type: "asset/source",
    });
    return config;
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/:path*.(avif|webp|png|jpg|jpeg|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/styles",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/styles/:path*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/planning",
        destination: "/start-planning",
        permanent: true,
      },
      {
        source: "/planning/faq",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/planning/visa",
        destination: "/journal/china-240-hour-visa-free-transit-guide",
        permanent: true,
      },
      {
        source: "/tours/beijing-unhurried-private-5-day-journey",
        destination: "/tours/beijing-great-wall-private-5-day-tour",
        permanent: true,
      },
      {
        source: "/tours/family-china",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/tours/quiet-luxury-china",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/tours/slow-travel-china",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/tours/photography-focused-china",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/why-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/senior-travel",
        destination: "/tours/china-at-an-easier-pace-12-day-private-tour",
        permanent: true,
      },
      {
        source: "/family-travel",
        destination: "/tours?travellers=families",
        permanent: true,
      },
      {
        source: "/tours/discover/muslim-friendly-china",
        destination: "/tours?needs=muslim-friendly",
        permanent: true,
      },
      {
        source: "/tours/discover/family-china-tours",
        destination: "/tours?travellers=families",
        permanent: true,
      },
      {
        source: "/tours/discover/china-tours-for-women",
        destination: "/tours?needs=women-traveler-support",
        permanent: true,
      },
      {
        source: "/tours/discover/easy-paced-china",
        destination: "/tours?needs=slower-pacing&pace=easy&sort=relaxed",
        permanent: true,
      },
      {
        source: "/journal/9-days-or-11-days-in-china",
        destination: "/journal/how-many-days-in-china-7-10-14-day-itineraries",
        permanent: true,
      },
      {
        source: "/journal/is-private-china-tour-worth-it",
        destination: "/journal/private-china-tour-vs-group-tour",
        permanent: true,
      },
      {
        source: "/journal/china-honeymoon-itinerary-10-to-14-days",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/journal/china-travel-safety-for-foreign-visitors",
        destination: "/journal/first-trip-to-china-planning-guide",
        permanent: true,
      },
      {
        source: "/b2b",
        destination: "/china-dmc",
        permanent: true,
      },
      {
        source: "/trade-shows",
        destination: "/china-dmc",
        permanent: true,
      },
      {
        source: "/travel-trade",
        destination: "/china-dmc",
        permanent: true,
      },
      // Preserve equity from legacy commercial and planning URLs that are still
      // discoverable in search results and external bookmarks.
      {
        source: "/private-china-tours",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/plan-my-trip",
        destination: "/start-planning",
        permanent: true,
      },
      {
        source: "/journeys",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/china-travel-guide",
        destination: "/journal",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/journal",
        permanent: true,
      },
      {
        source: "/blog/best-time-visit-china",
        destination: "/journal/best-time-to-visit-china",
        permanent: true,
      },
      {
        source: "/blog/shanghai-travel-guide",
        destination: "/destinations/shanghai",
        permanent: true,
      },
      {
        source: "/blog/shanghai-bund-guide",
        destination: "/destinations/shanghai",
        permanent: true,
      },
      {
        source: "/blog/beijing-travel-guide",
        destination: "/destinations/beijing",
        permanent: true,
      },
      {
        source: "/blog/yunnan-hidden-villages",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/blog/regional-chinese-food",
        destination: "/journal",
        permanent: true,
      },
      {
        source: "/journal/how-to-plan-a-first-private-trip-to-china",
        destination: "/journal/10-day-china-itinerary-first-time-visitors",
        permanent: true,
      },
      {
        source: "/journal/best-time-for-a-first-china-journey",
        destination: "/journal/best-time-to-visit-china",
        permanent: true,
      },
      {
        source: "/journal/china-with-kids-what-actually-works",
        destination: "/journal/china-family-itinerary-10-to-14-days",
        permanent: true,
      },
      {
        source: "/journal/icgte-2026-kuala-lumpur",
        destination: "/journal/aviora-ttg-asia-matta-connect-2026",
        permanent: true,
      },
      {
        source: "/trade-shows/icgte-2026-kuala-lumpur",
        destination: "/journal/aviora-ttg-asia-matta-connect-2026",
        permanent: true,
      },
      {
        source: "/destination/beijing",
        destination: "/destinations/beijing",
        permanent: true,
      },
      {
        source: "/destination/guilin",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/destinations/urumqi",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/destinations/dunhuang",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/destinations/guilin",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/destinations/dali",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/destinations/guangzhou",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/destinations/shangri-la",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/china-travel-guide/china-high-speed-rail-guide-foreign-travelers",
        destination: "/journal/china-high-speed-train-foreigners",
        permanent: true,
      },
      {
        source: "/china-travel-guide/best-china-itinerary-first-time-visitors",
        destination: "/journal/10-day-china-itinerary-first-time-visitors",
        permanent: true,
      },
      {
        source: "/china-travel-guide/how-to-plan-first-trip-to-china",
        destination: "/journal/how-many-days-in-china-7-10-14-day-itineraries",
        permanent: true,
      },
      {
        source: "/china-travel-guide/muslim-friendly-travel-in-china",
        destination: "/journal/private-china-tour-from-singapore",
        permanent: true,
      },
      {
        source: "/china-travel-guide/is-china-safe-for-families-with-kids",
        destination: "/family-travel",
        permanent: true,
      },
      {
        source: "/experience/panda-morning-chengdu",
        destination: "/tours/chengdu-pandas-sichuan-table",
        permanent: true,
      },
      {
        source: "/journey/classic-china-icons-12-days",
        destination: "/tours/china-at-an-easier-pace-12-day-private-tour",
        permanent: true,
      },
      {
        source: "/journey/beijing-xian-shanghai-essential-8-days",
        destination: "/tours/first-china-beautifully-paced",
        permanent: true,
      },
      {
        source: "/journey/senior-friendly-china-icons",
        destination: "/tours/china-at-an-easier-pace-12-day-private-tour",
        permanent: true,
      },
      {
        source: "/journey/china-by-high-speed-rail",
        destination: "/tours/first-china-beautifully-paced",
        permanent: true,
      },
      {
        source: "/journey/private-china-for-couples",
        destination: "/tours/china-at-an-easier-pace-12-day-private-tour",
        permanent: true,
      },
      {
        source: "/journey/luxury-china-slow-rhythm",
        destination: "/tours/china-at-an-easier-pace-12-day-private-tour",
        permanent: true,
      },
      {
        source: "/journey/shanghai-suzhou-hangzhou-elegant-east",
        destination: "/destinations/shanghai",
        permanent: true,
      },
      {
        source: "/journey/guilin-yangshuo-soft-adventure",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/journey/yunnan-slow-luxury",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/journeys/family-china-14d",
        destination: "/tours/china-family-tour-with-pandas-12-day-private-tour",
        permanent: true,
      },
      {
        source: "/journeys/female-friendly-cultural-china-10-day",
        destination: "/tours/discover/china-tours-for-women",
        permanent: true,
      },
      {
        source: "/journeys/women-beijing-zhangjiajie-shanghai-11-day",
        destination: "/tours/discover/china-tours-for-women",
        permanent: true,
      },
      {
        source: "/journey/beijing-xian-chengdu-shanghai-private-11-day-tour",
        destination: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour",
        permanent: true,
      },
      {
        source: "/journeys/beijing-xian-chengdu-shanghai-private-11-day-tour",
        destination: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour",
        permanent: true,
      },
      {
        source: "/journeys/:slug",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/journey/:slug",
        destination: "/tours",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    qualities: [65, 70, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "nuffatfbaydrzigihman.supabase.co",
        pathname: "/storage/v1/object/public/cms-media/**",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
      },
      ...(r2PublicHost
        ? [
            {
              protocol: "https" as const,
              hostname: r2PublicHost,
            },
          ]
        : []),
    ],
    deviceSizes: [360, 414, 640, 720, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
