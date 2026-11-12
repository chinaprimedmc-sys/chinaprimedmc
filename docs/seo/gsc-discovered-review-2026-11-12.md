# Search Console 已发现未收录清单核查

核查日期：2026-11-12。用户提供的第二份 ZIP 明确对应 `Discovered - currently not indexed`，共 84 个网址。记录中的 `1970-01-01` 应作为缺失的抓取日期处理，不是 Google 在 1970 年抓取的证据。

## 线上检查结果

- 84/84 返回 HTTP 200，均为 HTML。
- 84/84 位于当前线上 203 页 sitemap，canonical 均自指。
- 84/84 未发现 noindex，robots.txt 允许 Googlebot 抓取，均有且仅有一个 H1。
- 从首页沿服务器返回 HTML 链接计算：9 页深度为 1，75 页深度为 2；未发现孤立页面。此深度是网站图计算结果，不代表 Google 实际抓取顺序。
- 62 篇 journal、8 个 tour、8 个目的地总览/区域页，以及 6 个品牌或服务入口。
- 当前响应的 description 无超过 165 字符项。两篇线上 title 仍重复年份：`/journal/china-high-speed-trains-with-children`、`/journal/private-china-tour-cost-2026`。本地已有去除自动年份的修改，尚未部署。

## 需要优化的地方

排除自链接后，18 个网址仅有 1 个站内来源页面；7 个区域页只由地域总览引入，11 篇文章只由 journal 列表引入。它们可以被发现，但上下文内链支撑较弱。来源统计限本次抓取的线上 sitemap 页面，不是全互联网链接统计。

| 页面                                                      | 唯一来源              |
| --------------------------------------------------------- | --------------------- |
| `/china-destinations/central-china`                       | `/china-destinations` |
| `/china-destinations/east-china`                          | `/china-destinations` |
| `/china-destinations/north-china`                         | `/china-destinations` |
| `/china-destinations/northeast-china`                     | `/china-destinations` |
| `/china-destinations/northwest-china`                     | `/china-destinations` |
| `/china-destinations/south-china`                         | `/china-destinations` |
| `/china-destinations/southwest-china`                     | `/china-destinations` |
| `/journal/chengdu-panda-base-visit-length-afternoon-plan` | `/journal`            |
| `/journal/china-private-tour-weather-delay-support`       | `/journal`            |
| `/journal/china-tipping-guide-guides-drivers-hotels`      | `/journal`            |
| `/journal/how-to-pay-china-tour-operator-safely`          | `/journal`            |
| `/journal/li-river-cruise-weather-water-level-visibility` | `/journal`            |
| `/journal/mutianyu-weather-season-what-to-wear`           | `/journal`            |
| `/journal/private-china-tour-transfers-handoffs-support`  | `/journal`            |
| `/journal/second-trip-to-china-where-to-go-next`          | `/journal`            |
| `/journal/shanghai-day-tour-family-older-travelers-pace`  | `/journal`            |
| `/journal/women-private-china-travel`                     | `/journal`            |
| `/journal/xian-old-city-after-terracotta-warriors-day`    | `/journal`            |

优先在真正相关的行程、目的地及同主题指南正文中添加有用链接，而不是全站重复堆链接。先加强支付安全、接送衔接、天气延误及熊猫/长城/上海/西安决策文章的入口；区域页应随真实目的地内容建立关联。不要为了本报告而批量生成相似文章或关闭索引。

## 两份导出的合并结论

两份导出分别有 43 个已抓取未收录和 84 个已发现未收录地址。前一份目前包含 30 个跳转地址、4 个资源、9 个有效规范 HTML；后一份 84 个全部是有效规范 HTML。两分类合计有 93 个当前正式 HTML 页面值得跟进，不应要求其余历史跳转和资源全部作为网页收录。

本次没有发现这 84 页被 robots、noindex、错误 canonical、非 200 或孤立结构阻止索引的证据。不能由此判定正文质量、Google 抓取预算、Google 选定 canonical 或索引系统没有问题；也不能把实时 HTTP 检查当作 Google 已收录。

## 后续操作

1. 发布前验证并部署本地已完成的 metadata、重定向及服务端正文修复；当前工作区还有其他任务大量改动，本报告不构成对这些改动的整体验收。
2. 优先 URL inspection：`/tailor-made-china-tours`、`/fixed-itinerary-china-tours`、`/tours/luxury-yunnan-private-tour`、`/tours/muslim-friendly-china-tour-great-wall-desert-stars`，再选择一篇只有列表入口的支持文章。核对 Google 实际抓取、允许索引、Google 选择的 canonical 与渲染 HTML。
3. 对已确认有价值且技术正确的少量关键页面请求索引，随后跟踪抓取时间和实际收录；不承诺提交即收录。
4. 另一个独立问题是 GSC 中的 43 个 Not found，尚需对应分类导出，才能判断哪些旧地址有真实替代页、哪些应保持 404。本次两个 ZIP 不覆盖该分类。

## 证据与执行范围

- 原始清单：`gsc-discovered-not-indexed-2026-11-12.json`。
- 逐页线上证据：`gsc-discovered-live-check-2026-11-12.json`。
- 首份报告：`gsc-crawled-review-2026-11-12.md`。
- 本轮仅新增分析报告，未修改生产代码，未提交、部署或操作 Google Search Console。无需因文档更新重跑 build。
