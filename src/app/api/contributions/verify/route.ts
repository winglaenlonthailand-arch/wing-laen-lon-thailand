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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      contributionId,
      communityId,
      verifierId,
      verificationType,
      note,
    } = body;

    if (
      !contributionId ||
      !communityId ||
      !verificationType
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

    if (contribution.communityId !== communityId) {
      return NextResponse.json(
        {
          success: false,
          error: "Community does not match contribution",
        },
        { status: 400 }
      );
    }

    const verification =
      await prisma.contributionVerification.create({
        data: {
          contributionId,
          communityId,
          verifierId: verifierId || null,
          verificationType,
          status: "VERIFIED",
          note: note || null,
          verifiedAt: new Date(),
        },
      });

    await prisma.contribution.update({
      where: {
        id: contributionId,
      },
      data: {
        status: "VERIFIED",
      },
    });

    return NextResponse.json(
      {
        success: true,
        verification,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Contribution verification error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Failed to verify contribution",
      },
      { status: 500 }
    );
  }
}