type TurnstileVerification = {
  success?: boolean;
  action?: string;
  hostname?: string;
};

const turnstileTestSecret = "1x0000000000000000000000000000000AA";

export async function verifyTurnstileToken(token: string, ip: string, requestHostname = "") {
  const secret = getTurnstileSecret();
  if (!secret) {
    console.error("Turnstile verification is not configured in production.");
    return false;
  }
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  let response: Response;
  try {
    response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
  } catch {
    return false;
  }
  if (!response.ok) return false;

  const result = (await response.json()) as TurnstileVerification;
  if (result.success !== true || result.action !== "submit-inquiry") return false;

  if (secret === turnstileTestSecret) return true;
  const expectedHostname = requestHostname || getExpectedTurnstileHostname();
  return !expectedHostname || result.hostname === expectedHostname;
}

function getTurnstileSecret() {
  return (
    process.env.TURNSTILE_SECRET_KEY ||
    (process.env.NODE_ENV !== "production" ? turnstileTestSecret : "")
  );
}

function getExpectedTurnstileHostname() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return process.env.NODE_ENV === "production" ? "www.chinaprimedmc.com" : "";
  try {
    return new URL(siteUrl).hostname;
  } catch {
    return "";
  }
}
