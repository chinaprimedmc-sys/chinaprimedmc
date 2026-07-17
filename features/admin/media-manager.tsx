"use client";

import { Copy, Trash2 } from "lucide-react";
import { useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { Button } from "@/components/ui/button";
import type { CmsMediaAsset } from "@/lib/cms/types";

export function MediaManager({ initialItems }: { initialItems: CmsMediaAsset[] }) {
  const [items, setItems] = useState(initialItems);
  const [message, setMessage] = useState("");

  async function remove(item: CmsMediaAsset) {
    if (!window.confirm(`确认删除 ${item.file_name}？仍被内容引用的图片会被系统拒绝删除。`)) return;
    const response = await fetch(`/api/admin/media?id=${item.id}`, { method: "DELETE" });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setMessage(result.error ?? "删除失败。");
      return;
    }
    setItems((current) => current.filter((candidate) => candidate.id !== item.id));
    setMessage("图片已从媒体库和 Storage 删除。");
  }

  return (
    <div className="grid gap-6">
      <div>
        <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">真实媒体资源</p>
        <h1 className="mt-2 text-3xl font-semibold">Supabase 媒体库</h1>
        <p className="text-muted mt-2 text-sm">
          共 {items.length} 张。上传请在行程或博客编辑器内完成。
        </p>
      </div>
      {message ? (
        <p className="border-border rounded-lg border bg-white px-4 py-3 text-sm">{message}</p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="border-border overflow-hidden rounded-xl border bg-white"
          >
            <OptimizedImage
              src={item.url}
              alt={item.alt_text}
              width={item.width ?? 720}
              height={item.height ?? 480}
              frameClassName="aspect-[3/2] w-full"
              className="h-full w-full"
            />
            <div className="grid gap-3 p-4">
              <div>
                <h2 className="truncate font-semibold">{item.file_name}</h2>
                <p className="text-muted mt-1 text-xs">
                  {Math.ceil(item.size_bytes / 1024)} KB · {item.mime_type}
                </p>
              </div>
              <p className="text-muted text-sm leading-6">{item.alt_text}</p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={() => navigator.clipboard.writeText(item.url)}
                >
                  <Copy size={14} /> 复制链接
                </Button>
                <Button type="button" size="sm" variant="ghost" onClick={() => remove(item)}>
                  <Trash2 size={14} /> 删除
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
