"use client";

import { useEffect } from "react";
import { useMemo } from "react";

import { useAppStore } from "@/stores/app-store";
import type { DiscoveryType } from "@/types/discovery";

type RecordViewedProps = {
  item: {
    id: string;
    type: DiscoveryType;
    title: string;
    href: string;
  };
};

export function RecordViewed({ item }: RecordViewedProps) {
  const recordViewed = useAppStore((state) => state.recordViewed);
  const stableItem = useMemo(
    () => ({
      id: item.id,
      type: item.type,
      title: item.title,
      href: item.href,
    }),
    [item.href, item.id, item.title, item.type],
  );

  useEffect(() => {
    recordViewed(stableItem);
  }, [recordViewed, stableItem]);

  return null;
}
