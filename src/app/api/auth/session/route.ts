import { NextRequest, NextResponse } from "next/server";
import {
  getAuthSession,
  SESSION_COOKIE,
} from "@/lib/auth-session";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(SESSION_COOKIE)?.value;

    if (!token) {
      return NextResponse.json({
        authenticated: false,
      });
    }

    const session = await getAuthSession(token);

    if (!session) {
      const response = NextResponse.json({
        authenticated: false,
      });

      response.cookies.delete(SESSION_COOKIE);

      return response;
    }

    return NextResponse.json({
      authenticated: true,
      athlete: {
        id: session.athlete.id,
        athleteId: session.athlete.athleteId,
        firstName: session.athlete.firstName,
        lastName: session.athlete.lastName,
        nickname: session.athlete.nickname,
        email: session.athlete.email,
        emailVerified: session.athlete.emailVerified,
        level: session.athlete.level,
        xp: session.athlete.xp,
        status: session.athlete.status,
      },
    });
  } catch (error) {
    console.error("SESSION ERROR:", error);

    return NextResponse.json(
      {
        authenticated: false,
        message: "Session check failed",
      },
      { status: 500 }
    );
  }
}