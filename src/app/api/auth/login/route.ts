import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { createAuthSession, SESSION_COOKIE } from "@/lib/auth-session";

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

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    const athlete = await prisma.athlete.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (!athlete) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    if (!athlete.passwordHash) {
      return NextResponse.json(
        {
          success: false,
          message: "Password is not configured",
        },
        { status: 401 }
      );
    }

    const passwordValid = await bcrypt.compare(
      String(password),
      athlete.passwordHash
    );

    if (!passwordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    if (!athlete.emailVerified) {
      return NextResponse.json(
        {
          success: false,
          message: "Please verify your email first",
          requiresVerification: true,
          athleteId: athlete.athleteId,
        },
        { status: 403 }
      );
    }

    const session = await createAuthSession(athlete.id);

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      data: {
        id: athlete.id,
        athleteId: athlete.athleteId,
        firstName: athlete.firstName,
        lastName: athlete.lastName,
        nickname: athlete.nickname,
        email: athlete.email,
        emailVerified: athlete.emailVerified,
        level: athlete.level,
        xp: athlete.xp,
        status: athlete.status,
      },
    });

    response.cookies.set({
      name: SESSION_COOKIE,
      value: session.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: session.expiresAt,
    });

    return response;
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
      },
      { status: 500 }
    );
  }
}