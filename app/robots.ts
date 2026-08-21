import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const disallowedPaths = ["/admin/", "/admin", "/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
      ...["Googlebot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"].map(
        (userAgent) => ({
          userAgent,
          allow: "/",
          disallow: disallowedPaths,
        }),
      ),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
