import type { ButtonHTMLAttributes } from "react";

import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "glass";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonBaseStyles, buttonVariants[variant], buttonSizes[size], className)}
      {...props}
    />
  );
}
