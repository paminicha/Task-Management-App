import React from 'react'
import { Card } from "../ui/Card"
import ReminderItem from './ReminderItem'

function ReminderCard({title}: {title: string}) {
  return (
    <Card className="lg:h-44 flex flex-col">
        <h3 className="font-semibold pl-2">{title}</h3>
        <div className="flex-1 overflow-y-auto space-y-2 pr-2">
            <ReminderItem title='Team Meeting' time='13.30'/>
            <ReminderItem title='Christmas Perty' time='19.30'/>
            <ReminderItem title='Get the card from Pround' time='19.30'/>
        </div>
      
    </Card>
  )
}

export default ReminderCard