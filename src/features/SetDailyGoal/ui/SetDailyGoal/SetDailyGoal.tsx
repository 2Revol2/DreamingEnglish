import { FaPen } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { RadioGroup } from "@/shared/ui/radio-group";
import { GOAL_OPTIONS, RadioOptionCard } from "@/entities/DailyGoal";

export const SetDailyGoal = () => {
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
          <RadioGroup>
            {GOAL_OPTIONS.map((option) => (
              <RadioOptionCard key={option.id} option={option} />
            ))}
          </RadioGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
};
