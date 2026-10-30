"use client";

/**
 * 本模块职责：嵌入 HubSpot 询盘表单。
 * 输入：可选样式类名。
 * 输出：HubSpot 官方嵌入容器；脚本在组件挂载时加载，卸载时移除。
 * 不负责：字段、校验与提交——由 HubSpot 表单本身处理。
 * 关键规则：脚本带 CSP nonce；站内跳转时每次挂载都重新加载脚本，否则 HubSpot 不会扫描新容器。
 */

import { useEffect, useRef } from "react";

import { useCspNonce } from "@/components/security/csp-nonce-provider";
import { hubspotForm } from "@/lib/hubspot";

import styles from "./hubspot-form.module.css";

export function HubSpotForm({ className = "" }: { className?: string }) {
  const nonce = useCspNonce();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = container.current;
    // HubSpot's loader marks itself as run and never rescans the page. Clearing the marker lets it
    // find the new container after a client-side navigation.
    delete (window as unknown as Record<string, unknown>)["__HS__FORMS__EMBED__"];
    const script = document.createElement("script");
    script.src = hubspotForm.scriptSrc;
    script.defer = true;
    if (nonce) script.nonce = nonce;
    document.body.appendChild(script);
    return () => {
      script.remove();
      if (host) host.innerHTML = "";
    };
  }, [nonce]);

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div
        ref={container}
        className="hs-form-frame"
        data-region={hubspotForm.region}
        data-form-id={hubspotForm.formId}
        data-portal-id={hubspotForm.portalId}
      />
      <noscript>
        <p>
          Please enable JavaScript to use this form, or message us on{" "}
          <a href="https://wa.me/8618027438191">WhatsApp</a>.
        </p>
      </noscript>
    </div>
  );
}
