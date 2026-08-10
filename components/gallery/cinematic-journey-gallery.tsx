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
    containScroll: false,
    loop: false,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

    const interval = window.setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0, true);
    }, 6500);
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle(
          "journey-gallery-in-view",
          Boolean(entry?.isIntersecting),
        );
      },
      { rootMargin: "-10% 0px -10%", threshold: 0.12 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("journey-gallery-in-view");
    };
  }, []);

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
    if (!emblaApi) return;

    if (direction === -1) {
      if (emblaApi.canScrollPrev()) emblaApi.scrollPrev();
      else emblaApi.scrollTo(images.length - 1, true);
      return;
    }

    if (emblaApi.canScrollNext()) emblaApi.scrollNext();
    else emblaApi.scrollTo(0, true);
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
        ref={sectionRef}
        className="scroll-mt-24 overflow-hidden bg-[#f3f5f0] py-10 text-[#171a16] md:py-12"
        onPointerEnter={() => setHoverPaused(true)}
        onPointerLeave={() => setHoverPaused(false)}
      >
        <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <header className="grid gap-5 border-b border-black/10 pb-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#617064] uppercase">
                Journey gallery
              </p>
              <h2 className="mt-3 max-w-4xl font-serif text-[clamp(2.2rem,3.3vw,3.5rem)] leading-[0.98] font-medium">
                {title}
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-xs font-semibold tracking-[0.12em] text-black/42 uppercase">
                Drag or swipe · {images.length} photographs
              </p>
            </div>
          </header>
        </div>

        <div className="mx-auto mt-6 w-full max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y items-center gap-4 py-3 md:gap-6 md:py-4">
              {images.map((image, index) => {
                const active = index === selectedIndex;
                const directDistance = Math.abs(index - selectedIndex);
                const loopDistance = Math.min(directDistance, images.length - directDistance);
                const shouldLoadImage = loopDistance <= 2;
                const format = getImageFormat(image);
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
                      "relative min-w-0 flex-none overflow-hidden rounded-md border bg-[#e4e8e1] text-left transition-[opacity,transform,border-color,box-shadow] duration-700 ease-[cubic-bezier(.16,1,.3,1)] focus-visible:ring-2 focus-visible:ring-[#506457] focus-visible:outline-none",
                      format === "portrait" &&
                        "aspect-[3/4] basis-[74%] sm:basis-[19rem] md:basis-[21rem] lg:basis-[22rem]",
                      format === "landscape" &&
                        "aspect-[3/2] basis-[88%] sm:basis-[36rem] md:basis-[42rem] lg:basis-[44rem]",
                      format === "square" &&
                        "aspect-square basis-[80%] sm:basis-[24rem] md:basis-[28rem] lg:basis-[29rem]",
                      active
                        ? "scale-100 border-black/14 opacity-100 shadow-[0_24px_70px_rgba(26,36,28,0.14)]"
                        : "scale-[0.92] border-black/8 opacity-[0.42] hover:opacity-70",
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
                        frameClassName="h-full w-full bg-[#e4e8e1]"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="grid h-full w-full place-items-center bg-[#e4e8e1] text-xs font-semibold tracking-[0.16em] text-black/18">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                    {active ? (
                      <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full border border-white/72 bg-white/74 text-[#171a16] shadow-sm backdrop-blur-xl md:right-5 md:bottom-5">
                        <Maximize2 size={18} aria-hidden="true" />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[90rem] gap-5 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <p className="min-w-20 text-xs font-semibold tracking-[0.16em] text-black/46 uppercase">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>
              <div className="h-px flex-1 overflow-hidden bg-black/12">
                <div
                  className="h-full bg-[#52685a] transition-[width] duration-500"
                  style={{ width: progress }}
                />
              </div>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-black/56">{activeImage.alt}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="grid size-10 place-items-center rounded-full border border-black/12 bg-white/58 text-[#171a16] transition hover:border-black/24 hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            {!shouldReduceMotion ? (
              <button
                type="button"
                onClick={() => setManualPaused((current) => !current)}
                className="grid size-10 place-items-center rounded-full border border-black/12 bg-white/58 text-[#171a16] transition hover:border-black/24 hover:bg-white"
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
              className="grid size-10 place-items-center rounded-full border border-black/12 bg-white/58 text-[#171a16] transition hover:border-black/24 hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        html.journey-gallery-in-view .floating-cta,
        html.journey-gallery-in-view .social-contact-rail,
        html.journey-gallery-in-view .sticky-mobile-cta {
          opacity: 0 !important;
          pointer-events: none !important;
          visibility: hidden !important;
        }
      `}</style>

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

function getImageFormat(image: MediaAsset): "portrait" | "landscape" | "square" {
  if (!image.width || !image.height) return "landscape";

  const ratio = image.width / image.height;
  if (ratio < 0.9) return "portrait";
  if (ratio > 1.12) return "landscape";
  return "square";
}
