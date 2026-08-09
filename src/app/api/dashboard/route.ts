import { NextResponse } from "next/server";

export async function GET() {
  const dashboard = {
    totalRunners: 4350,
    activeProvinces: 3,
    totalEvents: 25,
    totalDistance: "277000 km",
    status: "AI ENGINE READY",
  };

  return NextResponse.json(dashboard);
}
