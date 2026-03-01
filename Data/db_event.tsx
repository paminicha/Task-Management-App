import { Event } from "./event"
import { mockEvents } from "./mockEvents"

let events: Event[] = [...mockEvents]

export const db_event = {
  get: () => [...events],

  create: (event: Omit<Event, "id">) => {
    const newEvent = { ...event, id: crypto.randomUUID() }
    events.push(newEvent)
    return event
  },

  update: (updated: Event) => {
    const index = events.findIndex(t => t.id === updated.id)
    if (index === -1) throw new Error("event not found")

    events[index] = updated
    return updated
  },

  delete: (id: string) => {
    events = events.filter(t => t.id !== id)
  },

  getById: (id: string) => {
  return events.find(t => t.id === id)
}
}