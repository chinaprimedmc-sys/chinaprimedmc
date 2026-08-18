export const buttonVariants = {
  primary:
    "border border-white/95 bg-white/82 !text-[#151816] shadow-[inset_0_1px_0_rgba(255,255,255,0.96),inset_0_-1px_0_rgba(21,24,22,0.08),0_10px_30px_rgba(21,24,22,0.12),0_0_24px_rgba(206,221,231,0.3)] backdrop-blur-[22px] [-webkit-backdrop-filter:blur(22px)] hover:border-white hover:bg-white/96 hover:shadow-[inset_0_1px_0_#fff,inset_0_-1px_0_rgba(21,24,22,0.08),0_14px_34px_rgba(21,24,22,0.15),0_0_34px_rgba(196,218,232,0.52)] focus-visible:ring-[#9fb5c2]",
  explore:
    "border border-white/90 bg-white/74 !text-[#151816] shadow-[inset_0_1px_0_rgba(255,255,255,0.94),0_10px_28px_rgba(21,24,22,0.11),0_0_22px_rgba(206,221,231,0.28)] backdrop-blur-[22px] [-webkit-backdrop-filter:blur(22px)] hover:border-white hover:bg-white/94 hover:shadow-[inset_0_1px_0_#fff,0_14px_32px_rgba(21,24,22,0.14),0_0_32px_rgba(196,218,232,0.48)] focus-visible:ring-[#9fb5c2]",
  light:
    "border border-[var(--border)] bg-[var(--bg-primary)]/94 !text-[var(--text-primary)] shadow-[var(--button-glass-shadow)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white hover:shadow-[var(--button-glass-shadow-hover)]",
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
    "border border-[#53e58a] bg-[#25d366]/92 !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,90,38,0.2),0_10px_28px_rgba(37,211,102,0.25),0_0_25px_rgba(37,211,102,0.3)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-[#73ee9f] hover:bg-[#25d366] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_14px_34px_rgba(37,211,102,0.3),0_0_38px_rgba(37,211,102,0.48)] focus-visible:ring-[#25d366] [&_svg]:text-white",
} as const;

export const buttonSizes = {
  sm: "min-h-11 gap-2 px-5 py-2.5 text-sm",
  md: "min-h-12 gap-2.5 px-7 py-3 text-sm",
  lg: "min-h-14 gap-3 px-8 py-3.5 text-base",
} as const;

export const buttonBaseStyles =
  "aviora-cta-glow inline-flex items-center justify-center rounded-full font-semibold tracking-[0.01em] transition-[background-color,border-color,box-shadow,backdrop-filter,opacity,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] hover:-translate-y-px active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:transform-none";

export const iconButtonStyles =
  "grid size-11 shrink-0 place-items-center rounded-full border border-white/90 bg-white/74 text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] transition-[background-color,border-color,box-shadow,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] hover:-translate-y-0.5 hover:border-white hover:bg-white/94 hover:shadow-[var(--button-glass-shadow)] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none motion-reduce:hover:transform-none";
