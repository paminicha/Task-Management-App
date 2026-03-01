import { NextResponse } from "next/server"
import { db_event } from "@/Data/db_event"

export async function GET() {
  return NextResponse.json(db_event.get())
}

export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json(db_event.create(body))
}