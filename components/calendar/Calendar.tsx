"use client"

import { useState } from "react"
import dayjs from "dayjs"

type CalendarEvent = {
  id: number
  title: string
  start: string
  end: string
  color: string
}

const events: CalendarEvent[] = [
  { id: 1, title: "Project A", start: "2026-02-01", end: "2026-02-03", color: "bg-cyan-100" },
  { id: 2, title: "Meeting", start: "2026-02-08", end: "2026-02-08", color: "bg-purple-100" },
  { id: 3, title: "Sprint", start: "2026-02-13", end: "2026-02-15", color: "bg-red-100" },
  { id: 4, title: "Release", start: "2026-02-19", end: "2026-02-21", color: "bg-yellow-100" },
  { id: 5, title: "Planning", start: "2026-02-27", end: "2026-02-28", color: "bg-green-100" }
]

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs())

  const startOfMonth = currentMonth.startOf("month")
  const startDate = startOfMonth.startOf("week")
  const endDate = currentMonth.endOf("month").endOf("week")

  const days: dayjs.Dayjs[] = []
  let date = startDate

  while (date.isBefore(endDate)) {
    days.push(date)
    date = date.add(1, "day")
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2">
          <button onClick={() => setCurrentMonth(prev => prev.subtract(1, "month"))}>◀</button>
          <button onClick={() => setCurrentMonth(prev => prev.add(1, "month"))}>▶</button>
        </div>

        <h2 className="font-semibold text-lg">
          {currentMonth.format("MMMM YYYY")}
        </h2>

        <button className="text-xl font-bold">＋</button>
      </div>

      {/* Week Header */}
      <div className="grid grid-cols-7 border-b font-semibold text-center">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
          <div key={day} className="p-2">{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 border-l border-t">
        {days.map((day, idx) => {
          const isCurrentMonth = day.month() === currentMonth.month()
          const isToday = day.isSame(dayjs(), "day")

          return (
            <div
              key={idx}
              className={`min-h-[100px] border-r border-b p-1 relative
                ${!isCurrentMonth ? "text-gray-400" : ""}
                ${isToday ? "bg-slate-200" : ""}
              `}
            >
              <div className="text-sm font-semibold text-right">
                {day.date()}
              </div>

              {/* Events */}
              <div className="space-y-1">
                {events
                  .filter(e =>
                    day.isSame(e.start) ||
                    (day.isAfter(e.start) && day.isBefore(e.end)) ||
                    day.isSame(e.end)
                  )
                  .map(e => (
                    <div
                      key={e.id}
                      className={`text-xs rounded px-1 truncate ${e.color}`}
                    >
                      {e.title}
                    </div>
                  ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
