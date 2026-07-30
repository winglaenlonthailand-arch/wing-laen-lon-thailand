export type ActivityType =
  | "Training"
  | "Event"
  | "Marathon"
  | "Trail";


export interface RunningActivity {

  id: number;

  runnerId: number;

  eventName: string;

  activityType: ActivityType;

  distance: number;

  duration: string;

  date: string;

  province: string;

}