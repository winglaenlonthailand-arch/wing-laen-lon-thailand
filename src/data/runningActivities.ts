import { RunningActivity } from "@/types/runningActivity";


export const runningActivities: RunningActivity[] = [

  {
    id: 1,
    runnerId: 1,
    eventName: "Nan Running Challenge",
    activityType: "Event",
    distance: 10,
    duration: "01:05:20",
    date: "2026-07-20",
    province: "Nan",
  },


  {
    id: 2,
    runnerId: 1,
    eventName: "Morning Training",
    activityType: "Training",
    distance: 5,
    duration: "00:32:10",
    date: "2026-07-22",
    province: "Nan",
  },


  {
    id: 3,
    runnerId: 2,
    eventName: "Bangkok Marathon",
    activityType: "Marathon",
    distance: 42,
    duration: "04:20:15",
    date: "2026-07-15",
    province: "Bangkok",
  },

];