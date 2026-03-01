import { Event } from "./event"
const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Meeting with Team",
    start: today.toISOString(),
    end: tomorrow.toISOString(),
  },
  {
    id: "2",
    title: "Welcome Party",
    start: today.toISOString(),
    end: tomorrow.toISOString(),
    // start: "2026-03-01T19:00:00Z",
    // end: "2026-03-01T23:59:59Z",
  },
  {
    id: "3",
    title: "Get Card from Proud",
    start: today.toISOString(),
    end: tomorrow.toISOString(),
    // start: "2026-03-15T09:00:00Z",
    // end: "2026-03-15T10:00:00Z",
  },
]
