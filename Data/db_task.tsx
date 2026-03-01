import { Task } from "@/Data/task"
import { mockTasks } from "./mockTasks"

let tasks: Task[] = [...mockTasks]

export const db_task = {
  get: () => [...tasks],

  create: (task: Omit<Task, "id">) => {
    const newTask = { ...task, id: crypto.randomUUID() }
    tasks.push(newTask)
    return task
  },

  update: (updated: Task) => {
    const index = tasks.findIndex(t => t.id === updated.id)
    if (index === -1) throw new Error("Task not found")

    tasks[index] = updated
    return updated
  },

  delete: (id: string) => {
    tasks = tasks.filter(t => t.id !== id)
  },

  getById: (id: string) => {
  return tasks.find(t => t.id === id)
}
}