"use client";

import { History, ImagePlus, LoaderCircle, Plus, Save, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

import { RadioField, TextAreaField, TextField } from "@/components/forms";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CmsBlogPost, CmsJourney } from "@/lib/cms/types";
import type { MediaAsset } from "@/types/component-library";

type EditorType = "journey" | "blog";
type UploadedMedia = MediaAsset & { id: string };

type EditorState = {
  id?: string;
  updatedAt?: string;
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  status: "draft" | "published";
  heroImage: UploadedMedia | null;
  seoTitle: string;
  seoDescription: string;
  body: string;
  gallery: UploadedMedia[];
  route: string;
  durationLabel: string;
  price: string;
  bestFor: string;
  styles: string;
  destinations: string;
  days: Array<{ day: string; city: string; title: string; description: string }>;
  category: string;
  author: string;
  tags: string;
  readingTime: string;
};

const emptyState: EditorState = {
  title: "",
  slug: "",
  subtitle: "",
  summary: "",
  status: "draft",
  heroImage: null,
  seoTitle: "",
  seoDescription: "",
  body: "",
  gallery: [],
  route: "",
  durationLabel: "",
  price: "Price on request",
  bestFor: "",
  styles: "",
  destinations: "",
  days: [],
  category: "Travel Guides",
  author: "China Prime DMC Editorial Team",
  tags: "",
  readingTime: "5 min read",
};

