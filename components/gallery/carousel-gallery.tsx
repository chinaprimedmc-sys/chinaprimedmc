"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { iconButtonStyles } from "@/components/ui/button-styles";
import type { MediaAsset } from "@/types/component-library";

type CarouselGalleryProps = {
  images: MediaAsset[];
  orientation?: "landscape" | "portrait";
};

export function CarouselGallery({ images, orientation = "landscape" }: CarouselGalleryProps) {
  const isPortrait = orientation === "portrait";
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: isPortrait ? "center" : "start",
    duration: 42,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const syncSelectedIndex = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollProgress(emblaApi.scrollProgress());
  }, [emblaApi]);

  const portraitTransforms = useMemo(() => {
    if (!isPortrait || images.length < 2) return [];

    const snapList = emblaApi?.scrollSnapList() ?? images.map((_, index) => index / images.length);
    return images.map((_, index) => {
      const snap = snapList[index] ?? index / images.length;
      let distance = snap - scrollProgress;
      distance -= Math.round(distance);
      const depth = Math.min(Math.abs(distance) * images.length, 1);

      return {
        opacity: 1 - depth * 0.16,
        transform: `translateZ(${18 - depth * 26}px) scale(${1 - depth * 0.03})`,
      };
    });
  }, [emblaApi, images, isPortrait, scrollProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", syncSelectedIndex);
    emblaApi.on("scroll", syncSelectedIndex);
    emblaApi.on("reInit", syncSelectedIndex);
    return () => {
      emblaApi.off("select", syncSelectedIndex);
      emblaApi.off("scroll", syncSelectedIndex);
      emblaApi.off("reInit", syncSelectedIndex);
    };
  }, [emblaApi, syncSelectedIndex]);

  useEffect(() => {
    if (!emblaApi || !isPortrait || isPaused || images.length < 2) return;
    const timer = window.setInterval(() => {
      if (document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      emblaApi.scrollNext();
    }, 3000);
    return () => window.clearInterval(timer);
  }, [emblaApi, images.length, isPaused, isPortrait]);

  return (
    <div
      className={isPortrait ? "relative [perspective:1200px]" : "relative"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className={isPortrait ? "flex items-stretch gap-4" : "flex gap-4"}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
        >
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={
                isPortrait
                  ? "min-w-0 flex-[0_0_68%] transform-gpu motion-reduce:transform-none sm:flex-[0_0_29%] lg:flex-[0_0_21%]"
                  : "min-w-0 flex-[0_0_86%] sm:flex-[0_0_54%] lg:flex-[0_0_36%]"
              }
              style={
                isPortrait
                  ? {
                      opacity:
                        portraitTransforms[index]?.opacity ?? (index === selectedIndex ? 1 : 0.84),
                      transform: portraitTransforms[index]?.transform,
                    }
                  : undefined
              }
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={image.width ?? 900}
                height={image.height ?? 700}
                sizes={
                  isPortrait
                    ? "(min-width:1024px) 21vw, (min-width:640px) 29vw, 68vw"
                    : "(min-width:1024px) 36vw, 86vw"
                }
                frameClassName={
                  isPortrait ? "aspect-[3/4] rounded-[1.25rem]" : "aspect-[4/3] rounded-[1.5rem]"
                }
                className="h-full w-full object-cover"
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
