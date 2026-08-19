import type { PrismaClient } from "@/generated/prisma/client";

export type RunningPassportSummary = {
  totalDistance: number;
  totalActivities: number;
  totalDuration: number;
  averageDistance: number;
  totalElevationGain: number;
  totalXP: number;
  level: string;
  achievements: number;
  activeChallenges: number;
  completedChallenges: number;
};

export async function getRunningPassportSummary(
  prisma: PrismaClient,
  athleteId: string
): Promise<RunningPassportSummary> {
  if (!athleteId) {
    throw new Error("athleteId is required");
  }

  const [
    activities,
    xpEntries,
    achievements,
    challenges,
  ] = await Promise.all([
    prisma.runningActivity.findMany({
      where: {
        athleteId,
        verificationStatus: {
          not: "REJECTED",
        },
      },
      select: {
        distance: true,
        duration: true,
        elevationGain: true,
      },
    }),

    prisma.xPLedger.findMany({
      where: {
        athleteId,
      },
      select: {
        amount: true,
      },
    }),

    prisma.achievement.count({
      where: {
        athleteId,
      },
    }),

    prisma.challengeProgress.findMany({
      where: {
        athleteId,
      },
      select: {
        status: true,
      },
    }),
  ]);

  const totalDistance = activities.reduce(
    (total, activity) =>
      total + activity.distance,
    0
  );

  const totalDuration = activities.reduce(
    (total, activity) =>
      total + activity.duration,
    0
  );

  const totalElevationGain = activities.reduce(
    (total, activity) =>
      total + (activity.elevationGain ?? 0),
    0
  );

  const totalXP = xpEntries.reduce(
    (total, entry) =>
      total + entry.amount,
    0
  );

  const totalActivities = activities.length;

  const averageDistance =
    totalActivities > 0
      ? totalDistance / totalActivities
      : 0;

  const completedChallenges =
    challenges.filter(
      (challenge) =>
        challenge.status === "COMPLETED"
    ).length;

  const activeChallenges =
    challenges.filter(
      (challenge) =>
        challenge.status === "ACTIVE"
    ).length;

  const level = calculateLevel(totalXP);

  return {
    totalDistance,
    totalActivities,
    totalDuration,
    averageDistance,
    totalElevationGain,
    totalXP,
    level,
    achievements,
    activeChallenges,
    completedChallenges,
  };
}

function calculateLevel(xp: number): string {
  if (xp >= 5000) {
    return "Elite";
  }

  if (xp >= 1500) {
    return "Pro";
  }

  if (xp >= 500) {
    return "Advanced";
  }

  if (xp >= 100) {
    return "Runner";
  }

  return "Beginner";
}