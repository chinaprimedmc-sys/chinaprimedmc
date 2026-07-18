"use client";

import { Minus, Plus } from "lucide-react";

import { iconButtonStyles } from "@/components/ui/button-styles";

type TravelerSelectorProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export function TravelerSelector({
  label,
  value,
  min = 0,
  max = 20,
  onChange,
}: TravelerSelectorProps) {
  return (
    <div className="border-border flex items-center justify-between gap-4 rounded-2xl border bg-white p-4">
      <span className="text-sm font-semibold">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className={iconButtonStyles}
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`Decrease ${label}`}
        >
          <Minus size={15} aria-hidden="true" />
        </button>
        <span className="w-6 text-center text-sm font-semibold">{value}</span>
        <button
          type="button"
          className={iconButtonStyles}
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={`Increase ${label}`}
        >
          <Plus size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
