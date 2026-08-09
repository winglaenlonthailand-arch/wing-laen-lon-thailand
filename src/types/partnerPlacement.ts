export type PlacementPosition =
  | "Homepage Top"
  | "Homepage Middle"
  | "Homepage Bottom"
  | "Event Page"
  | "Runner Passport";


export type PlacementStatus =
  | "Active"
  | "Expired"
  | "Pending";


export interface PartnerPlacement {

  id: number;

  partnerName: string;

  imageUrl: string;

  linkUrl: string;

  position: PlacementPosition;

  startDate: string;

  endDate: string;

  status: PlacementStatus;

}
