# 前六条产品：上线验证、AI 引用与获链执行单

建立：2026-11-11。用于把本地编辑推进到线上验证。当前未部署本轮改动；没有 Search Console、Bing Webmaster 或反向链接平台的已验证数据。联网探测生产域名失败：curl exit 6，Could not resolve host。因此以下状态是待验收，不是已发现生产站存在故障。

## 先后顺序与完成标准

1. **发布准备**：确认本次版本范围，完成现有项目要求的构建与发布检查；保留当前 URL。工作区还包含其他页面的在途修改，不能把整个工作区视为本轮可直接发布的版本。本轮未执行发布。
2. **线上内容验收**：部署后，用现有 `pnpm audit:seo`、`pnpm audit:structured-data` 检查生产页面；逐条确认实际 HTTP 200、最终 canonical、可索引、robots 和 CDN/WAF 允许 Googlebot 读取正文。检查主要答案、官方来源和 schema 是否存在于返回内容；不能仅以 llms-full.txt 判断。
3. **收录验收**：在已验证的 Search Console 属性中检查下列六条 URL 及比较文章，记录 Google 选定 canonical、最近抓取时间、已收录状态和失败原因。站点地图提交和单条申请索引不保证收录，不能把已提交标作已收录。
4. **来源验收**：逐一打开官方引用，记录跳转后的 URL、页面发布机构、具体支持原文及适用日期。首页只能当查询入口；对入境、开放、实名预约等重要规则，应替换或补充相应政策／通知的直接链接后才能记为已核验。桂林游船还缺选定运营方的具体航次和票务依据。
5. **内容传播**：首批使用现有十天／十二天比较文章，向有真实关系的海外合作旅行社及相关编辑提供。先核实具体联系人和读者适配度；不进行批量投稿。本轮没有发送任何消息。
6. **效果复盘**：上线当天记基线，7 天查抓取和技术问题，28 天比较查询、点击和询价。若样本不足，继续收集，不因没有立刻出现 AI Overview 而重复改标题或新增同义页。

## 六条产品与首批查询

以下是英语搜索意图测试样本，不是已观察到的用户查询、搜索量或排名。

| 产品路径（域名 https://www.chinaprimedmc.com）          | 购买查询                                         | 决策查询                                                | 当前验收状态         |
| ------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------- | -------------------- |
| /tours/private-mutianyu-great-wall-day-tour             | private Mutianyu Great Wall tour from Beijing    | Mutianyu cable car vs chairlift private tour            | 本地完成；线上未验收 |
| /tours/private-shanghai-day-tour-guide-driver           | Shanghai private day tour with guide and driver  | Shanghai private day tour hotel pickup what is included | 本地完成；线上未验收 |
| /tours/private-xian-terracotta-warriors-day-tour        | private Terracotta Warriors tour from Xian       | Terracotta Warriors private tour tickets included       | 本地完成；线上未验收 |
| /tours/private-chengdu-panda-day-tour-early-morning     | private Chengdu panda tour hotel pickup          | Chengdu panda base early morning tour what is included  | 本地完成；线上未验收 |
| /tours/guilin-yangshuo-li-river-cruise-private-day-tour | Guilin to Yangshuo cruise with private transfers | Li River cruise finish Yangshuo or return Guilin        | 本地完成；线上未验收 |
| /tours/beijing-xian-shanghai-private-10-day-tour        | Beijing Xian Shanghai 10 day private tour        | Beijing Xian Shanghai 10 days vs 12 days                | 本地完成；线上未验收 |

比较文章：/journal/how-many-days-beijing-xian-shanghai 。目标问题：Is 10 days enough for Beijing Xian and Shanghai? / 10 vs 12 days Beijing Xian Shanghai itinerary。

在美国英语、英国英语的实际搜索环境分别记录。每次抽样保留：日期、国家、语言、设备、完整查询、AI Overview 是否出现、是否链接本站及具体页面、答案有无错误。没有 AI Overview 与出现但未引用本站是两种不同结果；普通排名和 AI 引用分别记录。需要截图时由有访问能力的验收环节采集，不虚构结果。

## 首批可引用资产

