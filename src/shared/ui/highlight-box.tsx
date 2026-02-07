import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface HighlightBoxProps {
  children: ReactNode;
  className?: string;
}

export const HighlightBox = (props: HighlightBoxProps) => {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-primary/10 to-accent-secondary/10 p-8 rounded-2xl border border-primary/20",
        className,
      )}
    >
      {children}
    </div>
  );
};
