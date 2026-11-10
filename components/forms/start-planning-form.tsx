"use client";

import { HubSpotForm } from "./hubspot-form";

/**
 * 本模块职责：开始规划页的询盘表单入口。
 * 当前使用 HubSpot 表单；行程上下文只能作为说明文字展示，HubSpot 表单本身不接收它。
 */
export function StartPlanningForm({
  currentJourney,
  destinationName,
}: {
  savedJourneys?: string[];
  currentJourney?: { slug: string; title: string };
  destinationName?: string;
  preference?: string;
  matchSummary?: string;
  placement?: string;
}) {
  return (
    <div>
      {destinationName && !currentJourney ? (
        <p className="mb-4 text-base leading-7">
          You are planning a trip to <strong>{destinationName}</strong>. We will help you choose the
          right stay and onward route.
        </p>
      ) : null}
      {currentJourney ? (
        <p style={{ marginBottom: 16, fontSize: "0.9375rem" }}>
          You are asking about <strong>{currentJourney.title}</strong>. Mention it in your message
          and we will take it from there.
        </p>
      ) : null}
      <HubSpotForm />
    </div>
  );
}
