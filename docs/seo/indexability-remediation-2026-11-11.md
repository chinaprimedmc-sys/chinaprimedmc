# AVIORA 搜索收录与 AI 理解优化记录

状态：本地修复与验证；尚未部署。Google 收录和 AI Overview 展示不能由网站代码保证。

## 证据基线

- Search Console 页面索引报告，数据截至 2026-11-06：110 已收录，293 未收录。
- 未收录分类：85 重定向、43 个 404、25 个正确 canonical 的替代页面、22 个 noindex、84 个已发现未收录、34 个已抓取未收录。
- 该报告选择的是 All known pages，包含历史 URL；不能用 110/403 推断现有正式页面的收录率。84+34 也尚未逐一核对是否属于当前 sitemap。
- 正式 sitemap 提交成功，Google 上次于 2026-11-08 读取，发现 202 个页面。另有一个普通 9 天行程 URL 被错误当作 sitemap 提交；它不是 XML sitemap，应通过 URL inspection 检查。
- 线上实测：sitemap 203 个 URL 全部 200、允许索引、canonical 正确，无重复 sitemap URL。首页 canonical 根路径的末尾斜杠差异不构成两个页面。
- 历史 noindex 示例在 Google 的最后抓取时间主要是 7 月。如今部分已经返回真实 404，不能把旧记录视为今天仍在配置 noindex。

## 本次修复

1. `config/legacy-route-migrations.ts`：为七个旧大区 URL 配置到对应 `/china-destinations/<region>` 页面的永久跳转；桂林阳朔旧 URL 指向桂林指南；旧家庭行程 URL 指向现有家庭行程。使用精确映射，未新增无关页面到首页的兜底跳转。
2. `app/journal/[slug]/page.tsx`：移除统一追加的年份与通用 CTA，保留编辑编写的描述；Article 图片与页面实际图片一致。没有伪造发布日期、作者或事实核验日期。
3. `lib/seo/schema.ts`：TouristTrip 不再承载 Product/Event 专属的 sku、brand、category、duration、additionalProperty 等字段；时长和运营事实保留在描述该行程的 WebPage / PropertyValue 规格中；目标客群使用 TouristTrip 支持的 touristType。Offer 和供应商继续关联同一行程及组织。
4. BlogPosting 的 reviewedBy 移至其 WebPage；移除 BlogPosting 不支持的 additionalProperty。价格、行程和供应商事实未因 Schema 修复而重新编造。
5. 两条近期更新后超长的行程 SEO 描述压缩至 165 字符以内；未改变路线与报价。
6. 精简版 `llms.txt` 使用统一价格配置中的完整 basis，而非仅展示卡片人数标签，使儿童年龄、房间和非旺季条件跟随起价一起提供。该文件仅是辅助内容，不是 Google 的收录或 AI Overview 门槛。
7. 新增 `pnpm audit:indexability` 并接入发布检查：检查所有 sitemap 页面及公开路由清单、HTTP 状态、Google/HTTP 索引与摘要指令、canonical、SSR H1、组织/文章/行程 Schema、robots 规则、首页链接可达性，以及所有精确旧 URL 的单跳永久跳转。
8. 新增 robots 解析、真实 HTML 爬取图及 Schema 语义测试，防止把 RSC/JS 字符串当成真实可爬链接或标题。

## 验证范围和边界

- 本地工作区同时存在其他页面、产品、报价和 About 优化，本次保留其修改；页面总数因此与线上不同。
- 第一次新审计：211 个 sitemap 页面全部可达，86 个精确旧 URL 跳转通过。
- 后续快照：213 个 sitemap 页面全部可达，85 个精确跳转通过；大理已成为正式页面，因此另一项开发工作移除了其旧跳转。
- 对后续快照 213 页的 JSON-LD 逐页对照 Schema.org 官方词表的 domainIncludes / 类型继承关系，未发现字段归属错误。这是词表语义检查，不等同于 Google Rich Results 对所有功能的展示认证。
- 最终发布检查结果以 `artifacts/quality/indexability.json` 和最终运行日志为准；报告在最终验证后补记。

## 仍须处理 / 验证

