"use client";

import { PatchEvent, defineField, defineType, set, type ObjectInputProps } from "sanity";
import { useRef, useState } from "react";

function R2ImageInput(props: ObjectInputProps<Record<string, unknown>>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function upload(file: File) {
    setUploading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/r2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name, contentType: file.type, size: file.size }),
      });
      const result = (await response.json()) as {
        uploadUrl?: string;
        publicUrl?: string;
        key?: string;
        error?: string;
      };
      if (response.status === 401) {
        throw new Error("后台登录已过期，请重新登录后再上传。");
      }
      if (!response.ok || !result.uploadUrl || !result.publicUrl || !result.key) {
        throw new Error(result.error || "无法创建上传地址。");
      }

      const uploadResponse = await fetch(result.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!uploadResponse.ok) throw new Error("图片上传到 R2 失败。");

      const dimensions = await readImageDimensions(file);
      props.onChange(
        PatchEvent.from(
          set({
            _type: "r2Image",
            url: result.publicUrl,
            key: result.key,
            alt: String(
              props.value?.alt || file.name.replace(/\.[^.]+$/, "").replaceAll(/[-_]+/g, " "),
            ),
            mimeType: file.type,
            sizeBytes: file.size,
            objectPosition: String(props.value?.objectPosition || "50% 50%"),
            ...dimensions,
          }),
        ),
      );
      setMessage("上传完成。请检查英文 Alt 文本和图片焦点，再发布内容。");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "上传失败，请稍后重试。");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        style={{ border: "1px solid #d8ddd7", borderRadius: 8, padding: 14, background: "#f8faf7" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          {typeof props.value?.url === "string" ? (
            <div style={{ width: 112, aspectRatio: "3 / 2", overflow: "hidden", borderRadius: 6 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={props.value.url}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ) : null}
          <div style={{ display: "grid", gap: 8, flex: 1 }}>
            <strong style={{ fontSize: 14 }}>Cloudflare R2 媒体</strong>
            <span style={{ color: "#666", fontSize: 13, lineHeight: 1.6 }}>
              WebP、AVIF、JPEG 或 PNG，单张不超过 12 MB。
            </span>
            <div>
              <button
                type="button"
                disabled={uploading}
                onClick={() => inputRef.current?.click()}
                style={{
                  border: "1px solid #bbb",
                  borderRadius: 999,
                  background: "#173c2f",
                  color: "white",
                  padding: "9px 15px",
                  cursor: "pointer",
                }}
              >
                {uploading ? "上传中..." : props.value?.url ? "替换图片" : "上传图片"}
              </button>
            </div>
          </div>
        </div>
        <input
          ref={inputRef}
          hidden
          type="file"
          accept="image/avif,image/webp,image/jpeg,image/png"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void upload(file);
          }}
        />
      </div>
      {message ? (
        <span style={{ fontSize: 13, color: message.includes("完成") ? "#35674e" : "#9b3f38" }}>
          {message}
        </span>
      ) : null}
      {props.renderDefault(props)}
    </div>
  );
}

async function readImageDimensions(file: File) {
  const url = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    return { width: image.naturalWidth, height: image.naturalHeight };
  } finally {
    URL.revokeObjectURL(url);
  }
}

export const r2ImageType = defineType({
  name: "r2Image",
  title: "R2 图片",
  type: "object",
  components: { input: R2ImageInput },
  fields: [
    defineField({
      name: "url",
      title: "公开 URL",
      type: "url",
      readOnly: true,
      hidden: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "key",
      title: "R2 Object Key",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "alt",
      title: "英文 Alt 文本",
      description: "准确描述图片内容，用于无障碍访问和图片 SEO，不要堆砌关键词。",
      type: "string",
      validation: (rule) => rule.required().min(8).max(180),
    }),
    defineField({
      name: "objectPosition",
      title: "焦点位置",
      type: "string",
      initialValue: "50% 50%",
    }),
    defineField({ name: "width", title: "宽度", type: "number", readOnly: true, hidden: true }),
    defineField({ name: "height", title: "高度", type: "number", readOnly: true, hidden: true }),
    defineField({ name: "mimeType", title: "MIME", type: "string", readOnly: true, hidden: true }),
    defineField({
      name: "sizeBytes",
      title: "文件大小",
      type: "number",
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: { title: "alt", subtitle: "url" },
  },
});
