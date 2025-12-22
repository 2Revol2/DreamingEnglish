import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { COLUMN_BREAKPOINTS, ROW_HEIGHT_BREAKPOINTS } from "../model/constants/constants";
import type { VideoView } from "../model/constants/constants";

const getColumn = (view: VideoView, width: number) => {
  if (view === "list") return 1;

  const point = COLUMN_BREAKPOINTS.find((point) => width < point.width);
  return point?.cols ?? 4;
};

export const estimateRowHeight = (view: VideoView, width: number) => {
  if (view === "list") return width < 1000 ? 120 : 200;

  const bp = ROW_HEIGHT_BREAKPOINTS.find((point) => width < point.maxWidth);
  return bp ? bp.height : 290;
};

export const useResponsiveGrid = (view: VideoView) => {
  const [columns, setColumns] = useState(4);
  const [height, setHeight] = useState(290);

  const debounced = useDebouncedCallback(() => {
    const width = window.innerWidth;
    setHeight(estimateRowHeight(view, width));
    setColumns(getColumn(view, width));
  }, 500);

  useEffect(() => {
    debounced();
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, [debounced, view]);

  return { columns, rowHeight: height };
};
