import { Copy, Download, ImagePlus, Search, UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OptimizedImage } from "@/components/media/optimized-image";
import {
  AdminPageHeader,
  AdminPanel,
  QuickNote,
  StatusBadge,
} from "@/features/admin/admin-components";
import { mediaAssets } from "@/features/admin/admin-data";

export default function AdminMediaPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="媒体资源"
        title="把图片当作品牌资产管理。"
        description="集中管理图片上传、压缩、Alt 文本、分类、搜索和链接复制，保证前台视觉质量与性能一致。"
        primaryLabel="上传图片"
      />

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="grid gap-6">
          <AdminPanel
            title="拖拽上传"
            description="未来接入对象存储、自动压缩、AVIF/WebP 转换和 CDN 缓存。"
          >
            <div className="border-foreground/20 bg-background/70 grid min-h-72 place-items-center rounded-[1.75rem] border border-dashed p-8 text-center">
              <div>
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-white shadow-sm">
                  <UploadCloud size={23} aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-[-0.025em]">
                  拖入图片或选择文件
                </h2>
                <p className="text-muted mt-2 text-sm leading-6">
                  建议上传原始高清图，系统自动生成响应式尺寸与模糊占位。
                </p>
                <Button className="mt-5 gap-2" variant="secondary">
                  <ImagePlus size={16} aria-hidden="true" />
                  选择图片
                </Button>
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="媒体规范" description="运营上传前需要完成这几项检查。">
            <div className="grid gap-3">
              <QuickNote>图片必须有准确 Alt 文本，不能只写“风景图”或“图片”。</QuickNote>
              <QuickNote>Hero 图优先使用横向构图，卡片图优先保留明确视觉主体。</QuickNote>
              <QuickNote>禁止上传水印、低分辨率、过度 HDR、明显 AI 痕迹图片。</QuickNote>
            </div>
          </AdminPanel>
        </div>

        <AdminPanel
          title="资源库"
          description="按用途、分类、尺寸和 Alt 文本检索。"
          action={
            <div className="relative w-full min-w-64 sm:w-72">
              <Search
                className="text-muted absolute top-1/2 left-3 -translate-y-1/2"
                size={16}
                aria-hidden="true"
              />
              <Input className="pl-9" placeholder="搜索图片、Alt、分类" />
            </div>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {mediaAssets.map((asset) => (
              <article
                key={asset.name}
                className="border-border overflow-hidden rounded-[1.75rem] border bg-white shadow-sm"
              >
                <OptimizedImage
                  src={asset.image.src}
                  alt={asset.image.alt}
                  width={520}
                  height={360}
                  sizes="(min-width: 1280px) 280px, (min-width: 768px) 40vw, 100vw"
                  objectPosition={asset.image.objectPosition}
                  frameClassName="aspect-[4/3] w-full"
                  className="h-full w-full"
                />
                <div className="grid gap-3 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-semibold">{asset.name}</h3>
                      <p className="text-muted mt-1 text-xs">
                        {asset.type} · {asset.size}
                      </p>
                    </div>
                    <StatusBadge status="已优化" />
                  </div>
                  <p className="text-muted line-clamp-2 text-xs leading-5">{asset.alt}</p>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Copy size={14} aria-hidden="true" />
                      复制链接
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Download size={14} aria-hidden="true" />
                      下载
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AdminPanel>
      </section>
    </>
  );
}
