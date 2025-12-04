import type { VideoView } from "../model/constants/constants";

export const estimateRowHeight = (view: VideoView) => {
  if (view === "list") return 200;
  const width = window.innerWidth;
  if (width < 350) return 300;
  else if (width < 420) return 340;
  else if (width < 550) return 420;
  else if (width < 640) return 470;
  else return 290;
};
