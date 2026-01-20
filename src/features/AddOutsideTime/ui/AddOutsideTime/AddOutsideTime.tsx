"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAddOutsideTime } from "../../api/useAddOutsideTime";
import { OutsideTimeSchema } from "../../schemas/outsideTimeSchema";

export const AddOutsideTime = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { mutate } = useAddOutsideTime();

  const onSave = () => {
    const result = OutsideTimeSchema.safeParse({ hours, minutes });

    if (!result.success) {
      const errorMessage = result.error.issues[0].message;
      setError(errorMessage);

      return;
    }

    const hoursToSeconds = Number(hours) * 60 * 60;
    const minutesToSeconds = Number(minutes) * 60;
    const totalSeconds = hoursToSeconds + minutesToSeconds;

    mutate(totalSeconds);
    setMinutes("");
    setHours("");
    setError("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <Input
              type={"number"}
              placeholder={"Hours"}
              min={0}
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <Input
              type={"number"}
              min={0}
              placeholder={"Minutes"}
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </div>
          {error && <p className={"text-red-500 text-sm"}>{error}</p>}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={onSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
