import { NextResponse } from "next/server"
import { db_task } from "@/Data/db_task"

export async function GET() {
  return NextResponse.json(db_task.get())
}

export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json(db_task.create(body))
}