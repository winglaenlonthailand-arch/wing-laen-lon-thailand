export type CampaignStatus =
  | "Draft"
  | "Pending"
  | "Active"
  | "Expired"
  | "Archived";


export type AdvertisementPosition =
  | "Homepage Banner"
  | "Partner Carousel"
  | "Event Sponsor"
  | "Runner Passport Sponsor"
  | "AI Platform Sponsor";


export interface PartnerCampaign {

  id: number;

  partnerName: string;

  category: string;

  position: AdvertisementPosition;

  durationDays: number;

  startDate: string;

  endDate: string;

  status: CampaignStatus;

  imageUrl: string;

  description: string;

}