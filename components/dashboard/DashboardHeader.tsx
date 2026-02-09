export default function DashboardHeader({title}: {title:string}) {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold p-3">{title}</h1>

      <div className="flex gap-3">
        <input
          className="px-4 py-2 border shadow-sm rounded-lg w-72"
          placeholder="Search..."
        />

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
