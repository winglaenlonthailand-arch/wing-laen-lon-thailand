export type RunningXPInput = {
  distance: number;
  duration: number;
  sport: string;
  verificationStatus: string;
};

export type RunningXPResult = {
  baseXP: number;
  distanceXP: number;
  completionXP: number;
  totalXP: number;
  eligible: boolean;
  reason?: string;
};

const XP_RULES = {
  baseActivity: 10,
  distancePerKm: 10,
  completionBonus: 5,
} as const;

export function calculateRunningXP(
  input: RunningXPInput
): RunningXPResult {
  if (input.verificationStatus === "REJECTED") {
    return {
      baseXP: 0,
      distanceXP: 0,
      completionXP: 0,
      totalXP: 0,
      eligible: false,
      reason: "Activity was rejected",
    };
  }

  if (!Number.isFinite(input.distance) || input.distance <= 0) {
    return {
      baseXP: 0,
      distanceXP: 0,
      completionXP: 0,
      totalXP: 0,
      eligible: false,
      reason: "Invalid distance",
    };
  }

  if (!Number.isFinite(input.duration) || input.duration <= 0) {
    return {
      baseXP: 0,
      distanceXP: 0,
      completionXP: 0,
      totalXP: 0,
      eligible: false,
      reason: "Invalid duration",
    };
  }

  const baseXP = XP_RULES.baseActivity;

  const distanceXP =
    Math.floor(input.distance) * XP_RULES.distancePerKm;

  const completionXP = XP_RULES.completionBonus;

  const totalXP =
    baseXP +
    distanceXP +
    completionXP;

  return {
    baseXP,
    distanceXP,
    completionXP,
    totalXP,
    eligible: true,
  };
}