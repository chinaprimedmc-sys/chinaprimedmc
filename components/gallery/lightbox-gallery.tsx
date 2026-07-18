"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { iconButtonStyles } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

export function LightboxGallery({ images }: { images: MediaAsset[] }) {
  const [selected, setSelected] = useState<MediaAsset | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className="text-left"
            onClick={() => setSelected(image)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={image.width ?? 900}
              height={image.height ?? 700}
              sizes="(min-width:1024px) 33vw, 50vw"
              frameClassName="aspect-[4/3] rounded-[1.25rem]"
              className="h-full w-full transition hover:scale-[1.035]"
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
