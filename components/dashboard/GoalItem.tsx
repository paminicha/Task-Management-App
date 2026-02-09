import React from 'react'

function GoalItem({title, goal_note}: {title: string, goal_note: string}) {
  return (
    <div className="w-32 shrink-0 bg-gray-50 p-2 rounded-xl shadow-sm ">
      <div>
        <h4 className="font-semibold text-gray-600 text-wrap"> {title} </h4>
        <p className="mt-1 text-xs text-gray-400"> {goal_note} </p>
      </div>

      <div className="mt-2 flex justify-end">
        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-black focus:ring-0" />
      </div>
    </div>
  )
}

export default GoalItem
