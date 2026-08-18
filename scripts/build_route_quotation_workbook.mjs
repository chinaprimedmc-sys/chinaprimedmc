import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "/tmp/china-prime-route-quotation";
const outputPath = `${outputDir}/China-Prime-DMC-经典线路供应商报价表.xlsx`;

const routes = [
  ["R01", "北京—西安—上海", "9天8晚", "首次访华旗舰", "北京4 / 西安2 / 上海3"],
  ["R02", "北京—西安—成都—上海", "12天11晚", "家庭旗舰", "北京4 / 西安2 / 成都3 / 上海3"],
  ["R03", "北京—西安—桂林阳朔—上海", "13天12晚", "山水旗舰", "北京4 / 西安2 / 桂林阳朔4 / 上海3"],
  ["R04", "北京—西安—长江三峡—上海", "14天13晚", "舒适旗舰", "北京4 / 西安2 / 重庆游轮5 / 上海3"],
  ["R05", "北京—西安—张家界—上海", "12天11晚", "视觉旗舰", "北京4 / 西安2 / 张家界3 / 上海3"],
  ["R06", "昆明—大理—丽江—香格里拉", "9天8晚", "二访经典", "昆明1 / 大理2 / 丽江3 / 香格里拉2"],
  ["R07", "上海—苏州—水乡—杭州", "6天5晚", "江南短线", "上海2 / 苏州1 / 水乡1 / 杭州2"],
  ["R08", "拉萨—羊卓雍措—日喀则", "7天6晚", "高价值经典", "拉萨4 / 日喀则1 / 拉萨1"],
  ["R09", "成都熊猫与川菜", "5天4晚", "目的地经典", "成都4晚 / 乐山可选"],
  ["R10", "西安—敦煌—嘉峪关—张掖—吐鲁番", "9天8晚", "深度经典", "西安2 / 敦煌3 / 嘉峪关1 / 张掖1 / 吐鲁番1"],
];

const costItems = [
  ["酒店", "全程酒店含早餐（请按对应人数所需房间总价填写）"],
  ["单房差", "单人入住的全程附加成本；人数栏可填同一标准"],
  ["英文导游", "经筛选英文导游服务费及必要补贴"],
  ["私人车辆", "私人车、司机、油费、路桥、停车及司机食宿"],
  ["景点门票", "行程所列必含景点首道门票"],
  ["内部交通", "高铁/国内航班/游轮等，不含国际航班"],
  ["餐食", "计划包含的正餐、特色餐或烹饪体验"],
  ["活动体验", "茶馆、游船、骑行、演出或其他计划内体验"],
  ["接送服务", "机场/车站接送、行李或码头协调"],
  ["运营支持", "电话/WhatsApp落地支持及应急协调"],
  ["保险/许可", "地接责任险、入藏许可等线路特有成本"],
  ["其他成本", "请在备注中说明，不要隐藏在总价中"],
];

const workbook = Workbook.create();
workbook.comments.setSelf({ displayName: "China Prime DMC" });
const cover = workbook.worksheets.add("使用说明");
const routeSheet = workbook.worksheets.add("路线总览");
const costSheet = workbook.worksheets.add("供应商成本明细");
const calcSheet = workbook.worksheets.add("报价测算");
const webSheet = workbook.worksheets.add("网站价格建议");
const checksSheet = workbook.worksheets.add("检查");

const colors = {
  navy: "#17324D",
  teal: "#2E6F6D",
  cream: "#F6F2EA",
  gold: "#C89B4B",
  input: "#FFF2CC",
  formula: "#DDEBF7",
  output: "#E2F0D9",
  light: "#F4F6F7",
  border: "#D6DADD",
  muted: "#66717D",
  danger: "#F4CCCC",
};

function title(sheet, range, text) {
  const r = sheet.getRange(range);
  r.merge();
  r.values = [[text]];
  r.format.fill = colors.navy;
  r.format.font = { bold: true, color: "#FFFFFF", size: 20 };
  r.format.verticalAlignment = "center";
  r.format.rowHeight = 38;
}

function section(range) {
  range.format.fill = colors.teal;
  range.format.font = { bold: true, color: "#FFFFFF" };
  range.format.rowHeight = 24;
}

