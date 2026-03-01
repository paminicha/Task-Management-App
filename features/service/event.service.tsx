// task.service.ts
import { Event } from "@/Data/event"

const BASE_URL = "/api/events"

export async function fetchEvent(): Promise<Event[]> {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error("Failed to fetch events")
  return res.json()
}

export async function createEvent(event: Event): Promise<Event> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event)
  })

  if (!res.ok) throw new Error("Failed to create event")
  return res.json()
}

export async function updateEvent(id: string, event: Event): Promise<Event> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event)
  })

  if (!res.ok) throw new Error("Failed to update event")
  return res.json()
}

export async function deleteEvent(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  })

  if (!res.ok) throw new Error("Failed to delete event")
}