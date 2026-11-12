/** Inspect the server response, without counting text from JavaScript/RSC payloads. */
export function decodeHtml(value) {
  const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, code) => {
    if (!code.startsWith("#")) return named[code.toLowerCase()] ?? entity;
    const point =
      code[1].toLowerCase() === "x"
        ? Number.parseInt(code.slice(2), 16)
        : Number.parseInt(code.slice(1), 10);
    return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : entity;
  });
}

export function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(
      ([, name, double, single, bare]) => [
        name.toLowerCase(),
        decodeHtml(double ?? single ?? bare),
      ],
    ),
  );
}

export function normalizeUrl(value, base) {
  const url = new URL(value, base);
  return `${url.origin}${url.pathname === "/" ? "/" : url.pathname.replace(/\/$/, "")}`;
}

export function inspectHtml(html, headers = new Headers()) {
  const jsonLd = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .filter(([tag]) => attributes(tag.slice(0, tag.indexOf(">"))).type === "application/ld+json")
    .map(([tag]) => JSON.parse(tag.slice(tag.indexOf(">") + 1, tag.lastIndexOf("</"))));
  const document = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  const metas = [...document.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => attributes(tag));
  const links = [...document.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => attributes(tag));
  const directives = [
    headers.get("x-robots-tag") ?? "",
    ...metas
      .filter((meta) => ["robots", "googlebot"].includes(meta.name?.toLowerCase()))
      .map((meta) => meta.content ?? ""),
  ]
    .join(",")
    .toLowerCase();
  const blocked = /\b(?:noindex|none|nosnippet)\b|\bmax-snippet\s*:\s*0\b/.test(directives);
  return {
    title: decodeHtml(document.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ""),
    description: metas.find((meta) => meta.name === "description")?.content ?? "",
    canonicals: links
      .filter((link) => link.rel?.toLowerCase() === "canonical")
      .map((link) => link.href),
    directives,
    blocked,
    h1Count: [...document.matchAll(/<h1(?:\s|>)/gi)].length,
    anchors: [...document.matchAll(/<a\b[^>]*>/gi)]
      .map(([tag]) => attributes(tag))
      .filter((link) => link.href && !link.rel?.split(/\s+/).includes("nofollow"))
      .map((link) => link.href),
    jsonLd: jsonLd.flatMap((node) => (Array.isArray(node) ? node : [node])),
  };
}

export function crawlDepths(graph, start) {
  const depths = new Map([[start, 0]]);
  const queue = [start];
  for (let index = 0; index < queue.length; index += 1) {
    const page = queue[index];
    for (const target of graph.get(page) ?? []) {
      if (!graph.has(target) || depths.has(target)) continue;
      depths.set(target, depths.get(page) + 1);
      queue.push(target);
    }
  }
  return depths;
}

/** Robots uses the most specific agent group and longest path rule; Allow wins ties. */
export function robotsAllows(text, agent, pathname) {
  const groups = [];
  let group;
  for (const source of text.split(/\r?\n/)) {
    const line = source.replace(/#.*/, "").trim();
    const colon = line.indexOf(":");
    if (colon < 0) continue;
    const key = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    if (key === "user-agent") {
      if (!group || group.rules.length) {
        group = { agents: [], rules: [] };
        groups.push(group);
      }
      group.agents.push(value.toLowerCase());
    } else if (group && ["allow", "disallow"].includes(key) && value) {
      group.rules.push({ allow: key === "allow", path: value });
    }
  }
  const specificity = (group) =>
    Math.max(
      -1,
      ...group.agents.map((name) =>
        name === "*" ? 0 : agent.toLowerCase().includes(name) ? name.length : -1,
      ),
    );
  const bestAgent = Math.max(-1, ...groups.map(specificity));
  if (bestAgent < 0) return true;
  let bestRule = { length: -1, allow: true };
  for (const rule of groups
    .filter((group) => specificity(group) === bestAgent)
    .flatMap((group) => group.rules)) {
    const pattern = rule.path
      .split("*")
      .map((part) => part.replace(/[.+?^${}()|[\]\\]/g, "\\$&"))
      .join(".*");
    const regex = new RegExp(`^${pattern.replace(/\\\$$/, "$")}`);
    const length = rule.path.replace(/[\*$]/g, "").length;
    if (
      regex.test(pathname) &&
      (length > bestRule.length || (length === bestRule.length && rule.allow))
    ) {
      bestRule = { length, allow: rule.allow };
    }
  }
  return bestRule.allow;
}
