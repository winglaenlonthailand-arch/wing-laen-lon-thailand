export interface RunningEvent {

  id: string;

  name: string;

  province: string;

  date: string;

  distance:
    | "5K"
    | "10K"
    | "Half Marathon"
    | "Marathon";

  participants: number;

}