import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { getCurrentAthlete } from "@/lib/running-auth";

export const runtime = "nodejs";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({ adapter });

export async function POST(request: NextRequest) {
  try {
    const athlete = await getCurrentAthlete();

    if (!athlete) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const {
      sport,
      activityDate,
      distance,
      duration,
      pace,
      averageSpeed,
      elevationGain,
      gpsRoute,
      source = "MANUAL",
      verificationStatus = "PENDING",
      externalProvider,
      externalActivityId,
      metadata,
    } = body;

    if (!sport) {
      return NextResponse.json(
        { success: false, error: "sport is required" },
        { status: 400 }
      );
    }

    if (!activityDate) {
      return NextResponse.json(
        { success: false, error: "activityDate is required" },
        { status: 400 }
      );
    }

    if (
      typeof distance !== "number" ||
      !Number.isFinite(distance) ||
      distance <= 0
    ) {
      return NextResponse.json(
        { success: false, error: "distance must be greater than 0" },
        { status: 400 }
      );
    }

    if (
      typeof duration !== "number" ||
      !Number.isInteger(duration) ||
      duration <= 0
    ) {
      return NextResponse.json(
        { success: false, error: "duration must be a positive integer" },
        { status: 400 }
      );
    }

    const parsedActivityDate = new Date(activityDate);

    if (Number.isNaN(parsedActivityDate.getTime())) {
      return NextResponse.json(
        { success: false, error: "Invalid activityDate" },
        { status: 400 }
      );
    }

    if (externalProvider && externalActivityId) {
      const existingActivity =
        await prisma.runningActivity.findFirst({
          where: {
            externalProvider,
            externalActivityId,
          },
        });

      if (existingActivity) {
        return NextResponse.json(
          {
            success: false,
            error: "Activity already exists",
            activityId: existingActivity.id,
          },
          { status: 409 }
        );
      }
    }

    const activity = await prisma.runningActivity.create({
      data: {
        athleteId: athlete.id,
        sport,
        activityDate: parsedActivityDate,
        distance,
        duration,
        pace,
        averageSpeed,
        elevationGain,
        gpsRoute,
        source,
        verificationStatus,
        externalProvider,
        externalActivityId,
        metadata,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Running activity recorded successfully",
        activity,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Running activity API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to record running activity",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const athlete = await getCurrentAthlete();

    if (!athlete) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const activities = await prisma.runningActivity.findMany({
      where: {
        athleteId: athlete.id,
      },
      orderBy: {
        activityDate: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      activities,
      count: activities.length,
    });
  } catch (error) {
    console.error("Running activity GET error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to load running activities",
      },
      { status: 500 }
    );
  }
}