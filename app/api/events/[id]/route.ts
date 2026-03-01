import { NextResponse } from "next/server"
import { db_event } from "@/Data/db_event"

export async function PUT(req: Request) {
  const body = await req.json()
  return NextResponse.json(db_event.update(body))
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  db_event.delete(params.id)
  return NextResponse.json({ success: true })
}