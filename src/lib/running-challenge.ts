export type ChallengeInput = {
  currentDistance: number;
  currentActivities: number;
  currentXP: number;
};

export type ChallengeDefinition = {
  id: string;
  name: string;
  description: string;
  target: number;
  unit: "KM" | "ACTIVITY" | "XP";
};

export type ChallengeProgressResult = {
  challengeId: string;
  name: string;
  description: string;
  progress: number;
  target: number;
  percent: number;
  completed: boolean;
};

const CHALLENGES: ChallengeDefinition[] = [
  {
    id: "RUN_10KM",
    name: "10K Starter",
    description: "วิ่งสะสมให้ครบ 10 กิโลเมตร",
    target: 10,
    unit: "KM",
  },
  {
    id: "RUN_50KM",
    name: "50K Runner",
    description: "วิ่งสะสมให้ครบ 50 กิโลเมตร",
    target: 50,
    unit: "KM",
  },
  {
    id: "RUN_100KM",
    name: "100K Runner",
    description: "วิ่งสะสมให้ครบ 100 กิโลเมตร",
    target: 100,
    unit: "KM",
  },
  {
    id: "RUN_10_ACTIVITIES",
    name: "10 Runs",
    description: "บันทึกการวิ่งให้ครบ 10 ครั้ง",
    target: 10,
    unit: "ACTIVITY",
  },
  {
    id: "RUN_500_XP",
    name: "500 XP",
    description: "สะสมให้ครบ 500 XP",
    target: 500,
    unit: "XP",
  },
];

export function evaluateRunningChallenges(
  input: ChallengeInput
): ChallengeProgressResult[] {
  return CHALLENGES.map((challenge) => {
    let progress = 0;

    if (challenge.unit === "KM") {
      progress = input.currentDistance;
    }

    if (challenge.unit === "ACTIVITY") {
      progress = input.currentActivities;
    }

    if (challenge.unit === "XP") {
      progress = input.currentXP;
    }

    progress = Math.max(0, progress);

    const percent = Math.min(
      100,
      Math.floor((progress / challenge.target) * 100)
    );

    return {
      challengeId: challenge.id,
      name: challenge.name,
      description: challenge.description,
      progress,
      target: challenge.target,
      percent,
      completed: progress >= challenge.target,
    };
  });
}