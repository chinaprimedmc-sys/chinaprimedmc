/** Deterministic, same-origin share assets generated before every production build. */
export function socialCardPath(kind: "tours" | "journal", slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("Invalid social card slug");
  return `/og/generated/${kind}-${slug}.jpg`;
}
