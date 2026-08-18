"use client";

import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { trackEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

type CinematicJourneyGalleryProps = {
  images: MediaAsset[];
  title?: string;
  journeySlug?: string;
};

export function CinematicJourneyGallery({
  images,
  title = "The journey, seen more closely.",
  journeySlug,
}: CinematicJourneyGalleryProps) {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: false,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [galleryNearViewport, setGalleryNearViewport] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const pauseAfterInteraction = useCallback(() => {
    setInteractionPaused(true);
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      setInteractionPaused(false);
      resumeTimerRef.current = null;
    }, 4000);
  }, []);

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
      interactionPaused ||
      fullscreenOpen ||
      !galleryVisible ||
      !autoplayAllowed ||
      shouldReduceMotion ||
      images.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [
    autoplayAllowed,
    emblaApi,
    fullscreenOpen,
    galleryVisible,
    images.length,
    interactionPaused,
    shouldReduceMotion,
  ]);

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: {
          addEventListener?: (type: "change", listener: () => void) => void;
          effectiveType?: string;
          removeEventListener?: (type: "change", listener: () => void) => void;
          saveData?: boolean;
        };
      }
    ).connection;
    const update = () => {
      const constrained =
        Boolean(connection?.saveData) ||
        connection?.effectiveType === "slow-2g" ||
        connection?.effectiveType === "2g";
      setAutoplayAllowed(!constrained);
    };

    update();
    connection?.addEventListener?.("change", update);
    return () => connection?.removeEventListener?.("change", update);
  }, []);

  useEffect(
    () => () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    },
    [],
  );

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

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setGalleryNearViewport(true);
        preloadObserver.disconnect();
      },
      { rootMargin: "700px 0px", threshold: 0 },
    );
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const isVisible = Boolean(entry?.isIntersecting);
        setGalleryVisible(isVisible);
        document.documentElement.classList.toggle("journey-gallery-in-view", isVisible);
      },
      { rootMargin: "-10% 0px -10%", threshold: 0.12 },
    );

    preloadObserver.observe(section);
    visibilityObserver.observe(section);
    return () => {
      preloadObserver.disconnect();
      visibilityObserver.disconnect();
      document.documentElement.classList.remove("journey-gallery-in-view");
    };
  }, []);

  if (!images.length) return null;

  const activeImage = images[selectedIndex] ?? images[0];
  const progress = `${((selectedIndex + 1) / images.length) * 100}%`;

  function trackGalleryAction(action: string, index: number) {
    if (!journeySlug) return;
    trackEvent("tour_gallery_interaction", {
      action,
      image: index + 1,
      journey: journeySlug.slice(0, 160),
    });
  }

  function selectImage(index: number) {
    pauseAfterInteraction();
    if (index === selectedIndex) {
      trackGalleryAction("fullscreen_open", index);
      setFullscreenOpen(true);
      return;
    }
    trackGalleryAction("select", index);
    emblaApi?.scrollTo(index);
  }

  function move(direction: -1 | 1, action = "controls") {
    pauseAfterInteraction();
    if (!emblaApi) return;
    trackGalleryAction(`${action}_${direction === -1 ? "previous" : "next"}`, selectedIndex);

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
    move(clientX < startX ? 1 : -1, "swipe");
  }

  return (
    <Dialog.Root
      open={fullscreenOpen}
      onOpenChange={(open) => {
        setFullscreenOpen(open);
        if (!open) pauseAfterInteraction();
      }}
    >
      <section
        id="gallery"
        ref={sectionRef}
        className="scroll-mt-24 overflow-hidden bg-white py-14 text-[#192421] md:py-20"
      >
        <div className="mx-auto w-full max-w-[76rem] px-5 sm:px-6 lg:px-0">
          <header className="grid gap-5 border-b border-black/10 pb-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.75rem] font-semibold text-[#687570] uppercase">
                Journey gallery
              </p>
              <h2 className="mt-3 max-w-4xl font-serif text-[1.38rem] leading-[1.08] font-medium whitespace-nowrap sm:text-[1.8rem] md:text-[2.3rem]">
                {title}
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-xs font-semibold text-black/48">{images.length} photographs</p>
            </div>
          </header>
        </div>

        <div className="mx-auto mt-6 w-full max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden" ref={emblaRef} onPointerDown={pauseAfterInteraction}>
            <div className="journey-gallery-track flex touch-pan-y items-center py-6 md:py-8">
              {images.map((image, index) => {
                const active = index === selectedIndex;
                const distance = Math.abs(index - selectedIndex);
                const shouldLoadImage = active || (galleryVisible && distance <= 1);
                const format = getImageFormat(image);
                return (
                  <div
                    key={`${image.src}-${index}`}
                    className="journey-gallery-slide grid min-w-0 flex-[0_0_100%] place-items-center px-2 sm:px-4"
                  >
                    <div
                      className={cn(
                        "journey-gallery-frame relative max-w-full",
                        format === "portrait" && "w-[min(76vw,23rem)]",
                        format === "landscape" && "w-full max-w-[51rem]",
                        format === "square" && "w-[min(86vw,32rem)]",
                      )}
                      data-active={active}
                    >
                      <button
                        type="button"
                        onClick={() => selectImage(index)}
                        aria-label={
                          active
                            ? `Open image ${index + 1} full screen: ${image.alt}`
                            : `Show image ${index + 1}: ${image.alt}`
                        }
                        data-active={active}
                        className={cn(
                          "journey-gallery-card relative z-[1] block h-auto w-full max-w-full overflow-hidden bg-white text-left transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-[#506457] focus-visible:outline-none",
                          active ? "opacity-100" : "opacity-75",
                        )}
                        style={{ aspectRatio: `${image.width ?? 3} / ${image.height ?? 2}` }}
                      >
                        {shouldLoadImage ? (
                          <OptimizedImage
                            key={`${image.src}-${galleryNearViewport ? "near" : "deferred"}-${galleryVisible ? "visible" : "hidden"}`}
                            src={image.src}
                            alt={image.alt}
                            fill
                            quality={65}
                            sizes="(min-width: 1024px) 72vw, (min-width: 640px) 82vw, 90vw"
                            objectPosition={image.objectPosition}
                            loading={galleryNearViewport ? "eager" : "lazy"}
                            fetchPriority={active && galleryVisible ? "high" : "low"}
                            showSkeleton={false}
                            frameClassName="h-full w-full bg-white"
                            className="h-full w-full object-contain"
                            style={{ objectFit: "contain" }}
                          />
                        ) : (
                          <span className="grid h-full w-full place-items-center bg-white text-xs font-semibold text-black/18">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        )}
                        {active ? (
                          <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full border border-black/10 bg-white text-[#171a16] md:right-5 md:bottom-5">
                            <Maximize2 size={18} aria-hidden="true" />
                          </span>
                        ) : null}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 grid w-full max-w-[76rem] gap-5 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-0">
          <div>
            <div className="flex items-center gap-4">
              <p className="min-w-20 text-xs font-semibold text-black/52">
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
            <p className="text-xs font-semibold text-white/52">
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
              loading="eager"
              fetchPriority="high"
              showSkeleton={false}
              frameClassName="absolute inset-0 h-full bg-transparent"
              className="h-full w-full object-contain"
              style={{ objectFit: "contain" }}
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
