import { NextRequest, NextResponse } from "next/server";

import { getAdminSessionCookieName, verifyAdminSession } from "@/lib/admin/session";

const protectedPrefixes = [
  "/admin",
  "/api/admin",
  "/studio",
  "/component-showcase",
  "/component-playground",
];
const publicAdminPaths = new Set(["/admin/login", "/api/admin/session"]);
const retiredAdminPaths = new Set([
  "/admin/analytics",
  "/admin/customers",
  "/admin/destinations",
  "/admin/experiences",
  "/admin/seo",
  "/admin/settings",
  "/admin/system",
]);

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function applySecurityHeaders(response: NextResponse, studio = false, studioPreview = false) {
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    studioPreview ? "frame-ancestors 'self'" : "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data: blob: https://images.unsplash.com https://upload.wikimedia.org https://nuffatfbaydrzigihman.supabase.co https://cdn.sanity.io https://*.r2.dev",
    "font-src 'self'",
    `script-src 'self' 'unsafe-inline'${studio ? " 'unsafe-eval' https://*.sanity.io https://*.sanity-cdn.com" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    `connect-src 'self' mailto: https://*.sanity.io https://*.sanity-cdn.com https://*.r2.cloudflarestorage.com${studio ? " https://registry.npmjs.org wss://*.sanity.io" : ""}`,
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", studioPreview ? "SAMEORIGIN" : "DENY");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");

  return response;
}

function unauthorizedAdminResponse(request: NextRequest) {
  const isApi = request.nextUrl.pathname.startsWith("/api/");
  const denied = isApi
    ? NextResponse.json({ error: "Admin access required." }, { status: 401 })
    : NextResponse.redirect(
        new URL(`/admin/login?next=${encodeURIComponent(request.nextUrl.pathname)}`, request.url),
      );
  denied.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return applySecurityHeaders(denied);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  const isStudio = pathname === "/studio" || pathname.startsWith("/studio/");
  const isStudioPreview =
    request.nextUrl.searchParams.get("studioPreview") === "1" &&
    request.headers.get("sec-fetch-site") === "same-origin";

  if (retiredAdminPaths.has(pathname)) {
    return applySecurityHeaders(NextResponse.redirect(new URL("/admin", request.url)), isStudio);
  }

  if (isProtectedPath(pathname) && !publicAdminPaths.has(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

    const session = await verifyAdminSession(
      request.cookies.get(getAdminSessionCookieName())?.value,
    );

    if (!session) {
      return unauthorizedAdminResponse(request);
    }
    response.headers.set("Cache-Control", "private, no-store");

    if (
      pathname.startsWith("/api/admin") &&
      !["GET", "HEAD", "OPTIONS"].includes(request.method) &&
      request.headers.get("origin") !== request.nextUrl.origin
    ) {
      return applySecurityHeaders(
        NextResponse.json({ error: "Invalid request origin." }, { status: 403 }),
      );
    }
  }

  return applySecurityHeaders(response, isStudio, isStudioPreview);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/studio/:path*",
    "/component-showcase/:path*",
    "/component-playground/:path*",
    "/tours/:slug",
    "/journal/:slug",
    "/destinations/:slug",
    "/styles/:slug",
  ],
};
