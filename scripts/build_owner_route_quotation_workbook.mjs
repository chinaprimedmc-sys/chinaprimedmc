import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const sourceDir = "/Users/Admin/Documents/China prime dmc 独立站/itinerary-drafts/classic-routes";
const outputDir = "/tmp/china-prime-owner-quotation";
const outputPath = `${outputDir}/China-Prime-DMC-经典线路老板报价表.xlsx`;

const routeMeta = [
  { id: "R01", file: "01-first-china-beijing-xian-shanghai.md", name: "北京—西安—上海", duration: "9天8晚", tier: "首次访华旗舰", route: "北京4天 / 西安2天 / 上海3天", hotels: "北京4晚、西安2晚、上海2晚", transport: "私人车 + 北京至西安高铁 + 西安至上海航班", bestFor: "首次访华、家庭、情侣、长者", physical: "轻松至中等；故宫、长城、兵马俑步行较多" },
  { id: "R02", file: "02-family-classic-with-chengdu.md", name: "北京—西安—成都—上海", duration: "12天11晚", tier: "家庭旗舰", route: "北京4天 / 西安2天 / 成都3天 / 上海3天", hotels: "北京4晚、西安2晚、成都3晚、上海2晚", transport: "私人车 + 两段高铁 + 成都至上海航班", bestFor: "亲子家庭、多代家庭、首次访华", physical: "轻松至中等；熊猫基地需早起和步行" },
  { id: "R03", file: "03-classic-china-with-guilin.md", name: "北京—西安—桂林阳朔—上海", duration: "13天12晚", tier: "山水旗舰", route: "北京4天 / 西安2天 / 桂林阳朔4天 / 上海3天", hotels: "北京4晚、西安2晚、桂林1晚、阳朔3晚、上海2晚", transport: "私人车 + 高铁 + 国内航班 + 漓江游船", bestFor: "首次访华、家庭、长者、摄影", physical: "轻松至中等；乡村活动可选骑行或车辆" },
  { id: "R04", file: "04-classic-china-with-yangtze.md", name: "北京—西安—长江三峡—上海", duration: "14天13晚", tier: "舒适旗舰", route: "北京4天 / 西安2天 / 重庆及游轮5天 / 上海3天", hotels: "北京4晚、西安2晚、游轮4晚、上海3晚", transport: "私人车 + 高铁 + 航班 + 长江游轮", bestFor: "60+、多代家庭、少换酒店旅客", physical: "轻松至中等；岸上坡道和台阶需逐项确认" },
  { id: "R05", file: "05-classic-china-with-zhangjiajie.md", name: "北京—西安—张家界—上海", duration: "12天11晚", tier: "视觉旗舰", route: "北京4天 / 西安2天 / 张家界3天 / 上海3天", hotels: "北京4晚、西安2晚、张家界3晚、上海2晚", transport: "私人车 + 高铁 + 国内航班 + 景区接驳/缆车", bestFor: "家庭、摄影、自然景观爱好者", physical: "中等；台阶、景区接驳和排队不可完全避免" },
  { id: "R06", file: "06-yunnan-classic.md", name: "昆明—大理—丽江—香格里拉", duration: "9天8晚", tier: "二访经典", route: "昆明2天 / 大理2天 / 丽江3天 / 香格里拉2天", hotels: "昆明1晚、大理2晚、丽江3晚、香格里拉2晚", transport: "私人车 + 省内高铁/公路", bestFor: "二次访华、情侣、文化家庭、摄影", physical: "中等；丽江和香格里拉海拔需评估" },
  { id: "R07", file: "07-jiangnan-classic.md", name: "上海—苏州—水乡—杭州", duration: "6天5晚", tier: "江南短线", route: "上海2天 / 苏州1天 / 水乡1天 / 杭州2天", hotels: "上海2晚、苏州1晚、杭州2晚", transport: "私人车为主，可结合高铁", bestFor: "长者、情侣、短途延伸、园林茶文化", physical: "轻松；园林与古镇石板路不平" },
  { id: "R08", file: "08-tibet-gentle-classic.md", name: "拉萨—羊卓雍措—日喀则", duration: "7天6晚", tier: "高价值经典", route: "拉萨4天 / 羊湖及日喀则2天 / 拉萨离境1天", hotels: "拉萨5晚、日喀则1晚", transport: "高原私人车 + 许可及当地导游", bestFor: "健康成人、文化客、二次访华", physical: "高海拔；必须适应并进行健康风险说明" },
  { id: "R09", file: "09-chengdu-classic.md", name: "成都熊猫与川菜", duration: "5天4晚", tier: "目的地经典", route: "成都5天 / 乐山可选", hotels: "成都4晚", transport: "全程私人车，机场/车站接送", bestFor: "家庭、长者、美食兴趣者", physical: "轻松至中等；熊猫基地需早起和步行" },
  { id: "R10", file: "10-silk-road-classic.md", name: "西安—敦煌—嘉峪关—张掖—吐鲁番", duration: "9天8晚", tier: "深度经典", route: "西安2天 / 敦煌3天 / 河西走廊2天 / 吐鲁番2天", hotels: "西安2晚、敦煌3晚、嘉峪关1晚、张掖1晚、吐鲁番1晚", transport: "私人车 + 国内航班/高铁", bestFor: "二次访华、历史、考古、摄影", physical: "中等；干热、长距离交通和遗址步行" },
];

