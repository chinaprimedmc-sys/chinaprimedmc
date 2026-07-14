import { cn } from "@/lib/utils/cn";

type HeroTrustPillsProps = {
  items: string[];
  className?: string;
};

export function HeroTrustPills({ className, items }: HeroTrustPillsProps) {
  return (
    <div
      className={cn(
        "mx-auto mt-8 flex max-w-full flex-wrap justify-center gap-2 text-white/88",
        className,
      )}
    >
      {items.map((item) => (
        <span
          key={item}
          className="max-w-full rounded border border-white/35 bg-transparent px-3 py-2 text-center text-[0.64rem] leading-snug font-medium tracking-[0.08em] break-words uppercase backdrop-blur-sm sm:px-3.5 sm:text-[0.66rem]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
