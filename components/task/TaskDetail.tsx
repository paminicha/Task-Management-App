import ProgressLine from "../ui/ProgressLine";

type Task = {
  id: number
  title: string
  progress: number
  note: string
  time: string
  date: string
  priority: string
  description?: string
  type: string
}

type Props = {
  task: Task | null
}

function TaskDetail({ task }: Props) {
  if (!task) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select a task to see details
      </div>
    )
  }

  return (
    <div className="h-full bg-gray-50 rounded-xl shadow-md p-4 flex flex-col">

      <h2 className="text-2xl font-semibold mb-3">{task.title}</h2>

      <div className="space-y-3 text-gray-600 text-sm flex-1 font-medium">
        <div>
          <p>Duration: {task.date}</p>
          <p>Time: {task.time}</p>
        </div>

        <p><span >Priority:</span> {task.priority}</p>
        <p><span >Type:</span> {task.type}</p>

        <div>
          <p >Description:</p>
          <p className="text-gray-500">{task.description || "-"}</p>
        </div>

        <div>
          <p >Notes:</p>
          <p className="text-gray-500">{task.note}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-sm font-medium mb-1">Status:</p>
          <ProgressLine progress={task.progress} />
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-amber-400 text-white hover:bg-amber-500">
            Edited
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-red-400 text-white hover:bg-red-500">
            Delete
          </button>
        </div>
      </div>

    </div>
  )
}

export default TaskDetail