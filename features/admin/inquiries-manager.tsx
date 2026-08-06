"use client";

import { useMemo, useState } from "react";

import type { InquiryRecord } from "@/lib/inquiries/data";

const statusLabels: Record<InquiryRecord["status"], string> = {
  new: "新询盘",
  contacted: "已联系",
  qualified: "已确认需求",
  proposal_sent: "已报价",
  won: "已成交",
  lost: "未成交",
};

export function InquiriesManager({ initialItems }: { initialItems: InquiryRecord[] }) {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter((item) =>
      [item.name, item.email, item.whatsapp, item.phone, item.journey_slug]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalized)),
    );
  }, [items, query]);

  async function updateStatus(id: string, status: InquiryRecord["status"]) {
    const response = await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (response.ok)
      setItems((current) => current.map((item) => (item.id === id ? { ...item, status } : item)));
  }

  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">真实询盘</p>
          <h1 className="mt-2 text-3xl font-semibold">客户询盘管理</h1>
          <p className="text-muted mt-2 text-sm">共 {items.length} 条，数据直接来自 Supabase。</p>
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜索姓名或联系方式"
          className="border-border min-h-11 rounded-lg border bg-white px-4 text-sm"
        />
      </div>
      <div className="border-border overflow-x-auto rounded-xl border bg-white">
        <table className="w-full min-w-[1100px] text-left text-sm">
          <thead className="border-border bg-background text-muted border-b text-xs tracking-[0.1em] uppercase">
            <tr>
              {["提交时间", "客户", "联系方式", "出行", "预算", "来源", "备注", "状态"].map(
                (label) => (
                  <th key={label} className="px-4 py-3">
                    {label}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-border/70 border-b align-top last:border-0">
                <td className="px-4 py-4 whitespace-nowrap">
                  {new Date(item.created_at).toLocaleString("zh-CN")}
                </td>
                <td className="px-4 py-4 font-semibold">{item.name}</td>
                <td className="text-muted px-4 py-4">
                  {[item.email, item.whatsapp, item.phone].filter(Boolean).join(" / ")}
                </td>
                <td className="px-4 py-4">
                  {item.adults} 成人 · {item.children} 儿童
                  <br />
                  <span className="text-muted">{item.destinations.join(", ") || "未指定"}</span>
                  {item.viewed_journeys?.length ? (
                    <>
                      <br />
                      <span className="text-muted text-xs">
                        Viewed: {item.viewed_journeys.join(", ")}
                      </span>
                    </>
                  ) : null}
                </td>
                <td className="px-4 py-4">{item.budget_tier}</td>
                <td className="text-muted max-w-xs px-4 py-4">
                  <span className="font-medium text-[var(--text-primary)]">
                    {item.utm_source || sourceLabel(item.referrer, item.source_page)}
                  </span>
                  <br />
                  <span>{item.landing_page || item.source_page}</span>
                  {item.utm_campaign ? (
                    <>
                      <br />
                      Campaign: {item.utm_campaign}
                    </>
                  ) : null}
                </td>
                <td className="text-muted max-w-xs px-4 py-4">{item.notes || "—"}</td>
                <td className="px-4 py-4">
                  <select
                    value={item.status}
                    onChange={(event) =>
                      updateStatus(item.id, event.target.value as InquiryRecord["status"])
                    }
                    className="border-border min-h-10 rounded-lg border bg-white px-3"
                  >
                    {Object.entries(statusLabels).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function sourceLabel(referrer: string | null, sourcePage: string) {
  if (referrer) {
    try {
      return new URL(referrer).hostname.replace(/^www\./, "");
    } catch {
      return referrer;
    }
  }
  if (sourcePage.includes("utm_source=")) {
    return new URLSearchParams(sourcePage.split("?")[1]).get("utm_source") || "Campaign";
  }
  return sourcePage.startsWith("/") ? "Direct / internal" : sourcePage;
}
