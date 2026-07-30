export type RunnerInterest =
  | "Beginner"
  | "Marathon"
  | "Trail"
  | "Fitness"
  | "Health";


export interface RunnerRecommendation {

  id: number;

  runnerLevel: RunnerInterest;

  preferredCategories: string[];

  recommendedProducts: number[];

  createdAt: string;

}