function extractSection(markdown, heading, nextHeading) {
  const start = markdown.indexOf(heading);
  if (start < 0) return "";
  const from = start + heading.length;
  const end = nextHeading ? markdown.indexOf(nextHeading, from) : markdown.length;
  return markdown.slice(from, end < 0 ? markdown.length : end).trim();
}

function plain(text) {
  return text.replace(/\*\*/g, "").replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
}

function parseDays(markdown) {
  const section = extractSection(markdown, "### Day by day", "### Who this route suits");
  const matches = [...section.matchAll(/\*\*(Days?\s+([0-9]+)(?:[–-]([0-9]+))?\s+—\s+([^*]+))\*\*\s{2}\n([\s\S]*?)(?=\n\*\*Days?\s+|$)/g)];
  const rows = [];
  for (const match of matches) {
    const start = Number(match[2]);
    const end = match[3] ? Number(match[3]) : start;
    for (let day = start; day <= end; day++) rows.push({ day, title: match[4].trim(), detail: plain(match[5]) });
  }
  return rows;
}

function websiteOverview(markdown) {
  return plain(extractSection(markdown, "### Overview", "### Day by day"));
}

function suitability(markdown) {
  return plain(extractSection(markdown, "### Who this route suits", "### Practical notes"));
}

function practical(markdown) {
  return plain(extractSection(markdown, "### Practical notes", "## Image requirements"));
}

const routes = [];
for (const meta of routeMeta) {
  const markdown = await fs.readFile(path.join(sourceDir, meta.file), "utf8");
  routes.push({ ...meta, overview: websiteOverview(markdown), suitability: suitability(markdown), practical: practical(markdown), days: parseDays(markdown) });
}

const workbook = Workbook.create();
const intro = workbook.worksheets.add("老板使用说明");
const quote = workbook.worksheets.add("老板报价总表");
const details = workbook.worksheets.add("详细日程");
const standards = workbook.worksheets.add("服务标准与边界");
const website = workbook.worksheets.add("网站价格文案");
const checks = workbook.worksheets.add("检查");

const c = { navy: "#17324D", teal: "#2E6F6D", cream: "#F6F2EA", gold: "#C89B4B", input: "#FFF2CC", formula: "#DDEBF7", output: "#E2F0D9", light: "#F4F6F7", border: "#D6DADD", red: "#F4CCCC" };
for (const sheet of [intro, quote, details, standards, website, checks]) sheet.showGridLines = false;

