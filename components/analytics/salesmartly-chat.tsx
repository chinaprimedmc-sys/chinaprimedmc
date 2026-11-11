"use client";

import { MessageCircle, X } from "@/components/icons/symbols";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
 * 所有访客均可使用；点击 Chat now 后加载客服，避免与首屏争抢网络和主线程。
 * Chat now（打开 SaleSmartly）和 WhatsApp（跳转 WhatsApp）。
 */
export function SalesmartlyChat() {
  const nonce = useCspNonce();
  const [chatReady, setChatReady] = useState(false);
  const [chatRequested, setChatRequested] = useState(0);
  const [chatUnavailable, setChatUnavailable] = useState(false);
  const pendingOpen = useRef(false);
  const [chatOpen, setChatOpen] = useState(false);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryInViewOnPath, setEnquiryInViewOnPath] = useState<string | null>(null);
  const [closeSpot, setCloseSpot] = useState<{ top: number; right: number } | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRequested) return;
    let active = true;
    let script = document.querySelector<HTMLScriptElement>("script[data-aviora-salesmartly]");
    if (script?.dataset.loadFailed === "true") {
      script.remove();
      script = null;
    }
    const unavailable = () => {
      if (!active) return;
      pendingOpen.current = false;
      setChatUnavailable(true);
    };
    if (!script) {
      script = document.createElement("script");
      script.src = SALESMARTLY_SRC;
      script.async = true;
      script.dataset.avioraSalesmartly = "true";
      if (nonce) script.nonce = nonce;
      document.body.appendChild(script);
    }
    const onError = () => {
      script.dataset.loadFailed = "true";
      unavailable();
    };
    script.addEventListener("error", onError);
    let observer: MutationObserver | undefined;
    let tries = 0;
    const poll = window.setInterval(() => {
      tries += 1;
      const root = window.__SS_CHAT_SHADOWROOT__;
      if (root?.querySelector("#ss-chat-wrapper") && window.ssmEvent?.track) {
        window.clearInterval(poll);
        if (!root.querySelector("#aviora-hide-chat-launcher")) {
          const style = document.createElement("style");
          style.id = "aviora-hide-chat-launcher";
          style.textContent = HIDE_NATIVE_LAUNCHER;
          root.appendChild(style);
        }
        setChatReady(true);
        observer = new MutationObserver(() => {
          const open = isChatOpen(root);
          setChatOpen(open);
          setCloseSpot(open ? locateCloseSpot(root) : null);
        });
        observer.observe(root, { attributes: true, attributeFilter: ["class"], subtree: true });
        if (pendingOpen.current) {
          pendingOpen.current = false;
          setMenuOpen(false);
          window.ssmEvent.track("chatOpen");
        }
      } else if (tries > 40) {
        window.clearInterval(poll);
        unavailable();
      }
    }, 500);
    return () => {
      active = false;
      window.clearInterval(poll);
      observer?.disconnect();
      script.removeEventListener("error", onError);
    };
  }, [nonce, chatRequested]);

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

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      dockRef.current?.querySelector("button")?.focus();
    };
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !dockRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
    };
  }, [menuOpen]);

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
      ref={dockRef}
      className={styles.dock}
      data-suppressed={enquiryInViewOnPath === pathname ? "true" : undefined}
      data-open={menuOpen ? "true" : undefined}
    >
      <button
        type="button"
        id="aviora-contact-toggle"
        className={styles.toggle}
        aria-expanded={menuOpen}
        aria-controls="aviora-contact-options"
        aria-label={menuOpen ? "Close contact options" : "Talk to us"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
      </button>
      <div
        id="aviora-contact-options"
        className={styles.options}
        role="group"
        aria-label="Contact AVIORA"
      >
        <button
          type="button"
          className={`${styles.item} ${styles.chat}`}
          aria-busy={chatRequested > 0 && !chatReady && !chatUnavailable}
          disabled={chatRequested > 0 && !chatReady && !chatUnavailable}
          onClick={() => {
            if (chatReady) {
              setMenuOpen(false);
              window.ssmEvent?.track("chatOpen");
            } else {
              pendingOpen.current = true;
              setChatUnavailable(false);
              setChatRequested((attempt) => attempt + 1);
            }
          }}
        >
          <MessageCircle aria-hidden="true" />
          {chatRequested > 0 && !chatReady && !chatUnavailable ? "Connecting…" : "Chat now"}
        </button>
        {chatUnavailable ? (
          <p className={styles.status} role="status">
            Chat could not connect. Try again or use WhatsApp.
          </p>
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
