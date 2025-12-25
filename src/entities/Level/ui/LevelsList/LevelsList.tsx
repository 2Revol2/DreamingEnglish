"use client";
import { useState } from "react";
import { Levels } from "../../model/constants/levels";
import { LevelCard } from "../LevelCard/LevelCard";
import { LevelModal } from "../LevelModal/LevelModal";
import type { Level } from "../../model/types/types";

export const LevelsList = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  return (
    <div className={"flex flex-col  gap-4"}>
      {Levels.map((level) => (
        <LevelCard key={level.id} level={level} onClick={() => setSelectedLevel(level)} />
      ))}
      {selectedLevel && <LevelModal level={selectedLevel} onClose={() => setSelectedLevel(null)} />}
    </div>
  );
};
