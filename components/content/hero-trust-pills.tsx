import { cn } from "@/lib/utils/cn";

type HeroTrustPillsProps = {
  items: string[];
  className?: string;
};

export function HeroTrustPills({ className, items }: HeroTrustPillsProps) {
  return (
    <div className={cn("mt-8 flex flex-wrap justify-center gap-2 text-white/90", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/35 bg-black/18 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.12em] uppercase shadow-[var(--shadow-glass)] backdrop-blur-2xl"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
