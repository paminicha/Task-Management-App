"use client"

import { useState } from "react"
import dayjs from "dayjs"
import { Task } from "@/app/Data/task"



type Props = {
  tasks: Task[]
  // onClose: () => void
  // onSave: (task: Task) => void
}

const categoryColorMap: Record<string, string> = {
  work: "bg-cyan-200",
  family: "bg-green-200",
  personal: "bg-purple-200",
  friend: "bg-yellow-200",
  reminder: "bg-red-200",
}


export default function Calendar( {tasks} : Props) {

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

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
  // console.log(tasks)

  // const categoryColorMap = mockCateColor.reduce((acc, item) => {
  //   acc[item.category.toLowerCase()] = item.color
  //   return acc
  // }, {} as Record<string, string>)

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
                {tasks
                .filter(task => {
                  const start = dayjs(task.startDate)
                  const end = dayjs(task.endDate)                 

                  return (
                    day.isSame(start, "day") ||
                    day.isSame(end, "day") ||
                    (day.isAfter(start, "day") && day.isBefore(end, "day"))
                  )
                })
                .map(task => (
                  <div
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`text-xs rounded px-1 truncate cursor-pointer hover:opacity-80
                      ${categoryColorMap[task.category.toLowerCase()] || "bg-gray-200"}
                    `}
                  >
                    {task.startTime} {task.title}
                    
                  </div>
                  
                  
                ))}
                {/* {tasks
                  .filter(e =>
                    day.isSame(e.startDate) ||
                    (day.isAfter(e.startDate) && day.isBefore(e.endDate)) ||
                    day.isSame(e.endDate)
                  )
                  .map(e => (
                    <div
                      key={e.id}
                      className={`text-xs rounded px-1 truncate ${categoryColorMap[e.category.toLowerCase()]}`}
                    >
                      {e.title}
                    </div> 
                  ))}*/}
                  
              </div>
            </div>
          )
        })}
      </div>

      {/* modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg relative">
            
            <button
              onClick={() => setSelectedTask(null)}
              className="absolute top-2 right-3"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold">
              {selectedTask.title}
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              {selectedTask.startDate} {selectedTask.startTime}
              {" - "}
              {selectedTask.endDate} {selectedTask.endTime}
            </p>

            <p className="mt-3 text-sm">
              {selectedTask.description}
            </p>

            <div className="flex justify-between mt-4 text-xs">
              <span>Priority: {selectedTask.priority}</span>
              <span>Status: {selectedTask.status}</span>
            </div>

            <div
              className={`mt-3 inline-block px-2 py-1 text-xs rounded
                ${categoryColorMap[selectedTask.category.toLowerCase()]}
              `}
            >
              {selectedTask.category}
            </div>

            {selectedTask.note && (
              <p className="mt-3 text-sm text-gray-500">
                Note: {selectedTask.note}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
