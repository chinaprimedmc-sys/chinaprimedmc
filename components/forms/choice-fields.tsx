import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ChoiceProps = {
  label: string;
  helper?: string;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function CheckboxField({ label, helper, className, children, ...props }: ChoiceProps) {
  return (
    <label className={cn("border-border flex gap-3 rounded-2xl border bg-white p-4", className)}>
      <input type="checkbox" className="accent-foreground mt-1 size-4" {...props} />
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {helper ? <span className="text-muted mt-1 block text-sm leading-6">{helper}</span> : null}
        {children}
      </span>
    </label>
  );
}

export function RadioField({ label, helper, className, children, ...props }: ChoiceProps) {
  return (
    <label className={cn("border-border flex gap-3 rounded-2xl border bg-white p-4", className)}>
      <input type="radio" className="accent-foreground mt-1 size-4" {...props} />
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {helper ? <span className="text-muted mt-1 block text-sm leading-6">{helper}</span> : null}
        {children}
      </span>
    </label>
  );
}