- 获取并逐一分类 43 个 404 和 118 个已发现/已抓取未收录的实际 URL。优先关注当前规范商业页，而非追求历史 URL 全部收录。
- `/destinations/sichuan`、`/destinations/guangdong`、`/destinations/xinjiang`、`/destinations/silk-road-dunhuang` 等旧页面没有已核实的等价新页面，当前保留 404；不得仅为清除报表把省份页面重定向到不等价城市或首页。需要恢复有价值的同主题页面，或在有证据时配置到准确替代页。
- `/search` 继续 noindex, follow，并不属于 sitemap；不应开放其无限查询结果供索引。
- Search Console 中错误提交的普通行程 sitemap 条目尚未删除；正式 sitemap 成功记录应保留。
- 本地结果需要部署后在线复核，再观察 Google 的重新抓取和 URL inspection 状态。不能提前点击 Validate fix 后宣称所有问题解决。
- Google 的重定向 URL、正确规范化的重复 URL 和合理 noindex 页面不应以“全部转绿”为目标。
- 搜索查询 CTR、关键商业词覆盖、当前规范页收录数与实际询盘才是后续运营指标；仅通过 typecheck、构建和站内链接检查不足以证明这些结果。

## 官方依据

- Google AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google 明确说明：AI Overview / AI Mode 无额外专用技术要求，不需要特殊 AI 文件或专用 Schema。支持链接需要页面已索引，并有资格展示搜索摘要；符合规范也不保证抓取、索引或展示。
- Schema.org 词表：https://schema.org/version/latest/schemaorg-current-https.jsonld

## 本轮最终验证记录

- `pnpm check:release` 最终运行日志：`/tmp/aviora-indexability-verified-release.log`。
- ESLint 与 TypeScript 检查通过；143 个 Node 单元测试及 2 个地图测试通过；生产构建通过。
- SEO 审计：最终运行时 216 个规范页面通过（工作区同期新增页面，因此高于此前 213 页快照）。
- 可索引性审计：最终运行时 216/216 可从首页经服务端 HTML 链接到达，84 个精确旧 URL 永久跳转通过，0 问题、0 深层级警告。此前 213 页快照的最深层级为 3 次点击。
- 首页 AI 内容、14 页重点 Schema、145 篇文章治理、93 篇 Markdown 内容审计通过。
- 对 213 页使用 Schema.org 官方词表逐页检查字段归属：0 个受影响页面。
- 最终整轮浏览器检查为 107 通过、1 失败；失败为 WebKit 在页面切换时取消预加载的三个静态资源请求，trace 显示相同资源随后均返回 200。未修改或放宽测试；对同一构建单独重复该用例 3 次，3 次全部通过。整轮 `check:release` 因该失败仍返回非零，不能记作完整发布检查通过。手机入口高度回归均已通过。尚不表示 Google 已重新收录，也尚未部署。
- 生产站点另做首页、旗舰行程、家庭支柱文章共 3 页 × 4 种 User-Agent 请求检查（普通浏览器、Googlebot、OAI-SearchBot、PerplexityBot）：12 次均 200、无 noindex、各页面标题一致。模拟 User-Agent 不能证明真实搜索引擎已经访问或索引。
- 最终浏览器回归曾发现完整价格说明使 10 天行程手机入口超过既定阅读高度预算；首屏现仅显示计价依据的首句（保留人数、房间、季节），价格详细区域仍保留完整条款，未调整测试阈值。
- Search Console 浏览器连接随后不可用（browser access host unavailable / cgWindowNotFound），未能取得全部 43 + 118 个实际 URL 清单；未执行验证修复、删除 sitemap 或请求索引等外部写操作。

- 对最终生产构建的独立站内链接复核：9,195 个 URL，0 个断链；日志 `/tmp/aviora-final-links.log`。该复核通过不改变整轮发布检查曾因 WebKit 预加载取消返回失败的事实。

## 持续改进：旧分类入口与排除页边界

- 移除 `/styles/:path*` 的无差别永久跳转，防止任意不存在的路径被导向 `/tours`。仅为已知 family、luxury、slow-travel、photography 四个旧分类配置明确替代页；未知分类保留真实 404。
- 旧家庭、奢华、女性、穆斯林友好与长者分类入口改指向对应现有专题页。慢节奏继续使用真实支持的 easy / relaxed 筛选，不把慢旅行一概等同于长者旅行；摄影指向确实涵盖摄影规划的 special-interest 专题。
- 可索引性审计新增排除页检查：通用及动态不存在的路径须返回 404 并携带 noindex；搜索页须可用且 noindex，并且不得出现在 sitemap。
- 静态资源浏览器测试拆为每个路由各用独立页面，避免跨页面导航主动取消 Next.js 预加载导致误报；仍严格检查页面活动期间的网络失败、HTTP 错误、样式表、主内容与横向溢出。
- 此轮仍未部署，未改动 HubSpot 表单、报价或行程事实。GSC 浏览器连接仍不可用，无法取得 118 个未收录地址清单。

### 持续改进验证结果

