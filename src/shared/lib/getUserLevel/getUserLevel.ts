export const getUserLevel = (totalInputSeconds: number) => {
  if (totalInputSeconds < 180000) return { level: 1, minSeconds: 0, maxSeconds: 180000 };
  else if (totalInputSeconds < 540000) return { level: 2, minSeconds: 180000, maxSeconds: 540000 };
  else if (totalInputSeconds < 1080000) return { level: 3, minSeconds: 540000, maxSeconds: 1080000 };
  else if (totalInputSeconds < 2160000) return { level: 4, minSeconds: 1080000, maxSeconds: 2160000 };
  else if (totalInputSeconds < 3600000) return { level: 5, minSeconds: 2160000, maxSeconds: 3600000 };
  else if (totalInputSeconds < 5400000) return { level: 6, minSeconds: 3600000, maxSeconds: 5400000 };
  else return { level: 7, minSeconds: 5400000, maxSeconds: Infinity };
};
