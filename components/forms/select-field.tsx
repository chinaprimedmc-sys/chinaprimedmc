"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { FieldShell } from "@/components/forms/form-field";

type SelectFieldProps = {
  label: string;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  helper?: string;
};

export function SelectField({
  label,
  placeholder = "Select",
  options,
  value,
  onValueChange,
  error,
  helper,
}: SelectFieldProps) {
  return (
    <FieldShell label={label} helper={helper} error={error}>
      <Select.Root value={value} onValueChange={onValueChange}>
        <Select.Trigger
          className="border-border focus:ring-foreground/5 flex h-12 items-center justify-between rounded-2xl border bg-white px-4 text-sm transition outline-none focus:ring-4"
          aria-invalid={Boolean(error)}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <ChevronDown size={16} aria-hidden="true" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="border-border z-[90] overflow-hidden rounded-2xl border bg-white p-1 shadow-xl">
            <Select.Viewport>
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="data-[highlighted]:bg-foreground/5 relative flex cursor-pointer items-center rounded-xl py-2 pr-3 pl-9 text-sm outline-none select-none"
                >
                  <Select.ItemIndicator className="absolute left-3">
                    <Check size={15} aria-hidden="true" />
                  </Select.ItemIndicator>
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </FieldShell>
  );
}
