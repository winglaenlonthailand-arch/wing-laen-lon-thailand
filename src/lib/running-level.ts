export type RunningLevelResult = {
  level: string;
  nextLevel: string | null;
  currentXP: number;
  nextLevelXP: number | null;
  progressPercent: number;
};

type LevelDefinition = {
  name: string;
  minXP: number;
};

const LEVELS: LevelDefinition[] = [
  { name: "Beginner", minXP: 0 },
  { name: "Runner", minXP: 100 },
  { name: "Advanced", minXP: 500 },
  { name: "Pro", minXP: 1500 },
  { name: "Elite", minXP: 5000 },
];

export function calculateRunningLevel(
  currentXP: number
): RunningLevelResult {
  const xp = Math.max(0, Math.floor(currentXP));

  let currentLevel: LevelDefinition = LEVELS[0];
  let nextLevel: LevelDefinition | null = LEVELS[1];

  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].minXP) {
      currentLevel = LEVELS[i];
      nextLevel = LEVELS[i + 1] ?? null;
    }
  }

  if (!nextLevel) {
    return {
      level: currentLevel.name,
      nextLevel: null,
      currentXP: xp,
      nextLevelXP: null,
      progressPercent: 100,
    };
  }

  const levelRange =
    nextLevel.minXP - currentLevel.minXP;

  const progressXP =
    xp - currentLevel.minXP;

  const progressPercent = Math.min(
    100,
    Math.max(
      0,
      Math.floor((progressXP / levelRange) * 100)
    )
  );

  return {
    level: currentLevel.name,
    nextLevel: nextLevel.name,
    currentXP: xp,
    nextLevelXP: nextLevel.minXP,
    progressPercent,
  };
}