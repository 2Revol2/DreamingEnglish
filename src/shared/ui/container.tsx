import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = (props: ContainerProps) => {
  const { children, className } = props;

  return <div className={cn("max-w-[1280px] mx-auto", className)}>{children}</div>;
};
