"use client"
import TaskItem from "../task/TaskItem"
import { Card } from "../ui/Card"
import { Task } from "@/Data/task"
import AddTaskModal from "../task/AddTaskModal"

import { useState } from "react";

type Props = {
  tasks: Task[]
  addTask: (task: Task) => void
  update: (updatedTask: Task) => void
}

export default function TodayTaskList({ tasks , addTask, update}: Props) {

  const [isAddOpen, setIsAddOpen] = useState(false)

  tasks = tasks.filter(t => {
    return t.progress !== 100
  })
  // setTasks(prev => prev.filter(t => t.progress !== 100))
  
  return (
    <Card className="h-100 pl-2 flex flex-col">

      <div className="flex justify-between p-2">
        <h3 className="font-semibold">Today Tasks</h3>
        <button className="w-8 h-8 rounded-full btn-primary"
          onClick={() => setIsAddOpen(true)}
        >+</button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {tasks.map( task => (
          <TaskItem key={task.id}
                task={task}
                isActive={false}
                onClick={() => null}
                update={update}/>
        ))}
        {/* <TaskItem title="Write Report" progress={89} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
        <TaskItem title="Read a Book" progress={39} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
        <TaskItem title="Email Catch Up Summary" progress={0} note="note... .... ... .. .. ...... .." time="14.00-15.00" date="30/01/26" priority=""/>
        <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
        <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/> */}
      </div>
      {isAddOpen && (
              <AddTaskModal
                onClose={() => setIsAddOpen(false)}
                onSave={(newTask) => {
                  addTask(newTask)
                  setIsAddOpen(false)
                }}
              />
            )}
    </Card>
  )
}