export function CmsEditor({
  type,
  initialItems,
}: {
  type: EditorType;
  initialItems: Array<CmsJourney | CmsBlogPost>;
}) {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState<string | null>(initialItems[0]?.id ?? null);
  const [state, setState] = useState<EditorState>(() =>
    initialItems[0] ? toEditorState(type, initialItems[0]) : emptyState,
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const selected = useMemo(() => items.find((item) => item.id === selectedId), [items, selectedId]);

  function update<K extends keyof EditorState>(key: K, value: EditorState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function chooseItem(item: CmsJourney | CmsBlogPost) {
    setSelectedId(item.id);
    setState(toEditorState(type, item));
    setMessage("");
  }

  function createNew() {
    setSelectedId(null);
    setState({ ...emptyState, days: [], gallery: [] });
    setMessage("");
  }

  async function save() {
    setSaving(true);
    setMessage("");
    try {
      const payload = toPayload(type, state);
      const response = await fetch("/api/admin/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        error?: string;
        record?: { id: string; updated_at: string };
      };
      if (!response.ok || !result.record)
        throw new Error(result.error || "保存失败。请检查字段。 ");
      const id = result.record.id;
      const stored = fromEditorState(type, { ...state, id, updatedAt: result.record.updated_at });
      setItems((current) => [stored, ...current.filter((item) => item.id !== id)]);
      setSelectedId(id);
      update("id", id);
      update("updatedAt", result.record.updated_at);
      setMessage(state.status === "published" ? "已发布，网站将在 60 秒内更新。" : "草稿已保存。 ");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "保存失败，请重试。 ");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[22rem_minmax(0,1fr)]">
      <Card className="h-fit overflow-hidden p-0 xl:sticky xl:top-8">
        <div className="border-border flex items-center justify-between border-b p-4">
          <div>
            <h2 className="font-semibold">{type === "journey" ? "行程列表" : "博客列表"}</h2>
            <p className="text-muted mt-1 text-xs">草稿不会显示在网站上</p>
          </div>
          <Button size="sm" onClick={createNew} aria-label="新建内容">
            <Plus size={15} />
          </Button>
        </div>
        <div className="grid max-h-[70svh] overflow-y-auto p-2">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => chooseItem(item)}
              className={`rounded-xl p-3 text-left ${selected?.id === item.id ? "bg-foreground text-background" : "hover:bg-foreground/5"}`}
            >
              <span className="block text-sm font-semibold">{item.title}</span>
              <span className="mt-1 block text-xs opacity-65">
                {item.status === "published" ? "已发布" : "草稿"} · /{item.slug}
              </span>
            </button>
          ))}
        </div>
      </Card>

      <div className="grid gap-5">
        <Card className="grid gap-5 p-5 md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-muted text-xs font-semibold tracking-[0.16em] uppercase">
                内容状态
              </p>
              <h1 className="mt-2 text-3xl font-semibold">
                {state.title || (type === "journey" ? "新行程" : "新博客")}
              </h1>
            </div>
            <div className="flex gap-2">
              <RadioField
                label="草稿"
                name="status"
                value="draft"
                checked={state.status === "draft"}
                onChange={() => update("status", "draft")}
              />
              <RadioField
                label="发布"
                name="status"
                value="published"
                checked={state.status === "published"}
                onChange={() => update("status", "published")}
              />
            </div>
          </div>
          <TextField
            label="标题"
            required
            value={state.title}
            onChange={(event) => update("title", event.target.value)}
          />
          <TextField
            label="URL Slug"
            required
            helper="小写英文和连字符，例如 beijing-family-journey"
            value={state.slug}
            onChange={(event) => update("slug", event.target.value)}
          />
          <TextField
            label="副标题"
            required
            value={state.subtitle}
            onChange={(event) => update("subtitle", event.target.value)}
          />
          <TextAreaField
            label="摘要"
            required
            value={state.summary}
            onChange={(event) => update("summary", event.target.value)}
          />
        </Card>

        {state.id ? <RevisionPanel type={type} id={state.id} /> : null}

        <MediaSection type={type} state={state} update={update} />

        {type === "journey" ? (
          <JourneyFields state={state} update={update} />
        ) : (
          <BlogFields state={state} update={update} />
        )}

        <Card className="grid gap-5 p-5 md:p-6">
          <h2 className="text-xl font-semibold">正文与 SEO</h2>
          <TextAreaField
            label="正文"
            helper="支持 Markdown：## 标题、普通段落、列表。"
            className="min-h-72 font-mono"
            value={state.body}
            onChange={(event) => update("body", event.target.value)}
          />
          <TextField
            label="SEO 标题"
            required
            value={state.seoTitle}
            onChange={(event) => update("seoTitle", event.target.value)}
          />
          <TextAreaField
            label="Meta Description"
            required
            value={state.seoDescription}
            onChange={(event) => update("seoDescription", event.target.value)}
          />
        </Card>

        <div className="border-border bg-background/90 sticky bottom-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 shadow-lg backdrop-blur-xl">
          <p
            className={`text-sm ${message.includes("失败") || message.includes("检查") ? "text-brand-red" : "text-muted"}`}
          >
            {message}
          </p>
          <Button onClick={save} disabled={saving}>
            {saving ? <LoaderCircle className="animate-spin" size={16} /> : <Save size={16} />}
            {saving ? "保存中" : state.status === "published" ? "保存并发布" : "保存草稿"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function RevisionPanel({ type, id }: { type: EditorType; id: string }) {
  const [revisions, setRevisions] = useState<
    Array<{ id: string; revision_number: number; created_at: string }>
  >([]);
  const [message, setMessage] = useState("");

  async function load() {
    const resourceType = type === "journey" ? "journeys" : "blog_posts";
    const response = await fetch(`/api/admin/cms/revisions?type=${resourceType}&id=${id}`);
    const result = (await response.json()) as { revisions?: typeof revisions; error?: string };
    if (!response.ok) {
      setMessage(result.error ?? "历史版本加载失败。");
      return;
    }
    setRevisions(result.revisions ?? []);
    setMessage(result.revisions?.length ? "" : "还没有可恢复的历史版本。");
  }

  async function restore(revisionId: string) {
    if (!window.confirm("确认恢复此历史版本？当前版本会自动保存为新的修订快照。")) return;
    const response = await fetch("/api/admin/cms/revisions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ revisionId, type: type === "journey" ? "journeys" : "blog_posts" }),
    });
    if (!response.ok) {
      setMessage("恢复失败，请重试。");
      return;
    }
    window.location.reload();
  }

  return (
    <Card className="grid gap-4 p-5 md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">历史版本</h2>
          <p className="text-muted mt-1 text-sm">每次覆盖保存前自动保留一份快照。</p>
        </div>
        <Button type="button" variant="secondary" size="sm" onClick={load}>
          <History size={15} /> 查看版本
        </Button>
      </div>
      {message ? <p className="text-muted text-sm">{message}</p> : null}
      {revisions.length ? (
        <div className="grid gap-2">
          {revisions.map((revision) => (
            <div
              key={revision.id}
              className="border-border flex items-center justify-between gap-3 border-t pt-3"
            >
              <p className="text-sm">
                版本 {revision.revision_number} ·{" "}
                {new Date(revision.created_at).toLocaleString("zh-CN")}
              </p>
              <Button type="button" variant="ghost" size="sm" onClick={() => restore(revision.id)}>
                恢复
              </Button>
            </div>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

function MediaSection({
  type,
  state,
  update,
}: {
  type: EditorType;
  state: EditorState;
  update: <K extends keyof EditorState>(key: K, value: EditorState[K]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [altText, setAltText] = useState("");
  const [error, setError] = useState("");

  async function upload(file: File, asHero: boolean) {
    setUploading(true);
    setError("");
    try {
      const compressed = await compressImage(file);
      const formData = new FormData();
      formData.set("file", compressed.file);
      formData.set("altText", altText);
      formData.set("category", type === "journey" ? "journeys" : "blog");
      formData.set("width", String(compressed.width));
      formData.set("height", String(compressed.height));
      const response = await fetch("/api/admin/media", { method: "POST", body: formData });
      const result = (await response.json()) as { error?: string; media?: UploadedMedia };
      if (!response.ok || !result.media) throw new Error(result.error || "上传失败。 ");
      if (asHero) update("heroImage", result.media);
      else update("gallery", [...state.gallery, result.media]);
      setAltText("");
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "上传失败。 ");
    } finally {
      setUploading(false);
    }
  }

  return (
    <Card className="grid gap-5 p-5 md:p-6">
      <div>
        <h2 className="text-xl font-semibold">图片</h2>
        <p className="text-muted mt-1 text-sm">上传时自动压缩为 WebP，最长边 1800px。</p>
      </div>
      <TextField
        label="图片 Alt 描述"
        helper="先填写画面内容，再选择图片。"
        value={altText}
        onChange={(event) => setAltText(event.target.value)}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <UploadButton
          label="上传封面图"
          disabled={uploading || altText.length < 3}
          onFile={(file) => upload(file, true)}
        />
        <UploadButton
          label="添加内容图片"
          disabled={uploading || altText.length < 3}
          onFile={(file) => upload(file, false)}
        />
      </div>
      {error ? (
        <p role="alert" className="text-brand-red text-sm">
          {error}
        </p>
      ) : null}
      {state.heroImage ? (
        <div>
          <p className="mb-2 text-sm font-semibold">封面图</p>
          <OptimizedImage
            {...state.heroImage}
            width={720}
            height={480}
            frameClassName="aspect-[3/2] rounded-2xl"
            className="h-full w-full"
          />
        </div>
      ) : null}
      {state.gallery.length ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {state.gallery.map((image, index) => (
            <div key={`${image.src}-${index}`} className="relative">
              <OptimizedImage
                {...image}
                width={480}
                height={320}
                frameClassName="aspect-[3/2] rounded-xl"
                className="h-full w-full"
              />
              <button
                type="button"
                aria-label="删除图片"
                onClick={() =>
                  update(
                    "gallery",
                    state.gallery.filter((_, imageIndex) => imageIndex !== index),
                  )
                }
                className="absolute top-2 right-2 grid size-9 place-items-center rounded-full bg-black/70 text-white"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

function UploadButton({
  label,
  disabled,
  onFile,
}: {
  label: string;
  disabled: boolean;
  onFile: (file: File) => void;
}) {
  return (
    <label
      className={`border-border flex min-h-24 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed text-sm font-semibold ${disabled ? "pointer-events-none opacity-45" : "hover:bg-foreground/5"}`}
    >
      <ImagePlus size={18} />
      {label}
      <input
        className="sr-only"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        disabled={disabled}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onFile(file);
          event.target.value = "";
        }}
      />
    </label>
  );
}

function JourneyFields({
  state,
  update,
}: {
  state: EditorState;
  update: <K extends keyof EditorState>(key: K, value: EditorState[K]) => void;
}) {
  return (
    <Card className="grid gap-5 p-5 md:p-6">
      <h2 className="text-xl font-semibold">行程信息</h2>
      <TextField
        label="路线"
        value={state.route}
        onChange={(e) => update("route", e.target.value)}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="天数"
          value={state.durationLabel}
          onChange={(e) => update("durationLabel", e.target.value)}
        />
        <TextField
          label="价格说明"
          value={state.price}
          onChange={(e) => update("price", e.target.value)}
        />
      </div>
      <TextField
        label="适合人群"
        value={state.bestFor}
        onChange={(e) => update("bestFor", e.target.value)}
      />
      <TextField
        label="旅行风格"
        helper="用英文逗号分隔"
        value={state.styles}
        onChange={(e) => update("styles", e.target.value)}
      />
      <TextField
        label="目的地"
        helper="用英文逗号分隔"
        value={state.destinations}
        onChange={(e) => update("destinations", e.target.value)}
      />
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">每日行程</h3>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              update("days", [
                ...state.days,
                { day: `Day ${state.days.length + 1}`, city: "", title: "", description: "" },
              ])
            }
          >
            <Plus size={15} />
            新增一天
          </Button>
        </div>
        {state.days.map((day, index) => (
          <div key={index} className="border-border grid gap-3 rounded-2xl border p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <TextField
                label="天数"
                value={day.day}
                onChange={(e) => updateDay(update, state, index, "day", e.target.value)}
              />
              <TextField
                label="城市"
                value={day.city}
                onChange={(e) => updateDay(update, state, index, "city", e.target.value)}
              />
              <TextField
                label="标题"
                value={day.title}
                onChange={(e) => updateDay(update, state, index, "title", e.target.value)}
              />
            </div>
            <TextAreaField
              label="当天描述"
              value={day.description}
              onChange={(e) => updateDay(update, state, index, "description", e.target.value)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

function BlogFields({
  state,
  update,
}: {
  state: EditorState;
  update: <K extends keyof EditorState>(key: K, value: EditorState[K]) => void;
}) {
  return (
    <Card className="grid gap-5 p-5 md:p-6">
      <h2 className="text-xl font-semibold">博客信息</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="分类"
          value={state.category}
          onChange={(e) => update("category", e.target.value)}
        />
        <TextField
          label="阅读时间"
          value={state.readingTime}
          onChange={(e) => update("readingTime", e.target.value)}
        />
      </div>
      <TextField
        label="作者"
        value={state.author}
        onChange={(e) => update("author", e.target.value)}
      />
      <TextField
        label="标签"
        helper="用英文逗号分隔"
        value={state.tags}
        onChange={(e) => update("tags", e.target.value)}
      />
    </Card>
  );
}

function updateDay(
  update: <K extends keyof EditorState>(key: K, value: EditorState[K]) => void,
  state: EditorState,
  index: number,
  key: keyof EditorState["days"][number],
  value: string,
) {
  update(
    "days",
    state.days.map((day, dayIndex) => (dayIndex === index ? { ...day, [key]: value } : day)),
  );
}

function toEditorState(type: EditorType, item: CmsJourney | CmsBlogPost): EditorState {
  const content = item.content ?? {};
  return {
    ...emptyState,
    id: item.id,
    updatedAt: item.updated_at,
    title: item.title,
    slug: item.slug,
    subtitle: item.subtitle,
    summary: item.summary,
    status: item.status,
    heroImage: item.hero_image ? mediaToUploaded(item.hero_image) : null,
    seoTitle: item.seo_title,
    seoDescription: item.seo_description,
    body: content.body ?? "",
    gallery: (content.gallery ?? []).map((image) => ({ id: crypto.randomUUID(), ...image })),
    route: type === "journey" ? (item as CmsJourney).route : "",
    durationLabel: type === "journey" ? (item as CmsJourney).duration_label : "",
    price: type === "journey" ? (item as CmsJourney).price : "Price on request",
    bestFor: type === "journey" ? (item as CmsJourney).best_for : "",
    styles: type === "journey" ? ((item as CmsJourney).content.styles ?? []).join(", ") : "",
    destinations:
      type === "journey" ? ((item as CmsJourney).content.destinations ?? []).join(", ") : "",
    days: type === "journey" ? ((item as CmsJourney).content.days ?? []) : [],
    category: type === "blog" ? (item as CmsBlogPost).category : "Travel Guides",
    author: type === "blog" ? (item as CmsBlogPost).author : "China Prime DMC Editorial Team",
    tags: type === "blog" ? ((item as CmsBlogPost).content.tags ?? []).join(", ") : "",
    readingTime:
      type === "blog" ? ((item as CmsBlogPost).content.readingTime ?? "5 min read") : "5 min read",
  };
}
function toPayload(type: EditorType, state: EditorState) {
  const common = {
    type,
    id: state.id,
    updatedAt: state.updatedAt,
    title: state.title,
    slug: state.slug,
    subtitle: state.subtitle,
    summary: state.summary,
    status: state.status,
    heroImageId: state.heroImage?.id ?? null,
    seoTitle: state.seoTitle,
    seoDescription: state.seoDescription,
    body: state.body,
    gallery: state.gallery.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: image.width,
      height: image.height,
      objectPosition: image.objectPosition,
    })),
  };
  return type === "journey"
    ? {
        ...common,
        route: state.route,
        durationLabel: state.durationLabel,
        price: state.price,
        bestFor: state.bestFor,
        styles: splitList(state.styles),
        destinations: splitList(state.destinations),
        days: state.days,
      }
    : {
        ...common,
        category: state.category,
        author: state.author,
        tags: splitList(state.tags),
        readingTime: state.readingTime,
      };
}
function fromEditorState(type: EditorType, state: EditorState): CmsJourney | CmsBlogPost {
  const base = {
    id: state.id!,
    title: state.title,
    slug: state.slug,
    subtitle: state.subtitle,
    summary: state.summary,
    status: state.status,
    seo_title: state.seoTitle,
    seo_description: state.seoDescription,
    sort_order: 0,
    published_at: state.status === "published" ? new Date().toISOString() : null,
    updated_at: new Date().toISOString(),
    hero_image: state.heroImage
      ? {
          id: state.heroImage.id,
          file_name: "",
          url: String(state.heroImage.src),
          storage_path: "",
          mime_type: "image/webp",
          size_bytes: 0,
          width: state.heroImage.width ?? null,
          height: state.heroImage.height ?? null,
          alt_text: state.heroImage.alt,
          object_position: state.heroImage.objectPosition ?? "50% 50%",
        }
      : null,
  };
  return type === "journey"
    ? {
        ...base,
        route: state.route,
        duration_label: state.durationLabel,
        price: state.price,
        best_for: state.bestFor,
        content: {
          body: state.body,
          styles: splitList(state.styles),
          destinations: splitList(state.destinations),
          days: state.days,
          gallery: state.gallery,
        },
      }
    : {
        ...base,
        category: state.category,
        author: state.author,
        content: {
          body: state.body,
          tags: splitList(state.tags),
          readingTime: state.readingTime,
          gallery: state.gallery,
        },
      };
}
function mediaToUploaded(media: NonNullable<CmsJourney["hero_image"]>): UploadedMedia {
  return {
    id: media.id,
    src: media.url,
    alt: media.alt_text,
    width: media.width ?? undefined,
    height: media.height ?? undefined,
    objectPosition: media.object_position,
  };
}
function splitList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
async function compressImage(file: File) {
  const bitmap = await createImageBitmap(file);
  const max = 1800;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")?.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(
      (value) => (value ? resolve(value) : reject(new Error("图片压缩失败。"))),
      "image/webp",
      0.82,
    ),
  );
  return {
    file: new File([blob], file.name.replace(/\.[^.]+$/, ".webp"), { type: "image/webp" }),
    width,
    height,
  };
}
