import { Event } from "./event"
import { mockEvents } from "./mockEvents"

let events: Event[] = [...mockEvents]

export const db_event = {
  get: () => events,

  create: (event: Event) => {
    events.push(event)
    return event
  },

  update: (id: string, updated: Event) => {
    events = events.map(e => e.id === id ? updated : e)
    return updated
  },

  delete: (id: string) => {
    events = events.filter(e => e.id !== id)
    return { success: true }
  }
}