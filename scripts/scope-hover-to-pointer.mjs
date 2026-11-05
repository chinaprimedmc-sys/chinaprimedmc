/**
 * 一次性（可重复运行）转换：把所有 :hover 规则限制到真正有鼠标的设备（@media (hover: hover)）。
 * 原因：手机上点一下卡片，:hover 样式会一直“粘”在上面，是手机端体验显得廉价的主因之一。
 * 做法：对每条含 :hover 的规则，把“含 :hover 的选择器”移到 @media (hover: hover) 里，
 * 其余选择器（例如 :focus-visible）留在原处，因此键盘焦点样式不受影响；规则顺序与优先级不变。
 * 已经在 hover 媒体查询里的、@keyframes 里的规则会被跳过。
 */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const postcss = require(require("node:path").resolve("node_modules/.pnpm/postcss@8.5.23/node_modules/postcss"));

const roots = ["app", "components", "features", "styles", "design-system"];
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (path.endsWith(".css")) files.push(path);
  }
};
roots.forEach(walk);

const insideHoverMedia = (node) => {
  for (let p = node.parent; p; p = p.parent) {
    if (p.type === "atrule" && /keyframes$/i.test(p.name)) return true;
    if (p.type === "atrule" && p.name === "media" && /hover\s*:\s*hover/.test(p.params)) return true;
  }
  return false;
};

let changed = 0;
let rules = 0;
for (const file of files) {
  const source = readFileSync(file, "utf8");
  if (!source.includes(":hover")) continue;
  const root = postcss.parse(source);
  const targets = [];
  root.walkRules((rule) => {
    if (rule.selector.includes(":hover") && !insideHoverMedia(rule)) targets.push(rule);
  });
  if (!targets.length) continue;
  for (const rule of targets) {
    const hover = rule.selectors.filter((s) => s.includes(":hover"));
    const rest = rule.selectors.filter((s) => !s.includes(":hover"));
    const hoverRule = rule.clone({ selectors: hover });
    const media = postcss.atRule({ name: "media", params: "(hover: hover)" });
    media.append(hoverRule);
    if (rest.length) {
      rule.selectors = rest;
      rule.after(media);
    } else {
      rule.replaceWith(media);
    }
    rules++;
  }
  writeFileSync(file, root.toString());
  changed++;
}
console.log(`scoped ${rules} :hover rules in ${changed} files`);
