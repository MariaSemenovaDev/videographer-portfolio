import { forwardRef } from "react";

import { cn } from "@/lib/cn";

type PillButtonProps = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  function PillButton({ className, children, ...props }, ref) {
    return (
      <button
        className={cn("pill-button motion-safe-fade", className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
