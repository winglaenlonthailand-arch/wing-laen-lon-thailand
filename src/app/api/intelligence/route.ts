import { NextResponse } from "next/server";

export async function GET() {
  const intelligence = {
    topProvince: "กรุงเทพมหานคร",
    fastestGrowingProvince: "น่าน",
    activeChallenge: "Thailand Running Challenge 2027",
    aiRecommendation:
      "Increase community events and runner engagement",
  };

  return NextResponse.json(intelligence);
}