function title(sheet, range, value) {
  const r = sheet.getRange(range); r.merge(); r.values = [[value]]; r.format.fill = c.navy; r.format.font = { name: "Georgia", size: 20, bold: true, color: "#FFFFFF" }; r.format.rowHeight = 38; r.format.verticalAlignment = "center";
}
function header(range) { range.format.fill = c.navy; range.format.font = { bold: true, color: "#FFFFFF" }; range.format.wrapText = true; range.format.rowHeight = 34; range.format.verticalAlignment = "center"; }
function section(range) { range.format.fill = c.teal; range.format.font = { bold: true, color: "#FFFFFF" }; range.format.rowHeight = 25; }
function body(range) { range.format.borders = { preset: "inside", style: "thin", color: c.border }; range.format.verticalAlignment = "center"; }

// 说明
title(intro, "A1:H2", "China Prime DMC 经典线路老板报价表");
intro.getRange("A4:H4").merge(); intro.getRange("A4").values = [["用途：老板先查看完整线路与服务标准，再直接填写对客售价；网站From价和英文价格文案自动生成。"]]; intro.getRange("A4:H4").format.fill = c.cream; intro.getRange("A4:H4").format.font = { bold: true, color: c.navy };
intro.getRange("A6:H6").merge(); intro.getRange("A6").values = [["老板填写步骤"]]; section(intro.getRange("A6:H6"));
const instructions = [
  "先看“详细日程”：每条路线的每日安排已经完整列出。",
  "再看“服务标准与边界”：确认酒店、交通、导游、门票、餐食、可选活动和不含项目。",
  "在“老板报价总表”的浅黄色区域填写2/4/6/8人每人售价（USD）、单房差、旺季加价、酒店等级和有效期。",
  "网站默认取4人同行价格作为From价；如果需要改用其他基准，可直接修改“网站基准价/人”。",
  "价格必须是对客售价，不是供应商成本；国际机票默认不含。",
  "所有价格上线前必须确认日期、酒店房态、内部交通票价和特殊节假日加价。",
];
intro.getRange("A7:H12").values = instructions.map((text, i) => [i + 1, text, null, null, null, null, null, null]);
for (let row = 7; row <= 12; row++) intro.getRange(`B${row}:H${row}`).merge();
intro.getRange("A7:A12").format.fill = c.gold; intro.getRange("A7:A12").format.font = { bold: true, color: "#FFFFFF" }; intro.getRange("B7:H12").format.wrapText = true; intro.getRange("A7:H12").format.rowHeight = 36; body(intro.getRange("A7:H12"));
intro.getRange("A14:H14").merge(); intro.getRange("A14").values = [["网站价格建议"]]; section(intro.getRange("A14:H14"));
intro.getRange("A15:H19").values = [
  ["主价格", "From US$X per person", "按4人同行、双人间、淡季", null, null, null, null, null],
  ["解释", "Based on four guests sharing two rooms. Private guide and driver included.", "紧邻价格显示", null, null, null, null, null],
  ["免责声明", "Final pricing depends on travel dates, hotel category, group size and availability.", "不要写成全年固定价", null, null, null, null, null],
  ["单房差", "Single supplement from US$X", "单独显示", null, null, null, null, null],
  ["旺季", "Peak-date supplements may apply.", "春节、五一、暑期、国庆及大型活动", null, null, null, null, null],
];
for (let row = 15; row <= 19; row++) intro.getRange(`C${row}:H${row}`).merge();
intro.getRange("A15:A19").format.fill = c.navy; intro.getRange("A15:A19").format.font = { bold: true, color: "#FFFFFF" }; intro.getRange("B15:B19").format.fill = c.output; intro.getRange("A15:H19").format.wrapText = true; intro.getRange("A15:H19").format.rowHeight = 35; body(intro.getRange("A15:H19"));
intro.getRange("A:A").format.columnWidth = 16; intro.getRange("B:B").format.columnWidth = 48; intro.getRange("C:H").format.columnWidth = 15;

