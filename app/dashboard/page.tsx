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
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader title='Tasks Management Overview'></DashboardHeader>
      <div className="grid grid-cols-20 gap-2">

        {/* Stats */}
        <div className="col-span-4 grid grid-cols-1">
          <DateCard date={new Date()} />
        </div>
        <div className="col-span-10 grid grid-cols-3 gap-2">
          <StatCard title="Complete" value="3/10" />
          <StatCard title="In Progress" value="2/10" />
          <StatCard title="Waiting" value="5/10" />
        </div>
        <div className="col-span-6 grid grid-cols-1">
          <StatCard title="Mood Card" value="5/10" />
          </div>

        {/* Progress + Tasks */}
        <div className="col-span-4 grid grid-cols-1 gap-2">
          <ChartCard value={84}/>
          <ReminderCard title="Reminder" />
        </div>

        <div className="col-span-10 grid grid-cols-1 gap-2">
          <TodayTaskList />
        </div>

        <div className="col-span-6 grid grid-cols-1">
          <WeeklyCard/>
        </div>

        {/* Goals */}
        <div className="col-span-20 grid grid-cols-2 gap-2">
          <GoalCard/>
          <GoalRoutineCard/>
        </div>
      </div>

    </div>
  );
}
