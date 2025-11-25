"use client";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { RadioGroup } from "@/shared/ui/radio-group";
import { GOAL_OPTIONS, RadioOptionCard } from "@/entities/DailyGoal";
import { useUpdateUserData, useUserData } from "@/entities/User";
import { Button } from "@/shared/ui/button";

export const SetDailyGoal = () => {
  const { data: dailyGoal } = useUserData((user) => user?.dailyGoal);
  const { mutate } = useUpdateUserData();
  const minutesFromServer = dailyGoal ? dailyGoal / 60 : 15;
  const isCustom = !GOAL_OPTIONS.some((option) => Number(option.value) === minutesFromServer);
  const defaultValue = isCustom ? "Own Goal" : String(minutesFromServer);

  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [customValue, setCustomValue] = useState(isCustom ? String(minutesFromServer) : "15");

  const onSave = () => {
    if (selectedOption === "Own Goal") {
      const minutesToSeconds = Number(customValue) * 60;
      mutate({ dailyGoal: minutesToSeconds });
    } else {
      const minutesToSeconds = Number(selectedOption) * 60;
      mutate({ dailyGoal: minutesToSeconds });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <FaPen />
      </DialogTrigger>
      <DialogContent className={"bg-secondary-background"}>
        <DialogHeader>
          <DialogTitle>Daily goal</DialogTitle>
        </DialogHeader>
        <div>
          <RadioGroup defaultValue={defaultValue} onValueChange={setSelectedOption}>
            {GOAL_OPTIONS.map((option) => (
              <RadioOptionCard key={option.id} option={option} value={customValue} onChange={setCustomValue} />
            ))}
          </RadioGroup>
          <Button onClick={onSave} className={"w-full mt-2.5 h-12"}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
