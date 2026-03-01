"use client"
import { useState } from "react"
import { Task } from "@/Data/task"

type Props = {
  task: Task
  onClose: () => void
  onSave: (task: Task) => void
}

export default function EditTaskProgressModal({ task, onClose, onSave }: Props) {

  const [title, setTitle] = useState(task.title);
  const [progress, setProgress] = useState(task.progress?.toString() || "")

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start md:items-center overflow-y-auto">

    <div className="
      w-full 
      h-screen md:h-auto
      md:max-h-[90vh]
      max-w-3xl 
      bg-white 
      rounded-none md:rounded-2xl 
      shadow-xl 
      p-6 
      overflow-y-auto
    ">

      <h2 className="text-xl font-semibold mb-6">Edit Task</h2>

      {/* CONTENT */}
      <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Title - full width */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm font-medium">Task Title</label>
              <input
                className="border w-full p-2 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Progress */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Progress (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                className="border w-full p-2 rounded-lg"
                value={progress}
                onChange={(e) => {
                  const value = Math.min(100, Math.max(0, Number(e.target.value)))
                  setProgress(value.toString())
                }}
              />
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              className="px-4 py-2 text-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              onClick={() => {
                onSave({
                  ...task,
                  progress: Number(progress) || 0,
                  
                })
              }}
            >
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
