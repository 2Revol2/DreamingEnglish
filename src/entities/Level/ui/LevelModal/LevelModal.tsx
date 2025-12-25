import Image from "next/image";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import type { Level } from "../../model/types/types";

interface LevelModalProps {
  level: Level;
  onClose?: () => void;
}

export const LevelModal = (props: LevelModalProps) => {
  const { level, onClose } = props;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className={"sm:max-w-3xl max-w-full h-[600px] bg-secondary-background sm:h-auto overflow-y-auto"}>
        <DialogHeader>
          <div className={"flex gap-10"}>
            <div className={"w-25 h-25 rounded-lg"} style={{ backgroundColor: level.color }}>
              <Image src={level.icon} alt={level.title} />
            </div>
            <div className={"flex flex-col items-start"}>
              <DialogTitle className={"text-4xl font-bold"} style={{ color: level.color }}>
                {level.title}
              </DialogTitle>
              <div className={"flex flex-col items-start"}>
                <p>{level.subtitle}</p>
                <div className={"flex gap-3 w-full text-sm"}>
                  <p className={"flex gap-1"}>
                    <MdOutlineAccessTimeFilled style={{ color: level.color }} /> Hours of input{" "}
                    {level.stats.hoursOfInput}
                  </p>
                  <p className={"flex gap-1"}>
                    <FaComment style={{ color: level.color }} /> Known words {level.stats.knownWords}
                  </p>
                </div>
                <p className={"text-sm flex gap-1"}>
                  <BsFillBarChartFill style={{ color: level.color }} /> Videos to watch: {level.details.videoCategory}
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>
        <div className={"flex flex-col gap-4"}>
          <div>
            <h6 className={"font-bold"}>What you can do:</h6>
            {level.details.whatYouCanDo.text}
          </div>
          <div>
            <h6 className={"font-bold"}>What you need to do:</h6>
            {level.details.whatYouNeedToDo.text}
          </div>
          <div>
            <h6 className={"font-bold"}>What you are learning:</h6>
            {level.details.whatYouAreLearning.text}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
