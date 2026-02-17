"use client"

import { useTasks } from "@/app/hooks/useTask"

type Props = {
  title:string, 
  setSearch:(value: string)=>void, 
  search:string, 
  setStatus:(value: string)=>void
}

export default function DashboardHeader({title, setSearch, search, setStatus}: Props) {
    
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold p-3">{title}</h1>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-2 mb-3 px-3">
        <input
          className="px-4 py-2 border rounded-lg shadow-sm w-full sm:w-[450px]"
          placeholder="Search task..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded-lg"
          onChange={e => setStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>


        <select className="px-3 py-2 border rounded-lg">
          <option>All Task Category</option>
          <option>Works</option>
          <option>Family</option>
          <option>Personal</option>
        </select>

        <input type="date" className="px-3 py-2 border rounded-lg" />
        <input type="date" className="px-3 py-2 border rounded-lg" />

      </div>

    </div>
  )
}
