import { NextRequest, NextResponse } from "next/server";

import { explorerDestinations } from "@/content/destinations/explorer";
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
const staticPublicSlugs: Record<string, Set<string>> = {
  destinations: new Set(explorerDestinations.map(({ id }) => id)),
  styles: new Set(["family", "luxury", "slow-travel", "photography"]),
  tours: new Set([
    "first-china-beautifully-paced",
    "chengdu-pandas-sichuan-table",
    "family-china",
    "quiet-luxury-china",
    "slow-travel-china",
    "photography-focused-china",
  ]),
  journal: new Set([
    "how-to-plan-a-first-private-trip-to-china",
    "china-with-kids-what-actually-works",
    "best-time-for-a-first-china-journey",
  ]),
};

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function applySecurityHeaders(response: NextResponse, studio = false) {
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data: blob: https://images.unsplash.com https://upload.wikimedia.org https://nuffatfbaydrzigihman.supabase.co https://cdn.sanity.io https://*.r2.dev",
    "font-src 'self'",
    `script-src 'self' 'unsafe-inline'${studio ? " 'unsafe-eval' https://*.sanity.io https://*.sanity-cdn.com" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    `connect-src 'self' mailto: https://*.sanity.io https://*.sanity-cdn.com https://*.r2.cloudflarestorage.com${studio ? " wss://*.sanity.io" : ""}`,
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");

  return response;
}

function unauthorizedAdminResponse(request: NextRequest) {
  const isApi = request.nextUrl.pathname.startsWith("/api/");
  const denied = isApi
    ? NextResponse.json({ error: "Admin access required." }, { status: 401 })
    : NextResponse.redirect(new URL("/admin/login", request.url));
  denied.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return applySecurityHeaders(denied);
}

async function publicDynamicRouteExists(pathname: string) {
  const match = pathname.match(/^\/(destinations|styles|tours|journal)\/([^/]+)$/);
  if (!match) return true;

  const [, collection, slug] = match;
  if (staticPublicSlugs[collection]?.has(slug)) return true;
  if (collection === "destinations" || collection === "styles") return false;

  const sanityType = collection === "tours" ? "journey" : "blogPost";
  const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yycku2v3";
  const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const sanityQuery = encodeURIComponent(`count(*[_type == $type && slug.current == $slug]) > 0`);
  const sanityParams = `&$type=${encodeURIComponent(JSON.stringify(sanityType))}&$slug=${encodeURIComponent(JSON.stringify(slug))}`;

  try {
    const response = await fetch(
      `https://${sanityProjectId}.api.sanity.io/v2025-02-19/data/query/${sanityDataset}?query=${sanityQuery}${sanityParams}`,
      { next: { revalidate: 60 } },
    );
    if (response.ok) {
      const payload = (await response.json()) as { result?: boolean };
      if (payload.result) return true;
    }
  } catch {
    // Continue to the legacy CMS during migration.
  }

  const table = collection === "tours" ? "cms_journeys" : "cms_blog_posts";
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) return false;

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/${table}?select=id&status=eq.published&slug=eq.${encodeURIComponent(slug)}&limit=1`,
      {
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
        },
        next: { revalidate: 60 },
      },
    );
    if (!response.ok) return false;
    const rows = (await response.json()) as Array<{ id: string }>;
    return rows.length > 0;
  } catch {
    return false;
  }
}

function notFoundResponse(request: NextRequest) {
  const response = new NextResponse(request.method === "HEAD" ? null : notFoundDocument(), {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
  response.headers.set("X-Robots-Tag", "noindex, follow, noarchive");
  response.headers.set("Cache-Control", "public, max-age=0, s-maxage=60");
  return applySecurityHeaders(response);
}

function notFoundDocument() {
  return `<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, follow" />
    <title>Page Not Found | AVIORA</title>
    <style>
      *{box-sizing:border-box}body{margin:0;background:#faf9f5;color:#161512;font-family:Arial,sans-serif}
      main{min-height:100svh;display:grid;place-items:center;padding:32px}
      article{width:min(760px,100%);text-align:center}.brand{font:500 18px Georgia,serif;letter-spacing:.18em}
      .code{margin:64px 0 0;color:#77736b;font-size:12px;font-weight:700;letter-spacing:.2em}
      h1{margin:18px 0 0;font:500 clamp(44px,8vw,84px)/.98 Georgia,serif}
      p{margin:24px auto 0;max-width:620px;color:#6f6b63;font-size:17px;line-height:1.75}
      nav{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:32px}
      a{display:inline-flex;min-height:48px;align-items:center;justify-content:center;border:1px solid #d9d6cf;border-radius:8px;padding:12px 24px;color:#161512;text-decoration:none}
      a:first-child{border-color:#161512;background:#161512;color:#fff}
    </style>
  </head>
  <body>
    <main><article>
      <div class="brand">AVIORA</div><div class="code">404</div>
      <h1>This route has moved on.</h1>
      <p>The page you requested could not be found. Return to AVIORA or explore our private China journey ideas.</p>
      <nav><a href="/">Return Home</a><a href="/tours">Browse Journeys</a></nav>
    </article></main>
  </body>
</html>`;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  const isStudio = pathname === "/studio" || pathname.startsWith("/studio/");

  if (retiredAdminPaths.has(pathname)) {
    return applySecurityHeaders(NextResponse.redirect(new URL("/admin", request.url)), isStudio);
  }

  if (["GET", "HEAD"].includes(request.method) && !(await publicDynamicRouteExists(pathname))) {
    return notFoundResponse(request);
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

  return applySecurityHeaders(response, isStudio);
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
