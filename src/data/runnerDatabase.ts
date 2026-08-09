import { RunnerDatabase } from "@/types/runnerDatabase";


export const runnerDatabase: RunnerDatabase[] = [

  {
    id: 1,

    runnerId: 1,

    email:
      "runner1@example.com",

    phone:
      "000-000-0000",

    passwordStatus:
      "Set",

    accountStatus:
      "Active",

    lastLogin:
      "2026-07-24",

    createdAt:
      "2026-07-24",
  },


  {
    id: 2,

    runnerId: 2,

    email:
      "runner2@example.com",

    phone:
      "000-000-0000",

    passwordStatus:
      "Set",

    accountStatus:
      "Active",

    lastLogin:
      "2026-07-23",

    createdAt:
      "2026-07-24",
  },


  {
    id: 3,

    runnerId: 3,

    email:
      "runner3@example.com",

    phone:
      "000-000-0000",

    passwordStatus:
      "Not Set",

    accountStatus:
      "Pending",

    lastLogin:
      "",

    createdAt:
      "2026-07-24",
  },

];
