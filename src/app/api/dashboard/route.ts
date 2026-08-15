import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const runtime = "nodejs";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({
  adapter,
});

export async function GET() {
  try {
    const totalRunners = await prisma.athlete.count({
      where: {
        status: "active",
      },
    });

    return NextResponse.json({
      totalRunners,
      activeProvinces: 0,
      totalEvents: 0,
      totalDistance: "0 km",
      status: "AI ENGINE READY",
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Dashboard data failed",
      },
      { status: 500 }
    );
  }
}