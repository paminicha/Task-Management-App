import { NextResponse } from "next/server"
import { db } from "@/Data/db"

export async function PUT(req: Request) {
  const body = await req.json()
  return NextResponse.json(db.update(body))
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  db.delete(params.id)
  return NextResponse.json({ success: true })
}