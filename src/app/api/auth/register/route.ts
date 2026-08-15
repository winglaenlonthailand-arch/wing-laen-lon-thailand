import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { Resend } from "resend";

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
        { status: 400 }
      );
    }

    if (String(password).length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters",
        },
        { status: 400 }
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
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(
      String(password),
      12
    );

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const verificationCodeExpiresAt = new Date(
      Date.now() + 10 * 60 * 1000
    );

    const athleteId =
      "ATH-" + Date.now().toString();

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
        sports: Array.isArray(sports)
          ? sports
          : undefined,
        level: "Beginner",
        xp: 0,
        status: "pending",
      },
    });

    const resendApiKey =
      process.env.RESEND_API_KEY;

    if (!resendApiKey) {
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
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "onboarding@resend.dev";

    /*
     * สร้างลิงก์ยืนยันจาก URL ของเว็บไซต์ที่กำลังใช้งาน
     * รองรับทั้ง localhost และเว็บไซต์จริง
     */
    const origin = new URL(request.url).origin;

    const verifyUrl =
      `${origin}/verify?email=${encodeURIComponent(
        normalizedEmail
      )}&code=${encodeURIComponent(
        verificationCode
      )}`;

    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: fromEmail,
        to: [normalizedEmail],
        subject:
          "WING LAEN LON THAILAND - Verify Your Athlete Passport",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; color: #111827;">

            <h1 style="color: #2563eb; margin-bottom: 8px;">
              Athlete Passport
            </h1>

            <p style="color: #6b7280; margin-top: 0;">
              WING LAEN LON THAILAND
            </p>

            <p>
              Hello <strong>${String(firstName).trim()}</strong>,
            </p>

            <p>
              Thank you for registering with
              <strong>WING LAEN LON THAILAND</strong>.
            </p>

            <p>
              Your Athlete Passport has been created.
              Please verify your email address to activate your account.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a
                href="${verifyUrl}"
                style="
                  display: inline-block;
                  background: #2563eb;
                  color: #ffffff;
                  text-decoration: none;
                  padding: 14px 30px;
                  border-radius: 999px;
                  font-size: 16px;
                  font-weight: bold;
                "
              >
                Verify Email
              </a>
            </div>

            <p style="text-align: center; color: #6b7280;">
              กดปุ่มด้านบนเพื่อยืนยันอีเมลอัตโนมัติ
            </p>

            <p>
              หากไม่สามารถกดปุ่มได้
              สามารถใช้รหัสยืนยัน 6 หลักด้านล่าง:
            </p>

            <div style="
              font-size: 36px;
              font-weight: bold;
              letter-spacing: 8px;
              text-align: center;
              padding: 20px;
              margin: 20px 0;
              background: #f3f4f6;
              border-radius: 12px;
            ">
              ${verificationCode}
            </div>

            <p>
              รหัสยืนยันและลิงก์นี้จะหมดอายุภายใน
              <strong>10 นาที</strong>
            </p>

            <p>
              Athlete ID:
              <strong>${athlete.athleteId}</strong>
            </p>

            <hr style="margin: 30px 0;" />

            <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
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
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Athlete Passport created. Please check your email and click Verify Email.",
      data: {
        id: athlete.id,
        athleteId: athlete.athleteId,
        firstName: athlete.firstName,
        lastName: athlete.lastName,
        email: athlete.email,
        emailVerified: athlete.emailVerified,
        emailId: emailData?.id ?? null,
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
      { status: 500 }
    );
  }
}