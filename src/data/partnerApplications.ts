export interface PartnerApplication {
  id: number;

  companyName: string;

  category:
    | "Sports"
    | "Health"
    | "Community"
    | "Tourism"
    | "Other";

  contactName: string;

  phone: string;

  email: string;

  website: string;

  description: string;

  status:
    | "Pending"
    | "Review"
    | "Approved"
    | "Rejected"
    | "Expired";

  createdAt: string;

  reviewedAt?: string;
}


export const partnerApplications: PartnerApplication[] = [
  {
    id: 1,

    companyName: "Runner Pro Shoes",

    category: "Sports",

    contactName: "Marketing Team",

    phone: "000-000-0000",

    email: "partner@example.com",

    website: "https://example.com",

    description:
      "รองเท้าวิ่งและอุปกรณ์สำหรับนักกีฬา",

    status: "Pending",

    createdAt: "2026-07-24",
  },


  {
    id: 2,

    companyName: "Healthy Energy Drink",

    category: "Health",

    contactName: "Partner Team",

    phone: "000-000-0000",

    email: "health@example.com",

    website: "https://example.com",

    description:
      "เครื่องดื่มสุขภาพสำหรับนักวิ่ง",

    status: "Approved",

    createdAt: "2026-07-24",

    reviewedAt: "2026-07-24",
  },
];