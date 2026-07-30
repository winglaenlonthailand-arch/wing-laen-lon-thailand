export interface PartnerAnalytics {

  id: number;

  partnerName: string;

  campaignId: number;

  impressions: number;

  clicks: number;

  registrations: number;

  startDate: string;

  endDate: string;

  status:
    | "Active"
    | "Expired";

}