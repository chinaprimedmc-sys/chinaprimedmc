# Search Console 已抓取未收录清单核查

核查日期：2026-11-12。报告数据截至 2026-11-09。来源为用户提供的 `https___www.chinaprimedmc.com_-Coverage-Drilldown-2026-11-12.zip`，Metadata.csv 明确指定 `Crawled - currently not indexed` / All known pages。

## 实际范围

本文件仅包含该分类的 43 个地址，不包含另外 84 个 `Discovered - currently not indexed` 地址，也不包含 43 个 Not found 地址。不得将这份文件当作全站所有未收录页面的清单。

线上逐项检查结果：30 个地址现返回 308；3 个 AVIF 图片、1 个 manifest 文件返回 200；9 个当前规范 HTML 页面返回 200。9 个 HTML 页面均在当前线上 203 页 sitemap 中，canonical 自指，无 noindex，单一 H1。Google 报告反映历史抓取状态，不代表这些旧地址今天仍提供相同内容。

## 当前正式页面：收录跟进优先级

| 页面                                                   | 建议优先级及核查方向                                                                   |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| `/destinations/zhangjiajie`                            | 高：商业目的地入口，核对实际 Google 抓取 HTML、规范网址、正文与公园/酒店指南的内容分工 |
| `/journal/how-many-days-beijing-xian-shanghai`         | 高：旗舰路线的决策文章，最后记录抓取为 11 月 7 日，优先 URL inspection                 |
| `/journal/first-trip-to-china-planning-guide`          | 高：首次访华规划入口，与其他天数文章明确区分规划决策和路线比较                         |
| `/journal/china-high-speed-train-foreigners`           | 高：交通操作指南，核对时效来源、官方规则与行程运营建议的区分                           |
| `/journal/terracotta-army-tickets-foreign-visitors`    | 高：西安产品相关购票意图，保留准确护照/预约说明，不承诺无证据的优先通道                |
| `/journal/mutianyu-badaling-jinshanling-great-wall`    | 中：不同长城段比较，避免与慕田峪产品详情重复                                           |
| `/journal/where-to-stay-in-zhangjiajie`                | 中：酒店区域比较，应与目的地总览形成互补                                               |
| `/journal/china-accommodation-registration-foreigners` | 中：住宿登记操作指南，核对官方来源及时效，不因未收录而关闭索引                         |
| `/journal/china-golden-week-travel-2026`               | 季节性：2026 黄金周已过去，应保留真实年度语境；未经核实不可把年份自动替换为 2027       |

目前未读取上述页面逐页 URL inspection 结果，不能断言 Google 已认可 canonical、完成渲染或因某一种原因拒绝收录。HTTP 检查不能替代 Google 索引状态。

## 本地修复及状态

- 本地已去除文章 metadata 自动追加年份，线上仍可见 `2026 (2026)`、`Wulingyuan vs (2026)` 等标题缺陷。本次额外将首次访华指南 SEO 标题缩短为 `First Trip to China: 12 Decisions Before Booking`，避免最后一个词截断。
- 新增 `/journey/beijing-great-wall-heritage-5-days` 到现有北京长城 5 天行程的准确 308；女性旅行历史入口转向现有女性专题。
- 本地移除了旧行程命名空间的无差别跳转。该导出中 17 个没有已核实等价内容的旧行程地址返回真实 404，包括西藏、内蒙古和部分已撤下路线。没有伪造替代产品或承诺原路线仍可预订。未来有真实同主题替代内容时，再建立准确迁移。
- 本地对全部 43 个地址复核：13 个 308、17 个真实 404、13 个 200（9 HTML + 4 资源）。正式页面仍允许索引；资源不加入 HTML sitemap，也未对图片加 noindex，以免影响图片搜索。
- 本次没有请求 Google 索引、点击验证修复、删除 GSC 记录、提交代码或部署。
- 同期工作区目的地扩展使新构建 sitemap 达到 443 页，与线上 203 页不同。新构建可索引性审计全部通过，但首次 SEO 审计发现北部、东部、南部大区描述超长（169 / 206 / 174 字符）。已将大区描述模板改为区域名称、私导交通与路线选择、书面提案 CTA；完整地域范围仍在页面正文保留。最终重新构建、变更文件 ESLint 均通过；443 个规范页面 SEO 审计通过，443 页全部可达、123 个精确永久跳转通过，0 问题。未将其他任务新增页面错误归因于本次导出核查。

## 后续闭环

1. 部署经过验证的修改后，重新检查线上 metadata、正文、重定向和 sitemap。当前本地修复不能提前当作线上生效。
2. 对上述 9 个正式页面读取 URL inspection：最近抓取时间、抓取成功与否、允许索引状态、Google 选择的 canonical，并检查 Google 抓取的 HTML。优先两项商业相关入口，再处理支持文章。
3. 页面确认正确且内容适合索引后，对少量关键规范网址请求索引。不能把请求成功或验证开始当作已收录。
4. 第二份 ZIP 已收到并完成 84 个 `Discovered - currently not indexed` 核查；结果见 `gsc-discovered-review-2026-11-12.md`。84 页目前均为可达、在 sitemap 中的规范 HTML；本首份 ZIP 本身不覆盖这些地址。
5. 持续比较规范商业页实际收录、查询与落地页 CTR、询盘转化；不追求旧地址、资源文件和合理排除页全部变成已收录。

## 可复查证据

- 原始 43 条记录：`gsc-crawled-not-indexed-2026-11-12.json`。
- 全部线上响应、本地快照比较及本次新构建复核：`gsc-crawled-live-check-2026-11-12.json`。其中 `localPreview` 是此前 3156 快照，`verifiedLocal` 是本次 3157 新构建，不混用。
- 构建日志：`/tmp/aviora-gsc-export-remediation-build.log`。
- SEO 与可索引性检查：`/tmp/aviora-gsc-export-seo.log`、`/tmp/aviora-gsc-export-indexability.log`。
- 最终构建与审计：`/tmp/aviora-gsc-export-final-build.log`、`/tmp/aviora-gsc-export-final-seo.log`、`/tmp/aviora-gsc-export-final-indexability.log`。本轮只改文案及精确跳转，未重复 UI 回归；此前 UI 通过记录不等同于对同期其他任务全部修改的验收。

Search Console 总览另已读取：11 月 9 日已收录 104、未收录 299；81 重定向、43 个 404、27 正确 canonical 替代、21 noindex、84 已发现未收录、43 已抓取未收录。界面显示已抓取未收录的验证于 11 月 11 日开始，本轮未发起该操作。
