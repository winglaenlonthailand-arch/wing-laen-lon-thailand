export type MarketplaceCategory =
  | "Shoes"
  | "Sportswear"
  | "Equipment"
  | "Nutrition"
  | "Health"
  | "Travel";


export type MarketplaceStatus =
  | "Active"
  | "Pending"
  | "Expired";


export interface MarketplaceProduct {

  id: number;

  partnerName: string;

  productName: string;

  category: MarketplaceCategory;

  description: string;

  imageUrl: string;

  productUrl: string;

  status: MarketplaceStatus;

}
