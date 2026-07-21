import { NextResponse } from "next/server";

import {
  adminConfigurationIsSecure,
  adminCredentialsMatch,
  createAdminSession,
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
} from "@/lib/admin/session";
import { consumeRateLimit, hashRateLimitKey } from "@/lib/security/rate-limit";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }
  if (!adminConfigurationIsSecure()) {
    console.error("Admin authentication configuration does not meet production requirements.");
    return NextResponse.json({ error: "后台安全配置不完整，请联系管理员。" }, { status: 503 });
  }
  const body = (await request.json().catch(() => null)) as {
    username?: string;
    password?: string;
  } | null;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const allowed = await consumeRateLimit("admin-login", await hashRateLimitKey(ip), 8, 900);

  if (!allowed) {
    return NextResponse.json({ error: "尝试次数过多，请稍后再试。" }, { status: 429 });
  }
  if (!body || !adminCredentialsMatch(body.username ?? "", body.password ?? "")) {
    return NextResponse.json({ error: "账号或密码不正确。" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    getAdminSessionCookieName(),
    await createAdminSession(body.username!),
    getAdminSessionCookieOptions(),
  );
  return response;
}

export async function DELETE(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(getAdminSessionCookieName(), "", {
    ...getAdminSessionCookieOptions(),
    maxAge: 0,
  });
  return response;
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}
