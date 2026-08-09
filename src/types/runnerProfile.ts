export type RunnerLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Professional";


export interface RunnerProfile {

  id: number;

  runnerName: string;

  province: string;

  age: number;

  level: RunnerLevel;

  totalDistance: number;

  totalEvents: number;

  favoriteCategory: string[];

  createdAt: string;

}
