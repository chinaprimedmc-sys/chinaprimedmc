import { cn } from "@/lib/utils/cn";

type HeroTrustPillsProps = {
  items: string[];
  className?: string;
};

export function HeroTrustPills({ className, items }: HeroTrustPillsProps) {
  return (
    <div className={cn("mt-8 flex flex-wrap justify-center gap-2 text-white/88", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded border border-white/35 bg-transparent px-3.5 py-2 text-[0.66rem] font-medium tracking-[0.08em] uppercase backdrop-blur-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
