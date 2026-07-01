import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { DiscoveryType, TripPlanItem } from "@/types/discovery";

type SavedDiscoveryItem = {
  id: string;
  type: DiscoveryType;
  title: string;
  href: string;
};

type AppState = {
  inquiryOpen: boolean;
  setInquiryOpen: (open: boolean) => void;
  favorites: SavedDiscoveryItem[];
  recentlyViewed: SavedDiscoveryItem[];
  tripItems: TripPlanItem[];
  toggleFavorite: (item: SavedDiscoveryItem) => void;
  isFavorite: (id: string) => boolean;
  recordViewed: (item: SavedDiscoveryItem) => void;
  addTripItem: (item: TripPlanItem) => void;
  removeTripItem: (id: string) => void;
  clearTrip: () => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      inquiryOpen: false,
      favorites: [],
      recentlyViewed: [],
      tripItems: [],
      setInquiryOpen: (open) => set({ inquiryOpen: open }),
      toggleFavorite: (item) =>
        set((state) => {
          const exists = state.favorites.some((favorite) => favorite.id === item.id);
          return {
            favorites: exists
              ? state.favorites.filter((favorite) => favorite.id !== item.id)
              : [item, ...state.favorites].slice(0, 80),
          };
        }),
      isFavorite: (id) => get().favorites.some((favorite) => favorite.id === id),
      recordViewed: (item) =>
        set((state) => ({
          recentlyViewed: [
            item,
            ...state.recentlyViewed.filter((viewed) => viewed.id !== item.id),
          ].slice(0, 12),
        })),
      addTripItem: (item) =>
        set((state) => ({
          tripItems: state.tripItems.some((tripItem) => tripItem.id === item.id)
            ? state.tripItems
            : [...state.tripItems, item].slice(0, 40),
        })),
      removeTripItem: (id) =>
        set((state) => ({
          tripItems: state.tripItems.filter((tripItem) => tripItem.id !== id),
        })),
      clearTrip: () => set({ tripItems: [] }),
    }),
    {
      name: "china-prime-dmc-discovery",
      partialize: (state) => ({
        favorites: state.favorites,
        recentlyViewed: state.recentlyViewed,
        tripItems: state.tripItems,
      }),
    },
  ),
);
