import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const disallowedPaths = ["/api/"];
const publicContentPaths = ["/", "/blog/", "/tours/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: publicContentPaths,
        disallow: disallowedPaths,
      },
      ...[
        "Googlebot",
        "Bingbot",
        "GPTBot",
        "OAI-SearchBot",
        "ChatGPT-User",
        "ClaudeBot",
        "PerplexityBot",
        "Omgilibot",
      ].map((userAgent) => ({
        userAgent,
        allow: publicContentPaths,
        disallow: disallowedPaths,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
