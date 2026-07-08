import { cn } from "@/lib/cn";

type PillButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PillButton({ className, children, ...props }: PillButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm uppercase tracking-[0.24em] text-canvas transition-colors hover:bg-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
