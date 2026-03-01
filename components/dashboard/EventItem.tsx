import React from 'react'

interface EventItemProps {
  key: number,
  title: string,
  start: string,
}

function EventItem({key, title, start}: EventItemProps) {
  const startTime = new Date(start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  
  return (
    <div key={key} className="bg-gray-100 px-2 rounded-xl shadow-sm">
        <h3 className="font-semibold text-gray-800">{startTime}</h3>
        <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
  )
}

export default EventItem