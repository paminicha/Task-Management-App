"use client"
import { useState, useMemo, useEffect } from "react"
import { Event } from "@/Data/event"
// import { mockEvents } from "@/Data/mockEvents"
import { fetchEvent, createEvent, updateEvent, deleteEvent } from "../service/event.service"

const STORAGE_KEY = "events"

export function useEvent() {
    const [search, setSearch] = useState("")
    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
    const [searchStartDate, setSearchStartDate] = useState("")
    const [searchEndDate, setSearchEndDate] = useState("")
    const [sort, setSort] = useState<"az" | "newest">("az")

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
        setEvents(JSON.parse(stored))
        }
    }, [])

    // Sync to localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
    }, [events])

    const filteredEvents = useMemo(() => {
        return events.filter(e => {
            const matchSearch = e.title.toLowerCase().includes(search.toLowerCase())
            const matchDate = (searchStartDate ? e.start >= searchStartDate : true) &&
                              (searchEndDate ? e.end <= searchEndDate : true)
            return matchSearch && matchDate
        })
    },
    [events, search, searchStartDate, searchEndDate])

    const sortedEvents = useMemo(() => {
        return [...filteredEvents].sort((a, b) => {
            if (sort === "az") {
                return a.title.localeCompare(b.title)
            } else {
                return new Date(b.start).getTime() - new Date(a.start).getTime()
            }
        })
    }, [filteredEvents, sort])

    // Add
    const addEvent = async (event: Event) => {
        setEvents(prev => [...prev, event])
        try {
            await createEvent(event)
        } catch (err) {
        // 2. ถ้า error → rollback
        setEvents(prev => prev.filter(e => e.id !== event.id))
        }
    }

    // Update
    const updateEventhandler = async(updated: Event) => {
        const oldevents = [...events]
        setEvents(prev =>
        prev.map(e => (e.id === updated.id ? updated : e))
        )
        try {
            await updateEvent(updated.id, updated)
        } catch (err) {
            setEvents(oldevents)// 2. ถ้า error → rollback
        }
    }

    // Delete
    const deleteEventHandler = async (id: string) => {
        const oldevents = [...events]
        setEvents(prev => prev.filter(e => e.id !== id))
        try {
            await deleteEvent(id)
        } catch (err) {
            setEvents(oldevents)// 2. ถ้า error → rollback
        }
    }

    // Today's Events
    const todayEvents = useMemo(() => {
        const today = new Date().toISOString().split("T")[0]

        return events.filter(e =>
            e.start.startsWith(today)
        )
    }, [events])

    return {
        events: sortedEvents,
        todayEvents,
        addEvent,
        updateEvent: updateEventhandler,
        deleteEvent: deleteEventHandler,
        setSearch,
        setSearchStartDate,
        setSearchEndDate,
        setSort
    }
}