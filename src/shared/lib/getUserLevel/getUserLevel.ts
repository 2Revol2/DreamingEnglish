interface LevelConfig {
  level: number;
  minSeconds: number;
  maxSeconds: number;
}

const LEVELS: LevelConfig[] = [
  { level: 1, minSeconds: 0, maxSeconds: 180000 },
  { level: 2, minSeconds: 180000, maxSeconds: 540000 },
  { level: 3, minSeconds: 540000, maxSeconds: 1080000 },
  { level: 4, minSeconds: 1080000, maxSeconds: 2160000 },
  { level: 5, minSeconds: 2160000, maxSeconds: 3600000 },
  { level: 6, minSeconds: 3600000, maxSeconds: 5400000 },
  { level: 7, minSeconds: 5400000, maxSeconds: Infinity },
];

export const getUserLevel = (totalInputSeconds: number) => {
  return LEVELS.find((config) => totalInputSeconds < config.maxSeconds) || LEVELS[LEVELS.length - 1];
};
