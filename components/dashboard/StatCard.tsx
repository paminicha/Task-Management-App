import { Card } from "../ui/Card"

export default function StatCard({ title, value}: { title: string, value: string}) {
  return (
    <Card className="pl-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </Card>
  )
}
