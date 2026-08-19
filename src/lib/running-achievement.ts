export type AchievementInput = {
  totalDistance: number;
  totalActivities: number;
  currentXP: number;
};

export type AchievementResult = {
  achievementType: string;
  eligible: boolean;
  description: string;
};

type AchievementRule = {
  type: string;
  description: string;
  check: (input: AchievementInput) => boolean;
};

const ACHIEVEMENT_RULES: AchievementRule[] = [
  {
    type: "FIRST_RUN",
    description: "บันทึกการวิ่งครั้งแรก",
    check: (input) => input.totalActivities >= 1,
  },
  {
    type: "DISTANCE_10KM",
    description: "วิ่งสะสมครบ 10 กิโลเมตร",
    check: (input) => input.totalDistance >= 10,
  },
  {
    type: "DISTANCE_50KM",
    description: "วิ่งสะสมครบ 50 กิโลเมตร",
    check: (input) => input.totalDistance >= 50,
  },
  {
    type: "DISTANCE_100KM",
    description: "วิ่งสะสมครบ 100 กิโลเมตร",
    check: (input) => input.totalDistance >= 100,
  },
  {
    type: "XP_100",
    description: "สะสมครบ 100 XP",
    check: (input) => input.currentXP >= 100,
  },
  {
    type: "XP_500",
    description: "สะสมครบ 500 XP",
    check: (input) => input.currentXP >= 500,
  },
];

export function evaluateRunningAchievements(
  input: AchievementInput
): AchievementResult[] {
  return ACHIEVEMENT_RULES.map((rule) => ({
    achievementType: rule.type,
    eligible: rule.check(input),
    description: rule.description,
  }));
}