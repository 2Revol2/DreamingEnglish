import { useEffect, useState } from "react";
import { COLUMN_BREACKPOINTS } from "../model/constants/constants";
import type { VideoView } from "../model/constants/constants";

const getColumn = (width: number) => {
  const point = COLUMN_BREACKPOINTS.find((point) => width < point.width);
  return point?.cols ?? 4;
};

export const useColumn = (view: VideoView) => {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (view === "list") {
        setColumns(1);
        return;
      }
      setColumns(getColumn(width));
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [view]);

  return columns;
};
