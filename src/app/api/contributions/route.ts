import { NextRequest, NextResponse } from "next/server";
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

export async function GET(request: NextRequest) {
  try {
    const athleteId = request.nextUrl.searchParams.get("athleteId");
    const communityId = request.nextUrl.searchParams.get("communityId");

    const contributions = await prisma.contribution.findMany({
      where: {
        ...(athleteId ? { athleteId } : {}),
        ...(communityId ? { communityId } : {}),
      },
      include: {
        community: true,
        athlete: true,
        verifications: true,
        recognitions: true,
      },
      orderBy: {
        activityDate: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      contributions,
    });
  } catch (error) {
    console.error("Contribution GET error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to load contributions",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      athleteId,
      communityId,
      activityType,
      title,
      description,
      activityDate,
      location,
      evidence,
    } = body;

    if (
      !athleteId ||
      !communityId ||
      !activityType ||
      !title ||
      !activityDate
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const contribution = await prisma.contribution.create({
      data: {
        athleteId,
        communityId,
        activityType,
        title,
        description,
        activityDate: new Date(activityDate),
        location,
        evidence,
        status: "SELF_REPORTED",
      },
      include: {
        community: true,
        athlete: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        contribution,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contribution POST error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create contribution",
      },
      { status: 500 }
    );
  }
}