/**
 * 本模块职责：HubSpot 表单的公开标识（门户、表单、区域）。
 * 输入：无。输出：嵌入脚本地址与表单属性。
 * 不负责：表单字段与提交处理——它们在 HubSpot 后台配置，页面只负责嵌入。
 * 关键规则：这些标识本来就会出现在公开页面的 HTML 里，不是密钥。
 */
export const hubspotForm = {
  portalId: "247485719",
  formId: "944e4a41-6e38-4e00-b6ee-eb2b6846998b",
  region: "na2",
  scriptSrc: "https://js-na2.hsforms.net/forms/embed/247485719.js",
} as const;
