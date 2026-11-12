# 宜昌目的地本地审阅

日期：2026-11-12。仅本地修改，未提交、推送或部署。

## 产品地名与指南覆盖核查

使用现有审计的TypeScript解析钩子加载journeyCatalog和explorerDestinations，逐一比较产品destinationFilters与指南name/journeyDestinationNames。当前未覆盖产品地名集合为空。结果只证明目录名称存在对应指南，不证明逐日行程、客房、供应商或服务承诺已全部人工核实，也不说明中国所有目的地都有产品。

## 内容与搜索意图

宜昌完整英文指南回答Yichang travel guide、Three Gorges Dam or Yangtze cruise、Yichang cruise pier、where to stay before a Yangtze cruise、Yichang to Chongqing upstream/downstream、Yichang without a cruise、Three Gorges cruise mobility等实际问题。未测量关键词搜索量、难度或回报。

区分大坝参观、定义明确的短船、多晚船程，城市/集合点/实际码头及茅坪方向道路，城市晚数与船晚。船闸或升船机过境必须看具体日期与项目，不能从大坝门票或泛称巡游推断。具体船舱、甲板、电梯覆盖、舷梯与岸上步行和餐饮需求分别审查。三游洞和秭归文学纪念设置不伪装为不变的古代居所；长阳清江方向不当作长江三峡的同义名称。

内容先确定体验，再解释晚数、真实房间/船舱、完整交通、取舍和下一站。不承诺私人基础设施访问、免台阶、固定船闸过境或特定船型。无真实匹配宜昌/邮轮商品，products与articles为空，使用定制规划，不借重庆产品名义推荐未包含的船程。

## 架构与验证

注册显式索引、公开路由及华中导航。连接武汉、重庆、张家界；武汉增加实质反向内容。候选标注prefecture-level-city、Hubei父级和编辑边界，不把秭归和长阳独立县域指南算完成。

全国审计通过：120篇指南覆盖122项候选，465项待补；158项媒体引用、243项来源链接。路由、搜索、sitemap、有效metadata和两份AI阅读文件注册一致。TypeScript及本批ESLint通过。原创SVG已栅格化并目视检查，不是照片或地图。Prettier和git diff --check通过。

## 未完成验证

政府、工程机构和铁路链接提供背景与核查入口，不等同实时船班、码头、开放、房间和准入规则已确认。真实授权摄影、浏览器和移动端渲染、官网和运营商当期条件、部署后的索引/咨询/转化/AI引用仍未核验。不保证AI Overview或排名。全国权威行政城市底表集合对账仍未完成。
