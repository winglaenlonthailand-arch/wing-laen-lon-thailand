import { NextResponse } from "next/server";
import { runners } from "@/data/mock";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const runner = runners.find((r) => r.id === id);

  if (!runner) {
    return NextResponse.json(
      { message: "Runner not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(runner);
}