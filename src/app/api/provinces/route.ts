import { NextResponse } from "next/server";
import { provinces } from "@/data/mock";

export async function GET() {
  return NextResponse.json(provinces);
}
