import "server-only";

import { journalArticles } from "@/content/journal";
import { journeyCatalog } from "@/content/tours/catalog";
import { getAdminInquiries } from "@/lib/inquiries/data";

export type HealthStatus = "healthy" | "warning" | "critical";

export type HealthCheck = {
  id: string;
  label: string;
  status: HealthStatus;
  detail: string;
  action?: string;
};

export type SystemHealthReport = {
  generatedAt: string;
  overall: HealthStatus;
  checks: HealthCheck[];
};

export async function getSystemHealthReport(): Promise<SystemHealthReport> {
  const checks = await Promise.all([
    checkLocalContent(),
    checkSupabaseInquiries(),
    checkR2Configuration(),
    checkTurnstileConfiguration(),
    checkRevalidateSecret(),
    checkAdminConfiguration(),
    checkInquiryNotification(),
  ]);

  return {
    generatedAt: new Date().toISOString(),
    overall: combineStatus(checks),
    checks,
  };
}

function checkLocalContent(): HealthCheck {
  const journeyCount = journeyCatalog.length;
  const postCount = journalArticles.length;
  return {
    id: "local-content",
    label: "代码内容库",
    status: journeyCount && postCount ? "healthy" : "critical",
    detail: `公开内容由代码仓库维护。当前线路 ${journeyCount} 条，文章 ${postCount} 篇。`,
    action:
      journeyCount && postCount
        ? undefined
        : "检查 content/tours 和 content/journal 是否存在有效内容。",
  };
}

async function checkSupabaseInquiries(): Promise<HealthCheck> {
  try {
    const inquiries = await getAdminInquiries();
    return {
      id: "supabase-inquiries",
      label: "Supabase 询盘数据",
      status: "healthy",
      detail: `服务端读取正常。后台当前可查看最近 ${inquiries.length} 条询盘。`,
    };
  } catch {
    return {
      id: "supabase-inquiries",
      label: "Supabase 询盘数据",
      status: "critical",
      detail: "服务端无法读取询盘表。",
      action: "检查 SUPABASE_URL、SUPABASE_SERVICE_ROLE_KEY 和 inquiries 表权限。",
    };
  }
}

function checkR2Configuration(): HealthCheck {
  const missing = missingEnvironmentKeys([
    "CLOUDFLARE_R2_ACCOUNT_ID",
    "CLOUDFLARE_R2_ACCESS_KEY_ID",
    "CLOUDFLARE_R2_SECRET_ACCESS_KEY",
    "CLOUDFLARE_R2_BUCKET",
    "NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL",
  ]);

  if (missing.length) {
    return {
      id: "r2",
      label: "Cloudflare R2 媒体库",
      status: "critical",
      detail: `缺少 ${missing.length} 个 R2 环境变量。`,
      action: `补齐：${missing.join(", ")}。`,
    };
  }

  const publicUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL || "";
  try {
    if (new URL(publicUrl).protocol !== "https:") throw new Error("invalid protocol");
    return {
      id: "r2",
      label: "Cloudflare R2 媒体库",
      status: "healthy",
      detail: "上传所需配置完整，公共媒体域名使用 HTTPS。",
    };
  } catch {
    return {
      id: "r2",
      label: "Cloudflare R2 媒体库",
      status: "critical",
      detail: "公共媒体地址不是有效 HTTPS URL。",
      action: "检查 NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL。",
    };
  }
}

function checkTurnstileConfiguration(): HealthCheck {
  const missing = missingEnvironmentKeys([
    "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
    "TURNSTILE_SECRET_KEY",
  ]);
  if (missing.length) {
    return {
      id: "turnstile",
      label: "Cloudflare Turnstile",
      status: "critical",
      detail: "询盘安全验证未完整配置。",
      action: `补齐：${missing.join(", ")}。`,
    };
  }
  return {
    id: "turnstile",
    label: "Cloudflare Turnstile",
    status: "healthy",
    detail: "站点密钥和服务端密钥均已配置，询盘接口会失败关闭。",
  };
}

function checkRevalidateSecret(): HealthCheck {
  const secret = process.env.SANITY_REVALIDATE_SECRET || "";
  if (secret.length < 32) {
    return {
      id: "revalidate",
      label: "网站发布刷新",
      status: "warning",
      detail: "刷新 webhook secret 过短或未配置。",
      action: "网站内容随代码提交自动通过 Vercel 发布，不需要 Sanity webhook。",
    };
  }
  return {
    id: "revalidate",
    label: "网站发布刷新",
    status: "healthy",
    detail: "网站内容由代码提交触发 Vercel 发布。",
  };
}

function checkAdminConfiguration(): HealthCheck {
  const password = process.env.ADMIN_PASSWORD || "";
  const secret = process.env.ADMIN_SESSION_SECRET || "";
  const username = process.env.ADMIN_USERNAME || "";
  if (!username || password.length < 16 || secret.length < 32) {
    return {
      id: "admin-auth",
      label: "后台登录安全",
      status: "critical",
      detail: "后台账号、密码或 session secret 未达到生产安全要求。",
      action: "使用至少 16 位后台密码，并确保 ADMIN_SESSION_SECRET 至少 32 位。",
    };
  }
  return {
    id: "admin-auth",
    label: "后台登录安全",
    status: "healthy",
    detail: "后台登录配置达到生产最低安全要求。",
  };
}

function checkInquiryNotification(): HealthCheck {
  const webhook = process.env.INQUIRY_WEBHOOK_URL || "";
  if (!webhook) {
    return {
      id: "inquiry-notification",
      label: "询盘即时通知",
      status: "warning",
      detail: "询盘会安全写入 Supabase，但尚未配置即时通知 webhook。",
      action: "接入邮件、Make、飞书或 Telegram webhook，避免漏看新询盘。",
    };
  }
  try {
    if (new URL(webhook).protocol !== "https:") throw new Error("invalid protocol");
    return {
      id: "inquiry-notification",
      label: "询盘即时通知",
      status: "healthy",
      detail: "通知 webhook 已配置为 HTTPS。",
    };
  } catch {
    return {
      id: "inquiry-notification",
      label: "询盘即时通知",
      status: "critical",
      detail: "通知 webhook 不是有效 HTTPS URL。",
      action: "改为 HTTPS webhook，或先删除错误配置。",
    };
  }
}

function missingEnvironmentKeys(keys: string[]) {
  return keys.filter((key) => !process.env[key]);
}

function combineStatus(checks: HealthCheck[]): HealthStatus {
  if (checks.some((check) => check.status === "critical")) return "critical";
  if (checks.some((check) => check.status === "warning")) return "warning";
  return "healthy";
}
