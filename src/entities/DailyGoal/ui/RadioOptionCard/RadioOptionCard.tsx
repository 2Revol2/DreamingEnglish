import { RadioGroupItem } from "@/shared/ui/radio-group";
import { Label } from "@/shared/ui/label";
import type { DailyGoalType } from "../../model/types/types";

interface RadioOptionCardProps {
  option: DailyGoalType;
}

export const RadioOptionCard = (props: RadioOptionCardProps) => {
  const { option } = props;
  return (
    <Label
      htmlFor={option.id}
      className={
        "flex gap-5 border border-borderColor p-5 rounded-2xl hover:border-primary hover:bg-[#fff5e7] dark:hover:bg-[#312618]"
      }
    >
      <RadioGroupItem value={option.value} id={option.id} className={"w-5 h-5"} />
      <div className={"flex justify-between items-center w-full"}>
        <div className={"flex flex-col gap-5"}>
          <h5 className={"font-bold text-xl"}>{option.header}</h5>
          <p className={"text-gray-500 dark:text-gray-400"}>{option.description}</p>
        </div>
        <div className={"text-gray-500 dark:text-gray-400"}>{option.value} min/day</div>
      </div>
    </Label>
  );
};
