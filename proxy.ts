import { NextRequest, NextResponse } from "next/server";

import { isKnownPublicDetailPath } from "@/config/public-route-slugs";
import { getAdminSessionCookieName, verifyAdminSession } from "@/lib/admin/session";

const protectedPrefixes = ["/admin", "/api/admin"];
const publicAdminPaths = new Set(["/admin/login", "/api/admin/session"]);
const retiredAdminPaths = new Set([
  "/admin/analytics",
  "/admin/customers",
  "/admin/destinations",
  "/admin/experiences",
  "/admin/seo",
  "/admin/settings",
]);

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function buildContentSecurityPolicy(nonce = "") {
  const r2Source = getR2Source();
  const development = process.env.NODE_ENV !== "production";
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'none'",
    "object-src 'none'",
    `img-src 'self' data: blob: https://images.unsplash.com https://upload.wikimedia.org https://nuffatfbaydrzigihman.supabase.co https://*.r2.dev${r2Source}`,
    "font-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://challenges.cloudflare.com${development ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    `connect-src 'self' mailto: https://*.r2.cloudflarestorage.com https://challenges.cloudflare.com${development ? " ws: wss:" : ""}`,
    "frame-src 'self' https://challenges.cloudflare.com",
    "worker-src 'self' blob:",
    "upgrade-insecure-requests",
  ].join("; ");
}

function applySecurityHeaders(response: NextResponse, csp: string) {
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  response.headers.set("Origin-Agent-Cluster", "?1");

  return response;
}

function unauthorizedAdminResponse(request: NextRequest, csp: string) {
  const isApi = request.nextUrl.pathname.startsWith("/api/");
  const denied = isApi
    ? NextResponse.json({ error: "Admin access required." }, { status: 401 })
    : NextResponse.redirect(
        new URL(`/admin/login?next=${encodeURIComponent(request.nextUrl.pathname)}`, request.url),
      );
  denied.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return applySecurityHeaders(denied, csp);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const nonce = createNonce();
  const csp = buildContentSecurityPolicy(nonce);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Content-Security-Policy", csp);
  requestHeaders.set("x-nonce", nonce);

  if (!isKnownPublicDetailPath(pathname)) {
    const notFoundResponse = NextResponse.rewrite(
      new URL("/__invalid-public-detail", request.url),
      {
        status: 404,
        request: { headers: requestHeaders },
      },
    );
    notFoundResponse.headers.set("X-Robots-Tag", "noindex, follow");
    return applySecurityHeaders(notFoundResponse, csp);
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (isProtectedPath(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    response.headers.set("Cache-Control", "private, no-store");
  }

  if (retiredAdminPaths.has(pathname)) {
    return applySecurityHeaders(NextResponse.redirect(new URL("/admin", request.url)), csp);
  }

  if (isProtectedPath(pathname) && !publicAdminPaths.has(pathname)) {
    const session = await verifyAdminSession(
      request.cookies.get(getAdminSessionCookieName())?.value,
    );

    if (!session) {
      return unauthorizedAdminResponse(request, csp);
    }
    if (
      pathname.startsWith("/api/admin") &&
      !["GET", "HEAD", "OPTIONS"].includes(request.method) &&
      request.headers.get("origin") !== request.nextUrl.origin
    ) {
      return applySecurityHeaders(
        NextResponse.json({ error: "Invalid request origin." }, { status: 403 }),
        csp,
      );
    }
  }

  return applySecurityHeaders(response, csp);
}

function createNonce() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return btoa(String.fromCharCode(...bytes));
}

function getR2Source() {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL || "");
    return url.protocol === "https:" ? ` ${url.origin}` : "";
  } catch {
    return "";
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};
