export const getUserLevel = (totalInputSeconds: number) => {
  if (totalInputSeconds < 180000) return 1;
  else if (totalInputSeconds < 540000) return 2;
  else if (totalInputSeconds < 1080000) return 3;
  else if (totalInputSeconds < 2160000) return 4;
  else if (totalInputSeconds < 3600000) return 5;
  else if (totalInputSeconds < 5400000) return 6;
  else return 7;
};
