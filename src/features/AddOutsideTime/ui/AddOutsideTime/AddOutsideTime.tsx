"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAddOutsideTime } from "../../api/useAddOutsideTime";

export const AddOutsideTime = () => {
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");

  const { mutate } = useAddOutsideTime();

  const onSave = () => {
    const hoursToSeconds = Number(hours) * 60 * 60;
    const minutesToSeconds = Number(minutes) * 60;
    const totalSeconds = hoursToSeconds + minutesToSeconds;

    mutate(totalSeconds);
    setMinutes("");
    setHours("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={"w-full"}>
          <Plus /> Add Outside Time
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add outside time</DialogTitle>
        <div>
          <p className="text-sm text-gray-500 mb-2">Time Amount</p>
          <div className={"flex gap-2"}>
            <Input type={"number"} placeholder={"Hours"} value={hours} onChange={(e) => setHours(e.target.value)} />
            <Input
              type={"number"}
              placeholder={"Minutes"}
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onSave}>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
