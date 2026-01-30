export type VideoView = "list" | "grid";

export const COLUMN_BREAKPOINTS = [
  { width: 640, cols: 1 },
  { width: 870, cols: 2 },
  { width: 1024, cols: 3 },
  { width: 1130, cols: 2 },
  { width: 1500, cols: 4 },
];

export const ROW_HEIGHT_BREAKPOINTS = [
  { maxWidth: 350, height: 300 },
  { maxWidth: 420, height: 340 },
  { maxWidth: 550, height: 420 },
  { maxWidth: 640, height: 470 },
];
