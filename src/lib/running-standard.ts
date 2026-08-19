export const RUNNING_STANDARD = {
  distance: {
    unit: "km",
    minimum: 0.01,
  },

  duration: {
    unit: "seconds",
    minimum: 1,
  },

  pace: {
    unit: "min/km",
  },

  averageSpeed: {
    unit: "km/h",
  },

  elevationGain: {
    unit: "meters",
  },

  source: {
    MANUAL: "MANUAL",
    GPS: "GPS",
    STRAVA: "STRAVA",
    GARMIN: "GARMIN",
    COROS: "COROS",
    GPX: "GPX",
    OTHER: "OTHER",
  },

  verificationStatus: {
    PENDING: "PENDING",
    VERIFIED: "VERIFIED",
    REJECTED: "REJECTED",
  },

  xp: {
    calculation: "RULE_BASED",
  },
} as const;

export type RunningSource =
  keyof typeof RUNNING_STANDARD.source;

export type RunningVerificationStatus =
  keyof typeof RUNNING_STANDARD.verificationStatus;