// 老板报价总表
title(quote, "A1:Q2", "经典线路老板报价总表（浅黄色为老板填写）");
quote.getRange("A3:Q3").merge(); quote.getRange("A3").values = [["报价单位：USD/人。2人、4人、6人、8人分别填写每人对客售价；网站From价默认等于4人价。"]]; quote.getRange("A3:Q3").format.fill = c.cream; quote.getRange("A3:Q3").format.font = { bold: true, color: c.navy };
quote.getRange("A4:Q4").values = [["路线ID", "路线名称", "时长", "产品层级", "路线节奏", "酒店夜数", "2人价/人", "4人价/人", "6人价/人", "8人价/人", "单房差", "旺季加价/人", "网站基准价/人", "建议酒店等级", "报价有效期", "状态", "老板报价备注"]]; header(quote.getRange("A4:Q4"));
quote.getRange("A5:F14").values = routes.map(r => [r.id, r.name, r.duration, r.tier, r.route, r.hotels]);
quote.getRange("G5:Q14").values = routes.map(() => [null, null, null, null, null, null, null, "4-star / Boutique", null, "待报价", ""]);
for (let row = 5; row <= 14; row++) quote.getRange(`M${row}`).formulas = [[`=H${row}`]];
quote.getRange("G5:Q14").format.fill = c.input; quote.getRange("M5:M14").format.fill = c.formula;
quote.getRange("G5:M14").setNumberFormat('$#,##0;[Red]($#,##0);-'); quote.getRange("O5:O14").setNumberFormat("yyyy-mm-dd");
quote.getRange("P5:P14").dataValidation = { rule: { type: "list", values: ["待报价", "需讨论", "已确认", "可上线"] } };
quote.getRange("N5:N14").dataValidation = { rule: { type: "list", values: ["Comfortable", "4-star / Boutique", "Luxury", "Ultra-bespoke"] } };
quote.getRange("E5:F14").format.wrapText = true; quote.getRange("Q5:Q14").format.wrapText = true; quote.getRange("A5:Q14").format.rowHeight = 40; body(quote.getRange("A5:Q14"));
quote.tables.add("A4:Q14", true, "OwnerQuoteTable").style = "TableStyleMedium2"; quote.freezePanes.freezeRows(4); quote.freezePanes.freezeColumns(2);
const quoteWidths = [9, 31, 12, 14, 35, 32, 13, 13, 13, 13, 13, 14, 15, 20, 14, 12, 42]; quoteWidths.forEach((w, i) => quote.getRangeByIndexes(0, i, 14, 1).format.columnWidth = w);

// 详细日程
title(details, "A1:K2", "10条经典线路完整逐日行程");
details.getRange("A3:K3").values = [["路线ID", "路线名称", "总时长", "Day", "当天标题", "详细安排（英文客户文案）", "主要交通", "住宿提示", "适合人群", "体力/运营提示", "老板报价关注点"]]; header(details.getRange("A3:K3"));
const dayRows = [];
for (const r of routes) {
  for (const d of r.days) dayRows.push([r.id, r.name, r.duration, `Day ${d.day}`, d.title, d.detail, r.transport, r.hotels, r.bestFor, r.physical, "请结合酒店等级、内部交通、门票预约及旺季加价报价"]);
}
details.getRange(`A4:K${3 + dayRows.length}`).values = dayRows;
details.getRange(`B4:K${3 + dayRows.length}`).format.wrapText = true; details.getRange(`A4:K${3 + dayRows.length}`).format.rowHeight = 58; body(details.getRange(`A4:K${3 + dayRows.length}`));
details.getRange(`A4:A${3 + dayRows.length}`).format.fill = c.teal; details.getRange(`A4:A${3 + dayRows.length}`).format.font = { bold: true, color: "#FFFFFF" };
details.tables.add(`A3:K${3 + dayRows.length}`, true, "DetailedItineraryTable").style = "TableStyleMedium2"; details.freezePanes.freezeRows(3); details.freezePanes.freezeColumns(5);
const detailWidths = [9, 29, 12, 9, 29, 72, 32, 34, 31, 36, 38]; detailWidths.forEach((w, i) => details.getRangeByIndexes(0, i, 3 + dayRows.length, 1).format.columnWidth = w);