function header(range) {
  range.format.fill = colors.navy;
  range.format.font = { bold: true, color: "#FFFFFF" };
  range.format.wrapText = true;
  range.format.verticalAlignment = "center";
  range.format.rowHeight = 32;
  range.format.borders = { preset: "inside", style: "thin", color: "#5E7183" };
}

function body(range) {
  range.format.borders = { preset: "inside", style: "thin", color: colors.border };
  range.format.verticalAlignment = "center";
}

for (const sheet of [cover, routeSheet, costSheet, calcSheet, webSheet, checksSheet]) {
  sheet.showGridLines = false;
}

// 使用说明
title(cover, "A1:H2", "China Prime DMC 经典线路供应商报价表");
cover.getRange("A4:H4").merge();
cover.getRange("A4").values = [["用途：收集真实地接成本，自动测算不同人数的人均售价，并生成网站可展示的 From USD 参考价。"]];
cover.getRange("A4:H4").format.fill = colors.cream;
cover.getRange("A4:H4").format.font = { bold: true, color: colors.navy };
cover.getRange("A4:H4").format.wrapText = true;
cover.getRange("A4:H4").format.rowHeight = 34;

cover.getRange("A6:B11").values = [
  ["工作簿版本", "V1.0"],
  ["报价币种", "人民币成本 / 美元网站售价"],
  ["默认网站基准", "4人同行，双人间，淡季"],
  ["报价有效期", "供应商填写"],
  ["制作日期", new Date(2026, 6, 19)],
  ["负责人", "China Prime DMC"],
];
cover.getRange("A6:A11").format.fill = colors.navy;
cover.getRange("A6:A11").format.font = { bold: true, color: "#FFFFFF" };
cover.getRange("B6:B11").format.fill = colors.light;
body(cover.getRange("A6:B11"));
cover.getRange("B10").setNumberFormat("yyyy-mm-dd");

cover.getRange("A13:H13").merge();
cover.getRange("A13").values = [["填写流程"]];
section(cover.getRange("A13:H13"));
cover.getRange("A14:H19").values = [
  ["1", "供应商先阅读“路线总览”，确认线路、天数和报价范围。", null, null, null, null, null, null],
  ["2", "进入“供应商成本明细”，填写浅黄色单元格；金额必须是对应人数的整团人民币总成本。", null, null, null, null, null, null],
  ["3", "酒店请按全程房间数报价；2人=1间、4人=2间、6人=3间、8人=4间，除非备注另有房型。", null, null, null, null, null, null],
  ["4", "内部交通必须注明票价等级和是否暂估；游轮必须注明船名/舱型；西藏必须注明许可范围。", null, null, null, null, null, null],
  ["5", "“报价测算”会自动加入风险缓冲、目标毛利、汇率和取整，不要手改蓝色公式区。", null, null, null, null, null, null],
  ["6", "“网站价格建议”中的价格是参考起价，最终报价仍需依据日期、酒店、人数和供应情况确认。", null, null, null, null, null, null],
];
for (let row = 14; row <= 19; row++) cover.getRange(`B${row}:H${row}`).merge();
cover.getRange("A14:A19").format.fill = colors.gold;
cover.getRange("A14:A19").format.font = { bold: true, color: "#FFFFFF" };
cover.getRange("B14:H19").format.wrapText = true;
cover.getRange("A14:H19").format.rowHeight = 34;
body(cover.getRange("A14:H19"));

cover.getRange("A21:H21").merge();
cover.getRange("A21").values = [["网站价格写法建议"]];
section(cover.getRange("A21:H21"));
cover.getRange("A22:H26").values = [
  ["主价格", "From US$X per person", "按4人同行、双人间、淡季测算", null, null, null, null, null],
  ["解释文字", "Based on four guests sharing two rooms. Private guide and driver included.", "必须紧邻价格显示", null, null, null, null, null],
  ["免责声明", "Final pricing depends on travel dates, hotel category, group size and availability.", "不要把暂估价写成固定合同价", null, null, null, null, null],
  ["单房差", "Single supplement from US$X", "单独显示，不混入默认双人间价格", null, null, null, null, null],
  ["旺季", "Peak-date supplements may apply.", "春节、五一、暑期、国庆及特殊活动日期", null, null, null, null, null],
];
for (let row = 22; row <= 26; row++) cover.getRange(`C${row}:H${row}`).merge();
cover.getRange("A22:A26").format.fill = colors.navy;
cover.getRange("A22:A26").format.font = { bold: true, color: "#FFFFFF" };
cover.getRange("B22:B26").format.fill = colors.output;
cover.getRange("A22:H26").format.wrapText = true;
cover.getRange("A22:H26").format.rowHeight = 34;
body(cover.getRange("A22:H26"));
cover.getRange("A:H").format.font = { name: "Arial", size: 10 };
cover.getRange("A1:H2").format.font = { name: "Georgia", size: 20, bold: true, color: "#FFFFFF" };
cover.getRange("A:A").format.columnWidth = 16;
cover.getRange("B:B").format.columnWidth = 42;
cover.getRange("C:H").format.columnWidth = 15;
cover.freezePanes.freezeRows(2);

