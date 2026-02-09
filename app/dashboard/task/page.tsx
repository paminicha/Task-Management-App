"use client"
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import TaskDetail from "@/components/task/TaskDetail";
import TaskItem from "@/components/task/TaskItem";
import { useState } from "react"

type Task = {
  id: number
  title: string
  progress: number
  note: string
  time: string
  date: string
  priority: string
  description: string
  type: string
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Write Report",
    progress: 89,
    note: "Notes",
    time: "08.00-09.00",
    date: "30/12/26",
    priority: "High",
    description: "Finish company report",
    type: "work"
  },
  {
    id: 2,
    title: "Read A Book",
    progress: 39,
    note: "Notes",
    time: "08.00-09.00",
    date: "30/12/26",
    priority: "Medium",
    description: "Read design book",
    type: "personal"
  },
]


export default function TaskPage() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  return (
    <div>
      <DashboardHeader title='Tasks'></DashboardHeader>
      <div className="px-3 mt-3"> <Button>+ Add Task</Button> </div>

      <Card className="h-120 flex-1 m-3 p-4 flex gap-2">

        <div className="flex-2 overflow-y-auto space-y-3 pr-2">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              {...task}
              isActive={selectedTask?.id === task.id}
              onClick={() => setSelectedTask(task)}
            />
          ))}
          {/* <TaskItem title="Write Report" progress={89} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
          <TaskItem title="Read a Book" progress={39} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
          <TaskItem title="Email Catch Up Summary" progress={0} note="note... .... ... .. .. ...... .." time="14.00-15.00" date="30/01/26" priority=""/>
          <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
          <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
          <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
          <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/> */}
        </div>

        <div className="flex-3 pr-2">
          <TaskDetail task={selectedTask} />
        </div>

      </Card>

    </div>
  );
}
