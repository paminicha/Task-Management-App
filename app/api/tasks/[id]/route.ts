import { NextResponse } from "next/server"
import { db_task } from "@/Data/db_task"

export async function PUT(req: Request) {
  const body = await req.json()
  return NextResponse.json(db_task.update(body))
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  db_task.delete(params.id)
  return NextResponse.json({ success: true })
}