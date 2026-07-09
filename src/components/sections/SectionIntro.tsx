import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/cn";

type SectionIntroProps = {
  align?: "split" | "stack";
  className?: string;
  description: string;
  eyebrow: string;
  title: string;
};

export function SectionIntro({
  align = "split",
  className,
  description,
  eyebrow,
  title
}: SectionIntroProps) {
  return (
    <Reveal
      className={cn(
        "border-b border-border pb-8 sm:pb-10",
        align === "split"
          ? "grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end"
          : "grid gap-4",
        className
      )}
    >
      <div className="space-y-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title max-w-4xl">{title}</h2>
      </div>
      <p className="meta-text max-w-xl lg:justify-self-end">{description}</p>
    </Reveal>
  );
}
