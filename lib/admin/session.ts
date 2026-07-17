const sessionCookieName = "aviora_admin_session";
const sessionLifetimeSeconds = 60 * 60 * 8;

type AdminSession = {
  username: string;
  expiresAt: number;
};

export function getAdminSessionCookieName() {
  return sessionCookieName;
}

export function getAdminSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: sessionLifetimeSeconds,
  };
}

export async function createAdminSession(username: string) {
  const payload: AdminSession = {
    username,
    expiresAt: Math.floor(Date.now() / 1000) + sessionLifetimeSeconds,
  };
  const encoded = encodeBase64Url(JSON.stringify(payload));
  const signature = await sign(encoded);
  return `${encoded}.${signature}`;
}

export async function verifyAdminSession(value: string | undefined) {
  if (!value) return null;
  const [encoded, signature] = value.split(".");
  if (!encoded || !signature) return null;

  const expected = await sign(encoded);
  if (!constantTimeEqual(signature, expected)) return null;

  try {
    const payload = JSON.parse(decodeBase64Url(encoded)) as AdminSession;
    if (!payload.username || payload.expiresAt <= Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export function adminCredentialsMatch(username: string, password: string) {
  return (
    constantTimeEqual(username, process.env.ADMIN_USERNAME ?? "") &&
    constantTimeEqual(password, process.env.ADMIN_PASSWORD ?? "")
  );
}

async function sign(value: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("ADMIN_SESSION_SECRET is not configured.");
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const bytes = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return encodeBase64Url(String.fromCharCode(...new Uint8Array(bytes)));
}

function constantTimeEqual(left: string, right: string) {
  if (!left || !right || left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

function encodeBase64Url(value: string) {
  return btoa(value).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function decodeBase64Url(value: string) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  return atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "="));
}
