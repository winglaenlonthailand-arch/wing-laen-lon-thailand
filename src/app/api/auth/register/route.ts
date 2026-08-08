import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      nickname,
      email,
      sports,
    } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Required information missing",
        },
        {
          status: 400,
        }
      );
    }

    const athleteId = "ATH-" + Date.now();

    const athlete = await prisma.athlete.create({
      data: {
        athleteId,
        firstName,
        lastName,
        nickname: nickname || null,
        email,
        sports: sports || null,
        level: "Beginner",
        xp: 0,
        status: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Athlete Passport Registration Created",
      data: athlete,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
      },
      {
        status: 500,
      }
    );
  }
}