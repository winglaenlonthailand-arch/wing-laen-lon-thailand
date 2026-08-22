import { PartnerCampaign } from "@/types/partnerCampaign";

export const partnerCampaigns: PartnerCampaign[] = [
  {
    id: 1,
    partnerName: "Runner Pro Shoes",
    category: "Sports",
    position: "Homepage Banner",
    durationDays: 30,
    startDate: "2026-08-01",
    endDate: "2026-08-30",
    status: "Active",
    imageUrl: "/partners/runner-pro-shoes.png",
    description:
      "รองเท้าวิ่งสำหรับนักกีฬาและนักวิ่งทั่วประเทศไทย",
  },
  {
    id: 2,
    partnerName: "Healthy Energy Drink",
    category: "Health",
    position: "Partner Carousel",
    durationDays: 15,
    startDate: "2026-08-05",
    endDate: "2026-08-19",
    status: "Pending",
    imageUrl: "/partners/healthy-drink.png",
    description:
      "เครื่องดื่มสุขภาพสำหรับเติมพลังนักวิ่ง",
  },
  {
    id: 3,
    partnerName: "Local Running Community",
    category: "Community",
    position: "Event Sponsor",
    durationDays: 60,
    startDate: "2026-09-01",
    endDate: "2026-10-30",
    status: "Draft",
    imageUrl: "/partners/community.png",
    description:
      "พันธมิตรชุมชนและกิจกรรมการวิ่งระดับจังหวัด",
  },
];