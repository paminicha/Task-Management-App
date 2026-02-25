import { NextResponse } from "next/server"
import { db } from "@/Data/db"

export async function GET() {
  return NextResponse.json(db.get())
}

export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json(db.create(body))
}