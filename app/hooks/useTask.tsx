"use client"
import { useState, useMemo } from "react"
import { Task } from "../Data/task"
import { mockTasks } from "../Data/mockTasks"

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<string>("All")
  const [category, setCategory] = useState<string>("All Task Category")

  const filteredTasks = useMemo(() => { //คำนวณค่าใหม่ “เฉพาะตอน dependency เปลี่ยน”
    return tasks.filter(task => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchStatus =
        status === "All" ? true : task.status === status
      const matchCategory =
        category === "All Task Category" ? true : task.category === category

      return matchSearch && matchStatus && matchCategory //ต้องผ่านทุกเงื่อนไขพร้อมกัน
    })
  }, [tasks, search, status, category]) // dependency 

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
    setCategory,
    addTask,
    updateTask,
    deleteTask,
  }
}
