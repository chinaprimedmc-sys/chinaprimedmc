"use client";

import { CheckCircle2, Loader2, Plus, Save } from "lucide-react";
import { useMemo, useState } from "react";

import { TextAreaField, TextField } from "@/components/forms/form-field";
import { SelectField } from "@/components/forms/select-field";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AdminPanel, QuickNote, StatusBadge } from "@/features/admin/admin-components";
import type { CmsContentType, CmsRecord } from "@/types/cms";
import type { CmsDestinationRecord, CmsExperienceRecord, CmsJourneyRecord } from "@/types/cms";

type CmsEditorProps = {
  type: CmsContentType;
  title: string;
  description: string;
  initialItems: CmsRecord[];
};

type SaveState = {
  status: "idle" | "saving" | "success" | "error";
  message: string;
  publicPath?: string;
};

const publicPathByType = {
  destinations: "destination",
  experiences: "experience",
  journeys: "journey",
} satisfies Record<CmsContentType, string>;

export function CmsEditor({ description, initialItems, title, type }: CmsEditorProps) {
  const [items, setItems] = useState(initialItems);
  const [selectedSlug, setSelectedSlug] = useState(initialItems[0]?.slug ?? "new");
  const [saveState, setSaveState] = useState<SaveState>({ status: "idle", message: "" });
  const selected = useMemo(
    () => items.find((item) => item.slug === selectedSlug) ?? createBlankRecord(type),
    [items, selectedSlug, type],
  );

  async function save(formData: FormData, state: "draft" | "published") {
    setSaveState({ status: "saving", message: "正在保存..." });
    const payload = formDataToPayload(formData, type, state);

    try {
      const response = await fetch(`/api/admin/cms/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as
        { ok: true; item: CmsRecord; storage: string } | { ok: false; message: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.ok ? "保存失败" : result.message);
      }

      setItems((current) => {
        const existingIndex = current.findIndex((item) => item.slug === result.item.slug);
        if (existingIndex === -1) return [...current, result.item];
        return current.map((item, index) => (index === existingIndex ? result.item : item));
      });
      setSelectedSlug(result.item.slug);
      setSaveState({
        status: "success",
        message:
          result.storage === "kv"
            ? "已保存并发布到线上 CMS。"
            : "已保存到本地 CMS 文件。部署到 Vercel 前请配置 KV 以支持线上持久化。",
        publicPath: `/${publicPathByType[type]}/${result.item.slug}`,
      });
    } catch (error) {
      setSaveState({
        status: "error",
        message: error instanceof Error ? error.message : "保存失败，请检查 CMS 存储配置。",
      });
    }
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <AdminPanel title={title} description={description}>
        <div className="mb-4 flex flex-wrap gap-2">
          <Button
            type="button"
            variant="secondary"
            className="gap-2"
            onClick={() => {
              setSelectedSlug("new");
              setSaveState({ status: "idle", message: "" });
            }}
          >
            <Plus size={16} aria-hidden="true" />
            新增内容
          </Button>
        </div>
        <div className="grid gap-3">
          {items.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => {
                setSelectedSlug(item.slug);
                setSaveState({ status: "idle", message: "" });
              }}
              className="border-border bg-background/72 hover:bg-foreground/5 grid gap-2 rounded-[1.25rem] border p-4 text-left transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{displayTitle(item)}</p>
                  <p className="text-muted mt-1 text-xs">
                    /{publicPathByType[type]}/{item.slug}
                  </p>
                </div>
                <StatusBadge status={item.visibility.state === "published" ? "已发布" : "草稿"} />
              </div>
              <p className="text-muted line-clamp-2 text-sm leading-6">{item.summary}</p>
            </button>
          ))}
        </div>
      </AdminPanel>

      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          void save(new FormData(event.currentTarget), "published");
        }}
      >
        <Card className="grid gap-4 p-5">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.025em]">编辑与发布</h2>
            <p className="text-muted mt-1 text-sm leading-6">
              保存后前台列表页与详情页会读取同一份 CMS 数据。
            </p>
          </div>

          <BaseFields item={selected} type={type} />
          <TypeSpecificFields item={selected} type={type} />

          {saveState.message ? (
            <QuickNote>
              <span
                className={
                  saveState.status === "error"
                    ? "font-semibold text-red-700"
                    : "font-semibold text-emerald-700"
                }
              >
                {saveState.status === "success" ? (
                  <CheckCircle2 className="mr-2 inline" size={15} />
                ) : null}
                {saveState.message}
              </span>
              {saveState.publicPath ? (
                <>
                  <br />
                  前台路径：<a href={saveState.publicPath}>{saveState.publicPath}</a>
                </>
              ) : null}
            </QuickNote>
          ) : null}

          <div className="sticky bottom-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/70 bg-white/76 p-2 pl-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl">
            <p className="text-muted text-sm">保存草稿不会进入精选位；发布后前台立即读取。</p>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="secondary"
                disabled={saveState.status === "saving"}
                onClick={(event) => {
                  const form = event.currentTarget.form;
                  if (form) void save(new FormData(form), "draft");
                }}
              >
                保存草稿
              </Button>
              <Button type="submit" className="gap-2" disabled={saveState.status === "saving"}>
                {saveState.status === "saving" ? (
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                ) : (
                  <Save size={16} aria-hidden="true" />
                )}
                发布到前台
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </section>
  );
}

function BaseFields({ item, type }: { item: CmsRecord; type: CmsContentType }) {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="标题" name="title" defaultValue={displayTitle(item)} required />
        <TextField label="Slug" name="slug" defaultValue={item.slug === "new" ? "" : item.slug} />
      </div>
      {type === "destinations" ? (
        <TextField
          label="目的地名称"
          name="name"
          defaultValue={"name" in item ? item.name : item.title}
        />
      ) : null}
      <TextAreaField label="简介" name="summary" defaultValue={item.summary} required />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="图片 URL" name="imageSrc" defaultValue={item.image.src} required />
        <TextField label="图片 Alt" name="imageAlt" defaultValue={item.image.alt} required />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <SelectField
          label="发布状态"
          value={item.visibility.state}
          options={[
            { label: "已发布", value: "published" },
            { label: "草稿", value: "draft" },
          ]}
          onValueChange={() => undefined}
        />
        <input type="hidden" name="state" value={item.visibility.state} />
        <TextField
          label="Ranking Score"
          name="rankingScore"
          defaultValue={String(item.visibility.rankingScore)}
        />
        <TextField
          label="Manual Pin"
          name="manualPin"
          defaultValue={String(item.visibility.manualPin ?? "")}
        />
      </div>
      <label className="border-border flex items-center gap-3 rounded-2xl border bg-white p-4 text-sm font-semibold">
        <input name="featured" type="checkbox" defaultChecked={item.visibility.featured} />
        首页精选 / Featured
      </label>
      <TextField
        label="SEO 标题"
        name="seoTitle"
        defaultValue={item.seoTitle ?? displayTitle(item)}
      />
      <TextAreaField
        label="Meta Description"
        name="seoDescription"
        defaultValue={item.seoDescription ?? item.summary}
      />
    </div>
  );
}

function TypeSpecificFields({ item, type }: { item: CmsRecord; type: CmsContentType }) {
  if (type === "destinations") {
    const destination =
      item.type === "destination"
        ? item
        : (createBlankRecord("destinations") as CmsDestinationRecord);
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="区域 Region" name="region" defaultValue={destination.region} />
        <TextField label="类型" name="destinationType" defaultValue={destination.destinationType} />
        <TextAreaField
          label="关联 Experience Slugs"
          name="experienceSlugs"
          defaultValue={destination.experienceSlugs.join("\n")}
        />
        <TextAreaField
          label="关联 Journey Slugs"
          name="journeySlugs"
          defaultValue={destination.journeySlugs.join("\n")}
        />
      </div>
    );
  }

  if (type === "experiences") {
    const experience =
      item.type === "experience" ? item : (createBlankRecord("experiences") as CmsExperienceRecord);
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="分类" name="category" defaultValue={experience.category} />
        <TextField label="时长" name="duration" defaultValue={experience.duration} />
        <TextAreaField
          label="适合人群"
          name="suitableFor"
          defaultValue={experience.suitableFor.join("\n")}
        />
        <TextAreaField
          label="你会做什么"
          name="whatYouWillDo"
          defaultValue={experience.whatYouWillDo.join("\n")}
        />
        <TextAreaField
          label="关联 Destination Slugs"
          name="destinationSlugs"
          defaultValue={experience.destinationSlugs.join("\n")}
        />
        <TextAreaField
          label="关联 Journey Slugs"
          name="journeySlugs"
          defaultValue={experience.journeySlugs.join("\n")}
        />
      </div>
    );
  }

  const journey =
    item.type === "journey" ? item : (createBlankRecord("journeys") as CmsJourneyRecord);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <TextField label="分类" name="category" defaultValue={journey.category} />
      <TextField label="天数" name="duration" defaultValue={journey.duration} />
      <TextField label="路线" name="route" defaultValue={journey.route} />
      <TextAreaField label="旅行风格" name="styles" defaultValue={journey.styles.join("\n")} />
      <TextAreaField
        label="关联 Destination Slugs"
        name="destinationSlugs"
        defaultValue={journey.destinationSlugs.join("\n")}
      />
      <TextAreaField
        label="包含 Experience Slugs"
        name="experienceSlugs"
        defaultValue={journey.experienceSlugs.join("\n")}
      />
    </div>
  );
}

function formDataToPayload(formData: FormData, type: CmsContentType, state: "draft" | "published") {
  const payload: Record<string, unknown> = { state };

  formData.forEach((value, key) => {
    payload[key] = value;
  });

  payload.featured = formData.get("featured") === "on";
  payload.state = state;

  if (!payload.slug && typeof payload.title === "string") {
    payload.slug = payload.title;
  }

  if (type !== "destinations") {
    payload.name = payload.title;
  }

  return payload;
}

function displayTitle(item: CmsRecord) {
  return item.type === "destination" ? item.name : item.title;
}

function createBlankRecord(type: CmsContentType): CmsRecord {
  const base = {
    slug: "new",
    title: "",
    summary: "",
    image: {
      src: "/home/beijing-forbidden-city.jpg",
      alt: "China Prime DMC travel image",
      width: 1920,
      height: 1200,
      objectPosition: "50% 50%",
    },
    visibility: { state: "draft" as const, featured: false, rankingScore: 50 },
    seoTitle: "",
    seoDescription: "",
    updatedAt: new Date().toISOString(),
  };

  if (type === "destinations") {
    return {
      ...base,
      type: "destination",
      name: "",
      region: "China",
      destinationType: "City",
      experienceSlugs: [],
      journeySlugs: [],
    };
  }

  if (type === "experiences") {
    return {
      ...base,
      type: "experience",
      category: "Culture",
      duration: "Half day",
      suitableFor: [],
      whatYouWillDo: [],
      destinationSlugs: [],
      journeySlugs: [],
    };
  }

  return {
    ...base,
    type: "journey",
    category: "Classic",
    duration: "Tailor-made",
    route: "China",
    styles: [],
    destinationSlugs: [],
    experienceSlugs: [],
  };
}
