"use client"
import Image from "next/image";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DateCard from "@/components/dashboard/DateCard";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import EventCard from "@/components/dashboard/EventCard";
import TodayTaskList from "@/components/dashboard/TodayTaskCard";
import WeeklyCard from "@/components/dashboard/WeeklyCard";
import GoalCard from "@/components/dashboard/GoalCard";
import GoalRoutineCard from "@/components/dashboard/GoalRoutineCard";
import { useTasks } from "@/features/hooks/useTask";
import { useMemo } from "react"
import { useEvent } from "@/features/hooks/useEvent";

export default function DashboardPage() {
  const {
      tasks,
      selectedTask,
      setSelectedTask,
      search,
      setSearch,
      setStatus, 
      addTask,
      updateTask,
      deleteTask,
      setCategory,
      setPriority,
      setStartDate,
      setEndDate,
      setSort,
    } = useTasks()

  const stats = useMemo(() => {
    const total = tasks.length

    const done = tasks.filter(t => t.status === "Done").length
    const doing = tasks.filter(t => t.status === "Doing").length
    const todo = tasks.filter(t => t.status === "Todo").length

    return { total, done, doing, todo }
  }, [tasks])
  // console.log(stats)

  const totalProgress = useMemo(() => {
    if (tasks.length === 0) return 0

    const sum = tasks.reduce((acc, task) => acc + task.progress, 0)

    return Math.round(sum / tasks.length)
  }, [tasks])
  // console.log(totalProgress)

  const todayTasks = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return tasks.filter(t => {
      const start = new Date(t.startDate)
      const end = new Date(t.endDate)

      return start <= today //&& end >= today
    })
  }, [tasks])

  const {events,
    todayEvents,
    addEvent,
    updateEvent,
    deleteEvent} = useEvent()

  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader title="Tasks Management Overview" setSearch={setSearch} search={search} setStatus={setStatus} setCategory={setCategory}
                    setPriority={setPriority} setStartDate={setStartDate} setEndDate={setEndDate} setSort={setSort} />

      {/* Stats Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3">
          <DateCard date={new Date()} />
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatCard title="Complete" value={`${stats.done}/${stats.total}`} />
          <StatCard title="In Progress" value={`${stats.doing}/${stats.total}`} />
          <StatCard title="Waiting" value={`${stats.todo}/${stats.total}`} />
        </div>

        <div className="lg:col-span-3 grid">
          <StatCard title="Mood Card" value="Good day" />
        </div>
      </section>

      {/* Main Section */}
      <section className="grid lg:grid-cols-12 gap-3">
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">

          <ChartCard value={totalProgress} />
          <EventCard title="Event" events={todayEvents} />
        </section>

        <div className="lg:col-span-6">
          <TodayTaskList tasks={todayTasks} addTask={addTask} update={updateTask}/>
        </div>

        <div className="lg:col-span-3">
          <WeeklyCard />
        </div>
      </section>

      {/* Goals Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <GoalCard />
        <GoalRoutineCard />
      </section>

      
    </div>
  );
}
