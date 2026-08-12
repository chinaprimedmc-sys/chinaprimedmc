export const buttonVariants = {
  primary:
    "border border-[#253330] bg-[#253330] !text-white shadow-[0_10px_26px_rgba(37,51,48,0.18)] hover:border-[#1c2825] hover:bg-[#1c2825] hover:shadow-[0_14px_32px_rgba(37,51,48,0.25)] focus-visible:ring-[#71847e]",
  explore:
    "border border-[#53666c] bg-[#53666c] !text-white shadow-[0_10px_26px_rgba(83,102,108,0.18)] hover:border-[#42545a] hover:bg-[#42545a] hover:shadow-[0_14px_32px_rgba(83,102,108,0.25)] focus-visible:ring-[#71847e]",
  light:
    "border border-white/95 bg-[#f7f4ec]/94 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white hover:shadow-[var(--button-glass-shadow-hover)]",
  secondary:
    "border border-white/80 bg-white/68 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white/86 hover:shadow-[var(--button-glass-shadow)] hover:backdrop-blur-[22px]",
  outline:
    "border border-white/75 bg-white/48 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white/78 hover:shadow-[var(--button-glass-shadow)] hover:backdrop-blur-[22px]",
  ghost:
    "border border-white/60 bg-white/34 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] hover:border-white/90 hover:bg-white/68",
  glass:
    "border border-white/84 bg-white/72 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white/[0.9] hover:shadow-[var(--button-glass-shadow-hover)] hover:backdrop-blur-[22px]",
  frosted:
    "border border-white/88 bg-white/78 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white/94 hover:shadow-[var(--button-glass-shadow-hover)]",
  frostedSubtle:
    "border border-white/72 bg-white/52 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white/94 hover:bg-white/78 hover:shadow-[var(--button-glass-shadow)]",
  lightFrosted:
    "border border-white/95 bg-white/84 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white/96 hover:shadow-[var(--button-glass-shadow-hover)]",
  lightFrostedSubtle:
    "border border-white/76 bg-white/52 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white/[0.8] hover:shadow-[var(--button-glass-shadow)]",
  whatsappFrosted:
    "border border-[#25d366] bg-[#25d366] !text-white shadow-[0_10px_26px_rgba(37,211,102,0.22)] hover:border-[#20bd5a] hover:bg-[#20bd5a] hover:shadow-[0_14px_34px_rgba(37,211,102,0.3)] focus-visible:ring-[#25d366] [&_svg]:text-white",
} as const;

export const buttonSizes = {
  sm: "min-h-11 gap-2 px-5 py-2.5 text-sm",
  md: "min-h-12 gap-2.5 px-7 py-3 text-sm",
  lg: "min-h-14 gap-3 px-8 py-3.5 text-base",
} as const;

export const buttonBaseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-[0.01em] transition-[background-color,border-color,box-shadow,backdrop-filter,opacity,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] hover:-translate-y-px active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:transform-none";

export const iconButtonStyles =
  "grid size-11 shrink-0 place-items-center rounded-full border border-white/90 bg-white/74 text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] transition-[background-color,border-color,box-shadow,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] hover:-translate-y-0.5 hover:border-white hover:bg-white/94 hover:shadow-[var(--button-glass-shadow)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none motion-reduce:hover:transform-none";
