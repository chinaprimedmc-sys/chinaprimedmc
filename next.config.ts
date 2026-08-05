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
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
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
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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
