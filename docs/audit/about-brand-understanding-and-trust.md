# About 品牌理解、核验与搜索入口

本轮在现有六个人群文章和 145 篇公开攻略之上，补强品牌解释与核验路径，没有新增近似主题页面。目标仍是完整的品牌内容、可验证的服务证据及实际获客，不能以本地代码通过代替上线和流量结果。

## 当前实施

- About 页面增加四项身份速览：旅客品牌、创始人、法律运营公司及旅行服务形式。
- 增加四段可见问答，对应品牌／贸易名称关系、创始人、2018 年注册日期归属及预订前核验方法。
- 六篇已公开的核验类文章链接到 About；About 同时链接到这些文章，覆盖选择旅行公司、书面报价、付款、导游资质、购物与本地支持。
- AboutPage 的稳定实体 ID、运营公司与创始人引用、可见问答段落及六个人群入口列表相互关联。没有把公司网站反馈、行业报道或公司自报数据描述为独立审计证据。
- About、Company 的标题收窄并移除通用 meta keywords；创始人页增加真实照片分享信息和 Person 图片引用。
- 两个 llms 文本入口复用可见品牌问答，不输出隐藏的额外事实。
- 全白布局延续现有设计；新增速览与文章入口在手机断点变为单列。HubSpot 流程沿用现有实现。

## 本轮问题与页面落点

| 搜索问题／意图                                      | 页面                                                   |
| --------------------------------------------------- | ------------------------------------------------------ |
| Are AVIORA and China Prime DMC the same company?    | /about#aviora-and-china-prime-dmc                      |
| Who founded AVIORA China Travel?                    | /about#who-founded-aviora                              |
| Was AVIORA founded in 2018?                         | /about#when-registered                                 |
| How can I check the company before booking?         | /about#check-travel-company                            |
| How to choose a private China tour company          | /journal/how-to-choose-private-china-tour-company      |
| What should a private China tour quotation include? | /journal/private-china-tour-proposal-checklist         |
| How to pay a China tour operator safely             | /journal/how-to-pay-china-tour-operator-safely         |
| How to check a China tour guide is licensed         | /journal/how-to-check-china-tour-guide-is-licensed     |
| Private China tour with no forced shopping          | /journal/china-tour-no-forced-shopping                 |
| Private China tour local support and transfers      | /journal/private-china-tour-transfers-handoffs-support |

上述定位基于内容与旅客决策问题，不代表实测搜索量或已有排名。

## 验证与尚未完成的证据

- 22 项品牌身份、人群文章搜索和咨询上下文测试通过，验证公开文章路径、实体 ID、可见来源与机器文本的一致性。
- 本轮请求线上 About 页时域名解析失败：curl exit 6，Could not resolve host。无法据此判断线上网站本身故障。
- 当前未部署，未验证本轮页面线上 HTML、移动端实际呈现、Search Console 索引、查询曝光或询盘归因。
- 未获得新的外部资质资料；许可原件、第三方评价、注册资料核验和承诺的支持范围继续以真实证据为准，不根据营销目标补造。
- AI Overview 展示和引用不能保证。本地内容布局只是上线、抓取和实际效果验证的准备工作。

## 目标后续验证

应核对正式域名线上可访问性、最终构建与路由、Google 收录和 canonical、实际移动端阅读、HubSpot 真实接收记录及可用的访问分析。上线后根据真实查询、曝光、点击和有效询盘调整内容，避免用文章数量代替效果。外部发消息、提交询盘或发布不在本轮已执行操作中。

## 2026-11-11：生产构建与 HTML 复核

