import { NextRequest, NextResponse } from "next/server";
import {
  deleteAuthSession,
  SESSION_COOKIE,
} from "@/lib/auth-session";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get(SESSION_COOKIE)?.value;

    if (token) {
      await deleteAuthSession(token);
    }

    const response = NextResponse.json({
      success: true,
      message: "Logout successful",
    });

    response.cookies.delete(SESSION_COOKIE);

    return response;
  } catch (error) {
    console.error("LOGOUT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Logout failed",
      },
      { status: 500 }
    );
  }
}