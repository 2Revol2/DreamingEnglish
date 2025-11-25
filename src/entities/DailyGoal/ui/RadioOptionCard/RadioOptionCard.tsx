import { RadioGroupItem } from "@/shared/ui/radio-group";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";
import type { DailyGoalType } from "../../model/types/types";

interface RadioOptionCardProps {
  option: DailyGoalType;
  value?: string;
  onChange?: (value: string) => void;
}

export const RadioOptionCard = (props: RadioOptionCardProps) => {
  const { option, value, onChange } = props;
  return (
    <Label
      htmlFor={option.id}
      className={
        "flex gap-5 border border-borderColor p-5 rounded-2xl hover:border-primary hover:bg-[#fff5e7]  dark:hover:bg-[#312618]"
      }
    >
      <RadioGroupItem value={option.withInput ? "Own Goal" : option.value} id={option.id} className={"w-5 h-5"} />
      <div className={"flex justify-between  sm:items-center gap-3 sm:gap-0 w-full  flex-col sm:flex-row"}>
        <div className={"flex flex-col gap-2"}>
          <h5 className={"font-bold sm:text-xl"}>{option.header}</h5>
          <p className={"text-gray-500 dark:text-gray-400 text-xs sm:text-base"}>{option.description}</p>
        </div>
        <div className={cn("text-gray-500 dark:text-gray-400 flex gap-2 items-center")}>
          {option.withInput ? (
            <Input
              type={"number"}
              className={"text-textColor w-20"}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            />
          ) : (
            option.value
          )}
          <span>min/day</span>
        </div>
      </div>
    </Label>
  );
};
