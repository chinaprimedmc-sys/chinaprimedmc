"use client";

/**
 * 本模块职责：行程详情页侧边卡里的 HubSpot 询盘表单（取代原来的“Plan this journey”按钮）。
 * 输入：埋点位置名。
 * 输出：带 id="enquire" 与 data-enquiry-inline 的容器，里面是懒加载的 HubSpot 表单。
 * 不负责：表单字段与提交（HubSpot）。
 * 关键规则：一个页面只能有一个 HubSpot 实例；这个容器就是该页的“页内表单”，
 * 所以详情页不再渲染底部的 EnquirySection；全站弹窗发现它会直接滚动到这里。
 */

import type { PlanningContext } from "@/lib/forms/planning-context";
import { trackEvent } from "@/lib/analytics/events";

import { LazyHubSpotForm } from "./lazy-hubspot-form";

export function InlineEnquiryForm({
  placement,
  journeyTitle,
  planningContext,
}: {
  placement: string;
  journeyTitle?: string;
  planningContext?: PlanningContext;
}) {
  return (
    <div
      id="enquire"
      data-enquiry-inline
      style={{ scrollMarginTop: "calc(var(--site-nav-offset) + 16px)" }}
    >
      {journeyTitle ? (
        <p style={{ fontSize: "1rem", lineHeight: 1.65, marginBottom: 16 }}>
          You are asking about <strong>{journeyTitle}</strong>. Please include it in your message.
        </p>
      ) : null}
      <LazyHubSpotForm
        planningContext={planningContext}
        contextSummary={journeyTitle ? `Journey: ${journeyTitle}` : undefined}
        onVisible={() => trackEvent("enquiry_form_view", { placement })}
      />
    </div>
  );
}
