export type RunnerAccountStatus =
  | "Active"
  | "Inactive"
  | "Pending";


export interface RunnerDatabase {

  id: number;

  runnerId: number;

  email: string;

  phone: string;

  passwordStatus: 
    | "Set"
    | "Not Set";

  accountStatus: RunnerAccountStatus;

  lastLogin: string;

  createdAt: string;

}