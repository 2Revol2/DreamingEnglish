export const getMinutesFromSeconds = (seconds: number) => {
  return Math.floor((seconds % 3600) / 60);
};
