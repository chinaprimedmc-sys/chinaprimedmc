import { NextResponse } from "next/server";

import {
  adminCredentialsMatch,
  createAdminSession,
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
} from "@/lib/admin/session";
import { consumeRateLimit, hashRateLimitKey } from "@/lib/security/rate-limit";

export async function POST(request: Request) {
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

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(getAdminSessionCookieName(), "", {
    ...getAdminSessionCookieOptions(),
    maxAge: 0,
  });
  return response;
}
