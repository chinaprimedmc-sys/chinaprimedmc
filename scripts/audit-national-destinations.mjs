/** Planning inventory is separate from the explicit public release manifest. */
await import("./audit-destinations.mjs");
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
const { explorerDestinations } = await import("../content/destinations/explorer.ts");
const { destinationPlanningGuides } = await import("../content/destinations/planning-guides.ts");
const { journeyCatalog } = await import("../content/tours/catalog.ts");
const inventory = JSON.parse(
  readFileSync(new URL("../content/destinations/national-inventory.json", import.meta.url), "utf8"),
);
const rows = inventory.destinations;
assert.equal(new Set(rows.map((row) => row.slug)).size, rows.length, "Inventory slug collision");
assert.equal(
  new Set(rows.map((row) => row.province)).size,
  34,
  "Province-level planning grouping missing",
);
const groups = new Map();
for (const row of rows) {
  assert.ok(row.slug && row.name && row.province && row.region, "Incomplete inventory row");
  assert.ok(/^[a-z0-9-]+$/.test(row.slug), `Invalid candidate slug: ${row.slug}`);
  const guides = explorerDestinations.filter(
    (guide) => guide.id === row.slug || guide.journeyDestinationNames?.includes(row.name),
  );
  const products = journeyCatalog.filter((journey) =>
    journey.destinationFilters.includes(row.name),
  );
  const entry = {
    ...row,
    guides: guides.map((guide) => guide.id),
    products: products.map((journey) => journey.slug),
  };
  groups.set(row.province, [...(groups.get(row.province) ?? []), entry]);
}
for (const guide of explorerDestinations)
  assert.ok(
    rows.some((row) => row.slug === guide.id),
    `Published guide omitted from inventory: ${guide.id}`,
  );
const covered = rows.filter((row) =>
  explorerDestinations.some(
    (guide) => guide.id === row.slug || guide.journeyDestinationNames?.includes(row.name),
  ),
).length;
let report = `# 全国目的地覆盖台账\n\n建档日期：${inventory.compiledAt}。这是可扩展的编辑选题库，不是官方行政城市名录，也不是全国所有城市已穷尽的声明。\n\n当前候选 **${rows.length}** 项，覆盖 **${groups.size}** 个省级规划分组；完整指南 **${explorerDestinations.length}** 篇，覆盖候选 **${covered}** 项，候选中尚未被完整指南覆盖 **${rows.length - covered}** 项。组合指南可以覆盖多个候选，不能将两个数量直接相减。\n\n港澳台分组仅用于旅行选题清点，不表示已核实当地经营与交付能力。跨境衔接、入境要求与当地服务另验。县级市、县域景区、区域和地级城市混合收录，后续应逐条完成行政类型及旅行实体归类，不能将本表数量称为城市总数。\n\n状态由公开指南、真实产品自动比对。没有指南的候选不会自动进入路由、sitemap、Schema或AI阅读文件。带产品仅表示目录匹配，不代表整篇新指南可直接发布。\n\n`;
const emptyGroups = [...groups.entries()].filter(([, entries]) =>
  entries.every((entry) => entry.guides.length === 0),
);
report += `## 分组缺口汇总\n\n以下按旅行候选统计，不是行政城市统计。**${emptyGroups.length}** 个规划分组尚无完整指南。\n\n| 规划组 | 候选数 | 指南覆盖候选 | 待补候选 |\n| --- | ---: | ---: | ---: |\n`;
for (const [province, entries] of groups) {
  const groupCovered = entries.filter((entry) => entry.guides.length > 0).length;
  report += `| ${province} | ${entries.length} | ${groupCovered} | ${entries.length - groupCovered} |\n`;
}
report += `| 合计 | ${rows.length} | ${covered} | ${rows.length - covered} |\n\n`;
for (const [province, entries] of groups) {
  report += `## ${province}\n\n| 候选目的地 | 独立/组合指南 | 现有产品承接 |\n| --- | --- | --- |\n`;
  for (const row of entries)
    report += `| ${row.name} | ${row.guides.length ? row.guides.map((id) => `[${id}](/destinations/${id})`).join(" / ") : "待撰写"} | ${row.products.length ? row.products.join(" / ") : "暂无匹配产品；指南不放产品卡"} |\n`;
  report += "\n";
}
report += `## 发布规则\n\n1. 先区分城市、景区、古镇、区域及别名，避免同一实体建多篇近似页。\n2. 独立指南必须有当地选择建议：适合谁、停留、住宿区域、到达/接送、季节、身体负担、成本因素、合理示例行程和真实FAQ。\n3. 暂无产品允许发布有价值的指南，但产品列表为空，只显示明确的定制咨询，不虚构可订线路。\n4. 元数据、正文、FAQ、AI文件同源；不凭Schema或llms宣称获得AI Overviews引用。\n5. 官方规则和供应商安排分别取证；无依据不写精确价格、实时票务、排队时长或特殊准入。\n6. 图片只用确切地点和合法素材；一张真实图片比两张借用其他城市的图片更合适。缺素材时先补素材，不伪造目的地照片。\n7. 高端并不等同五星酒店：检查地点价值、安静/隐私、睡眠、上下车、房型、真实主持人、时间安排与备用方案。具体高端服务须有记录支持。\n8. 全国行政城市穷尽核对另需一份带版本日期的权威行政名录，完成集合差异核验后才能声称每个城市已纳入。\n\n更新命令：\`node scripts/audit-national-destinations.mjs --write\`。只审核：去掉 \`--write\`。\n`;
if (process.argv.includes("--write"))
  writeFileSync(
    new URL("../docs/project/NATIONAL_DESTINATION_COVERAGE.md", import.meta.url),
    report,
  );
console.log(
  `National editorial inventory: ${rows.length} candidates; ${groups.size} province-level groups; ${explorerDestinations.length} guides cover ${covered} candidates; ${rows.length - covered} candidates pending. Not an exhaustive administrative city count.`,
);
console.log(
  `Groups without a complete guide (${emptyGroups.length}): ${emptyGroups.map(([province]) => province).join(", ")}.`,
);
for (const guide of explorerDestinations) assert.ok(destinationPlanningGuides[guide.id]);
