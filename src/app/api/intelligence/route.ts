import { NextResponse } from "next/server";

export async function GET() {
  const intelligence = {
    topProvince: "เธเธฃเธธเธเน€เธ—เธเธกเธซเธฒเธเธเธฃ",
    fastestGrowingProvince: "เธเนเธฒเธ",
    activeChallenge: "Thailand Running Challenge 2027",
    aiRecommendation:
      "Increase community events and runner engagement",
  };

  return NextResponse.json(intelligence);
}
