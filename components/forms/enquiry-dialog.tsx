"use client";

/**
 * 本模块职责：全站询盘弹窗——点击任何指向 /start-planning 的普通链接，就地弹出 HubSpot 表单，不离开当前页面。
 * 输入：服务端传来的 slug→行程标题映射（仅用于提示“您正在咨询…”）。
 * 输出：原生 <dialog>（自带焦点锁定与 Esc 关闭）；表单只在打开时才挂载。
 * 不负责：表单字段与提交（HubSpot）、页内表单（见 enquiry-section.tsx）。
 * 关键规则：监听在捕获阶段，才能先于 Next <Link>；渐进增强——没有 JS 或使用修饰键/新标签页点击时，链接照常跳转到 /start-planning；
 * 当前页已有页内表单时只滚动到它，绝不同时出现两个 HubSpot 实例；
 * 带 match / journeys 参数的链接保持原样跳转（它们携带弹窗放不下的上下文）。
 */

import { useCallback, useEffect, useRef, useState } from "react";

import { trackEvent } from "@/lib/analytics/events";

import { HubSpotForm } from "./hubspot-form";
import styles from "./enquiry-dialog.module.css";

const whatsapp = "https://wa.me/8618027438191";

type Context = { source: string; journey?: string };

export function EnquiryDialog({ journeyTitles }: { journeyTitles: Record<string, string> }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<Context>({ source: "dialog" });

  const show = useCallback((next: Context) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setContext(next);
    setOpen(true);
    trackEvent("enquiry_open", {
      source: next.source.slice(0, 60),
      ...(next.journey ? { journey: next.journey.slice(0, 120) } : {}),
      page_path: window.location.pathname,
    });
  }, []);

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (anchor.hasAttribute("data-no-enquiry-dialog")) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || url.pathname !== "/start-planning") return;
      if (window.location.pathname === "/start-planning") return;
      if (url.searchParams.has("match") || url.searchParams.has("journeys")) return;

      event.preventDefault();
      const inline = document.querySelector<HTMLElement>("[data-enquiry-inline]");
      const source = url.searchParams.get("source") ?? "link";
      const journey = url.searchParams.get("journey") ?? undefined;
      if (inline) {
        inline.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
        inline.setAttribute("tabindex", "-1");
        inline.focus({ preventScroll: true });
        trackEvent("enquiry_scroll", {
          source: source.slice(0, 60),
          page_path: window.location.pathname,
        });
        return;
      }
      show({ source, journey });
    };
    // 捕获阶段：必须赶在 Next <Link> 自己的点击处理之前；Link 看到 defaultPrevented 就不会导航。
    // 只 preventDefault、不 stopPropagation，站点已有的 CTA 埋点仍会运行。
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [show]);

  const title = context.journey ? journeyTitles[context.journey] : undefined;

  return (
    <dialog
      ref={dialog}
      className={styles.dialog}
      aria-labelledby="enquiry-dialog-title"
      onClose={() => {
        setOpen(false);
        lastFocus.current?.focus?.();
      }}
      onClick={(event) => {
        if (event.target === dialog.current) setOpen(false);
      }}
    >
      <div className={styles.panel}>
        <header className={styles.head}>
          <div>
            <p className={styles.kicker}>Plan your journey</p>
            <h2 id="enquiry-dialog-title">Tell us about your trip</h2>
          </div>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </header>
        <div className={styles.body}>
          <p className={styles.intro}>
            {title ? (
              <>
                You are asking about <strong>{title}</strong>.{" "}
              </>
            ) : null}
            Share your dates, who is travelling and what matters most. No payment, no obligation. A
            China-based specialist replies, normally within a day.
          </p>
          {open ? <HubSpotForm /> : null}
          <p className={styles.alt}>
            Prefer to talk first?{" "}
            <a
              href={whatsapp}
              onClick={() => trackEvent("whatsapp_click", { placement: "enquiry-dialog" })}
            >
              Message us on WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </dialog>
  );
}
