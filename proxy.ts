import { NextRequest, NextResponse } from "next/server";

import { isKnownPublicDetailPath } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";

// 生产环境唯一对外域名。*.vercel.app 等非规范主机一律 308 到这里。
const canonicalHost = new URL(siteConfig.url).host;

// 兼容外部分享过的短链接，统一导向唯一的规范行程 URL。
const legacyPublicRedirects = new Map([
  ["/tours/private-shanghai-day-tour", "/tours/private-shanghai-day-tour-guide-driver"],
]);

function buildContentSecurityPolicy(nonce = "", upgradeInsecureRequests = true) {
  const development = process.env.NODE_ENV !== "production";
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'none'",
    "object-src 'none'",
    `img-src 'self' data: blob: https://*.hsforms.com https://*.hsforms.net https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://*.salesmartly.com https://mix-ads.oss-accelerate.aliyuncs.com https://images.unsplash.com https://upload.wikimedia.org`,
    "font-src 'self' data: https://*.salesmartly.com",
    `script-src 'self' 'nonce-${nonce}' https://*.salesmartly.com https://connect.facebook.net https://www.googletagmanager.com https://js-na2.hsforms.net https://js.hsforms.net${development ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline' https://*.salesmartly.com",
    `connect-src 'self' mailto: https://*.salesmartly.com wss://*.salesmartly.com https://connect.facebook.net https://www.facebook.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.hsforms.com https://*.hsforms.net https://*.hubspot.com${development ? " ws: wss:" : ""}`,
    `frame-src 'self' https://*.salesmartly.com https://*.hsforms.net https://*.hsforms.com${development ? " http://*.hsforms.net http://*.hsforms.com" : ""}`,
    "media-src 'self' https://*.salesmartly.com",
    "worker-src 'self' blob:",
    ...(upgradeInsecureRequests ? ["upgrade-insecure-requests"] : []),
  ].join("; ");
}

function applySecurityHeaders(response: NextResponse, csp: string, secureRequest = true) {
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  if (secureRequest) {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  response.headers.set("Origin-Agent-Cluster", "?1");

  return response;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const nonce = createNonce();
  // 本地生产预览仍使用 HTTP，不能把同源图片强制升级成不存在的 HTTPS。
  const secureRequest = getRequestProtocol(request) === "https";
  const csp = buildContentSecurityPolicy(nonce, secureRequest);

  // 只在 Vercel 生产部署上做主机名规范化：vercel.app 生产别名等非规范域名
  // 一律 308 到正式域名，避免重复内容被收录。预览部署和本地预览不受影响。
  const requestHost = request.headers.get("host") ?? "";
  if (process.env.VERCEL_ENV === "production" && requestHost !== canonicalHost) {
    const canonicalUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, siteConfig.url);
    const redirect = NextResponse.redirect(canonicalUrl, 308);
    redirect.headers.set("X-Robots-Tag", "noindex");
    redirect.headers.set("Cache-Control", "public, max-age=3600");
    return applySecurityHeaders(redirect, csp, secureRequest);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Content-Security-Policy", csp);
  requestHeaders.set("x-nonce", nonce);

  const canonicalPath = legacyPublicRedirects.get(pathname);
  if (canonicalPath) {
    const redirect = NextResponse.redirect(new URL(canonicalPath, request.url), 308);
    redirect.headers.set("Cache-Control", "public, max-age=3600");
    return applySecurityHeaders(redirect, csp, secureRequest);
  }

  if (!isKnownPublicDetailPath(pathname)) {
    const notFoundResponse = NextResponse.rewrite(
      new URL("/__invalid-public-detail", request.url),
      {
        status: 404,
        request: { headers: requestHeaders },
      },
    );
    notFoundResponse.headers.set("X-Robots-Tag", "noindex, follow");
    return applySecurityHeaders(notFoundResponse, csp, secureRequest);
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  return applySecurityHeaders(response, csp, secureRequest);
}

function getRequestProtocol(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ??
    request.nextUrl.protocol.slice(0, -1)
  );
}

function createNonce() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return btoa(String.fromCharCode(...bytes));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};
