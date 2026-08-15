import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
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

    const email = String(body.email || "")
      .trim()
      .toLowerCase();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    const athlete = await prisma.athlete.findUnique({
      where: {
        email,
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
      return NextResponse.json(
        {
          success: false,
          message: "Email is already verified",
        },
        { status: 400 }
      );
    }

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const verificationCodeExpiresAt = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await prisma.athlete.update({
      where: {
        id: athlete.id,
      },
      data: {
        verificationCode,
        verificationCodeExpiresAt,
      },
    });

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "onboarding@resend.dev";

    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject:
          "WING LAEN LON THAILAND - New Email Verification Code",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px;">
            <h1 style="color: #2563eb;">
              Athlete Passport
            </h1>

            <p>
              Hello ${athlete.firstName},
            </p>

            <p>
              Your new email verification code is:
            </p>

            <div style="font-size: 36px; font-weight: bold; letter-spacing: 8px; text-align: center; padding: 20px; margin: 20px 0; background: #f3f4f6; border-radius: 12px;">
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

            <p style="color: #6b7280; font-size: 14px;">
              WING LAEN LON THAILAND<br />
              Thailand National Athlete Passport Platform
            </p>
          </div>
        `,
      });

    if (emailError) {
      console.error(
        "RESEND VERIFICATION EMAIL ERROR:",
        emailError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Verification code was generated but email could not be sent",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "A new verification code has been sent to your email",
      data: {
        athleteId: athlete.athleteId,
        email: athlete.email,
        emailId: emailData?.id ?? null,
        expiresAt: verificationCodeExpiresAt,
      },
    });
  } catch (error) {
    console.error(
      "RESEND VERIFICATION ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to resend verification code",
      },
      { status: 500 }
    );
  }
}