export interface Runner {
  id: string;

  name: string;

  province: string;

  age?: number;

  level:
    | "Beginner"
    | "Intermediate"
    | "Advanced";

  totalDistance: number;

  eventsJoined: number;

  createdAt: string;
}
