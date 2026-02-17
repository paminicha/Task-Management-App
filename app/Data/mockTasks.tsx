import { Task } from "./task"

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Write Report",
    description: "Finish company report",
    status: "Doing",
    priority: "high",
    progress: 80,
    startDate: "2026-01-30",
    endDate: "2026-01-30",
    startTime: "08:00",
    endTime: "09:00",
    category: "work",
    note: "Note1"
  },
  {
    id: "2",
    title: "Read A Book",
    description: "Read UX design book",
    status: "Todo",
    priority: "medium",
    progress: 30,
    startDate: "2026-01-30",
    endDate: "2026-01-30",
    startTime: "20:00",
    endTime: "21:00",
    category: "personal",
  },
  {
    id: "3",
    title: "Workout",
    status: "Done",
    priority: "low",
    progress: 100,
    startDate: "2026-01-29",
    endDate: "2026-01-29",
    startTime: "18:00",
    endTime: "19:00",
    category: "health",
  },
]