// 服务标准与边界
title(standards, "A1:L2", "线路服务标准、包含与报价边界");
standards.getRange("A3:L3").values = [["路线ID", "路线名称", "产品定位", "行程概述", "主要交通", "住宿夜数", "默认包含", "默认不含", "可选/待确认", "适合人群", "实际体力与风险", "老板定价提醒"]]; header(standards.getRange("A3:L3"));
const standardRows = routes.map(r => [r.id, r.name, r.tier, r.overview, r.transport, r.hotels, "私人行程设计；私人车和司机；经筛选英文导游；计划内首道门票；机场/车站接送；落地联系支持", "国际机票；签证；个人消费；旅游保险；未列明餐食和自费活动", r.name.includes("长江") ? "游轮船名、舱型、岸上项目" : r.name.includes("拉萨") ? "入藏许可、健康评估、氧气和高原应急" : "具体酒店、餐食、交通票级和节假日加价", r.suitability || r.bestFor, r.practical || r.physical, "报价前确认日期、人数、房型、酒店等级、内部交通和特殊需求"]);
standards.getRange("A4:L13").values = standardRows; standards.getRange("B4:L13").format.wrapText = true; standards.getRange("A4:L13").format.rowHeight = 82; body(standards.getRange("A4:L13")); standards.getRange("A4:A13").format.fill = c.teal; standards.getRange("A4:A13").format.font = { bold: true, color: "#FFFFFF" };
standards.freezePanes.freezeRows(3); standards.freezePanes.freezeColumns(2); const standardWidths = [9, 29, 15, 58, 32, 32, 46, 42, 38, 42, 52, 42]; standardWidths.forEach((w, i) => standards.getRangeByIndexes(0, i, 13, 1).format.columnWidth = w);

// 网站价格文案
title(website, "A1:J2", "网站价格自动文案");
website.getRange("A3:J3").merge(); website.getRange("A3").values = [["网站From价引用“老板报价总表”的网站基准价；若基准价未填，则显示Awaiting quotation。"]]; website.getRange("A3:J3").format.fill = c.cream; website.getRange("A3:J3").format.font = { bold: true, color: c.navy };
website.getRange("A5:J5").values = [["路线ID", "路线名称", "时长", "From价/人", "单房差", "旺季加价", "酒店等级", "有效期", "状态", "网站英文价格文案"]]; header(website.getRange("A5:J5"));
website.getRange("A6:C15").values = routes.map(r => [r.id, r.name, r.duration]);
for (let i = 0; i < routes.length; i++) {
  const row = 6 + i, q = 5 + i;
  website.getRange(`D${row}`).formulas = [[`='老板报价总表'!M${q}`]]; website.getRange(`E${row}`).formulas = [[`='老板报价总表'!K${q}`]]; website.getRange(`F${row}`).formulas = [[`='老板报价总表'!L${q}`]]; website.getRange(`G${row}`).formulas = [[`='老板报价总表'!N${q}`]]; website.getRange(`H${row}`).formulas = [[`=IF('老板报价总表'!O${q}=\"\",\"\",'老板报价总表'!O${q})`]]; website.getRange(`I${row}`).formulas = [[`='老板报价总表'!P${q}`]];
  website.getRange(`J${row}`).formulas = [[`=IF(D${row}=0,"Awaiting quotation","From US$"&TEXT(D${row},"#,##0")&" per person, based on four guests sharing two rooms. Private guide and driver included. Final pricing depends on travel dates, hotel category, group size and availability.")`]];
}
website.getRange("D6:F15").setNumberFormat('$#,##0;[Red]($#,##0);-'); website.getRange("H6:H15").setNumberFormat("yyyy-mm-dd"); website.getRange("D6:J15").format.fill = c.output; website.getRange("J6:J15").format.wrapText = true; website.getRange("A6:J15").format.rowHeight = 46; body(website.getRange("A6:J15")); website.freezePanes.freezeRows(5);
const webWidths = [9, 30, 12, 14, 14, 14, 20, 14, 12, 78]; webWidths.forEach((w, i) => website.getRangeByIndexes(0, i, 15, 1).format.columnWidth = w);

