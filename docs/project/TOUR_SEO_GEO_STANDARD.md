# 行程产品 SEO／GEO 编辑与实施标准

建立日期：2026-11-10。当前完整示例见 [上海一日游产品说明](../products/02-shanghai-private-day-tour.md)。标准用于后续逐条优化，不表示全部 19 条已经完成。

## 从购买问题定义页面

每个产品只承接一个核心购买需求。先写一句“谁在什么情况下为什么买它”，再确定主词。不要先列大量城市和关键词，再拼出一个行程。

产品页负责具体服务、路线、适用性、包含与不含、费用单位和询价；攻略负责比较和规划；目的地页负责城市认知。共享城市或同义词不构成新页面理由。

## 英语查询与内容分工

为每条产品整理以下意图：

- 购买：private + destination + day tour／itinerary。
- 服务：guide and driver、hotel pickup、English-speaking guide。
- 场景：one day、shore excursion、layover、family、older parents。
- 配置：核心景点、票种、交通方式、是否包含。
- 决策：cost for two、what is included、walking、weather、cancellation。

仅布局实际提供或愿意审核承接的服务。条件性服务必须在回答中明确条件，不能在标题承诺标准包未包含的机场接送或无障碍能力。

使用自然完整英语；关键词变体通过实体别名、具体问答和正文解决。不要堆砌近义短语、把 US／UK 国家名贴到同一段话上，或为拼写变体建立重复落地页。

目标查询、观察到的 Search Console 查询、付费关键词工具数据必须分开记录。没有外部数据就明确是编辑假设，不标“高搜索量”“低竞争”或虚构排名。

## 可见内容最低要求

1. 主标题直接说明目的地与产品类型。
2. 约一段自足摘要，回答是什么、在哪里、多长、谁服务、含什么、另付什么。
3. 可读事实表：时长、接送、导游、交通／门票、步行、费用单位、重要边界。
4. 带规划时间范围的真实日程，说明替换与加时关系。
5. 清楚的包含与不含；私人服务与共享场所分别说明。
6. 按真实问题编写 FAQ，答案先给结论再解释条件；同一问题只解决一次。
7. 接单资料清单和带产品上下文的询价入口。
8. 内容更新时间、相关攻略、适当的官方参考和真实运营方链接。

不把关键答案只放在 SEO 配置、JSON-LD、隐藏弹层或 `llms.txt` 中。FAQ 可用原生 details，但回答必须随 HTML 渲染。

## 数据同源规则

- `overview.answer`：可见摘要、TouristTrip 描述和完整 AI 文本的共用来源。
- `overview.practicalities`：可见事实与结构化数据共用，不维护一套 SEO 专属事实。
- `durationIso`：需要时明确真实计划时长；一天约八小时用 `PT8H`，不把天数误写成住宿夜数。
- `seo.preserveCopy`：人工完成摘要优化的产品可保留原始标题与描述，避免自动年份和 CTA 挤占核心意图。
- `getVisibleTourFaqs()`：页面显示与 FAQPage 的统一来源。
- `planningResources`：补充目的地、相关服务与官方资源。
- `related.useListedTours`：启用已编辑的相关产品推荐，避免同为一日游却推荐完全不同目的地。
- 价格读取统一目录。没有已核实金额，不生成数字起价、零元 Offer 或推算折扣。

## 抓取与实体连接

保持稳定 canonical 与 slug，产品应进入 sitemap，内链使用可抓取的正常地址。必要重命名须提供永久重定向，不为年份或同义词更换 URL。

TouristTrip 与 WebPage 连接到同一 product／operator 实体，FAQ 与面包屑来自实际可见内容。只标记真实存在的票项、时长、图片与报价，不新增虚假评分或供应确认。

检查 robots 与页面 noindex；允许抓取不等于已被收录。`llms.txt`／`llms-full.txt` 作为补充入口，与网页同步，不另行扩大服务承诺。文件存在不代表任何 AI 平台必然读取或引用。

官方政策、交通与景区规则引用相应机构；自家产品设计和服务范围由运营方负责。没有联网核实就不写实时价格、固定班次、入境资格或供应“已验证”结论。

## 验收

每条至少核对：真实生成的 metadata、canonical、详情模型、报价单位、FAQ 可见范围与 schema 一致、结构化事实、有效相关链接、机器文本目录、询价上下文及 sitemap 可发现性。

能够运行预览时，检查最终 HTML、桌面和手机展示、图片语义与性能、内链及表单。无法访问浏览器或 HTTP 时，清楚记录哪些检查完成、哪些没有完成，不能用类型检查替代视觉验收或真实抓取。

上线后观察真实查询与询价质量，再修改布局。排名、FAQ 展示、AI 摘录和引用由外部平台决定；编辑目标是提高事实质量、可读性、抓取一致性和需求匹配，不作结果保证。

## 官方来源与 AI 搜索引用标准（2026-11-11）

`planningResources.officialPublisher` 仅用于明确发布机构的官方资源。`description` 写明支持范围和仍需确认的事项；可见页面单列 Official sources and visitor rules，WebPage citation 和 AI 文本读取相同数据。不把官方出处加入产品 sameAs，不暗示背书，也不伪造最近核验日期。没有实时联网核验时，官方入口不等于当前政策已核验。

AI Overview 沿用一般抓取、索引及摘要资格；结构化数据和 llms.txt 都不是被引用保证。官方参考出站链接与第三方反向链接分别管理，获链只通过真实关系、资质和有用的原创材料。详细来源登记、上线验收和获链执行方案见 [实施记录](../audit/tour-official-sources-ai-search-2026-11-11.md)。

## 面向欧美客人的英文与可信度

采用自然、清楚的国际旅游英语；同一页统一美式或英式拼写。产品标题可以保留目的地、天数和 private tour 等核心词，但须有正常语法与标点，不为关键词把城市名生硬串联。卡片、H1 和 metadata 的人工标题应同步。

专业感体现在具体安排与解释：为什么给景点单独一天、何时留出恢复时间、报价包含什么、客户需要提供哪些信息。少用没有证据的 best、world-class、unmatched、officially approved 等宣传。官方引用证明相应规则的出处，不证明我们优于同行，也不表示机构背书。

对外避免内部字段语言，例如 first-China journey、public numerical starting price、base version、internal palace-cart entitlement。可用 your first trip to China、a personalized quote、this itinerary、skip-the-line access 等常用表达，并保留准确的服务边界。每日提示写当天独有的实用信息，不在十天日程重复同一段免责内容。

引用具体政策时，先说明与客户有关的规则，再给发布机构、原文链接和适用条件；原文、发布日期或有效期尚未核验时，只能称为官方查询入口，不能写 According to the latest policy 或 falsely imply that the rules were checked today。UNESCO 遗产背景、景区运营规定、铁路乘车要求、移民政策及本公司服务条款分别说明。
