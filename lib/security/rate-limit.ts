import "server-only";

import { supabaseRest } from "@/lib/supabase/server";

export async function consumeRateLimit(
  bucket: string,
  keyHash: string,
  limit: number,
  windowSeconds: number,
) {
  const allowed = await supabaseRest<boolean>("rpc/consume_rate_limit", {
    role: "service",
    method: "POST",
    body: JSON.stringify({
      rate_bucket: bucket,
      rate_key_hash: keyHash,
      rate_limit: limit,
      rate_window_seconds: windowSeconds,
    }),
    cache: "no-store",
  });
  return allowed;
}

export async function hashRateLimitKey(value: string) {
  const salt = process.env.RATE_LIMIT_SALT || process.env.ADMIN_SESSION_SECRET;
  if (!salt) throw new Error("RATE_LIMIT_SALT is not configured.");
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${salt}:${value}`));
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
