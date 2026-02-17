"use client"
import { useState, useMemo } from "react"
import { Task } from "../Data/task"
import { mockTasks } from "../Data/mockTasks"

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<string>("all")

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchStatus =
        status === "all" ? true : task.status === status

      return matchSearch && matchStatus
    })
  }, [tasks, search, status])

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task])
  }

  const updateTask = (updated: Task) => {
    setTasks(prev =>
      prev.map(t => (t.id === updated.id ? updated : t))
    )
    setSelectedTask(updated)
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
    setSelectedTask(null)
  }

  return {
    tasks: filteredTasks,
    rawTasks: tasks,
    selectedTask,
    setSelectedTask,
    search,
    setSearch,
    status,
    setStatus,
    addTask,
    updateTask,
    deleteTask,
  }
}
