import { cn } from "@/lib/cn";

type PillButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PillButton({ className, children, ...props }: PillButtonProps) {
  return (
    <button
      className={cn(
        "pill-button motion-safe-fade",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
