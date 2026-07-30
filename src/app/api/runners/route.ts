import { NextResponse } from "next/server";
import { runners } from "@/data/mock";

export async function GET() {
  return NextResponse.json(runners);
}