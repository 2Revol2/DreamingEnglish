import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { COLUMN_BREAKPOINTS, ROW_HEIGHT_BREAKPOINTS } from "../model/constants/constants";

const getColumn = (width: number) => {
  const point = COLUMN_BREAKPOINTS.find((point) => width < point.width);
  return point?.cols ?? 4;
};

export const estimateRowHeight = (width: number) => {
  const bp = ROW_HEIGHT_BREAKPOINTS.find((point) => width < point.maxWidth);
  return bp ? bp.height : 290;
};

export const useResponsiveGrid = () => {
  const [columns, setColumns] = useState(4);
  const [height, setHeight] = useState(290);

  const debounced = useDebouncedCallback(() => {
    const width = window.innerWidth;
    setHeight(estimateRowHeight(width));
    setColumns(getColumn(width));
  }, 500);

  useEffect(() => {
    debounced();
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, [debounced]);

  return { columns, rowHeight: height };
};
