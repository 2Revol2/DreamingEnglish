import { Skeleton } from "@/shared/ui/skeleton";
import type { ReactNode } from "react";

interface StatItemProps {
  icon: ReactNode;
  label: string;
  value: number;
  isLoading?: boolean;
}

export const StatItem = (props: StatItemProps) => {
  const { icon, label, value, isLoading } = props;

  if (isLoading) {
    return <Skeleton className={"w-full h-14 bg-background"} />;
  }

  return (
    <div className={"p-3 bg-background rounded-xl flex justify-between items-center"}>
      <div className={"flex gap-2 items-center"}>
        {icon}
        <p>{label}</p>
      </div>
      <span className={"font-bold"}>{value}</span>
    </div>
  );
};
