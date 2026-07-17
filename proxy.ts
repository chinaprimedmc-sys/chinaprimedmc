import { NextRequest, NextResponse } from "next/server";

const protectedPrefixes = ["/admin", "/api/admin", "/component-showcase", "/component-playground"];

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function applySecurityHeaders(response: NextResponse) {
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data: blob: https://images.unsplash.com https://upload.wikimedia.org https://nuffatfbaydrzigihman.supabase.co",
    "font-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "connect-src 'self' mailto:",
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("X-DNS-Prefetch-Control", "on");

  return response;
}

function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  };
}

function readBasicAuthCredentials(request: NextRequest) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return null;
  }

  try {
    const decoded = atob(authorization.slice("Basic ".length));
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return null;
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

function credentialsMatch(provided: string | undefined, expected: string | undefined) {
  if (!provided || !expected || provided.length !== expected.length) {
    return false;
  }

  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) {
    difference |= expected.charCodeAt(index) ^ provided.charCodeAt(index);
  }

  return difference === 0;
}

function unauthorizedAdminResponse() {
  const denied = new NextResponse("Admin access required.", { status: 401 });
  denied.headers.set("WWW-Authenticate", 'Basic realm="China Prime DMC Admin", charset="UTF-8"');
  denied.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return applySecurityHeaders(denied);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  if (isProtectedPath(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

    const expected = getAdminCredentials();
    const provided = readBasicAuthCredentials(request);
    const hasAccess =
      credentialsMatch(provided?.username, expected.username) &&
      credentialsMatch(provided?.password, expected.password);

    if (!hasAccess) {
      return unauthorizedAdminResponse();
    }
  }

  return applySecurityHeaders(response);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico)$).*)",
  ],
};