// 路线总览
title(routeSheet, "A1:G2", "经典线路报价范围");
routeSheet.getRange("A4:G4").values = [["路线ID", "路线名称", "建议时长", "产品层级", "住宿/城市节奏", "报价状态", "供应商备注"]];
header(routeSheet.getRange("A4:G4"));
routeSheet.getRange(`A5:E${4 + routes.length}`).values = routes;
routeSheet.getRange(`F5:G${4 + routes.length}`).values = routes.map(() => ["待报价", ""]);
routeSheet.getRange(`F5:F${4 + routes.length}`).dataValidation = { rule: { type: "list", values: ["待报价", "已收到", "需澄清", "已确认"] } };
routeSheet.getRange(`F5:G${4 + routes.length}`).format.fill = colors.input;
routeSheet.getRange(`A5:G${4 + routes.length}`).format.rowHeight = 34;
routeSheet.getRange(`B5:E${4 + routes.length}`).format.wrapText = true;
body(routeSheet.getRange(`A5:G${4 + routes.length}`));
routeSheet.tables.add(`A4:G${4 + routes.length}`, true, "RouteOverviewTable").style = "TableStyleMedium2";
routeSheet.freezePanes.freezeRows(4);
routeSheet.getRange("A:A").format.columnWidth = 10;
routeSheet.getRange("B:B").format.columnWidth = 32;
routeSheet.getRange("C:D").format.columnWidth = 16;
routeSheet.getRange("E:E").format.columnWidth = 38;
routeSheet.getRange("F:F").format.columnWidth = 14;
routeSheet.getRange("G:G").format.columnWidth = 34;

// 供应商成本明细
title(costSheet, "A1:N2", "供应商成本明细（浅黄色为必填/可填）");
costSheet.getRange("A3:N3").merge();
costSheet.getRange("A3").values = [["金额规则：CNY整团总成本，不是人均价。若项目不适用填0；暂时无法报价请留空并在备注说明。"]];
costSheet.getRange("A3:N3").format.fill = colors.cream;
costSheet.getRange("A3:N3").format.font = { bold: true, color: colors.navy };
costSheet.getRange("A4:N4").values = [["路线ID", "路线名称", "成本类别", "服务说明", "供应商", "联系人", "报价日期", "有效期至", "2人总成本", "4人总成本", "6人总成本", "8人总成本", "是否暂估", "报价条件/备注"]];
header(costSheet.getRange("A4:N4"));

const costRows = [];
for (const route of routes) {
  for (const item of costItems) {
    costRows.push([route[0], route[1], item[0], item[1], "", "", null, null, null, null, null, null, "否", ""]);
  }
}
costSheet.getRange(`A5:N${4 + costRows.length}`).values = costRows;
costSheet.getRange(`E5:N${4 + costRows.length}`).format.fill = colors.input;
costSheet.getRange(`M5:M${4 + costRows.length}`).dataValidation = { rule: { type: "list", values: ["否", "是"] } };
costSheet.getRange(`G5:H${4 + costRows.length}`).setNumberFormat("yyyy-mm-dd");
costSheet.getRange(`I5:L${4 + costRows.length}`).setNumberFormat('¥#,##0;[Red](¥#,##0);-');
costSheet.getRange(`B5:D${4 + costRows.length}`).format.wrapText = true;
costSheet.getRange(`N5:N${4 + costRows.length}`).format.wrapText = true;
body(costSheet.getRange(`A5:N${4 + costRows.length}`));
costSheet.tables.add(`A4:N${4 + costRows.length}`, true, "SupplierCostTable").style = "TableStyleMedium2";
costSheet.freezePanes.freezeRows(4);
costSheet.freezePanes.freezeColumns(4);
const widths = [10, 30, 14, 36, 18, 16, 13, 13, 14, 14, 14, 14, 12, 40];
widths.forEach((width, index) => costSheet.getRangeByIndexes(0, index, 4 + costRows.length, 1).format.columnWidth = width);

