export async function parseSupabaseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase request failed (${response.status}): ${details}`);
  }

  if (response.status === 204) return undefined as T;

  const responseBody = await response.text();
  if (!responseBody) return undefined as T;

  return JSON.parse(responseBody) as T;
}
