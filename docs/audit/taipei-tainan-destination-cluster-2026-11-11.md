# 台北台南目的地内容批次

2026-11-11。仅本地修改，无commit、push或deploy。

## 内容与搜索意图

新增 `taipei.ts`、`tainan.ts` 两篇完整英文指南。正文以目的地直接答案开始，随后给出晚数、基地、关键取舍、交通、季节、体力、费用因素、文化、美食、FAQ及示例路线，最后引向单独确认的定制规划。不存在匹配已发布产品，products与articles均为空，不虚构线路或价格。

台北分别解释Zhongshan、Da'an、Xinyi、Wanhua与Beitou住宿；区分Taipei City与New Taipei City、Maokong与Pinglin、Jiufen与Shifen的不同出行目的。写清TPE/TSA、Taipei Main/Nangang/Taoyuan HSR，以及故宫分院与展品轮换、私人汤屋与普通浴缸、夜市与完整晚餐的区别。长尾意图包括Taipei where to stay for food、Maokong or Pinglin、Beitou private hot spring bath、Taipei airports、Taipei to Tainan planning。

台南分别解释West Central、Anping、历史改造小旅宿与现代酒店；写清HSR Tainan/Guiren、TRA Tainan与Shalun连接需查实际时刻。Anping Old Fort、Chihkan Tower、Tree House分开解释，不称作完整不变的荷兰古城。食物围绕实际用餐、时段、份量与成分，不强迫长串打卡。长尾意图包括Tainan how many nights、central Tainan or Anping、Tainan HSR station transfer、Tainan food without a packed tour、Tainan with less walking。

这些是正文回答的意图，未取得实时搜索量、难度或主要英语市场SERP数据，不称作已证明低竞争词。没有承诺Google排名或AI Overview引用。

## 架构接入

两篇显式注册到expansion发布清单和public-route-slugs；现有消费者接入目录、搜索、sitemap、有效metadata、FAQ及两份AI阅读文件。华东导航补入口，说明台湾章节的服务、入境及交通需单独确认，不暗示是大陆铁路延续。全国入口FAQ同步限定服务承诺。香港增加台北反向建议，泉州增加台南反向建议；两篇互联。

两项候选补充中文名、旅行实体类型及正文范围，未冒充已完成官方行政名录核对。不因台北或台南发布而自动登记其他台湾目的地覆盖。

## 来源与素材

引用台北/台南官方旅游入口、台湾旅游署、领务局、台湾高铁及故宫官网作明确范围的背景与进一步确认入口。此轮未实时抓取和核实官网运行信息，未写虚假核验日期、签证资格、交通时刻、主持人、私域准入或可约承诺。台湾当地供应商与实际交付仍待确认。

两张1600×1200原创SVG明确标注规划示意、非比例、非摄影。使用sharp转为800px PNG并目视检查，两图文字完整、无明显溢出。真实摄影、英雄图裁切及真实页面移动端视觉验收尚未完成。

## 检查与当前进度

全国审计通过：79篇指南、117项媒体引用、200处来源链接；路由、搜索、sitemap、有效metadata及两份AI阅读文件一致。557项候选中覆盖80项、477项未登记完整指南覆盖。34个规划分组均至少有一篇指南；这不是全国每个城市覆盖完成。

TypeScript检查和相关TS文件ESLint通过。Prettier支持的TS/JSON/Markdown文件已格式化；SVG不由当前Prettier解析器处理，以实际sharp渲染和目视检查核验。最终检查以命令输出为准。全国官方城市底表对账、全部目的地撰写、实时外部运营确认、真实摄影、浏览器验收、线上索引、排名及AI引用验证仍未完成。