// 报价测算
title(calcSheet, "A1:Q2", "不同人数报价自动测算");
calcSheet.getRange("A4:B10").values = [
  ["参数", "数值"],
  ["人民币/美元汇率", 7.2],
  ["风险缓冲", 0.08],
  ["目标毛利率", 0.25],
  ["网站价格取整", 50],
  ["网站基准人数", 4],
  ["说明", "网站建议按4人同行、双人间、淡季展示"]
];
header(calcSheet.getRange("A4:B4"));
calcSheet.getRange("A5:B10").format.fill = colors.input;
body(calcSheet.getRange("A5:B10"));
calcSheet.getRange("B5").setNumberFormat("0.00");
calcSheet.getRange("B6:B7").setNumberFormat("0.0%");
calcSheet.getRange("B8:B9").setNumberFormat("#,##0");
calcSheet.getRange("A12:Q12").values = [["路线ID", "路线名称", "2人成本", "2人人均售价USD", "2人毛利额USD", "4人成本", "4人人均售价USD", "4人毛利额USD", "6人成本", "6人人均售价USD", "6人毛利额USD", "8人成本", "8人人均售价USD", "8人毛利额USD", "单房差USD", "报价完整度", "需澄清"]];
header(calcSheet.getRange("A12:Q12"));
calcSheet.getRange(`A13:B${12 + routes.length}`).values = routes.map(r => [r[0], r[1]]);
for (let index = 0; index < routes.length; index++) {
  const row = 13 + index;
  const idRef = `$A${row}`;
  calcSheet.getRange(`C${row}`).formulas = [[`=SUMIFS('供应商成本明细'!$I$5:$I$124,'供应商成本明细'!$A$5:$A$124,${idRef},'供应商成本明细'!$C$5:$C$124,"<>单房差")`]];
  calcSheet.getRange(`F${row}`).formulas = [[`=SUMIFS('供应商成本明细'!$J$5:$J$124,'供应商成本明细'!$A$5:$A$124,${idRef},'供应商成本明细'!$C$5:$C$124,"<>单房差")`]];
  calcSheet.getRange(`I${row}`).formulas = [[`=SUMIFS('供应商成本明细'!$K$5:$K$124,'供应商成本明细'!$A$5:$A$124,${idRef},'供应商成本明细'!$C$5:$C$124,"<>单房差")`]];
  calcSheet.getRange(`L${row}`).formulas = [[`=SUMIFS('供应商成本明细'!$L$5:$L$124,'供应商成本明细'!$A$5:$A$124,${idRef},'供应商成本明细'!$C$5:$C$124,"<>单房差")`]];
  const groups = [["C", "D", "E", 2], ["F", "G", "H", 4], ["I", "J", "K", 6], ["L", "M", "N", 8]];
  for (const [costCol, sellCol, marginCol, pax] of groups) {
    calcSheet.getRange(`${sellCol}${row}`).formulas = [[`=IF(${costCol}${row}=0,0,CEILING(((${costCol}${row}*(1+$B$6))/(1-$B$7)/${pax}/$B$5),$B$8))`]];
    calcSheet.getRange(`${marginCol}${row}`).formulas = [[`=IF(${sellCol}${row}=0,0,(${sellCol}${row}*${pax})-(${costCol}${row}/$B$5))`]];
  }
  calcSheet.getRange(`O${row}`).formulas = [[`=CEILING((SUMIFS('供应商成本明细'!$J$5:$J$124,'供应商成本明细'!$A$5:$A$124,${idRef},'供应商成本明细'!$C$5:$C$124,"单房差")*(1+$B$6)/(1-$B$7)/$B$5),$B$8)`]];
  calcSheet.getRange(`P${row}`).formulas = [[`=COUNT('供应商成本明细'!I${5 + index * 12}:L${16 + index * 12})/48`]];
  calcSheet.getRange(`Q${row}`).formulas = [[`=IF(P${row}=1,"完整",IF(P${row}=0,"未报价","缺少成本"))`]];
}
calcSheet.getRange(`C13:C${12 + routes.length}`).setNumberFormat('¥#,##0;[Red](¥#,##0);-');
calcSheet.getRange(`F13:F${12 + routes.length}`).setNumberFormat('¥#,##0;[Red](¥#,##0);-');
calcSheet.getRange(`I13:I${12 + routes.length}`).setNumberFormat('¥#,##0;[Red](¥#,##0);-');
calcSheet.getRange(`L13:L${12 + routes.length}`).setNumberFormat('¥#,##0;[Red](¥#,##0);-');
for (const col of ["D", "E", "G", "H", "J", "K", "M", "N", "O"]) calcSheet.getRange(`${col}13:${col}${12 + routes.length}`).setNumberFormat('$#,##0;[Red]($#,##0);-');
calcSheet.getRange(`P13:P${12 + routes.length}`).setNumberFormat("0%");
calcSheet.getRange(`C13:Q${12 + routes.length}`).format.fill = colors.formula;
body(calcSheet.getRange(`A13:Q${12 + routes.length}`));
calcSheet.getRange(`Q13:Q${12 + routes.length}`).conditionalFormats.add("containsText", { text: "完整", format: { fill: colors.output, font: { color: "#1F5B2B", bold: true } } });
calcSheet.getRange(`Q13:Q${12 + routes.length}`).conditionalFormats.add("notContainsText", { text: "完整", format: { fill: colors.danger, font: { color: "#9C1C1C", bold: true } } });
calcSheet.freezePanes.freezeRows(12);
calcSheet.freezePanes.freezeColumns(2);
calcSheet.getRange("A:A").format.columnWidth = 10;
calcSheet.getRange("B:B").format.columnWidth = 32;
calcSheet.getRange("C:O").format.columnWidth = 15;
calcSheet.getRange("P:Q").format.columnWidth = 14;

