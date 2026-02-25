import { Task } from "@/Data/task"

let tasks: Task[] = []

export const db = {
  get: () => tasks,
  create: (task: Task) => {
    tasks.push(task)
    return task
  },
  update: (updated: Task) => {
    tasks = tasks.map(t =>
      t.id === updated.id ? updated : t
    )
    return updated
  },
  delete: (id: string) => {
    tasks = tasks.filter(t => t.id !== id)
  },
  getById: (id: string) => {
  return tasks.find(t => t.id === id)
}
}