"use client";

import { MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { useCspNonce } from "@/components/security/csp-nonce-provider";

import styles from "./salesmartly-chat.module.css";

const SALESMARTLY_SRC =
  "https://plugin-code.salesmartly.com/js/project_768088_861304_1789553723.js";
const WHATSAPP_HREF =
  "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20would%20like%20help%20planning%20a%20private%20journey%20in%20China.";
/** 隐藏 SaleSmartly 自带的悬浮图标（可拖动、尺寸偏大），改用下方统一的联系入口。 */
const HIDE_NATIVE_LAUNCHER =
  '[class*="_btn_wrap_"], [class*="_btn_column_"] { display: none !important; }';

declare global {
  interface Window {
    __SS_CHAT_SHADOWROOT__?: ShadowRoot;
    ssmEvent?: { track: (name: string, data?: unknown) => void };
  }
}

function isChatOpen(root: ShadowRoot) {
  return Boolean(root.querySelector('#ss-chat-wrapper[class*="_open_"]'));
}

/**
 * 桌面端的聊天窗口没有自带关闭按钮（原来靠被我们隐藏的悬浮图标开合），
 * 所以在窗口右上角上方放一个关闭按钮；手机端是全屏窗口，自带 ✕，不重复放。
 */
function locateCloseSpot(root: ShadowRoot) {
  if (window.innerWidth < 768) return null;
  const panel = Array.from(root.querySelectorAll<HTMLElement>('[class*="_chat_"]')).find(
    (el) => el.getBoundingClientRect().width > 200,
  );
  if (!panel) return null;
  const rect = panel.getBoundingClientRect();
  return { top: Math.max(76, rect.top - 52), right: Math.max(12, window.innerWidth - rect.right) };
}

/**
 * 加载 SaleSmartly 在线客服（对所有访客加载），并在右侧边缘提供两个带说明的入口：
 * Chat now（打开 SaleSmartly）和 WhatsApp（跳转 WhatsApp）。
 */
export function SalesmartlyChat() {
  const nonce = useCspNonce();
  const [chatReady, setChatReady] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [enquiryInViewOnPath, setEnquiryInViewOnPath] = useState<string | null>(null);
  const [closeSpot, setCloseSpot] = useState<{ top: number; right: number } | null>(null);

  useEffect(() => {
    if (document.querySelector("script[data-aviora-salesmartly]")) return;
    const script = document.createElement("script");
    script.src = SALESMARTLY_SRC;
    script.async = true;
    script.dataset.avioraSalesmartly = "true";
    if (nonce) script.nonce = nonce;
    document.body.appendChild(script);
  }, [nonce]);

  // 等 SaleSmartly 挂载后：隐藏它自带的图标，并跟踪聊天窗口是否打开。
  useEffect(() => {
    let observer: MutationObserver | undefined;
    let tries = 0;
    const poll = window.setInterval(() => {
      tries += 1;
      const root = window.__SS_CHAT_SHADOWROOT__;
      if (root?.querySelector("#ss-chat-wrapper")) {
        window.clearInterval(poll);
        const style = document.createElement("style");
        style.textContent = HIDE_NATIVE_LAUNCHER;
        root.appendChild(style);
        setChatReady(true);
        observer = new MutationObserver(() => {
          const open = isChatOpen(root);
          setChatOpen(open);
          setCloseSpot(open ? locateCloseSpot(root) : null);
        });
        observer.observe(root, { attributes: true, attributeFilter: ["class"], subtree: true });
      } else if (tries > 40) {
        window.clearInterval(poll);
      }
    }, 500);
    return () => {
      window.clearInterval(poll);
      observer?.disconnect();
    };
  }, []);

  // Keep the floating dock clear of the homepage enquiry controls.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setEnquiryInViewOnPath(visible.size ? pathname : null);
    });
    document.querySelectorAll("[data-home-enquiry-form]").forEach((form) => observer.observe(form));
    return () => observer.disconnect();
  }, [pathname]);

  // 手机端：向下滚动时收起入口，向上滚动或停下时再出现，不长期遮挡内容。
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      setHidden(y > last && y > 240);
      if (y > last) setMenuOpen(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 详情页和文章页底部已有自己的行动条，入口要抬高避开。
  const liftedForBar = /^\/(tours|journal)\/[^/]+/.test(pathname ?? "");

  // 聊天窗口打开时让位，避免盖住窗口；桌面端改显示关闭按钮。
  if (chatOpen) {
    return closeSpot ? (
      <button
        type="button"
        className={styles.closeChat}
        style={{ top: closeSpot.top, right: closeSpot.right }}
        onClick={() => window.ssmEvent?.track("chatClose")}
      >
        <X aria-hidden="true" /> Close chat
      </button>
    ) : null;
  }

  return (
    <div
      className={styles.dock}
      data-suppressed={enquiryInViewOnPath === pathname ? "true" : undefined}
      data-hidden={hidden && !menuOpen ? "true" : undefined}
      data-lifted={liftedForBar ? "true" : undefined}
      data-open={menuOpen ? "true" : undefined}
    >
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close contact options" : "Talk to us"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
      </button>
      <div className={styles.options}>
        {chatReady ? (
          <button
            type="button"
            className={`${styles.item} ${styles.chat}`}
            onClick={() => {
              setMenuOpen(false);
              window.ssmEvent?.track("chatOpen");
            }}
          >
            <MessageCircle aria-hidden="true" /> Chat now
          </button>
        ) : null}
        <a
          className={`${styles.item} ${styles.whatsapp}`}
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
