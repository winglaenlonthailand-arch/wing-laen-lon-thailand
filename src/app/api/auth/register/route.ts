import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { Resend } from "resend";

export const runtime = "nodejs";

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
      password,
      sports,
    } = body;

    if (!firstName || !lastName || !email || !password) {
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

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters",
        },
        {
          status: 400,
        }
      );
    }

    const normalizedEmail = String(email)
      .trim()
      .toLowerCase();

    const existingAthlete =
      await prisma.athlete.findUnique({
        where: {
          email: normalizedEmail,
        },
      });

    if (existingAthlete) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already registered",
        },
        {
          status: 409,
        }
      );
    }

    const passwordHash = await bcrypt.hash(
      password,
      12
    );

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const verificationCodeExpiresAt = new Date(
      Date.now() + 10 * 60 * 1000
    );

    const athleteId = "ATH-" + Date.now();

    const athlete = await prisma.athlete.create({
      data: {
        athleteId,
        firstName: String(firstName).trim(),
        lastName: String(lastName).trim(),
        nickname: nickname
          ? String(nickname).trim()
          : null,
        email: normalizedEmail,
        passwordHash,
        emailVerified: false,
        verificationCode,
        verificationCodeExpiresAt,
        sports: sports || null,
        level: "Beginner",
        xp: 0,
        status: "pending",
      },
    });

    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY is missing from environment variables."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Registration was saved, but email service is not configured.",
          data: {
            athleteId: athlete.athleteId,
            email: athlete.email,
          },
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(
      process.env.RESEND_API_KEY
    );

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "onboarding@resend.dev";
return (
      await resend.emails.send({
        from: fromEmail,
        to: [normalizedEmail],
        subject:
          "WING LAEN LON THAILAND - Email Verification",
        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 30px;
            "
          >
            <h1 style="color: #2563eb;">
              Athlete Passport
            </h1>

            <p>
              Hello ${String(firstName).trim()},
            </p>

            <p>
              Thank you for registering with
              <strong>WING LAEN LON THAILAND</strong>.
            </p>

            <p>
              Your email verification code is:
            </p>

            <div
              style="
                font-size: 36px;
                font-weight: bold;
                letter-spacing: 8px;
                text-align: center;
                padding: 20px;
                margin: 20px 0;
                background: #f3f4f6;
                border-radius: 12px;
              "
            >
              ${verificationCode}
            </div>

            <p>
              This verification code will expire in
              <strong>10 minutes</strong>.
            </p>

            <p>
              Athlete ID:
              <strong>${athlete.athleteId}</strong>
            </p>

            <hr style="margin: 30px 0;" />

            <p
              style="
                color: #6b7280;
                font-size: 14px;
              "
            >
              WING LAEN LON THAILAND<br />
              Thailand National Athlete Passport Platform
            </p>
          </div>
        `,
      });

    if (emailError) {
      console.error(
        "RESEND EMAIL ERROR:",
        emailError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Registration was saved, but verification email could not be sent.",
          data: {
            athleteId: athlete.athleteId,
            email: athlete.email,
          },
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Athlete Passport created. Please check your email for the verification code.",
      data: {
        id: athlete.id,
        athleteId: athlete.athleteId,
        firstName: athlete.firstName,
        lastName: athlete.lastName,
        email: athlete.email,
        emailVerified: athlete.emailVerified,
      },
    });
  } catch (error) {
    console.error(
      "REGISTER ERROR:",
      error
    );

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
