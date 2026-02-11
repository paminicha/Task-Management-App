// Home page
import Image from "next/image";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DateCard from "@/components/dashboard/DateCard";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import ReminderCard from "@/components/dashboard/ReminderCard";
import TodayTaskList from "@/components/dashboard/TodayTaskCard";
import WeeklyCard from "@/components/dashboard/WeeklyCard";
import GoalCard from "@/components/dashboard/GoalCard";
import GoalRoutineCard from "@/components/dashboard/GoalRoutineCard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader title="Tasks Management Overview" />

      {/* Stats Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3">
          <DateCard date={new Date()} />
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatCard title="Complete" value="3/10" />
          <StatCard title="In Progress" value="2/10" />
          <StatCard title="Waiting" value="5/10" />
        </div>

        <div className="lg:col-span-3 grid">
          <StatCard title="Mood Card" value="5/10" />
        </div>
      </section>

      {/* Main Section */}
      <section className="grid lg:grid-cols-12 gap-3">
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">

          <ChartCard value={84} />
          <ReminderCard title="Reminder" />
        </section>

        <div className="lg:col-span-6">
          <TodayTaskList />
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