// 网站价格建议
title(webSheet, "A1:J2", "网站价格建议（报价完整后使用）");
webSheet.getRange("A3:J3").merge();
webSheet.getRange("A3").values = [["建议展示方式：From US$X per person。基准为4人同行、双人间、淡季；最终价格取决于日期、酒店等级、人数与供应情况。"]];
webSheet.getRange("A3:J3").format.fill = colors.cream;
webSheet.getRange("A3:J3").format.font = { bold: true, color: colors.navy };
webSheet.getRange("A3:J3").format.wrapText = true;
webSheet.getRange("A5:J5").values = [["路线ID", "路线名称", "时长", "网站From价/人", "单房差From", "2人价/人", "4人价/人", "6人价/人", "8人价/人", "网站英文价格文案"]];
header(webSheet.getRange("A5:J5"));
webSheet.getRange(`A6:C${5 + routes.length}`).values = routes.map(r => [r[0], r[1], r[2]]);
for (let index = 0; index < routes.length; index++) {
  const row = 6 + index;
  const calcRow = 13 + index;
  webSheet.getRange(`D${row}`).formulas = [[`='报价测算'!G${calcRow}`]];
  webSheet.getRange(`E${row}`).formulas = [[`='报价测算'!O${calcRow}`]];
  webSheet.getRange(`F${row}`).formulas = [[`='报价测算'!D${calcRow}`]];
  webSheet.getRange(`G${row}`).formulas = [[`='报价测算'!G${calcRow}`]];
  webSheet.getRange(`H${row}`).formulas = [[`='报价测算'!J${calcRow}`]];
  webSheet.getRange(`I${row}`).formulas = [[`='报价测算'!M${calcRow}`]];
  webSheet.getRange(`J${row}`).formulas = [[`=IF(D${row}=0,"Awaiting quotation","From US$"&TEXT(D${row},"#,##0")&" per person, based on four guests sharing two rooms. Final pricing depends on travel dates, hotel category and availability.")`]];
}
webSheet.getRange(`D6:I${5 + routes.length}`).setNumberFormat('$#,##0;[Red]($#,##0);-');
webSheet.getRange(`D6:J${5 + routes.length}`).format.fill = colors.output;
webSheet.getRange(`B6:B${5 + routes.length}`).format.wrapText = true;
webSheet.getRange(`J6:J${5 + routes.length}`).format.wrapText = true;
body(webSheet.getRange(`A6:J${5 + routes.length}`));
webSheet.getRange(`D6:D${5 + routes.length}`).format.font = { bold: true, color: colors.teal, size: 12 };
webSheet.freezePanes.freezeRows(5);
webSheet.getRange("A:A").format.columnWidth = 10;
webSheet.getRange("B:B").format.columnWidth = 32;
webSheet.getRange("C:C").format.columnWidth = 14;
webSheet.getRange("D:I").format.columnWidth = 15;
webSheet.getRange("J:J").format.columnWidth = 70;

