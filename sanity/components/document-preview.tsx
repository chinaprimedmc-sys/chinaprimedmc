"use client";

import { ExternalLink } from "lucide-react";
import { useFormValue } from "sanity";

export function DocumentPreview({ schemaType }: { schemaType: string }) {
  const slug = useFormValue(["slug", "current"]) as string | undefined;
  const path = previewPath(schemaType, slug);

  if (!path) {
    return (
      <div
        style={{
          minHeight: "100%",
          display: "grid",
          placeItems: "center",
          padding: 32,
          background: "#f6f7f4",
        }}
      >
        <div style={{ maxWidth: 420, textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 30, fontWeight: 500 }}>
            请先填写 URL Slug
          </h2>
          <p style={{ color: "#6a6f68", lineHeight: 1.7 }}>
            生成并保存 URL Slug 后，这里会显示正式网站预览。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100%",
        minHeight: "70vh",
        display: "grid",
        gridTemplateRows: "48px 1fr",
        background: "#e9ebe7",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 14px",
          borderBottom: "1px solid #d2d6d0",
          background: "white",
        }}
      >
        <span style={{ color: "#666d67", fontSize: 12 }}>正式网站预览</span>
        <a
          href={path}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            gap: 7,
            alignItems: "center",
            color: "#244d3b",
            fontSize: 12,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          新窗口打开 <ExternalLink size={14} />
        </a>
      </div>
      <iframe
        title="前台页面预览"
        src={`${path}${path.includes("?") ? "&" : "?"}studioPreview=1`}
        style={{ width: "100%", height: "100%", border: 0, background: "white" }}
      />
    </div>
  );
}

function previewPath(schemaType: string, slug?: string) {
  if (schemaType === "homePage" || schemaType === "siteSettings") return "/";
  if (schemaType === "destinationHub") return "/destinations";
  if (!slug) return null;
  if (schemaType === "journey") return `/tours/${slug}`;
  if (schemaType === "destination") return `/destinations/${slug}`;
  if (schemaType === "blogPost") return `/journal/${slug}`;
  return null;
}
