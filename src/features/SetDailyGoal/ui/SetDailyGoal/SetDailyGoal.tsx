"use client";
import { FaPen } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { RadioGroup } from "@/shared/ui/radio-group";
import { GOAL_OPTIONS, RadioOptionCard } from "@/entities/DailyGoal";
import { useUpdateUserData, useUserData } from "@/entities/User";

export const SetDailyGoal = () => {
  const { data: dailyGoal } = useUserData((user) => user?.dailyGoal);
  const { mutate } = useUpdateUserData();

  const defaultGoal = dailyGoal ? String(dailyGoal / 60) : "15";

  const handleOptionChange = (goal: string) => {
    const minutesToSeconds = Number(goal) * 60;
    mutate({ dailyGoal: minutesToSeconds });
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
          <RadioGroup defaultValue={defaultGoal} onValueChange={handleOptionChange}>
            {GOAL_OPTIONS.map((option) => (
              <RadioOptionCard key={option.id} option={option} />
            ))}
          </RadioGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
};
