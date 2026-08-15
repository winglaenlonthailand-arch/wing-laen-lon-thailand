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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, verificationCode } = body;

    if (!email || !verificationCode) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and verification code are required",
        },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email)
      .trim()
      .toLowerCase();

    const athlete = await prisma.athlete.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (!athlete) {
      return NextResponse.json(
        {
          success: false,
          message: "Athlete not found",
        },
        { status: 404 }
      );
    }

    if (athlete.emailVerified) {
      return NextResponse.json({
        success: true,
        message: "Email is already verified",
      });
    }

    if (!athlete.verificationCode) {
      return NextResponse.json(
        {
          success: false,
          message: "Verification code not found",
        },
        { status: 400 }
      );
    }

    if (
      athlete.verificationCodeExpiresAt &&
      athlete.verificationCodeExpiresAt < new Date()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Verification code has expired",
        },
        { status: 400 }
      );
    }

    if (
      String(verificationCode).trim() !==
      String(athlete.verificationCode).trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid verification code",
        },
        { status: 400 }
      );
    }

    const updatedAthlete = await prisma.athlete.update({
      where: {
        id: athlete.id,
      },
      data: {
        emailVerified: true,
        verificationCode: null,
        verificationCodeExpiresAt: null,
        status: "active",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
      data: {
        athleteId: updatedAthlete.athleteId,
        email: updatedAthlete.email,
        emailVerified: updatedAthlete.emailVerified,
        status: updatedAthlete.status,
      },
    });
  } catch (error) {
    console.error("VERIFY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Email verification failed",
      },
      { status: 500 }
    );
  }
}