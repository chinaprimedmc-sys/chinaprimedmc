"use client";

import { Heart, Plus } from "lucide-react";

import { CtaButton } from "@/components/cta";
import { useAppStore } from "@/stores/app-store";
import type { DiscoveryItem } from "@/types/discovery";

export function FavoriteButton({ item }: { item: DiscoveryItem }) {
  const isFavorite = useAppStore((state) => state.isFavorite(item.id));
  const toggleFavorite = useAppStore((state) => state.toggleFavorite);

  return (
    <button
      type="button"
      onClick={() =>
        toggleFavorite({ id: item.id, type: item.type, title: item.title, href: item.href })
      }
      className="border-border inline-flex h-10 items-center gap-2 rounded-full border bg-white/78 px-4 text-sm font-semibold shadow-sm backdrop-blur-xl transition hover:bg-white"
      aria-pressed={isFavorite}
    >
      <Heart size={16} aria-hidden="true" fill={isFavorite ? "currentColor" : "none"} />
      {isFavorite ? "Saved" : "Save"}
    </button>
  );
}

export function AddToTripButton({ item }: { item: DiscoveryItem }) {
  const addTripItem = useAppStore((state) => state.addTripItem);

  return (
    <CtaButton
      href="#my-trip"
      variant="outline"
      size="sm"
      icon={<Plus size={16} aria-hidden="true" />}
      onClick={() =>
        addTripItem({
          id: item.id,
          type: item.type,
          title: item.title,
          href: item.href,
          image: item.image,
        })
      }
    >
      My Trip
    </CtaButton>
  );
}
