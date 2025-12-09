import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { COLUMN_BREAKPOINTS, ROW_HEIGHT_BREAKPOINTS } from "../model/constants/constants";
import type { VideoView } from "../model/constants/constants";

const getColumn = (width: number) => {
  const point = COLUMN_BREAKPOINTS.find((point) => width < point.width);
  return point?.cols ?? 4;
};

export const estimateRowHeight = (view: VideoView, width: number) => {
  if (view === "list") return 200;

  const bp = ROW_HEIGHT_BREAKPOINTS.find((point) => width < point.maxWidth);
  return bp ? bp.height : 290;
};

export const useResponsiveGrid = (view: VideoView) => {
  const [columns, setColumns] = useState(4);
  const [height, setHeight] = useState(290);

  const debounced = useDebouncedCallback(() => {
    const width = window.innerWidth;
    if (view === "list") {
      setColumns(1);
      setHeight(200);
      return;
    }
    setHeight(estimateRowHeight(view, width));
    setColumns(getColumn(width));
  }, 500);

  useEffect(() => {
    debounced();
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, [debounced, view]);

  return { columns, rowHeight: height };
};
