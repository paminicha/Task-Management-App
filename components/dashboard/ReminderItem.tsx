import React from 'react'

function ReminderItem({title, time}: {title: string, time: string}) {
  return (
    <div className="bg-gray-100 px-2 rounded-xl shadow-sm">
        <h3 className="font-semibold text-gray-800">{time}</h3>
        <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
  )
}

export default ReminderItem