// 检查
title(checks, "A1:E2", "老板报价表检查");
checks.getRange("A4:E4").values = [["检查", "结果", "预期", "修复位置", "说明"]]; header(checks.getRange("A4:E4"));
checks.getRange("A5:A9").values = [["10条路线均存在"], ["详细日程已读取"], ["已确认报价数量"], ["可上线报价数量"], ["网站价格非负"]];
checks.getRange("B5").formulas = [[`=IF(COUNTA('老板报价总表'!A5:A14)=10,"PASS","FAIL")`]];
checks.getRange("B6").formulas = [[`=IF(COUNTA('详细日程'!D4:D110)>=90,"PASS","FAIL")`]];
checks.getRange("B7").formulas = [[`=COUNTIF('老板报价总表'!P5:P14,"已确认")`]];
checks.getRange("B8").formulas = [[`=COUNTIF('老板报价总表'!P5:P14,"可上线")`]];
checks.getRange("B9").formulas = [[`=IF(MIN('网站价格文案'!D6:F15)>=0,"PASS","FAIL")`]];
checks.getRange("C5:E9").values = [["10", "老板报价总表", "路线数量"], ["≥90个行程日", "详细日程", "全部Day-by-Day应成功读取"], ["老板填写", "老板报价总表!P列", "已确认报价数量"], ["老板填写", "老板报价总表!P列", "可发布到网站的数量"], ["≥0", "网站价格文案", "防止异常价格"]]; body(checks.getRange("A5:E9")); checks.getRange("B5:B9").conditionalFormats.add("containsText", { text: "PASS", format: { fill: c.output, font: { bold: true, color: "#1F5B2B" } } }); checks.getRange("B5:B9").conditionalFormats.add("containsText", { text: "FAIL", format: { fill: c.red, font: { bold: true, color: "#9C1C1C" } } }); checks.getRange("A:A").format.columnWidth = 25; checks.getRange("B:B").format.columnWidth = 14; checks.getRange("C:E").format.columnWidth = 30;

await fs.mkdir(outputDir, { recursive: true });
const blob = await SpreadsheetFile.exportXlsx(workbook); await blob.save(outputPath);
for (const [sheetName, range] of [["老板使用说明", "A1:H19"], ["老板报价总表", "A1:Q14"], ["详细日程", "A1:K22"], ["服务标准与边界", "A1:L13"], ["网站价格文案", "A1:J15"], ["检查", "A1:E9"]]) {
  const preview = await workbook.render({ sheetName, range, scale: 1.1, autoCrop: "all", format: "png" }); await fs.writeFile(`${outputDir}/${sheetName}.png`, new Uint8Array(await preview.arrayBuffer()));
}
const inspect = await workbook.inspect({ kind: "table", range: "详细日程!A1:K25", include: "values,formulas", tableMaxRows: 25, tableMaxCols: 12 });
const errors = await workbook.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 300 }, summary: "final formula error scan" });
await fs.writeFile(`${outputDir}/qa.json`, JSON.stringify({ routeCount: routes.length, itineraryDayCount: dayRows.length, detail: inspect.ndjson, errors: errors.ndjson }, null, 2));
console.log(outputPath);
