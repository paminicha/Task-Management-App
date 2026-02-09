
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Calendar from "@/components/calendar/Calendar";


export default function CalendarPage() {
  return (
    <div>
      <DashboardHeader title='Calendar'></DashboardHeader>

      <Card className="flex-1 m-3 p-4 flex gap-2">
        <Calendar/>

      </Card>

    </div>
  );
}
