import { FaPen } from "react-icons/fa";
import { Progress } from "@/shared/ui/progress";
import { Separator } from "@/shared/ui/separator";
import { AvatarDropdown } from "../AvatarDropdown/AvatarDropdown";

export const AuthHeader = () => {
  return (
    <header
      className={"bg-secondary-background border-l border-borderColor h-12 flex justify-between items-center p-3"}
    >
      <div className={"flex-1 bg-background p-1 rounded flex items-center justify-between gap-1.5"}>
        <p className={"text-sm shrink-0 font-medium"}>Daily Goal</p>
        <Progress className={"bg-[#d5dde5]"} />
        <p className={"text-sm shrink-0 font-medium"}>0/15 min</p>
        <FaPen />
      </div>
      <Separator orientation={"vertical"} className={"mx-5"} />
      <AvatarDropdown />
    </header>
  );
};
