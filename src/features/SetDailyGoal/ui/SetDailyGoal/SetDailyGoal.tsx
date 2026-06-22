"use client";
import { FaPen } from "react-icons/fa";
import { useCallback, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { RadioGroup } from "@/shared/ui/radio-group";
import { GOAL_CUSTOM_OPTION, GOAL_DEFAULT_OPTIONS, RadioOptionCard } from "@/entities/DailyGoal";
import { Button } from "@/shared/ui/button";
import { SetDailyGoalSchema } from "../../model/schemas/setDailyGoalSchema";

interface SetDailyGoalProps {
  dailyGoal: number;
  onSaveDailyGoal: (dailyGoalSeconds: number) => void;
}

export const SetDailyGoal = (props: SetDailyGoalProps) => {
  const { dailyGoal, onSaveDailyGoal } = props;

  const isCustom = !GOAL_DEFAULT_OPTIONS.some((option) => Number(option.value) === dailyGoal);
  const defaultValue = isCustom ? "Own Goal" : String(dailyGoal);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [customValue, setCustomValue] = useState(isCustom ? String(dailyGoal) : "15");

  const defaultOptions = useMemo(() => {
    return GOAL_DEFAULT_OPTIONS;
  }, []);

  const onSave = useCallback(() => {
    const result = SetDailyGoalSchema.safeParse({ dailyGoal: customValue });

    if (!result.success) {
      const errorMessage = result.error.issues[0].message;
      setError(errorMessage);

      return;
    }

    if (selectedOption === "Own Goal") {
      const minutesToSeconds = Number(customValue) * 60;
      onSaveDailyGoal(minutesToSeconds);
    } else {
      const minutesToSeconds = Number(selectedOption) * 60;
      onSaveDailyGoal(minutesToSeconds);
    }
    setIsOpen(false);
    setError("");
  }, [customValue, onSaveDailyGoal, selectedOption]);

  const onChangeCustomGoalHandler = useCallback((v: string) => {
    setCustomValue(v);
  }, []);

  const onOpenHandler = (open: boolean) => {
    if (open) {
      setSelectedOption(defaultValue);
      setCustomValue(isCustom ? String(dailyGoal) : "15");
      setError("");
    }

    setIsOpen(open);
  };

  return (
    <Dialog onOpenChange={onOpenHandler} open={isOpen}>
      <DialogTrigger>
        <FaPen />
      </DialogTrigger>
      <DialogContent className={"bg-secondary-background"}>
        <DialogHeader>
          <DialogTitle>Daily goal</DialogTitle>
        </DialogHeader>
        <div>
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            {defaultOptions.map((option) => (
              <RadioOptionCard key={option.id} option={option} />
            ))}
            <RadioOptionCard option={GOAL_CUSTOM_OPTION} value={customValue} onChange={onChangeCustomGoalHandler} />
            {error ? <p className={"text-red-500 text-sm"}>{error}</p> : null}
          </RadioGroup>
          <Button onClick={onSave} className={"w-full mt-2.5 h-12"}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