现有文章已补充明确的十天／十二天对照：九晚与十一晚、4/2/3 与 5/3/3 的城市夜数、两次换酒店、北京和西安增加的完整时间、十天上海 Day 9 不自动包含导游服务，以及景区步行不会因增加天数消失。该文章没有宣称这些安排得到官方认证。

引用建议：使用自然标题，例如 “Beijing, Xi'an and Shanghai trip-length comparison”，链接原文。该文章可供合作顾问回答客户的时间分配问题；无需复制全文，也不要求使用 exact-match 商业锚文本。

## 单封英文联系草稿（未发送）

仅在确认收件人确实负责中国行程内容或存在真实合作关系后使用；方括号内容须核实后填写。

Subject: A practical 10 vs 12-day Beijing–Xi'an–Shanghai comparison

Hi [name],

Your [specific article or client-planning resource] covers [verified relevant topic]. We have expanded our Beijing, Xi'an and Shanghai trip-length comparison with the actual hotel-night allocation and the days used by intercity travel.

It compares our ten-day framework (four Beijing nights, two Xi'an nights and three Shanghai nights) with our twelve-day framework (five, three and three). It also distinguishes complete days from included guided-service days and separates our itinerary judgment from official visitor rules.

If it helps your readers or clients decide how much time to allow, the comparison is here:
https://www.chinaprimedmc.com/journal/how-many-days-beijing-xian-shanghai

I represent AVIORA China Travel, the operator behind the examples. Please use your own editorial judgment about whether it is useful to cite. I can clarify the itinerary assumptions if needed.

Best,
[real sender name and role]

不发送未核实的恭维、不暗示官方合作、不要求好评或以回链作为条件。付费展示须披露并按平台与搜索政策处理链接属性。

## 获链记录与成功定义

每个真实候选记录：机构及页面、为何适合、与我们的关系、核实的联系人、目标文章、联系日期、回复、刊登 URL、链接属性、赞助披露和推荐询价。没有候选名单核验前不填真实机构名以营造“已合作”的印象。

成功按阶段判定：页面上线正确 → 收录得到证实 → 获得相关查询曝光 → 第三方真实引用 → 带来合格询价。Google 或 AI 平台最终是否引用由平台决定；这些节点用于发现缺口，不能承诺固定日期获得排名或引用。

## 官方规则配套攻略复核进展

2026-11-11：已编辑故宫预约、兵马俑票务和高铁攻略。在正文相关说法旁加入现有来源记录中的官方页面链接，明确历史价格、时刻与行李数字的核查日期；故宫删除把固定日接待量当作当前保证的 FAQ，改为私人团是否保证门票。新增故宫与铁路预订核对表、兵马俑私人日游服务说明，区分机构规则、已出票结果和运营方服务。三篇 updatedAt 更新，原 sources_verified_at 保留，未宣称完成新一轮在线核验。

新增实际 Markdown 内容集成检查：官方链接进入可见正文与 citations、FAQ 与 schema 同源、产品及攻略内链有真实目标、编辑日期不覆盖旧核查日期。87 项行程测试、类型、相关 ESLint、正文质量、治理、搜索角色和行程关联检查通过。未部署、未获取实时官方政策页面或第三方引用；历史数字不可作为当前报价或入场承诺。

## 第七条产品：十二天慢节奏线本地更新

2026-11-11：京西沪十二天线完成本地产品、目录、CMS 标题、官方出处、FAQ、AI 文本和配套攻略同步。分类为 unhurried-china，easy 节奏与 moderate 步行负荷分开；D5／D11 为无默认私导车辆的自主日。新增 8 项实际模型／内容集成测试，行程测试累计 95 项通过。详情见 `docs/products/07-china-at-an-easier-pace-12-day.md`。

地图、社交图、目的地及五项攻略审计通过，类型和相关 ESLint 通过。此次 webpack 生产构建失败于 `fonts.googleapis.com` DNS 解析，现有 Inter／Newsreader 下载失败；不能沿用上一轮构建结果作为本轮构建通过证据。未部署，未完成本轮浏览器或线上验收，未新增实时官方政策核验、搜索收录或第三方外链证据。
