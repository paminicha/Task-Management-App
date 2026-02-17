export type TaskStatus = "Todo" | "Doing" | "Done"

export type TaskPriority = "low" | "medium" | "high"

export type Task = {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  progress: number
  startDate: string
  endDate: string
  startTime: string,
  endTime: string,
  note?: string
  category?: string
}