- 静态资源测试隔离修复后，`pnpm check:release` 整轮通过：170 个 Node 单元测试、2 个地图测试、128 项浏览器回归；218 个规范页面的 SEO / 可索引性审计通过；9,283 个站内 URL，0 断链。日志 `/tmp/aviora-release-indexing-boundaries.log`。
- 此后补充旧分类跳转调整，重新执行 `pnpm lint`、`pnpm build` 均通过。针对新构建重新执行 SEO 与可索引性审计：218 个规范页面、218 页可达、88 个精确永久跳转通过，0 问题、0 警告。
- 排除边界检查覆盖 6 个地址，真实 404 与搜索页 noindex 均通过。日志 `/tmp/aviora-legacy-category-indexability.log`、`/tmp/aviora-legacy-category-seo.log`；构建日志 `/tmp/aviora-legacy-category-build.log`。
- 未提交或部署；上述是本地代码与生产构建证据，不是 Google 收录或 AI 引用证明。

## 持续改进：保留旧行程意图与无脚本正文

- 进一步移除 `/journey/:slug`、`/journeys/:slug` 丢弃行程名称的兜底跳转。由已发布行程清单生成精确别名，直接进入对应 `/tours/<slug>`；已知历史更名仍保留已有明确映射，未知名称真实 404。
- 公开路由清单的文章 manifest 导入改为相对路径，兼容 Next 配置加载阶段尚未启用应用别名的环境；首次构建曾由此失败，修正后构建通过。
- 新增上述两个旧路由命名空间的未知路径边界检查。此后快照 220 页全部可达，124 个精确永久跳转通过，0 问题。
- 新发现：禁用 JavaScript 后，首页 H1 虽存在于响应 HTML，但祖先为 `hidden` 的 React 流式片段，实际高度为 0。页面仍显示全页加载骨架。证据 `/tmp/aviora-nojs-home.png`。
- 移除全局及 tours 的整页 `loading.tsx` 和不再使用的加载样式，让正文作为首个完整页面交付；保留现有客户端交互、原生 details、CSP 与 nonce，不改 HubSpot 表单。
- 新增 `tests/browser/no-javascript.spec.ts`：禁用脚本检查首页、行程列表、家庭行程、家庭专题、家庭文章和目的地页正文、标题及导航可见，且最后一天可通过原生 details 展开。首轮 Chromium 6 项通过。
- 该问题是已证实的无脚本阅读缺陷，不能据此推断它就是 GSC 未收录的原因。Next.js 官方说明流式 SSR 本身不损害 SEO；仍需 Google 实际 URL inspection 与抓取证据判断。
- 全页加载边界依据：`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/loading.md`；该版本会自动将 loading 文件变为包裹页面的 Suspense 边界。删除边界可能使站内切换等待服务端页面响应，本项目页面内容主要来自本地文件，完整回归将检查现有导航行为。
- 对修复快照的全部 220 个 sitemap 页面进行 Chromium 无脚本检查：全部 HTTP 200、单一 main、单一主标题且标题实际可见，0 失败。该轮为加快检查阻止图片、字体和媒体请求，不用于评估图片或字体表现；结果 `/tmp/aviora-all-pages-nojs.json`。代表页面另以正常资源加载完成无脚本阅读与原生折叠测试。
- 新测试首次跨浏览器运行中，手机用例误把 DOM 中第一条桌面品牌链接作为可见导航目标，响应式样式会正常隐藏该链接。修正为要求实际可见的内部链接，未更改网站样式；四浏览器的 24 个无脚本阅读用例随后全部通过。日志 `/tmp/aviora-nojs-four-browser.log`。原 128 项有脚本交互用例也全部通过。
- 最终 `pnpm check:release` 已整轮通过，日志 `/tmp/aviora-readable-html-final-release.log`：ESLint、TypeScript、170 个 Node 单元测试、2 个地图测试、构建与媒体检查通过；223 个规范页面的 SEO / 可索引性审计通过，124 个精确跳转通过；152 项浏览器测试通过，9,415 个站内 URL 零断链。此前 `/tmp/aviora-readable-html-release.log` 因测试定位问题返回失败，不作整轮成功证据。
- 页面数量从 220 增至 223 来自工作区同期的目的地扩展。全部页面无脚本标题可见性检查对应 220 页快照；最终 223 页构建另外通过各代表模板的 24 项无脚本回归，不把 220 页检查误写为覆盖新增的 3 页。
- 收录核验仍受浏览器访问阻塞：再次尝试 Chrome 原生窗口返回 `cgWindowNotFound`，无法读取 GSC 的 118 个未收录具体 URL。已请求保持 Chrome 中的 Search Console 网页索引报告打开；没有执行任何 GSC 写入，也没有部署或提交当前工作区。
