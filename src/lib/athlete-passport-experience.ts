export type AthletePassportExperienceInput = {
  firstName: string;
  lastName: string;
  nickname?: string | null;
  athleteId: string;
  level: string;
  totalDistance: number;
  totalActivities: number;
  totalDuration: number;
  totalXP: number;
  achievements: number;
  activeChallenges: number;
  completedChallenges: number;
  profileImage?: string | null;
  runningImage?: string | null;
};

export type AthletePassportExperience = {
  identity: {
    name: string;
    nickname: string | null;
    athleteId: string;
    level: string;
    profileImage: string | null;
    runningImage: string | null;
  };

  hero: {
    title: string;
    subtitle: string;
    backgroundMode: "ATHLETE" | "RUNNING" | "THAILAND_MASTER";
    backgroundImage: string | null;
  };

  statistics: {
    distance: number;
    activities: number;
    xp: number;
    duration: number;
  };

  progression: {
    level: string;
    xp: number;
    achievements: number;
    activeChallenges: number;
    completedChallenges: number;
  };

  display: {
    distanceLabel: string;
    activityLabel: string;
    xpLabel: string;
    durationLabel: string;
  };
};

export function buildAthletePassportExperience(
  input: AthletePassportExperienceInput
): AthletePassportExperience {
  const name =
    `${input.firstName} ${input.lastName}`.trim();

  const backgroundMode =
    input.runningImage
      ? "RUNNING"
      : input.profileImage
        ? "ATHLETE"
        : "THAILAND_MASTER";

  const backgroundImage =
    input.runningImage ??
    input.profileImage ??
    null;

  return {
    identity: {
      name,
      nickname: input.nickname ?? null,
      athleteId: input.athleteId,
      level: input.level,
      profileImage: input.profileImage ?? null,
      runningImage: input.runningImage ?? null,
    },

    hero: {
      title: "THAILAND ATHLETE PASSPORT",
      subtitle: "WING LAEN LON THAILAND",
      backgroundMode,
      backgroundImage,
    },

    statistics: {
      distance: roundNumber(input.totalDistance),
      activities: Math.max(
        0,
        Math.floor(input.totalActivities)
      ),
      xp: Math.max(
        0,
        Math.floor(input.totalXP)
      ),
      duration: Math.max(
        0,
        Math.floor(input.totalDuration)
      ),
    },

    progression: {
      level: input.level,
      xp: Math.max(
        0,
        Math.floor(input.totalXP)
      ),
      achievements: Math.max(
        0,
        Math.floor(input.achievements)
      ),
      activeChallenges: Math.max(
        0,
        Math.floor(input.activeChallenges)
      ),
      completedChallenges: Math.max(
        0,
        Math.floor(input.completedChallenges)
      ),
    },

    display: {
      distanceLabel:
        `${roundNumber(input.totalDistance)} KM`,

      activityLabel:
        `${Math.max(
          0,
          Math.floor(input.totalActivities)
        )} RUNS`,

      xpLabel:
        `${Math.max(
          0,
          Math.floor(input.totalXP)
        )} XP`,

      durationLabel:
        formatDuration(input.totalDuration),
    },
  };
}

function roundNumber(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.round(value * 100) / 100;
}

function formatDuration(seconds: number): string {
  const safeSeconds = Math.max(
    0,
    Math.floor(seconds)
  );

  const hours = Math.floor(
    safeSeconds / 3600
  );

  const minutes = Math.floor(
    (safeSeconds % 3600) / 60
  );

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}m`;
}