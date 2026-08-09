export type PartnerCategory =
  | "Sports"
  | "Health"
  | "Community"
  | "Tourism"
  | "Other";


export type PartnerStatus =
  | "Pending"
  | "Review"
  | "Approved"
  | "Rejected"
  | "Expired";


export interface PartnerApplication {

  id: number;

  companyName: string;

  category: PartnerCategory;

  contactName: string;

  phone: string;

  email: string;

  website: string;

  description: string;

  status: PartnerStatus;

  createdAt: string;

  reviewedAt?: string;

}
