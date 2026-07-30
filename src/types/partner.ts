export interface PartnerApplication {
  id?: string;

  companyName: string;

  category:
    | "sports"
    | "health"
    | "community";

  contactName: string;

  phone: string;

  email: string;

  website?: string;

  detail?: string;

  status:
    | "Pending"
    | "Review"
    | "Approved"
    | "Active"
    | "Expired"
    | "Archive";

  campaign?: {
    position:
      | "Homepage Banner"
      | "Partner Carousel"
      | "Event Sponsor"
      | "Runner Passport Sponsor"
      | "AI Platform Sponsor";

    startDate: string;

    endDate: string;

    duration:
      | "15 Days"
      | "30 Days"
      | "60 Days"
      | "90 Days";

  };
}