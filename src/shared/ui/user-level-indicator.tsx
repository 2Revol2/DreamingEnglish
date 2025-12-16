import { cn } from "@/shared/lib/utils";

interface UserLevelIndicatorProps {
  level: number;
}

export const UserLevelIndicator = (props: UserLevelIndicatorProps) => {
  const { level } = props;

  const levels: number[] = new Array(7).fill(0).map((_, i) => i + 1);

  return (
    <div className={"flex gap-4 items-end"}>
      {levels.map((l) => (
        <div
          key={l}
          style={{ height: `${30 * l}px` }}
          className={cn("w-9 bg-background rounded-md", level === l && "bg-primary")}
        />
      ))}
    </div>
  );
};
