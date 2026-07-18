"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { iconButtonStyles } from "@/components/ui/button-styles";
import type { MediaAsset } from "@/types/component-library";

type CarouselGalleryProps = {
  images: MediaAsset[];
};

export function CarouselGallery({ images }: CarouselGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="min-w-0 flex-[0_0_86%] sm:flex-[0_0_54%] lg:flex-[0_0_36%]"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={image.width ?? 900}
                height={image.height ?? 700}
                sizes="(min-width:1024px) 36vw, 86vw"
                frameClassName="aspect-[4/3] rounded-[1.5rem]"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          className={iconButtonStyles}
          type="button"
          aria-label="Previous image"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          className={iconButtonStyles}
          type="button"
          aria-label="Next image"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
