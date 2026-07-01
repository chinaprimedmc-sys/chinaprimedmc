import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
};

export function SectionHeader({
  className,
  description,
  eyebrow,
  title,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-end", className)}>
      <div>
        <Badge>{eyebrow}</Badge>
        <h2
          className={cn(
            "mt-4 max-w-3xl text-[2rem] leading-[1.05] font-semibold tracking-[-0.035em] sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className="text-muted max-w-2xl text-base leading-7 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
