import "server-only";

type SupabaseRole = "anon" | "service";

function getConfig(role: SupabaseRole) {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key =
    role === "service" ? process.env.SUPABASE_SERVICE_ROLE_KEY : process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(`Supabase ${role} configuration is missing.`);
  }

  return { url, key };
}

export async function supabaseRest<T>(
  path: string,
  options: RequestInit & { role?: SupabaseRole } = {},
): Promise<T> {
  const { role = "anon", headers, ...requestOptions } = options;
  const { url, key } = getConfig(role);
  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...requestOptions,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase request failed (${response.status}): ${details}`);
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export function getSupabaseServiceConfig() {
  return getConfig("service");
}
