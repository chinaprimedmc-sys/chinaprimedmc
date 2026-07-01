import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
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
    ],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/destinations/:slug",
        destination: "/destination/:slug",
        permanent: true,
      },
      {
        source: "/tours/:slug",
        destination: "/journey/:slug",
        permanent: true,
      },
      {
        source: "/journey/classic-china-10-days",
        destination: "/journey/first-china-beautifully-paced",
        permanent: true,
      },
      {
        source: "/journey/classic-china-11-days",
        destination: "/journey/first-china-beautifully-paced",
        permanent: true,
      },
      {
        source: "/experience/great-wall-hiking",
        destination: "/experience/great-wall-private-hiking",
        permanent: true,
      },
      {
        source: "/experience/forbidden-city",
        destination: "/experience/forbidden-city-storytelling",
        permanent: true,
      },
      {
        source: "/admin/tours",
        destination: "/admin/journeys",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