// 检查
title(checksSheet, "A1:E2", "报价模型检查");
checksSheet.getRange("A4:E4").values = [["检查项目", "结果", "阈值/预期", "处理位置", "说明"]];
header(checksSheet.getRange("A4:E4"));
checksSheet.getRange("A5:A9").values = [["汇率有效"], ["毛利率有效"], ["风险缓冲有效"], ["至少一条完整报价"], ["网站价格非负"]];
checksSheet.getRange("B5").formulas = [[`=IF(AND('报价测算'!B5>0,'报价测算'!B5<20),"PASS","FAIL")`]];
checksSheet.getRange("B6").formulas = [[`=IF(AND('报价测算'!B7>=0,'报价测算'!B7<1),"PASS","FAIL")`]];
checksSheet.getRange("B7").formulas = [[`=IF(AND('报价测算'!B6>=0,'报价测算'!B6<1),"PASS","FAIL")`]];
checksSheet.getRange("B8").formulas = [[`=IF(COUNTIF('报价测算'!Q13:Q22,"完整")>0,"PASS","待报价")`]];
checksSheet.getRange("B9").formulas = [[`=IF(MIN('网站价格建议'!D6:I15)>=0,"PASS","FAIL")`]];
checksSheet.getRange("C5:E9").values = [
  ["0 < 汇率 < 20", "报价测算!B5", "防止汇率误填"],
  ["0% ≤ 毛利率 < 100%", "报价测算!B7", "使用毛利率而非成本加成率"],
  ["0% ≤ 缓冲 < 100%", "报价测算!B6", "用于未预见成本"],
  ["至少1条报价完整", "供应商成本明细", "初始状态为待报价属于正常"],
  ["所有建议价≥0", "网站价格建议", "防止异常公式"],
];
body(checksSheet.getRange("A5:E9"));
checksSheet.getRange("B5:B9").conditionalFormats.add("containsText", { text: "PASS", format: { fill: colors.output, font: { color: "#1F5B2B", bold: true } } });
checksSheet.getRange("B5:B9").conditionalFormats.add("containsText", { text: "FAIL", format: { fill: colors.danger, font: { color: "#9C1C1C", bold: true } } });
checksSheet.getRange("A:A").format.columnWidth = 24;
checksSheet.getRange("B:B").format.columnWidth = 14;
checksSheet.getRange("C:E").format.columnWidth = 30;

await fs.mkdir(outputDir, { recursive: true });
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);

const inspections = {};
for (const [name, range] of [["使用说明", "A1:H26"], ["路线总览", "A1:G14"], ["供应商成本明细", "A1:N24"], ["报价测算", "A1:Q22"], ["网站价格建议", "A1:J15"], ["检查", "A1:E9"]]) {
  inspections[name] = (await workbook.inspect({ kind: "table", range: `${name}!${range.split("!").pop()}`, include: "values,formulas", tableMaxRows: 30, tableMaxCols: 18 })).ndjson;
  const preview = await workbook.render({ sheetName: name, range: range.split("!").pop(), scale: 1.2, autoCrop: "all", format: "png" });
  await fs.writeFile(`${outputDir}/${name}.png`, new Uint8Array(await preview.arrayBuffer()));
}

const errors = await workbook.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 300 }, summary: "final formula error scan" });
await fs.writeFile(`${outputDir}/qa.json`, JSON.stringify({ outputPath, inspections, errors: errors.ndjson }, null, 2));
console.log(outputPath);
