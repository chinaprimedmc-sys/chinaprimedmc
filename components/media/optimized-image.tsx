"use client";

import { ImageOff } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils/cn";

type OptimizedImageProps = ImageProps & {
  frameClassName?: string;
  objectPosition?: string;
  showSkeleton?: boolean;
};

export function OptimizedImage({
  className,
  frameClassName,
  alt,
  objectPosition,
  style,
  showSkeleton = true,
  fetchPriority,
  loading,
  priority,
  unoptimized,
  decoding = "async",
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const sourceKey = typeof props.src === "string" ? props.src : JSON.stringify(props.src);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageState, setImageState] = useState<{
    sourceKey: string;
    status: "loading" | "loaded" | "error";
    attempt: number;
  }>({ sourceKey, status: "loading", attempt: 0 });
  const status = imageState.sourceKey === sourceKey ? imageState.status : "loading";
  const attempt = imageState.sourceKey === sourceKey ? imageState.attempt : 0;
  const isEager = Boolean(priority || loading === "eager");

  useEffect(() => {
    let interval: number | undefined;
    let timeout: number | undefined;

    const markLoadedWhenReady = () => {
      const image = imageRef.current;
      if (!image?.complete || image.naturalWidth === 0) return false;
      setImageState({ sourceKey, status: "loaded", attempt });
      return true;
    };

    const frame = window.requestAnimationFrame(() => {
      if (markLoadedWhenReady()) return;

      // WebKit can miss a cached image's load event after a keyed remount.
      interval = window.setInterval(() => {
        if (!markLoadedWhenReady() || interval === undefined) return;
        window.clearInterval(interval);
        interval = undefined;
      }, 350);
      timeout = window.setTimeout(() => {
        if (interval !== undefined) window.clearInterval(interval);
        interval = undefined;
      }, 12_000);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (interval !== undefined) window.clearInterval(interval);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [attempt, sourceKey]);

  useEffect(() => {
    if (!isEager || status !== "loading") return;

    const timeout = window.setTimeout(
      () => {
        setImageState((current) => {
          const currentAttempt = current.sourceKey === sourceKey ? current.attempt : 0;
          if (current.sourceKey === sourceKey && current.status !== "loading") return current;
          if (currentAttempt < 1) {
            return { sourceKey, status: "loading", attempt: currentAttempt + 1 };
          }
          return { sourceKey, status: "error", attempt: currentAttempt };
        });
      },
      attempt === 0 ? 12_000 : 16_000,
    );

    return () => window.clearTimeout(timeout);
  }, [attempt, isEager, sourceKey, status]);

  return (
    <div
      className={cn("relative isolate overflow-hidden bg-[var(--bg-secondary)]", frameClassName)}
      data-image-status={status}
    >
      {showSkeleton && status === "loading" ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_18%,rgba(255,255,255,.62)_42%,rgba(255,255,255,0)_66%),linear-gradient(135deg,rgba(222,228,224,.72),rgba(241,243,241,.9))] bg-[length:220%_100%,100%_100%] motion-safe:animate-[image-loading-sheen_1.8s_ease-in-out_infinite]"
        />
      ) : null}

      {status === "error" ? (
        <span
          role="img"
          aria-label={alt || "Image unavailable"}
          className="absolute inset-0 z-20 grid place-items-center bg-[linear-gradient(145deg,rgba(239,242,240,.96),rgba(224,230,226,.92))] text-[#66736d]"
        >
          <ImageOff aria-hidden="true" className="size-5 opacity-55" strokeWidth={1.35} />
        </span>
      ) : null}

      <Image
        key={`${sourceKey}-${attempt}`}
        ref={imageRef}
        className={cn(
          "relative z-10 object-cover transition-opacity duration-500 ease-out",
          status === "loaded" ? "opacity-100" : "opacity-0",
          className,
        )}
        alt={alt}
        decoding={decoding}
        fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
        loading={loading ?? (priority ? "eager" : "lazy")}
        onLoad={(event) => {
          setImageState({ sourceKey, status: "loaded", attempt });
          onLoad?.(event);
        }}
        onError={(event) => {
          if (attempt < 1) {
            setImageState({ sourceKey, status: "loading", attempt: attempt + 1 });
            return;
          }
          setImageState({ sourceKey, status: "error", attempt });
          onError?.(event);
        }}
        style={{
          objectPosition,
          ...style,
        }}
        {...props}
        priority={priority}
        src={props.src}
        unoptimized={Boolean(unoptimized || attempt > 0)}
      />
    </div>
  );
}
