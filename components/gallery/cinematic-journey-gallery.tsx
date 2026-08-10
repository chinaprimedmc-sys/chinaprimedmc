"use client";

import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

type CinematicJourneyGalleryProps = {
  images: MediaAsset[];
  title?: string;
};

export function CinematicJourneyGallery({
  images,
  title = "The journey, seen more closely.",
}: CinematicJourneyGalleryProps) {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: images.length > 1,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const syncSelection = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", syncSelection);
    emblaApi.on("reInit", syncSelection);

    return () => {
      emblaApi.off("select", syncSelection);
      emblaApi.off("reInit", syncSelection);
    };
  }, [emblaApi, syncSelection]);

  useEffect(() => {
    if (
      !emblaApi ||
      manualPaused ||
      hoverPaused ||
      fullscreenOpen ||
      shouldReduceMotion ||
      images.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(() => emblaApi.scrollNext(), 6500);
    return () => window.clearInterval(interval);
  }, [emblaApi, fullscreenOpen, hoverPaused, images.length, manualPaused, shouldReduceMotion]);

  useEffect(() => {
    if (!fullscreenOpen || !emblaApi) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (event.key === "ArrowRight") emblaApi?.scrollNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, fullscreenOpen]);

  if (!images.length) return null;

  const activeImage = images[selectedIndex] ?? images[0];
  const progress = `${((selectedIndex + 1) / images.length) * 100}%`;

  function selectImage(index: number) {
    setManualPaused(true);
    if (index === selectedIndex) {
      setFullscreenOpen(true);
      return;
    }
    emblaApi?.scrollTo(index);
  }

  function move(direction: -1 | 1) {
    setManualPaused(true);
    if (direction === -1) emblaApi?.scrollPrev();
    else emblaApi?.scrollNext();
  }

  function finishFullscreenSwipe(clientX: number) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null || Math.abs(clientX - startX) < 48) return;
    move(clientX < startX ? 1 : -1);
  }

  return (
    <Dialog.Root open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
      <section
        id="gallery"
        className="overflow-hidden bg-[#101410] py-14 text-white md:py-20"
        onPointerEnter={() => setHoverPaused(true)}
        onPointerLeave={() => setHoverPaused(false)}
      >
        <div className="mx-auto w-full max-w-[96rem] px-5 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-6 border-b border-white/14 pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/52 uppercase">
                Journey gallery
              </p>
              <h2 className="mt-3 max-w-4xl font-serif text-[clamp(2.5rem,5vw,5.25rem)] leading-[0.94] font-medium">
                {title}
              </h2>
            </div>
            <div className="max-w-md md:text-right">
              <p className="text-sm leading-6 text-white/58">
                Move through every photograph. Select a side image to bring it forward, then select
                the centre image to view it full screen.
              </p>
              <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-white/42 uppercase">
                Drag or swipe · {images.length} photographs
              </p>
            </div>
          </header>
        </div>

        <div className="mt-9 md:mt-12" ref={emblaRef}>
          <div className="flex touch-pan-y items-center gap-3 md:gap-6">
            {images.map((image, index) => {
              const active = index === selectedIndex;
              const directDistance = Math.abs(index - selectedIndex);
              const loopDistance = Math.min(directDistance, images.length - directDistance);
              const shouldLoadImage = loopDistance <= 2;
              return (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => selectImage(index)}
                  aria-label={
                    active
                      ? `Open image ${index + 1} full screen: ${image.alt}`
                      : `Show image ${index + 1}: ${image.alt}`
                  }
                  className={cn(
                    "relative min-w-0 flex-[0_0_90%] overflow-hidden rounded-lg border bg-black/30 text-left transition-[opacity,transform,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:flex-[0_0_82%] lg:flex-[0_0_72%]",
                    active
                      ? "scale-100 border-white/28 opacity-100"
                      : "scale-[0.9] border-white/8 opacity-40 hover:opacity-70",
                  )}
                >
                  {shouldLoadImage ? (
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 72vw, (min-width: 640px) 82vw, 90vw"
                      objectPosition={image.objectPosition}
                      loading={active ? "eager" : "lazy"}
                      showSkeleton
                      frameClassName="h-[54svh] min-h-[24rem] bg-[#090b09] md:h-[68svh] md:min-h-[34rem]"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="grid h-[54svh] min-h-[24rem] place-items-center bg-[#090b09] text-xs font-semibold tracking-[0.16em] text-white/18 md:h-[68svh] md:min-h-[34rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  {active ? (
                    <span className="absolute right-4 bottom-4 grid size-11 place-items-center rounded-full border border-white/24 bg-black/38 text-white backdrop-blur-xl md:right-6 md:bottom-6">
                      <Maximize2 size={18} aria-hidden="true" />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-7 grid w-full max-w-[96rem] gap-5 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <p className="min-w-20 text-xs font-semibold tracking-[0.16em] text-white/52 uppercase">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>
              <div className="h-px flex-1 overflow-hidden bg-white/14">
                <div
                  className="h-full bg-white/72 transition-[width] duration-500"
                  style={{ width: progress }}
                />
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/68">{activeImage.alt}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="grid size-11 place-items-center rounded-full border border-white/18 bg-white/6 text-white transition hover:border-white/36 hover:bg-white/12"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            {!shouldReduceMotion ? (
              <button
                type="button"
                onClick={() => setManualPaused((current) => !current)}
                className="grid size-11 place-items-center rounded-full border border-white/18 bg-white/6 text-white transition hover:border-white/36 hover:bg-white/12"
                aria-label={manualPaused ? "Resume gallery autoplay" : "Pause gallery autoplay"}
              >
                {manualPaused ? (
                  <Play size={16} aria-hidden="true" />
                ) : (
                  <Pause size={16} aria-hidden="true" />
                )}
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => move(1)}
              className="grid size-11 place-items-center rounded-full border border-white/18 bg-white/6 text-white transition hover:border-white/36 hover:bg-white/12"
              aria-label="Next image"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md" />
        <Dialog.Content
          className="fixed inset-0 z-[101] grid grid-rows-[auto_1fr_auto] bg-[#060806] p-4 text-white outline-none md:p-6"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const touch = event.changedTouches[0];
            if (touch) finishFullscreenSwipe(touch.clientX);
          }}
        >
          <Dialog.Title className="sr-only">Journey photograph {selectedIndex + 1}</Dialog.Title>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/52 uppercase">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <Dialog.Close
              className="grid size-11 place-items-center rounded-full border border-white/18 bg-white/8 transition hover:bg-white/14"
              aria-label="Close full screen gallery"
            >
              <X size={19} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="relative grid min-h-0 place-items-center py-4 md:py-6">
            <OptimizedImage
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              objectPosition={activeImage.objectPosition}
              priority
              showSkeleton={false}
              frameClassName="absolute inset-0 h-full bg-transparent"
              className="h-full w-full object-contain"
            />
            <button
              type="button"
              onClick={() => move(-1)}
              className="absolute left-0 z-20 grid size-11 place-items-center rounded-full border border-white/18 bg-black/42 transition hover:bg-black/68 md:left-2"
              aria-label="Previous full screen image"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="absolute right-0 z-20 grid size-11 place-items-center rounded-full border border-white/18 bg-black/42 transition hover:bg-black/68 md:right-2"
              aria-label="Next full screen image"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="border-t border-white/12 pt-4">
            <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-white/66">
              {activeImage.alt}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