- 生产编译、TypeScript 和页面生成已完成。标准 `pnpm build` 在社交图片脚本的 tsx CLI 本地 IPC 监听处受到 `EPERM` 限制；改用 `node --import tsx scripts/media/build-social-cards.ts` 执行同一脚本后成功。全部六项构建前内容审计通过，再通过 `node node_modules/next/dist/bin/next build --webpack` 完成生产构建。没有修改产品代码来放宽权限。
- 新增可复跑审计 `node --import tsx scripts/audit-about-search-rendered.mjs`。它在当前生产构建中调用 Next 的缓冲 HTML 渲染，不启动监听端口，覆盖 About、公司、创始人和六篇旅客文章，共九页。
- 九页的响应状态、单一 H1、自引用 canonical、搜索标题和描述、索引／摘要指令通过。脚本从检查文本中排除 JavaScript、RSC 和样式，确认品牌概述、可见问答、48 个长尾落点及主要内链确实进入页面 HTML；About 问答与结构化数据对应。
- 修复 About `#traveler-guides` 缺少可见 HTML 锚点的问题，使结构化数据引用与文章入口板块对应。
- 结果保存在 `artifacts/quality/about-search/report.json` 和九页 HTML 中。此检查使用当前 Next 版本仍支持的 `renderToHTML` 方法，框架提示该自定义服务器方法已弃用；它仅用于本地检查，不是产品运行方式。
- 该证据不覆盖公开 HTTP、代理／中间件行为、浏览器交互、手机视觉或 Google 索引。线上可访问性、外部证据和实际获客结果仍未验证，不能将本地渲染通过描述为已获得搜索流量。

## 2026-11-12：入口与发布检查补强

- About 主导航以直接的 Company & Registration 入口替换重复的 About 链接；旅客需求入口直接指向 `/about#traveler-guides`，保留现有页面与视觉结构。
- 新命令 `pnpm audit:about-search` 接入 `check:release` 的生产构建后阶段，CI 使用相同发布命令。扩展检查覆盖首页、九个核心页和配置中所引用的专题攻略；核验攻略返回人群页／品牌核验页的链接、跨页锚点，并要求核心页距首页不超过两次链接、专题攻略不超过三次。该距离只基于本次受检页面图，不代表外部爬虫已抓取。
- 审计运行前清除旧报告；失败时写入 `passed: false` 和已检查页面，不沿用之前成功结果。新增入口与检查通过 ESLint、格式及差异检查。
- 本次重新构建因 Google Fonts 域名解析失败而中断：Inter、Newsreader 下载返回 `ENOTFOUND fonts.googleapis.com`。失败构建没有有效 BUILD_ID；扩展后的审计正确退出并写入失败报告，尚未验证新增的完整内链检查。上一节九页生产渲染结果仅证明上一轮构建，不证明本次改动。
- 再次请求正式 About 地址时仍返回 curl exit 6，当前环境无法解析正式域名；不能由此判断生产网站故障。未发布、未操作 Search Console，未声称已产生流量或 AI 引用。

## 2026-11-12：解除字体构建依赖并完成扩展检查

- 将现有 Google Fonts 构建产物中的 13 个 WOFF2 子集原样随站点提供。字体元信息确认 Inter 和 Newsreader；字节哈希、全部 42 项字体／回退声明与原生成样式对照通过（忽略格式化的零值与分号差异）。包含原有所有字符子集、字重、斜体、swap 和回退尺寸，保留三个 Latin 文件的预加载。没有以社交图片用的静态 400 字重 TTF 替代网页字体。
- `public/fonts` 保存文件、SIL OFL 授权、嵌入作者声明、来源说明及哈希清单；`styles/fonts.css` 与根布局加载它们，构建不再请求 Google Fonts。Google 字体原实现也在访问时同源提供字体；本次解决的是构建时联网依赖，不声称此前浏览器访问会向 Google 下载字体。
- 当前生产构建通过（编译、TypeScript、页面生成）；`pnpm audit:about-search` 对 33 页生产渲染通过。首页到九个核心页至多两次链接，专题攻略至多三次；品牌问答、48 个长尾锚点、攻略回链和受检页面间跨页锚点通过。
- 修正审计对首页 canonical 末尾斜杠的等价 URL 判断，并显式设置失败退出码，避免 Next 的未捕获异常处理使失败检查返回 0。失败报告不复用旧的成功状态。
- 此次通过覆盖上一节扩展检查，但仍不等于全站发布门禁、公开 HTTP、手机浏览器视觉或线上索引通过。尚未部署；实际流量及 AI 引用仍需线上证据。
