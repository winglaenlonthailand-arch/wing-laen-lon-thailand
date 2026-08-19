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
    const contributionId =
      request.nextUrl.searchParams.get("contributionId");

    const recognitions = await prisma.recognition.findMany({
      where: {
        ...(athleteId ? { athleteId } : {}),
        ...(contributionId ? { contributionId } : {}),
      },
      include: {
        athlete: true,
        contribution: {
          include: {
            community: true,
          },
        },
      },
      orderBy: {
        awardedAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      recognitions,
    });
  } catch (error) {
    console.error("Recognition GET error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to load recognitions",
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
      contributionId,
      recognitionType,
      title,
      description,
      awardedBy,
      metadata,
    } = body;

    if (
      !athleteId ||
      !contributionId ||
      !recognitionType ||
      !title
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const contribution = await prisma.contribution.findUnique({
      where: {
        id: contributionId,
      },
    });

    if (!contribution) {
      return NextResponse.json(
        {
          success: false,
          error: "Contribution not found",
        },
        { status: 404 }
      );
    }

    if (contribution.athleteId !== athleteId) {
      return NextResponse.json(
        {
          success: false,
          error: "Athlete does not match contribution",
        },
        { status: 400 }
      );
    }

    if (contribution.status !== "VERIFIED") {
      return NextResponse.json(
        {
          success: false,
          error: "Contribution must be verified before recognition",
        },
        { status: 400 }
      );
    }

    const recognition = await prisma.recognition.create({
      data: {
        athleteId,
        contributionId,
        recognitionType,
        title,
        description: description || null,
        awardedBy: awardedBy || null,
        metadata: metadata || null,
      },
      include: {
        athlete: true,
        contribution: {
          include: {
            community: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        recognition,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Recognition POST error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create recognition",
      },
      { status: 500 }
    );
  }
}