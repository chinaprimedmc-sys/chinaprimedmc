import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  className,
  description,
  eyebrow,
  title,
  titleAs: Title = "h2",
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("grid max-w-3xl gap-4", className)}>
      <div>
        <Badge>{eyebrow}</Badge>
        <Title className={cn("type-section-title mt-4 max-w-[22ch]", titleClassName)}>
          {title}
        </Title>
      </div>
      {description ? (
        <p className="type-body max-w-[64ch] text-[var(--color-copy)]">{description}</p>
      ) : null}
    </div>
  );
}
