"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { iconButtonStyles } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

export function LightboxGallery({
  images,
  layout = "grid",
}: {
  images: MediaAsset[];
  layout?: "grid" | "strip";
}) {
  const [selected, setSelected] = useState<MediaAsset | null>(null);
  const isStrip = layout === "strip";
  const isFullFrameStrip = isStrip && images.every((image) => image.fit === "contain");
  const stripGridTemplate = isFullFrameStrip
    ? images
        .map((image) => {
          const width = image.width ?? 4;
          const height = image.height ?? 3;
          return `minmax(0, ${width / height}fr)`;
        })
        .join(" ")
    : undefined;

  return (
    <>
      <div
        className={cn(
          isStrip
            ? "-mx-5 flex snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
            : "grid grid-cols-2 gap-3 md:grid-cols-3",
        )}
        style={stripGridTemplate ? { gridTemplateColumns: stripGridTemplate } : undefined}
      >
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className={cn(
              "text-left",
              isStrip && "w-[82vw] max-w-[22rem] shrink-0 snap-start sm:w-auto sm:max-w-none",
            )}
            onClick={() => setSelected(image)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={image.width ?? 900}
              height={image.height ?? 700}
              sizes={
                isStrip
                  ? "(min-width:1024px) 30vw, (min-width:640px) 33vw, 82vw"
                  : "(min-width:1024px) 33vw, 50vw"
              }
              loading={isStrip ? "eager" : undefined}
              fetchPriority={isStrip && index === 0 ? "high" : undefined}
              showSkeleton={!isFullFrameStrip}
              fadeIn={!isFullFrameStrip}
              frameClassName={cn(
                isFullFrameStrip ? "w-full bg-transparent" : "aspect-[4/3]",
                image.fit === "contain" && !isFullFrameStrip && "bg-neutral-100",
                isStrip ? "rounded-lg" : "rounded-[1.25rem]",
              )}
              className={cn(
                "w-full transition duration-300 hover:scale-[1.025]",
                isFullFrameStrip ? "h-auto object-contain" : "h-full",
                !isFullFrameStrip && (image.fit === "contain" ? "object-contain" : "object-cover"),
              )}
            />
          </button>
        ))}
      </div>
      <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md" />
          <Dialog.Content className="fixed inset-4 z-[91] grid place-items-center">
            <Dialog.Title className="sr-only">Image preview</Dialog.Title>
            <Dialog.Close
              className={cn(iconButtonStyles, "absolute top-0 right-0 z-10")}
              aria-label="Close image preview"
            >
              <X size={20} aria-hidden="true" />
            </Dialog.Close>
            {selected ? (
              <OptimizedImage
                src={selected.src}
                alt={selected.alt}
                width={selected.width ?? 1600}
                height={selected.height ?? 1000}
                sizes="96vw"
                frameClassName="max-h-[88svh] w-full max-w-6xl rounded-[1.75rem]"
                className="h-full w-full object-contain"
              />
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
